(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/richText"],{"29a9":function(n,t,e){"use strict";e.r(t);var o=e("c459"),r=e("c5bb");for(var a in r)"default"!==a&&function(n){e.d(t,n,(function(){return r[n]}))}(a);e("811a");var i,c=e("f0c5"),u=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);t["default"]=u.exports},"41f1":function(n,t,e){},"811a":function(n,t,e){"use strict";var o=e("41f1"),r=e.n(o);r.a},c459:function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return o}));var o={jyfParser:function(){return Promise.all([e.e("common/vendor"),e.e("components/jyf-parser/jyf-parser")]).then(e.bind(null,"1732"))}},r=function(){var n=this,t=n.$createElement;n._self._c},a=[]},c5bb:function(n,t,e){"use strict";e.r(t);var o=e("d77d"),r=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,(function(){return o[n]}))}(a);t["default"]=r.a},d77d:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){Promise.all([e.e("common/vendor"),e.e("components/mp-html/mp-html")]).then(function(){return resolve(e("f364"))}.bind(null,e)).catch(e.oe)},r={name:"richText",props:{dataConfig:{type:Object,default:function(){}},isSortType:{type:String|Number,default:0}},components:{"jyf-parser":o},data:function(){return{tagStyle:{img:"width:100%;"},bgColor:this.dataConfig.bgColor.color[0].item,lrConfig:this.dataConfig.lrConfig.val,description:this.dataConfig.richText.val,udConfig:this.dataConfig.udConfig.val}},created:function(){},methods:{}};t.default=r}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/richText-create-component',
    {
        'pages/index/components/richText-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("29a9"))
        })
    },
    [['pages/index/components/richText-create-component']]
]);