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
namespace app\controller\api\v1\store;

use app\Request;
use app\services\other\QrcodeServices;
use app\services\product\category\StoreCategoryServices;
use app\services\product\product\StoreProductReplyCommentServices;
use app\services\product\product\StoreProductReplyServices;
use app\services\product\product\StoreProductServices;
use app\services\system\attachment\SystemAttachmentServices;
use app\services\user\UserServices;
use think\db\exception\DataNotFoundException;
use think\db\exception\DbException;
use think\db\exception\ModelNotFoundException;
use function Complex\theta;

/**
 * 商品类
 * Class StoreProductController
 * @package app\api\controller\store
 */
class StoreProductController
{
    /**
     * 商品services
     * @var StoreProductServices
     */
    protected $services;

    public function __construct(StoreProductServices $services)
    {
        $this->services = $services;
    }

    /**
     * 商品列表
     * @param Request $request
     * @return mixed
     */
    public function lst(Request $request, StoreCategoryServices $services)
    {
        $where = $request->getMore([
            [['sid', 'd'], 0],
            [['cid', 'd'], 0],
            ['keyword', '', '', 'store_name'],
            ['priceOrder', ''],
            ['salesOrder', ''],
            [['news', 'd'], 0, '', 'is_new'],
            [['type', 0], 0],
            ['ids', ''],
            [['selectId', 'd'], ''],
            ['productId', ''],
            ['brand_id', ''],
            ['promotions_id', 0]
        ]);
        if ($where['selectId'] && (!$where['sid'] || !$where['cid'])) {
            if ($services->value(['id' => $where['selectId']], 'pid')) {
                $where['sid'] = $where['selectId'];
            } else {
                $where['cid'] = $where['selectId'];
            }
        }
        if ($where['ids'] && is_string($where['ids'])) {
            $where['ids'] = explode(',', $where['ids']);
        }
        if (!$where['ids']) {
            unset($where['ids']);
        }
        if ($where['brand_id']) {
            $where['brand_id'] = explode(',', $where['brand_id']);
        }
        $type = 'mid';
        $field = ['image', 'recommend_image'];
        if ($where['store_name']) {
            $field = ['image'];
        }
        $list = $this->services->getGoodsList($where, (int)$request->uid());
        return app('json')->successful(get_thumb_water($list, $type, $field));
    }

    /**
     * 搜索获取商品品牌列表
     * @param Request $request
     * @param StoreCategoryServices $services
     * @return mixed
     */
    public function brand(Request $request, StoreCategoryServices $services)
    {
        $where = $request->getMore([
            [['sid', 'd'], 0],
            [['cid', 'd'], 0],
            ['keyword', '', '', 'store_name'],
            ['priceOrder', ''],
            ['salesOrder', ''],
            [['news', 'd'], 0, '', 'is_new'],
            [['type', 0], 0],
            ['ids', ''],
            ['selectId', ''],
            ['productId', '']
        ]);
        if ($where['selectId'] && (!$where['sid'] || !$where['cid'])) {
            if ($services->value(['id' => $where['selectId']], 'pid')) {
                $where['sid'] = $where['selectId'];
            } else {
                $where['cid'] = $where['selectId'];
            }
        }
        if ($where['ids'] && is_string($where['ids'])) {
            $where['ids'] = explode(',', $where['ids']);
        }
        if (!$where['ids']) {
            unset($where['ids']);
        }
        return app('json')->successful($this->services->getBrandList($where, (int)$request->uid()));
    }

