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
namespace app\controller\api\v2\activity;


use app\Request;
use app\services\activity\lottery\LuckLotteryRecordServices;
use app\services\activity\lottery\LuckLotteryServices;
use app\services\other\QrcodeServices;
use app\services\wechat\WechatServices;

/**
 *
 * Class LuckLotteryController
 * @package app\controller\api\v1\activity
 */
class LuckLotteryController
{
    protected $services;

    public function __construct(LuckLotteryServices $services)
    {
        $this->services = $services;
    }

    /**
     * 抽奖活动信息
     * @param Request $request
     * @param $factor
     * @return mixed
     * @throws \Psr\SimpleCache\InvalidArgumentException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function LotteryInfo(Request $request, $factor)
    {
        if (!$factor) $factor = 1;
        $lottery = $this->services->getFactorLottery((int)$factor);
        if (!$lottery) {
            return app('json')->fail('抽奖活动不存在');
        }
        $uid = (int)$request->uid();
        $lottery = $lottery->toArray();
        $lotteryData = ['lottery' => $lottery];
        $this->services->checkoutUserAuth($uid, (int)$lottery['id'], [], $lottery);
        $lotteryData['lottery_num'] = $this->services->getLotteryNum($uid, (int)$lottery['id'], [], $lottery);
        $all_record = $user_record = [];
        if ($lottery['is_all_record'] || $lottery['is_personal_record']) {
            /** @var LuckLotteryRecordServices $lotteryRecordServices */
            $lotteryRecordServices = app()->make(LuckLotteryRecordServices::class);
            if ($lottery['is_all_record']) {
                $all_record = $lotteryRecordServices->getWinList(['lottery_id' => $lottery['id']]);
            }
            if ($lottery['is_personal_record']) {
                $user_record = $lotteryRecordServices->getWinList(['lottery_id' => $lottery['id'], 'uid' => $uid]);
            }
        }
        $lotteryData['all_record'] = $all_record;
        $lotteryData['user_record'] = $user_record;
        $lotteryData['cache_time'] = in_array($factor, [3, 4]) ? $this->services->getCacheLotteryExpireTime($uid, $factor == 3 ? 'order' : 'comment') : 0;
        return app('json')->successful('ok', $lotteryData);
    }

    /**
     * 参与抽奖
     * @param Request $request
     * @return mixed
     */
    public function luckLottery(Request $request)
    {
        [$id, $type] = $request->postMore([
            ['id', 0],
            ['type', 0]
        ], true);
        if ($type == 5 && request()->isWechat()) {
            /** @var WechatServices $wechat */
            $wechat = app()->make(WechatServices::class);
            $subscribe = $wechat->get(['uid' => $request->uid(), 'subscribe' => 1]);
            if (!$subscribe) {
                $url = '';
                /** @var QrcodeServices $qrcodeService */
                $qrcodeService = app()->make(QrcodeServices::class);
                $url = $qrcodeService->getTemporaryQrcode('luckLottery-5', $request->uid())->url;
                return app('json')->successful('请先关注公众号', ['code' => 'subscribe', 'url' => $url]);
            }
        }
        if (!$id) {
            return app('json')->fail('参数错误');
        }
        $uid = (int)$request->uid();
        return app('json')->successful($this->services->luckLottery($uid, $id));
    }

    /**
     * 领取奖品
     * @param Request $request
     * @param LuckLotteryRecordServices $lotteryRecordServices
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function lotteryReceive(Request $request, LuckLotteryRecordServices $lotteryRecordServices)
    {
        [$id, $name, $phone, $address, $mark] = $request->postMore([
            ['id', 0],
            ['name', ''],
            ['phone', ''],
            ['address', ''],
            ['mark', '']
        ], true);
        if (!$id) {
            return app('json')->fail('参数错误');
        }
        $uid = (int)$request->uid();
        return app('json')->successful($lotteryRecordServices->receivePrize($uid, $id, compact('name', 'phone', 'address', 'mark')) ? '领取成功' : '领取失败');
    }

    /**
     * 获取中奖记录
     * @param Request $request
     * @param LuckLotteryRecordServices $lotteryRecordServices
     * @return mixed
     */
    public function lotteryRecord(Request $request, LuckLotteryRecordServices $lotteryRecordServices)
    {
        $uid = (int)$request->uid();
        return app('json')->successful($lotteryRecordServices->getRecord($uid));
    }
}
