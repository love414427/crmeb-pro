(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63e4873d"],{"1f90":function(t,e,r){},"500b":function(t,e,r){"use strict";var n=r("1f90"),a=r.n(n);a.a},"63fa":function(t,e,r){"use strict";var n=r("6f61"),a=r.n(n);a.a},"669a3":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"i-layout-page-header"},[r("PageHeader",{staticClass:"product_tabs",attrs:{title:"提货点","hidden-breadcrumb":""}},[r("div",{attrs:{slot:"content"},slot:"content"},[r("Tabs",{on:{"on-click":t.onClickTab},model:{value:t.artFrom.type,callback:function(e){t.$set(t.artFrom,"type",e)},expression:"artFrom.type"}},[r("TabPane",{attrs:{label:t.headeNum.show.name+"("+t.headeNum.show.num+")",name:"0"}}),r("TabPane",{attrs:{label:t.headeNum.hide.name+"("+t.headeNum.hide.num+")",name:"1"}}),r("TabPane",{attrs:{label:t.headeNum.recycle.name+"("+t.headeNum.recycle.num+")",name:"2"}})],1)],1)])],1),r("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[r("Form",{ref:"artFrom",attrs:{model:t.artFrom,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[r("Row",{attrs:{type:"flex",gutter:24}},[r("Col",t._b({staticClass:"mr"},"Col",t.grid,!1),[r("FormItem",{attrs:{label:"提货点搜索：","label-for":"store_name"}},[r("Input",{attrs:{search:"","enter-button":"",placeholder:"请输入提货点名称,电话"},on:{"on-search":t.userSearchs},model:{value:t.artFrom.keywords,callback:function(e){t.$set(t.artFrom,"keywords",e)},expression:"artFrom.keywords"}})],1)],1)],1)],1),r("Row",{directives:[{name:"auth",rawName:"v-auth",value:["setting-merchant-system_store-save"],expression:"['setting-merchant-system_store-save']"}],attrs:{type:"flex"}},[r("Col",t._b({},"Col",t.grid,!1),[r("Button",{directives:[{name:"auth",rawName:"v-auth",value:["setting-merchant-system_store-save"],expression:"['setting-merchant-system_store-save']"}],attrs:{type:"primary",icon:"md-add"},on:{click:t.add}},[t._v("添加提货点")])],1)],1),r("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns,data:t.storeLists,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"image",fn:function(t){var e=t.row;t.index;return[r("viewer",[r("div",{staticClass:"tabBox_img"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"row.image"}]})])])]}},{key:"is_show",fn:function(e){var n=e.row;e.index;return[r("i-switch",{attrs:{value:n.is_show,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeIsShow(n.id,n.is_show)}},model:{value:n.is_show,callback:function(e){t.$set(n,"is_show",e)},expression:"row.is_show"}},[t._v(">\n                        "),r("span",{attrs:{slot:"open"},slot:"open"},[t._v("显示")]),r("span",{attrs:{slot:"close"},slot:"close"},[t._v("隐藏")])])]}},{key:"action",fn:function(e){var n=e.row,a=e.index;return[r("a",{on:{click:function(e){return t.edit(n.id)}}},[t._v("编辑")]),r("Divider",{attrs:{type:"vertical"}}),0==n.is_del?r("a",{on:{click:function(e){return t.del(n,"删除提货点",a)}}},[t._v("删除")]):r("a",{on:{click:function(e){return t.del(n,"恢复提货点",a)}}},[t._v("恢复")])]}}])}),r("div",{staticClass:"acea-row row-right page"},[r("Page",{attrs:{total:t.total,current:t.artFrom.page,"show-elevator":"","show-total":"","page-size":t.artFrom.limit},on:{"on-change":t.pageChange}})],1)],1),r("system-store",{ref:"template"})],1)},a=[],o=r("2f62"),i=r("90e7"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:"添加提货点","z-index":1,width:"700"},on:{"on-cancel":t.cancel},model:{value:t.isTemplate,callback:function(e){t.isTemplate=e},expression:"isTemplate"}},[r("div",{staticClass:"article-manager"},[r("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[r("Form",{ref:"formItem",attrs:{model:t.formItem,"label-width":t.labelWidth,"label-position":t.labelPosition,rules:t.ruleValidate},nativeOn:{submit:function(t){t.preventDefault()}}},[r("Row",{attrs:{type:"flex",gutter:24}},[r("Col",{attrs:{span:"24"}},[r("Col",t._b({},"Col",t.grid,!1),[r("FormItem",{attrs:{label:"提货点名称：",prop:"name","label-for":"name"}},[r("Input",{attrs:{placeholder:"请输入提货点名称"},model:{value:t.formItem.name,callback:function(e){t.$set(t.formItem,"name",e)},expression:"formItem.name"}})],1)],1)],1),r("Col",{attrs:{span:"24"}},[r("Col",t._b({},"Col",t.grid,!1),[r("FormItem",{attrs:{label:"提货点简介：","label-for":"introduction"}},[r("Input",{attrs:{placeholder:"请输入提货点简介"},model:{value:t.formItem.introduction,callback:function(e){t.$set(t.formItem,"introduction",e)},expression:"formItem.introduction"}})],1)],1)],1),r("Col",{attrs:{span:"24"}},[r("Col",t._b({},"Col",t.grid,!1),[r("FormItem",{attrs:{label:"提货点手机号：","label-for":"phone",prop:"phone"}},[r("Input",{attrs:{placeholder:"请输入提货点手机号"},model:{value:t.formItem.phone,callback:function(e){t.$set(t.formItem,"phone",e)},expression:"formItem.phone"}})],1)],1)],1),r("Col",{attrs:{span:"24"}},[r("Col",t._b({},"Col",t.grid,!1),[r("FormItem",{attrs:{label:"提货点地址：","label-for":"address",prop:"address"}},[r("Cascader",{attrs:{data:t.addresData,value:t.formItem.address},on:{"on-change":t.handleChange},model:{value:t.formItem.address,callback:function(e){t.$set(t.formItem,"address",e)},expression:"formItem.address"}})],1)],1)],1),r("Col",{attrs:{span:"24"}},[r("Col",t._b({},"Col",t.grid,!1),[r("FormItem",{attrs:{label:"详细地址：","label-for":"detailed_address",prop:"detailed_address"}},[r("Input",{attrs:{placeholder:"请输入详细地址"},model:{value:t.formItem.detailed_address,callback:function(e){t.$set(t.formItem,"detailed_address",e)},expression:"formItem.detailed_address"}})],1)],1)],1),r("Col",{attrs:{span:"24"}},[r("Col",t._b({},"Col",t.grid,!1),[r("FormItem",{attrs:{label:"提货点营业：","label-for":"day_time"}},[r("TimePicker",{attrs:{type:"timerange",format:"HH:mm:ss",value:t.formItem.day_time,placement:"bottom-end",placeholder:"请选择营业时间"},on:{"on-change":t.onchangeTime},model:{value:t.formItem.day_time,callback:function(e){t.$set(t.formItem,"day_time",e)},expression:"formItem.day_time"}})],1)],1)],1),r("Col",{attrs:{span:"24"}},[r("Col",t._b({},"Col",t.grid,!1),[r("FormItem",{attrs:{label:"提货点logo：",prop:"image"}},[r("div",{staticClass:"picBox",on:{click:function(e){return t.modalPicTap("单选")}}},[t.formItem.image?r("div",{staticClass:"pictrue"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.formItem.image,expression:"formItem.image"}]})]):r("div",{staticClass:"upLoad acea-row row-center-wrapper"},[r("Icon",{staticClass:"iconfont",attrs:{type:"ios-camera-outline",size:"26"}})],1)])])],1)],1),r("Col",{attrs:{span:"24"}},[r("Col",t._b({},"Col",t.grid,!1),[r("FormItem",{attrs:{label:"经纬度：","label-for":"status2",prop:"latlng"}},[r("Tooltip",[r("Input",{staticStyle:{width:"100%"},attrs:{search:"","enter-button":"查找位置",placeholder:"请查找位置"},on:{"on-search":t.onSearch},model:{value:t.formItem.latlng,callback:function(e){t.$set(t.formItem,"latlng",e)},expression:"formItem.latlng"}}),r("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n                                            请点击查找位置选择位置\n                                        ")])],1)],1)],1)],1)],1),r("Row",{attrs:{type:"flex"}},[r("Col",t._b({},"Col",t.grid,!1),[r("Button",{staticClass:"ml20",attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("formItem")}}},[t._v(t._s(t.formItem.id?"修改":"提交"))])],1)],1),t.spinShow?r("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1),r("Modal",{attrs:{width:"960px",scrollable:"","footer-hide":"",closable:"",title:"上传提货点logo","mask-closable":!1,"z-index":1},model:{value:t.modalPic,callback:function(e){t.modalPic=e},expression:"modalPic"}},[t.modalPic?r("uploadPictures",{attrs:{isChoice:t.isChoice,gridBtn:t.gridBtn,gridPic:t.gridPic},on:{getPic:t.getPic}}):t._e()],1),r("Modal",{staticClass:"mapBox",attrs:{scrollable:"","footer-hide":"",closable:"",title:"查找位置","mask-closable":!1,"z-index":1},model:{value:t.modalMap,callback:function(e){t.modalMap=e},expression:"modalMap"}},[r("iframe",{attrs:{id:"mapPage",width:"100%",height:"100%",frameborder:"0",src:t.keyUrl}})])],1)])],1)},s=[],u=r("a34a"),l=r.n(u),d=r("2e8e"),m=r("b0e7");function f(t,e,r,n,a,o,i){try{var c=t[o](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,a)}function h(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function i(t){f(o,n,a,i,c,"next",t)}function c(t){f(o,n,a,i,c,"throw",t)}i(void 0)}))}}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(r,!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var v={name:"systemStore",components:{uploadPictures:m["a"]},props:{},data:function(){var t=this,e=function(t,e,r){if(!e)return r(new Error("请填写手机号"));/^1[3456789]\d{9}$/.test(e)?r():r(new Error("手机号格式不正确!"))},r=function(e,r,n){t.formItem.image?n():n(new Error("请上传提货点logo"))};return{isTemplate:!1,spinShow:!1,modalMap:!1,addresData:[],formItem:{name:"",introduction:"",phone:"",address:[],address2:[],detailed_address:"",valid_time:[],day_time:[],latlng:"",id:0},ruleValidate:{name:[{required:!0,message:"请输入提货点名称",trigger:"blur"}],mail:[{required:!0,message:"Mailbox cannot be empty",trigger:"blur"},{type:"email",message:"Incorrect email format",trigger:"blur"}],address:[{required:!0,message:"请选择提货点地址",type:"array",trigger:"change"}],valid_time:[{required:!0,type:"array",message:"请选择核销时效",trigger:"change",fields:{0:{type:"date",required:!0,message:"请选择年度范围"},1:{type:"date",required:!0,message:"请选择年度范围"}}}],day_time:[{required:!0,type:"array",message:"请选择提货点营业时间",trigger:"change"}],phone:[{required:!0,validator:e,trigger:"blur"}],detailed_address:[{required:!0,message:"请输入详细地址",trigger:"blur"}],image:[{required:!0,validator:r,trigger:"change"}],latlng:[{required:!0,message:"请选择经纬度",trigger:"blur"}]},keyUrl:"",grid:{xl:20,lg:20,md:20,sm:24,xs:24},gridPic:{xl:6,lg:8,md:12,sm:12,xs:12},gridBtn:{xl:4,lg:8,md:8,sm:8,xs:8},modalPic:!1,isChoice:"单选"}},created:function(){var t=this;d["a"].map((function(t){t.value=t.label,t.children&&t.children.length&&t.children.map((function(t){t.value=t.label,t.children&&t.children.length&&t.children.map((function(t){t.value=t.label}))}))})),setTimeout((function(){t.addresData=d["a"]}),10)},computed:g({},Object(o["e"])("admin/layout",["isMobile"]),{labelWidth:function(){return this.isMobile?void 0:120},labelPosition:function(){return this.isMobile?"top":"right"}}),mounted:function(){window.addEventListener("message",(function(t){var e=t.data;e&&"locationPicker"===e.module&&window.parent.selectAdderss(e)}),!1),window.selectAdderss=this.selectAdderss},methods:{cancel:function(){this.$refs["formItem"].resetFields(),this.clearFrom()},clearFrom:function(){this.formItem.introduction="",this.formItem.day_time=[]},selectAdderss:function(t){this.formItem.latlng=t.latlng.lat+","+t.latlng.lng,this.modalMap=!1},getKey:function(){var t=this;Object(i["I"])().then(function(){var e=h(l.a.mark((function e(r){var n;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.modalMap=!0,n=r.data.key,t.keyUrl="https://apis.map.qq.com/tools/locpicker?type=1&key=".concat(n,"&referer=myapp");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Modal.confirm({title:"提示",content:"<p>"+e.msg+"</p>",onOk:function(){t.$router.push({path:"/admin/setting/system_config"})},onCancel:function(){}})}))},getInfo:function(t){var e=this;e.formItem.id=t,e.spinShow=!0,Object(i["vb"])(t).then((function(t){var r=t.data.info||null;e.formItem=r||e.formItem,e.formItem.address=r.address2,e.spinShow=!1})).catch((function(t){e.spinShow=!1,e.$Message.error(t.msg)}))},modalPicTap:function(){this.modalPic=!0},getPic:function(t){this.formItem.image=t.att_dir,this.modalPic=!1},handleChange:function(t,e){this.formItem.address=e.map((function(t){return t.label}))},onchangeDate:function(t){this.formItem.valid_time=t},onchangeTime:function(t){this.formItem.day_time=t},onSearch:function(){this.getKey()},handleSubmit:function(t){var e=this;this.$refs[t].validate((function(r){if(!r)return!1;Object(i["sb"])(e.formItem).then(function(){var r=h(l.a.mark((function r(n){return l.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e.$Message.success(n.msg),e.isTemplate=!1,e.$parent.getList(),e.$refs[t].resetFields(),e.clearFrom();case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))}))}}},O=v,y=(r("500b"),r("2877")),j=Object(y["a"])(O,c,s,!1,null,"11d639a0",null),w=j.exports;function _(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function I(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?_(r,!0).forEach((function(e){k(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function k(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var x={name:"setting_store",components:{systemStore:w},computed:I({},Object(o["e"])("admin/layout",["isMobile"]),{},Object(o["e"])("admin/userLevel",["categoryId"]),{labelWidth:function(){return this.isMobile?void 0:85},labelPosition:function(){return this.isMobile?"top":"left"}}),data:function(){return{grid:{xl:10,lg:10,md:12,sm:24,xs:24},headeNum:{show:{name:"",num:0},hide:{name:"",num:0},recycle:{name:"",num:0}},artFrom:{page:1,limit:15,type:"0",keywords:""},loading:!1,columns:[{title:"ID",key:"id",width:80,sortable:!0},{title:"提货点图片",slot:"image",minWidth:100},{title:"提货点名称",key:"name",minWidth:100},{title:"提货点电话",key:"phone",minWidth:100},{title:"地址",key:"detailed_address",minWidth:100},{title:"营业时间",key:"day_time",minWidth:100},{title:"是否显示",slot:"is_show",minWidth:100},{title:"操作",slot:"action",fixed:"right",minWidth:120}],storeLists:[],total:0}},mounted:function(){this.storeHeade(),this.getList()},methods:{storeHeade:function(){var t=this,e=this;Object(i["ub"])().then((function(t){e.headeNum=t.data.count})).catch((function(e){t.$Message.error(e.msg)}))},getList:function(){var t=this,e=this;e.loading=!0,Object(i["L"])(e.artFrom).then((function(t){e.loading=!1,e.storeLists=t.data.list,e.total=t.data.count})).catch((function(e){t.$Message.error(e.msg)}))},userSearchs:function(){this.artFrom.page=1,this.getList()},onClickTab:function(){this.artFrom.page=1,this.artFrom.keywords="",this.getList()},pageChange:function(t){this.artFrom.page=t,this.getList()},del:function(t,e,r){var n=this,a={title:e,num:r,url:"merchant/store/del/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(a).then((function(t){n.$Message.success(t.msg),n.storeLists.splice(r,1),n.storeHeade()})).catch((function(t){n.$Message.error(t.msg)}))},add:function(){this.$refs.template.isTemplate=!0,this.$refs.template.formItem.id=0},onchangeIsShow:function(t,e){var r=this;Object(i["wb"])(t,e).then((function(t){r.$Message.success(t.msg),r.getList(),r.storeHeade()}))},edit:function(t){this.$refs.template.isTemplate=!0,this.$refs.template.getInfo(t)}}},C=x,P=(r("63fa"),Object(y["a"])(C,n,a,!1,null,"199792d7",null));e["default"]=P.exports},"6f61":function(t,e,r){},"90e7":function(t,e,r){"use strict";r.d(e,"v",(function(){return a})),r.d(e,"k",(function(){return o})),r.d(e,"Cb",(function(){return i})),r.d(e,"Bb",(function(){return c})),r.d(e,"j",(function(){return s})),r.d(e,"Z",(function(){return u})),r.d(e,"gb",(function(){return l})),r.d(e,"cb",(function(){return d})),r.d(e,"db",(function(){return m})),r.d(e,"d",(function(){return f})),r.d(e,"ab",(function(){return h})),r.d(e,"Gb",(function(){return p})),r.d(e,"eb",(function(){return g})),r.d(e,"n",(function(){return b})),r.d(e,"m",(function(){return v})),r.d(e,"c",(function(){return O})),r.d(e,"S",(function(){return y})),r.d(e,"ib",(function(){return j})),r.d(e,"R",(function(){return w})),r.d(e,"jb",(function(){return _})),r.d(e,"tb",(function(){return I})),r.d(e,"I",(function(){return k})),r.d(e,"sb",(function(){return x})),r.d(e,"q",(function(){return C})),r.d(e,"o",(function(){return P})),r.d(e,"p",(function(){return F})),r.d(e,"r",(function(){return T})),r.d(e,"s",(function(){return $})),r.d(e,"V",(function(){return M})),r.d(e,"W",(function(){return S})),r.d(e,"T",(function(){return E})),r.d(e,"U",(function(){return D})),r.d(e,"K",(function(){return L})),r.d(e,"C",(function(){return q})),r.d(e,"G",(function(){return z})),r.d(e,"F",(function(){return N})),r.d(e,"x",(function(){return W})),r.d(e,"H",(function(){return B})),r.d(e,"z",(function(){return G})),r.d(e,"E",(function(){return H})),r.d(e,"y",(function(){return U})),r.d(e,"w",(function(){return A})),r.d(e,"J",(function(){return R})),r.d(e,"i",(function(){return J})),r.d(e,"e",(function(){return K})),r.d(e,"f",(function(){return V})),r.d(e,"Db",(function(){return Q})),r.d(e,"Eb",(function(){return X})),r.d(e,"Fb",(function(){return Y})),r.d(e,"hb",(function(){return Z})),r.d(e,"ub",(function(){return tt})),r.d(e,"L",(function(){return et})),r.d(e,"wb",(function(){return rt})),r.d(e,"vb",(function(){return nt})),r.d(e,"xb",(function(){return at})),r.d(e,"yb",(function(){return ot})),r.d(e,"zb",(function(){return it})),r.d(e,"Ab",(function(){return ct})),r.d(e,"Hb",(function(){return st})),r.d(e,"Ib",(function(){return ut})),r.d(e,"M",(function(){return lt})),r.d(e,"g",(function(){return dt})),r.d(e,"Jb",(function(){return mt})),r.d(e,"kb",(function(){return ft})),r.d(e,"lb",(function(){return ht})),r.d(e,"D",(function(){return pt})),r.d(e,"A",(function(){return gt})),r.d(e,"fb",(function(){return bt})),r.d(e,"mb",(function(){return vt})),r.d(e,"nb",(function(){return Ot})),r.d(e,"ob",(function(){return yt})),r.d(e,"B",(function(){return jt})),r.d(e,"bb",(function(){return wt})),r.d(e,"Y",(function(){return _t})),r.d(e,"N",(function(){return It})),r.d(e,"Q",(function(){return kt})),r.d(e,"O",(function(){return xt})),r.d(e,"P",(function(){return Ct})),r.d(e,"h",(function(){return Pt})),r.d(e,"u",(function(){return Ft})),r.d(e,"t",(function(){return Tt})),r.d(e,"X",(function(){return $t})),r.d(e,"pb",(function(){return Mt})),r.d(e,"rb",(function(){return St})),r.d(e,"b",(function(){return Et})),r.d(e,"qb",(function(){return Dt})),r.d(e,"l",(function(){return Lt})),r.d(e,"a",(function(){return qt}));var n=r("b6bd");function a(t){return Object(n["a"])({url:"setting/config/header_basics",method:"get",params:t})}function o(t,e){return Object(n["a"])({url:e,method:"get",params:t})}function i(t){return Object(n["a"])({url:t.url,method:"get",params:t.data})}function c(){return Object(n["a"])({url:"notify/sms/temp/create",method:"get"})}function s(t){return Object(n["a"])({url:"serve/login",method:"post",data:t})}function u(){return Object(n["a"])({url:"serve/info",method:"get"})}function l(t){return Object(n["a"])({url:"serve/sms/open",method:"get",params:t})}function d(t){return Object(n["a"])({url:"serve/opn_express",method:"post",data:t})}function m(t){return Object(n["a"])({url:"serve/open",method:"get",params:t})}function f(t){return Object(n["a"])({url:"serve/checkCode",method:"post",data:t})}function h(t){return Object(n["a"])({url:"serve/modify",method:"post",data:t})}function p(t){return Object(n["a"])({url:"serve/update_phone",method:"post",data:t})}function g(t){return Object(n["a"])({url:"serve/record",method:"get",params:t})}function b(t){return Object(n["a"])({url:"serve/export_temp",method:"get",params:t})}function v(){return Object(n["a"])({url:"serve/export_all",method:"get"})}function O(t){return Object(n["a"])({url:"serve/captcha",method:"post",data:t})}function y(t){return Object(n["a"])({url:"serve/register",method:"post",data:t})}function j(t){return Object(n["a"])({url:"serve/meal_list",method:"get",params:t})}function w(t){return Object(n["a"])({url:"serve/pay_meal",method:"post",data:t})}function _(t){return Object(n["a"])({url:"notify/sms/record",method:"get",params:t})}function I(){return Object(n["a"])({url:"merchant/store",method:"GET"})}function k(){return Object(n["a"])({url:"merchant/store/address",method:"GET"})}function x(t){return Object(n["a"])({url:"merchant/store/".concat(t.id),method:"POST",data:t})}function C(t){return Object(n["a"])({url:"freight/express",method:"get",params:t})}function P(){return Object(n["a"])({url:"/freight/express/create",method:"get"})}function F(t){return Object(n["a"])({url:"freight/express/".concat(t,"/edit"),method:"get"})}function T(t){return Object(n["a"])({url:"freight/express/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function $(){return Object(n["a"])({url:"freight/express/sync_express",method:"get"})}function M(t){return Object(n["a"])({url:"setting/role",method:"GET",params:t})}function S(t){return Object(n["a"])({url:"setting/role/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function E(t){return Object(n["a"])({url:"setting/role/".concat(t.id),method:"post",data:t})}function D(t){return Object(n["a"])({url:"setting/role/".concat(t,"/edit"),method:"get"})}function L(){return Object(n["a"])({url:"setting/role/create",method:"get"})}function q(t){return Object(n["a"])({url:"app/wechat/kefu",method:"get",params:t})}function z(t){return Object(n["a"])({url:"app/wechat/kefu/create",method:"get",params:t})}function N(){return Object(n["a"])({url:"app/wechat/kefu/add",method:"get"})}function W(t){return Object(n["a"])({url:"app/wechat/kefu",method:"post",data:t})}function B(t){return Object(n["a"])({url:"app/wechat/kefu/set_status/".concat(t.id,"/").concat(t.account_status),method:"PUT"})}function G(t){return Object(n["a"])({url:"app/wechat/kefu/".concat(t,"/edit"),method:"GET"})}function H(t,e){return Object(n["a"])({url:"app/wechat/kefu/record/".concat(e),method:"GET",params:t})}function U(t){return Object(n["a"])({url:"app/wechat/kefu/chat_list",method:"GET",params:t})}function A(){return Object(n["a"])({url:"notify/sms/is_login",method:"GET"})}function R(){return Object(n["a"])({url:"notify/sms/logout",method:"GET"})}function J(t){return Object(n["a"])({url:"setting/city/list/".concat(t),method:"get"})}function K(t){return Object(n["a"])({url:"setting/city/add/".concat(t),method:"get"})}function V(t){return Object(n["a"])({url:"setting/city/".concat(t,"/edit"),method:"get"})}function Q(t){return Object(n["a"])({url:"setting/shipping_templates/list",method:"get",params:t})}function X(t){return Object(n["a"])({url:"setting/shipping_templates/city_list",method:"get"})}function Y(t,e){return Object(n["a"])({url:"setting/shipping_templates/save/".concat(t),method:"post",data:e})}function Z(t){return Object(n["a"])({url:"setting/shipping_templates/".concat(t,"/edit"),method:"get"})}function tt(){return Object(n["a"])({url:"merchant/store/get_header",method:"get"})}function et(t){return Object(n["a"])({url:"merchant/store",method:"get",params:t})}function rt(t,e){return Object(n["a"])({url:"merchant/store/set_show/".concat(t,"/").concat(e),method:"put"})}function nt(t){return Object(n["a"])({url:"merchant/store/get_info/".concat(t),method:"get"})}function at(t){return Object(n["a"])({url:"merchant/store_staff",method:"get",params:t})}function ot(){return Object(n["a"])({url:"merchant/store_staff/create",method:"get"})}function it(t){return Object(n["a"])({url:"merchant/store_staff/".concat(t,"/edit"),method:"get"})}function ct(t,e){return Object(n["a"])({url:"merchant/store_staff/set_show/".concat(t,"/").concat(e),method:"put"})}function st(t){return Object(n["a"])({url:"merchant/verify_order",method:"get",params:t})}function ut(t){return Object(n["a"])({url:"merchant/verify/spread_info/".concat(t),method:"get"})}function lt(){return Object(n["a"])({url:"merchant/store_list",method:"get"})}function dt(){return Object(n["a"])({url:"setting/city/clean_cache",method:"get"})}function mt(t){return Object(n["a"])({url:"app/wechat/speechcraft",method:"get",params:t})}function ft(t){return Object(n["a"])({url:"app/wechat/speechcraft/create",method:"get",params:t})}function ht(t){return Object(n["a"])({url:"app/wechat/speechcraft/".concat(t,"/edit"),method:"get"})}function pt(t){return Object(n["a"])({url:"app/wechat/kefu/login/".concat(t),method:"get"})}function gt(t){return Object(n["a"])({url:"app/feedback",method:"get",params:t})}function bt(t){return Object(n["a"])({url:"serve/sms/sign",method:"PUT",data:t})}function vt(){return Object(n["a"])({url:"app/wechat/speechcraftcate",method:"get"})}function Ot(){return Object(n["a"])({url:"app/wechat/speechcraftcate/create",method:"get"})}function yt(t){return Object(n["a"])({url:"app/wechat/speechcraftcate/".concat(t,"/edit"),method:"get"})}function jt(t){return Object(n["a"])({url:"app/feedback/".concat(t,"/edit"),method:"get"})}function wt(){return Object(n["a"])({url:"serve/open",method:"get"})}function _t(){return Object(n["a"])({url:"serve/dump_open",method:"get"})}function It(t){return Object(n["a"])({url:"setting/system_out/index",method:"get",params:t})}function kt(t,e){return Object(n["a"])({url:"setting/system_out/set_status/".concat(t,"/").concat(e),method:"put"})}function xt(t){return Object(n["a"])({url:"setting/system_out/save",method:"post",params:t})}function Ct(t,e){return Object(n["a"])({url:"setting/system_out/update/".concat(t),method:"post",params:e})}function Pt(t){return Object(n["a"])({url:"city",method:"get",params:t})}function Ft(t){return Object(n["a"])({url:"setting/config/edit_new_build/"+t,method:"get"})}function Tt(){return Object(n["a"])({url:"/setting/config/image",method:"get"})}function $t(t){return Object(n["a"])({url:"setting/config/save_basics",method:"post",data:t})}function Mt(t){return Object(n["a"])({url:"/setting/config/storage",method:"get",params:t})}function St(t){return Object(n["a"])({url:"/setting/config/storage/synch/".concat(t),method:"put"})}function Et(t){return Object(n["a"])({url:"/setting/config/storage/create/".concat(t),method:"get"})}function Dt(t){return Object(n["a"])({url:"/setting/config/storage/status/".concat(t),method:"put"})}function Lt(t){return Object(n["a"])({url:"/setting/config/storage/domain/".concat(t),method:"get"})}function qt(t){return Object(n["a"])({url:"/setting/config/storage/form/".concat(t),method:"get"})}}}]);