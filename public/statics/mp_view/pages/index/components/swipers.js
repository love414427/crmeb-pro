(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/swipers"],{"03b5":function(t,n,i){"use strict";i.r(n);var a=i("3442"),e=i("1557");for(var o in e)"default"!==o&&function(t){i.d(n,t,(function(){return e[t]}))}(o);i("f539");var r,f=i("f0c5"),u=Object(f["a"])(e["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);n["default"]=u.exports},1557:function(t,n,i){"use strict";i.r(n);var a=i("428a"),e=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(n,t,(function(){return a[t]}))}(o);n["default"]=e.a},3442:function(t,n,i){"use strict";var a;i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return a}));var e=function(){var t=this,n=t.$createElement;t._self._c},o=[]},"428a":function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"swiper",props:{dataConfig:{type:Object,default:function(){}},isSortType:{type:String|Number,default:0}},data:function(){return{indicatorDots:!1,circular:!0,autoplay:!0,interval:2500,duration:500,swiperCur:0,imgUrls:[],docConfig:this.dataConfig.docConfig.type,imgConfig:this.dataConfig.imgConfig.type,itemEdge:this.dataConfig.itemEdge.val,lrConfig:this.dataConfig.lrConfig.val,mbConfig:this.dataConfig.mbConfig.val,tabConfig:this.dataConfig.tabConfig.tabVal,imageH:0}},watch:{imageH:function(t,n){this.imageH=t}},created:function(){this.imgUrls=this.dataConfig.swiperConfig.list},mounted:function(){var n=this;t.getImageInfo({src:n.setDomain(n.imgUrls[0].img),success:function(t){n.$set(n,"imageH",t.height)}})},methods:{swiperChange:function(t){this.swiperCur=t.detail.current},setDomain:function(t){return t=t?t.toString():"",t.indexOf("https://")>-1?t:t.replace("http://","https://")}}};n.default=i}).call(this,i("543d")["default"])},"794a":function(t,n,i){},f539:function(t,n,i){"use strict";var a=i("794a"),e=i.n(a);e.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/swipers-create-component',
    {
        'pages/index/components/swipers-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("03b5"))
        })
    },
    [['pages/index/components/swipers-create-component']]
]);
