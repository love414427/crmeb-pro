// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2021 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------
import request from '@/plugins/request';

/**
 * @description 首页头部
 */
export function headerApi (data) {
    return request({
        url: 'home/header',
        method: 'get',
		params:data

    });
}

/**
 * @description 首页订单图表
 */
export function orderApi (params) {
    return request({
        url: 'home/order',
        method: 'get',
        params
    });
}

/**
 * @description 首页订单图表
 */
export function userApi () {
    return request({
        url: 'home/user',
        method: 'get'
    });
}

/**
 * @description 首页商品交易额排行
 */
export function rankApi () {
    return request({
        url: 'home/rank',
        method: 'get'
    });
}

export function checkAuth () {
    return request({
        url: 'check_auth',
        method: 'get'
    });
}


export function orderChart (data) {
    return request({
        url: 'home/orderChart',
        method: 'get',
		params: data
    });
}


export function staffApi (data) {
    return request({
        url: 'home/staff',
        method: 'get',
		params: data
    });
}

export function operateApi (data) {
    return request({
        url: 'home/operate',
        method: 'get',
		params: data
    });
}