(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b5b1d58e"],{1426:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-manager"},[t.$route.query.id?r("div",{staticClass:"i-layout-page-header"},[r("PageHeader",{staticClass:"product_tabs",attrs:{"hidden-breadcrumb":""}},[r("div",{attrs:{slot:"title"},slot:"title"},[r("router-link",{attrs:{to:{path:"/store/product/index"}}},[r("Button",{staticClass:"mr20",attrs:{icon:"ios-arrow-back",size:"small"}},[t._v("返回")])],1),r("span",{staticClass:"mr20"},[t._v("评论记录")])],1)])],1):t._e(),r("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[r("Form",{ref:"formValidate",attrs:{model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[r("Row",{attrs:{type:"flex",gutter:24}},[r("Col",t._b({},"Col",t.grid,!1),[r("FormItem",{attrs:{label:"评价状态："}},[r("Select",{attrs:{placeholder:"请选择",clearable:""},on:{"on-change":t.userSearchs},model:{value:t.formValidate.is_reply,callback:function(e){t.$set(t.formValidate,"is_reply",e)},expression:"formValidate.is_reply"}},[r("Option",{attrs:{value:"1"}},[t._v("已回复")]),r("Option",{attrs:{value:"0"}},[t._v("待回复")])],1)],1)],1),t.$route.params.id?t._e():r("Col",t._b({},"Col",t.grid,!1),[r("FormItem",{attrs:{label:"商品信息：","label-for":"store_name"}},[r("Input",{attrs:{size:"default","enter-button":"",placeholder:"请输入商品ID或者商品信息",clearable:""},model:{value:t.formValidate.store_name,callback:function(e){t.$set(t.formValidate,"store_name",e)},expression:"formValidate.store_name"}})],1)],1),r("Col",t._b({},"Col",t.grid,!1),[r("FormItem",{attrs:{label:"用户名称：","label-for":"account"}},[r("Input",{attrs:{size:"default","enter-button":"",placeholder:"请输入",clearable:""},model:{value:t.formValidate.account,callback:function(e){t.$set(t.formValidate,"account",e)},expression:"formValidate.account"}})],1)],1),r("Col",{staticClass:"search",attrs:{xl:3,lg:3,md:12,sm:12,xs:24}},[r("FormItem",[r("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:t.userSearchs}},[t._v("搜索")])],1)],1)],1)],1)],1),r("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[r("Table",{ref:"table",staticClass:"ivu-mt",attrs:{columns:t.columns,data:t.tableList,loading:t.loading,"no-data-text":"暂无数据","no-filtered-data-text":"暂无筛选结果"},on:{"on-sort-change":t.sortChanged},scopedSlots:t._u([{key:"info",fn:function(e){var n=e.row;return[r("div",{staticClass:"imgPic acea-row row-middle"},[r("viewer",[r("div",{staticClass:"pictrue"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.image,expression:"row.image"}]})])]),r("div",{staticClass:"info"},[t._v(t._s(n.store_name))])],1)]}},{key:"content",fn:function(e){var n=e.row;return[r("div",{staticClass:"mb5 content_font"},[t._v(t._s(n.comment))]),r("viewer",t._l(n.pics||[],(function(t,e){return r("div",{key:e,staticClass:"pictrue mr10"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"item"}]})])})),0)]}},{key:"merchant_reply_content",fn:function(e){var n=e.row;return[n.replyComment?r("div",{staticClass:"mb5 content_font"},[t._v(t._s(n.replyComment.content))]):t._e()]}},{key:"action",fn:function(e){var n=e.row;e.index;return[r("a",{on:{click:function(e){return t.reply(n)}}},[t._v("回复")])]}}])}),r("div",{staticClass:"acea-row row-right page"},[r("Page",{attrs:{total:t.total,current:t.formValidate.page,"show-elevator":"","show-total":"","page-size":t.formValidate.limit},on:{"on-change":t.pageChange}})],1)],1),r("Modal",{attrs:{scrollable:"",title:"回复内容",closable:""},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[r("Form",{ref:"contents",attrs:{model:t.contents,rules:t.ruleInline,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[r("FormItem",{attrs:{prop:"content"}},[r("Input",{attrs:{type:"textarea",rows:4,placeholder:"请输入回复内容"},model:{value:t.contents.content,callback:function(e){t.$set(t.contents,"content",e)},expression:"contents.content"}})],1)],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("Button",{attrs:{type:"primary"},on:{click:t.oks}},[t._v("确定")]),r("Button",{on:{click:t.cancels}},[t._v("取消")])],1)],1)],1)},o=[],a=r("a34a"),i=r.n(a),s=r("2f62"),c=r("c4c8");function l(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(n,o)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){l(a,n,o,i,s,"next",t)}function s(t){l(a,n,o,i,s,"throw",t)}i(void 0)}))}}function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(r,!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p={name:"productReply",data:function(){return{modals:!1,grid:{xl:7,lg:10,md:12,sm:12,xs:24},formValidate:{is_reply:"",store_name:"",account:"",product_id:void 0===this.$route.query.id?0:this.$route.query.id,page:1,limit:15},value:"45",tableList:[],total:0,loading:!1,columns:[{title:"评论ID",key:"id",width:80},{title:"商品信息",slot:"info",minWidth:280},{title:"用户名称",key:"nickname",minWidth:150},{title:"评分",key:"score",minWidth:90},{title:"评价内容",slot:"content",minWidth:210},{title:"回复内容",slot:"merchant_reply_content",minWidth:250},{title:"评价时间",key:"add_time",minWidth:150},{title:"操作",slot:"action",fixed:"right",minWidth:150}],contents:{content:""},ruleInline:{content:[{required:!0,message:"请输入回复内容",trigger:"blur"}]},rows:{}}},computed:m({},Object(s["e"])("store/layout",["isMobile"]),{labelWidth:function(){return this.isMobile?void 0:75},labelPosition:function(){return this.isMobile?"top":"left"}}),created:function(){0==this.$route.query.is_reply&&(this.formValidate.is_reply=this.$route.query.is_reply),this.getList()},watch:{"$route.params.id":function(t,e){this.formValidate.product_id=0,this.getList()}},methods:{sortChanged:function(t){this.formValidate[t.key]=t.order,this.getList()},add:function(){var t=this;this.$modalForm(Object(c["fictitiousReply"])(this.formValidate.product_id)).then((function(){return t.getList()}))},oks:function(){var t=this;this.modals=!0,this.$refs["contents"].validate((function(e){if(!e)return!1;Object(c["l"])(t.contents,t.rows.id).then(function(){var e=u(i.a.mark((function e(r){return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$Message.success(r.msg),t.modals=!1,t.$refs["contents"].resetFields(),t.getList();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))}))},cancels:function(){this.modals=!1,this.$refs["contents"].resetFields()},del:function(t,e,r){var n=this,o={title:e,num:r,url:"product/reply/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(o).then((function(t){n.$Message.success(t.msg),n.tableList.splice(r,1)})).catch((function(t){n.$Message.error(t.msg)}))},reply:function(t){this.modals=!0,this.rows=t},getList:function(){var t=this;this.loading=!0,this.formValidate.is_reply=this.formValidate.is_reply||"",this.formValidate.store_name=this.formValidate.store_name||"",Object(c["i"])(this.formValidate).then(function(){var e=u(i.a.mark((function e(r){var n;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=r.data,t.tableList=n.list,t.total=r.data.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},pageChange:function(t){this.formValidate.page=t,this.getList()},userSearchs:function(){this.formValidate.page=1,this.getList()},search:function(){}}},h=p,b=(r("6be5"),r("2877")),v=Object(b["a"])(h,n,o,!1,null,"2b996e76",null);e["default"]=v.exports},"6be5":function(t,e,r){"use strict";var n=r("c12b"),o=r.n(n);o.a},c12b:function(t,e,r){},c4c8:function(t,e,r){"use strict";r.d(e,"h",(function(){return o})),r.d(e,"g",(function(){return a})),r.d(e,"f",(function(){return i})),r.d(e,"a",(function(){return s})),r.d(e,"e",(function(){return c})),r.d(e,"k",(function(){return l})),r.d(e,"c",(function(){return u})),r.d(e,"i",(function(){return d})),r.d(e,"l",(function(){return m})),r.d(e,"m",(function(){return f})),r.d(e,"d",(function(){return p})),r.d(e,"j",(function(){return h})),r.d(e,"n",(function(){return b}));var n=r("b6bd");function o(t){return Object(n["a"])({url:"product/product",method:"get",params:t})}function a(t){return Object(n["a"])({url:"product/product/".concat(t),method:"get"})}function i(t){return Object(n["a"])({url:"product/type_header",method:"get",params:t})}function s(){return Object(n["a"])({url:"product/category",method:"get"})}function c(t){return Object(n["a"])({url:"product/product/".concat(t,"/edit"),method:"get"})}function l(t,e){return Object(n["a"])({url:"product/product/".concat(t),method:"put",data:e})}function u(){return Object(n["a"])({url:"product/getUserLabel",method:"get"})}function d(t){return Object(n["a"])({url:"product/reply",method:"get",params:t})}function m(t,e){return Object(n["a"])({url:"product/reply/set_reply/".concat(e),method:"PUT",data:t})}function f(t,e){return Object(n["a"])({url:"product/product/set_show/".concat(t,"/").concat(e),method:"PUT"})}function p(t){return Object(n["a"])({url:"product/product/attrs/".concat(t),method:"get"})}function h(t,e){return Object(n["a"])({url:"product/product/saveStocks/".concat(e),method:"PUT",data:t})}function b(t){return Object(n["a"])({url:"/product/product/synchStocks",method:"post",data:t})}}}]);