(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fb20eeba"],{"0c6b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("PageHeader",{staticClass:"product_tabs",attrs:{"hidden-breadcrumb":""}},[a("div",{staticClass:"acea-row row-middle",attrs:{slot:"title"},slot:"title"},[a("router-link",{attrs:{to:{path:"/admin/system/config/system_config_tab/index"}}},[a("div",{staticClass:"font-sm after-line"},[a("span",{staticClass:"iconfont iconfanhui"}),a("span",{staticClass:"pl10"},[t._v("返回")])])]),a("span",{staticClass:"mr20 ml16"},[t._v("配置列表")])],1)])],1),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Row",{attrs:{type:"flex"}},[a("Col",t._b({},"Col",t.grid,!1),[a("Button",{attrs:{type:"primary"},on:{click:t.configureAdd}},[t._v("添加配置")])],1)],1),a("Divider",{attrs:{dashed:""}}),a("Table",{ref:"table",attrs:{columns:t.columns1,data:t.classList,loading:t.loading,"no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"values",fn:function(e){var s=e.row;e.index;return["text"===s.type||"textarea"===s.type||"radio"===s.type||"checkbox"===s.type?a("span",[t._v(t._s(s.value))]):t._e(),"upload"===s.type&&3===s.upload_type?a("div",{staticClass:"valBox acea-row"},[s.value instanceof Array?a("div",t._l(s.value,(function(e,s){return a("div",{key:s,staticClass:"valPicbox acea-row row-column-around"},[a("div",{staticClass:"valPicbox_pic"},[a("Icon",{attrs:{type:"md-document"}})],1),a("span",{staticClass:"valPicbox_sp"},[t._v(t._s(e.filename))])])})),0):t._e()]):t._e(),"upload"===s.type&&3!==s.upload_type?a("div",{staticClass:"valBox acea-row"},[s.value instanceof Array?a("div",t._l(s.value,(function(e,s){return a("div",{key:s,staticClass:"valPicbox acea-row row-column-around"},[a("div",{staticClass:"valPicbox_pic"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.filepath,expression:"item.filepath"}]})]),a("span",{staticClass:"valPicbox_sp"},[t._v(t._s(e.filename))])])})),0):t._e()]):t._e()]}},{key:"statuss",fn:function(e){var s=e.row;e.index;return[a("i-switch",{attrs:{value:s.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeIsShow(s)}},model:{value:s.status,callback:function(e){t.$set(s,"status",e)},expression:"row.status"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("显示")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("隐藏")])])]}},{key:"action",fn:function(e){var s=e.row,n=e.index;return[a("a",{on:{click:function(e){return t.edit(s)}}},[t._v("编辑")]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.del(s,"删除分类",n)}}},[t._v("删除")])]}}])})],1),a("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:"添加配置字段","mask-closable":!1,"z-index":1,width:"700"},model:{value:t.modals2,callback:function(e){t.modals2=e},expression:"modals2"}},[a("div",{staticClass:"new_tab"},[a("Tabs",{on:{"on-click":t.onhangeTab},model:{value:t.typeFrom.type,callback:function(e){t.$set(t.typeFrom,"type",e)},expression:"typeFrom.type"}},[a("TabPane",{attrs:{label:"文本框 ",name:"0"}}),a("TabPane",{attrs:{label:"多行文本框",name:"1"}}),a("TabPane",{attrs:{label:"单选框",name:"2"}}),a("TabPane",{attrs:{label:"文件上传",name:"3"}}),a("TabPane",{attrs:{label:"多选框",name:"4"}}),a("TabPane",{attrs:{label:"下拉框",name:"5"}})],1)],1),0!=t.rules.length?a("form-create",{ref:"fc",staticClass:"formBox",attrs:{rule:t.rules,handleIcon:"false"},on:{"on-submit":t.onSubmit}}):t._e()],1),a("edit-from",{ref:"edits",attrs:{FromData:t.FromData},on:{submitFail:t.submitFail}})],1)},n=[],i=a("a34a"),o=a.n(i),r=a("8593"),c=a("9860"),l=a.n(c),u=a("31b4"),d=a("b6bd");function m(t,e,a,s,n,i,o){try{var r=t[i](o),c=r.value}catch(l){return void a(l)}r.done?e(c):Promise.resolve(c).then(s,n)}function f(t){return function(){var e=this,a=arguments;return new Promise((function(s,n){var i=t.apply(e,a);function o(t){m(i,s,n,o,r,"next",t)}function r(t){m(i,s,n,o,r,"throw",t)}o(void 0)}))}}var p={name:"list",components:{formCreate:l.a.$form(),editFrom:u["a"]},data:function(){return{modals2:!1,grid:{xl:7,lg:7,md:12,sm:24,xs:24},loading:!1,formValidate:{tab_id:0,page:1,limit:20},total:0,columns1:[{title:"ID",key:"id",width:80},{title:"配置名称",key:"info",minWidth:130},{title:"字段变量",key:"menu_name",minWidth:140},{title:"字段类型",key:"type",minWidth:90},{title:"值",slot:"values",minWidth:230},{title:"是否显示",slot:"statuss",minWidth:90},{title:"操作",slot:"action",fixed:"right",minWidth:120}],FromData:null,FromRequestData:{},modalTitleSs:"",classList:[],num:0,typeFrom:{type:0,tab_id:this.$route.params.id},rules:[]}},watch:{$route:{handler:function(t,e){this.getList()},deep:!0}},mounted:function(){this.getList()},methods:{onhangeTab:function(t){this.typeFrom.type=t,this.classAdd()},classAdd:function(){var t=this;Object(r["l"])(this.typeFrom).then(function(){var e=f(o.a.mark((function e(a){var s;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!1!==a.data.status){e.next=2;break}return e.abrupt("return",t.$authLapse(a.data));case 2:s=a.data||{},t.FromRequestData={action:s.action,method:s.method},t.rules=s.rules,t.modals2=!0;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},edit:function(t){var e=this;Object(r["m"])(t.id).then(function(){var t=f(o.a.mark((function t(a){var s;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!1!==a.data.status){t.next=2;break}return t.abrupt("return",e.$authLapse(a.data));case 2:s=a.data||{},e.FromRequestData={action:s.action,method:s.method},e.rules=s.rules,e.$refs.edits.modals=!0,e.modals2=!0;case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},onSubmit:function(t){var e=this;Object(d["a"])({url:this.FromRequestData.action,method:this.FromRequestData.method,data:t}).then((function(t){e.$Message.success(t.msg),setTimeout((function(){e.modals2=!1}),1e3),setTimeout((function(){e.getList()}),1500)})).catch((function(t){e.$Message.error(t.msg)}))},submitFail:function(){this.getList()},configureAdd:function(){this.classAdd()},getList:function(){var t=this;this.loading=!0,this.formValidate.tab_id=this.$route.params.id,Object(r["n"])(this.formValidate).then(function(){var e=f(o.a.mark((function e(a){var s;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:s=a.data,t.classList=s.list,t.total=s.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},pageChange:function(t){this.formValidate.page=t,this.getList()},del:function(t,e,a){var s=this,n={title:e,num:a,url:"/setting/config/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(n).then((function(t){s.$Message.success(t.msg),s.classList.splice(a,1)})).catch((function(t){s.$Message.error(t.msg)}))},onchangeIsShow:function(t){var e=this;Object(r["k"])(t.id,t.status).then(function(){var t=f(o.a.mark((function t(a){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$Message.success(a.msg);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))}}},h=p,b=(a("7140"),a("2877")),v=Object(b["a"])(h,s,n,!1,null,"bcc9408e",null);e["default"]=v.exports},"31b4":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.FromData?a("div",[a("Modal",{class:t.userEdit?"userEdit":"",attrs:{scrollable:"","footer-hide":"",closable:"",title:t.FromData.title,width:"700"},on:{"on-cancel":t.cancel},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[["/marketing/coupon/save.html"===t.FromData.action?a("div",{staticClass:"radio acea-row row-middle"},[a("div",{staticClass:"name ivu-form-item-content"},[t._v("优惠券类型")]),a("Radio-group",{on:{"on-change":t.couponsType},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[a("Radio",{attrs:{label:0}},[t._v("通用券")]),a("Radio",{attrs:{label:1}},[t._v("品类券")]),a("Radio",{attrs:{label:2}},[t._v("商品券")])],1)],1):t._e()],a("form-create",{ref:"fc",staticClass:"formBox",attrs:{option:t.config,rule:Array.from(t.FromData.rules),handleIcon:"false"},on:{"on-submit":t.onSubmit}})],2)],1):t._e()},n=[],i=a("9860"),o=a.n(i),r=a("b6bd"),c=a("2f62");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(a,!0).forEach((function(e){d(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var m={name:"edit",components:{formCreate:o.a.$form()},computed:u({},Object(c["e"])("admin/userLevel",["taskId","levelId"])),props:{FromData:{type:Object,default:null},userEdit:{type:Number,default:0}},data:function(){return{modals:!1,type:0,config:{global:{upload:{props:{onSuccess:function(t,e){200===t.status?e.url=t.data.src:this.Message.error(t.msg)}}}}},isDisable:!1}},methods:{couponsType:function(){this.$parent.addType(this.type)},onSubmit:function(t){var e=this;if(setTimeout((function(){e.isDisable=!1}),1e3),!this.isDisable){this.isDisable=!0;var a={};a=t,Object(r["a"])({url:this.FromData.action,method:this.FromData.method,data:a}).then((function(t){e.$parent.getList(),e.$Message.success(t.msg),e.modals=!1,setTimeout((function(){e.$emit("submitFail")}),1e3)})).catch((function(t){e.$Message.error(t.msg)}))}},cancel:function(){this.type=0}}},f=m,p=(a("8b61"),a("2877")),h=Object(p["a"])(f,s,n,!1,null,"80656ec0",null);e["a"]=h.exports},7140:function(t,e,a){"use strict";var s=a("c436"),n=a.n(s);n.a},"8b61":function(t,e,a){"use strict";var s=a("a29b"),n=a.n(s);n.a},a29b:function(t,e,a){},c436:function(t,e,a){}}]);