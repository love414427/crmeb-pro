(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-87590540"],{"13ee":function(t,e,a){"use strict";var r=a("19e1"),n=a.n(r);n.a},"19e1":function(t,e,a){},"366b":function(t,e,a){"use strict";var r=a("d5a6"),n=a.n(r);n.a},c4c8:function(t,e,a){"use strict";a.d(e,"h",(function(){return n})),a.d(e,"g",(function(){return o})),a.d(e,"f",(function(){return i})),a.d(e,"a",(function(){return s})),a.d(e,"e",(function(){return l})),a.d(e,"k",(function(){return c})),a.d(e,"c",(function(){return u})),a.d(e,"i",(function(){return d})),a.d(e,"l",(function(){return f})),a.d(e,"m",(function(){return b})),a.d(e,"d",(function(){return p})),a.d(e,"j",(function(){return m})),a.d(e,"n",(function(){return h}));var r=a("b6bd");function n(t){return Object(r["a"])({url:"product/product",method:"get",params:t})}function o(t){return Object(r["a"])({url:"product/product/".concat(t),method:"get"})}function i(t){return Object(r["a"])({url:"product/type_header",method:"get",params:t})}function s(){return Object(r["a"])({url:"product/category",method:"get"})}function l(t){return Object(r["a"])({url:"product/product/".concat(t,"/edit"),method:"get"})}function c(t,e){return Object(r["a"])({url:"product/product/".concat(t),method:"put",data:e})}function u(){return Object(r["a"])({url:"product/getUserLabel",method:"get"})}function d(t){return Object(r["a"])({url:"product/reply",method:"get",params:t})}function f(t,e){return Object(r["a"])({url:"product/reply/set_reply/".concat(e),method:"PUT",data:t})}function b(t,e){return Object(r["a"])({url:"product/product/set_show/".concat(t,"/").concat(e),method:"PUT"})}function p(t){return Object(r["a"])({url:"product/product/attrs/".concat(t),method:"get"})}function m(t,e){return Object(r["a"])({url:"product/product/saveStocks/".concat(e),method:"PUT",data:t})}function h(t){return Object(r["a"])({url:"/product/product/synchStocks",method:"post",data:t})}},d5a6:function(t,e,a){},edf7:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("PageHeader",{staticClass:"product_tabs",attrs:{"hidden-breadcrumb":""}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("router-link",{attrs:{to:{path:"/store/product/index"}}},[a("Button",{staticClass:"mr20",attrs:{icon:"ios-arrow-back",size:"small"}},[t._v("返回")])],1),a("span",{staticClass:"mr20"},[t._v("编辑商品")])],1)])],1),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Form",{ref:"formValidate",staticClass:"formValidate mt20",attrs:{model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[a("Row",{attrs:{gutter:24,type:"flex"}},[a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"商品名称：",prop:"store_name"}},[a("Input",{directives:[{name:"width",rawName:"v-width",value:"50%",expression:"'50%'"}],attrs:{placeholder:"请输入商品名称",disabled:""},model:{value:t.formValidate.store_name,callback:function(e){t.$set(t.formValidate,"store_name",e)},expression:"formValidate.store_name"}})],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"商品关键字：",prop:""}},[a("Input",{directives:[{name:"width",rawName:"v-width",value:"50%",expression:"'50%'"}],attrs:{placeholder:"请输入商品关键字",disabled:""},model:{value:t.formValidate.keyword,callback:function(e){t.$set(t.formValidate,"keyword",e)},expression:"formValidate.keyword"}})],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"单位：",prop:"unit_name"}},[a("Input",{directives:[{name:"width",rawName:"v-width",value:"50%",expression:"'50%'"}],attrs:{placeholder:"请输入单位",disabled:""},model:{value:t.formValidate.unit_name,callback:function(e){t.$set(t.formValidate,"unit_name",e)},expression:"formValidate.unit_name"}})],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"商品简介：",prop:""}},[a("Input",{directives:[{name:"width",rawName:"v-width",value:"50%",expression:"'50%'"}],attrs:{type:"textarea",rows:3,placeholder:"请输入商品简介",disabled:""},model:{value:t.formValidate.store_info,callback:function(e){t.$set(t.formValidate,"store_info",e)},expression:"formValidate.store_info"}})],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"关联用户标签：",prop:"label_id"}},[a("div",{staticClass:"labelInput acea-row row-between-wrapper",on:{click:t.openLabel}},[a("div",{staticStyle:{width:"95%"}},t._l(t.dataLabel,(function(e,r){return t.dataLabel.length?a("Tag",{attrs:{closable:""},on:{"on-close":function(a){return t.closeLabel(e)}}},[t._v(t._s(e.label_name))]):a("span",{staticClass:"span"},[t._v("选择用户关联标签")])})),1),a("div",{staticClass:"iconfont iconxiayi"})])])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"是否上架：",prop:"is_show"}},[a("i-switch",{attrs:{value:t.formValidate.is_show,"true-value":1,"false-value":0,size:"large"},model:{value:t.formValidate.is_show,callback:function(e){t.$set(t.formValidate,"is_show",e)},expression:"formValidate.is_show"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("上架")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("下架")])])],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"商品属性："}},[a("Table",{attrs:{data:t.date,columns:t.columns,border:""},scopedSlots:t._u([{key:"pic",fn:function(t){var e=t.row;t.index;return[a("img",{attrs:{src:e.pic}})]}},{key:"stock",fn:function(e){var r=e.row,n=e.index;return[a("InputNumber",{attrs:{min:0,disabled:t.openErp},on:{"on-change":function(e){return t.stock(r,n)}},model:{value:r.stock,callback:function(e){t.$set(r,"stock",e)},expression:"row.stock"}})]}}])})],1)],1)],1),a("FormItem",[a("Button",{staticClass:"submission",attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("formValidate")}}},[t._v("保存")])],1)],1)],1),a("Modal",{attrs:{scrollable:"",title:"请选择用户标签",closable:!1,width:"320","footer-hide":!0,"mask-closable":!1},model:{value:t.labelShow,callback:function(e){t.labelShow=e},expression:"labelShow"}},[a("userLabel",{ref:"userLabel",on:{activeData:t.activeData,close:t.labelClose}})],1)],1)},n=[],o=a("2f62"),i=a("c4c8"),s=a("b6bd");function l(){return Object(s["a"])({url:"config",method:"get"})}var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"label-wrapper"},[a("div",{staticClass:"list-box"},[t._l(t.labelList,(function(e,r){return t.isUser?a("div",{key:r,staticClass:"label-box"},[e.children?a("div",{staticClass:"title"},[t._v(t._s(e.label_name))]):t._e(),e.children&&e.children.length?a("div",{staticClass:"list"},t._l(e.children,(function(e,r){return a("div",{key:r,staticClass:"label-item",class:{on:e.disabled},on:{click:function(a){return t.selectLabel(e)}}},[t._v(t._s(e.label_name))])})),0):t._e()]):t._e()})),t.isUser?t._e():a("div",[t._v("暂无标签")])],2),a("div",{staticClass:"footer"},[a("Button",{staticClass:"btns",attrs:{type:"primary"},on:{click:t.subBtn}},[t._v("确定")]),a("Button",{staticClass:"btns",attrs:{type:"primary",ghost:""},on:{click:t.cancel}},[t._v("取消")])],1)])},u=[],d={name:"userLabel",props:{},data:function(){return{labelList:[],dataLabel:[],isUser:!1}},mounted:function(){},methods:{inArray:function(t,e){for(var a in e)if(e[a].id==t)return!0;return!1},userLabel:function(t){var e=this;this.dataLabel=t,Object(i["c"])().then((function(t){t.data.map((function(t){t.children&&(e.isUser=!0,t.children.map((function(t){e.inArray(t.id,e.dataLabel)?t.disabled=!0:t.disabled=!1})))})),e.labelList=t.data})).catch((function(t){e.$Message.error(t.msg)}))},selectLabel:function(t){if(t.disabled){var e=this.dataLabel.indexOf(this.dataLabel.filter((function(e){return e.id==t.id}))[0]);this.dataLabel.splice(e,1),t.disabled=!1}else this.dataLabel.push({label_name:t.label_name,id:t.id}),t.disabled=!0},subBtn:function(){this.$emit("activeData",JSON.parse(JSON.stringify(this.dataLabel)))},cancel:function(){this.$emit("close")}}},f=d,b=(a("366b"),a("2877")),p=Object(b["a"])(f,c,u,!1,null,"3d6fa19a",null),m=p.exports;function h(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function v(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?h(a,!0).forEach((function(e){_(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):h(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function _(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var w={name:"productEdit",components:{userLabel:m},data:function(){return{openErp:!1,dataLabel:[],labelShow:!1,columns:[],date:[],openSubimit:!1,formValidate:{is_show:"",store_name:"",keyword:"",unit_name:"",store_info:"",label_id:[]}}},computed:v({},Object(o["e"])("store/layout",["isMobile"]),{labelWidth:function(){return this.isMobile?void 0:120},labelPosition:function(){return this.isMobile?"top":"right"},labelBottom:function(){return this.isMobile?void 0:15}}),mounted:function(){this.getList(),this.getErpConfig()},methods:{getErpConfig:function(){var t=this;l().then((function(e){t.openErp=e.data.open_erp})).catch((function(e){t.$Message.error(e.msg)}))},closeLabel:function(t){var e=this.dataLabel.indexOf(this.dataLabel.filter((function(e){return e.id==t.id}))[0]);this.dataLabel.splice(e,1)},activeData:function(t){this.labelShow=!1,this.dataLabel=t},openLabel:function(t){this.labelShow=!0,this.$refs.userLabel.userLabel(JSON.parse(JSON.stringify(this.dataLabel)))},labelClose:function(){this.labelShow=!1},getList:function(){var t=this;Object(i["e"])(this.$route.params.id).then((function(e){t.columns=e.data.attrs.header,t.date=e.data.attrs.attrs,t.formValidate=e.data.storeInfo;e.data.storeInfo.label_id;t.dataLabel=e.data.storeInfo.label_id}))},stock:function(t,e){this.date[e].stock=t.stock},handleSubmit:function(t){var e=this;this.$refs[t].validate((function(t){if(t){var a=[];e.dataLabel.forEach((function(t){a.push(t.id)})),e.formValidate.label_id=a,Object(i["k"])(e.$route.params.id,{attrs:e.date,label_id:e.formValidate.label_id,is_show:e.formValidate.is_show}).then((function(t){e.$Message.success(t.msg),e.$router.push({path:"/store/product/index"})})).catch((function(t){e.$Message.error(t.msg)}))}}))}}},g=w,O=(a("13ee"),Object(b["a"])(g,r,n,!1,null,"282aac40",null));e["default"]=O.exports}}]);