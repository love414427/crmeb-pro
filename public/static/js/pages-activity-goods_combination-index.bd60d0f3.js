(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-goods_combination-index"],{"1f23":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAA6CAYAAACj+Dm/AAAFAElEQVRYR7WYe1BVVRTGv2/fCylWaqWUiqaDhWnljGZiyEgIimKZjpSWWDQOWpbZy5mmJmeqf3TGGouSyQqtNE0saUhEwVeQSKZWjiWPpknx0Sihggnss5p7SeTCvfdszrX135m9vvXba52z9tl7E4amy6bmEJxj6B7ILZ8mAWTDDJdENZ4GcYOJfyAfKkkxA5amJgrV9lBgAI4yNi/GCKhLpmSReCoUIIlnGfvNu0ZAqzT1GAR9QwBeoKg+jMs7bwts/C5ltBvq+xBgEOA9V1z+M54YtkC9e+JSUr3kHChCNMZwbNFRI6C1e2IFyOgQgAVqbEHKZX3QDKUkeZho/uwc5i1hKuO35psBdyW/KsAbIQArGV94G+l5jS0WNENrZ9IBAMOdAglrIccVrWirDwiUrfEDJTy82ikMwAV2DevL0VvOmQGLExYJ1HKnQBJZTCha0F4fOMPihD0ijHMEpKcVMIT37/jNCCjb740URNQAohwCC1Xirgn+tH4z1IXxmSRXOoIBsEQedCfvzjMGWtviCyDwO0PbSZBVHL9rcNtWCPrRyLYR3UUi/gIQZhvcjwMFz3PCnrcDaTuUtLlgzGxFtcYJDEA91cW+TNpfZwy0tsTmgmqaEyAhH3BiadD/pk+G8m30NcJeZwB26zxQhFqGMnXvkWDadsBRUwXqq87DAAi2q8l7k+y0PkCdP2o1wXQ7kb9xC5jqnly22U7bCpQd49xS33AaQE87kZ/x3/nDvmgugWWnbQU2bR6Z5FIstBP4b2brBU7Zb7TuXskwb0SWgJ3fmVHq2az78aGDf5tM1gsUASVvxHEQt5iIfFcOyeYDP84z1bUAN90ZKy53qamond9hEJ6VKahR5DSs5ldagF8PXypACDszO9zlcSnzAq1Nd1eBGGQqc+wnqOOljcPuClPqkOMgnRASeIs6d9jrBJd0QufQVXI57ZcZlI1DDwjoeGdmRpcSRlxK5KTKS7S+vOM8wGvNhI68fqXgPqYdPutRU6+PWUHSe9C46kacoEIspx/543LslrZYP2SSpvS2AypgMQQxdn7eceICoccyreJgW3/b01NrB+UOHCDN4ZUA3AbAJopO5SOVHdZmY6BeF72cVIvsYSIUZHBmRY4/XyOgbL79OmnQfwLsbgcUWK+5Zla9GcjPDLh20HMCFXAn1lp2WB+7ZlU/GWxStkBZAiWDB1UBuNUmuy0Mq57CNOiQgM1r+s9QyrXBBlZOqyGB6afq7Upum6H16YASgGMCBiKqGf7PaKadtP1FtXRLEJPPou4RS+0L4nKG0jyGc457LwxMLChQr476guDD/gPJRSo9nrNrOvXjDnw+zO7TX7qoKgg7NjpFW9qa7s6osd0Wtp9sYGBOn2UCvui/eWUBH6/JMimhEVDWRHYT7ToGoIcfwTI+UfOyE1jAj0avilxIpd7xA1uLjBOP0bOxd2gdSupt9H43V4IY6BNTsJP6ZDIz0eSQ5ZV1BH7Ye5qQuW2DEvITdFM8M2sDnvtMJ9EBaK3qtQc+txdyjNCxnHvW805DNt/j2kc3jRTN8itR5RxFxzGzNqT7Nt9qtXmS7Bs/F2DWf8VuJJHCuWeKQ06rTYArh5msrlHi6uq56nKDEIo8ynm1664mzOejkZU9W7f7FCzm/NqlVxvWCpRP0EUu9jgBoodA3nfNr3v6/4D5AhuuP0SFcpw6l25yknU6oX8BVSq7QIQtcUMAAAAASUVORK5CYII="},"2b49":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i("26cb"),a=n(i("d0ca")),o=i("12b8"),s={name:"Home",props:{},mixins:[a.default],data:function(){return{top:"545",imgHost:o.HTTP_REQUEST_URL}},computed:(0,r.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){},beforeDestroy:function(){this.$store.commit("CLOSE_HOME")}};e.default=s},3124:function(t,e,i){"use strict";i.r(e);var n=i("70a4"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"312b":function(t,e,i){var n=i("817d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f065").default;r("128c8d18",n,!0,{sourceMap:!1,shadowMode:!1})},"3dd2":function(t,e,i){"use strict";var n=i("312b"),r=i.n(n);r.a},4899:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".pictrueBox[data-v-59354ea8]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-59354ea8]{position:fixed;color:#fff;text-align:center;z-index:9999;right:%?15?%;display:flex}.home .homeCon[data-v-59354ea8]{border-radius:%?50?%;opacity:0;height:0;color:var(--view-theme);width:0}.home .homeCon.on[data-v-59354ea8]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)!important}.home .homeCon .iconfont[data-v-59354ea8]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-59354ea8]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme)}.home .pictrue .image[data-v-59354ea8]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},"65a8":function(t,e,i){var n=i("4899");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f065").default;r("0114b9c6",n,!0,{sourceMap:!1,shadowMode:!1})},"70a4":function(t,e,i){"use strict";var n=i("4ea4");i("99af"),i("c975"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i("866c"),a=(i("8f8b"),n(i("f176"))),o=n(i("d0ca")),s=(getApp(),{components:{home:a.default},mixins:[o.default],data:function(){return{pinkPeople:[],pinkCount:0,bannerList:[],circular:!0,autoplay:!0,interval:3e3,duration:500,combinationList:[],limit:10,page:1,loading:!1,loadend:!1,isBanner:!1}},onLoad:function(){uni.setNavigationBarTitle({title:"拼团列表"}),this.getCombinationList(),this.getBannerList(),this.getPink()},methods:{getPink:function(){var t=this;(0,r.getPink)({type:2}).then((function(e){t.pinkPeople=e.data.avatars,t.pinkCount=e.data.pink_count}))},getBannerList:function(){var t=this;(0,r.getCombinationBannerList)().then((function(e){t.bannerList=e.data,t.isBanner=!0}))},goDetail:function(t){var e=t.link;-1!=e.indexOf("http")?location.href=e:-1==["/pages/goods_cate/goods_cate","/pages/order_addcart/order_addcart","/pages/user/index","/pages/index/index"].indexOf(e)?uni.navigateTo({url:e}):uni.switchTab({url:e})},openSubcribe:function(t){uni.navigateTo({url:"/pages/activity/goods_combination_details/index?id=".concat(t.id)})},getCombinationList:function(){var t=this;if(!t.loadend&&!t.loading){var e={page:t.page,limit:t.limit};this.loading=!0,(0,r.getCombinationList)(e).then((function(e){var i=t.combinationList,n=t.limit;t.page++,t.loadend=n>e.data.length,t.combinationList=i.concat(e.data),t.page=t.data.page,t.loading=!1})).catch((function(){t.loading=!1}))}}},onReachBottom:function(){this.getCombinationList()}});e.default=s},"77b7":function(t,e,i){"use strict";i.r(e);var n=i("2b49"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"817d":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* crmeb颜色变量 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.no-goods[data-v-06d786ec]{margin:0 %?30?%;background-color:#fff;text-align:center;padding:%?20?% 0 %?100?% 0;color:#999;border-radius:%?10?%;height:calc(100vh - %?500?%);box-sizing:border-box}.no-goods.on[data-v-06d786ec]{height:calc(100vh - %?200?%)}.no-goods uni-image[data-v-06d786ec]{width:%?414?%;height:%?304?%;margin:%?40?% auto 0 auto;display:block}.group-list[data-v-06d786ec]{min-height:100vh;background-color:var(--view-theme)!important;padding:%?30?% 0}.group-list .swiper[data-v-06d786ec]{width:100%;position:relative;box-sizing:border-box;padding:0 %?30?%}.group-list .swiper uni-swiper[data-v-06d786ec]{width:100%;height:%?300?%}.group-list .swiper uni-swiper .slide-image[data-v-06d786ec]{width:100%;height:%?300?%;border-radius:%?20?%}.group-list .swiper uni-swiper[data-v-06d786ec] .uni-swiper-dot{width:%?8?%!important;height:%?8?%!important;border-radius:50%}.group-list .swiper uni-swiper[data-v-06d786ec] .uni-swiper-dot-active{width:%?18?%!important;border-radius:%?4?%;background-color:var(--view-theme)!important}.group-list .groupMember[data-v-06d786ec]{height:%?100?%}.group-list .groupMember .line[data-v-06d786ec]{width:%?102?%;height:%?4?%}.group-list .groupMember .line.right[data-v-06d786ec]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.group-list .groupMember .line uni-image[data-v-06d786ec]{width:100%;height:100%;display:block}.group-list .groupMember .member[data-v-06d786ec]{margin:0 %?30?%;color:#fff}.group-list .groupMember .member .pictrue[data-v-06d786ec]{width:%?46?%;height:%?46?%;position:relative}.group-list .groupMember .member .pictrue uni-image[data-v-06d786ec]{border:%?2?% solid #fff;width:100%;height:100%;border-radius:50%}.group-list .groupMember .member .pictrue ~ .pictrue[data-v-06d786ec]{margin-left:%?-8?%}.group-list .groupMember .member .pictrue .iconfont[data-v-06d786ec]{position:absolute;width:%?43?%;height:%?43?%;background:rgba(51,51,51,.6);border-radius:50%;top:%?2?%;left:%?2?%;color:#fff;font-size:%?10?%;text-align:center;line-height:%?43?%}.group-list .list .item[data-v-06d786ec]{width:%?690?%;height:%?230?%;background-color:#fff;border-radius:%?14?%;padding:0 %?22?%;margin:0 auto %?18?% auto}.group-list .list .item .pictrue[data-v-06d786ec]{width:%?186?%;height:%?186?%}.group-list .list .item .pictrue uni-image[data-v-06d786ec]{width:100%;height:100%;border-radius:%?10?%}.group-list .list .item .text[data-v-06d786ec]{width:%?440?%}.group-list .list .item .text .name[data-v-06d786ec]{color:#333;font-size:%?30?%;height:%?82?%}.group-list .list .item .text .bottom[data-v-06d786ec]{margin-top:%?10?%}.group-list .list .item .text .bottom .y_money[data-v-06d786ec]{font-size:%?24?%;color:#999}.group-list .list .item .text .bottom .y_money .price[data-v-06d786ec]{text-decoration:line-through}.group-list .list .item .text .bottom .y_money .money[data-v-06d786ec]{color:var(--view-priceColor);font-weight:600}.group-list .list .item .text .bottom .y_money .money .num[data-v-06d786ec]{font-size:%?34?%}.group-list .list .item .text .bottom .bnt[data-v-06d786ec]{height:%?58?%;font-size:%?24?%;text-align:center;position:relative;background-color:var(--view-theme);border-radius:%?28?%}.group-list .list .item .text .bottom .bnt .light[data-v-06d786ec]{position:absolute;width:%?28?%;height:%?58?%;top:0;left:50%;margin-left:%?-8?%}.group-list .list .item .text .bottom .bnt .light uni-image[data-v-06d786ec]{width:100%;height:100%}.group-list .list .item .text .bottom .bnt .num[data-v-06d786ec]{width:%?120?%;background-color:hsla(0,0%,100%,.85);color:var(--view-theme);height:100%;line-height:%?58?%;border-radius:%?28?% 0 %?14?% %?28?%}.group-list .list .item .text .bottom .bnt .go[data-v-06d786ec]{width:%?112?%;background-color:var(--view-theme);height:100%;line-height:%?58?%;border-radius:0 %?28?% %?28?% 0;color:#fff}.group-list .list .item .text .bottom .bnt.gray[data-v-06d786ec]{width:%?148?%;background-color:#ccc;color:#fff}',""]),t.exports=e},"866c":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getCombinationList=a,e.getCombinationDetail=o,e.getCombinationPink=s,e.postCombinationRemove=u,e.getBargainList=c,e.getCombinationBannerList=l,e.getPink=d,e.getBargainUserList=g,e.getBargainDetail=p,e.postBargainStartUser=f,e.postBargainStart=v,e.postBargainHelp=m,e.postBargainHelpPrice=h,e.postBargainHelpList=b,e.postBargainHelpCount=w,e.postBargainShare=C,e.getSeckillIndexTime=A,e.getSeckillList=x,e.getSeckillDetail=y,e.getBargainPoster=_,e.getCombinationPoster=k,e.getBargainUserCancel=S,e.seckillCode=B,e.scombinationCode=M,e.getCombinationPosterData=O,e.getBargainPosterData=P,e.integralOrderConfirm=E,e.integralOrderCreate=D,e.integralOrderDetails=L,e.getIntegralProductDetail=I,e.getStoreIntegralList=U,e.getIntegralOrderList=R,e.getLogisticsDetails=N,e.orderTake=Q,e.orderDel=T,e.getAdvancellList=W,e.promotionsList=j,e.giveInfo=G;var r=n(i("c431"));function a(t){return r.default.get("combination/list",t,{noAuth:!0})}function o(t){return r.default.get("combination/detail/"+t)}function s(t){return r.default.get("combination/pink/"+t)}function u(t){return r.default.post("combination/remove",t)}function c(t){return r.default.get("bargain/list",t,{noAuth:!0})}function l(t){return r.default.get("combination/banner_list",t,{noAuth:!0})}function d(t){return r.default.get("pink",t,{noAuth:!0})}function g(t){return r.default.get("bargain/user/list",t)}function p(t){return r.default.get("bargain/detail/"+t)}function f(t){return r.default.post("bargain/start/user",t)}function v(t){return r.default.post("bargain/start",{bargainId:t})}function m(t){return r.default.post("bargain/help",t)}function h(t){return r.default.post("bargain/help/price",t)}function b(t){return r.default.post("bargain/help/list",t)}function w(t){return r.default.post("bargain/help/count",t)}function C(t){return r.default.post("bargain/share",{bargainId:t})}function A(){return r.default.get("seckill/index",{},{noAuth:!0})}function x(t,e){return r.default.get("seckill/list/"+t,e,{noAuth:!0})}function y(t,e){return r.default.get("seckill/detail/"+t)}function _(t){return r.default.post("bargain/poster",t)}function k(t){return r.default.post("combination/poster",t)}function S(t){return r.default.post("bargain/user/cancel",t)}function B(t,e){return r.default.get("seckill/code/"+t,e)}function M(t){return r.default.get("combination/code/"+t)}function O(t){return r.default.get("combination/poster_info/"+t)}function P(t){return r.default.get("bargain/poster_info/"+t)}function E(t){return r.default.post("store_integral/order/confirm",t)}function D(t){return r.default.post("store_integral/order/create",t)}function L(t){return r.default.get("store_integral/order/detail/".concat(t))}function I(t){return r.default.get("store_integral/detail/"+t,{},{noAuth:!0})}function U(t){return r.default.get("store_integral/list",t)}function R(t){return r.default.get("store_integral/order/list",t)}function N(t){return r.default.get("store_integral/order/express/".concat(t))}function Q(t){return r.default.post("store_integral/order/take",t)}function T(t){return r.default.post("store_integral/order/del",t)}function W(t){return r.default.get("presale/list",t)}function j(t,e){return r.default.get("v2/promotions/productList/"+t,e)}function G(t){return r.default.get("v2/promotions/give_info/"+t)}},"8f8b":function(t,e,i){"use strict";i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.auth=r,e.openPaySubscribe=a,e.openOrderSubscribe=o,e.openExtrctSubscribe=s,e.openPinkSubscribe=u,e.openBargainSubscribe=c,e.openOrderRefundSubscribe=l,e.openRechargeSubscribe=d,e.subscribe=g;var n=i("7b4e");function r(){var t={},e=uni.getStorageSync(n.SUBSCRIBE_MESSAGE);return t=e?JSON.parse(e):{},t}function a(){var t=r();return g([t.order_pay_success,t.order_deliver_success,t.order_postage_success])}function o(){var t=r();return g([t.order_take,t.integral_accout,t.order_brokerage])}function s(){var t=r();return g([t.user_extract])}function u(){var t=r();return g([t.pink_true,t.pink_status])}function c(){var t=r();return g([t.bargain_success])}function l(){var t=r();return g([t.order_refund])}function d(){var t=r();return g([t.recharge_success])}function g(t){var e=wx;return new Promise((function(i,n){e.requestSubscribeMessage({tmplIds:t,success:function(t){return i(t)},fail:function(t){return i(t)}})}))}},"977d":function(t,e,i){"use strict";i.r(e);var n=i("a511"),r=i("3124");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("3dd2");var o,s=i("f0c5"),u=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"06d786ec",null,!1,n["a"],o);e["default"]=u.exports},a511:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"group-list",style:t.colorStyle},[t.bannerList.length?n("v-uni-view",{staticClass:"swiper"},[n("v-uni-swiper",{attrs:{"indicator-dots":"true",autoplay:!0,circular:t.circular,interval:t.interval,duration:t.duration,"indicator-color":"rgba(0,0,0,0.3)"}},[t._l(t.bannerList,(function(e,i){return[n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"slide-navigator acea-row row-between-wrapper",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetail(e)}}},[n("v-uni-image",{staticClass:"slide-image",attrs:{src:e.img}})],1)],1)]}))],2)],1):t._e(),n("v-uni-view",{staticClass:"groupMember acea-row row-center-wrapper"},[n("v-uni-view",{staticClass:"line"},[n("v-uni-image",{attrs:{src:i("db1c")}})],1),n("v-uni-view",{staticClass:"member acea-row row-center-wrapper"},[t._l(t.pinkPeople,(function(e,i){return i<6?n("v-uni-view",{key:i,staticClass:"pictrue"},[n("v-uni-image",{attrs:{src:e}})],1):t._e()})),n("v-uni-text",{staticStyle:{"margin-left":"10rpx"}},[t._v(t._s(t.pinkCount)+"人参与")]),t.pinkPeople.length>5?n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{attrs:{src:t.pinkPeople[t.pinkPeople.length-1]}}),n("v-uni-view",{staticClass:"iconfont icon-gengduo1"})],1):t._e()],2),n("v-uni-view",{staticClass:"line right"},[n("v-uni-image",{attrs:{src:i("db1c")}})],1)],1),n("v-uni-view",{staticClass:"list"},t._l(t.combinationList,(function(e,r){return n("v-uni-view",{key:r,staticClass:"item acea-row row-between-wrapper",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.openSubcribe(e)}}},[n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{attrs:{src:e.image}})],1),n("v-uni-view",{staticClass:"text"},[n("v-uni-view",{staticClass:"name line2"},[t._v(t._s(e.title))]),n("v-uni-view",{staticClass:"bottom acea-row row-between row-bottom"},[n("v-uni-view",{staticClass:"y_money"},[n("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(e.product_price))]),n("v-uni-view",{staticClass:"money"},[t._v("￥"),n("v-uni-text",{staticClass:"num"},[t._v(t._s(e.price))])],1)],1),e.stock>0&&e.quota>0?n("v-uni-view",{staticClass:"bnt acea-row row-center-wrapper"},[n("v-uni-view",{staticClass:"light"},[n("v-uni-image",{attrs:{src:i("1f23")}})],1),n("v-uni-view",{staticClass:"num"},[t._v(t._s(e.people)+"人团")]),n("v-uni-view",{staticClass:"go"},[t._v("去拼团")])],1):n("v-uni-view",{staticClass:"bnt gray acea-row row-center-wrapper"},[t._v("已售罄")])],1)],1)],1)})),1),t.combinationList.length||t.loading||!t.isBanner?t._e():n("v-uni-view",{staticClass:"no-goods",class:t.bannerList.length?"":"on"},[n("v-uni-image",{attrs:{src:i("e091"),mode:""}}),n("v-uni-text",{staticClass:"tip"},[t._v("暂无拼团商品，去看看其他商品吧～")])],1),t.navigation?n("home"):t._e()],1)},a=[]},d0ca:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{colorStyle:"",navigation:0,colorNum:0}},created:function(){var t=this;this.colorStyle=uni.getStorageSync("viewColor"),uni.$on("ok",(function(e){t.colorStyle=e})),this.navigation=uni.getStorageSync("navigation"),uni.$on("navOk",(function(e){t.navigation=e}))},methods:{colorData:function(){var t=this;this.colorNum=uni.getStorageSync("statusColor"),uni.$on("colorOk",(function(e){t.colorNum=e}))}}};e.default=n},da19:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[i("v-uni-view",{staticStyle:{"touch-action":"none"}},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?i("v-uni-view",{staticClass:"homeCon bg-color",class:!0===t.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/index/index"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/order_addcart/order_addcart"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/user/index"}})],1):t._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?t.imgHost+"/statics/images/close.gif":t.imgHost+"/statics/images/open.gif"}})],1)],1)],1)],1)],1)},a=[]},db1c:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAECAYAAAB840ozAAAAWElEQVQ4T2NkYGBg+P//PxMDAwMzAwMDiIZhavNpYQctzET3N7F2MCKFIbFhh64HxH/HwMBQAWKMRgz+BEnviAFF6tvRiCFcUgxExLwajZjBFzGvGBgYagDYLRQWSumlHAAAAABJRU5ErkJggg=="},e091:function(t,e,i){t.exports=i.p+"static/img/no-thing.426652cb.png"},eb30:function(t,e,i){"use strict";var n=i("65a8"),r=i.n(n);r.a},f176:function(t,e,i){"use strict";i.r(e);var n=i("da19"),r=i("77b7");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("eb30");var o,s=i("f0c5"),u=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"59354ea8",null,!1,n["a"],o);e["default"]=u.exports}}]);