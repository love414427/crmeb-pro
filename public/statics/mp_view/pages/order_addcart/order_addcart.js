(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order_addcart/order_addcart"],{"0fa5":function(t,i,e){"use strict";e.r(i);var n=e("115c"),o=e("3331");for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("8da6"),e("adb1");var r,c=e("f0c5"),s=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"f68c027a",null,!1,n["a"],r);i["default"]=s.exports},"115c":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var o=function(){var t=this,i=t.$createElement,e=(t._self._c,t.cartList.valid.length>0||t.cartList.invalid.length>0?Object.prototype.toString.call(t.discountInfo.coupon):null),n=t.cartList.valid.length>0&&1==t.footerswitch?t.$util.$h.Sub(t.selectCountPrice,t.discountInfo.deduction.coupon_price):null,o=t.cartList.valid.length>0&&1==t.footerswitch&&!(n<=0)?t.$util.$h.Sub(t.selectCountPrice,t.discountInfo.deduction.coupon_price):null,a=t.cartList.valid.length>0&&1==t.footerswitch?Object.prototype.toString.call(t.discountInfo.coupon):null,r=t.cartList.valid.length>0&&1==t.footerswitch?"[object Array]"===Object.prototype.toString.call(t.discountInfo.coupon)||t.discountInfo.coupon.used:null;t.$mp.data=Object.assign({},{$root:{g0:e,g1:n,g2:o,g3:a,g4:r}})},a=[]},3331:function(t,i,e){"use strict";e.r(i);var n=e("ae20"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=o.a},"77e8":function(t,i,e){"use strict";(function(t){e("22b3");n(e("66fd"));var i=n(e("0fa5"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(i.default)}).call(this,e("543d")["createPage"])},"8da6":function(t,i,e){"use strict";var n=e("e81c"),o=e.n(n);o.a},adb1:function(t,i,e){"use strict";var n=e("e6ea"),o=e.n(n);o.a},ae20:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("21c4"),o=e("4e1f"),a=e("16a8"),r=e("fa9e"),c=e("26cb"),s=d(e("d0ca")),u=e("8a96"),l=e("6082");function d(t){return t&&t.__esModule?t:{default:t}}function h(t){return g(t)||v(t)||p(t)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(t,i){if(t){if("string"===typeof t)return m(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?m(t,i):void 0}}function v(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function g(t){if(Array.isArray(t))return m(t)}function m(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,n=new Array(i);e<i;e++)n[e]=t[e];return n}var S=0,$=function(){Promise.all([e.e("common/vendor"),e.e("components/recommend/index")]).then(function(){return resolve(e("34f7"))}.bind(null,e)).catch(e.oe)},I=function(){e.e("components/productWindow/index").then(function(){return resolve(e("6ab7"))}.bind(null,e)).catch(e.oe)},_=function(){e.e("components/cartDiscount/index").then(function(){return resolve(e("16d6"))}.bind(null,e)).catch(e.oe)},L=function(){Promise.all([e.e("common/vendor"),e.e("components/couponListWindow/index")]).then(function(){return resolve(e("0a50"))}.bind(null,e)).catch(e.oe)},b=function(){e.e("components/Authorize").then(function(){return resolve(e("1702"))}.bind(null,e)).catch(e.oe)},C=function(){Promise.all([e.e("common/vendor"),e.e("components/pageFooter/index")]).then(function(){return resolve(e("500b"))}.bind(null,e)).catch(e.oe)},A={components:{couponListWindow:L,pageFooter:C,recommend:$,productWindow:I,cartDiscount:_,authorize:b},mixins:[s.default],data:function(){return{isTips:!1,coupon:{coupon:!1,type:-1,list:[],count:[],goFrom:1},discountInfo:{discount:!1,deduction:{},coupon:{}},cartCount:0,goodsHidden:!0,footerswitch:!0,hostProduct:[],cartList:{valid:[],invalid:[]},isAllSelect:!1,selectValue:[],selectCountPrice:0,isAuto:!1,isShowAuth:!1,hotScroll:!1,hotPage:1,hotLimit:10,loading:!1,loadend:!1,loadTitle:"没有更多内容啦~",page:1,limit:20,loadingInvalid:!1,loadendInvalid:!1,loadTitleInvalid:"加载更多",pageInvalid:1,limitInvalid:20,attr:{cartAttr:!1,productAttr:[],productSelect:{}},productValue:[],storeInfo:{},attrValue:"",attrTxt:"请选择",cartId:0,product_id:0,sysHeight:S,footerSee:!1,newData:{},activeRouter:"",isCart:0}},computed:(0,c.mapGetters)(["isLogin"]),onLoad:function(t){var i=this;0==i.isLogin&&(0,r.toLogin)();var e=getCurrentPages(),n=e[e.length-1].route;this.activeRouter="/"+n},onShow:function(){var i=this;t.pageScrollTo({duration:0,scrollTop:0}),(0,u.getNavigation)().then((function(e){i.newData=e.data,i.newData.status&&i.newData.status.status?t.hideTabBar():t.showTabBar()})),1==this.isLogin&&(this.hotPage=1,this.hostProduct=[],this.hotScroll=!1,this.getHostProduct(),this.loadend=!1,this.page=1,this.cartList.valid=[],this.getCartList(),this.loadendInvalid=!1,this.pageInvalid=1,this.cartList.invalid=[],this.getInvalidList(),this.getCartNum(),this.goodsHidden=!0,this.footerswitch=!0,this.hostProduct=[],this.hotScroll=!1,this.hotPage=1,this.hotLimit=10,this.isAllSelect=!1,this.selectValue=[],this.selectCountPrice=0,this.cartCount=0,this.isShowAuth=!1)},methods:{tabCouponType:function(t){this.$set(this.coupon,"type",t),this.getCouponList(t)},ChangCouponsUseState:function(t){var i=this;i.coupon.list[t].is_use=!0,i.$set(i.coupon,"list",i.coupon.list),i.$set(i.coupon,"coupon",!1)},ChangCouponsClone:function(){this.$set(this.coupon,"coupon",!1)},getCouponList:function(t){var i=this,e={page:1,limit:20,product_id:i.id};void 0===t&&null===t||(e.type=t),(0,o.getCoupons)(e).then((function(e){if(i.$set(i.coupon,"count",e.data.count),void 0===t||null===t){var n=h(i.coupon.count),o="",a=n.findIndex((function(t){return t})),r=i.coupon.count,c=[],s=0;r.forEach((function(t,i){0===t?s=i:c.push(t)})),o=3==c.length?2:2==c.length?2===s?1:2:r.findIndex((function(t){return t===n[a]})),i.$set(i.coupon,"type",o),i.getCouponList(o)}else i.$set(i.coupon,"list",e.data.list)}))},couponTap:function(){var t=this;!1===t.isLogin?(0,r.toLogin)():(t.getCouponList(),t.$set(t.coupon,"coupon",!0))},goCollect:function(i){t.navigateTo({url:"/pages/goods_list/index?sid=0&title=默认&promotions_type=".concat(i.promotions_type,"&promotions_id=").concat(i.id)})},myDiscount:function(){this.discountInfo.discount=!1},discountTap:function(){this.coupon.coupon=!1,this.discountInfo.discount=!this.discountInfo.discount},authColse:function(t){this.isShowAuth=t},reGoCat:function(){var t=this,i=t.productValue[this.attrValue];if(t.attr.productAttr.length&&void 0===i)return t.$util.Tips({title:"产品库存不足，请选择其它"});var e={id:t.cartId,product_id:t.product_id,num:t.attr.productSelect.cart_num,unique:void 0!==t.attr.productSelect?t.attr.productSelect.unique:""};(0,n.getResetCart)(e).then((function(i){t.attr.cartAttr=!1,t.$util.Tips({title:"添加购物车成功",success:function(){t.loadend=!1,t.page=1,t.cartList.valid=[],t.getCartList(),t.getCartNum()}})})).catch((function(i){return t.$util.Tips({title:i.msg})}))},onMyEvent:function(){this.$set(this.attr,"cartAttr",!1)},cartAttr:function(t){this.isCart=1,this.getGoodsDetails(t)},reElection:function(t){this.getGoodsDetails(t)},getGoodsDetails:function(i){t.showLoading({title:"加载中",mask:!0});var e=this;e.cartId=i.id,e.product_id=i.product_id,(0,a.getProductDetail)(i.product_id).then((function(i){t.hideLoading(),e.attr.cartAttr=!0;var n=i.data.storeInfo;e.$set(e,"storeInfo",n),e.$set(e.attr,"productAttr",i.data.productAttr),e.$set(e,"productValue",i.data.productValue),e.DefaultSelect()})).catch((function(i){t.hideLoading()}))},ChangeAttr:function(t){var i=this.productValue[t];i&&i.stock>0?(this.$set(this.attr.productSelect,"image",i.image),this.$set(this.attr.productSelect,"price",i.price),this.$set(this.attr.productSelect,"stock",i.stock),this.$set(this.attr.productSelect,"unique",i.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",t),this.$set(this,"attrTxt","已选择")):(this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择"))},DefaultSelect:function(){var t=this,i=this.attr.productAttr,e=[],n=0,o=[];for(var a in this.productValue)if(this.productValue[a].stock>0){e=this.attr.productAttr.length?a.split(","):[];break}if(this.isCart){this.cartList.valid.forEach((function(i){i.valid.forEach((function(i){i.id==t.cartId&&(o=i.productInfo.attrInfo.suk.split(","))}))}));var r=o.join(",");n=this.productValue[r].stock;for(var c=0;c<i.length;c++)this.$set(i[c],"index",n?o[c]:e[c])}else for(var s=0;s<i.length;s++)this.$set(i[s],"index",e[s]);var u=this.productValue[this.isCart&&n?o.join(","):e.join(",")];u&&i.length?(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",u.image),this.$set(this.attr.productSelect,"price",u.price),this.$set(this.attr.productSelect,"stock",u.stock),this.$set(this.attr.productSelect,"unique",u.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",e.sort().join(",")),this.$set(this,"attrTxt","已选择")):!u&&i.length?(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择")):u||i.length||(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",this.storeInfo.stock),this.$set(this.attr.productSelect,"unique",this.storeInfo.unique||""),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择"))},attrVal:function(t){this.$set(this.attr.productAttr[t.indexw],"index",this.attr.productAttr[t.indexw].attr_values[t.indexn])},ChangeCartNum:function(t){var i=this.productValue[this.attrValue];if(void 0!==i||this.attr.productAttr.length||(i=this.attr.productSelect),void 0!==i){var e=i.stock||0,n=this.attr.productSelect;t?(n.cart_num++,n.cart_num>e&&(this.$set(this.attr.productSelect,"cart_num",e||1),this.$set(this,"cart_num",e||1))):(n.cart_num--,n.cart_num<1&&(this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"cart_num",1)))}},iptCartNum:function(t){this.$set(this.attr.productSelect,"cart_num",t)},subDel:function(t){var i=this,e=i.selectValue;if(!(e.length>0))return i.$util.Tips({title:"请选择产品"});(0,n.cartDel)(e).then((function(t){i.loadend=!1,i.page=1,i.cartList.valid=[],i.getCartList(),i.getCartNum()}))},getSelectValueProductId:function(){var t=this,i=t.cartList.valid,e=t.selectValue,n=[];if(e.length>0)for(var o in i)for(var a in i[o].valid)t.inArray(i[o].valid[a].id,e)&&n.push(i[o].valid[a].product_id);return n},subCollect:function(t){var i=this,e=i.selectValue;if(!(e.length>0))return i.$util.Tips({title:"请选择产品"});i.getSelectValueProductId();(0,a.collectAll)(i.getSelectValueProductId().join(",")).then((function(t){return i.$util.Tips({title:t.msg,icon:"success"})})).catch((function(t){return i.$util.Tips({title:t})}))},subOrder:function(i){var e=this,n=e.selectValue;if(!(n.length>0))return e.$util.Tips({title:"请选择产品"});var a=this.discountInfo.coupon;if("[object Object]"!==Object.prototype.toString.call(a)||a.used){var r="";r="[object Array]"===Object.prototype.toString.call(a)?"/pages/users/order_confirm/index?cartId="+n.join(","):"/pages/users/order_confirm/index?cartId="+n.join(",")+"&couponId="+a.used.id+"&couponTitle="+a.coupon_title,t.navigateTo({url:r})}else(0,o.setCouponReceive)(this.discountInfo.coupon.id).then((function(i){t.navigateTo({url:"/pages/users/order_confirm/index?cartId="+n.join(",")+"&couponId="+i.data.id+"&couponTitle="+a.coupon_title})})).catch((function(t){return e.$util.Tips({title:t})}))},checkboxAllChange:function(t){var i=t.detail.value;i.length>0?this.setAllSelectValue(1):this.setAllSelectValue(0)},setAllSelectValue:function(t){var i=this,e=[],n=i.cartList.valid;n.length>0&&(n.forEach((function(n){n.valid.forEach((function(n){t?(i.footerswitch?n.attrStatus&&!n.is_gift?(n.checked=!0,e.push(n.id)):n.checked=!1:(n.checked=!0,e.push(n.id)),i.isAllSelect=!0):(n.checked=!1,i.isAllSelect=!1)}))})),i.$set(i.cartList,"valid",n),i.selectValue=e,i.switchSelect())},checkboxChange:function(t){var i=this,e=t.detail.value,n=i.cartList.valid,o=[],a=[],r=[],c=0;n.forEach((function(t){t.valid.forEach((function(t){c+=1,i.inArray(t.id,e)?i.footerswitch?t.attrStatus&&!t.is_gift?(t.checked=!0,o.push(t)):t.checked=!1:(t.checked=!0,o.push(t)):(t.checked=!1,a.push(t))}))})),i.footerswitch&&(r=a.filter((function(t){return!t.attrStatus||t.is_gift}))),i.$set(i.cartList,"valid",n),i.isAllSelect=c===o.length+r.length,i.selectValue=e,i.switchSelect()},inArray:function(t,i){for(var e in i)if(i[e]==t)return!0;return!1},switchSelect:function(){var t=this,i=t.cartList.valid,e=t.selectValue,n=0;if(e.length<1)t.selectCountPrice=n;else{for(var o in i)for(var a in i[o].valid)t.inArray(i[o].valid[a].id,e)&&(n=t.$util.$h.Add(n,t.$util.$h.Mul(i[o].valid[a].cart_num,i[o].valid[a].truePrice)));t.selectCountPrice=n}},subCart:(0,l.Debounce)((function(t,i){var e=this,n=!1,o=e.cartList.valid[t].valid[i];o.cart_num=Number(o.cart_num)-1,o.cart_num<1&&(n=!0),o.cart_num<=1?(o.cart_num=1,o.numSub=!0):(o.numSub=!1,o.numAdd=!1),0==n&&e.setCartNum(o.id,o.cart_num,(function(n){e.cartList.valid[t].valid[i]=o,e.getCartNum(),e.switchSelect(),e.loadend=!1,e.page=1,e.cartList.valid=[],e.getCartList()}))})),addCart:(0,l.Debounce)((function(t,i){var e=this,n=e.cartList.valid[t].valid[i];n.cart_num=Number(n.cart_num)+1;var o=n.productInfo;o.hasOwnProperty("attrInfo")&&n.cart_num>=n.productInfo.attrInfo.stock?(n.cart_num=n.productInfo.attrInfo.stock,n.numAdd=!0,n.numSub=!1):(n.numAdd=!1,n.numSub=!1),e.setCartNum(n.id,n.cart_num,(function(o){e.cartList.valid[t].valid[i]=n,e.getCartNum(),e.switchSelect(),e.loadend=!1,e.page=1,e.cartList.valid=[],e.getCartList()}))})),setCartNum:function(t,i,e){(0,n.changeCartNum)(t,i).then((function(t){e&&e(t.data)}))},getCartNum:function(){var t=this,i=this;(0,n.getCartCounts)().then((function(e){i.cartCount=e.data.count,t.$store.commit("indexData/setCartNum",e.data.count>99?"..":e.data.count),e.data.count>0?wx.setTabBarBadge({index:2,text:e.data.count+""}):wx.hideTabBarRedDot({index:2})}))},getCartList:function(){var t=this,i=this;if(this.loadend)return!1;if(this.loading)return!1;var e={page:i.page,limit:i.limit,status:1};(0,n.getCartList)(e).then((function(e){t.discountInfo.deduction=e.data.deduction,t.discountInfo.coupon=e.data.coupon,t.isTips=!1;var n=e.data.valid,o=n.map((function(t){return{valid:t.cart,promotions:t.promotions}})),a=o.length<i.limit,r=i.$util.SplitArray(o,i.cartList.valid),c=[];if(r.length>0)for(var s in r)for(var u in r[s].promotions.length>1&&(i.isTips=!0),r[s].valid){1==r[s].valid[u].cart_num?r[s].valid[u].numSub=!0:r[s].valid[u].numSub=!1;var l=r[s].valid[u].productInfo;l.hasOwnProperty("attrInfo")&&r[s].valid[u].cart_num==r[s].valid[u].productInfo.attrInfo.stock||r[s].valid[u].cart_num==r[s].valid[u].productInfo.stock?r[s].valid[u].numAdd=!0:r[s].valid[u].numAdd=!1,r[s].valid[u].attrStatus&&!r[s].valid[u].is_gift?(r[s].valid[u].checked=!0,c.push(r[s].valid[u].id)):t.footerswitch?r[s].valid[u].checked=!1:r[s].valid[u].checked=!0}i.$set(i.cartList,"valid",e.data.valid.length?r:[]),i.loadend=!0,i.loadTitle=a?"没有更多内容啦~":"加载更多",i.page=i.page+1,i.loading=!1,i.selectValue=c;var d=[];r.forEach((function(t){t.valid.forEach((function(t){t.attrStatus&&!t.is_gift&&d.push(t)}))})),i.isAllSelect=d.length==c.length&&d.length,i.switchSelect()})).catch((function(t){i.loading=!1,i.loadTitle="加载失败",i.$util.Tips({title:t})}))},getInvalidList:function(){var t=this;if(this.loadendInvalid)return!1;if(this.loadingInvalid)return!1;var i={page:t.pageInvalid,limit:t.limitInvalid,status:0};(0,n.getCartList)(i).then((function(i){var e=i.data,n=e.invalid,o=n.length<t.limitInvalid,a=t.$util.SplitArray(n,t.cartList.invalid);t.$set(t.cartList,"invalid",a),t.loadendInvalid=o,t.loadTitleInvalid=o?"没有更多内容啦~":"加载更多",t.pageInvalid=t.pageInvalid+1,t.loadingInvalid=!1})).catch((function(i){t.loadingInvalid=!1,t.loadTitleInvalid="加载更多"}))},getHostProduct:function(){var t=this;t.hotScroll||(0,a.getProductHot)(t.hotPage,t.hotLimit).then((function(i){t.hotPage++,t.hotScroll=i.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(i.data)}))},goodsOpen:function(){var t=this;t.goodsHidden=!t.goodsHidden},goRouter:function(i){var e=getCurrentPages(),n=e[e.length-1].$page.fullPath;i.link!=n&&t.switchTab({url:i.link,fail:function(e){t.redirectTo({url:i.link})}})},manage:function(){var t=this;t.footerswitch=!t.footerswitch;var i=[],e=[],n=0;t.cartList.valid.forEach((function(o){o.valid.forEach((function(o){n+=1,t.footerswitch?o.attrStatus&&!o.is_gift?o.checked&&i.push(o.id):(o.checked=!1,e.push(o)):o.checked&&i.push(o.id)}))})),t.footerswitch?t.isAllSelect=n===i.length+e.length:t.isAllSelect=n===i.length,t.selectValue=i,t.switchSelect()},unsetCart:function(){for(var t=this,i=[],e=0,o=t.cartList.invalid.length;e<o;e++)i.push(t.cartList.invalid[e].id);(0,n.cartDel)(i).then((function(i){t.$util.Tips({title:"清除成功"}),t.$set(t.cartList,"invalid",[]),t.getCartNum()})).catch((function(t){}))}},onReachBottom:function(){var t=this;t.cartList.invalid.length&&t.getInvalidList(),0==t.cartList.valid.length&&0==t.cartList.invalid.length&&t.getHostProduct()}};i.default=A}).call(this,e("543d")["default"])},e6ea:function(t,i,e){},e81c:function(t,i,e){}},[["77e8","common/runtime","common/vendor"]]]);