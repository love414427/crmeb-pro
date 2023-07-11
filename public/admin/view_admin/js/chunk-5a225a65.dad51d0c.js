(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a225a65"],{"49ba":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":"",padding:0}},[r("div",{staticClass:"new_card_pd"},[r("Form",{ref:"tableFrom",attrs:{inline:"",model:t.tableFrom,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[r("FormItem",{attrs:{label:"活动状态：",clearable:""}},[r("Select",{staticStyle:{width:"250px"},attrs:{placeholder:"请选择",clearable:""},model:{value:t.tableFrom.start_status,callback:function(e){t.$set(t.tableFrom,"start_status",e)},expression:"tableFrom.start_status"}},[r("Option",{attrs:{value:"0"}},[t._v("未开始")]),r("Option",{attrs:{value:"1"}},[t._v("进行中")]),r("Option",{attrs:{value:"-1"}},[t._v("已结束")])],1)],1),r("FormItem",{attrs:{label:"上架状态："}},[r("Select",{staticStyle:{width:"250px"},attrs:{placeholder:"请选择",clearable:""},model:{value:t.tableFrom.status,callback:function(e){t.$set(t.tableFrom,"status",e)},expression:"tableFrom.status"}},[r("Option",{attrs:{value:"1"}},[t._v("上架")]),r("Option",{attrs:{value:"0"}},[t._v("下架")])],1)],1),r("FormItem",{attrs:{label:"商品搜索：","label-for":"store_name"}},[r("Input",{staticStyle:{width:"250px","margin-right":"14px"},attrs:{placeholder:"请输入砍价名称，ID"},model:{value:t.tableFrom.store_name,callback:function(e){t.$set(t.tableFrom,"store_name",e)},expression:"tableFrom.store_name"}}),r("Button",{staticStyle:{"margin-right":"14px"},attrs:{type:"primary"},on:{click:function(e){return t.userSearchs()}}},[t._v("查询")]),r("Button",{directives:[{name:"auth",rawName:"v-auth",value:["export-storeBargain"],expression:"['export-storeBargain']"}],staticClass:"export",on:{click:t.exports}},[t._v("导出")])],1)],1)],1)]),r("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[r("Button",{directives:[{name:"auth",rawName:"v-auth",value:["marketing-store_bargain-create"],expression:"['marketing-store_bargain-create']"}],staticClass:"mr10",attrs:{type:"primary"},on:{click:t.add}},[t._v("添加砍价商品")]),r("Table",{staticClass:"ivu-mt",attrs:{columns:t.columns1,data:t.tableList,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"is_fail",fn:function(t){var e=t.row;return[1===e.is_fail?r("Icon",{attrs:{type:"md-checkmark",color:"#0092DC",size:"14"}}):r("Icon",{attrs:{type:"md-close",color:"#ed5565",size:"14"}})]}},{key:"image",fn:function(t){var e=t.row;return[r("viewer",[r("div",{staticClass:"tabBox_img"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"row.image"}]})])])]}},{key:"bargain_min_price",fn:function(e){var a=e.row;return[r("span",[t._v(t._s(a.bargain_min_price)+"~"+t._s(a.bargain_max_price))])]}},{key:"title",fn:function(e){var a=e.row;return[r("Tooltip",{attrs:{"max-width":"200",placement:"bottom"}},[r("span",{staticClass:"line2"},[t._v(t._s(a.title))]),r("p",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(a.title))])])]}},{key:"status_item",fn:function(e){var r=e.row;return[t._v("\n        "+t._s(t._f("filterStatus")(r))+"\n      ")]}},{key:"start_name",fn:function(e){var a=e.row;return[r("Tag",{directives:[{name:"show",rawName:"v-show",value:"未开始"===a.start_name,expression:"row.start_name === '未开始'"}],attrs:{color:"orange",size:"large"}},[t._v(t._s(a.start_name))]),r("Tag",{directives:[{name:"show",rawName:"v-show",value:"进行中"===a.start_name,expression:"row.start_name === '进行中'"}],attrs:{color:"green",size:"large"}},[t._v(t._s(a.start_name))]),r("Tag",{directives:[{name:"show",rawName:"v-show",value:"已结束"===a.start_name,expression:"row.start_name === '已结束'"}],attrs:{color:"default",size:"large"}},[t._v(t._s(a.start_name))])]}},{key:"stop_time",fn:function(e){var a=e.row;return[r("span",[t._v(" "+t._s(t._f("formatDate")(a.stop_time)))])]}},{key:"status",fn:function(e){var a=e.row;return[r("i-switch",{attrs:{value:a.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeIsShow(a)}},model:{value:a.status,callback:function(e){t.$set(a,"status",e)},expression:"row.status"}},[r("span",{attrs:{slot:"open"},slot:"open"},[t._v("上架")]),r("span",{attrs:{slot:"close"},slot:"close"},[t._v("下架")])])]}},{key:"action",fn:function(e){var a=e.row,n=e.index;return[0===a.stop_status?r("a",{on:{click:function(e){return t.edit(a)}}},[t._v("编辑")]):t._e(),0===a.stop_status?r("Divider",{attrs:{type:"vertical"}}):t._e(),r("a",{on:{click:function(e){return t.copy(a)}}},[t._v("复制")]),r("Divider",{attrs:{type:"vertical"}}),r("a",{on:{click:function(e){return t.del(a,"删除砍价商品",n)}}},[t._v("删除")])]}}])}),r("div",{staticClass:"acea-row row-right page"},[r("Page",{attrs:{total:t.total,current:t.tableFrom.page,"show-elevator":"","show-total":"","page-size":t.tableFrom.limit},on:{"on-change":t.pageChange}})],1)],1)],1)},n=[],s=r("a34a"),i=r.n(s),o=r("2f62"),c=r("b7be"),l=r("61f7"),u=r("2e83");function p(t,e,r,a,n,s,i){try{var o=t[s](i),c=o.value}catch(l){return void r(l)}o.done?e(c):Promise.resolve(c).then(a,n)}function m(t){return function(){var e=this,r=arguments;return new Promise((function(a,n){var s=t.apply(e,r);function i(t){p(s,a,n,i,o,"next",t)}function o(t){p(s,a,n,i,o,"throw",t)}i(void 0)}))}}function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(r,!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d={name:"storeBargain",filters:{formatDate:function(t){if(0!==t){var e=new Date(1e3*t);return Object(l["a"])(e,"yyyy-MM-dd hh:mm")}},filterStatus:function(t){var e=Date.parse(new Date)/1e3;return t.start_time<e&&t.stop_time>e&&1==t.status?"活动进行中":t.stop_time<e&&1==t.status?"活动已结束":"活动未开始"}},data:function(){return{loading:!1,columns1:[{title:"ID",key:"id",width:80},{title:"砍价图片",slot:"image",minWidth:90},{title:"砍价名称",slot:"title",minWidth:150},{title:"砍价价格",key:"price",minWidth:100},{title:"最低价",key:"min_price",minWidth:100},{title:"参与人数",key:"count_people_all",minWidth:100},{title:"帮忙砍价人数",key:"count_people_help",minWidth:100},{title:"砍价成功人数",key:"count_people_success",minWidth:100},{title:"限量",key:"quota_show",minWidth:80},{title:"限量剩余",key:"quota",minWidth:80},{title:"活动状态",slot:"start_name",minWidth:100},{title:"结束时间",slot:"stop_time",minWidth:150},{title:"上架状态",slot:"status",minWidth:130},{title:"操作",slot:"action",minWidth:130}],tableList:[],grid:{xl:7,lg:10,md:12,sm:24,xs:24},tableFrom:{start_status:"",status:"",store_name:"",export:0,page:1,limit:15},tableFrom2:{status:"",store_name:"",export:1},total:0}},computed:h({},Object(o["e"])("admin/layout",["isMobile"]),{labelWidth:function(){return this.isMobile?void 0:96},labelPosition:function(){return this.isMobile?"top":"right"}}),created:function(){this.getList()},methods:{add:function(){this.$router.push({path:"/admin/marketing/store_bargain/create"})},exports:function(){var t=m(i.a.mark((function t(){var e,r,a,n,s,o,c;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=[],r=[],a=[],n="",s=JSON.parse(JSON.stringify(this.tableFrom)),s.page=1,o=0;case 4:if(!(o<s.page+1)){t.next=21;break}return t.next=7,this.getExcelData(s);case 7:if(c=t.sent,n||(n=c.filename),r.length||(r=c.filekey),e.length||(e=c.header),!c.export.length){t.next=16;break}a=a.concat(c.export),s.page++,t.next=18;break;case 16:return Object(u["a"])(e,r,n,a),t.abrupt("return");case 18:o++,t.next=4;break;case 21:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getExcelData:function(t){return new Promise((function(e,r){Object(c["db"])(t).then((function(t){return e(t.data)}))}))},edit:function(t){this.$router.push({path:"/admin/marketing/store_bargain/create/"+t.id+"/0"})},copy:function(t){this.$router.push({path:"/admin/marketing/store_bargain/create/"+t.id+"/1"})},del:function(t,e,r){var a=this,n={title:e,num:r,url:"marketing/bargain/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(n).then((function(t){a.$Message.success(t.msg),a.tableList.splice(r,1)})).catch((function(t){a.$Message.error(t.msg)}))},getList:function(){var t=this;this.loading=!0,this.tableFrom.start_status=this.tableFrom.start_status||"",this.tableFrom.status=this.tableFrom.status||"",Object(c["c"])(this.tableFrom).then(function(){var e=m(i.a.mark((function e(r){var a;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=r.data,t.tableList=a.list,t.total=r.data.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},pageChange:function(t){this.tableFrom.page=t,this.getList()},userSearchs:function(){this.tableFrom.page=1,this.getList()},onchangeIsShow:function(t){var e=this,r={id:t.id,status:t.status};parseInt(t.status)?Object(c["d"])(r).then(function(){var t=m(i.a.mark((function t(r){return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$Message.success(r.msg);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)})):this.$Modal.confirm({title:"您确定要下架【"+t.title+"】商品吗？",content:"下架将会删除前台用户已砍的所有记录，所有用户将重新发起砍价,您确定要这样操作吗？",okText:"我想好了，确定要下架",cancelText:"取消下架操作",onOk:function(){Object(c["d"])(r).then(function(){var t=m(i.a.mark((function t(r){return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$Message.success(r.msg);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},onCancel:function(){t.status=1}})}}},v=d,b=(r("d719"),r("2877")),_=Object(b["a"])(v,a,n,!1,null,"2503862f",null);e["default"]=_.exports},"540c":function(t,e,r){},"61f7":function(t,e,r){"use strict";function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(r,!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var r={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var a in r)if(new RegExp("(".concat(a,")")).test(e)){var n=r[a]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?n:o(n))}return e}function o(t){return("00"+t).substr(t.length)}r.d(e,"a",(function(){return i})),r.d(e,"c",(function(){return u})),r.d(e,"b",(function(){return p}));var c={min:"%s最小长度为:min",max:"%s最大长度为:max",length:"%s长度必须为:length",range:"%s长度为:range",pattern:"$s格式错误"};var l=function(t,e){t.message=function(t){return e.replace("%s",t||"")}};function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n({required:!0,message:t,type:"string"},e)}function p(t){return m.pattern(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,t)}l(u,"请输入%s"),l(p,"%s格式不正确");var m=Object.keys(c).reduce((function(t,e){return t[e]=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i="range"===e?{min:t[0],max:t[1]}:s({},e,t);return n({message:r.replace(":".concat(e),"range"===e?"".concat(t[0],"-").concat(t[1]):t),type:"string"},i,{},a)},l(t[e],c[e]),t}),{})},d719:function(t,e,r){"use strict";var a=r("540c"),n=r.n(a);n.a}}]);