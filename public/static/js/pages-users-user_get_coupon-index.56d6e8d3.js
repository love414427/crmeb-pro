(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_get_coupon-index"],{"0fb3":function(t,e,i){"use strict";var o=i("7577"),n=i.n(o);n.a},"16cc":function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"getCoupons",style:t.colorStyle},[t.count>1?o("v-uni-view",{staticClass:"header acea-row row-around"},t._l(t.navList,(function(e,i){return e.count?o("v-uni-view",{key:i,staticClass:"item",class:t.type==i?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setType(i)}}},[t._v(t._s(e.name))]):t._e()})),1):t._e(),t.couponsList.length?o("v-uni-view",{staticClass:"list",class:t.count<=1?"on":""},t._l(t.couponsList,(function(e,n){return o("v-uni-view",{key:n,staticClass:"item acea-row row-between-wrapper",class:{svip:4===e.receive_type}},[e.products.length>1||0==e.products.length?o("v-uni-view",{staticClass:"left"},[o("v-uni-view",{staticClass:"name line1",class:e.is_use?"moneyGray":""},[0===e.type?o("v-uni-text",{staticClass:"label",class:e.is_use?"bg-color-huic":""},[t._v("通用券")]):1===e.type?o("v-uni-text",{staticClass:"label",class:e.is_use?"bg-color-huic":""},[t._v("品类券")]):o("v-uni-text",{staticClass:"label",class:e.is_use?"bg-color-huic":""},[t._v("商品券")]),t._v(t._s(e.title))],1),e.products.length>1?o("v-uni-view",{staticClass:"pictrueList acea-row"},t._l(e.products,(function(e,i){return i<3?o("v-uni-view",{key:i,staticClass:"itemn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetails(e)}}},[o("v-uni-view",{staticClass:"pictrue"},[o("v-uni-image",{attrs:{src:e.image}})],1),o("v-uni-view",{staticClass:"money"},[t._v("¥"+t._s(e.price))])],1):t._e()})),1):o("v-uni-view",{staticClass:"time",class:e.is_use?"moneyGray":""},[e.coupon_time?o("v-uni-view",[t._v("领取后"+t._s(e.coupon_time)+"天内可用")]):o("v-uni-view",[t._v(t._s(e.start_time?e.start_time+"-":"")+t._s(e.end_time))])],1)],1):o("v-uni-view",{staticClass:"left acea-row row-middle",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetails(e.products[0])}}},[o("v-uni-view",{staticClass:"pictrues"},[o("v-uni-image",{attrs:{src:e.products[0].image}})],1),o("v-uni-view",{staticClass:"text"},[o("v-uni-view",{staticClass:"top"},[o("v-uni-view",{staticClass:"title"},[t._v(t._s(e.title))]),o("v-uni-view",{staticClass:"acea-row"},[0===e.type?o("v-uni-view",{staticClass:"label",class:e.is_use?"bg-color-huic":""},[t._v("通用券")]):1===e.type?o("v-uni-view",{staticClass:"label",class:e.is_use?"bg-color-huic":""},[t._v("品类券")]):o("v-uni-view",{staticClass:"label",class:e.is_use?"bg-color-huic":""},[t._v("商品券")])],1)],1),o("v-uni-view",{staticClass:"money"},[t._v("¥"+t._s(e.products[0].price))])],1)],1),o("v-uni-view",{staticClass:"right",class:e.is_use?"moneyGray":""},[1==e.is_use?o("v-uni-view",{staticClass:"iconfont icon-yilingqu"}):t._e(),o("v-uni-view",[1==e.coupon_type?o("v-uni-text",{staticClass:"label"},[t._v("¥")]):t._e(),o("v-uni-text",{staticClass:"num"},[t._v(t._s(1==e.coupon_type?e.coupon_price:parseFloat(e.coupon_price)/10))]),1!=e.coupon_type?o("v-uni-text",{staticClass:"label"},[t._v("折")]):t._e()],1),e.use_min_price>0?o("v-uni-view",[t._v("满"+t._s(e.use_min_price)+"可用")]):o("v-uni-view",[t._v("无门槛券")]),1==e.is_use?o("v-uni-view",{staticClass:"bnt acea-row row-center-wrapper bg-color-huic"},[t._v("已领取")]):2==e.is_use?o("v-uni-view",{staticClass:"bnt acea-row row-center-wrapper bg-color-huic"},[t._v("已领完")]):o("v-uni-view",{staticClass:"bnt acea-row row-center-wrapper",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.getCoupon(e.id,n)}}},[t._v("立即领取")]),4!==e.receive_type||e.is_use?t._e():o("v-uni-view",{staticClass:"labelVip"},[o("v-uni-image",{attrs:{src:i("7737")}})],1)],1)],1)})),1):t._e(),t.couponsList.length?o("v-uni-view",{staticClass:"loadingicon acea-row row-center-wrapper"},[o("v-uni-text",{staticClass:"loading iconfont icon-jiazai",attrs:{hidden:0==t.loading}}),t._v(t._s(t.loadTitle))],1):t.couponsList.length||2!==t.page?t._e():o("v-uni-view",{staticClass:"noCommodity"},[o("v-uni-view",{staticClass:"pictrue"},[o("v-uni-image",{attrs:{src:"/static/images/noCoupon.png"}})],1)],1),t.navigation?o("home"):t._e()],1)},a=[]},"2b49":function(t,e,i){"use strict";var o=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("26cb"),a=o(i("d0ca")),s=i("12b8"),c={name:"Home",props:{},mixins:[a.default],data:function(){return{top:"545",imgHost:s.HTTP_REQUEST_URL}},computed:(0,n.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){},beforeDestroy:function(){this.$store.commit("CLOSE_HOME")}};e.default=c},4899:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,".pictrueBox[data-v-59354ea8]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-59354ea8]{position:fixed;color:#fff;text-align:center;z-index:9999;right:%?15?%;display:flex}.home .homeCon[data-v-59354ea8]{border-radius:%?50?%;opacity:0;height:0;color:var(--view-theme);width:0}.home .homeCon.on[data-v-59354ea8]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)!important}.home .homeCon .iconfont[data-v-59354ea8]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-59354ea8]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme)}.home .pictrue .image[data-v-59354ea8]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},"65a8":function(t,e,i){var o=i("4899");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f065").default;n("0114b9c6",o,!0,{sourceMap:!1,shadowMode:!1})},"6c80":function(t,e,i){"use strict";i.r(e);var o=i("16cc"),n=i("b985");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("0fb3");var s,c=i("f0c5"),r=Object(c["a"])(n["default"],o["b"],o["c"],!1,null,"51c6bc70",null,!1,o["a"],s);e["default"]=r.exports},7577:function(t,e,i){var o=i("78e2");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f065").default;n("24da4768",o,!0,{sourceMap:!1,shadowMode:!1})},7737:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA0CAMAAADixqUFAAAAV1BMVEUAAAD/8vL/+u7/893/////////897/893/////////////893/89z/89z/////9uX+9eL/+On/9+f+9N/+893/+ez/9eT//v3//fn//PX/+/P/+u7/+vGr/PUjAAAADnRSTlMAByzy7deTj4I9GdTUvPz/EEIAAAGXSURBVEjH1dfdesIgDAbg6jbdb7G0NOHn/q9zlAFBirqmB3v2HXhk3ieJCrZbcuh3JAhve4X3l13C4fj63O8Slpf/IaCzyjpkC2DVTyzwBFQxw6CQIwABngCGoKneRzMEeyVYhhDrY9R2AQhgCn0JSMmZwgwFIDmbxKJeKtY3ShMgkSX0JgEDcn9ZhgCm0OsIcAQiFOw7YZCAvxLQr4E3BQFSMDdJgBASuYIOQCA4QgBECt4TALEJGA9Q9E0BnPLRa8AR0CS66kowD4B5vpi2YNKJbqq7pgIuPq4lAF0JpgFQA4Gw5VtIiEBJgKoniCEChjRFrCciAPUImVCQgDEJ1gM5rt3BfKEMgQA5ZsGp8kB2gRfrESgSAkCCJmCJ1fo+MI6zMcIDUxKQgJjGBFSfM2UBmgDV3wJI6NUVINafAaWorwW5rYPpWnDlBBsAEnSzg1k8qJ+esoDtDmpgJXxkAW6sYG53kHPOQj+wgOlIgvr1Dqcip47+27tKaNbXwNeho+cL4+u3AicP0DMOVsCjFTx9no9L8TeLicvgUvQxRAAAAABJRU5ErkJggg=="},"77b7":function(t,e,i){"use strict";i.r(e);var o=i("2b49"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},"78e2":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* crmeb颜色变量 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.getCoupons .bg-color-huic[data-v-51c6bc70]{color:#ccc!important;background:#f1f1f1!important}.getCoupons .header[data-v-51c6bc70]{background-color:var(--view-theme);height:%?200?%;border-radius:0 0 %?70?% %?70?%}.getCoupons .header .item[data-v-51c6bc70]{width:%?138?%;height:%?54?%;border-radius:%?28?%;text-align:center;line-height:%?54?%;color:#fff;margin-top:%?38?%}.getCoupons .header .item.on[data-v-51c6bc70]{background-color:#fff;color:var(--view-theme)}.getCoupons .list[data-v-51c6bc70]{margin-top:%?-70?%}.getCoupons .list.on[data-v-51c6bc70]{margin-top:%?24?%}.getCoupons .list.on .item[data-v-51c6bc70]::after{background-color:#f2f2f2!important}.getCoupons .list .item[data-v-51c6bc70]{width:%?690?%;height:%?240?%;border-radius:%?18?%;background-color:#fff;margin:0 auto %?24?% auto;padding:%?22?% 0 %?18?% %?28?%;overflow:hidden;position:relative}.getCoupons .list .item[data-v-51c6bc70]::after{content:" ";width:%?30?%;height:%?30?%;border-radius:50%;position:absolute;left:65.5%;top:%?-14?%;background-color:#f2f2f2}.getCoupons .list .item[data-v-51c6bc70]::before{content:" ";width:%?30?%;height:%?30?%;border-radius:50%;position:absolute;left:65.5%;bottom:%?-14?%;background-color:#f2f2f2}.getCoupons .list .item[data-v-51c6bc70]:first-child::after{background-color:var(--view-theme)}.getCoupons .list .item .left[data-v-51c6bc70]{width:%?440?%;border-right:%?1?% dashed #eee}.getCoupons .list .item .left .time[data-v-51c6bc70]{color:#666;font-size:%?22?%;margin-top:%?90?%}.getCoupons .list .item .left .time.moneyGray[data-v-51c6bc70]{color:#ccc}.getCoupons .list .item .left .pictrues[data-v-51c6bc70]{width:%?172?%;height:%?172?%;border-radius:%?12?%;margin-right:%?20?%}.getCoupons .list .item .left .pictrues uni-image[data-v-51c6bc70]{width:100%;height:100%;border-radius:%?12?%}.getCoupons .list .item .left .text[data-v-51c6bc70]{width:%?234?%}.getCoupons .list .item .left .text .money[data-v-51c6bc70]{color:#999;font-size:%?20?%;margin-top:%?8?%}.getCoupons .list .item .left .text .top[data-v-51c6bc70]{height:%?130?%}.getCoupons .list .item .left .text .top .title[data-v-51c6bc70]{font-size:%?26?%;color:#333}.getCoupons .list .item .left .text .top .label[data-v-51c6bc70]{background-color:var(--view-minorColorT);padding:%?4?% %?12?%;border-radius:%?20?%;color:var(--view-theme);font-size:%?18?%;margin-top:%?8?%}.getCoupons .list .item .left .pictrueList[data-v-51c6bc70]{margin-top:%?20?%}.getCoupons .list .item .left .pictrueList .itemn[data-v-51c6bc70]{width:%?120?%;margin-right:%?24?%}.getCoupons .list .item .left .pictrueList .itemn .money[data-v-51c6bc70]{text-align:center;color:#999;font-size:%?20?%;margin-top:%?8?%}.getCoupons .list .item .left .pictrueList .itemn .pictrue[data-v-51c6bc70]{width:100%;height:%?120?%;border-radius:%?8?%}.getCoupons .list .item .left .pictrueList .itemn .pictrue uni-image[data-v-51c6bc70]{width:100%;height:100%;border-radius:%?8?%}.getCoupons .list .item .left .name[data-v-51c6bc70]{font-size:%?24?%}.getCoupons .list .item .left .name.moneyGray[data-v-51c6bc70]{color:#ccc}.getCoupons .list .item .left .name .label[data-v-51c6bc70]{background-color:var(--view-minorColorT);padding:%?4?% %?12?%;border-radius:%?20?%;color:var(--view-theme);font-size:%?18?%;margin-right:%?8?%}.getCoupons .list .item .right[data-v-51c6bc70]{width:%?212?%;text-align:center;font-size:%?24?%;color:var(--view-theme);position:relative}.getCoupons .list .item .right .icon-yilingqu[data-v-51c6bc70]{position:absolute;right:%?-14?%;top:%?-74?%;font-size:%?100?%;z-index:0}.getCoupons .list .item .right .labelVip[data-v-51c6bc70]{width:%?128?%;height:%?82?%;position:absolute;right:%?10?%;bottom:%?-40?%}.getCoupons .list .item .right .labelVip uni-image[data-v-51c6bc70]{width:100%;height:100%}.getCoupons .list .item .right .label[data-v-51c6bc70]{font-size:%?26?%;font-weight:600}.getCoupons .list .item .right .num[data-v-51c6bc70]{font-size:%?50?%;font-weight:600}.getCoupons .list .item .right .bnt[data-v-51c6bc70]{width:%?138?%;height:%?44?%;background:linear-gradient(135deg,var(--view-minorColor),var(--view-theme));border-radius:%?24?%;color:#fff;font-size:%?24?%;margin:%?16?% auto 0 auto;position:relative;z-index:1}.getCoupons .list .item .right.moneyGray[data-v-51c6bc70]{color:#ccc}.getCoupons .list .item.svip .right[data-v-51c6bc70]{color:#d98c2b}.getCoupons .list .item.svip .right .bnt[data-v-51c6bc70]{background:linear-gradient(90deg,#f1be52,#e9a655)}.getCoupons .list .item.svip .right.moneyGray[data-v-51c6bc70]{color:#ccc}.getCoupons .list .item.svip .name .label[data-v-51c6bc70]{background-color:#ffefcd;color:#d18e00}',""]),t.exports=e},b985:function(t,e,i){"use strict";i.r(e);var o=i("f439"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},d0ca:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{colorStyle:"",navigation:0,colorNum:0}},created:function(){var t=this;this.colorStyle=uni.getStorageSync("viewColor"),uni.$on("ok",(function(e){t.colorStyle=e})),this.navigation=uni.getStorageSync("navigation"),uni.$on("navOk",(function(e){t.navigation=e}))},methods:{colorData:function(){var t=this;this.colorNum=uni.getStorageSync("statusColor"),uni.$on("colorOk",(function(e){t.colorNum=e}))}}};e.default=o},da19:function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[i("v-uni-view",{staticStyle:{"touch-action":"none"}},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?i("v-uni-view",{staticClass:"homeCon bg-color",class:!0===t.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/index/index"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/order_addcart/order_addcart"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/user/index"}})],1):t._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?t.imgHost+"/statics/images/close.gif":t.imgHost+"/statics/images/open.gif"}})],1)],1)],1)],1)],1)},a=[]},eb30:function(t,e,i){"use strict";var o=i("65a8"),n=i.n(o);n.a},f176:function(t,e,i){"use strict";i.r(e);var o=i("da19"),n=i("77b7");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("eb30");var s,c=i("f0c5"),r=Object(c["a"])(n["default"],o["b"],o["c"],!1,null,"59354ea8",null,!1,o["a"],s);e["default"]=r.exports},f439:function(t,e,i){"use strict";var o=i("4ea4");i("4160"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("4e1f"),a=i("fa9e"),s=i("26cb"),c=o(i("f176")),r=o(i("d0ca")),u={components:{home:c.default},mixins:[r.default],data:function(){return{couponsList:[],loading:!1,loadend:!1,loadTitle:"加载更多",page:1,limit:20,isAuto:!1,isShowAuth:!1,type:0,navList:[{name:"通用券",count:0},{name:"品类券",count:0},{name:"商品券",count:0}],count:0}},computed:(0,s.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&this.getUseCoupons()},deep:!0}},onLoad:function(){this.isLogin?this.getUseCoupons():(0,a.toLogin)()},onReachBottom:function(){this.getUseCoupons()},methods:{goDetails:function(t){uni.navigateTo({url:"/pages/goods_details/index?id="+t.id})},authColse:function(t){this.isShowAuth=t},getCoupon:function(t,e){var i=this,o=i.couponsList;(0,n.setCouponReceive)(t).then((function(t){o[e].is_use=!0,i.$set(i,"couponsList",o),i.$util.Tips({title:"领取成功"})})).catch((function(t){return i.$util.Tips({title:t})}))},getUseCoupons:function(){var t=this;return!this.loadend&&(!this.loading&&(t.loading=!0,t.loadTitle="加载更多",void(0,n.getCoupons)({type:t.type,page:t.page,limit:t.limit}).then((function(e){var i=e.data.list,o=i.length<t.limit,n=t.$util.SplitArray(i,t.couponsList);e.data.count.forEach((function(e,i){t.navList[i].count=e,e&&t.count++})),t.$set(t,"couponsList",n),t.loadend=o,t.loading=!1,t.loadTitle=o?"没有更多内容啦~":"加载更多",t.page=t.page+1})).catch((function(e){t.loading=!1,t.loadTitle="加载更多"}))))},setType:function(t){this.type!==t&&(this.type=t,this.couponsList=[],this.page=1,this.loadend=!1,this.getUseCoupons())}}};e.default=u}}]);