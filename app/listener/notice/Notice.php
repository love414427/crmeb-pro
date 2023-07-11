<?php
// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2020 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------
namespace app\listener\notice;

use app\services\message\notice\{
    NoticeSmsService, RoutineTemplateListService, SystemMsgService, WechatTemplateListService
};
use app\services\message\NoticeService;
use app\services\order\StoreOrderCartInfoServices;
use app\services\user\UserServices;
use crmeb\interfaces\ListenerInterface;
use think\facade\Log;

/**
 * 订单创建事件
 * Class Create
 * @package app\listener\order
 */
class Notice implements ListenerInterface
{
    /**
     * @var string[]
     */
    protected $userTypeArray = [
        '0' => 'wechat',
        '1' => 'routine',
        '2' => 'wechat',//收银订单 weixinh5
        '3' => 'wechat',//pc
    ];

    public function handle($event): void
    {
        try {
            [$data, $mark] = $event;
            /** @var NoticeService $NoticeService */
            $NoticeService = app()->make(NoticeService::class);
            /** @var WechatTemplateListService $WechatTemplateList */
            $WechatTemplateList = app()->make(WechatTemplateListService::class);
            /** @var RoutineTemplateListService $RoutineTemplateList */
            $RoutineTemplateList = app()->make(RoutineTemplateListService::class);
            /** @var SystemMsgService $SystemMsg */
            $SystemMsg = app()->make(SystemMsgService::class);
            /** @var  NoticeSmsService $NoticeSms */
            $NoticeSms = app()->make(NoticeSmsService::class);
            /** @var StoreOrderCartInfoServices $orderInfoServices */
            $orderInfoServices = app()->make(StoreOrderCartInfoServices::class);
            /** @var UserServices $UserServices */
            $UserServices = app()->make(UserServices::class);
            $userType = 'wechat';
            if ($mark) {
                $WechatTemplateList->setEvent($mark);
                $SystemMsg->setEvent($mark);
                $NoticeSms->setEvent($mark);
                $RoutineTemplateList->setEvent($mark);
                $NoticeService->setEvent($mark);
                switch ($mark) {
                    //绑定推广关系
                    case 'bind_spread_uid':
                        if (isset($data['spreadUid']) && $data['spreadUid']) {
                            $userType = strtolower($data['user_type'] ?? '');
                            $name = $data['nickname'] ?? '';
                            //站内信
                            $SystemMsg->sendMsg($data['spreadUid'], ['nickname' => $name]);
                            //模板消息公众号模版消息
                            if ($userType == 'wechat') {
                                $WechatTemplateList->sendBindSpreadUidSuccess($data['spreadUid'], $name);
                            }
                            //模板消息小程序订阅消息
                            if ($userType == 'routine') {
                                $RoutineTemplateList->sendBindSpreadUidSuccess($data['spreadUid'], $name);
                            }
                        }
                        break;
                    //支付成功给用户
                    case 'order_pay_success':
                        $pay_price = $data['pay_price'] ?? 0.00;
                        $order_id = $data['order_id'] ?? '';
                        //小票打印 排除付费会员订单
                        if (isset($data['cart_id']) && $data['cart_id']) {
                            $NoticeService->orderPrint($data);
                        }
                        //短信
                        $NoticeSms->sendSms($data['user_phone'], compact('order_id', 'pay_price'), 'PAY_SUCCESS_CODE');
                        $data['total_num'] = isset($data['total_num']) ? $data['total_num'] : 1;
                        $userType = $this->userTypeArray[$data['is_channel'] ?? 0] ?? 'wechat';
                        //站内信
                        $SystemMsg->sendMsg($data['uid'], ['order_id' => $data['order_id'], 'total_num' => $data['total_num'], 'pay_price' => $data['pay_price']]);
                        //模板消息公众号模版消息
                        if ($userType == 'wechat') {
                            $WechatTemplateList->sendOrderPaySuccess($data['uid'], $data);
                        }
                        //模板消息小程序订阅消息
                        if ($userType == 'routine') {
                            $RoutineTemplateList->sendOrderSuccess($data['uid'], $pay_price, $data['order_id']);
                        }
                        break;
                    //发货给用户
                    case 'order_deliver_success':
                        $orderInfo = $data['orderInfo'];
                        $storeTitle = substrUTf8($data['storeName'], 20, 'UTF-8', '');
                        $datas = $data['data'];
                        $service = app()->make(UserServices::class);
                        $nickname = $service->value(['uid' => $orderInfo->uid], 'nickname');
                        //短信
                        $order_id = $orderInfo->order_id;
                        $store_name = $storeTitle;
                        $NoticeSms->sendSms($orderInfo['user_phone'], compact('order_id', 'store_name', 'nickname'), 'DELIVER_GOODS_CODE');
                        //小程序公众号消息
                        $userType = $this->userTypeArray[$orderInfo['is_channel'] ?? 0] ?? 'wechat';
                        $isGive = 0;
                        //站内信
                        $SystemMsg->sendMsg($orderInfo['uid'], ['nickname' => $nickname, 'store_name' => $storeTitle, 'order_id' => $orderInfo['order_id'], 'delivery_name' => $orderInfo['delivery_name'], 'delivery_id' => $orderInfo['delivery_id'], 'user_address' => $orderInfo['user_address']]);
                        //模板消息公众号模版消息
                        if ($userType == 'wechat') {
                            $WechatTemplateList->sendOrderDeliver($orderInfo['uid'], $storeTitle, $orderInfo->toArray(), $datas);
                        }
                        //模板消息小程序订阅消息
                        if ($userType == 'routine') {
                            $RoutineTemplateList->sendOrderPostage($orderInfo['uid'], $orderInfo->toArray(), $storeTitle, $datas, $isGive);
                        }
                        break;
                    //发货快递给用户
                    case 'order_postage_success':
                        $orderInfo = $data['orderInfo'];
                        $storeTitle = substrUTf8($data['storeName'], 20, 'UTF-8', '');
                        $datas = $data['data'];
                        $service = app()->make(UserServices::class);
                        $nickname = $service->value(['uid' => $orderInfo->uid], 'nickname');
                        //短信
                        $order_id = $orderInfo->order_id;
                        $store_name = $storeTitle;
                        $NoticeSms->sendSms($orderInfo['user_phone'], compact('order_id', 'store_name', 'nickname'), 'DELIVER_GOODS_CODE');
                        $userType = $this->userTypeArray[$orderInfo['is_channel'] ?? 0] ?? 'wechat';
                        $isGive = 1;
                        //站内信
                        $smsdata = ['nickname' => $nickname, 'store_name' => $storeTitle, 'order_id' => $orderInfo['order_id'], 'delivery_name' => $orderInfo['delivery_name'], 'delivery_id' => $orderInfo['delivery_id'], 'user_address' => $orderInfo['user_address']];
                        $SystemMsg->sendMsg($orderInfo['uid'], $smsdata);
                        //模板消息公众号模版消息
                        if ($userType == 'wechat') {
                            $WechatTemplateList->sendOrderPostage($orderInfo['uid'], $orderInfo->toArray(), $datas);
                        }
                        //模板消息小程序订阅消息
                        if ($userType == 'routine') {
                            $RoutineTemplateList->sendOrderPostage($orderInfo['uid'], $orderInfo->toArray(), $storeTitle, $datas, $isGive);
                        }
                        break;
                    //确认收货给用户
                    case 'order_takever':
                        $order = is_object($data['order']) ? $data['order']->toArray() : $data['order'];
                        //模板变量
                        $store_name = substrUTf8($data['storeTitle'], 20, 'UTF-8', '');
                        $order_id = $order['order_id'];
                        $NoticeSms->sendSms($order['user_phone'], compact('store_name', 'order_id'), 'TAKE_DELIVERY_CODE');
                        $userType = $this->userTypeArray[$order['is_channel'] ?? 0] ?? 'wechat';
                        //站内信
                        $SystemMsg->sendMsg($order['uid'], ['order_id' => $order['order_id'], 'store_name' => $store_name]);
                        //模板消息公众号模版消息
                        if ($userType == 'wechat') {
                            $WechatTemplateList->sendOrderTakeSuccess($order['uid'], $order, $store_name);
                        }
                        //模板消息小程序订阅消息
                        if ($userType == 'routine') {
                            $RoutineTemplateList->sendOrderTakeOver($order['uid'], $order, $store_name);
                        }
                        break;
                    //改价给用户
                    case 'price_revision':
                        $order = $data['order'];
                        $pay_price = $data['pay_price'];
                        //短信
                        $NoticeSms->sendSms($order['user_phone'], ['order_id' => $order['order_id'], 'pay_price' => $pay_price], 'PRICE_REVISION_CODE');
                        //站内信
                        $SystemMsg->sendMsg($order['uid'], ['order_id' => $order['order_id'], 'pay_price' => $pay_price]);
                        //模板消息
                        $WechatTemplateList->sendPriceRevision($order['uid'], $order);
                        break;
                    //退款成功
                    case 'order_refund':
                        $datas = $data['data'];
                        $order = $data['order'];
                        $userType = $this->userTypeArray[$order['is_channel'] ?? 0] ?? 'wechat';
                        $storeName = $orderInfoServices->getCarIdByProductTitle($order['id'], $order['cart_id']);
                        $storeTitle = substrUTf8($storeName, 20, 'UTF-8', '');
                        //站内信
                        $SystemMsg->sendMsg($order['uid'], ['order_id' => $order['order_id'], 'pay_price' => $order['pay_price'], 'refund_price' => $datas['refund_price']]);
                        //模板消息公众号模版消息
                        if ($userType == 'wechat') {
                            $WechatTemplateList->sendOrderRefundSuccess($order['uid'], $datas, $order);
                        }
                        //模板消息小程序订阅消息
                        if ($userType == 'routine') {
                            $RoutineTemplateList->sendOrderRefundSuccess($order['uid'], $order, $storeTitle);
                        }
                        break;
                    //退款未通过
                    case 'send_order_refund_no_status':
                        $order = $data['orderInfo'];
                        $userType = $this->userTypeArray[$order['is_channel'] ?? 0] ?? 'wechat';
                        $storeName = $orderInfoServices->getCarIdByProductTitle($order['id'], $order['cart_id']);
                        $storeTitle = substrUTf8($storeName, 20, 'UTF-8', '');
                        //站内信
                        $SystemMsg->sendMsg($order['uid'], ['order_id' => $order['order_id'], 'pay_price' => $order['pay_price'], 'store_name' => $storeTitle]);
                        //模板消息公众号模版消息
                        if ($userType == 'wechat') {
                            $WechatTemplateList->sendOrderRefundNoStatus($order['uid'], $order);
                        }
                        //模板消息小程序订阅消息
                        if ($userType == 'routine') {
                            $RoutineTemplateList->sendOrderRefundFail($order['uid'], $order, $storeTitle);
                        }
                        break;
                    //充值余额
                    case 'recharge_success':
                        $order = $data['order'];
                        $now_money = $data['now_money'];
                        //站内信
                        $SystemMsg->sendMsg($order['uid'], ['order_id' => $order['order_id'], 'price' => $order['price'], 'now_money' => $now_money]);
                        //模板消息公众号模版消息
                        $WechatTemplateList->sendRechargeSuccess($order['uid'], $order);
                        //模板消息小程序订阅消息
                        $RoutineTemplateList->sendRechargeSuccess($order['uid'], $order, $now_money);
                        break;
                    //充值退款
                    case 'recharge_order_refund_status':
                        $userType = $data['user_type'] == 'routine' ? 'routine' : 'wechat';
                        $datas = $data['data'];
                        $UserRecharge = $data['UserRecharge'];
                        $now_money = $data['now_money'];
                        //站内信
                        $SystemMsg->sendMsg($UserRecharge['uid'], ['refund_price' => $datas['refund_price'], 'order_id' => $UserRecharge['order_id'], 'price' => $UserRecharge['price']]);
                        //模板消息公众号模版消息
                        if ($userType == 'wechat') {
                            $WechatTemplateList->sendRechargeRefundStatus($UserRecharge['uid'], $datas, $UserRecharge);
                        }
                        //模板消息小程序订阅消息
                        if ($userType == 'routine') {
                            $RoutineTemplateList->sendRechargeSuccess($UserRecharge['uid'], $UserRecharge, $now_money);
                        }
                        break;
                    //积分
                    case 'integral_accout':
                        $order = $data['order'];
                        $order['gain_integral'] = $data['give_integral'];
                        $storeTitle = substrUTf8($data['storeTitle'], 20, 'UTF-8', '');
                        //站内信
                        $SystemMsg->sendMsg($order['uid'], ['order_id' => $order['order_id'], 'store_name' => $storeTitle, 'pay_price' => $order['pay_price'], 'gain_integral' => $data['give_integral'], 'integral' => $data['integral']]);
                        //模板消息公众号模版消息
                        if ($userType == 'wechat') {
                            $WechatTemplateList->sendUserIntegral($order['uid'], $order);
                        }
                        //模板消息小程序订阅消息
                        if ($userType == 'routine') {
                            $RoutineTemplateList->sendUserIntegral($order['uid'], $data['order'], $storeTitle, $data['give_integral'], $data['integral']);
                        }
                        break;
                    //佣金
                    case 'order_brokerage':
                        $brokeragePrice = $data['brokeragePrice'];
                        $goodsName = substrUTf8($data['goodsName'], 20, 'UTF-8', '');
                        $goodsPrice = $data['goodsPrice'];
                        $add_time = $data['add_time'];
                        $userType = $data['userType'];
                        $spread_uid = $data['spread_uid'];
                        //站内信
                        $SystemMsg->sendMsg($spread_uid, ['goods_name' => $goodsName, 'goods_price' => $goodsPrice, 'brokerage_price' => $brokeragePrice]);
                        //模板消息公众号模版消息
                        if ($userType == 'wechat') {
                            $WechatTemplateList->sendOrderBrokerageSuccess($spread_uid, $brokeragePrice, $goodsName, $goodsPrice, $add_time);
                        }
                        //模板消息小程序订阅消息
                        if ($userType == 'routine') {
                            $RoutineTemplateList->sendOrderBrokerageSuccess($spread_uid, $brokeragePrice, $goodsName);
                        }
                        break;
                    //砍价成功
                    case 'bargain_success':
                        $uid = $data['uid'];
                        $bargainInfo = $data['bargainInfo'];
                        $bargainUserInfo = $data['bargainUserInfo'];
                        //站内信
                        $SystemMsg->sendMsg($uid, ['title' => substrUTf8($bargainInfo['title'], 20, 'UTF-8', ''), 'min_price' => $bargainInfo['min_price']]);
                        //模板消息公众号模版消息
                        if ($userType == 'wechat') {
                            $WechatTemplateList->sendBargainSuccess($uid, $bargainInfo, $bargainUserInfo, $uid);
                        }
                        //模板消息小程序订阅消息
                        if ($userType == 'routine') {
                            $RoutineTemplateList->sendBargainSuccess($uid, $bargainInfo, $bargainUserInfo, $uid);
                        }
                        break;
                    //拼团成功
                    case 'order_user_groups_success':
                        $list = $data['list'];
                        $title = substrUTf8($data['title'], 20, 'UTF-8', '');
                        $nickname = $data['nickname'] ?? '';
                        $userType = $this->userTypeArray[$data['user_type'] ?? 0] ?? 'wechat';
                        $url = '/pages/users/order_details/index?order_id=' . $list['order_id'];
                        //站内信
                        $SystemMsg->sendMsg($list['uid'], ['title' => $title, 'nickname' => $nickname, 'count' => $list['people'], 'pink_time' => date('Y-m-d H:i:s', $list['add_time'])]);
                        //模板消息公众号模版消息
                        if ($userType == 'wechat') {
                            $WechatTemplateList->sendOrderPinkSuccess($list['uid'], $list['order_id'], $list['id'], $title);
                        }
                        //模板消息小程序订阅消息
                        if ($userType == 'routine') {
                            $RoutineTemplateList->sendPinkSuccess($list['uid'], $title, $nickname, $list['add_time'], $list['people'], $url);
                        }
                        break;
                    //取消拼团
                    case 'send_order_pink_clone':
                        $uid = $data['uid'];
                        $pink = $data['pink'];
                        $title = substrUTf8($pink['title'], 20, 'UTF-8', '');
                        $userType = $this->userTypeArray[$data['user_type'] ?? 0] ?? 'wechat';
                        //站内信
                        $SystemMsg->sendMsg($uid, ['title' => $title, 'count' => $pink->people]);
                        //模板消息公众号模版消息
                        if ($userType == 'wechat') {
                            $WechatTemplateList->sendOrderPinkClone($uid, $pink, $pink->title);
                        }
                        //模板消息小程序订阅消息
                        if ($userType == 'routine') {
                            $RoutineTemplateList->sendPinkFail($uid, $title, $pink->people, '亲，您的拼团取消，点击查看订单详情', '/pages/order_details/index?order_id=' . $pink->order_id);
                        }
                        break;
                    //拼团失败
                    case 'send_order_pink_fial':
                        $uid = $data['uid'];
                        $pink = $data['pink'];
                        $title = substrUTf8($pink['title'], 20, 'UTF-8', '');
                        $userType = $this->userTypeArray[$data['user_type'] ?? 0] ?? 'wechat';
                        //站内信
                        $SystemMsg->sendMsg($uid, ['title' => $title, 'count' => $pink->people]);
                        //模板消息公众号模版消息
                        if ($userType == 'wechat') {
                            $WechatTemplateList->sendOrderPinkFial($uid, $pink, $pink->title);
                        }
                        //模板消息小程序订阅消息
                        if ($userType == 'routine') {
                            $RoutineTemplateList->sendPinkFail($uid, $title, $pink->people, '亲，您拼团失败，自动为您申请退款，退款金额为：' . $pink->price, '/pages/order_details/index?order_id=' . $pink->order_id);
                        }
                        break;
                    //参团成功
                    case 'can_pink_success':
                        $orderInfo = $data['orderInfo'];
                        $title = substrUTf8($data['title'], 20, 'UTF-8', '');
                        $pink = $data['pink'];
                        $nickname = $UserServices->value(['uid' => $orderInfo['uid']], 'nickname');
                        //站内信
                        $SystemMsg->sendMsg($orderInfo['uid'], ['title' => $title, 'nickname' => $nickname, 'count' => $pink['people'], 'pink_time' => date('Y-m-d H:i:s', $pink['add_time'])]);
                        $userType = $this->userTypeArray[$orderInfo['is_channel'] ?? 0] ?? 'wechat';
                        //模板消息公众号模版消息
                        if ($userType == 'wechat') {
                            $WechatTemplateList->sendOrderPinkUseSuccess($orderInfo['uid'], $orderInfo['order_id'], $title, $orderInfo['pink_id']);
                        }
                        //模板消息小程序订阅消息
                        if ($userType == 'routine') {
                            $RoutineTemplateList->sendPinkSuccess($orderInfo['uid'], $title, $nickname, $pink['add_time'], $pink['people'], '/pages/users/order_details/index?order_id=' . $pink['order_id']);
                        }
                        break;
                    //开团成功
                    case 'open_pink_success':
                        $orderInfo = $data['orderInfo'];
                        $title = substrUTf8($data['title'], 20, 'UTF-8', '');
                        $pink = $data['pink'];
                        $nickname = $UserServices->value(['uid' => $orderInfo['uid']], 'nickname');
                        //站内信
                        $SystemMsg->sendMsg($orderInfo['uid'], ['title' => $title, 'nickname' => $nickname, 'count' => $pink['people'], 'pink_time' => date('Y-m-d H:i:s', $pink['add_time'])]);
                        $userType = $this->userTypeArray[$orderInfo['is_channel'] ?? 0] ?? 'wechat';
                        //模板消息公众号模版消息
                        if ($userType == 'wechat') {
                            $WechatTemplateList->sendOrderPinkOpenSuccess($orderInfo['uid'], $pink, $title);
                        }
                        //模板消息小程序订阅消息
                        if ($userType == 'routine') {
                            $RoutineTemplateList->sendPinkSuccess($orderInfo['uid'], $title, $nickname, $pink['add_time'], $pink['people'], '/pages/users/order_details/index?order_id=' . $pink['order_id']);
                        }
                        break;
                    //提现成功
                    case 'user_extract':
                        $userType = $data['userType'];
                        $extractNumber = $data['extractNumber'];
                        $nickname = $data['nickname'];
                        $uid = $data['uid'];
                        //站内信
                        $SystemMsg->sendMsg($uid, ['extract_number' => $extractNumber, 'nickname' => $nickname, 'date' => date('Y-m-d H:i:s', time())]);
                        //模板消息公众号模版消息
                        if ($userType == 'wechat') {
                            $WechatTemplateList->sendUserExtract($uid, $extractNumber);
                        }
                        //模板消息小程序订阅消息
                        if ($userType == 'routine') {
                            $RoutineTemplateList->sendExtractSuccess($uid, $extractNumber, $nickname);
                        }
                        break;
                    //提现失败
                    case 'user_balance_change':
                        $userType = $data['userType'];
                        $extract_number = $data['extract_number'];
                        $message = $data['message'];
                        $uid = $data['uid'];
                        $nickname = $data['nickname'];
                        //站内信
                        $SystemMsg->sendMsg($uid, ['extract_number' => $extract_number, 'nickname' => $nickname, 'date' => date('Y-m-d H:i:s', time()), 'message' => $message]);
                        //模板消息公众号模版消息
                        if ($userType == 'wechat') {
                            $WechatTemplateList->sendExtractFail($uid, $extract_number, $message);
                        }
                        //模板消息小程序订阅消息
                        if ($userType == 'routine') {
                            $RoutineTemplateList->sendExtractFail($uid, $message, $extract_number, $nickname);
                        }
                        break;
                    //提醒付款给用户
                    case 'order_pay_false':
                        $order = $data['order'];
                        $order_id = $order['order_id'];
                        //短信
                        $NoticeSms->sendSms($order['user_phone'], compact('order_id'), 'ORDER_PAY_FALSE');
                        //站内信
                        $SystemMsg->sendMsg($order['uid'], ['order_id' => $order_id]);
                        //模板消息
                        $WechatTemplateList->sendOrderPayFalse($order['uid'], $order);
                        break;
                    //申请退款给客服发消息
                    case 'send_order_apply_refund':
                        $order = $data['order'];
                        $datas = [
                            'order_id' => $order['order_id'],
                            'status' => '申请退款',
                        ];
                        $store_id = 0;
                        //给门店店员发送消息
                        if ($order['store_id'] != 0 && $order['shipping_type'] != 4) {
                            $store_id = $order['store_id'];
                        }
                        //站内信
                        $SystemMsg->kefuSystemSend(['order_id' => $order['order_id']], $store_id);
                        //短信
                        $NoticeSms->sendAdminRefund($order, $store_id);
                        //公众号
                        $WechatTemplateList->sendAdminNewRefund($order, $store_id);
                        //企业微信通知
                        $NoticeService->EnterpriseWechatSend(['order_id' => $order['order_id']]);
                        break;
                    //新订单给客服
                    case 'admin_pay_success_code':
                        $order = $data;
                        $store_id = 0;
                        //给门店店员发送消息
                        if ($order['store_id'] != 0 && $order['shipping_type'] != 4) {
                            $store_id = $order['store_id'];
                        }
                        //站内信
                        $SystemMsg->kefuSystemSend(['order_id' => $order['order_id']], $store_id);
                        //短信
                        $NoticeSms->sendAdminPaySuccess($order, $store_id);
                        //公众号小程序
                        $WechatTemplateList->sendAdminNewOrder($order, $store_id);
                        //企业微信通知
                        $NoticeService->EnterpriseWechatSend(['order_id' => $order['order_id']]);
                        break;
                    //提现申请给客服
                    case 'kefu_send_extract_application':
                        //站内信
                        $SystemMsg->kefuSystemSend($data);
                        //企业微信通知
                        $NoticeService->EnterpriseWechatSend($data);
                        break;
                    //确认收货给客服
                    case 'send_admin_confirm_take_over':
                        $order = $data['order'];
                        $storeTitle = $data['storeTitle'];
                        //站内信
                        $SystemMsg->kefuSystemSend(['storeTitle' => $storeTitle, 'order_id' => $order['order_id']]);
                        //短信
                        $NoticeSms->sendAdminConfirmTakeOver($order);
                        //企业微信通知
                        $NoticeService->EnterpriseWechatSend(['store_title' => $storeTitle, 'order_id' => $order['order_id']]);
                        break;
                    //异地登录通知
                    case 'login_city_error':
                        $phone = $data['phone'];
                        unset($data['phone']);
                        $NoticeSms->sendSms($phone, $data, 'LOGIN_CITY_ERROR');
                        break;
                }
            }
        } catch (\Throwable $e) {
            Log::error('错误' . $e->getMessage());
        }
    }
}
