(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-admin-store-index"],{"03fa":function(t,e,i){"use strict";i.r(e);var a=i("66c7"),n=i("9413");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("51c6");var o,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"ec2a32a4",null,!1,a["a"],o);e["default"]=d.exports},"08ca":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.loading&&!t.loaded?i("v-uni-view",{staticClass:"Loads acea-row row-center-wrapper",staticStyle:{"margin-top":".2rem"}},[t.loading?i("v-uni-view",[i("v-uni-view",{staticClass:"iconfont icon-jiazai loading acea-row row-center-wrapper"}),t._v("正在加载中")],1):i("v-uni-view",[t._v("上拉加载更多")])],1):t._e()],1)},r=[]},"2b49":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("26cb"),r=a(i("d0ca")),o=i("12b8"),s={name:"Home",props:{},mixins:[r.default],data:function(){return{top:"545",imgHost:o.HTTP_REQUEST_URL}},computed:(0,n.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){},beforeDestroy:function(){this.$store.commit("CLOSE_HOME")}};e.default=s},4899:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".pictrueBox[data-v-59354ea8]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-59354ea8]{position:fixed;color:#fff;text-align:center;z-index:9999;right:%?15?%;display:flex}.home .homeCon[data-v-59354ea8]{border-radius:%?50?%;opacity:0;height:0;color:var(--view-theme);width:0}.home .homeCon.on[data-v-59354ea8]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)!important}.home .homeCon .iconfont[data-v-59354ea8]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-59354ea8]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme)}.home .pictrue .image[data-v-59354ea8]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},4918:function(t,e,i){"use strict";i.r(e);var a=i("08ca"),n=i("9d69");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("879e");var o,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"58f839b4",null,!1,a["a"],o);e["default"]=d.exports},"51c6":function(t,e,i){"use strict";var a=i("ecc5"),n=i.n(a);n.a},"5e2b":function(t,e,i){var a=i("b67c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f065").default;n("6334bd0c",a,!0,{sourceMap:!1,shadowMode:!1})},"65a8":function(t,e,i){var a=i("4899");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f065").default;n("0114b9c6",a,!0,{sourceMap:!1,shadowMode:!1})},"66c7":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"order-index"},[i("v-uni-view",{staticClass:"topBox"},[i("v-uni-view",{staticClass:"header acea-row"},[i("v-uni-view",{staticClass:"items"},[i("v-uni-image",{attrs:{src:t.user.avatar,mode:""}}),i("span",{staticClass:"font"},[t._v(t._s(t.user.staff_name))]),i("span",[t._v("("+t._s(0==t.manager?"店员":"店长")+")")])],1),i("v-uni-view",{staticClass:"item"},[t.isWeixin?i("v-uni-view",{staticClass:"iconfont icon-saoma",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.scanCode.apply(void 0,arguments)}}}):t._e()],1)],1),1==t.is_manager||1==t.user.order_status?i("v-uni-view",{staticClass:"topstatus acea-row"},[i("v-uni-navigator",{attrs:{url:"/pages/admin/store/order/index?type=0","hover-class":"none"}},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.orderlist.unpaid_count))]),i("v-uni-view",[t._v("待付款")])],1),i("v-uni-navigator",{attrs:{url:"/pages/admin/store/order/index?type=1","hover-class":"none"}},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.orderlist.unshipped_count))]),i("v-uni-view",[t._v("待配送")])],1),i("v-uni-navigator",{attrs:{url:"/pages/admin/store/order/index?type=5","hover-class":"none"}},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.orderlist.unwriteoff_count))]),i("v-uni-view",[t._v("待核销")])],1),i("v-uni-navigator",{attrs:{url:"/pages/admin/store/order/index?type=3","hover-class":"none"}},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.orderlist.evaluated_count))]),i("v-uni-view",[t._v("待评价")])],1),i("v-uni-navigator",{attrs:{url:"/pages/admin/store/order/index?type=-3","hover-class":"none"}},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.orderlist.refund_count))]),i("v-uni-view",[t._v("退款")])],1)],1):t._e()],1),i("v-uni-view",{staticClass:"wrapper"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-view",{staticClass:"uni-list-cell-db",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hiddened.apply(void 0,arguments)}}},[1==t.is_manager?i("v-uni-picker",{attrs:{range:t.array},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange.apply(void 0,arguments)},cancel:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}},[i("span",{staticClass:"iconfont icon-shujutongji"}),i("v-uni-label",{staticClass:"aa"},[t._v(t._s(t.array[t.index]))]),i("v-uni-text",{staticClass:"iconfont",class:1==t.hidden?"icon-xiangxia":"icon-xiangshang"})],1):i("v-uni-view",[i("span",{staticClass:"iconfont icon-shujutongji"}),t._v("数据统计")])],1),i("v-uni-view",{staticClass:"tab"},[i("v-uni-view",{staticClass:"box",class:"today"==t.detailtabs?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.detailtab("today")}}},[t._v("今日")]),i("v-uni-view",{staticClass:"box",class:"yesterday"==t.detailtabs?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.detailtab("yesterday")}}},[t._v("昨日")]),i("v-uni-view",{staticClass:"box",class:"month"==t.detailtabs?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.detailtab("month")}}},[t._v("本月")])],1)],1),i("v-uni-view",{staticClass:"list acea-row"},[1==t.manager?i("v-uni-navigator",{staticClass:"item",attrs:{url:"/pages/admin/store/statistics/index?type=1&time="+t.detailtabs+"&manager=1","hover-class":"none"}},[i("v-uni-view",{staticClass:"num"},[t._v(t._s(t.census.send_price))]),i("v-uni-view",[t._v("配送订单额")])],1):t._e(),1==t.manager?i("v-uni-navigator",{staticClass:"item",attrs:{url:"/pages/admin/store/statistics/index?type=2&time="+t.detailtabs+"&manager=1","hover-class":"none"}},[i("v-uni-view",{staticClass:"num"},[t._v(t._s(t.census.send_count))]),i("v-uni-view",[t._v("配送订单数")])],1):t._e(),1==t.manager?i("v-uni-navigator",{staticClass:"item",attrs:{url:"/pages/admin/store/statistics/index?type=3&time="+t.detailtabs+"&manager=1","hover-class":"none"}},[i("v-uni-view",{staticClass:"num"},[t._v(t._s(t.census.refund_price))]),i("v-uni-view",[t._v("退款订单额")])],1):t._e(),i("v-uni-navigator",{staticClass:"item",attrs:{url:"/pages/admin/store/statistics/index?type=4&time="+t.detailtabs+"&manager="+t.manager,"hover-class":"none"}},[i("v-uni-view",{staticClass:"num"},[t._v(t._s(t.census.cashier_price))]),i("v-uni-view",[t._v("收银订单额")])],1),i("v-uni-navigator",{staticClass:"item",attrs:{url:"/pages/admin/store/statistics/index?type=5&time="+t.detailtabs+"&manager="+t.manager,"hover-class":"none"}},[i("v-uni-view",{staticClass:"num"},[t._v(t._s(t.census.writeoff_price))]),i("v-uni-view",[t._v("核销订单额")])],1),i("v-uni-navigator",{staticClass:"item",attrs:{url:"/pages/admin/store/statistics/index?type=6&time="+t.detailtabs+"&manager="+t.manager,"hover-class":"none"}},[i("v-uni-view",{staticClass:"num"},[t._v(t._s(t.census.svip_price))]),i("v-uni-view",[t._v("付费会员额")])],1),i("v-uni-navigator",{staticClass:"item",attrs:{url:"/pages/admin/store/statistics/index?type=7&time="+t.detailtabs+"&manager="+t.manager,"hover-class":"none"}},[i("v-uni-view",{staticClass:"num"},[t._v(t._s(t.census.recharge_price))]),i("v-uni-view",[t._v("充值订单额")])],1),i("v-uni-navigator",{staticClass:"item",attrs:{url:"/pages/admin/store/statistics/index?type=8&time="+t.detailtabs+"&manager="+t.manager,"hover-class":"none"}},[i("v-uni-view",{staticClass:"num"},[t._v(t._s(t.census.spread_count))]),i("v-uni-view",[t._v("推广用户数")])],1),i("v-uni-navigator",{staticClass:"item",attrs:{url:"/pages/admin/store/statistics/index?type=9&time="+t.detailtabs+"&manager="+t.manager,"hover-class":"none"}},[i("v-uni-view",{staticClass:"num"},[t._v(t._s(t.census.card_count))]),i("v-uni-view",[t._v("激活会员卡")])],1)],1)],1),i("v-uni-view",{staticClass:"public-wrapper"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-view",{staticClass:"uni-list-cell-db",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hiddened.apply(void 0,arguments)}}},[i("span",{staticClass:"iconfont icon-xiangxishuju"}),t._v("详细数据")]),i("v-uni-view",{staticClass:"tab"},[1==t.manager?i("v-uni-view",{staticClass:"box",class:1==t.tabs?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tab(1)}}},[t._v("配送")]):t._e(),i("v-uni-view",{staticClass:"box",class:2==t.tabs?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tab(2)}}},[t._v("收银")]),i("v-uni-view",{staticClass:"box",class:3==t.tabs?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tab(3)}}},[t._v("核销")]),i("v-uni-view",{staticClass:"box",class:4==t.tabs?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tab(4)}}},[t._v("充值")])],1)],1),i("v-uni-view",{staticClass:"nav acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"data"},[t._v("日期")]),i("v-uni-view",{staticClass:"browse"},[t._v("订单数")]),i("v-uni-view",{staticClass:"turnover"},[t._v("金额")])],1),i("Loading",{attrs:{loaded:t.loaded,loading:t.loading}}),t.list.length?i("v-uni-view",{staticClass:"conter"},t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"data"},[t._v(t._s(e.time))]),i("v-uni-view",{staticClass:"browse"},[t._v(t._s(e.count))]),i("v-uni-view",{staticClass:"turnover"},[t._v("￥"+t._s(e.price))])],1)})),1):i("v-uni-view",{staticClass:"unconter"},[t.loading?t._e():i("v-uni-view",[t._v("暂无数据")])],1)],1)],1),t.navigation?i("home"):t._e()],1)},r=[]},6722:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getStatisticsInfo=r,e.getStatisticsMonth=o,e.getAdminOrderList=s,e.setAdminOrderPrice=d,e.setAdminOrderRemark=c,e.setAdminRefundRemark=u,e.getAdminOrderDetail=l,e.getAdminRefundDetail=f,e.getAdminOrderDelivery=v,e.setAdminOrderDelivery=p,e.getStatisticsTime=g,e.setOfflinePay=m,e.setOrderRefund=h,e.getLogistics=b,e.orderVerific=w,e.orderExportTemp=_,e.orderDeliveryInfo=y,e.orderOrderDelivery=x,e.userInfo=C,e.orderInfo=k,e.statisticsMenuApi=O,e.getListApi=$,e.getStatisticsListApi=A,e.getOrderlistApi=z,e.getRefundlistApi=E,e.getOrderreMarkApi=S,e.getRefundMarkApi=L,e.getOrderPriceApi=M,e.getOrderOfflineApi=j,e.getOrderDeliveryinfoApi=T,e.getOrderExportApi=R,e.getOrderExportTemp=D,e.setOrderDelivery=I,e.getOrderDelivery=P,e.OrderRefund=B,e.OrderDetail=H,e.refundDetail=W,e.deliveryInfo=N,e.deliveryStatistics=U,e.deliveryList=Y,e.deliveryOrderList=J,e.OrderDel=Q,e.OrderCancel=q,e.orderWriteoffInfo=F,e.orderCartInfo=G,e.orderWriteoff=V,e.orderSplitInfo=K,e.orderSplitDelivery=X,e.orderRefundAgree=Z,e.storeSplitInfo=tt,e.storeSplitDelivery=et,e.storeRefundAgree=it,e.adminRefundList=at;var n=a(i("c431"));function r(){return n.default.get("admin/order/statistics",{},{login:!0})}function o(t){return n.default.get("admin/order/data",t,{login:!0})}function s(t){return n.default.get("admin/order/list",t,{login:!0})}function d(t){return n.default.post("admin/order/price",t,{login:!0})}function c(t){return n.default.post("admin/order/remark",t,{login:!0})}function u(t){return n.default.post("admin/refund_order/remark",t,{login:!0})}function l(t){return n.default.get("admin/order/detail/"+t,{},{login:!0})}function f(t){return n.default.get("admin/refund_order/detail/"+t,{},{login:!0})}function v(t){return n.default.get("admin/order/delivery/gain/"+t,{},{login:!0})}function p(t,e){return n.default.post("admin/order/delivery/keep/"+t,e,{login:!0})}function g(t){return n.default.get("admin/order/time",t,{login:!0})}function m(t){return n.default.post("admin/order/offline",t,{login:!0})}function h(t){return n.default.post("admin/order/refund",t,{login:!0})}function b(t){return n.default.get("logistics",t,{login:!1})}function w(t,e){return n.default.post("order/order_verific",{verify_code:t,is_confirm:e})}function _(t){return n.default.get("admin/order/export_temp",t)}function y(){return n.default.get("admin/order/delivery_info")}function x(){return n.default.get("admin/order/delivery")}function C(){return n.default.get("store/staff/info")}function k(t){return n.default.get("store/order/statistics",t)}function O(t){return n.default.get("store/staff/statistics",t)}function $(t){return n.default.get("store/order/data",t)}function A(t,e){return n.default.get("store/staff/data/"+t,e)}function z(t){return n.default.get("store/order/list",t)}function E(t){return n.default.get("store/refund/list",t)}function S(t){return n.default.post("store/order/remark",t)}function L(t){return n.default.post("store/refund/remark",t)}function M(t){return n.default.post("store/order/price",t)}function j(t){return n.default.post("store/order/offline",t)}function T(t){return n.default.get("store/order/delivery_info/"+t)}function R(t){return n.default.get("store/order/export_all",t,{login:!1})}function D(t){return n.default.get("store/order/export_temp",t)}function I(t,e){return n.default.post("store/order/delivery/"+t,e,{login:!0})}function P(){return n.default.get("store/delivery/list")}function B(t){return n.default.post("store/order/refund",t,{login:!0})}function H(t){return n.default.get("store/order/detail/"+t)}function W(t){return n.default.get("store/refund/detail/"+t)}function N(t){return n.default.get("store/delivery/info")}function U(t){return n.default.get("store/delivery/statistics",t)}function Y(t){return n.default.get("store/delivery/data",t)}function J(t){return n.default.get("store/delivery/order",t)}function Q(t){return n.default.delete("store/order/del/"+t)}function q(t){return n.default.post("store/order/cancel/"+t)}function F(t,e){return n.default.get("store/order/writeoff_info/"+t,e)}function G(t,e){return n.default.get("store/order/cart_info/"+t,e)}function V(t,e){return n.default.post("store/order/writeoff/"+t,e)}function K(t){return n.default.get("admin/order/split_cart_info/"+t)}function X(t,e){return n.default.put("admin/order/split_delivery/"+t,e)}function Z(t){return n.default.post("admin/order/refund_agree/"+t)}function tt(t){return n.default.get("store/order/split_cart_info/"+t)}function et(t,e){return n.default.put("store/order/split_delivery/"+t,e)}function it(t){return n.default.post("store/order/refund_agree/"+t)}function at(t){return n.default.get("admin/refund_order/list",t)}},"77b7":function(t,e,i){"use strict";i.r(e);var a=i("2b49"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"80bf":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* crmeb颜色变量 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/*订单首页*/.order-index .topBox[data-v-ec2a32a4]{padding-bottom:%?40?%;background:linear-gradient(270deg,#4276f6,#00acf8)}.order-index .header[data-v-ec2a32a4]{box-sizing:border-box;display:flex;background-size:100% 100%;width:100%;padding:%?0?% %?30?% %?0?% %?30?%;justify-content:space-between}.order-index .header .icon-saoma[data-v-ec2a32a4]{font-size:%?40?%;padding:%?30?% %?20?% %?30?% %?80?%}.order-index .header .item[data-v-ec2a32a4], .order-index .header .items[data-v-ec2a32a4]{font-size:%?24?%;color:#fff;height:%?120?%;display:flex;align-items:center}.order-index .header .item .font[data-v-ec2a32a4], .order-index .header .items .font[data-v-ec2a32a4]{display:inline-block;margin-left:%?16?%;margin-right:%?16?%;font-size:%?30?%}.order-index .header .items uni-image[data-v-ec2a32a4]{width:%?64?%;height:%?64?%;border-radius:%?60?%;border:%?2?% solid #fff}.order-index .topstatus[data-v-ec2a32a4]{padding:%?0?% %?56?% %?30?%;display:flex;justify-content:space-between;color:#fff;text-align:center;font-size:%?24?%;font-weight:400;box-sizing:border-box}.order-index .topstatus .title[data-v-ec2a32a4]{font-size:%?40?%;margin-bottom:%?6?%}.order-index .wrapper[data-v-ec2a32a4]{width:%?690?%;background-color:#fff;border-radius:%?10?%;margin:%?-46?% auto 0 auto;padding-top:%?25?%}.order-index .wrapper .title .iconfont[data-v-ec2a32a4]{color:#2291f8;font-size:%?40?%;margin-right:%?13?%;vertical-align:middle}.order-index .wrapper .title[data-v-ec2a32a4]{font-size:%?30?%;color:#282828;padding:0 %?30?%;margin-bottom:%?40?%;display:flex;justify-content:space-between}.order-index .wrapper .title .uni-list-cell-db .iconfont[data-v-ec2a32a4]{font-size:%?24?%;color:#999;margin-left:%?14?%}.order-index .wrapper .title .tab[data-v-ec2a32a4]{width:%?240?%;height:%?48?%;background:#f5f5f5;border-radius:%?24?%;display:flex;justify-content:space-between;font-weight:400;color:#999;font-size:%?24?%}.order-index .wrapper .title .tab .box[data-v-ec2a32a4]{width:%?82?%;height:%?48?%;border-radius:%?24?%;text-align:center;line-height:%?48?%}.order-index .wrapper .title .tab .on[data-v-ec2a32a4]{background:#1890ff;color:#fff}.order-index .wrapper .list .item[data-v-ec2a32a4]{width:33.33%;text-align:center;font-size:%?24?%;color:#999;margin-bottom:%?45?%}.order-index .wrapper .list .item .num[data-v-ec2a32a4]{font-size:%?40?%;color:#333}.public-wrapper .title[data-v-ec2a32a4]{font-size:%?30?%;color:#282828;padding:0 %?30?%;margin-bottom:%?20?%;font-size:%?30?%;display:flex;justify-content:space-between}.public-wrapper .title .uni-list-cell-db .iconfont[data-v-ec2a32a4]{font-size:%?24?%;color:#999;margin-left:%?14?%}.public-wrapper .title .tab[data-v-ec2a32a4]{height:%?48?%;background:#f5f5f5;border-radius:%?24?%;display:flex;justify-content:space-between;font-weight:400;color:#999;font-size:%?24?%}.public-wrapper .title .tab .box[data-v-ec2a32a4]{width:%?82?%;height:%?48?%;border-radius:%?24?%;text-align:center;line-height:%?48?%}.public-wrapper .title .tab .on[data-v-ec2a32a4]{background:#1890ff;color:#fff}.public-wrapper .title .iconfont[data-v-ec2a32a4]{color:#2291f8;font-size:%?40?%;margin-right:%?13?%;vertical-align:middle}.public-wrapper[data-v-ec2a32a4]{margin:%?18?% auto 0 auto;width:%?690?%;background-color:#fff;border-radius:%?10?%;padding-top:%?25?%}.public-wrapper .nav[data-v-ec2a32a4]{padding:0 %?30?%;height:%?70?%;line-height:%?70?%;font-size:%?24?%;color:#999}.public-wrapper .data[data-v-ec2a32a4]{width:%?210?%;text-align:left}.public-wrapper .browse[data-v-ec2a32a4]{width:%?192?%;text-align:left}.public-wrapper .turnover[data-v-ec2a32a4]{width:%?227?%;text-align:right}.public-wrapper .conter[data-v-ec2a32a4]{padding:0 %?30?%;margin-bottom:%?40?%}.public-wrapper .conter .item[data-v-ec2a32a4]{border-bottom:1px solid #f7f7f7;height:%?70?%;font-size:%?24?%}.public-wrapper .conter .item .turnover[data-v-ec2a32a4]{color:#000;font-weight:400}.public-wrapper .unconter[data-v-ec2a32a4]{text-align:center;color:#999;padding:%?25?%}',""]),t.exports=e},"879e":function(t,e,i){"use strict";var a=i("5e2b"),n=i.n(a);n.a},9413:function(t,e,i){"use strict";i.r(e);var a=i("f4f5"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"9d69":function(t,e,i){"use strict";i.r(e);var a=i("acbe"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},acbe:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"Loading",props:{loaded:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}}};e.default=a},b67c:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".Loads[data-v-58f839b4]{height:%?80?%;font-size:%?25?%;color:#999}.Loads .iconfont[data-v-58f839b4]{font-size:%?30?%;margin-right:%?10?%;height:%?32?%;line-height:%?32?%}\n/*加载动画*/@-webkit-keyframes load-data-v-58f839b4{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes load-data-v-58f839b4{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.loadingpic[data-v-58f839b4]{-webkit-animation:load-data-v-58f839b4 3s linear 1s infinite;animation:load-data-v-58f839b4 3s linear 1s infinite}.loading[data-v-58f839b4]{-webkit-animation:load-data-v-58f839b4 linear 1s infinite;animation:load-data-v-58f839b4 linear 1s infinite}",""]),t.exports=e},d0ca:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{colorStyle:"",navigation:0,colorNum:0}},created:function(){var t=this;this.colorStyle=uni.getStorageSync("viewColor"),uni.$on("ok",(function(e){t.colorStyle=e})),this.navigation=uni.getStorageSync("navigation"),uni.$on("navOk",(function(e){t.navigation=e}))},methods:{colorData:function(){var t=this;this.colorNum=uni.getStorageSync("statusColor"),uni.$on("colorOk",(function(e){t.colorNum=e}))}}};e.default=a},da19:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[i("v-uni-view",{staticStyle:{"touch-action":"none"}},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?i("v-uni-view",{staticClass:"homeCon bg-color",class:!0===t.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/index/index"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/order_addcart/order_addcart"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/user/index"}})],1):t._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?t.imgHost+"/statics/images/close.gif":t.imgHost+"/statics/images/open.gif"}})],1)],1)],1)],1)],1)},r=[]},eb30:function(t,e,i){"use strict";var a=i("65a8"),n=i.n(a);n.a},ecc5:function(t,e,i){var a=i("80bf");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f065").default;n("149756db",a,!0,{sourceMap:!1,shadowMode:!1})},f176:function(t,e,i){"use strict";i.r(e);var a=i("da19"),n=i("77b7");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("eb30");var o,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"59354ea8",null,!1,a["a"],o);e["default"]=d.exports},f4f5:function(t,e,i){"use strict";var a=i("4ea4");i("99af"),i("caad"),i("ac1f"),i("2532"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("f176")),r=a(i("d0ca")),o=i("6722"),s=a(i("4918")),d={name:"adminOrder",components:{Loading:s.default,home:n.default},mixins:[r.default],data:function(){return{is_manager:0,manager:0,user:{},orderlist:{},hidden:!0,page:1,limit:7,tip:1,index:0,detailtabs:"today",array:["门店统计","数据统计"],tabs:1,census:{},list:[],loaded:!1,loading:!1,verify_code:"",isWeixin:this.$wechat.isWeixin()}},onLoad:function(){this.userInfo()},methods:{userInfo:function(){var t=this;(0,o.userInfo)().then((function(e){t.manager=e.data.is_manager,t.is_manager=e.data.is_manager,t.user=e.data,0==e.data.is_manager&&(t.tabs=2),t.orderList(),t.detailtab("today")}))},orderList:function(){var t=this;(0,o.orderInfo)({is_manager:this.manager}).then((function(e){t.orderlist=e.data}))},statisticsMenu:function(t){var e=this;(0,o.statisticsMenuApi)(t).then((function(t){e.census=t.data}))},getList:function(){var t=this,e={type:this.tabs,is_manager:this.manager,page:this.page,limit:this.limit,data:this.detailtabs};this.loading=!0,(0,o.getListApi)(e).then((function(e){t.loading=!1,t.page+=1,t.list=t.list.concat(e.data),e.data.length<t.limit&&(t.tip=2)}))},hiddened:function(t){this.hidden=!this.hidden},cancel:function(){this.hidden=!this.hidden},bindPickerChange:function(t){this.tip=1,this.page=1,this.list=[],this.hidden=!this.hidden,this.index=t.target.value;var e="";e=this.array[this.index],"数据统计"==e&&(this.manager=0,this.tabs=2,this.detailtab("today")),"门店统计"==e&&(this.manager=1,this.tabs=1,this.detailtab("today")),this.orderList()},tab:function(t){this.tip=1,this.tabs=t,this.page=1,this.list=[],this.getList()},detailtab:function(t){this.detailtabs=t;var e={is_manager:this.manager,data:t};this.list=[],this.page=1,this.tip=1,this.getList(),this.statisticsMenu(e)},scanCode:function(){var t=this;this.$wechat.wechatEvevt("scanQRCode",{needResult:1,scanType:["qrCode","barCode"]}).then((function(e){var i=e.resultStr;i.includes(",")&&(i=i.split(",")[1]),t.verify_code=i,t.codeChange()}))},codeChange:function(){var t=this,e=/^[0-9]*$/;return t.verify_code?e.test(t.verify_code)?(t.$util.Tips({title:"查询中"}),void setTimeout((function(){(0,o.orderWriteoffInfo)(1,{verify_code:t.verify_code,code_type:2}).then((function(e){200==e.status?uni.navigateTo({url:"./scanning/index?code="+t.verify_code}):t.$util.Tips({title:e.msg})})).catch((function(e){t.$util.Tips({title:e})}))}),800)):t.$util.Tips({title:"请输入正确的核销码"}):t.$util.Tips({title:"请输入核销码"})}},onReachBottom:function(){1==this.tip&&this.getList()}};e.default=d}}]);