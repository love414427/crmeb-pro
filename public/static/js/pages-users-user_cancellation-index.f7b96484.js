(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_cancellation-index"],{"038f":function(t,a,n){"use strict";var e=n("ed22"),i=n.n(e);i.a},"1b67":function(t,a,n){"use strict";n.r(a);var e=n("c03c"),i=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(a,t,(function(){return e[t]}))}(o);a["default"]=i.a},"1de5":function(t,a,n){"use strict";t.exports=function(t,a){return a||(a={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),a.hash&&(t+=a.hash),/["'() \t\n]/.test(t)||a.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"4e57":function(t,a,n){"use strict";var e;n.d(a,"b",(function(){return i})),n.d(a,"c",(function(){return o})),n.d(a,"a",(function(){return e}));var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"agreement",style:t.colorStyle},[t.agreementData.avatar?n("v-uni-view",{staticClass:"top-msg"},[n("v-uni-view",{staticClass:"avatar"},[n("img",{attrs:{src:t.agreementData.avatar,alt:""}})]),n("v-uni-view",{staticClass:"name"},[t._v(t._s(t.agreementData.name))])],1):t._e(),n("v-uni-view",{staticClass:"content",domProps:{innerHTML:t._s(t.agreementData.content)}}),n("v-uni-view",{staticClass:"footer"},[n("v-uni-view",{staticClass:"trip"},[t._v("点击【立即注销】即代表您已经同意《用户注销协议》")]),n("v-uni-view",{staticClass:"cancellation flex-aj-center",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.isCancellation=!0}}},[t._v("立即注销")])],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.isCancellation,expression:"isCancellation"}],staticClass:"mark"}),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.isCancellation,expression:"isCancellation"}],staticClass:"tipaddress"},[n("v-uni-view",{staticClass:"top"}),n("v-uni-view",{staticClass:"bottom"},[n("v-uni-view",{staticClass:"font1"},[t._v("是否确认注销")]),n("v-uni-view",{staticClass:"font2"},[t._v("注销后无法恢复，请谨慎操作")]),n("v-uni-view",{staticClass:"btn"},[n("v-uni-view",{staticClass:"cancellation-btn btn-sty flex-aj-center",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.cancelUser.apply(void 0,arguments)}}},[t._v("注销")]),n("v-uni-view",{staticClass:"cancel btn-sty flex-aj-center",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.isCancellation=!1}}},[t._v("取消")])],1)],1)],1)],1)},o=[]},"50db":function(t,a,n){var e=n("24fb"),i=n("1de5"),o=n("6cff");a=e(!1);var r=i(o);a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* crmeb颜色变量 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.agreement[data-v-7a4f2487]{background-color:#fff}.agreement .content[data-v-7a4f2487]{padding:0 %?30?%;height:calc(100vh - %?61?%)}.top-msg[data-v-7a4f2487]{display:flex;align-items:center;background-color:#fff;padding:%?40?% %?30?% %?40?% %?30?%}.top-msg .avatar[data-v-7a4f2487]{width:%?76?%;height:%?76?%;margin-right:%?20?%}.top-msg .avatar img[data-v-7a4f2487]{width:100%;height:100%;border-radius:50%}.footer[data-v-7a4f2487]{text-align:center;z-index:99;width:100%;background-color:#fafafa;position:fixed;padding:%?36?% %?30?%;box-sizing:border-box;border-top:%?1?% solid #eee;bottom:%?0?%}.footer .trip[data-v-7a4f2487]{color:#999;font-size:%?24?%;margin:%?24?% 0}.footer .cancellation[data-v-7a4f2487]{height:45px;color:#fff;font-size:%?32?%;background:#e93323;border-radius:23px}.tipaddress[data-v-7a4f2487]{position:fixed;left:13%;top:25%;width:%?560?%;height:%?614?%;background-color:#fff;border-radius:%?10?%;z-index:100;text-align:center}.tipaddress .top[data-v-7a4f2487]{width:%?560?%;height:%?270?%;border-top-left-radius:%?10?%;border-top-right-radius:%?10?%;background-image:url('+r+");background-repeat:round;background-color:#e93323}.tipaddress .top .tipsphoto[data-v-7a4f2487]{display:inline-block;width:%?200?%;height:%?200?%;margin-top:%?73?%}.tipaddress .bottom[data-v-7a4f2487]{font-size:%?32?%;font-weight:400}.tipaddress .bottom .font1[data-v-7a4f2487]{font-size:%?36?%;font-weight:600;color:#333;margin:%?32?% %?0?% %?22?%}.tipaddress .bottom .font2[data-v-7a4f2487]{color:#666;margin-bottom:%?48?%}.tipaddress .bottom .btn[data-v-7a4f2487]{display:flex;margin:0 %?20?%}.tipaddress .bottom .btn .btn-sty[data-v-7a4f2487]{height:%?82?%;border-radius:%?42?%;line-height:%?82?%;padding:%?24?% %?78?%;margin:0 auto}.tipaddress .bottom .btn .cancellation-btn[data-v-7a4f2487]{background-color:#f5f5f5;color:#333}.tipaddress .bottom .btn .cancel[data-v-7a4f2487]{color:#fff;background:linear-gradient(90deg,#f67a38,#f11b09)}.mark[data-v-7a4f2487]{position:fixed;top:0;left:0;bottom:0;right:0;background:rgba(0,0,0,.5);z-index:99}",""]),t.exports=a},"590c":function(t,a,n){"use strict";n.r(a);var e=n("4e57"),i=n("1b67");for(var o in i)"default"!==o&&function(t){n.d(a,t,(function(){return i[t]}))}(o);n("038f");var r,s=n("f0c5"),c=Object(s["a"])(i["default"],e["b"],e["c"],!1,null,"7a4f2487",null,!1,e["a"],r);a["default"]=c.exports},"6cff":function(t,a,n){t.exports=n.p+"static/img/address.4539439e.png"},c03c:function(t,a,n){"use strict";var e=n("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=e(n("d0ca")),o=n("d5e6"),r={mixins:[i.default],data:function(){return{isCancellation:!1,agreementData:""}},onLoad:function(){this.getAgreement()},methods:{getAgreement:function(){var t=this;(0,o.getUserAgreement)("cancel").then((function(a){t.agreementData=a.data}))},cancelUser:function(){var t=this;(0,o.cancelUser)().then((function(a){t.$store.commit("LOGOUT"),uni.reLaunch({url:"/pages/index/index"})})).catch((function(a){return t.$util.Tips({title:a})}))}}};a.default=r},d0ca:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{colorStyle:"",navigation:0,colorNum:0}},created:function(){var t=this;this.colorStyle=uni.getStorageSync("viewColor"),uni.$on("ok",(function(a){t.colorStyle=a})),this.navigation=uni.getStorageSync("navigation"),uni.$on("navOk",(function(a){t.navigation=a}))},methods:{colorData:function(){var t=this;this.colorNum=uni.getStorageSync("statusColor"),uni.$on("colorOk",(function(a){t.colorNum=a}))}}};a.default=e},ed22:function(t,a,n){var e=n("50db");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=n("4f065").default;i("2d8d04e8",e,!0,{sourceMap:!1,shadowMode:!1})}}]);