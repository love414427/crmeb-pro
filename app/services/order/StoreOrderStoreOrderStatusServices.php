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

namespace app\services\order;


use app\dao\order\StoreOrderStoreOrderStatusDao;
use app\services\BaseServices;

/**
 * Class StoreOrderStoreOrderStatusServices
 * @package app\services\order
 * @method getTakeOrderIds(array $where, int $page = 0, int $limit = 0) 获取确认收货订单
 * @method int getTakeOrderCount(array $where) 获取确认收货订单数量
 */
class StoreOrderStoreOrderStatusServices extends BaseServices
{

    /**
     * StoreOrderStoreOrderStatusServices constructor.
     * @param StoreOrderStoreOrderStatusDao $dao
     */
    public function __construct(StoreOrderStoreOrderStatusDao $dao)
    {
        $this->dao = $dao;
    }
}
