(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0cec2b62"],{"277f":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"a",(function(){return c})),e.d(n,"c",(function(){return u})),e.d(n,"d",(function(){return i}));var r=e("b6bd");function a(t){return Object(r["a"])({url:"setting/notification/index?type=".concat(t),method:"get"})}function c(t,n){return Object(r["a"])({url:"setting/notification/info?id=".concat(t,"&type=").concat(n),method:"get"})}function u(t){return Object(r["a"])({url:"setting/notification/save",method:"post",data:t})}function i(t,n,e){return Object(r["a"])({url:"setting/notification/set_status/".concat(t,"/").concat(n,"/").concat(e),method:"put"})}},"5cd8":function(t,n,e){},7937:function(t,n,e){"use strict";var r=e("5cd8"),a=e.n(r);a.a},aa0a:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"message"},[e("div",{staticClass:"i-layout-page-header"},[e("div",{staticClass:"table-box"},[e("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[e("div",{staticClass:"new_tab"},[e("Tabs",{on:{"on-click":t.changeTab},model:{value:t.currentTab,callback:function(n){t.currentTab=n},expression:"currentTab"}},t._l(t.headerList,(function(t,n){return e("TabPane",{key:n,attrs:{label:t.label,name:t.value.toString()}})})),1)],1),1==t.currentTab?e("Row",{staticClass:"mb20",attrs:{type:"flex"}},[e("Col",[e("Button",{directives:[{name:"auth",rawName:"v-auth",value:["app-wechat-template-sync"],expression:"['app-wechat-template-sync']"}],staticStyle:{"margin-left":"20px"},attrs:{type:"success"},on:{click:t.syncTemplate}},[t._v("同步小程序订阅消息")]),e("Button",{directives:[{name:"auth",rawName:"v-auth",value:["app-wechat-wechat-sync"],expression:"['app-wechat-wechat-sync']"}],staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:t.wechatTemplate}},[t._v("同步公众号模板消息")])],1)],1):t._e(),t.industry?e("Alert",{attrs:{closable:""}},[e("template",{slot:"desc"},[e("div",[t._v("\n                主营行业："+t._s(t.industry.primary_industry.first_class?t.industry.primary_industry.first_class+"||":t.industry.primary_industry)+"\n                "+t._s(t.industry.primary_industry.second_class?t.industry.primary_industry.second_class:"")+"\n              ")]),e("div",[t._v("\n                副营行业："+t._s(t.industry.secondary_industry.first_class?t.industry.primary_industry.first_class+"||":t.industry.primary_industry)+"\n                "+t._s(t.industry.primary_industry.second_class?t.industry.primary_industry.second_class:"")+"\n              ")]),e("div",[t._v("注意：小程序需选择生活服务/百货/超市/便利店类目，否则不能同步小程序订阅消息")])])],2):t._e(),e("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns,data:t.levelLists,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"name",fn:function(n){var r=n.row;n.index;return[e("span",{staticClass:"table"},[t._v("\n                "+t._s(r.name)+"\n              ")])]}},{key:"title",fn:function(n){var r=n.row;n.index;return[e("span",{staticClass:"table"},[t._v(t._s(r.title))])]}},t._l(["is_system","is_wechat","is_routine","is_sms","is_ent_wechat"],(function(n,r){return{key:n,fn:function(r){var a=r.row;r.index;return[a[n]>0?e("i-switch",{attrs:{value:a[n],"true-value":1,"false-value":2,size:"large"},on:{"on-change":function(e){return t.changeSwitch(a,n)}},model:{value:a[n],callback:function(e){t.$set(a,n,e)},expression:"row[item]"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("开启")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("关闭")])]):t._e()]}}})),{key:"setting",fn:function(n){var r=n.row;n.index;return[e("span",{staticClass:"setting btn",on:{click:function(n){return t.setting(t.item,r)}}},[t._v("设置")])]}}],null,!0)})],1)],1)])])},a=[],c=e("277f"),u=e("b562"),i={data:function(){return{modalTitle:"",notificationModal:!1,headerList:[{label:"通知会员",value:"1"},{label:"通知平台",value:"2"}],columns:[{title:"ID",key:"id",align:"center",width:50},{title:"通知类型",slot:"name",align:"center",width:200},{title:"通知场景说明",slot:"title",align:"center",minWidth:200},{title:"站内信",slot:"is_system",align:"center",minWidth:100},{title:"公众号模板",slot:"is_wechat",align:"center",minWidth:100},{title:"小程序订阅",slot:"is_routine",align:"center",minWidth:100},{title:"发送短信",slot:"is_sms",align:"center",minWidth:100},{title:"企业微信",slot:"is_ent_wechat",align:"center",minWidth:100},{title:"设置",slot:"setting",width:150,align:"center"}],levelLists:[],currentTab:"1",loading:!1,formData:{},industry:null}},created:function(){this.changeTab(this.currentTab)},methods:{changeSwitch:function(t,n){var e=this;Object(c["d"])(n,t[n],t.id).then((function(t){e.$Message.success(t.msg)})).catch((function(t){e.$Message.error(t.msg)}))},changeTab:function(t){var n=this;Object(c["b"])(t).then((function(t){n.levelLists=t.data.list,n.industry=t.data.industry}))},syncTemplate:function(){var t=this;Object(u["n"])().then((function(n){t.$Message.success(n.msg),t.changeTab(t.currentTab)})).catch((function(n){t.$Message.error(n.msg)}))},wechatTemplate:function(){var t=this;Object(u["D"])().then((function(n){t.$Message.success(n.msg),t.changeTab(t.currentTab)})).catch((function(n){t.$Message.error(n.msg)}))},changeStatus:function(){},notice:function(){},setting:function(t,n){this.$router.push({path:"/admin/setting/notification/notificationEdit?id="+n.id})},getData:function(t,n,e){var r=this;this.formData={},Object(c["a"])(n.id,e).then((function(n){t.map((function(t,e){r.formData[t]=n.data[t]})),r.formData.type=e,r.notificationModal=!0}))}}},o=i,s=(e("7937"),e("2877")),d=Object(s["a"])(o,r,a,!1,null,"153bd564",null);n["default"]=d.exports},b562:function(t,n,e){"use strict";e.d(n,"l",(function(){return a})),e.d(n,"n",(function(){return c})),e.d(n,"D",(function(){return u})),e.d(n,"h",(function(){return i})),e.d(n,"j",(function(){return o})),e.d(n,"m",(function(){return s})),e.d(n,"y",(function(){return d})),e.d(n,"a",(function(){return l})),e.d(n,"x",(function(){return f})),e.d(n,"s",(function(){return p})),e.d(n,"t",(function(){return h})),e.d(n,"C",(function(){return m})),e.d(n,"g",(function(){return b})),e.d(n,"i",(function(){return g})),e.d(n,"k",(function(){return y})),e.d(n,"d",(function(){return w})),e.d(n,"e",(function(){return _})),e.d(n,"f",(function(){return v})),e.d(n,"z",(function(){return j})),e.d(n,"B",(function(){return O})),e.d(n,"A",(function(){return T})),e.d(n,"H",(function(){return k})),e.d(n,"o",(function(){return E})),e.d(n,"c",(function(){return x})),e.d(n,"G",(function(){return G})),e.d(n,"E",(function(){return C})),e.d(n,"F",(function(){return S})),e.d(n,"w",(function(){return $})),e.d(n,"u",(function(){return D})),e.d(n,"v",(function(){return M})),e.d(n,"p",(function(){return W})),e.d(n,"b",(function(){return L})),e.d(n,"r",(function(){return P})),e.d(n,"q",(function(){return B}));var r=e("b6bd");function a(t){return Object(r["a"])({url:"app/routine",method:"get",params:t})}function c(){return Object(r["a"])({url:"app/routine/syncSubscribe",method:"GET"})}function u(){return Object(r["a"])({url:"app/wechat/syncSubscribe",method:"GET"})}function i(){return Object(r["a"])({url:"app/routine/create",method:"get"})}function o(t){return Object(r["a"])({url:"app/routine/".concat(t,"/edit"),method:"get"})}function s(t){return Object(r["a"])({url:"app/routine/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function d(t){return Object(r["a"])({url:"app/wechat/menu",method:"get"})}function l(t){return Object(r["a"])({url:"app/wechat/menu",method:"post",data:t})}function f(t){return Object(r["a"])({url:"app/wechat/template",method:"get",params:t})}function p(){return Object(r["a"])({url:"app/wechat/template/create",method:"get"})}function h(t){return Object(r["a"])({url:"app/wechat/template/".concat(t,"/edit"),method:"get"})}function m(t){return Object(r["a"])({url:"app/wechat/template/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function b(t){return Object(r["a"])({url:t.url,method:"post",data:t.key})}function g(t){return Object(r["a"])({url:"app/routine/download",method:"post",data:t})}function y(){return Object(r["a"])({url:"app/routine/info",method:"get"})}function w(t){return Object(r["a"])({url:"app/wechat/keyword",method:"get",params:t})}function _(t){return Object(r["a"])({url:"app/wechat/keyword/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function v(t,n){return Object(r["a"])({url:t,method:"get",params:n.key})}function j(t){return Object(r["a"])({url:"/app/wechat/news",method:"POST",data:t})}function O(t){return Object(r["a"])({url:"app/wechat/news",method:"GET",params:t})}function T(t){return Object(r["a"])({url:"app/wechat/news/".concat(t),method:"GET"})}function k(t){return Object(r["a"])({url:"app/wechat/user",method:"GET",params:t})}function E(){return Object(r["a"])({url:"app/wechat/user/tag_group",method:"GET"})}function x(t){return Object(r["a"])({url:t,method:"GET"})}function G(){return Object(r["a"])({url:"app/wechat/tag",method:"GET"})}function C(){return Object(r["a"])({url:"app/wechat/tag/create",method:"GET"})}function S(t){return Object(r["a"])({url:"app/wechat/tag/".concat(t,"/edit"),method:"GET"})}function $(){return Object(r["a"])({url:"app/wechat/group",method:"GET"})}function D(){return Object(r["a"])({url:"app/wechat/group/create",method:"GET"})}function M(t){return Object(r["a"])({url:"app/wechat/group/".concat(t,"/edit"),method:"GET"})}function W(t){return Object(r["a"])({url:"app/wechat/action",method:"GET",params:t})}function L(t){return Object(r["a"])({url:"app/wechat/code_reply/".concat(t),method:"GET"})}function P(){return Object(r["a"])({url:"/app/wechat/card",method:"GET"})}function B(t){return Object(r["a"])({url:"/app/wechat/card",method:"post",data:t})}}}]);