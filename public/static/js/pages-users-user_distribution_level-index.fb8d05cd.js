(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_distribution_level-index"],{"16a8":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getProductDetail=o,e.getProductCode=r,e.collectAdd=s,e.collectDel=l,e.postCartAdd=c,e.getCategoryList=d,e.getProductslist=u,e.getProductHot=f,e.collectAll=v,e.getGroomList=g,e.getCollectUserList=p,e.getVisitList=m,e.deleteVisitList=h,e.getReplyList=w,e.getReplyConfig=y,e.getReplyPraise=C,e.getUnReplyPraise=b,e.getReplyInfo=A,e.getReplyComment=k,e.postReplyPraise=_,e.postUnReplyPraise=x,e.replyComment=I,e.getSearchKeyword=j,e.storeListApi=M,e.storeDiscountsList=R,e.postCartNum=Q,e.getAttr=E,e.storeCardApi=O,e.brand=L;var a=n(i("c431"));function o(t,e){return a.default.get("product/detail/"+t,e,{noAuth:!0})}function r(t){return a.default.get("product/code/"+t,{})}function s(t,e){return a.default.post("collect/add",{id:t,category:void 0===e?"product":e})}function l(t,e){return a.default.post("collect/del",{id:t,category:void 0===e?"product":e})}function c(t){return a.default.post("cart/add",t)}function d(){return a.default.get("category",{},{noAuth:!0})}function u(t){return a.default.get("products",t,{noAuth:!0})}function f(t,e){return a.default.get("product/hot",{page:void 0===t?1:t,limit:void 0===e?4:e},{noAuth:!0})}function v(t,e){return a.default.post("collect/all",{id:t,category:void 0===e?"product":e})}function g(t,e){return a.default.get("groom/list/"+t,e,{noAuth:!0})}function p(t){return a.default.get("collect/user",t)}function m(t){return a.default.get("user/visit_list",t)}function h(t){return a.default.delete("user/visit",t)}function w(t,e){return a.default.get("v2/reply/list/"+t,e,{noAuth:!0})}function y(t){return a.default.get("reply/config/"+t,{},{noAuth:!0})}function C(t){return a.default.post("reply/reply_praise/"+t)}function b(t){return a.default.post("reply/un_reply_praise/"+t)}function A(t){return a.default.get("reply/info/"+t)}function k(t,e){return a.default.get("reply/comment/"+t,e)}function _(t){return a.default.post("reply/praise/"+t)}function x(t){return a.default.post("reply/un_praise/"+t)}function I(t,e){return a.default.post("reply/comment/"+t,e)}function j(){return a.default.get("search/keyword",{},{noAuth:!0})}function M(t){return a.default.get("store_list",t,{noAuth:!0})}function R(t){return a.default.get("store_discounts/list/"+t,{},{noAuth:!0})}function Q(t){return a.default.post("v2/set_cart_num",t)}function E(t,e){return a.default.get("v2/get_attr/"+t+"/"+e)}function O(){return a.default.get("store/staff/card/code")}function L(t){return a.default.get("brand",t,{noAuth:!0})}},"2dd2":function(t,e,i){"use strict";i.r(e);var n=i("7afd"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"34f7":function(t,e,i){"use strict";i.r(e);var n=i("5392"),a=i("2dd2");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("a1b6");var r,s=i("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"9ed18956",null,!1,n["a"],r);e["default"]=l.exports},"3a37":function(t,e,i){"use strict";i.r(e);var n=i("fd0a"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"3fcf":function(t,e){t.exports="data:image/png;base64,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"},4913:function(t,e,i){"use strict";i("99af"),i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.goShopDetail=n,e.goPage=a;getApp();function n(t,e){return new Promise((function(i){t.activity&&"1"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_seckill_details/index?id=".concat(t.activity.id,"&time=").concat(t.activity.time,"&status=1")}):t.activity&&"2"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_bargain_details/index?id=".concat(t.activity.id,"&bargain=").concat(e)}):t.activity&&"3"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_combination_details/index?id=".concat(t.activity.id)}):i(t)}))}function a(){return new Promise((function(t){t(!0)}))}},"4c39":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{style:t.colorStyle},[n("v-uni-view",{staticClass:"member-center"},[n("v-uni-image",{staticClass:"bag",attrs:{src:i("3fcf"),mode:""}}),n("v-uni-view",{staticClass:"header"},[n("v-uni-swiper",{staticClass:"swiper",attrs:{current:t.swiperIndex,"previous-margin":"55rpx","next-margin":"55rpx"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},[t._l(t.distributionLevel,(function(e,a){return[n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item",class:{on:t.swiperIndex==a},style:{"background-image":"url("+e.image+")"}},[n("v-uni-view",{staticClass:"acea-row row-middle user-wrap"},[n("v-uni-image",{staticClass:"image",attrs:{src:t.userInfo.avatar}}),n("v-uni-view",{staticClass:"user-msg"},[n("v-uni-view",{staticClass:"text"},[n("v-uni-view",{staticClass:"name"},[t._v(t._s(t.userInfo.nickname))]),n("v-uni-view",{staticClass:"level",class:{"level-sty":e.grade>(t.levelInfo.grade||0)}},[t._v(t._s(e.name))])],1)],1),e.grade>(t.levelInfo.grade||0)?n("v-uni-view",{staticClass:"state"},[n("v-uni-image",{staticClass:"lock",attrs:{src:i("9318"),mode:""}})],1):t._e()],1),[n("v-uni-view",{staticClass:"level-grow-wrap"},[n("v-uni-view",{staticClass:"level-info",class:{"lock-sty":e.grade>(t.levelInfo.grade||0)}},[n("v-uni-view",{staticClass:"level-info-title"},[t._v("一级分佣上浮")]),n("v-uni-view",{staticClass:"num"},[t._v(t._s(e.one_brokerage)),n("v-uni-text",{staticClass:"percent"},[t._v("%")])],1)],1),n("v-uni-view",{staticClass:"level-info",class:{"lock-sty":e.grade>(t.levelInfo.grade||0)}},[n("v-uni-view",{staticClass:"level-info-title"},[t._v("二级分佣上浮")]),n("v-uni-view",{staticClass:"num"},[t._v(t._s(e.two_brokerage)),n("v-uni-text",{staticClass:"percent"},[t._v("%")])],1)],1)],1)]],2)],1)]}))],2)],1),n("v-uni-view",{staticClass:"skill-section"},[n("v-uni-view",{staticClass:"section-hd acea-row row-between-wrapper"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-view",{staticClass:"line-left"}),n("v-uni-text",[t._v("快速升级技巧")])],1),n("v-uni-view",{staticClass:"task"},[n("v-uni-text",{staticClass:"task-num"},[t._v(t._s(t.taskNum))]),n("v-uni-text",[t._v("/"+t._s(t.task.length))])],1)],1),n("v-uni-view",{staticClass:"section-bd acea-row"},t._l(t.task,(function(e,i){return n("v-uni-view",{key:e.id,staticClass:"item acea-row row-middle"},[n("v-uni-view",{staticClass:"text"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-view",{staticClass:"name line2"},[t._v(t._s(e.name)),n("v-uni-text",{staticClass:"iconfont icon-wenti",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.opHelp(i)}}})],1),n("v-uni-text",{staticClass:"mark"},[t._v(t._s(e.finish?"已完成":"未完成"))])],1),n("v-uni-view",{staticClass:"process"},[n("v-uni-view",{staticClass:"fill",style:{width:Math.floor(e.new_number/e.number>1?100:e.new_number/e.number*100)+"%"}})],1),n("v-uni-view",{staticClass:"info-box"},[n("v-uni-view",{staticClass:"info"},[t._v(t._s(e.finish?"":e.task_type_title))]),n("v-uni-view",{staticClass:"link",attrs:{"hover-class":"none"}},[n("v-uni-text",{staticClass:"new-number"},[t._v(t._s(e.new_number))]),t._v("/"+t._s(e.number))],1)],1)],1)],1)})),1)],1),t.hostProduct.length?n("recommend",{attrs:{hostProduct:t.hostProduct}}):t._e(),n("v-uni-view",{staticClass:"growthValue",class:0==t.growthValue?"on":""},[n("v-uni-text",{staticClass:"iconfont icon-guanbi3",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.growthValue=!0}}}),n("v-uni-view",{staticClass:"conter"},[t._v(t._s(t.illustrate))])],1),n("v-uni-view",{staticClass:"mask",attrs:{hidden:t.growthValue},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.growthValueClose.apply(void 0,arguments)}}})],1)],1)},o=[]},5392:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"recommend",style:t.colorStyle},[i("v-uni-view",{staticClass:"title acea-row row-center-wrapper"},[i("v-uni-text",{staticClass:"iconfont icon-zhuangshixian"}),i("v-uni-text",{staticClass:"name"},[t._v("热门推荐")]),i("v-uni-text",{staticClass:"iconfont icon-zhuangshixian lefticon"})],1),i("v-uni-view",{staticClass:"recommendList acea-row row-between-wrapper"},t._l(t.hostProduct,(function(e,n){return i("v-uni-view",{key:n,staticClass:"item",attrs:{"hover-class":"none"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetail(e)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:e.image}}),e.activity&&"1"===e.activity.type?i("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v("秒杀")]):t._e(),e.activity&&"2"===e.activity.type?i("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v("砍价")]):t._e(),e.activity&&"3"===e.activity.type?i("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v("拼团")]):t._e()],1),i("v-uni-view",{staticClass:"name line1"},[t._v(t._s(e.store_name))]),i("v-uni-view",{staticClass:"money font-color"},[t._v("￥"),i("v-uni-text",{staticClass:"num"},[t._v(t._s(e.price))])],1)],1)})),1)],1)},o=[]},"7afd":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("26cb"),o=i("4913"),r=n(i("d0ca")),s={computed:(0,a.mapGetters)(["uid"]),props:{hostProduct:{type:Array,default:function(){return[]}}},mixins:[r.default],data:function(){return{}},methods:{goDetail:function(t){(0,o.goShopDetail)(t,this.uid).then((function(e){uni.navigateTo({url:"/pages/goods_details/index?id=".concat(t.id)})}))}}};e.default=s},8479:function(t,e,i){"use strict";i.r(e);var n=i("4c39"),a=i("3a37");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("fde1");var r,s=i("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"4760649a",null,!1,n["a"],r);e["default"]=l.exports},"8d0b":function(t,e,i){var n=i("de81");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f065").default;a("25955b4c",n,!0,{sourceMap:!1,shadowMode:!1})},9318:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABKCAMAAAASaYMYAAAAM1BMVEUAAABKSkpMTExKSkpAQEBKSkpKSkpKSkpLS0tKSkpJSUlKSkpLS0tKSkpISEhKSkpLS0vvNfJ5AAAAEHRSTlMAgEDAEPBgMKDgULDQkCBw3Z/XkAAAATxJREFUWMPt1VtugzAQRuEzvhsMyf5X24eoSiNkVFz/lSLlLOBjYIwMuGdmxcf7aK0s9MppHXZrn2W34Xk3+oWiUEmj6sJJyyBaOcsUo+LH0MJZbgxtnNbGVBRflbH3j5aB/VYHUHqrCPBoG0Bjb73h5r3fdkgd9Oqh8pAfT4sJ1jmoI8fnQQ9T0PZzugrrDHR7GS5jM1DDvfzobj5qM9DEsfxX1MGxa2hRoPbPqLM0iKY+anc/iGYFigT1CvQm2D5BgbIqUPcLNBzQi6uqdsxfRvPEe//ZpkBDE6BkBUpSoCQFSlKgpChAyVGAElYBCksVoGBRgBJSnY8CrtT5KJBtPYUZzjm32HfFH9Ap5S3ORyFYnI9CbgKUsApQQhOg7AoUU6AhClCKAnUKFAnqEWQISghywHuggU+f5vYFLaGJcxAFoxoAAAAASUVORK5CYII="},"9aab":function(t,e,i){var n=i("c2b8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f065").default;a("688d9360",n,!0,{sourceMap:!1,shadowMode:!1})},a1b6:function(t,e,i){"use strict";var n=i("9aab"),a=i.n(n);a.a},c2b8:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* crmeb颜色变量 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.recommend[data-v-9ed18956]{background-color:#fff}.recommend .title[data-v-9ed18956]{height:%?135?%;font-size:%?28?%;color:#282828}.recommend .title .name[data-v-9ed18956]{margin:0 %?28?%}.recommend .title .iconfont[data-v-9ed18956]{font-size:%?170?%;color:#454545}.recommend .title .iconfont.lefticon[data-v-9ed18956]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.recommend .recommendList[data-v-9ed18956]{padding:0 %?30?%}.recommend .recommendList .item[data-v-9ed18956]{width:%?335?%;margin-bottom:%?30?%}.recommend .recommendList .item .pictrue[data-v-9ed18956]{position:relative;width:100%;height:%?335?%}.recommend .recommendList .item .pictrue uni-image[data-v-9ed18956]{width:100%;height:100%;border-radius:%?20?%}.recommend .recommendList .item .name[data-v-9ed18956]{font-size:%?28?%;color:#282828;margin-top:%?20?%}.recommend .recommendList .item .money[data-v-9ed18956]{font-size:%?20?%;margin-top:%?8?%}.recommend .recommendList .item .money .num[data-v-9ed18956]{font-size:%?28?%}',""]),t.exports=e},d0ca:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{colorStyle:"",navigation:0,colorNum:0}},created:function(){var t=this;this.colorStyle=uni.getStorageSync("viewColor"),uni.$on("ok",(function(e){t.colorStyle=e})),this.navigation=uni.getStorageSync("navigation"),uni.$on("navOk",(function(e){t.navigation=e}))},methods:{colorData:function(){var t=this;this.colorNum=uni.getStorageSync("statusColor"),uni.$on("colorOk",(function(e){t.colorNum=e}))}}};e.default=n},de81:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* crmeb颜色变量 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.swiper .swiper-item[data-v-4760649a]{height:100%;border-radius:%?6?%;background:50%/100% 100% no-repeat;-webkit-transform:scale(.9);transform:scale(.9);transition:all .2s ease-in 0s;line-height:1.1}.swiper .swiper-item.on[data-v-4760649a]{-webkit-transform:none;transform:none}.swiper .user-wrap[data-v-4760649a]{padding-top:%?20?%;padding-left:%?22?%;line-height:1.1}.swiper .user-wrap .image[data-v-4760649a]{width:%?90?%;height:%?90?%;border-radius:50%}.swiper .user-wrap .user-msg[data-v-4760649a]{margin-left:%?14?%}.swiper .user-wrap .user-msg .text[data-v-4760649a]{flex:1;display:flex;align-items:center;min-width:0;font-size:%?22?%;color:#666}.swiper .user-wrap .user-msg .text .num[data-v-4760649a]{margin-right:%?10?%;margin-left:%?10?%;font-size:%?30?%;font-style:italic}.swiper .user-wrap .name[data-v-4760649a]{flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-weight:700;font-size:%?28?%;color:#fff;margin-right:%?8?%}.swiper .user-wrap .state[data-v-4760649a]{position:absolute;top:%?0?%;right:0;width:%?70?%;height:%?70?%}.swiper .user-wrap .state .lock[data-v-4760649a]{width:100%;height:100%}.swiper .grow-wrap[data-v-4760649a]{padding-left:%?34?%;margin-top:%?70?%;font-size:%?20?%;color:#474747;display:flex}.swiper .grow-wrap .num[data-v-4760649a]{margin-right:%?8?%;margin-left:%?8?%;font-size:%?26?%}.swiper .level[data-v-4760649a]{font-size:%?24?%;color:#fff;border-radius:%?4?%;border:1px solid #fff;padding:%?3?% %?8?%}.skill-section[data-v-4760649a]{margin:%?24?% %?30?% %?20?% %?30?%;background-color:#fff;border-radius:%?8?%}.skill-section .section-hd[data-v-4760649a]{padding:%?38?% %?36?% 0 %?36?%;font-weight:700;font-size:%?32?%;color:#282828}.skill-section .section-hd .title[data-v-4760649a]{display:flex;align-items:center;font-size:%?32?%}.skill-section .section-hd .title .line-left[data-v-4760649a]{margin-right:%?16?%;width:%?8?%;height:%?40?%;border-radius:%?4?%;background-color:#e8b869}.skill-section .section-hd .task[data-v-4760649a]{color:#999;font-size:%?26?%;font-weight:400}.skill-section .section-hd .task-num[data-v-4760649a]{color:#c6985c}.skill-section .section-bd[data-v-4760649a]{padding:%?30?%}.skill-section .section-bd .item[data-v-4760649a]{width:100%;padding:10px %?25?%;border-radius:%?4?%;background-color:#f8f8f8;box-shadow:0 %?5?% %?10?% 0 #f8f8f8}.skill-section .section-bd .item .name[data-v-4760649a]{font-size:%?28?%}.skill-section .section-bd .item ~ .item[data-v-4760649a]{margin-top:%?24?%}.skill-section .section-bd .text[data-v-4760649a]{flex:1}.skill-section .section-bd .title[data-v-4760649a]{font-weight:700;font-size:%?30?%;color:#282828;display:flex;justify-content:space-between}.skill-section .section-bd .title .icon-wenti[data-v-4760649a]{color:#999;margin-left:%?10?%}.skill-section .section-bd .title .mark[data-v-4760649a]{text-align:right;margin-left:%?20?%;font-weight:400;font-size:%?24?%;color:#999;white-space:nowrap}.skill-section .section-bd .process[data-v-4760649a]{height:%?12?%;border-radius:%?6?%;margin-top:%?22?%;background-color:#eee}.skill-section .section-bd .process .fill[data-v-4760649a]{height:100%;border-radius:%?6?%;background-color:#e7b667}.skill-section .section-bd .info-box[data-v-4760649a]{display:flex;justify-content:space-between;align-items:center;margin-top:%?18?%}.skill-section .section-bd .info[data-v-4760649a]{font-size:%?22?%;color:#999}.skill-section .section-bd .link[data-v-4760649a]{font-size:%?26?%;color:#999}.skill-section .section-bd .link .new-number[data-v-4760649a]{color:#c6985c}.bag[data-v-4760649a]{position:absolute;width:100%;height:%?285?%}.member-center .header[data-v-4760649a]{padding-top:%?37?%}.member-center .header uni-swiper[data-v-4760649a]{position:relative}.member-center .growthValue[data-v-4760649a]{background-color:#fff;border-radius:%?16?%;position:fixed;top:%?266?%;left:50%;width:%?560?%;min-height:%?440?%;margin-left:%?-280?%;z-index:99;-webkit-transform:translate3d(0,-200%,0);transform:translate3d(0,-200%,0);transition:all .3s cubic-bezier(.25,.5,.5,.9)}.member-center .growthValue.on[data-v-4760649a]{-webkit-transform:translateZ(0);transform:translateZ(0)}.member-center .growthValue .pictrue[data-v-4760649a]{width:100%;height:%?257?%;position:relative}.member-center .growthValue .pictrue uni-image[data-v-4760649a]{width:100%;height:100%;border-radius:%?16?% %?16?% 0 0}.member-center .growthValue .conter[data-v-4760649a]{padding:0 %?35?%;font-size:%?30?%;color:#333;margin-top:%?58?%;line-height:1.5;height:%?350?%;overflow:auto}.member-center .growthValue .iconfont[data-v-4760649a]{position:absolute;font-size:%?65?%;color:#fff;bottom:%?-90?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.level-grow-wrap[data-v-4760649a]{position:absolute;display:flex;left:%?30?%;bottom:%?39?%;font-size:%?20?%;color:#474747}.level-grow-wrap .level-info[data-v-4760649a]{display:flex;justify-content:center;flex-direction:column;margin-right:%?40?%}.level-grow-wrap .level-info .level-info-title[data-v-4760649a]{font-size:%?22?%;color:#fff;opacity:.6}.level-grow-wrap .level-info .num[data-v-4760649a]{color:#fff;font-size:%?40?%;margin-top:%?20?%}.level-grow-wrap .level-info .num .percent[data-v-4760649a]{font-size:%?24?%}.level-grow-wrap .lock-sty[data-v-4760649a]{opacity:.7}.swiper .level-sty[data-v-4760649a]{opacity:.7}',""]),t.exports=e},fd0a:function(t,e,i){"use strict";(function(t){var n=i("4ea4");i("99af"),i("c740"),i("4160"),i("acd8"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("d5e6"),o=i("16a8"),r=i("fa9e"),s=i("26cb"),l=n(i("34f7")),c=n(i("d0ca")),d={components:{recommend:l.default},mixins:[c.default],data:function(){return{reach_count:0,distributionLevel:[],swiperIndex:0,growthValue:!0,task:[],illustrate:"",level_id:0,hostProduct:[],grade:0,hotScroll:!1,hotPage:1,hotLimit:10,level_title:"",level_discount:"",levelInfo:{},userInfo:{},taskInfo:{},taskNum:0}},computed:(0,s.mapGetters)(["isLogin"]),watch:{distributionLevel:function(){var t=this;t.distributionLevel.length>0&&t.distributionLevel.forEach((function(e,i){!1===e.is_clear&&(t.activeIndex=i,t.grade=e.grade)}))},isLogin:{handler:function(t,e){t&&this.get_host_product()},deep:!0}},onLoad:function(){this.isLogin?this.agentLevelList():(0,r.toLogin)(),this.get_host_product()},methods:{agentLevelList:function(){var t=this;(0,a.agentLevelList)().then((function(e){var i=e.data,n=i.level_info,a=i.level_list,o=i.task,r=i.user;t.levelInfo=n,t.distributionLevel=a,t.userInfo=r,t.taskInfo=o,t.levelInfo.exp=parseFloat(t.levelInfo.exp),t.levelInfo.rate=Math.floor(t.levelInfo.exp/t.levelInfo.exp_num*100),t.levelInfo.rate>100&&(t.levelInfo.rate=100);var s=a.findIndex((function(t,e){return t.id===r.agent_level}));-1!==s&&(t.swiperIndex=-1===s?0:s+1),t.level_id=t.distributionLevel[-1===s?0:s+1].id||0,t.getTask()}))},get_host_product:function(){var t=this;t.hotScroll||(0,o.getProductHot)(t.hotPage,t.hotLimit).then((function(e){t.hotPage++,t.hotScroll=e.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(e.data)}))},swiperChange:function(t){var e=t.detail.current;this.swiperIndex=e,this.level_id=this.distributionLevel[e].id||0,this.level_title=this.distributionLevel[e].name||"",this.level_discount=this.distributionLevel[e].discount||"",this.getTask()},growthValueClose:function(){this.growthValue=!0},opHelp:function(t){this.growthValue=!1,this.illustrate=this.task[t].desc},getTask:function(){var t=this;t.taskNum=0,(0,a.agentLevelTaskList)(t.level_id).then((function(e){t.task=e.data.list;for(var i=0;i<t.task.length;i++)t.task[i].finish&&(t.taskNum+=1)}))}},onReachBottom:function(){that.hotScroll||this.get_host_product()}};e.default=d}).call(this,i("5a52")["default"])},fde1:function(t,e,i){"use strict";var n=i("8d0b"),a=i.n(n);a.a}}]);