(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5633ebf6"],{"791c":function(t,e,n){},8404:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[n("Form",{ref:"artFrom",attrs:{model:t.artFrom,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[n("Row",{attrs:{type:"flex",gutter:24}},[n("Col",t._b({staticClass:"mr"},"Col",t.grid,!1),[n("FormItem",{attrs:{label:"提货点名称：","label-for":"store_name"}},[n("Select",{attrs:{"element-id":"store_id",clearable:""},on:{"on-change":t.userSearchs},model:{value:t.artFrom.store_id,callback:function(e){t.$set(t.artFrom,"store_id",e)},expression:"artFrom.store_id"}},t._l(t.storeSelectList,(function(e){return n("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.name))])})),1)],1)],1)],1)],1),n("Row",{attrs:{type:"flex"}},[n("Col",t._b({},"Col",t.grid,!1),[n("Button",{directives:[{name:"auth",rawName:"v-auth",value:["merchant-store_staff-create"],expression:"['merchant-store_staff-create']"}],attrs:{type:"primary",icon:"md-add"},on:{click:t.add}},[t._v("添加核销员")])],1)],1),n("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns,data:t.storeLists,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"avatar",fn:function(t){var e=t.row;return[n("viewer",[n("div",{staticClass:"tabBox_img"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"row.avatar"}]})])])]}},{key:"status",fn:function(e){var r=e.row;return[n("i-switch",{attrs:{value:r.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeIsShow(r.id,r.status)}},model:{value:r.status,callback:function(e){t.$set(r,"status",e)},expression:"row.status"}},[t._v(">\n          "),n("span",{attrs:{slot:"open"},slot:"open"},[t._v("显示")]),n("span",{attrs:{slot:"close"},slot:"close"},[t._v("隐藏")])])]}},{key:"action",fn:function(e){var r=e.row,u=e.index;return[n("a",{on:{click:function(e){return t.edit(r.id)}}},[t._v("编辑")]),n("Divider",{attrs:{type:"vertical"}}),n("a",{on:{click:function(e){return t.del(r,"删除核销员",u)}}},[t._v("删除")])]}}])}),n("div",{staticClass:"acea-row row-right page"},[n("Page",{attrs:{total:t.total,current:t.artFrom.page,"show-elevator":"","show-total":"","page-size":t.artFrom.limit},on:{"on-change":t.pageChange}})],1)],1)],1)},u=[],o=n("2f62"),c=n("90e7");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={name:"setting_staff",components:{},computed:i({},Object(o["e"])("admin/layout",["isMobile"]),{},Object(o["e"])("admin/userLevel",["categoryId"]),{labelWidth:function(){return this.isMobile?void 0:85},labelPosition:function(){return this.isMobile?"top":"right"}}),data:function(){return{grid:{xl:10,lg:10,md:12,sm:24,xs:24},artFrom:{page:1,limit:15,store_id:0},loading:!1,columns:[{title:"ID",key:"id",width:80,sortable:!0},{title:"微信名称",key:"nickname",minWidth:100},{title:"头像",slot:"avatar",minWidth:100},{title:"核销员名称",key:"staff_name",minWidth:100},{title:"所属提货点",key:"name",minWidth:100},{title:"添加时间",key:"add_time",minWidth:100},{title:"状态",slot:"status",minWidth:100},{title:"操作",slot:"action",minWidth:120}],storeLists:[],storeSelectList:[],total:0}},mounted:function(){this.getList(),this.storeList()},methods:{storeList:function(){var t=this;Object(c["M"])().then((function(e){t.storeSelectList=e.data}))},getList:function(){var t=this,e=this;e.loading=!0,Object(c["xb"])(e.artFrom).then((function(t){e.loading=!1,e.storeLists=t.data.list,e.total=t.data.count})).catch((function(e){t.$Message.error(e.msg)}))},userSearchs:function(){this.artFrom.page=1,this.getList()},pageChange:function(t){this.artFrom.page=t,this.getList()},del:function(t,e,n){var r=this,u={title:e,num:n,url:"merchant/store_staff/del/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(u).then((function(t){r.$Message.success(t.msg),r.storeLists.splice(n,1)})).catch((function(t){r.$Message.error(t.msg)}))},add:function(){var t=this;this.$modalForm(Object(c["yb"])(0)).then((function(){return t.getList()}))},onchangeIsShow:function(t,e){var n=this;Object(c["Ab"])(t,e).then((function(t){n.$Message.success(t.msg),n.getList()}))},edit:function(t){var e=this;this.$modalForm(Object(c["zb"])(t)).then((function(){return e.getList()}))}}},f=d,l=(n("c03b"),n("2877")),m=Object(l["a"])(f,r,u,!1,null,"c383891e",null);e["default"]=m.exports},"90e7":function(t,e,n){"use strict";n.d(e,"v",(function(){return u})),n.d(e,"k",(function(){return o})),n.d(e,"Cb",(function(){return c})),n.d(e,"Bb",(function(){return a})),n.d(e,"j",(function(){return i})),n.d(e,"Z",(function(){return s})),n.d(e,"gb",(function(){return d})),n.d(e,"cb",(function(){return f})),n.d(e,"db",(function(){return l})),n.d(e,"d",(function(){return m})),n.d(e,"ab",(function(){return h})),n.d(e,"Gb",(function(){return b})),n.d(e,"eb",(function(){return g})),n.d(e,"n",(function(){return p})),n.d(e,"m",(function(){return O})),n.d(e,"c",(function(){return j})),n.d(e,"S",(function(){return v})),n.d(e,"ib",(function(){return _})),n.d(e,"R",(function(){return w})),n.d(e,"jb",(function(){return y})),n.d(e,"tb",(function(){return k})),n.d(e,"I",(function(){return x})),n.d(e,"sb",(function(){return F})),n.d(e,"q",(function(){return L})),n.d(e,"o",(function(){return P})),n.d(e,"p",(function(){return E})),n.d(e,"r",(function(){return T})),n.d(e,"s",(function(){return C})),n.d(e,"V",(function(){return S})),n.d(e,"W",(function(){return D})),n.d(e,"T",(function(){return G})),n.d(e,"U",(function(){return W})),n.d(e,"K",(function(){return $})),n.d(e,"C",(function(){return M})),n.d(e,"G",(function(){return z})),n.d(e,"F",(function(){return I})),n.d(e,"x",(function(){return U})),n.d(e,"H",(function(){return B})),n.d(e,"z",(function(){return J})),n.d(e,"E",(function(){return A})),n.d(e,"y",(function(){return N})),n.d(e,"w",(function(){return R})),n.d(e,"J",(function(){return q})),n.d(e,"i",(function(){return H})),n.d(e,"e",(function(){return K})),n.d(e,"f",(function(){return Q})),n.d(e,"Db",(function(){return V})),n.d(e,"Eb",(function(){return X})),n.d(e,"Fb",(function(){return Y})),n.d(e,"hb",(function(){return Z})),n.d(e,"ub",(function(){return tt})),n.d(e,"L",(function(){return et})),n.d(e,"wb",(function(){return nt})),n.d(e,"vb",(function(){return rt})),n.d(e,"xb",(function(){return ut})),n.d(e,"yb",(function(){return ot})),n.d(e,"zb",(function(){return ct})),n.d(e,"Ab",(function(){return at})),n.d(e,"Hb",(function(){return it})),n.d(e,"Ib",(function(){return st})),n.d(e,"M",(function(){return dt})),n.d(e,"g",(function(){return ft})),n.d(e,"Jb",(function(){return lt})),n.d(e,"kb",(function(){return mt})),n.d(e,"lb",(function(){return ht})),n.d(e,"D",(function(){return bt})),n.d(e,"A",(function(){return gt})),n.d(e,"fb",(function(){return pt})),n.d(e,"mb",(function(){return Ot})),n.d(e,"nb",(function(){return jt})),n.d(e,"ob",(function(){return vt})),n.d(e,"B",(function(){return _t})),n.d(e,"bb",(function(){return wt})),n.d(e,"Y",(function(){return yt})),n.d(e,"N",(function(){return kt})),n.d(e,"Q",(function(){return xt})),n.d(e,"O",(function(){return Ft})),n.d(e,"P",(function(){return Lt})),n.d(e,"h",(function(){return Pt})),n.d(e,"u",(function(){return Et})),n.d(e,"t",(function(){return Tt})),n.d(e,"X",(function(){return Ct})),n.d(e,"pb",(function(){return St})),n.d(e,"rb",(function(){return Dt})),n.d(e,"b",(function(){return Gt})),n.d(e,"qb",(function(){return Wt})),n.d(e,"l",(function(){return $t})),n.d(e,"a",(function(){return Mt}));var r=n("b6bd");function u(t){return Object(r["a"])({url:"setting/config/header_basics",method:"get",params:t})}function o(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function c(t){return Object(r["a"])({url:t.url,method:"get",params:t.data})}function a(){return Object(r["a"])({url:"notify/sms/temp/create",method:"get"})}function i(t){return Object(r["a"])({url:"serve/login",method:"post",data:t})}function s(){return Object(r["a"])({url:"serve/info",method:"get"})}function d(t){return Object(r["a"])({url:"serve/sms/open",method:"get",params:t})}function f(t){return Object(r["a"])({url:"serve/opn_express",method:"post",data:t})}function l(t){return Object(r["a"])({url:"serve/open",method:"get",params:t})}function m(t){return Object(r["a"])({url:"serve/checkCode",method:"post",data:t})}function h(t){return Object(r["a"])({url:"serve/modify",method:"post",data:t})}function b(t){return Object(r["a"])({url:"serve/update_phone",method:"post",data:t})}function g(t){return Object(r["a"])({url:"serve/record",method:"get",params:t})}function p(t){return Object(r["a"])({url:"serve/export_temp",method:"get",params:t})}function O(){return Object(r["a"])({url:"serve/export_all",method:"get"})}function j(t){return Object(r["a"])({url:"serve/captcha",method:"post",data:t})}function v(t){return Object(r["a"])({url:"serve/register",method:"post",data:t})}function _(t){return Object(r["a"])({url:"serve/meal_list",method:"get",params:t})}function w(t){return Object(r["a"])({url:"serve/pay_meal",method:"post",data:t})}function y(t){return Object(r["a"])({url:"notify/sms/record",method:"get",params:t})}function k(){return Object(r["a"])({url:"merchant/store",method:"GET"})}function x(){return Object(r["a"])({url:"merchant/store/address",method:"GET"})}function F(t){return Object(r["a"])({url:"merchant/store/".concat(t.id),method:"POST",data:t})}function L(t){return Object(r["a"])({url:"freight/express",method:"get",params:t})}function P(){return Object(r["a"])({url:"/freight/express/create",method:"get"})}function E(t){return Object(r["a"])({url:"freight/express/".concat(t,"/edit"),method:"get"})}function T(t){return Object(r["a"])({url:"freight/express/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function C(){return Object(r["a"])({url:"freight/express/sync_express",method:"get"})}function S(t){return Object(r["a"])({url:"setting/role",method:"GET",params:t})}function D(t){return Object(r["a"])({url:"setting/role/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function G(t){return Object(r["a"])({url:"setting/role/".concat(t.id),method:"post",data:t})}function W(t){return Object(r["a"])({url:"setting/role/".concat(t,"/edit"),method:"get"})}function $(){return Object(r["a"])({url:"setting/role/create",method:"get"})}function M(t){return Object(r["a"])({url:"app/wechat/kefu",method:"get",params:t})}function z(t){return Object(r["a"])({url:"app/wechat/kefu/create",method:"get",params:t})}function I(){return Object(r["a"])({url:"app/wechat/kefu/add",method:"get"})}function U(t){return Object(r["a"])({url:"app/wechat/kefu",method:"post",data:t})}function B(t){return Object(r["a"])({url:"app/wechat/kefu/set_status/".concat(t.id,"/").concat(t.account_status),method:"PUT"})}function J(t){return Object(r["a"])({url:"app/wechat/kefu/".concat(t,"/edit"),method:"GET"})}function A(t,e){return Object(r["a"])({url:"app/wechat/kefu/record/".concat(e),method:"GET",params:t})}function N(t){return Object(r["a"])({url:"app/wechat/kefu/chat_list",method:"GET",params:t})}function R(){return Object(r["a"])({url:"notify/sms/is_login",method:"GET"})}function q(){return Object(r["a"])({url:"notify/sms/logout",method:"GET"})}function H(t){return Object(r["a"])({url:"setting/city/list/".concat(t),method:"get"})}function K(t){return Object(r["a"])({url:"setting/city/add/".concat(t),method:"get"})}function Q(t){return Object(r["a"])({url:"setting/city/".concat(t,"/edit"),method:"get"})}function V(t){return Object(r["a"])({url:"setting/shipping_templates/list",method:"get",params:t})}function X(t){return Object(r["a"])({url:"setting/shipping_templates/city_list",method:"get"})}function Y(t,e){return Object(r["a"])({url:"setting/shipping_templates/save/".concat(t),method:"post",data:e})}function Z(t){return Object(r["a"])({url:"setting/shipping_templates/".concat(t,"/edit"),method:"get"})}function tt(){return Object(r["a"])({url:"merchant/store/get_header",method:"get"})}function et(t){return Object(r["a"])({url:"merchant/store",method:"get",params:t})}function nt(t,e){return Object(r["a"])({url:"merchant/store/set_show/".concat(t,"/").concat(e),method:"put"})}function rt(t){return Object(r["a"])({url:"merchant/store/get_info/".concat(t),method:"get"})}function ut(t){return Object(r["a"])({url:"merchant/store_staff",method:"get",params:t})}function ot(){return Object(r["a"])({url:"merchant/store_staff/create",method:"get"})}function ct(t){return Object(r["a"])({url:"merchant/store_staff/".concat(t,"/edit"),method:"get"})}function at(t,e){return Object(r["a"])({url:"merchant/store_staff/set_show/".concat(t,"/").concat(e),method:"put"})}function it(t){return Object(r["a"])({url:"merchant/verify_order",method:"get",params:t})}function st(t){return Object(r["a"])({url:"merchant/verify/spread_info/".concat(t),method:"get"})}function dt(){return Object(r["a"])({url:"merchant/store_list",method:"get"})}function ft(){return Object(r["a"])({url:"setting/city/clean_cache",method:"get"})}function lt(t){return Object(r["a"])({url:"app/wechat/speechcraft",method:"get",params:t})}function mt(t){return Object(r["a"])({url:"app/wechat/speechcraft/create",method:"get",params:t})}function ht(t){return Object(r["a"])({url:"app/wechat/speechcraft/".concat(t,"/edit"),method:"get"})}function bt(t){return Object(r["a"])({url:"app/wechat/kefu/login/".concat(t),method:"get"})}function gt(t){return Object(r["a"])({url:"app/feedback",method:"get",params:t})}function pt(t){return Object(r["a"])({url:"serve/sms/sign",method:"PUT",data:t})}function Ot(){return Object(r["a"])({url:"app/wechat/speechcraftcate",method:"get"})}function jt(){return Object(r["a"])({url:"app/wechat/speechcraftcate/create",method:"get"})}function vt(t){return Object(r["a"])({url:"app/wechat/speechcraftcate/".concat(t,"/edit"),method:"get"})}function _t(t){return Object(r["a"])({url:"app/feedback/".concat(t,"/edit"),method:"get"})}function wt(){return Object(r["a"])({url:"serve/open",method:"get"})}function yt(){return Object(r["a"])({url:"serve/dump_open",method:"get"})}function kt(t){return Object(r["a"])({url:"setting/system_out/index",method:"get",params:t})}function xt(t,e){return Object(r["a"])({url:"setting/system_out/set_status/".concat(t,"/").concat(e),method:"put"})}function Ft(t){return Object(r["a"])({url:"setting/system_out/save",method:"post",params:t})}function Lt(t,e){return Object(r["a"])({url:"setting/system_out/update/".concat(t),method:"post",params:e})}function Pt(t){return Object(r["a"])({url:"city",method:"get",params:t})}function Et(t){return Object(r["a"])({url:"setting/config/edit_new_build/"+t,method:"get"})}function Tt(){return Object(r["a"])({url:"/setting/config/image",method:"get"})}function Ct(t){return Object(r["a"])({url:"setting/config/save_basics",method:"post",data:t})}function St(t){return Object(r["a"])({url:"/setting/config/storage",method:"get",params:t})}function Dt(t){return Object(r["a"])({url:"/setting/config/storage/synch/".concat(t),method:"put"})}function Gt(t){return Object(r["a"])({url:"/setting/config/storage/create/".concat(t),method:"get"})}function Wt(t){return Object(r["a"])({url:"/setting/config/storage/status/".concat(t),method:"put"})}function $t(t){return Object(r["a"])({url:"/setting/config/storage/domain/".concat(t),method:"get"})}function Mt(t){return Object(r["a"])({url:"/setting/config/storage/form/".concat(t),method:"get"})}},c03b:function(t,e,n){"use strict";var r=n("791c"),u=n.n(r);u.a}}]);