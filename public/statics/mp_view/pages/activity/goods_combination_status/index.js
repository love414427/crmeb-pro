(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/goods_combination_status/index"],{"5c00":function(t,i,e){"use strict";e.r(i);var o=e("baab"),n=e("f672");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("84ef");var a,r=e("f0c5"),c=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,"597d8547",null,!1,o["a"],a);i["default"]=c.exports},"84ef":function(t,i,e){"use strict";var o=e("8514"),n=e.n(o);n.a},8514:function(t,i,e){},"8bcc":function(t,i,e){"use strict";(function(t){e("22b3");o(e("66fd"));var i=o(e("5c00"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(i.default)}).call(this,e("543d")["createPage"])},aed9:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=d(e("76cb")),n=e("fa9e"),s=e("26cb"),a=e("866c"),r=e("16a8"),c=e("12b8"),u=d(e("d0ca"));function d(t){return t&&t.__esModule?t:{default:t}}var h=function(){e.e("components/countDown/index").then(function(){return resolve(e("6094"))}.bind(null,e)).catch(e.oe)},l=function(){e.e("components/productWindow/index").then(function(){return resolve(e("6ab7"))}.bind(null,e)).catch(e.oe)},p=function(){e.e("components/Authorize").then(function(){return resolve(e("1702"))}.bind(null,e)).catch(e.oe)},m=function(){Promise.all([e.e("common/vendor"),e.e("components/home/index")]).then(function(){return resolve(e("f176"))}.bind(null,e)).catch(e.oe)},_="GroupRule",f=getApp(),g={name:_,components:{CountDown:h,ProductWindow:l,home:m,authorize:p},props:{},mixins:[u.default],data:function(){return{currentPinkOrder:"",isOk:0,pinkBool:0,userBool:0,pinkAll:[],pinkT:[],storeCombination:[],storeCombinationHost:[],pinkId:0,count:0,iShidden:!1,isOpen:!1,attr:{cartAttr:!1,productSelect:{image:"",store_name:"",price:"",quota:0,unique:"",cart_num:1,quota_show:0,product_stock:0,num:0},productAttr:[]},cart_num:"",userInfo:{},posters:!1,weixinStatus:!1,H5ShareBox:!1,isAuto:!1,isShowAuth:!1,attrTxt:"请选择",attrValue:"",imgHost:c.HTTP_REQUEST_URL}},computed:(0,s.mapGetters)({isLogin:"isLogin",userData:"userInfo"}),watch:{isLogin:{handler:function(t,i){t?this.getCombinationPink():(0,n.toLogin)()},deep:!0},userData:{handler:function(t,i){t&&(this.userInfo=t,f.globalData.openPages="/pages/activity/goods_combination_status/index?id="+this.pinkId)},deep:!0}},onLoad:function(t){var i=this;if(t.scene){var e=o.default.getUrlParams(decodeURIComponent(t.scene));"object"===typeof e&&(e.id&&(t.id=e.id),e.pid&&(f.globalData.spid=e.pid))}t.id&&(i.pinkId=t.id),t.pid&&(f.globalData.spid=t.pid),0==i.isLogin&&(this.$Cache.set("login_back_url","/pages/activity/goods_combination_status/index?id=".concat(t.id)),(0,n.toLogin)())},onShareAppMessage:function(){var t=this;return{title:"您的好友"+t.userInfo.nickname+"邀请您参团"+t.storeCombination.title,path:f.globalData.openPages,imageUrl:t.storeCombination.image}},mounted:function(){this.getCombinationPink()},methods:{authColse:function(t){this.isShowAuth=t},onLoadFun:function(t){this.userInfo=t,f.globalData.openPages="/pages/activity/goods_combination_status/index?id="+this.pinkId,this.getCombinationPink()},listenerActionSheet:function(){0==this.isLogin?(0,n.toLogin)():this.posters=!0},listenerActionClose:function(){this.posters=!1},goFriend:function(){this.posters=!1},iptCartNum:function(t){this.$set(this.attr.productSelect,"cart_num",t),this.$set(this,"cart_num",t)},attrVal:function(t){this.attr.productAttr[t.indexw].index=this.attr.productAttr[t.indexw].attr_values[t.indexn]},onMyEvent:function(){this.$set(this.attr,"cartAttr",!1),this.$set(this,"isOpen",!1)},ChangeAttr:function(t){this.$set(this,"cart_num",1);var i=this.productValue[t];i?(this.$set(this.attr.productSelect,"image",i.image),this.$set(this.attr.productSelect,"price",i.price),this.$set(this.attr.productSelect,"quota",i.quota),this.$set(this.attr.productSelect,"unique",i.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"product_stock",i.product_stock),this.$set(this.attr.productSelect,"quota_show",i.quota_show),this.$set(this,"attrValue",t),this.$set(this,"attrTxt","已选择")):(this.$set(this.attr.productSelect,"image",this.storeCombination.image),this.$set(this.attr.productSelect,"price",this.storeCombination.price),this.$set(this.attr.productSelect,"quota",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this.attr.productSelect,"quota_show",0),this.$set(this.attr.productSelect,"product_stock",0),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择"))},ChangeCartNum:function(t){var i=this.productValue[this.attrValue];if(this.cart_num&&(i.cart_num=this.cart_num,this.attr.productSelect.cart_num=this.cart_num),void 0!==i||this.attr.productAttr.length||(i=this.attr.productSelect),void 0!==i){i.stock,i.quota_show;var e=i.quota||0,o=i.product_stock||0,n=this.attr.productSelect,s=this.storeCombination.num||0;if(void 0==i.cart_num&&(i.cart_num=1),t){n.cart_num++;var a=[];a.push(s),a.push(e),a.push(o);var r=Math.min.apply(null,a);n.cart_num>=r&&(this.$set(this.attr.productSelect,"cart_num",r||1),this.$set(this,"cart_num",r||1)),this.$set(this,"cart_num",n.cart_num),this.$set(this.attr.productSelect,"cart_num",n.cart_num)}else n.cart_num--,n.cart_num<1&&(this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"cart_num",1)),this.$set(this,"cart_num",n.cart_num),this.$set(this.attr.productSelect,"cart_num",n.cart_num)}},DefaultSelect:function(){var t=this.attr.productAttr,i=[];for(var e in this.productValue)if(this.productValue[e].quota>0){i=this.attr.productAttr.length?e.split(","):[];break}for(var o=0;o<t.length;o++)this.$set(t[o],"index",i[o]);var n=this.productValue[i.join(",")];n&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeCombination.title),this.$set(this.attr.productSelect,"image",n.image),this.$set(this.attr.productSelect,"price",n.price),this.$set(this.attr.productSelect,"quota",n.quota),this.$set(this.attr.productSelect,"unique",n.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"product_stock",n.product_stock),this.$set(this.attr.productSelect,"quota_show",n.quota_show),this.$set(this,"attrValue",i.join(",")),this.attrValue=i.join(","),this.$set(this,"attrTxt","已选择")):!n&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeCombination.title),this.$set(this.attr.productSelect,"image",this.storeCombination.image),this.$set(this.attr.productSelect,"price",this.storeCombination.price),this.$set(this.attr.productSelect,"quota",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this.attr.productSelect,"product_stock",0),this.$set(this.attr.productSelect,"quota_show",0),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择")):n||t.length||(this.$set(this.attr.productSelect,"store_name",this.storeCombination.title),this.$set(this.attr.productSelect,"image",this.storeCombination.image),this.$set(this.attr.productSelect,"price",this.storeCombination.price),this.$set(this.attr.productSelect,"quota",0),this.$set(this.attr.productSelect,"unique",this.storeCombination.unique||""),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this.attr.productSelect,"quota_show",0),this.$set(this.attr.productSelect,"product_stock",0),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择"))},setProductSelect:function(){var t=this,i=t.attr;i.productSelect.image=t.storeCombination.image,i.productSelect.store_name=t.storeCombination.title,i.productSelect.price=t.storeCombination.price,i.productSelect.quota=0,i.productSelect.quota_show=0,i.productSelect.product_stock=0,i.cartAttr=!1,t.$set(t,"attr",i)},pay:function(){var t=this;t.attr.cartAttr=!0,t.isOpen=!0},goPay:function(){var i=this,e={};e.productId=i.storeCombination.product_id,e.cartNum=i.attr.productSelect.cart_num,e.uniqueId=i.attr.productSelect.unique,e.combinationId=i.storeCombination.id,e.new=1,(0,r.postCartAdd)(e).then((function(e){t.navigateTo({url:"/pages/users/order_confirm/index?new=1&cartId="+e.data.cartId+"&pinkId="+i.pinkId})})).catch((function(t){i.$util.Tips({title:t})}))},goPoster:function(){var i=this;i.posters=!1,t.navigateTo({url:"/pages/activity/poster-poster/index?type=2&id="+i.pinkId})},goOrder:function(){var i=this;t.navigateTo({url:"/pages/users/order_details/index?order_id="+i.currentPinkOrder})},goList:function(){t.navigateTo({url:"/pages/activity/goods_combination/index"})},goDetail:function(i){this.pinkId=i,t.navigateTo({url:"/pages/activity/goods_combination_details/index?id="+i})},getCombinationPink:function(){var i=this,e=this;(0,a.getCombinationPink)(e.pinkId).then((function(o){if(e.$set(e,"storeCombinationHost",o.data.store_combination_host),o.data.pinkT.stop_time=parseInt(o.data.pinkT.stop_time),e.$set(e,"storeCombination",o.data.store_combination),e.$set(e.attr.productSelect,"num",o.data.store_combination.num),e.$set(e,"pinkT",o.data.pinkT),e.$set(e,"pinkAll",o.data.pinkAll),e.$set(e,"count",o.data.count),e.$set(e,"userBool",o.data.userBool),e.$set(e,"pinkBool",o.data.pinkBool),e.$set(e,"isOk",o.data.is_ok),e.$set(e,"currentPinkOrder",o.data.current_pink_order),e.$set(e,"userInfo",o.data.userInfo),e.attr.productAttr=o.data.store_combination.productAttr,e.productValue=o.data.store_combination.productValue,e.setProductSelect(),0!=e.attr.productAttr&&e.DefaultSelect(),1==o.data.is_ok&&0==o.data.userBool)return i.$util.Tips({title:"你不是该团的成员"},(function(){t.navigateTo({url:"/pages/activity/goods_combination/index"})}))})).catch((function(e){return i.$util.Tips({title:e},(function(){t.navigateBack()}))}))},getCombinationRemove:function(){var t=this;(0,a.postCombinationRemove)({id:t.pinkId,cid:t.storeCombination.id}).then((function(i){t.$util.Tips({title:i.msg},{tab:3})})).catch((function(i){t.$util.Tips({title:i})}))},lookAll:function(){this.iShidden=!this.iShidden}}};i.default=g}).call(this,e("543d")["default"])},baab:function(t,i,e){"use strict";var o;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return o}));var n=function(){var t=this,i=t.$createElement;t._self._c;t._isMounted||(t.e0=function(i){t.H5ShareBox=!1})},s=[]},f672:function(t,i,e){"use strict";e.r(i);var o=e("aed9"),n=e.n(o);for(var s in o)"default"!==s&&function(t){e.d(i,t,(function(){return o[t]}))}(s);i["default"]=n.a}},[["8bcc","common/runtime","common/vendor"]]]);