(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-login-index"],{"1de5":function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"2dc2":function(t,e,n){var i=n("5914");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f065").default;r("677ec344",i,!0,{sourceMap:!1,shadowMode:!1})},3496:function(t,e,n){"use strict";(function(t){var i=n("dbce"),r=n("4ea4");n("c975"),n("ac1f"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=r(n("1da1")),o=(r(n("b4f7")),r(n("fc89"))),s=n("d5e6"),c=(i(n("6082")),n("56d5"),n("8a96")),u=n("29b6"),l=r(n("d0ca")),f="login_back_url",p={name:"Login",mixins:[o.default,l.default],data:function(){return{inAnimation:!1,protocol:!1,navList:["快速登录","账号登录"],current:1,account:"",password:"",captcha:"",formItem:1,type:"login",logoUrl:"",keyCode:"",codeUrl:"",codeVal:"",isShowCode:!1,appLoginStatus:!1,appUserInfo:null,appleLoginStatus:!1,appleUserInfo:null,appleShow:!1,keyLock:!0}},watch:{formItem:function(t,e){this.type=1==t?"login":"register"}},onLoad:function(){var t=this,e=this;uni.getSystemInfo({success:function(n){"ios"==n.platform.toLowerCase()&&t.getSystem(n.system)&&(e.appleShow=!0)}})},mounted:function(){this.getLogoImage()},methods:{changeMsg:function(){this.inAnimation=!0},ChangeIsDefault:function(t){this.$set(this,"protocol",!this.protocol)},getSystem:function(t){var e;return e=-1===t.toLowerCase().indexOf("ios")?t:t.split(" ")[1],e.indexOf(".")?e.split(".")[0]>=13:e>=13},appleLogin:function(){var t=this;if(this.account="",this.captcha="",!t.protocol)return this.inAnimation=!0,t.$util.Tips({title:"请先阅读并同意协议"});uni.showLoading({title:"登录中"}),uni.login({provider:"apple",timeout:1e4,success:function(e){uni.getUserInfo({provider:"apple",success:function(e){t.appleUserInfo=e.userInfo,t.appleLoginApi()},fail:function(){uni.showToast({title:"获取用户信息失败",icon:"none",duration:2e3})},complete:function(){uni.hideLoading()}})},fail:function(t){}})},appleLoginApi:function(){var t=this;(0,s.appleLogin)({openId:t.appleUserInfo.openId,email:t.appleUserInfo.email||"",phone:this.account,captcha:this.captcha}).then((function(e){var n=e.data;if(n.isbind)uni.showModal({title:"提示",content:"请绑定手机号后，继续操作",showCancel:!1,success:function(e){e.confirm&&(t.current=1,t.appleLoginStatus=!0)}});else{t.$store.commit("LOGIN",{token:n.token,time:n.expires_time-t.$Cache.time()});var i=t.$Cache.get(f)||"/pages/index/index";t.$Cache.clear(f),t.$store.commit("SETUID",n.userInfo.uid),t.$store.commit("UPDATE_USERINFO",n.userInfo),uni.reLaunch({url:i})}})).catch((function(t){uni.showModal({title:"提示",content:"错误信息".concat(t),success:function(t){t.confirm||t.cancel}})}))},wxLogin:function(){if(!this.protocol)return this.inAnimation=!0,this.$util.Tips({title:"请先阅读并同意协议"});var t=this;this.account="",this.captcha="",uni.showLoading({title:"登录中"}),uni.login({provider:"weixin",success:function(e){uni.getUserInfo({provider:"weixin",success:function(e){t.appUserInfo=e.userInfo,t.wxLoginApi()},fail:function(){uni.showToast({title:"获取用户信息失败",icon:"none",duration:2e3})},complete:function(){uni.hideLoading()}})},fail:function(){uni.showToast({title:"登录失败",icon:"none",duration:2e3})}})},wxLoginApi:function(){var t=this;wechatAppAuth({userInfo:t.appUserInfo,phone:this.account,code:this.captcha}).then((function(e){var n=e.data;if(n.isbind)uni.showModal({title:"提示",content:"请绑定手机号后，继续操作",showCancel:!1,success:function(e){e.confirm&&(t.current=1,t.appLoginStatus=!0)}});else{t.$store.commit("LOGIN",{token:n.token,time:n.expires_time-t.$Cache.time()});var i=t.$Cache.get(f)||"/pages/index/index";t.$Cache.clear(f),t.$store.commit("SETUID",n.userInfo.uid),t.$store.commit("UPDATE_USERINFO",n.userInfo),uni.reLaunch({url:i})}})).catch((function(t){uni.showModal({title:"提示",content:"错误信息".concat(t),success:function(t){t.confirm||t.cancel}})}))},again:function(){this.codeUrl=u.VUE_APP_API_URL+"/sms_captcha?key="+this.keyCode+Date.parse(new Date)},code:function(){var t=this;return t.protocol?t.account?/^1(3|4|5|7|8|9|6)\d{9}$/i.test(t.account)?void(0,s.getCodeApi)().then((function(e){t.keyCode=e.data.key,t.getCode()})).catch((function(e){t.$util.Tips({title:e})})):t.$util.Tips({title:"请输入正确的手机号码"}):t.$util.Tips({title:"请填写手机号码"}):(this.inAnimation=!0,t.$util.Tips({title:"请先阅读并同意协议"}))},getLogoImage:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t,(0,c.getLogo)(2).then((function(t){n.logoUrl=t.data.logo_url}));case 2:case"end":return e.stop()}}),e)})))()},loginMobile:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.protocol){e.next=4;break}return t.inAnimation=!0,e.abrupt("return",n.$util.Tips({title:"请先阅读并同意协议"}));case 4:if(n.account){e.next=6;break}return e.abrupt("return",n.$util.Tips({title:"请填写手机号码"}));case 6:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(n.account)){e.next=8;break}return e.abrupt("return",n.$util.Tips({title:"请输入正确的手机号码"}));case 8:if(n.captcha){e.next=10;break}return e.abrupt("return",n.$util.Tips({title:"请填写验证码"}));case 10:if(/^[\w\d]+$/i.test(n.captcha)){e.next=12;break}return e.abrupt("return",n.$util.Tips({title:"请输入正确的验证码"}));case 12:if(!n.appLoginStatus){e.next=16;break}n.wxLoginApi(),e.next=26;break;case 16:if(!n.appleLoginStatus){e.next=20;break}n.appleLoginApi(),e.next=26;break;case 20:if(!t.keyLock){e.next=24;break}t.keyLock=!t.keyLock,e.next=25;break;case 24:return e.abrupt("return",n.$util.Tips({title:"请勿重复点击"}));case 25:(0,s.loginMobile)({phone:n.account,captcha:n.captcha,spread:n.$Cache.get("spread")}).then((function(e){var i=e.data;n.$store.commit("LOGIN",{token:i.token,time:i.expires_time-t.$Cache.time()});var r=n.$Cache.get(f)||"/pages/index/index";n.$Cache.clear(f),(0,s.getUserInfo)().then((function(e){t.keyLock=!0,n.$store.commit("SETUID",e.data.uid),n.$store.commit("UPDATE_USERINFO",e.data),-1!==r.indexOf("/pages/users/login/index")&&(r="/pages/index/index"),uni.reLaunch({url:r})}))})).catch((function(e){t.keyLock=!0,n.$util.Tips({title:e})}));case 26:case"end":return e.stop()}}),e)})))()},register:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.account){e.next=3;break}return e.abrupt("return",n.$util.Tips({title:"请填写手机号码"}));case 3:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(n.account)){e.next=5;break}return e.abrupt("return",n.$util.Tips({title:"请输入正确的手机号码"}));case 5:if(n.captcha){e.next=7;break}return e.abrupt("return",n.$util.Tips({title:"请填写验证码"}));case 7:if(/^[\w\d]+$/i.test(n.captcha)){e.next=9;break}return e.abrupt("return",n.$util.Tips({title:"请输入正确的验证码"}));case 9:if(n.password){e.next=11;break}return e.abrupt("return",n.$util.Tips({title:"请填写密码"}));case 11:if(!/^([0-9]|[a-z]|[A-Z]){0,6}$/i.test(n.password)){e.next=13;break}return e.abrupt("return",n.$util.Tips({title:"您输入的密码过于简单"}));case 13:(0,s.register)({account:n.account,captcha:n.captcha,password:n.password,spread:n.$Cache.get("spread")}).then((function(t){n.$util.Tips({title:t}),n.formItem=1})).catch((function(t){n.$util.Tips({title:t})}));case 14:case"end":return e.stop()}}),e)})))()},getCode:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.account){e.next=3;break}return e.abrupt("return",n.$util.Tips({title:"请填写手机号码"}));case 3:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(n.account)){e.next=5;break}return e.abrupt("return",n.$util.Tips({title:"请输入正确的手机号码"}));case 5:return 2==n.formItem&&(n.type="register"),e.next=8,(0,s.registerVerify)({phone:n.account,type:n.type,key:n.keyCode,code:n.codeVal}).then((function(t){n.$util.Tips({title:t.msg}),n.sendCode()})).catch((function(t){n.$util.Tips({title:t})}));case 8:case"end":return e.stop()}}),e)})))()},navTap:function(t){this.current=t},submit:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.protocol){e.next=4;break}return t.inAnimation=!0,e.abrupt("return",n.$util.Tips({title:"请先阅读并同意协议"}));case 4:if(n.account){e.next=6;break}return e.abrupt("return",n.$util.Tips({title:"请填写账号"}));case 6:if(/^[\w\d]{5,16}$/i.test(n.account)){e.next=8;break}return e.abrupt("return",n.$util.Tips({title:"请输入正确的账号"}));case 8:if(n.password){e.next=10;break}return e.abrupt("return",n.$util.Tips({title:"请填写密码"}));case 10:if(!t.keyLock){e.next=14;break}t.keyLock=!t.keyLock,e.next=15;break;case 14:return e.abrupt("return",n.$util.Tips({title:"请勿重复点击"}));case 15:(0,s.loginH5)({account:n.account,password:n.password,spread:n.$Cache.get("spread")}).then((function(e){var i=e.data;n.$store.commit("LOGIN",{token:i.token,time:i.expires_time-t.$Cache.time()});var r=n.$Cache.get(f)||"/pages/index/index";n.$Cache.clear(f),(0,s.getUserInfo)().then((function(e){t.keyLock=!0,n.$store.commit("SETUID",e.data.uid),n.$store.commit("UPDATE_USERINFO",e.data),uni.reLaunch({url:r})})).catch((function(e){t.keyLock=!0}))})).catch((function(e){t.keyLock=!0,n.$util.Tips({title:e})}));case 16:case"end":return e.stop()}}),e)})))()},privacy:function(t){uni.navigateTo({url:"/pages/users/privacy/index?type="+t})}}};e.default=p}).call(this,n("5a52")["default"])},"36e1":function(t,e,n){"use strict";var i=n("f902"),r=n.n(i);r.a},"4bb9":function(t,e,n){"use strict";var i=n("2dc2"),r=n.n(i);r.a},"56d5":function(t,e){},5914:function(t,e,n){var i=n("24fb"),r=n("1de5"),a=n("a7eb");e=i(!1);var o=r(a);e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* crmeb颜色变量 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */[data-v-751f8bfe] uni-checkbox .uni-checkbox-input{margin-top:%?-6?%}.appLogin[data-v-751f8bfe]{margin-top:%?60?%}.appLogin .hds[data-v-751f8bfe]{display:flex;justify-content:center;align-items:center;font-size:%?24?%;color:#b4b4b4}.appLogin .hds .line[data-v-751f8bfe]{width:%?68?%;height:%?1?%;background:#ccc}.appLogin .hds p[data-v-751f8bfe]{margin:0 %?20?%}.appLogin .btn-wrapper[data-v-751f8bfe]{display:flex;align-items:center;justify-content:center;margin-top:%?30?%}.appLogin .btn-wrapper .btn[data-v-751f8bfe]{display:flex;align-items:center;justify-content:center;width:%?68?%;height:%?68?%;border-radius:50%}.appLogin .btn-wrapper .apple-btn[data-v-751f8bfe]{display:flex;align-items:center;justify-content:center;width:%?246?%;height:%?66?%;margin-left:%?30?%;background:#eaeaea;border-radius:%?34?%;font-size:%?24?%}.appLogin .btn-wrapper .apple-btn .icon-s-pingguo[data-v-751f8bfe]{color:#333;margin-right:%?10?%;font-size:%?34?%}.appLogin .btn-wrapper .iconfont[data-v-751f8bfe]{font-size:%?40?%;color:#fff}.appLogin .btn-wrapper .wx[data-v-751f8bfe]{background-color:#61c64f}.appLogin .btn-wrapper .mima[data-v-751f8bfe]{background-color:#28b3e9}.appLogin .btn-wrapper .yanzheng[data-v-751f8bfe]{background-color:#f89c23}.appLogin .btn-wrapper .pingguo[data-v-751f8bfe]{margin-left:%?60?%;background-color:#000}.main-color[data-v-751f8bfe]{color:var(--view-theme)}.code img[data-v-751f8bfe]{width:100%;height:100%}.acea-row.row-middle uni-input[data-v-751f8bfe]{margin-left:%?20?%;display:block}.login-wrapper .login-top[data-v-751f8bfe]{height:%?358?%;background-color:var(--view-theme);background-image:url('+o+");background-size:cover;background-repeat:no-repeat}.login-wrapper .login-top uni-image[data-v-751f8bfe]{width:101%;height:100%}.login-wrapper .shading[data-v-751f8bfe]{display:flex;align-items:center;justify-content:center;width:100%;margin-top:%?-230?%;position:relative}.login-wrapper .shading uni-image[data-v-751f8bfe]{width:%?180?%;height:%?180?%;top:%?40?%}.login-wrapper .whiteBg[data-v-751f8bfe]{background-color:#fff;margin:%?-30?% %?56?% %?0?% %?56?%;box-shadow:0 2px 14px 0 rgba(0,0,0,.08);border-radius:8px;padding:%?60?%}.login-wrapper .whiteBg .tips[data-v-751f8bfe]{display:flex;align-items:center;justify-content:center;height:%?50?%;margin:%?40?%;color:#999}.login-wrapper .whiteBg .tips .tips-btn[data-v-751f8bfe]{margin:0 %?31?% 0 %?48?%;color:#999;font-weight:700;font-size:%?32?%\r\n  /* Safari 与 Chrome */}.login-wrapper .whiteBg .tips .tips-btn .line[data-v-751f8bfe]{width:%?80?%;height:%?6?%;background:linear-gradient(135deg,var(--view-minorColor),var(--view-theme));border-radius:2px;margin:%?10?% auto 0 auto;animation:myfirst-data-v-751f8bfe .3s;-webkit-animation:myfirst-data-v-751f8bfe .3s}.login-wrapper .whiteBg .tips .tips-btn .none[data-v-751f8bfe]{width:%?80?%;background:#fff;height:%?6?%}@keyframes myfirst-data-v-751f8bfe{0%{width:%?0?%}100%{width:%?80?%}}@-webkit-keyframes myfirst-data-v-751f8bfe{0%{width:%?0?%}100%{width:%?80?%}}.login-wrapper .whiteBg .tips .tips-btn.on[data-v-751f8bfe]{font-size:%?36?%;color:var(--view-theme)}.login-wrapper .whiteBg .list[data-v-751f8bfe]{border-radius:%?16?%;overflow:hidden}.login-wrapper .whiteBg .list .forgetPwd[data-v-751f8bfe]{text-align:right;margin-top:%?10?%;color:#666;font-size:%?24?%}.login-wrapper .whiteBg .list .item[data-v-751f8bfe]{border-bottom:1px solid #f0f0f0;background:#fff}.login-wrapper .whiteBg .list .item .row-middle[data-v-751f8bfe]{position:relative;padding:%?16?% %?25?%}.login-wrapper .whiteBg .list .item .row-middle uni-input[data-v-751f8bfe]{flex:1;font-size:%?28?%;height:%?80?%}.login-wrapper .whiteBg .list .item .row-middle .code[data-v-751f8bfe]{position:absolute;right:%?30?%;top:50%;color:var(--view-theme);font-size:%?26?%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.login-wrapper .whiteBg .logon[data-v-751f8bfe]{display:flex;align-items:center;justify-content:center;width:100%;height:%?86?%;margin-top:%?48?%;background:linear-gradient(135deg,var(--view-minorColor),var(--view-theme));border-radius:%?120?%;color:#fff;font-size:%?30?%}.login-wrapper .protocol[data-v-751f8bfe]{margin-top:%?40?%;color:#999;font-size:%?24?%}.login-wrapper .trembling[data-v-751f8bfe]{-webkit-animation:shake-data-v-751f8bfe .6s;animation:shake-data-v-751f8bfe .6s}@keyframes shake-data-v-751f8bfe{0%,\r\n  100%{-webkit-transform:translateX(0)}10%,\r\n  30%,\r\n  50%,\r\n  70%,\r\n  90%{-webkit-transform:translateX(%?-5?%)}20%,\r\n  40%,\r\n  60%,\r\n  80%{-webkit-transform:translateX(%?5?%)}}@-o-keyframes shake-data-v-751f8bfe{\r\n  /* Opera */0%,\r\n  100%{-webkit-transform:translateX(0)}10%,\r\n  30%,\r\n  50%,\r\n  70%,\r\n  90%{-webkit-transform:translateX(%?-5?%)}20%,\r\n  40%,\r\n  60%,\r\n  80%{-webkit-transform:translateX(%?5?%)}}@-webkit-keyframes shake-data-v-751f8bfe{\r\n  /* Safari 和 Chrome */0%,\r\n  100%{-webkit-transform:translateX(0)}10%,\r\n  30%,\r\n  50%,\r\n  70%,\r\n  90%{-webkit-transform:translateX(%?-5?%)}20%,\r\n  40%,\r\n  60%,\r\n  80%{-webkit-transform:translateX(%?5?%)}}@-moz-keyframes shake-data-v-751f8bfe{\r\n  /* Firefox */0%,\r\n  100%{-moz-transform:translateX(0)}10%,\r\n  30%,\r\n  50%,\r\n  70%,\r\n  90%{-moz-transform:translateX(%?-5?%)}20%,\r\n  40%,\r\n  60%,\r\n  80%{-moz-transform:translateX(%?5?%)}}",""]),t.exports=e},"67df":function(t,e,n){"use strict";n.r(e);var i=n("3496"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},7242:function(t,e,n){"use strict";n.r(e);var i=n("9e76"),r=n("67df");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("36e1"),n("4bb9");var o,s=n("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"751f8bfe",null,!1,i["a"],o);e["default"]=c.exports},"991a":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"",""]),t.exports=e},"9e76":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"login-wrapper",style:t.colorStyle},[n("v-uni-view",{staticClass:"login-top"}),n("v-uni-view",{staticClass:"shading"},[t.logoUrl?n("v-uni-image",{attrs:{src:t.logoUrl}}):n("v-uni-image",{attrs:{src:"/static/images/logo2.png"}})],1),1===t.formItem?n("v-uni-view",{staticClass:"whiteBg"},[n("v-uni-view",{staticClass:"tips"},[n("v-uni-view",{staticClass:"tips-btn",class:1==t.current?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.current=1}}},[n("v-uni-view",[t._v("快速登录")]),n("v-uni-view",{class:1==t.current?"line":"none"})],1),n("v-uni-view",{staticClass:"tips-btn",class:0==t.current?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.current=0}}},[n("v-uni-view",[t._v("账号登录")]),n("v-uni-view",{class:0==t.current?"line":"none"})],1)],1),1!==t.current?n("v-uni-view",{staticClass:"list"},[n("v-uni-form",{on:{submit:function(e){e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"acea-row row-middle"},[n("v-uni-image",{staticStyle:{width:"24rpx",height:"34rpx"},attrs:{src:"/static/images/phone_1.png"}}),n("v-uni-input",{attrs:{type:"text",placeholder:"输入手机号码",maxlength:"11",required:!0},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1)],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"acea-row row-middle"},[n("v-uni-image",{staticStyle:{width:"28rpx",height:"32rpx"},attrs:{src:"/static/images/code_1.png"}}),n("v-uni-input",{attrs:{type:"password",placeholder:"填写登录密码",required:!0},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1),n("v-uni-navigator",{staticClass:"forgetPwd",attrs:{"hover-class":"none",url:"/pages/users/retrievePassword/index"}},[t._v("忘记密码?")])],1):t._e(),0!==t.current||t.appLoginStatus||t.appleLoginStatus?n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"acea-row row-middle"},[n("v-uni-image",{staticStyle:{width:"24rpx",height:"34rpx"},attrs:{src:"/static/images/phone_1.png"}}),n("v-uni-input",{attrs:{type:"text",placeholder:"输入手机号码",maxlength:"11"},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1)],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"acea-row row-middle"},[n("v-uni-image",{staticStyle:{width:"28rpx",height:"32rpx"},attrs:{src:"/static/images/code_2.png"}}),n("v-uni-input",{staticClass:"codeIput",attrs:{type:"text",placeholder:"填写验证码",maxlength:"6"},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}}),n("v-uni-button",{staticClass:"code",class:!0===t.disabled?"on":"",attrs:{disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.code.apply(void 0,arguments)}}},[t._v(t._s(t.text))])],1)],1),t.isShowCode?n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"acea-row row-middle"},[n("v-uni-image",{staticStyle:{width:"28rpx",height:"32rpx"},attrs:{src:"/static/images/code_2.png"}}),n("v-uni-input",{staticClass:"codeIput",attrs:{type:"text",placeholder:"填写验证码"},model:{value:t.codeVal,callback:function(e){t.codeVal=e},expression:"codeVal"}}),n("v-uni-view",{staticClass:"code",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.again.apply(void 0,arguments)}}},[n("img",{attrs:{src:t.codeUrl}})])],1)],1):t._e()],1):t._e(),0!==t.current?n("v-uni-view",{staticClass:"logon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loginMobile.apply(void 0,arguments)}}},[t._v("登录")]):t._e(),0===t.current?n("v-uni-view",{staticClass:"logon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("登录")]):t._e(),n("v-uni-view",{staticClass:"protocol"},[n("v-uni-checkbox-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.ChangeIsDefault.apply(void 0,arguments)}}},[n("v-uni-checkbox",{class:t.inAnimation?"trembling":"",attrs:{checked:!!t.protocol},on:{animationend:function(e){arguments[0]=e=t.$handleEvent(e),t.inAnimation=!1}}}),t._v("已阅读并同意"),n("v-uni-text",{staticClass:"main-color",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.privacy("user")}}},[t._v("《用户协议》")]),t._v("与"),n("v-uni-text",{staticClass:"main-color",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.privacy("privacy ")}}},[t._v("《隐私协议》")])],1)],1)],1):t._e(),n("v-uni-view",{staticClass:"bottom"})],1)},a=[]},a7eb:function(t,e,n){t.exports=n.p+"static/img/login.b6bd5b9c.png"},b4f7:function(t,e,n){n("fb6a"),n("f4b3"),n("a9e3"),n("d3b7"),n("ac1f"),n("25f0"),n("466d"),n("5319"),n("1276"),n("bf19"),function(e,n){t.exports=n()}(0,(function(){"use strict";var t="millisecond",e="second",n="minute",i="hour",r="day",a="week",o="month",s="quarter",c="year",u=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,l=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},p={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+f(i,2,"0")+":"+f(r,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),i=t.clone().add(n,o),r=e-i<0,a=t.clone().add(n+(r?-1:1),o);return Number(-(n+(e-i)/(r?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(u){return{M:o,y:c,w:a,d:r,D:"date",h:i,m:n,s:e,ms:t,Q:s}[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h="en",g={};g[h]=d;var v=function(t){return t instanceof $},m=function(t,e,n){var i;if(!t)return h;if("string"==typeof t)g[t]&&(i=t),e&&(g[t]=e,i=t);else{var r=t.name;g[r]=t,i=r}return!n&&i&&(h=i),i||!n&&h},b=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new $(n)},w=p;w.l=m,w.i=v,w.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var $=function(){function f(t){this.$L=this.$L||m(t.locale,null,!0),this.parse(t)}var p=f.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(u);if(i)return n?new Date(Date.UTC(i[1],i[2]-1,i[3]||1,i[4]||0,i[5]||0,i[6]||0,i[7]||0)):new Date(i[1],i[2]-1,i[3]||1,i[4]||0,i[5]||0,i[6]||0,i[7]||0)}return new Date(e)}(t),this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return w},p.isValid=function(){return!("Invalid Date"===this.$d.toString())},p.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return b(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<b(t)},p.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},p.year=function(t){return this.$g(t,"$y",c)},p.month=function(t){return this.$g(t,"$M",o)},p.day=function(t){return this.$g(t,"$W",r)},p.date=function(t){return this.$g(t,"$D","date")},p.hour=function(t){return this.$g(t,"$H",i)},p.minute=function(t){return this.$g(t,"$m",n)},p.second=function(t){return this.$g(t,"$s",e)},p.millisecond=function(e){return this.$g(e,"$ms",t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,s){var u=this,l=!!w.u(s)||s,f=w.p(t),p=function(t,e){var n=w.w(u.$u?Date.UTC(u.$y,e,t):new Date(u.$y,e,t),u);return l?n:n.endOf(r)},d=function(t,e){return w.w(u.toDate()[t].apply(u.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),u)},h=this.$W,g=this.$M,v=this.$D,m="set"+(this.$u?"UTC":"");switch(f){case c:return l?p(1,0):p(31,11);case o:return l?p(1,g):p(0,g+1);case a:var b=this.$locale().weekStart||0,$=(h<b?h+7:h)-b;return p(l?v-$:v+(6-$),g);case r:case"date":return d(m+"Hours",0);case i:return d(m+"Minutes",1);case n:return d(m+"Seconds",2);case e:return d(m+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(a,s){var u,l=w.p(a),f="set"+(this.$u?"UTC":""),p=(u={},u[r]=f+"Date",u.date=f+"Date",u[o]=f+"Month",u[c]=f+"FullYear",u[i]=f+"Hours",u[n]=f+"Minutes",u[e]=f+"Seconds",u[t]=f+"Milliseconds",u)[l],d=l===r?this.$D+(s-this.$W):s;if(l===o||l===c){var h=this.clone().set("date",1);h.$d[p](d),h.init(),this.$d=h.set("date",Math.min(this.$D,h.daysInMonth())).toDate()}else p&&this.$d[p](d);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[w.p(t)]()},p.add=function(t,s){var u,l=this;t=Number(t);var f=w.p(s),p=function(e){var n=b(l);return w.w(n.date(n.date()+Math.round(e*t)),l)};if(f===o)return this.set(o,this.$M+t);if(f===c)return this.set(c,this.$y+t);if(f===r)return p(1);if(f===a)return p(7);var d=(u={},u[n]=6e4,u[i]=36e5,u[e]=1e3,u)[f]||1,h=this.$d.getTime()+t*d;return w.w(h,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),r=this.$locale(),a=this.$H,o=this.$m,s=this.$M,c=r.weekdays,u=r.months,f=function(t,i,r,a){return t&&(t[i]||t(e,n))||r[i].substr(0,a)},p=function(t){return w.s(a%12||12,t,"0")},d=r.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:w.s(s+1,2,"0"),MMM:f(r.monthsShort,s,u,3),MMMM:u[s]||u(this,n),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:f(r.weekdaysMin,this.$W,c,2),ddd:f(r.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(a),HH:w.s(a,2,"0"),h:p(1),hh:p(2),a:d(a,o,!0),A:d(a,o,!1),m:String(o),mm:w.s(o,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:i};return n.replace(l,(function(t,e){return e||h[t]||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(t,u,l){var f,p=w.p(u),d=b(t),h=6e4*(d.utcOffset()-this.utcOffset()),g=this-d,v=w.m(this,d);return v=(f={},f[c]=v/12,f[o]=v,f[s]=v/3,f[a]=(g-h)/6048e5,f[r]=(g-h)/864e5,f[i]=g/36e5,f[n]=g/6e4,f[e]=g/1e3,f)[p]||g,l?v:w.a(v)},p.daysInMonth=function(){return this.endOf(o).$D},p.$locale=function(){return g[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=m(t,e,!0);return i&&(n.$L=i),n},p.clone=function(){return w.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},f}();return b.prototype=$.prototype,b.extend=function(t,e){return t(e,$,b),b},b.locale=m,b.isDayjs=v,b.unix=function(t){return b(1e3*t)},b.en=g[h],b.Ls=g,b}))},bf19:function(t,e,n){"use strict";var i=n("23e7");i({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},d0ca:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{colorStyle:"",navigation:0,colorNum:0}},created:function(){var t=this;this.colorStyle=uni.getStorageSync("viewColor"),uni.$on("ok",(function(e){t.colorStyle=e})),this.navigation=uni.getStorageSync("navigation"),uni.$on("navOk",(function(e){t.navigation=e}))},methods:{colorData:function(){var t=this;this.colorNum=uni.getStorageSync("statusColor"),uni.$on("colorOk",(function(e){t.colorNum=e}))}}};e.default=i},f4b3:function(t,e,n){"use strict";var i=n("23e7"),r=n("d039"),a=n("7b0b"),o=n("c04e"),s=r((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}));i({target:"Date",proto:!0,forced:s},{toJSON:function(t){var e=a(this),n=o(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},f902:function(t,e,n){var i=n("991a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f065").default;r("d9887fda",i,!0,{sourceMap:!1,shadowMode:!1})},fc89:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{disabled:!1,text:"获取验证码"}},methods:{sendCode:function(){var t=this;if(!this.disabled){this.disabled=!0;var e=60;this.text="剩余 "+e+"s";var n=setInterval((function(){e-=1,e<0&&clearInterval(n),t.text="剩余 "+e+"s",t.text<"剩余 0s"&&(t.disabled=!1,t.text="重新获取")}),1e3)}}}};e.default=i}}]);