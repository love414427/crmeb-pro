(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-guide-index"],{"0a4b":function(t,a,e){"use strict";var n=e("0aca"),i=e.n(n);i.a},"0aca":function(t,a,e){var n=e("f376");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f065").default;i("8b34bac8",n,!0,{sourceMap:!1,shadowMode:!1})},"0f4a":function(t,a,e){"use strict";e.r(a);var n=e("7ab9e"),i=e("7546");for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);e("ce65");var u,d=e("f0c5"),o=Object(d["a"])(i["default"],n["b"],n["c"],!1,null,"399d9af2",null,!1,n["a"],u);a["default"]=o.exports},"1eca":function(t,a,e){"use strict";e.r(a);var n=e("da5cb"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=i.a},7546:function(t,a,e){"use strict";e.r(a);var n=e("e211"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=i.a},"7ab9e":function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"content"},["pic"==t.advData.type&&t.advData.value.length?e("v-uni-swiper",{staticClass:"swiper",attrs:{autoplay:t.autoplay,duration:t.duration}},t._l(t.advData.value,(function(a,n){return e("v-uni-swiper-item",{key:n,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jump(a.link)}}},[e("v-uni-view",{staticClass:"swiper-item"},[e("v-uni-view",{staticClass:"swiper-item-img"},[e("v-uni-image",{attrs:{src:a.img,mode:"aspectFill"}})],1)],1)],1)})),1):"video"==t.advData.type&&t.advData.video_link?e("v-uni-view",{staticClass:"video-box"},[e("v-uni-video",{staticClass:"vid",attrs:{src:t.advData.video_link,autoplay:!0,loop:!0,muted:!0,controls:!1}})],1):t._e(),e("v-uni-view",{staticClass:"jump-over",style:{top:t.navH+"rpx"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.launchFlag()}}},[t._v("跳过"),1==t.closeType?e("v-uni-text",[t._v(t._s(t.time))]):t._e()],1)],1)},r=[]},"971e":function(t,a,e){"use strict";e.r(a);var n=e("ea83"),i=e("1eca");for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);e("0a4b");var u,d=e("f0c5"),o=Object(d["a"])(i["default"],n["b"],n["c"],!1,null,"064a5162",null,!1,n["a"],u);a["default"]=o.exports},c2dc:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* crmeb颜色变量 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-399d9af2],\r\n.content[data-v-399d9af2]{width:100%;height:100%;background-size:100% auto;padding:0}.swiper[data-v-399d9af2]{width:100%;height:100vh;background:#fff}.swiper-item[data-v-399d9af2]{width:100%;height:100%;text-align:center;position:relative;display:flex;\r\n  /* justify-content: center; */align-items:flex-end;flex-direction:column-reverse}.swiper-item-img[data-v-399d9af2]{width:100vw;height:100vh;margin:0 auto}.swiper-item-img uni-image[data-v-399d9af2]{width:100%;height:100%}.jump-over[data-v-399d9af2]{position:absolute;height:%?45?%;line-height:%?45?%;padding:0 %?15?%;border-radius:%?30?%;font-size:%?24?%;color:#b09e9a;border:1px solid #b09e9a;z-index:999;right:%?30?%}.video-box[data-v-399d9af2]{width:100vw;height:100vh}.video-box .vid[data-v-399d9af2]{width:100%;height:100%}body.?%PAGE?%[data-v-399d9af2]{background-size:100% auto}',""]),t.exports=a},ce65:function(t,a,e){"use strict";var n=e("d884"),i=e.n(n);i.a},d884:function(t,a,e){var n=e("c2dc");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f065").default;i("221214da",n,!0,{sourceMap:!1,shadowMode:!1})},da5cb:function(t,a,e){"use strict";var n=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("0f4a")),r=(n(e("07c4")),e("4e1f")),u={components:{guide:i.default},data:function(){return{guidePages:!1,advData:[]}},onShow:function(){this.$wechat.isWeixin()&&this.$wechat.wechat(),this.loadExecution()},methods:{loadExecution:function(){var t=this,a=uni.getStorageSync("guideDate")||"",e=(new Date).toLocaleDateString();a!==e?(0,r.getOpenAdv)().then((function(a){0==a.data.status||0==a.data.value.length?uni.switchTab({url:"/pages/index/index"}):a.data.status&&(a.data.value.length||a.data.video_link)&&(t.advData=a.data,uni.setStorageSync("guideDate",(new Date).toLocaleDateString()),t.guidePages=!0)})).catch((function(t){uni.switchTab({url:"/pages/index/index"})})):uni.switchTab({url:"/pages/index/index"})}},onHide:function(){this.guidePages=!1}};a.default=u},e211:function(t,a,e){"use strict";e("c975"),e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;getApp();var n={data:function(){return{autoplay:!1,duration:500,jumpover:"跳过",experience:"立即体验",time:this.advData.time,timecount:void 0,navH:0}},props:{advData:{type:Object,default:function(){}},closeType:{type:Number,default:1}},mounted:function(){this.timer(),this.navH=80},methods:{timer:function(){var t=this,a=this.advData.time||5;this.timecount=setInterval((function(){a--,t.time=a,a<=0&&(clearInterval(t.timecount),t.launchFlag())}),1e3)},launchFlag:function(){clearInterval(this.timecount),uni.switchTab({url:"/pages/index/index"})},jump:function(t){t&&(clearInterval(this.timecount),-1!=t.indexOf("http")?uni.navigateTo({url:"/pages/annex/web_view/index?url=".concat(t)}):-1==["/pages/goods_cate/goods_cate","/pages/order_addcart/order_addcart","/pages/user/index","/pages/index/index"].indexOf(t)?uni.navigateTo({url:t}):uni.reLaunch({url:t}))}}};a.default=n},ea83:function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"main"},[t.guidePages?e("guide",{attrs:{advData:t.advData}}):t._e()],1)},r=[]},f376:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,"uni-page-body[data-v-064a5162],\n.main[data-v-064a5162]{width:100%;height:100%}",""]),t.exports=a}}]);