(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/goodList/index"],{"4e2c":function(t,n,e){},6904:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=e("26cb"),a=e("4913"),o={computed:(0,u.mapGetters)(["uid"]),props:{status:{type:Number,default:0},bastList:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{goDetail:function(n){var e=this;(0,a.goPage)().then((function(u){(0,a.goShopDetail)(n,e.uid).then((function(e){t.navigateTo({url:"/pages/goods_details/index?id=".concat(n.id)})}))}))}}};n.default=o}).call(this,e("543d")["default"])},"89c9":function(t,n,e){"use strict";e.r(n);var u=e("6904"),a=e.n(u);for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);n["default"]=a.a},b2e4:function(t,n,e){"use strict";var u=e("4e2c"),a=e.n(u);a.a},dd46:function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return u}));var a=function(){var t=this,n=t.$createElement;t._self._c},o=[]},e15d:function(t,n,e){"use strict";e.r(n);var u=e("dd46"),a=e("89c9");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("b2e4");var c,i=e("f0c5"),r=Object(i["a"])(a["default"],u["b"],u["c"],!1,null,"459fe378",null,!1,u["a"],c);n["default"]=r.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/goodList/index-create-component',
    {
        'components/goodList/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e15d"))
        })
    },
    [['components/goodList/index-create-component']]
]);
