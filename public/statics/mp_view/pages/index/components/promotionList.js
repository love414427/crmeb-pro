(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/promotionList"],{"2e89":function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i={name:"promotionList",props:{dataConfig:{type:Object,default:function(){}},tempArr:{type:Array,default:[]},iSshowH:{type:Boolean,default:!1},isSortType:{type:String|Number,default:0}},data:function(){return{ProductNavindex:0,explosiveMoney:this.dataConfig.tabConfig.list,numConfig:this.dataConfig.numConfig.val,mbConfig:this.dataConfig.mbConfig.val,themeColor:this.dataConfig.themeColor.color[0].item,titleShow:this.dataConfig.titleShow.val,opriceShow:this.dataConfig.opriceShow.val,priceShow:this.dataConfig.priceShow.val,couponShow:this.dataConfig.couponShow.val,titleConfig:this.dataConfig.titleConfig.type,fontColor:this.dataConfig.fontColor.color?this.dataConfig.fontColor.color[0].item:"",labelColor:this.dataConfig.labelColor.color?this.dataConfig.labelColor.color[0].item:""}},created:function(){},methods:{ProductNavTab:function(t,o){this.ProductNavindex=o,this.$emit("changeTab",t)},goDetail:function(t){this.$emit("detail",t)}}};o.default=i},3490:function(t,o,n){"use strict";var i=n("7ecf"),e=n.n(i);e.a},"5f67":function(t,o,n){"use strict";var i;n.d(o,"b",(function(){return e})),n.d(o,"c",(function(){return a})),n.d(o,"a",(function(){return i}));var e=function(){var t=this,o=t.$createElement;t._self._c},a=[]},"7ecf":function(t,o,n){},b008:function(t,o,n){"use strict";n.r(o);var i=n("5f67"),e=n("f277");for(var a in e)"default"!==a&&function(t){n.d(o,t,(function(){return e[t]}))}(a);n("3490");var r,f=n("f0c5"),l=Object(f["a"])(e["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);o["default"]=l.exports},f277:function(t,o,n){"use strict";n.r(o);var i=n("2e89"),e=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(o,t,(function(){return i[t]}))}(a);o["default"]=e.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/promotionList-create-component',
    {
        'pages/index/components/promotionList-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b008"))
        })
    },
    [['pages/index/components/promotionList-create-component']]
]);
