(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/skeleton/index"],{"08dc":function(t,e,n){},4626:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"skeleton",props:{bgcolor:{type:String,value:"#FFF"},selector:{type:String,value:"skeleton"},loading:{type:String,value:"spin"},show:{type:Boolean,value:!1},isNodes:{type:Number,value:!1}},data:function(){return{loadingAni:["spin","chiaroscuro"],systemInfo:{},skeletonRectLists:[],skeletonCircleLists:[]}},watch:{isNodes:function(t){this.readyAction()}},mounted:function(){this.attachedAction()},methods:{attachedAction:function(){var e=t.getSystemInfoSync();this.systemInfo={width:e.windowWidth,height:e.windowHeight},this.loading=this.loadingAni.includes(this.loading)?this.loading:"spin"},readyAction:function(){var e=this;t.createSelectorQuery().selectAll(".".concat(this.selector)).boundingClientRect().exec((function(t){t[0].length>0&&(e.systemInfo.height=t[0][0].height+t[0][0].top)})),this.rectHandle(),this.radiusHandle()},rectHandle:function(){var e=this;t.createSelectorQuery().selectAll(".".concat(this.selector,"-rect")).boundingClientRect().exec((function(t){var n=t[0];n.forEach((function(t,e){t.rect="rect"+e})),e.skeletonRectLists=n}))},radiusHandle:function(){var e=this;t.createSelectorQuery().selectAll(".".concat(this.selector,"-radius")).boundingClientRect().exec((function(t){var n=t[0];n.forEach((function(t,e){t.circle="circle"+e})),e.skeletonCircleLists=n}))}}};e.default=n}).call(this,n("543d")["default"])},"9f10":function(t,e,n){"use strict";var i=n("08dc"),c=n.n(i);c.a},d313:function(t,e,n){"use strict";n.r(e);var i=n("fc43"),c=n("fa60");for(var o in c)"default"!==o&&function(t){n.d(e,t,(function(){return c[t]}))}(o);n("9f10");var r,s=n("f0c5"),a=Object(s["a"])(c["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=a.exports},fa60:function(t,e,n){"use strict";n.r(e);var i=n("4626"),c=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=c.a},fc43:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var c=function(){var t=this,e=t.$createElement;t._self._c},o=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/skeleton/index-create-component',
    {
        'components/skeleton/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d313"))
        })
    },
    [['components/skeleton/index-create-component']]
]);
