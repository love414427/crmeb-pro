(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/guide/index"],{"1eca":function(e,t,n){"use strict";n.r(t);var a=n("6d0d"),u=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=u.a},"6d0d":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;u(n("07c4"));var a=n("4e1f");function u(e){return e&&e.__esModule?e:{default:e}}var i=function(){n.e("components/guide/index").then(function(){return resolve(n("0f4a"))}.bind(null,n)).catch(n.oe)},d={components:{guide:i},data:function(){return{guidePages:!1,advData:[]}},onShow:function(){this.loadExecution()},methods:{loadExecution:function(){var t=this,n=e.getStorageSync("guideDate")||"",u=(new Date).toLocaleDateString();n!==u?(0,a.getOpenAdv)().then((function(n){0==n.data.status||0==n.data.value.length?e.switchTab({url:"/pages/index/index"}):n.data.status&&(n.data.value.length||n.data.video_link)&&(t.advData=n.data,e.setStorageSync("guideDate",(new Date).toLocaleDateString()),t.guidePages=!0)})).catch((function(t){e.switchTab({url:"/pages/index/index"})})):e.switchTab({url:"/pages/index/index"})}},onHide:function(){this.guidePages=!1}};t.default=d}).call(this,n("543d")["default"])},"971e":function(e,t,n){"use strict";n.r(t);var a=n("d72e"),u=n("1eca");for(var i in u)"default"!==i&&function(e){n.d(t,e,(function(){return u[e]}))}(i);n("f603");var d,c=n("f0c5"),o=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],d);t["default"]=o.exports},d434:function(e,t,n){"use strict";(function(e){n("22b3");a(n("66fd"));var t=a(n("971e"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},d72e:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var u=function(){var e=this,t=e.$createElement;e._self._c},i=[]},d8b3:function(e,t,n){},f603:function(e,t,n){"use strict";var a=n("d8b3"),u=n.n(a);u.a}},[["d434","common/runtime","common/vendor"]]]);