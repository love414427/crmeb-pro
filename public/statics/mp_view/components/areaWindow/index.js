(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/areaWindow/index"],{"2d9e":function(e,t,r){"use strict";var s=r("c0a0"),n=r.n(s);n.a},"3ae6":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r("4e1f");function n(e){return c(e)||o(e)||d(e)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function o(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function c(e){if(Array.isArray(e))return l(e)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,s=new Array(t);r<t;r++)s[r]=e[r];return s}var a={},u={props:{display:{type:Boolean,default:!0},address:Array},data:function(){return{active:0,addressList:[],selectedArr:[],selectedIndex:-1,is_loading:!1,old:{scrollTop:0},scrollTop:0}},computed:{activeId:function(){return-1==this.selectedIndex?0:this.selectedArr[this.selectedIndex].id},showMore:function(){return!this.selectedArr.length||this.selectedArr[this.selectedArr.length-1].hasOwnProperty("children")}},watch:{address:function(e){this.selectedArr=e?n(e):[]},display:function(e){e?this.loadAddress(0):(this.addressList=[],this.selectedArr=this.address?n(this.address):[],this.selectedIndex=-1,this.is_loading=!1)}},mounted:function(){this.loadAddress(0)},methods:{change:function(e,t){this.selectedIndex!=t&&(-1===e&&(e=this.selectedArr.length?this.selectedArr[this.selectedArr.length-1].id:0),this.selectedIndex=t,this.loadAddress(e))},loadAddress:function(e){var t=this;a[e]?this.addressList=a[e]:(this.is_loading=!0,(0,s.getCityData)(e).then((function(r){t.is_loading=!1,a[e]=r.data,t.addressList=r.data})),this.goTop())},selected:function(e){this.is_loading||(this.selectedIndex>-1?(this.selectedArr.splice(this.selectedIndex+1,999),this.selectedArr[this.selectedIndex]=e,this.selectedIndex=-1):e.pid?this.selectedArr.push(e):this.selectedArr=[e],e.hasOwnProperty("children")?this.loadAddress(e.id):(this.$emit("submit",n(this.selectedArr)),this.$emit("changeClose")),this.goTop())},close:function(){this.$emit("changeClose")},scroll:function(e){this.old.scrollTop=e.detail.scrollTop},goTop:function(e){var t=this;this.scrollTop=this.old.scrollTop,this.$nextTick((function(){t.scrollTop=0}))}}};t.default=u},"9a03":function(e,t,r){"use strict";r.r(t);var s=r("e6d0"),n=r("c933");for(var i in n)"default"!==i&&function(e){r.d(t,e,(function(){return n[e]}))}(i);r("2d9e");var d,o=r("f0c5"),c=Object(o["a"])(n["default"],s["b"],s["c"],!1,null,"29ce2354",null,!1,s["a"],d);t["default"]=c.exports},c0a0:function(e,t,r){},c933:function(e,t,r){"use strict";r.r(t);var s=r("3ae6"),n=r.n(s);for(var i in s)"default"!==i&&function(e){r.d(t,e,(function(){return s[e]}))}(i);t["default"]=n.a},e6d0:function(e,t,r){"use strict";var s;r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return s}));var n=function(){var e=this,t=e.$createElement;e._self._c},i=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/areaWindow/index-create-component',
    {
        'components/areaWindow/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9a03"))
        })
    },
    [['components/areaWindow/index-create-component']]
]);
