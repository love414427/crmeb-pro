(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{5296:function(e,t,o){"use strict";o.r(t);var a=o("b2c6");for(var n in a)"default"!==n&&function(e){o.d(t,e,(function(){return a[e]}))}(n);o("b033");var r,i,c,u,s=o("f0c5"),l=Object(s["a"])(a["default"],r,i,!1,null,null,null,!1,c,u);t["default"]=l.exports},"72f3":function(e,t,o){},b033:function(e,t,o){"use strict";var a=o("72f3"),n=o.n(a);n.a},b2c6:function(e,t,o){"use strict";o.r(t);var a=o("e0a1"),n=o.n(a);for(var r in a)"default"!==r&&function(e){o.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},e0a1:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(o("a34a")),n=(o("fa9e"),o("12b8")),r=o("8a96"),i=(l(o("20eb")),l(o("07ef"))),c=o("21c4"),u=o("4e1f"),s=o("26cb");function l(e){return e&&e.__esModule?e:{default:e}}function d(e,t,o,a,n,r,i){try{var c=e[r](i),u=c.value}catch(s){return void o(s)}c.done?t(u):Promise.resolve(u).then(a,n)}function f(e){return function(){var t=this,o=arguments;return new Promise((function(a,n){var r=e.apply(t,o);function i(e){d(r,a,n,i,c,"next",e)}function c(e){d(r,a,n,i,c,"throw",e)}i(void 0)}))}}var p=requirePlugin("live-player-plugin"),b="--view-theme: #42CA4D;--view-priceColor:#FF7600;--view-minorColor:rgba(108, 198, 94, 0.5);--view-minorColorT:rgba(66, 202, 77, 0.1);--view-bntColor:#FE960F;",g="--view-theme: #e93323;--view-priceColor:#e93323;--view-minorColor:rgba(233, 51, 35, 0.5);--view-minorColorT:rgba(233, 51, 35, 0.1);--view-bntColor:#FE960F;",m="--view-theme: #1DB0FC;--view-priceColor:#FD502F;--view-minorColor:rgba(58, 139, 236, 0.5);--view-minorColorT:rgba(9, 139, 243, 0.1);--view-bntColor:#22CAFD;",v="--view-theme: #FF448F;--view-priceColor:#FF448F;--view-minorColor:rgba(255, 68, 143, 0.5);--view-minorColorT:rgba(255, 68, 143, 0.1);--view-bntColor:#282828;",h="--view-theme: #FE5C2D;--view-priceColor:#FE5C2D;--view-minorColor:rgba(254, 92, 45, 0.5);--view-minorColorT:rgba(254, 92, 45, 0.1);--view-bntColor:#FDB000;",w={globalData:{spid:0,code:0,isLogin:!1,userInfo:{},MyMenus:[],globalData:!1,isIframe:!1,tabbarShow:!0,windowHeight:0},computed:(0,s.mapGetters)(["isLogin","cartNum"]),watch:{isLogin:{deep:!0,handler:function(e,t){e?this.getCartNum():this.$store.commit("indexData/setCartNum","")}},cartNum:function(t,o){this.$store.commit("indexData/setCartNum",t+""),t>0?e.setTabBarBadge({index:Number(e.getStorageSync("FOOTER_ADDCART"))||2,text:t+""}):e.hideTabBarRedDot({index:Number(e.getStorageSync("FOOTER_ADDCART"))||2})}},onLaunch:function(){var t=f(a.default.mark((function t(o){var r,c,s,l,d=this;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=this,(0,u.colorChange)("color_change").then((function(t){var o=t.data.navigation,a=t.data.status;switch(e.setStorageSync("navigation",o),e.$emit("navOk",o),e.setStorageSync("statusColor",a),e.$emit("colorOk",a),t.data.status){case 1:e.setStorageSync("viewColor",m),e.$emit("ok",m);break;case 2:e.setStorageSync("viewColor",b),e.$emit("ok",b);break;case 3:e.setStorageSync("viewColor",g),e.$emit("ok",g);break;case 4:e.setStorageSync("viewColor",v),e.$emit("ok",v);break;case 5:e.setStorageSync("viewColor",h),e.$emit("ok",h);break;default:e.setStorageSync("viewColor",g),e.$emit("ok",g);break}})),o.query.pid&&r.$Cache.set("spread",o.query.pid),o.query.spread&&(r.$Cache.set("spread",o.query.spread),r.globalData.spid=o.query.spread,r.globalData.pid=o.query.spread),""!=n.HTTP_REQUEST_URL){t.next=7;break}return t.abrupt("return",!1);case 7:if(!o.query.hasOwnProperty("scene")){t.next=20;break}t.t0=o.scene,t.next=1047===t.t0?11:1048===t.t0?14:1049===t.t0?16:1001===t.t0?18:20;break;case 11:return c=r.$util.getUrlParams(decodeURIComponent(o.query.scene)),r.globalData.code=void 0===c.pid?c:c.pid,t.abrupt("break",20);case 14:return r.globalData.code=o.query.scene,t.abrupt("break",20);case 16:return r.globalData.code=o.query.scene,t.abrupt("break",20);case 18:return r.globalData.spid=o.query.scene,t.abrupt("break",20);case 20:s=wx.getUpdateManager(),s.onCheckForUpdate((function(e){})),s.onUpdateReady((function(){wx.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",success:function(e){e.confirm&&s.applyUpdate()}})})),s.onUpdateFailed((function(){return r.Tips({title:"新版本下载失败"})})),e.getSystemInfo({success:function(e){r.globalData.navHeight=e.statusBarHeight*(750/e.windowWidth)+91}}),l=e.getMenuButtonBoundingClientRect(),r.globalData.navH=2*l.top+l.height/2,this.$store.getters.isLogin||i.default.getCode().then((function(e){d.silenceAuth(e)})).catch((function(t){e.hideLoading()}));case 28:case"end":return t.stop()}}),t,this)})));function o(e){return t.apply(this,arguments)}return o}(),onShow:function(e){var t=this,o=[1007,1008,1014,1044,1045,1046,1047,1048,1049,1073,1154,1155];o.includes(e.scene)&&p.getShareParams().then((function(e){e.custom_params.pid&&(t.$Cache.set("spread",e.custom_params.pid),t.globalData.spid=e.custom_params.pid,t.globalData.pid=e.custom_params.pid)})).catch((function(e){}))},mounted:function(){var e=this;setTimeout((function(t){e.$store.getters.isLogin&&e.getCartNum()}),100)},methods:{silenceAuth:function(t){var o=this,a=this,n=a.globalData.spid?a.globalData.spid:"";(0,r.silenceAuth)({code:t,spread_spid:n,spread_code:a.globalData.code}).then((function(t){if(void 0!==t.data.token&&t.data.token){e.hideLoading();var n=t.data.expires_time-o.$Cache.time();a.$store.commit("LOGIN",{token:t.data.token,time:n}),a.$store.commit("SETUID",t.data.userInfo.uid),a.$store.commit("UPDATE_USERINFO",t.data.userInfo)}})).catch((function(e){}))},getCartNum:function(){var e=this;(0,c.getCartCounts)().then((function(t){e.$store.commit("indexData/setCartNum",t.data.count>99?"..":t.data.count+"")}))},isWork:function(){return-1!==navigator.userAgent.toLowerCase().indexOf("wxwork")&&-1!==navigator.userAgent.toLowerCase().indexOf("micromessenger")}},onHide:function(){}};t.default=w}).call(this,o("543d")["default"])},fd7b:function(e,t,o){"use strict";(function(e){o("22b3");var t=s(o("66fd")),a=s(o("5296")),n=s(o("36c2")),r=s(o("07c4")),i=s(o("76cb")),c=s(o("12b8")),u=s(o("d2a2"));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function d(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){f(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function f(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}wx.__webpack_require_UNI_MP_PLUGIN__=o,t.default.prototype.$util=i.default,t.default.prototype.$config=c.default,t.default.prototype.$Cache=r.default,t.default.prototype.$eventHub=new t.default,t.default.prototype.$socket=new u.default,t.default.config.productionTip=!1;var p=function(){o.e("components/pageLoading").then(function(){return resolve(o("60c4"))}.bind(null,o)).catch(o.oe)},b=function(){o.e("components/skeleton/index").then(function(){return resolve(o("d313"))}.bind(null,o)).catch(o.oe)};t.default.component("skeleton",b),t.default.component("pageLoading",p),a.default.mpType="app";var g=new t.default(d(d({},a.default),{},{store:n.default,Cache:r.default}));e(g).$mount()}).call(this,o("543d")["createApp"])}},[["fd7b","common/runtime","common/vendor"]]]);