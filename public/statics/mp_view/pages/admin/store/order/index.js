(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/admin/store/order/index"],{"30f6":function(t,e,n){},"3aa9":function(t,e,n){"use strict";var i=n("30f6"),r=n.n(i);r.a},"5a21":function(t,e,n){"use strict";n.r(e);var i=n("7594"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},"6ccf":function(t,e,n){"use strict";(function(t){n("22b3");i(n("66fd"));var e=i(n("f019"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},7594:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n("a34a")),r=n("6722"),o=n("bc73"),a=n("6082");function u(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,i,r,o,a){try{var u=t[o](a),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(i,r)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var o=t.apply(e,n);function a(t){s(o,i,r,a,u,"next",t)}function u(t){s(o,i,r,a,u,"throw",t)}a(void 0)}))}}var d=function(){n.e("components/PriceChange/index").then(function(){return resolve(n("79ad"))}.bind(null,n)).catch(n.oe)},f=function(){n.e("components/Loading/index").then(function(){return resolve(n("4918"))}.bind(null,n)).catch(n.oe)},p={name:"order",components:{Loading:f,PriceChange:d},props:{},data:function(){return{openErp:!1,orderList:[],type:"",page:1,limit:15,loading:!1,loaded:!1,change:!1,orderInfo:{},status:"",isRefund:0}},onLoad:function(t){this.type=t.type,this.getErpConfig()},onShow:function(){this.settype(this.type)},computed:{},methods:{goDelivery:function(e){this.openErp||t.navigateTo({url:"/pages/admin/store/deliverGoods/index?id="+e.order_id+"&listId="+e.id+"&totalNum="+e.total_num+"&orderStatus="+e._status+"&comeType=1&productType="+e.product_type})},getErpConfig:function(){var t=this;(0,o.erpConfig)().then((function(e){t.openErp=e.data.open_erp})).catch((function(e){t.$util.Tips({title:e})}))},settype:function(t){this.type=t,this.init(),this.getList()},init:function(){this.orderList=[],this.page=1,this.loaded=!1,this.loading=!1},getList:function(){var t=this;if(!this.loading&&!this.loaded){this.loading=!0;var e={status:this.type,page:this.page,limit:this.limit},n="";n=-3==this.type?(0,r.getRefundlistApi)(e):(0,r.getOrderlistApi)(e),n.then((function(e){t.loading=!1,t.loaded=e.data.length<t.limit,t.orderList.push.apply(t.orderList,e.data),t.page+=1}))}},onReachBottom:function(){this.getList()},toDetail:function(e){t.navigateTo({url:"/pages/admin/store/orderDetail/index?id=".concat(e.id,"&types=").concat(this.type)})},modify:function(t,e,n){this.openErp&&1!=e||(this.change=!0,this.status=e.toString(),this.orderInfo=t,2==e&&(this.isRefund=n))},changeclose:function(t){this.change=t},offlinePay:function(t){var e=this;this.openErp||(0,r.getOrderOfflineApi)({order_id:t.order_id}).then((function(t){e.$util.Tips({title:t.msg,icon:"success"}),e.init(),e.getList()}),(function(t){e.$util.Tips(t)}))},objOrderRefund:function(t){var e=this;(0,r.OrderRefund)(t).then((function(t){e.change=!1,e.$util.Tips({title:t.msg}),e.init(),e.getList()}),(function(t){e.change=!1,e.$util.Tips({title:t})}))},savePrice:function(t){var e=this;return c(i.default.mark((function n(){var o,u,s,c,d,f;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(o=e,u={},s=t.price,c=t.refund_price,o.orderInfo.refund_status,d=t.remark,u.order_id=o.orderInfo.order_id,0!=o.status){n.next=9;break}if((0,a.isMoney)(s)){n.next=5;break}return n.abrupt("return",o.$util.Tips({title:"请输入正确的金额"}));case 5:u.price=s,(0,r.getOrderPriceApi)(u).then((function(t){o.change=!1,o.$util.Tips({title:"改价成功",icon:"success"}),e.init(),e.getList()}),(function(t){o.change=!1,o.$util.Tips({title:"改价失败",icon:"none"})})),n.next=27;break;case 9:if(2!=o.status){n.next=21;break}if(!e.isRefund){n.next=18;break}if((0,a.isMoney)(c)){n.next=13;break}return n.abrupt("return",o.$util.Tips({title:"请输入正确的金额"}));case 13:u.price=c,u.type=t.type,e.objOrderRefund(u),n.next=19;break;case 18:1==t.type?(0,r.storeRefundAgree)(e.orderInfo.id).then((function(t){o.change=!1,o.$util.Tips({title:t.msg}),o.init(),o.getList()})).catch((function(t){o.change=!1,o.$util.Tips({title:t})})):(u.type=t.type,e.objOrderRefund(u));case 19:n.next=27;break;case 21:if(d){n.next=23;break}return n.abrupt("return",e.$util.Tips({title:"请输入备注"}));case 23:u.remark=d,f="",f=-3==o.type?(0,r.getRefundMarkApi)(u):(0,r.getOrderreMarkApi)(u),f.then((function(t){o.change=!1,e.$util.Tips({title:t.msg,icon:"success"})})).catch((function(t){o.change=!1,o.$util.Tips({title:t})}));case 27:case"end":return n.stop()}}),n)})))()}}};e.default=p}).call(this,n("543d")["default"])},e955:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.orderList.length?t.__map(t.orderList,(function(e,n){var i=t.__get_orig(e),r=(0==e.refund_type||1==e.refund_type||5==e.refund_type)&&-3==t.type&&parseFloat(e.pay_price)>=0;return{$orig:i,m0:r}})):null);t.$mp.data=Object.assign({},{$root:{l0:n}})},o=[]},f019:function(t,e,n){"use strict";n.r(e);var i=n("e955"),r=n("5a21");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("3aa9");var a,u=n("f0c5"),s=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"47d4062a",null,!1,i["a"],a);e["default"]=s.exports}},[["6ccf","common/runtime","common/vendor"]]]);