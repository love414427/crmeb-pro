(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bdfa033"],{"7f9c":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":"",padding:0}},[a("div",{staticClass:"new_card_pd"},[a("Form",{ref:"LabelCateFrom",attrs:{inline:"",model:t.LabelCateFrom,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[a("Row",{attrs:{gutter:24,type:"flex",justify:"end"}},[a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"搜索："}},[a("Input",{staticStyle:{width:"250px","margin-right":"14px"},attrs:{placeholder:"标签名称、ID"},model:{value:t.LabelCateFrom.name,callback:function(e){t.$set(t.LabelCateFrom,"name",e)},expression:"LabelCateFrom.name"}}),a("Button",{attrs:{type:"primary"},on:{click:t.labelCateSearchs}},[t._v("查询")])],1)],1)],1)],1)],1)]),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Row",{attrs:{type:"flex"}},[a("Col",t._b({},"Col",t.grid,!1),[a("Button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("添加标签组")])],1)],1),a("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns1,data:t.list,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"labelName",fn:function(e){var i=e.row;e.index;return[a("div",{staticClass:"list acea-row"},[t._l(i.productLabel,(function(e,n){return a("div",{key:n,staticClass:"item acea-row row-center-wrapper mr10 mt5 mb5"},[t._v("\n            "+t._s(e.label_name)),a("span",{staticClass:"iconfont iconcha",on:{click:function(e){return t.delLabel(i.productLabel,"删除标签",n)}}})])})),i.isShow?a("Input",{staticClass:"mr10 mt5",staticStyle:{width:"150px"},attrs:{placeholder:"按回车键完成",maxlength:"20","show-word-limit":""},on:{"on-enter":function(e){return t.addLabel(i)}},model:{value:i.labelVal,callback:function(e){t.$set(i,"labelVal",e)},expression:"row.labelVal"}}):t._e(),a("div",{staticClass:"bnt acea-row row-center-wrapper mt5",on:{click:function(e){return t.addInput(i)}}},[a("span",{staticClass:"iconfont iconjiahao"})])],2)]}},{key:"action",fn:function(e){var i=e.row,n=e.index;return[a("a",{on:{click:function(e){return t.edit(i.id)}}},[t._v("编辑")]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.del(i,"删除标签组",n)}}},[t._v("删除")])]}}])}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:t.total,"show-elevator":"","show-total":"","page-size":t.LabelCateFrom.limit},on:{"on-change":t.pageChange}})],1)],1)],1)},n=[],r=a("2f62"),o=a("c4c8");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(a,!0).forEach((function(e){c(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var u={name:"label",data:function(){return{grid:{xl:7,lg:7,md:12,sm:24,xs:24},loading:!1,columns1:[{title:"ID",key:"id",width:60},{title:"标签分组",key:"name",minWidth:60},{title:"商品标签",slot:"labelName",minWidth:400},{title:"排序",key:"sort",width:60},{title:"创建时间",key:"add_time",minWidth:100},{title:"操作",slot:"action",fixed:"right",minWidth:120}],LabelCateFrom:{page:1,limit:15,name:""},list:[],total:0}},computed:s({},Object(r["e"])("admin/layout",["isMobile"]),{labelWidth:function(){return this.isMobile?void 0:96},labelPosition:function(){return this.isMobile?"top":"right"}}),created:function(){this.getList()},methods:{addLabel:function(t){var e=this,a={id:0,label_cate:t.id,label_name:t.labelVal};Object(o["N"])(a).then((function(t){e.getList()})).catch((function(t){e.$Message.error(t.msg)}))},addInput:function(t){t.isShow=!0},labelCateSearchs:function(){this.LabelCateFrom.page=1,this.list=[],this.getList()},add:function(){var t=this;this.$modalForm(Object(o["s"])()).then((function(){return t.getList()}))},getList:function(){var t=this;this.loading=!0,Object(o["P"])(this.LabelCateFrom).then((function(e){var a=e.data;a.list.forEach((function(t){t.isShow=!1,t.labelVal=""})),t.list=a.list,t.total=a.count,t.loading=!1})).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},pageChange:function(t){this.LabelCateFrom.page=t,this.getList()},edit:function(t){var e=this;this.$modalForm(Object(o["Q"])(t)).then((function(){return e.getList()}))},delLabel:function(t,e,a){var i=this,n={title:e,num:a,url:"product/label/".concat(t[a].id),method:"DELETE",ids:""};this.$modalSure(n).then((function(t){i.$Message.success(t.msg),i.getList()})).catch((function(t){i.$Message.error(t.msg)}))},del:function(t,e,a){var i=this,n={title:e,num:a,url:"product/label_cate/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(n).then((function(t){i.$Message.success(t.msg),i.list.splice(a,1),i.list.length||(i.LabelCateFrom.page=1==i.LabelCateFrom.page?1:i.LabelCateFrom.page-1),i.getList()})).catch((function(t){i.$Message.error(t.msg)}))}}},d=u,m=(a("dd55"),a("2877")),b=Object(m["a"])(d,i,n,!1,null,"6cb85c00",null);e["default"]=b.exports},"7fc7":function(t,e,a){},dd55:function(t,e,a){"use strict";var i=a("7fc7"),n=a.n(i);n.a}}]);