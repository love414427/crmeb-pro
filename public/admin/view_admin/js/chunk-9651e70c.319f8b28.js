(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9651e70c"],{"69b3":function(e,t,c){},"7de5":function(e,t,c){"use strict";c.r(t);var s=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",[c("div",{staticClass:" acea-row row-center clear_tit"},[c("Button",{staticClass:"mr20",attrs:{type:"primary"},on:{click:e.clearCache}},[e._v("清除缓存")]),c("Button",{attrs:{type:"primary"},on:{click:e.clearlog}},[e._v("清除日志")])],1)])},a=[],r={name:"clear",data:function(){return{delfromData:{}}},methods:{clearCache:function(){var e=this,t={title:"清除缓存",num:0,url:"system/refresh_cache/cache",method:"get",ids:""};this.$modalSure(t).then((function(t){e.$Message.success(t.msg)})).catch((function(t){e.$Message.error(t.msg)}))},clearlog:function(){var e=this,t={title:"清除日志",num:0,url:"system/refresh_cache/log",method:"get",ids:""};this.$modalSure(t).then((function(t){e.$Message.success(t.msg)})).catch((function(t){e.$Message.error(t.msg)}))}}},n=r,i=(c("bf02"),c("2877")),o=Object(i["a"])(n,s,a,!1,null,"6e4700fa",null);t["default"]=o.exports},bf02:function(e,t,c){"use strict";var s=c("69b3"),a=c.n(s);a.a}}]);