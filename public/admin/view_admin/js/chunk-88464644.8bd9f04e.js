(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-88464644"],{"0b65":function(t,e,r){"use strict";e["a"]={shortcuts:[{text:"今天",value:function(){var t=new Date,e=new Date;return e.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate())),[e,t]}},{text:"昨天",value:function(){var t=new Date,e=new Date;return e.setTime(e.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-1))),t.setTime(t.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-1))),[e,t]}},{text:"最近7天",value:function(){var t=new Date,e=new Date;return e.setTime(e.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-6))),[e,t]}},{text:"最近30天",value:function(){var t=new Date,e=new Date;return e.setTime(e.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-29))),[e,t]}},{text:"本月",value:function(){var t=new Date,e=new Date;return e.setTime(e.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),1))),[e,t]}},{text:"本年",value:function(){var t=new Date,e=new Date;return e.setTime(e.setTime(new Date((new Date).getFullYear(),0,1))),[e,t]}}]}},3818:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Card",{staticClass:"ivu-mt box",attrs:{bordered:!1,"dis-hover":""}},[r("Form",{ref:"formValidate",attrs:{inline:"",model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[r("FormItem",{attrs:{label:"创建时间："}},[r("DatePicker",{staticStyle:{width:"250px"},attrs:{editable:!1,value:t.timeVal,format:"yyyy/MM/dd",type:"datetimerange",placement:"bottom-start",placeholder:"自定义时间",options:t.options},on:{"on-change":t.onchangeTime}})],1),r("FormItem",{attrs:{label:"选择门店："}},[r("Select",{staticStyle:{width:"250px"},attrs:{placeholder:"请选择",clearable:""},on:{"on-change":t.search},model:{value:t.formValidate.store_id,callback:function(e){t.$set(t.formValidate,"store_id",e)},expression:"formValidate.store_id"}},t._l(t.staff,(function(e,n){return r("Option",{attrs:{value:e.id}},[t._v(t._s(e.name))])})),1)],1),r("FormItem",{attrs:{label:"订单搜索：","label-for":"status1"}},[r("Input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入交易单号/交易人"},model:{value:t.formValidate.keyword,callback:function(e){t.$set(t.formValidate,"keyword",e)},expression:"formValidate.keyword"}})],1),r("FormItem",[r("Button",{staticStyle:{"margin-left":"-75px","margin-right":"14px"},attrs:{type:"primary"},on:{click:function(e){return t.search()}}},[t._v("查询")]),r("Button",{on:{click:t.exports}},[t._v("导出")])],1)],1)],1),r("Card",{staticClass:"ive-mt tablebox",attrs:{bordered:!1,"dis-hover":"",padding:20}},[r("div",{staticClass:"table"},[r("Table",{ref:"table",attrs:{columns:t.columns,data:t.orderList,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"number",fn:function(e){var n=e.row;e.index;return[0==n.pm?r("span",{staticClass:"colorgreen"},[t._v("- "+t._s(n.number))]):t._e(),1==n.pm?r("span",{staticClass:"colorred"},[t._v("+ "+t._s(n.number))]):t._e()]}},{key:"user_nickname",fn:function(e){var n=e.row;e.index;return[r("span",[t._v(t._s(n.uid?n.user_nickname:"游客"))])]}},{key:"action",fn:function(e){var n=e.row;e.index;return[r("a",{on:{click:function(e){return t.remark(n)}}},[t._v("备注")])]}}])})],1),r("div",{staticClass:"acea-row row-right page"},[r("Page",{attrs:{total:t.total,current:t.formValidate.page,"show-elevator":"","show-total":"","page-size":t.formValidate.limit},on:{"on-change":t.pageChange}})],1)]),r("Modal",{staticClass:"order_box",attrs:{scrollable:"",title:"请修改内容",closable:!1,"mask-closable":!1},model:{value:t.modalmark,callback:function(e){t.modalmark=e},expression:"modalmark"}},[r("Form",{ref:"remarks",attrs:{model:t.remarks,"label-width":80},nativeOn:{submit:function(t){t.preventDefault()}}},[r("FormItem",{attrs:{label:"备注："}},[r("Input",{staticStyle:{width:"100%"},attrs:{maxlength:"200","show-word-limit":"",type:"textarea",placeholder:"请填写备注~"},model:{value:t.remarks.mark,callback:function(e){t.$set(t.remarks,"mark",e)},expression:"remarks.mark"}})],1)],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("Button",{attrs:{type:"primary"},on:{click:function(e){return t.putRemark()}}},[t._v("提交")]),r("Button",{on:{click:function(e){return t.cancel()}}},[t._v("取消")])],1)],1)],1)},a=[],o=r("a34a"),i=r.n(o),u=r("2f62"),c=r("73f5"),s=r("2e83"),l=r("0b65");function d(t,e,r,n,a,o,i){try{var u=t[o](i),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,a)}function m(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function i(t){d(o,n,a,i,u,"next",t)}function u(t){d(o,n,a,i,u,"throw",t)}i(void 0)}))}}function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(r,!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var g={name:"order",data:function(){return{modalmark:!1,remarks:{mark:""},staff:[],total:0,grid:{xl:7,lg:7,md:12,sm:24,xs:24},loading:!1,columns:[{title:"交易单号",key:"order_id",minWidth:180},{title:"关联订单",key:"link_id",minWidth:180},{title:"交易时间",key:"trade_time",minWidth:150},{title:"交易金额",slot:"number",minWidth:80},{title:"交易人",slot:"user_nickname",ellipsis:!0,minWidth:80},{title:"关联店员",key:"staff_name",minWidth:80},{title:"交易类型",key:"type_name",minWidth:80},{title:"支付方式",key:"pay_type_name",minWidth:80},{title:"备注",key:"remark",minWidth:120},{title:"操作",slot:"action",fixed:"right",minWidth:80,align:"center"}],orderList:[],formValidate:{store_id:"",keyword:"",data:"",page:1,limit:20},timeVal:[],options:l["a"]}},computed:h({},Object(u["e"])("admin/layout",["isMobile"]),{labelWidth:function(){return this.isMobile?void 0:80},labelPosition:function(){return this.isMobile?"top":"left"}}),mounted:function(){this.getList(),this.staffApi()},methods:{getList:function(){var t=this;this.loading=!0,Object(c["B"])(this.formValidate).then((function(e){t.orderList=e.data.list,t.total=e.data.count,t.loading=!1}))},staffApi:function(){var t=this;Object(c["u"])().then((function(e){t.staff=e.data}))},search:function(){this.formValidate.page=1,this.getList()},reset:function(){this.formValidate={store_id:"",keyword:"",data:"",page:1,limit:20},this.timeVal=[],this.getList()},selectChange:function(t){this.formValidate.page=1,this.formValidate.data=t,this.timeVal=[],this.getList()},onchangeTime:function(t){this.timeVal=t,this.formValidate.data=this.timeVal[0]?this.timeVal.join("-"):"",this.formValidate.page=1,this.getList()},pageChange:function(t){this.formValidate.page=t,this.getList()},remark:function(t){this.remarkId=t.id,this.modalmark=!0,this.remarks.mark=t.remark},putRemark:function(){var t=this;this.modalmark=!1,Object(c["C"])(this.remarkId,this.remarks).then((function(e){t.$Message.success(e.msg),t.remarks={mark:""},t.modalmark=!1,t.getList()})).catch((function(e){t.$Message.error(e.msg),t.modalmark=!1}))},cancel:function(){this.remarks={mark:""},this.modalmark=!1},exports:function(){var t=m(i.a.mark((function t(){var e,r,n,a,o,u,c,l;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=[],r=[],n=[],a="",o=this.formValidate.store_id,u=this.formValidate.keyword,c=this.formValidate.data,t.next=4,this.getExcelData(o,u,c);case 4:l=t.sent,a||(a=l.filename),r=l.filekey,e.length||(e=l.header),n=n.concat(l.export),Object(s["a"])(e,r,a,n);case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getExcelData:function(t,e,r){return new Promise((function(n,a){Object(c["b"])(t,e,r).then((function(t){return n(t.data)}))}))}}},b=g,w=(r("86ec"),r("2877")),k=Object(w["a"])(b,n,a,!1,null,"e2351f40",null);e["default"]=k.exports},"73f5":function(t,e,r){"use strict";r.d(e,"u",(function(){return a})),r.d(e,"n",(function(){return o})),r.d(e,"j",(function(){return i})),r.d(e,"m",(function(){return u})),r.d(e,"o",(function(){return c})),r.d(e,"p",(function(){return s})),r.d(e,"f",(function(){return l})),r.d(e,"e",(function(){return d})),r.d(e,"K",(function(){return m})),r.d(e,"d",(function(){return f})),r.d(e,"r",(function(){return h})),r.d(e,"q",(function(){return p})),r.d(e,"s",(function(){return g})),r.d(e,"l",(function(){return b})),r.d(e,"B",(function(){return w})),r.d(e,"C",(function(){return k})),r.d(e,"z",(function(){return v})),r.d(e,"A",(function(){return O})),r.d(e,"c",(function(){return j})),r.d(e,"w",(function(){return y})),r.d(e,"x",(function(){return D})),r.d(e,"y",(function(){return _})),r.d(e,"J",(function(){return x})),r.d(e,"E",(function(){return V})),r.d(e,"D",(function(){return F})),r.d(e,"a",(function(){return P})),r.d(e,"I",(function(){return T})),r.d(e,"h",(function(){return C})),r.d(e,"F",(function(){return M})),r.d(e,"G",(function(){return W})),r.d(e,"H",(function(){return L})),r.d(e,"g",(function(){return I})),r.d(e,"k",(function(){return S})),r.d(e,"v",(function(){return E})),r.d(e,"i",(function(){return Y})),r.d(e,"t",(function(){return B})),r.d(e,"b",(function(){return $}));var n=r("b6bd");function a(t){return Object(n["a"])({url:"merchant/store_list",method:"get",params:t})}function o(t){return Object(n["a"])({url:"store/order/list",method:"get",params:t})}function i(t){return Object(n["a"])({url:"store/order/chart",method:"get",params:t})}function u(t){return Object(n["a"])({url:"store/order/header",method:"get"})}function c(t){return Object(n["a"])({url:"store/recharge",method:"get",params:t})}function s(t){return Object(n["a"])({url:"store/vip_order",method:"get",params:t})}function l(t){return Object(n["a"])({url:"store/order/edit/".concat(t),method:"get"})}function d(t){return Object(n["a"])({url:"store/order/distribution/".concat(t),method:"get"})}function m(t){return Object(n["a"])({url:"store/order/write_update/".concat(t),method:"put"})}function f(t){return Object(n["a"])({url:"store/order/info/".concat(t),method:"get"})}function h(t){return Object(n["a"])({url:"order/remark/".concat(t.id),method:"put",data:t.remark})}function p(t){return Object(n["a"])({url:"store/recharge/remark/".concat(t.id),method:"put",data:t.remark})}function g(t){return Object(n["a"])({url:"store/vip/remark/".concat(t.id),method:"put",data:t.remark})}function b(t,e){return Object(n["a"])({url:"store/order/export/".concat(e),method:"post",data:t})}function w(t){return Object(n["a"])({url:"store/finance_flow/list",method:"get",params:t})}function k(t,e){return Object(n["a"])({url:"store/finance_flow/mark/".concat(t),method:"put",params:e})}function v(t){return Object(n["a"])({url:"store/finance_flow/fund_record",method:"get",params:t})}function O(t){return Object(n["a"])({url:"store/finance_flow/fund_record_info",method:"get",params:t})}function j(t){return Object(n["a"])({url:"/export/storeFinanceRecord",method:"get",params:t})}function y(t){return Object(n["a"])({url:"/store/extract/list",method:"get",params:t})}function D(t,e){return Object(n["a"])({url:"store/extract/mark/".concat(t),method:"post",data:e})}function _(t,e){return Object(n["a"])({url:"store/extract/verify/".concat(t),method:"post",data:e})}function x(t){return Object(n["a"])({url:"store/extract/transfer/".concat(t),method:"get"})}function V(t){return Object(n["a"])({url:"store/store",method:"get",params:t})}function F(t){return Object(n["a"])({url:"store/store/get_info/".concat(t),method:"get"})}function P(t){return Object(n["a"])({url:"city",method:"get",params:t})}function T(t,e){return Object(n["a"])({url:"store/store/".concat(t),method:"post",params:e})}function C(){return Object(n["a"])({url:"store/store/address",method:"get"})}function M(t){return Object(n["a"])({url:"store/store/login/".concat(t),method:"get"})}function W(t,e){return Object(n["a"])({url:"store/store/set_show/".concat(t,"/").concat(e),method:"put"})}function L(t){return Object(n["a"])({url:"store/share/order",method:"post",params:t})}function I(t){return Object(n["a"])({url:"store/home/header",method:"get",params:t})}function S(t){return Object(n["a"])({url:"store/home/orderChart",method:"get",params:t})}function E(t){return Object(n["a"])({url:"store/home/store",method:"get",params:t})}function Y(t){return Object(n["a"])({url:"store/home/operate",method:"get",params:t})}function B(t){return Object(n["a"])({url:"store/store/reset_admin/".concat(t),method:"get"})}function $(t,e,r){return Object(n["a"])({url:"export/storeFlowExport?store_id=".concat(t,"&keyword=").concat(e,"&data=").concat(r),method:"get"})}},"86ec":function(t,e,r){"use strict";var n=r("c6d4"),a=r.n(n);a.a},c6d4:function(t,e,r){}}]);