    /**
     * 商品分享二维码 推广员
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function code(Request $request, $id)
    {
        $id = (int)$id;
        /** @var SystemAttachmentServices $attach */
        $attach = app()->make(SystemAttachmentServices::class);
        if (!$id || !$this->services->isValidProduct($id)) {
            return app('json')->fail('商品不存在或已下架');
        }
        $userType = $request->get('user_type', 'wechat');
        $user = $request->user();
        try {
            switch ($userType) {
                case 'wechat':
                    //公众号
                    $name = $id . '_product_detail_' . $user['uid'] . '_is_promoter_' . $user['is_promoter'] . '_wap.jpg';

                    /** @var QrcodeServices $qrcodeService */
                    $qrcodeService = app()->make(QrcodeServices::class);
                    if (sys_config('share_qrcode', 0) && request()->isWechat()) {
                        $url = $qrcodeService->getTemporaryQrcode('product-' . $id, $user['uid'])->url;
                    } else {
                        $url = $qrcodeService->getWechatQrcodePath($name, '/pages/goods_details/index?id=' . $id . '&spread=' . $user['uid']);
                    }

                    if ($url === false)
                        return app('json')->fail('二维码生成失败');
                    else {
//                        $codeTmp = $code = $url ? image_to_base64($url) : false;
//                        if (!$codeTmp) {
//                            $putCodeUrl = put_image($url);
//                            $code = $putCodeUrl ? image_to_base64(app()->request->domain(true) . '/' . $putCodeUrl) : false;
//                            $code ?? unlink(public_path() . $putCodeUrl);
//                        }
                        return app('json')->successful(['code' => $url]);
                    }
                    break;
                case 'routine':
                    /** @var QrcodeServices $qrcodeService */
                    $qrcodeService = app()->make(QrcodeServices::class);
                    $url = $qrcodeService->getRoutineQrcodePath($id, $user['uid'], 0, ['is_promoter' => $user['is_promoter']]);
                    if ($url === false)
                        return app('json')->fail('二维码生成失败');
                    else
                        return app('json')->successful(['code' => $url]);
            }
        } catch (\Exception $e) {
            return app('json')->fail($e->getMessage(), [
                'code' => $e->getCode(),
                'line' => $e->getLine(),
                'message' => $e->getMessage()
            ]);
        }
    }

    /**
     * 商品详情
     * @param Request $request
     * @param $id
     * @param int $type
     * @return mixed
     */
    public function detail(Request $request, $id, $type = 0)
    {
        [$promotions_type] = $request->getMore([
            [['promotions_type', 'd'], 0]
        ], true);
        $data = $this->services->productDetail($request, (int)$id, (int)$type, (int)$promotions_type);
        return app('json')->successful($data);
    }

    /**
     * 为你推荐
     * @param Request $request
     * @param UserServices $userServices
     * @return mixed
     */
    public function product_hot(Request $request, UserServices $userServices)
    {
        $is_vip = $userServices->value(['uid' => $request->uid()], 'is_money_level');
        $vip_user = $is_vip ? -1 : 0;
        $list = $this->services->getProducts(['is_hot' => 1, 'is_show' => 1, 'is_del' => 0, 'is_vip_product' => $vip_user]);
        return app('json')->success(get_thumb_water($list, 'mid'));
    }

    /**
     * 获取首页推荐不同类型商品的轮播图和商品
     * @param Request $request
     * @param $type
     * @return mixed
     * @throws DataNotFoundException
     * @throws ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function groom_list(Request $request, $type)
    {
        $info['banner'] = [];
        $info['list'] = [];
        if ($type == 1) {// 精品推荐
            $info['banner'] = sys_data('routine_home_bast_banner') ?: [];// 首页精品推荐图片
            $info['list'] = $this->services->getRecommendProduct($request->uid(), 'is_best');// 精品推荐个数
        } else if ($type == 2) {//  热门榜单
            $info['banner'] = sys_data('routine_home_hot_banner') ?: [];// 热门榜单 猜你喜欢推荐图片
            $info['list'] = $this->services->getRecommendProduct($request->uid(), 'is_hot');// 热门榜单 猜你喜欢
        } else if ($type == 3) {// 首发新品
            $info['banner'] = sys_data('routine_home_new_banner') ?: [];// 首发新品推荐图片
            $info['list'] = $this->services->getRecommendProduct($request->uid(), 'is_new');// 首发新品
        } else if ($type == 4) {// 促销单品
            $info['banner'] = sys_data('routine_home_benefit_banner') ?: [];// 促销单品推荐图片
            $info['list'] = $this->services->getRecommendProduct($request->uid(), 'is_benefit');// 促销单品
        } else if ($type == 5) {// 会员商品
            $whereVip = [
                ['vip_price', '>', 0],
                ['is_vip', '=', 1],
            ];
            $info['list'] = $this->services->getRecommendProduct($request->uid(), $whereVip);// 会员商品
        }
        return app('json')->successful($info);
    }

    /**
     * 商品评价数量和好评度
     * @param $id
     * @return mixed
     */
    public function reply_config($id)
    {
        /** @var StoreProductReplyServices $replyService */
        $replyService = app()->make(StoreProductReplyServices::class);
        $count = $replyService->productReplyCount($id);
        return app('json')->successful($count);
    }

    /**
     * 获取商品评论
     * @param Request $request
     * @param $id
     * @param $type
     * @return mixed
     */
    public function reply_list(Request $request, $id)
    {
        [$type] = $request->getMore([
            [['type', 'd'], 0]
        ], true);
        /** @var StoreProductReplyServices $replyService */
        $replyService = app()->make(StoreProductReplyServices::class);
        $list = $replyService->getProductReplyList($id, $type);
        return app('json')->successful(get_thumb_water($list, 'small', ['pics']));
    }

    /**
     * 评价详情
     * @param StoreProductReplyServices $services
     * @param Request $request
     * @param $id
     * @return mixed
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     */
    public function replyInfo(StoreProductReplyServices $services, Request $request, $id)
    {
        if (!$id) {
            return app('json')->fail('缺少参数');
        }
        return app('json')->success($services->getReplyInfo((int)$id, $request->uid()));
    }

    /**
     * 评论回复列表
     * @param StoreProductReplyCommentServices $services
     * @param Request $request
     * @param $id 评论id
     * @return mixed
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     */
    public function commentList(StoreProductReplyCommentServices $services, Request $request, $id)
    {
        if (!$id) {
            return app('json')->fail('缺少参数');
        }
        $data = $services->getReplCommenList((int)$id, '', $request->uid(), false);
        return app('json')->success($data['list']);
    }

    /**
     * 保存评论回复
     * @param Request $request
     * @param StoreProductReplyCommentServices $services
     * @param $id
     * @return mixed
     */
    public function replyComment(Request $request, StoreProductReplyCommentServices $services, $id)
    {
        [$content] = $request->postMore([
            ['content', '']
        ], true);
        if (!$id) {
            return app('json')->fail('缺少参数');
        }
        if (!$content) {
            return app('json')->fail('缺少回复内容');
        }
        $services->saveComment($request->uid(), (int)$id, $content);
        return app('json')->success('回复成功');
    }

    /**
     * 回复点赞
     * @param Request $request
     * @param StoreProductReplyCommentServices $services
     * @param $id
     * @return mixed
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     */
    public function commentPraise(Request $request, StoreProductReplyCommentServices $services, $id)
    {
        if (!$id) {
            return app('json')->fail('缺少参数');
        }

        if ($services->commentPraise((int)$id, $request->uid())) {
            return app('json')->success('点赞成功');
        } else {
            return app('json')->fail('点赞失败');
        }
    }

    /**
     * 取消回复点赞
     * @param Request $request
     * @param StoreProductReplyCommentServices $services
     * @param $id
     * @return mixed
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     */
    public function unCommentPraise(Request $request, StoreProductReplyCommentServices $services, $id)
    {
        if (!$id) {
            return app('json')->fail('缺少参数');
        }

        if ($services->unCommentPraise((int)$id, $request->uid())) {
            return app('json')->success('取消点赞成功');
        } else {
            return app('json')->fail('取消点赞失败');
        }
    }

    /**
     * 点赞
     * @param Request $request
     * @param StoreProductReplyServices $services
     * @param $id
     * @return mixed
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     */
    public function replyPraise(Request $request, StoreProductReplyServices $services, $id)
    {
        if (!$id) {
            return app('json')->fail('缺少参数');
        }
        if ($services->replyPraise((int)$id, $request->uid())) {
            return app('json')->success('点赞成功');
        } else {
            return app('json')->fail('点赞失败');
        }
    }

    /**
     * 取消点赞
     * @param Request $request
     * @param StoreProductReplyServices $services
     * @param $id
     * @return mixed
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     */
    public function unReplyPraise(Request $request, StoreProductReplyServices $services, $id)
    {
        if (!$id) {
            return app('json')->fail('缺少参数');
        }
        if ($services->unReplyPraise((int)$id, $request->uid())) {
            return app('json')->success('取消点赞成功');
        } else {
            return app('json')->fail('取消点赞失败');
        }
    }

    /**
     * 记录评价浏览量
     * @param StoreProductReplyServices $services
     * @param $id
     * @return mixed
     */
    public function replyViewNum(StoreProductReplyServices $services, $id)
    {
        if (!$id) {
            return app('json')->fail('缺少参数');
        }
        if ($services->incUpdate($id, 'views_num')) {
            return app('json')->success('更新成功');
        } else {
            return app('json')->fail('更新失败');
        }
    }

    /**
     * 获取预售列表
     * @param Request $request
     * @return mixed
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     */
    public function presaleList(Request $request)
    {
        $where = $request->getMore([
            [['time_type', 'd'], 0]
        ]);
        $uid = (int)$request->uid();
        return app('json')->successful($this->services->getPresaleList($uid, $where));
    }

}
