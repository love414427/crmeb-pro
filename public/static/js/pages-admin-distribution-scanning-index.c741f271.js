(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-admin-distribution-scanning-index"],{1799:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r("6722"),i=r("12b8"),o={name:"scanning",data:function(){return{verify_code:"",list:[],imgHost:i.HTTP_REQUEST_URL}},onLoad:function(t){this.verify_code=t.code},onShow:function(t){this.getList()},methods:{getList:function(){var t=this;(0,n.orderWriteoffInfo)(2,{verify_code:this.verify_code,code_type:2}).then((function(e){t.list=e.data,1==t.list.length&&uni.redirectTo({url:"./detail/index?id="+t.list[0].id+"&let="+t.list.length+"&code="+t.verify_code})})).catch((function(e){t.$util.Tips({title:e})}))},jump:function(t){uni.navigateTo({url:"./detail/index?id="+t+"&let="+this.list.length+"&code="+this.verify_code})}}};e.default=o},"551e":function(t,e,r){var n=r("a52a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=r("4f065").default;i("4c3b24b4",n,!0,{sourceMap:!1,shadowMode:!1})},6722:function(t,e,r){"use strict";var n=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getStatisticsInfo=o,e.getStatisticsMonth=a,e.getAdminOrderList=d,e.setAdminOrderPrice=u,e.setAdminOrderRemark=s,e.setAdminRefundRemark=f,e.getAdminOrderDetail=c,e.getAdminRefundDetail=l,e.getAdminOrderDelivery=g,e.setAdminOrderDelivery=p,e.getStatisticsTime=v,e.setOfflinePay=_,e.setOrderRefund=b,e.getLogistics=m,e.orderVerific=x,e.orderExportTemp=y,e.orderDeliveryInfo=h,e.orderOrderDelivery=w,e.userInfo=O,e.orderInfo=A,e.statisticsMenuApi=k,e.getListApi=C,e.getStatisticsListApi=D,e.getOrderlistApi=R,e.getRefundlistApi=I,e.getOrderreMarkApi=L,e.getRefundMarkApi=S,e.getOrderPriceApi=T,e.getOrderOfflineApi=j,e.getOrderDeliveryinfoApi=M,e.getOrderExportApi=z,e.getOrderExportTemp=E,e.setOrderDelivery=P,e.getOrderDelivery=H,e.OrderRefund=U,e.OrderDetail=W,e.refundDetail=$,e.deliveryInfo=J,e.deliveryStatistics=B,e.deliveryList=F,e.deliveryOrderList=Q,e.OrderDel=V,e.OrderCancel=q,e.orderWriteoffInfo=G,e.orderCartInfo=K,e.orderWriteoff=N,e.orderSplitInfo=X,e.orderSplitDelivery=Y,e.orderRefundAgree=Z,e.storeSplitInfo=tt,e.storeSplitDelivery=et,e.storeRefundAgree=rt,e.adminRefundList=nt;var i=n(r("c431"));function o(){return i.default.get("admin/order/statistics",{},{login:!0})}function a(t){return i.default.get("admin/order/data",t,{login:!0})}function d(t){return i.default.get("admin/order/list",t,{login:!0})}function u(t){return i.default.post("admin/order/price",t,{login:!0})}function s(t){return i.default.post("admin/order/remark",t,{login:!0})}function f(t){return i.default.post("admin/refund_order/remark",t,{login:!0})}function c(t){return i.default.get("admin/order/detail/"+t,{},{login:!0})}function l(t){return i.default.get("admin/refund_order/detail/"+t,{},{login:!0})}function g(t){return i.default.get("admin/order/delivery/gain/"+t,{},{login:!0})}function p(t,e){return i.default.post("admin/order/delivery/keep/"+t,e,{login:!0})}function v(t){return i.default.get("admin/order/time",t,{login:!0})}function _(t){return i.default.post("admin/order/offline",t,{login:!0})}function b(t){return i.default.post("admin/order/refund",t,{login:!0})}function m(t){return i.default.get("logistics",t,{login:!1})}function x(t,e){return i.default.post("order/order_verific",{verify_code:t,is_confirm:e})}function y(t){return i.default.get("admin/order/export_temp",t)}function h(){return i.default.get("admin/order/delivery_info")}function w(){return i.default.get("admin/order/delivery")}function O(){return i.default.get("store/staff/info")}function A(t){return i.default.get("store/order/statistics",t)}function k(t){return i.default.get("store/staff/statistics",t)}function C(t){return i.default.get("store/order/data",t)}function D(t,e){return i.default.get("store/staff/data/"+t,e)}function R(t){return i.default.get("store/order/list",t)}function I(t){return i.default.get("store/refund/list",t)}function L(t){return i.default.post("store/order/remark",t)}function S(t){return i.default.post("store/refund/remark",t)}function T(t){return i.default.post("store/order/price",t)}function j(t){return i.default.post("store/order/offline",t)}function M(t){return i.default.get("store/order/delivery_info/"+t)}function z(t){return i.default.get("store/order/export_all",t,{login:!1})}function E(t){return i.default.get("store/order/export_temp",t)}function P(t,e){return i.default.post("store/order/delivery/"+t,e,{login:!0})}function H(){return i.default.get("store/delivery/list")}function U(t){return i.default.post("store/order/refund",t,{login:!0})}function W(t){return i.default.get("store/order/detail/"+t)}function $(t){return i.default.get("store/refund/detail/"+t)}function J(t){return i.default.get("store/delivery/info")}function B(t){return i.default.get("store/delivery/statistics",t)}function F(t){return i.default.get("store/delivery/data",t)}function Q(t){return i.default.get("store/delivery/order",t)}function V(t){return i.default.delete("store/order/del/"+t)}function q(t){return i.default.post("store/order/cancel/"+t)}function G(t,e){return i.default.get("store/order/writeoff_info/"+t,e)}function K(t,e){return i.default.get("store/order/cart_info/"+t,e)}function N(t,e){return i.default.post("store/order/writeoff/"+t,e)}function X(t){return i.default.get("admin/order/split_cart_info/"+t)}function Y(t,e){return i.default.put("admin/order/split_delivery/"+t,e)}function Z(t){return i.default.post("admin/order/refund_agree/"+t)}function tt(t){return i.default.get("store/order/split_cart_info/"+t)}function et(t,e){return i.default.put("store/order/split_delivery/"+t,e)}function rt(t){return i.default.post("store/order/refund_agree/"+t)}function nt(t){return i.default.get("admin/refund_order/list",t)}},7736:function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",[r("v-uni-view",{staticClass:"scan"},[r("v-uni-view",{staticClass:"header",style:{backgroundImage:"url("+t.imgHost+"/statics/images/banner.png)"}},[t._v("请选择当前核销订单")]),r("v-uni-view",{staticClass:"box"},t._l(t.list,(function(e,n){return r("v-uni-view",{key:n,staticClass:"content",on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.jump(e.id)}}},[r("v-uni-view",{staticClass:"content_box"},[r("v-uni-image",{attrs:{src:e.image,mode:""}}),r("v-uni-view",{staticClass:"content_box_title"},[r("p",{staticClass:"textbox"},[t._v("订单号："+t._s(e.order_id))]),r("p",{staticClass:"attribute mar"},[t._v("下单时间："+t._s(e.add_time))]),r("v-uni-view",{staticClass:"txt"},[r("p",{staticClass:"attribute"},[t._v("订单实付：¥"+t._s(e.pay_price))]),4!=e._status&&12!=e._status||5!=e.status?t._e():r("p",{staticClass:"orange"},[t._v("部分核销")]),4==e._status&&1==e.status?r("p",{staticClass:"attributes blue"},[t._v("未核销")]):t._e(),11==e._status?r("p",{staticClass:"attributes blue"},[t._v("未核销")]):t._e(),5==e._status?r("p",{staticClass:"attributes blue"},[t._v("已核销")]):t._e()])],1)],1)],1)})),1)],1)],1)},o=[]},"97fb":function(t,e,r){"use strict";r.r(e);var n=r("7736"),i=r("db43");for(var o in i)"default"!==o&&function(t){r.d(e,t,(function(){return i[t]}))}(o);r("c696");var a,d=r("f0c5"),u=Object(d["a"])(i["default"],n["b"],n["c"],!1,null,"39b4fa95",null,!1,n["a"],a);e["default"]=u.exports},a52a:function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* crmeb颜色变量 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.scan[data-v-39b4fa95]{padding-bottom:%?160?%}.scan .header[data-v-39b4fa95]{width:100%;height:%?220?%;background-repeat:no-repeat;background-size:100% 100%;color:#fff;font-size:%?32?%;text-align:center;line-height:%?160?%;margin:0 auto}.scan .box[data-v-39b4fa95]{margin:%?-64?% auto 0 auto}.scan .content[data-v-39b4fa95]{margin:%?16?% auto %?16?% auto;width:%?694?%;padding:%?28?% %?24?% %?32?%;background:#fff;border-radius:%?12?%}.scan .content .pad[data-v-39b4fa95]{padding:%?20?% %?20?% %?22?%}.scan .content .content_box[data-v-39b4fa95]{height:70px;border-radius:%?8?%;padding-right:%?22?%;display:flex;justify-content:start;align-items:center}.scan .content .content_box uni-image[data-v-39b4fa95]{width:%?140?%;height:%?140?%;border-radius:%?8?%}.scan .content .content_box .content_box_title[data-v-39b4fa95]{flex:1;margin-left:%?18?%;font-size:%?20?%;font-weight:400}.scan .content .content_box .content_box_title .textbox[data-v-39b4fa95]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;word-break:break-all;width:%?466?%;font-size:%?30?%;font-weight:700;line-height:21px}.scan .content .content_box .content_box_title .mar[data-v-39b4fa95]{margin:%?16?% %?0?%}.scan .content .content_box .content_box_title .attribute[data-v-39b4fa95]{color:#999}.scan .content .content_box .content_box_title .txt[data-v-39b4fa95]{display:flex;justify-content:space-between;font-size:%?24?%}.scan .content .content_box .content_box_title .txt .orange[data-v-39b4fa95]{color:#ff7e00}.scan .content .content_box .content_box_title .txt .blue[data-v-39b4fa95]{color:#1890ff}.scan .content .content_bottom[data-v-39b4fa95]{display:flex;justify-content:space-between;font-size:%?22?%;padding:%?0?% %?20?%;color:#666}.scan .content .content_bottom .money[data-v-39b4fa95]{font-size:%?26?%;color:#f5222d}',""]),t.exports=e},c696:function(t,e,r){"use strict";var n=r("551e"),i=r.n(n);i.a},db43:function(t,e,r){"use strict";r.r(e);var n=r("1799"),i=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a}}]);