(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-goods_seckill-index"],{"0056":function(t,e,i){t.exports=i.p+"static/img/priceTag.42c0f06d.png"},"2b49":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("26cb"),o=a(i("d0ca")),r=i("12b8"),s={name:"Home",props:{},mixins:[o.default],data:function(){return{top:"545",imgHost:r.HTTP_REQUEST_URL}},computed:(0,n.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){},beforeDestroy:function(){this.$store.commit("CLOSE_HOME")}};e.default=s},4899:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".pictrueBox[data-v-59354ea8]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-59354ea8]{position:fixed;color:#fff;text-align:center;z-index:9999;right:%?15?%;display:flex}.home .homeCon[data-v-59354ea8]{border-radius:%?50?%;opacity:0;height:0;color:var(--view-theme);width:0}.home .homeCon.on[data-v-59354ea8]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)!important}.home .homeCon .iconfont[data-v-59354ea8]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-59354ea8]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme)}.home .pictrue .image[data-v-59354ea8]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},4943:function(t,e,i){"use strict";var a=i("dcd8"),n=i.n(a);n.a},"65a8":function(t,e,i){var a=i("4899");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f065").default;n("0114b9c6",a,!0,{sourceMap:!1,shadowMode:!1})},"77b7":function(t,e,i){"use strict";i.r(e);var a=i("2b49"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"866c":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getCombinationList=o,e.getCombinationDetail=r,e.getCombinationPink=s,e.postCombinationRemove=l,e.getBargainList=c,e.getCombinationBannerList=u,e.getPink=d,e.getBargainUserList=f,e.getBargainDetail=g,e.postBargainStartUser=v,e.postBargainStart=h,e.postBargainHelp=m,e.postBargainHelpPrice=p,e.postBargainHelpList=b,e.postBargainHelpCount=w,e.postBargainShare=_,e.getSeckillIndexTime=k,e.getSeckillList=x,e.getSeckillDetail=C,e.getBargainPoster=y,e.getCombinationPoster=L,e.getBargainUserCancel=S,e.seckillCode=D,e.scombinationCode=T,e.getCombinationPosterData=B,e.getBargainPosterData=P,e.integralOrderConfirm=z,e.integralOrderCreate=O,e.integralOrderDetails=A,e.getIntegralProductDetail=E,e.getStoreIntegralList=I,e.getIntegralOrderList=M,e.getLogisticsDetails=H,e.orderTake=$,e.orderDel=j,e.getAdvancellList=R,e.promotionsList=U,e.giveInfo=Y;var n=a(i("c431"));function o(t){return n.default.get("combination/list",t,{noAuth:!0})}function r(t){return n.default.get("combination/detail/"+t)}function s(t){return n.default.get("combination/pink/"+t)}function l(t){return n.default.post("combination/remove",t)}function c(t){return n.default.get("bargain/list",t,{noAuth:!0})}function u(t){return n.default.get("combination/banner_list",t,{noAuth:!0})}function d(t){return n.default.get("pink",t,{noAuth:!0})}function f(t){return n.default.get("bargain/user/list",t)}function g(t){return n.default.get("bargain/detail/"+t)}function v(t){return n.default.post("bargain/start/user",t)}function h(t){return n.default.post("bargain/start",{bargainId:t})}function m(t){return n.default.post("bargain/help",t)}function p(t){return n.default.post("bargain/help/price",t)}function b(t){return n.default.post("bargain/help/list",t)}function w(t){return n.default.post("bargain/help/count",t)}function _(t){return n.default.post("bargain/share",{bargainId:t})}function k(){return n.default.get("seckill/index",{},{noAuth:!0})}function x(t,e){return n.default.get("seckill/list/"+t,e,{noAuth:!0})}function C(t,e){return n.default.get("seckill/detail/"+t)}function y(t){return n.default.post("bargain/poster",t)}function L(t){return n.default.post("combination/poster",t)}function S(t){return n.default.post("bargain/user/cancel",t)}function D(t,e){return n.default.get("seckill/code/"+t,e)}function T(t){return n.default.get("combination/code/"+t)}function B(t){return n.default.get("combination/poster_info/"+t)}function P(t){return n.default.get("bargain/poster_info/"+t)}function z(t){return n.default.post("store_integral/order/confirm",t)}function O(t){return n.default.post("store_integral/order/create",t)}function A(t){return n.default.get("store_integral/order/detail/".concat(t))}function E(t){return n.default.get("store_integral/detail/"+t,{},{noAuth:!0})}function I(t){return n.default.get("store_integral/list",t)}function M(t){return n.default.get("store_integral/order/list",t)}function H(t){return n.default.get("store_integral/order/express/".concat(t))}function $(t){return n.default.post("store_integral/order/take",t)}function j(t){return n.default.post("store_integral/order/del",t)}function R(t){return n.default.get("presale/list",t)}function U(t,e){return n.default.get("v2/promotions/productList/"+t,e)}function Y(t){return n.default.get("v2/promotions/give_info/"+t)}},9338:function(t,e,i){"use strict";var a=i("4ea4");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("866c"),o=a(i("f176")),r=a(i("d0ca")),s={components:{home:o.default},mixins:[r.default],data:function(){return{topImage:"",seckillList:[],timeList:[],active:5,scrollLeft:0,interval:0,status:1,countDownHour:"00",countDownMinute:"00",countDownSecond:"00",page:1,limit:8,loading:!1,loadend:!1,pageloading:!1,intoindex:""}},onLoad:function(){this.getSeckillConfig()},methods:{getSeckillConfig:function(){var t=this;(0,n.getSeckillIndexTime)().then((function(e){t.topImage=e.data.lovely,t.timeList=e.data.seckillTime,t.active=e.data.seckillTimeIndex,t.$nextTick((function(){t.intoindex="sort"+e.data.seckillTimeIndex})),t.timeList.length&&(t.scrollLeft=100*(t.active-1.37),setTimeout((function(){t.loading=!0}),2e3),t.seckillList=[],t.page=1,t.status=t.timeList[t.active].status,t.getSeckillList())}))},getSeckillList:function(){var t=this,e={page:t.page,limit:t.limit};t.loadend||t.pageloading||(this.pageloading=!0,(0,n.getSeckillList)(t.timeList[t.active].id,e).then((function(e){var i=e.data,a=i.length<t.limit;t.page++,t.seckillList=t.seckillList.concat(i),t.page=t.page,t.pageloading=!1,t.loadend=a})).catch((function(e){t.pageloading=!1})))},settimeList:function(t,e){var i=this;this.active=e,i.interval&&(clearInterval(i.interval),i.interval=null),i.interval=0,i.countDownHour="00",i.countDownMinute="00",i.countDownSecond="00",i.status=i.timeList[i.active].status,i.loadend=!1,i.page=1,i.seckillList=[],i.getSeckillList()},goDetails:function(t){uni.navigateTo({url:"/pages/activity/goods_seckill_details/index?id="+t.id+"&time="+this.timeList[this.active].stop+"&status="+this.status})}},onReachBottom:function(){this.getSeckillList()}};e.default=s},ae92:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:t.colorStyle},[a("v-uni-view",{staticClass:"flash-sale"},[a("v-uni-view",{staticClass:"saleBox"}),t.timeList.length>0?a("v-uni-view",{staticClass:"header"},[a("v-uni-image",{attrs:{src:t.timeList[t.active].slide}})],1):t._e(),a("v-uni-view",{staticClass:"seckillList acea-row row-between-wrapper"},[a("v-uni-view",{staticClass:"priceTag"},[a("v-uni-image",{attrs:{src:i("0056")}})],1),a("v-uni-view",{staticClass:"timeLsit"},[a("v-uni-scroll-view",{staticClass:"scroll-view_x",staticStyle:{width:"auto",overflow:"hidden",height:"106rpx"},attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.scrollLeft,"scroll-into-view":t.intoindex}},[t._l(t.timeList,(function(e,i){return[a("v-uni-view",{key:i+"_0",staticClass:"item",class:t.active==i?"on":"",attrs:{id:"sort"+i},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.settimeList(e,i)}}},[a("v-uni-view",{staticClass:"time"},[t._v(t._s(e.time))]),a("v-uni-view",{staticClass:"state"},[t._v(t._s(e.state))])],1)]}))],2)],1)],1),a("v-uni-view",{staticClass:"list"},[t._l(t.seckillList,(function(e,i){return[a("v-uni-view",{key:i+"_0",staticClass:"item acea-row row-between-wrapper",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetails(e)}}},[a("v-uni-view",{staticClass:"pictrue"},[a("v-uni-image",{attrs:{src:e.image}})],1),a("v-uni-view",{staticClass:"text acea-row row-column-around"},[a("v-uni-view",{staticClass:"name line1"},[t._v(t._s(e.title))]),a("v-uni-view",{staticClass:"money"},[t._v("￥"),a("v-uni-text",{staticClass:"num font-color"},[t._v(t._s(e.price))]),a("v-uni-text",{staticClass:"y_money"},[t._v("￥"+t._s(e.ot_price))])],1),a("v-uni-view",{staticClass:"limit"},[t._v("限量"),a("v-uni-text",{staticClass:"limitPrice"},[t._v(t._s(e.quota_show)+t._s(e.unit_name||""))])],1),a("v-uni-view",{staticClass:"progress"},[a("v-uni-view",{staticClass:"bg-reds",style:"width:"+e.percent+"%;"}),a("v-uni-view",{staticClass:"piece"},[t._v("已抢"+t._s(e.percent)+"%")])],1)],1),1==t.status?a("v-uni-view",{staticClass:"grab bg-color"},[t._v("马上抢")]):2==t.status?a("v-uni-view",{staticClass:"grab bg-color"},[t._v("未开始")]):a("v-uni-view",{staticClass:"grab bg-color-hui"},[t._v("已结束")])],1)]}))],2)],1),0!=t.seckillList.length||1==t.page&&0!=t.active?t._e():a("v-uni-view",{staticClass:"no-goods"},[a("v-uni-image",{attrs:{src:i("e091"),mode:""}}),a("v-uni-text",{staticClass:"tip"},[t._v("暂无秒杀商品，去看看其他商品吧～")])],1),t.navigation?a("home"):t._e()],1)},o=[]},cd9b:function(t,e,i){"use strict";i.r(e);var a=i("9338"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},d0ca:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{colorStyle:"",navigation:0,colorNum:0}},created:function(){var t=this;this.colorStyle=uni.getStorageSync("viewColor"),uni.$on("ok",(function(e){t.colorStyle=e})),this.navigation=uni.getStorageSync("navigation"),uni.$on("navOk",(function(e){t.navigation=e}))},methods:{colorData:function(){var t=this;this.colorNum=uni.getStorageSync("statusColor"),uni.$on("colorOk",(function(e){t.colorNum=e}))}}};e.default=a},da19:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[i("v-uni-view",{staticStyle:{"touch-action":"none"}},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?i("v-uni-view",{staticClass:"homeCon bg-color",class:!0===t.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/index/index"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/order_addcart/order_addcart"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/user/index"}})],1):t._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?t.imgHost+"/statics/images/close.gif":t.imgHost+"/statics/images/open.gif"}})],1)],1)],1)],1)],1)},o=[]},dcd8:function(t,e,i){var a=i("fa7d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f065").default;n("51532a8a",a,!0,{sourceMap:!1,shadowMode:!1})},e091:function(t,e,i){t.exports=i.p+"static/img/no-thing.426652cb.png"},e8b0:function(t,e,i){"use strict";i.r(e);var a=i("ae92"),n=i("cd9b");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("4943");var r,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"70d0364d",null,!1,a["a"],r);e["default"]=l.exports},eb30:function(t,e,i){"use strict";var a=i("65a8"),n=i.n(a);n.a},f176:function(t,e,i){"use strict";i.r(e);var a=i("da19"),n=i("77b7");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("eb30");var r,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"59354ea8",null,!1,a["a"],r);e["default"]=l.exports},fa7d:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* crmeb颜色变量 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-70d0364d]{background-color:#f5f5f5!important}.no-goods[data-v-70d0364d]{margin:0 %?30?%;background-color:#fff;text-align:center;padding:%?20?% 0 %?100?% 0;color:#999;border-radius:%?10?%}.no-goods uni-image[data-v-70d0364d]{width:%?414?%;height:%?304?%;margin:%?40?% auto 0 auto;display:block}.flash-sale .header[data-v-70d0364d]{width:%?710?%;height:%?300?%;margin:%?-215?% auto 0 auto;border-radius:%?20?%}.flash-sale .header uni-image[data-v-70d0364d]{width:100%;height:100%;border-radius:%?20?%}.flash-sale .seckillList[data-v-70d0364d]{padding:0 %?20?%}.flash-sale .seckillList .priceTag[data-v-70d0364d]{width:%?75?%;height:%?70?%}.flash-sale .seckillList .priceTag uni-image[data-v-70d0364d]{width:100%;height:100%}.flash-sale .timeLsit[data-v-70d0364d]{width:%?610?%;white-space:nowrap;margin:%?10?% 0}.flash-sale .timeLsit .item[data-v-70d0364d]{display:inline-block;font-size:%?20?%;color:#666;text-align:center;padding:%?11?% 0;box-sizing:border-box;height:%?96?%;margin-right:%?35?%}.flash-sale .timeLsit .item .time[data-v-70d0364d]{font-size:%?36?%;font-weight:600;color:#333}.flash-sale .timeLsit .item.on .time[data-v-70d0364d]{color:var(--view-theme)}.flash-sale .timeLsit .item.on .state[data-v-70d0364d]{width:%?90?%;height:%?30?%;border-radius:%?15?%;background:var(--view-theme);color:#fff}.flash-sale .countDown[data-v-70d0364d]{height:%?92?%;border-bottom:%?1?% solid #f0f0f0;margin-top:%?-14?%;font-size:%?28?%;color:#282828}.flash-sale .countDown .num[data-v-70d0364d]{font-size:%?28?%;font-weight:700;background-color:#ffcfcb;padding:%?4?% %?7?%;border-radius:%?3?%}.flash-sale .countDown .text[data-v-70d0364d]{font-size:%?28?%;color:#282828;margin-right:%?13?%}.flash-sale .list .item[data-v-70d0364d]{height:%?230?%;position:relative;width:%?710?%;margin:0 auto %?20?% auto;background-color:#fff;border-radius:%?20?%;padding:0 %?25?%}.flash-sale .list .item .pictrue[data-v-70d0364d]{width:%?180?%;height:%?180?%;border-radius:%?10?%}.flash-sale .list .item .pictrue uni-image[data-v-70d0364d]{width:100%;height:100%;border-radius:%?10?%}.flash-sale .list .item .text[data-v-70d0364d]{width:%?460?%;font-size:%?30?%;color:#333;height:%?166?%}.flash-sale .list .item .text .name[data-v-70d0364d]{width:100%}.flash-sale .list .item .text .money[data-v-70d0364d]{font-size:%?30?%;color:#e93323}.flash-sale .list .item .text .money .num[data-v-70d0364d]{font-size:%?40?%;font-weight:500;font-family:Guildford Pro}.flash-sale .list .item .text .money .y_money[data-v-70d0364d]{font-size:%?24?%;color:#999;-webkit-text-decoration-line:line-through;text-decoration-line:line-through;margin-left:%?15?%}.flash-sale .list .item .text .limit[data-v-70d0364d]{font-size:%?22?%;color:#999;margin-bottom:%?5?%}.flash-sale .list .item .text .limit .limitPrice[data-v-70d0364d]{margin-left:%?10?%}.flash-sale .list .item .text .progress[data-v-70d0364d]{overflow:hidden;background-color:#ffefef;width:%?260?%;border-radius:%?18?%;height:%?18?%;position:relative}.flash-sale .list .item .text .progress .bg-reds[data-v-70d0364d]{width:0;height:100%;transition:width .6s ease;background:linear-gradient(90deg,#e93323,#ff8933)}.flash-sale .list .item .text .progress .piece[data-v-70d0364d]{position:absolute;left:8%;-webkit-transform:translateY(-50%);transform:translateY(-50%);top:49%;font-size:%?16?%;color:#ffb9b9}.flash-sale .list .item .grab[data-v-70d0364d]{font-size:%?28?%;color:#fff;width:%?150?%;height:%?54?%;border-radius:%?27?%;text-align:center;line-height:%?54?%;position:absolute;right:%?30?%;bottom:%?30?%;background:#bbb}.flash-sale .saleBox[data-v-70d0364d]{width:100%;height:%?230?%;background:var(--view-theme);border-radius:0 0 %?50?% %?50?%}body.?%PAGE?%[data-v-70d0364d]{background-color:#f5f5f5!important}',""]),t.exports=e}}]);