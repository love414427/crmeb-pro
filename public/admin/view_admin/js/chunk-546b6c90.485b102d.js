(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-546b6c90"],{"1be5":function(t,e,i){t.exports=i.p+"view_admin/img/pcbanner.23f05e2e.png"},"1fa1":function(t,e,i){t.exports=i.p+"view_admin/img/kefu.6c63578f.png"},"20e4":function(t,e,i){},"31b4":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.FromData?i("div",[i("Modal",{class:t.userEdit?"userEdit":"",attrs:{scrollable:"","footer-hide":"",closable:"",title:t.FromData.title,width:"700"},on:{"on-cancel":t.cancel},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[["/marketing/coupon/save.html"===t.FromData.action?i("div",{staticClass:"radio acea-row row-middle"},[i("div",{staticClass:"name ivu-form-item-content"},[t._v("优惠券类型")]),i("Radio-group",{on:{"on-change":t.couponsType},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[i("Radio",{attrs:{label:0}},[t._v("通用券")]),i("Radio",{attrs:{label:1}},[t._v("品类券")]),i("Radio",{attrs:{label:2}},[t._v("商品券")])],1)],1):t._e()],i("form-create",{ref:"fc",staticClass:"formBox",attrs:{option:t.config,rule:Array.from(t.FromData.rules),handleIcon:"false"},on:{"on-submit":t.onSubmit}})],2)],1):t._e()},s=[],n=i("9860"),o=i.n(n),r=i("b6bd"),c=i("2f62");function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(i,!0).forEach((function(e){u(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var p={name:"edit",components:{formCreate:o.a.$form()},computed:d({},Object(c["e"])("admin/userLevel",["taskId","levelId"])),props:{FromData:{type:Object,default:null},userEdit:{type:Number,default:0}},data:function(){return{modals:!1,type:0,config:{global:{upload:{props:{onSuccess:function(t,e){200===t.status?e.url=t.data.src:this.Message.error(t.msg)}}}}},isDisable:!1}},methods:{couponsType:function(){this.$parent.addType(this.type)},onSubmit:function(t){var e=this;if(setTimeout((function(){e.isDisable=!1}),1e3),!this.isDisable){this.isDisable=!0;var i={};i=t,Object(r["a"])({url:this.FromData.action,method:this.FromData.method,data:i}).then((function(t){e.$parent.getList(),e.$Message.success(t.msg),e.modals=!1,setTimeout((function(){e.$emit("submitFail")}),1e3)})).catch((function(t){e.$Message.error(t.msg)}))}},cancel:function(){this.type=0}}},m=p,f=(i("8b61"),i("2877")),g=Object(f["a"])(m,a,s,!1,null,"80656ec0",null);e["a"]=g.exports},"504e":function(t,e,i){"use strict";var a=i("20e4"),s=i.n(a);s.a},"8b61":function(t,e,i){"use strict";var a=i("a29b"),s=i.n(a);s.a},a29b:function(t,e,i){},a9d8:function(t,e,i){"use strict";var a=i("fcc1"),s=i.n(a);s.a},ce94:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("PageHeader",{staticClass:"product_tabs",attrs:{title:t.$route.meta.title,"hidden-breadcrumb":""}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("div",{staticStyle:{float:"left"}},[a("span",{staticClass:"mr20",domProps:{textContent:t._s(t.$route.meta.title)}})])])])],1),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Row",{staticClass:"ivu-mt box-wrapper"},[a("Col",{staticClass:"left-wrapper",attrs:{xs:24,sm:24,md:6,lg:3}},[a("div",{staticClass:"left_box"},[a("div",{staticClass:"left_cont",class:1==t.pageId?"on":"",on:{click:function(e){return t.menu(1)}}},[t._v("网站LOGO")]),a("div",{staticClass:"left_cont",class:"pc_home_banner"==t.pageId?"on":"",on:{click:function(e){return t.menu("pc_home_banner")}}},[t._v("首页轮播图")]),a("div",{staticClass:"left_cont",class:3==t.pageId?"on":"",on:{click:function(e){return t.menu(3)}}},[t._v("客服页面广告")])])]),a("div",{staticStyle:{display:"flex",width:"83%"}},[1==t.pageId||"pc_home_banner"==t.pageId?a("Col",{staticClass:"pciframe",attrs:{bordered:!1,"dis-hover":""}},[a("img",{staticClass:"pciframe-box",attrs:{src:i("1be5")}}),1==t.pageId?a("div",{staticClass:"logoimg"},[a("img",{attrs:{src:t.pclogo}})]):t._e(),"pc_home_banner"==t.pageId?a("div",{staticClass:"pcmoddile_goods"},[""==t.tabList.list?a("div",{staticClass:"nofonts"},[t._v("暂无照片，请添加~")]):a("swiper",{staticClass:"pcswiperimg_goods",attrs:{options:t.swiperOption}},t._l(t.tabList.list,(function(t,e){return a("swiper-slide",{staticClass:"spcwiperimg_goods"},[a("img",{attrs:{src:t.image}})])})),1)],1):t._e()]):t._e(),3==t.pageId?a("Col",{staticClass:"pciframe",attrs:{bordered:!1,"dis-hover":""}},[a("img",{staticClass:"pciframe-box",attrs:{src:i("1fa1")}}),a("div",{staticClass:"box3_sile"},[a("div",{domProps:{innerHTML:t._s(t.content)}})])]):t._e(),"pc_home_banner"==t.pageId?a("Col",[a("div",{staticClass:"content"},[a("div",{staticClass:"right-box"},[a("div",{staticClass:"hot_imgs"},[a("div",{staticClass:"title"},[t._v("轮播图设置")]),a("div",{staticClass:"title-text"},[t._v("建议尺寸：690 * 240px，拖拽图片可调整图片顺序哦，最多添加五张。")]),a("div",{staticClass:"title-text"},[t._v("除轮播图外，页面其他内容仅供参考")]),a("div",{staticClass:"list-box"},["pc_home_banner"==t.pageId?a("draggable",{staticClass:"dragArea list-group",attrs:{list:t.tabList.list,group:"peoples",handle:".move-icon"}},t._l(t.tabList.list,(function(e,i){return a("div",{key:i,staticClass:"item"},[a("div",{staticClass:"move-icon"},[a("span",{staticClass:"iconfont icondrag2"})]),a("div",{staticClass:"img-box imgBoxs",on:{click:function(e){return t.modalPicTap("单选",i)}}},[e.image?a("img",{attrs:{src:e.image,alt:""}}):a("div",{staticClass:"upload-box"},[a("Icon",{attrs:{type:"ios-camera-outline",size:"36"}})],1),a("div",{staticClass:"delect-btn",staticStyle:{"line-height":"0px"},on:{click:function(a){return a.stopPropagation(),t.bindDelete(e,i)}}},[a("Icon",{attrs:{type:"md-close-circle",size:"26"}})],1)]),a("div",{staticClass:"info"},[a("div",{staticClass:"info-item"},[a("span",[t._v("图片名称：")]),a("div",{staticClass:"input-box"},[a("Input",{attrs:{placeholder:"请填写名称"},model:{value:e.title,callback:function(i){t.$set(e,"title",i)},expression:"item.title"}})],1)]),a("div",{staticClass:"info-item"},[a("span",[t._v("链接地址：")]),a("div",{staticClass:"input-box"},[a("Input",{attrs:{placeholder:"选择链接"},model:{value:e.url,callback:function(i){t.$set(e,"url",i)},expression:"item.url"}})],1)])])])})),0):t._e(),a("div",[a("Modal",{attrs:{width:"960px",scrollable:"","footer-hide":"",closable:"",title:"上传商品图","mask-closable":!1,"z-index":999},model:{value:t.modalPic,callback:function(e){t.modalPic=e},expression:"modalPic"}},[t.modalPic?a("uploadPictures",{attrs:{isChoice:t.isChoice,gridBtn:t.gridBtn,gridPic:t.gridPic},on:{getPic:t.getPic}}):t._e()],1)],1)],1),[a("div",{staticClass:"add-btn"},[a("Button",{staticStyle:{width:"100px",height:"35px","background-color":"#1890FF",color:"#FFFFFF"},attrs:{type:"primary",ghost:""},on:{click:t.addBox}},[t._v("添加图片\n\t\t\t\t\t\t\t\t\t               ")])],1)]],2)])])]):t._e(),1==t.pageId?a("Col",[a("div",{staticClass:"content"},[a("div",{staticClass:"right-box"},[a("div",{staticClass:"hot_imgs"},[a("div",{staticClass:"title"},[t._v("页面设置")]),a("div",{staticClass:"title-text"},[t._v("建议尺寸：690 * 240px")]),a("div",{staticClass:"title-text"},[t._v("除LOGO图标外，页面其他内容仅供参考")]),a("div",{staticClass:"list-box"},[a("div",{staticClass:"img-boxs",on:{click:function(e){return t.modalPicTap("单选",0)}}},[a("img",{attrs:{src:t.pclogo,alt:""}}),a("div",{staticClass:"img_font"}),a("div",{staticClass:"img_fonts"},[t._v("更换图片")])]),a("div",[a("Modal",{attrs:{width:"960px",scrollable:"","footer-hide":"",closable:"",title:"上传商品图","mask-closable":!1,"z-index":999},model:{value:t.modalPic,callback:function(e){t.modalPic=e},expression:"modalPic"}},[t.modalPic?a("uploadPictures",{attrs:{isChoice:t.isChoice,gridBtn:t.gridBtn,gridPic:t.gridPic},on:{getPic:t.getPic}}):t._e()],1)],1)])])])])]):t._e(),3==t.pageId?a("Col",{staticStyle:{"margin-left":"40px"},attrs:{xs:24,sm:24,md:12,lg:14}},[a("div",{staticClass:"table_box"},[a("Row",{attrs:{type:"flex"}},[a("Col",t._b({},"Col",t.grid,!1),[a("div",{staticClass:"title"},[t._v("客户页面广告展示：：")])])],1),a("div",[a("Form",{ref:"formValidate",staticClass:"form",attrs:{model:t.formValidate,rules:t.ruleValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[a("div",{staticClass:"goodsTitle acea-row"}),a("FormItem",{staticStyle:{margin:"0px"},attrs:{label:""}},[a("WangEditor",{staticStyle:{width:"90%"},attrs:{content:t.formValidate.content},on:{editorContent:t.getEditorContent}})],1)],1)],1)],1)]):t._e()],1)],1)],1),a("Card",{staticClass:"fixed-card",style:{left:t.menuCollapse?t.isMobile?"0":"80px":"200px"},attrs:{bordered:!1,"dis-hover":""}},[a("div",{staticClass:"acea-row row-center-wrapper"},[a("Button",{staticClass:"bnt",attrs:{type:"primary"},on:{click:t.save}},[t._v("保存")])],1)]),a("linkaddress",{ref:"linkaddres",on:{linkUrl:t.linkUrl}})],1)},s=[],n=i("a34a"),o=i.n(n),r=i("2f62"),c=i("a069"),l=(i("f478"),i("31b4")),d=i("8593"),u=i("310e"),p=i.n(u),m=i("b0e7"),f=i("7af3");function g(t,e,i,a,s,n,o){try{var r=t[n](o),c=r.value}catch(l){return void i(l)}r.done?e(c):Promise.resolve(c).then(a,s)}function b(t){return function(){var e=this,i=arguments;return new Promise((function(a,s){var n=t.apply(e,i);function o(t){g(n,a,s,o,r,"next",t)}function r(t){g(n,a,s,o,r,"throw",t)}o(void 0)}))}}function h(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function v(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?h(i,!0).forEach((function(e){_(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):h(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function _(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var C={name:"list",components:{editFrom:l["a"],draggable:p.a,uploadPictures:m["a"],linkaddress:f["a"],WangEditor:c["a"]},data:function(){return{ruleValidate:{},formValidate:{content:""},content:"",pclogo:"",grid:{xl:7,lg:7,md:12,sm:24,xs:24},swiperOption:{pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:2e3,disableOnInteraction:!1},loop:!1},pageId:1,tabList:[],lastObj:{add_time:"",config_name:"",id:"",image:"",sort:1,status:1,title:"",url:""},isChoice:"单选",modalPic:!1,gridPic:{xl:6,lg:8,md:12,sm:12,xs:12},gridBtn:{xl:4,lg:8,md:8,sm:8,xs:8},activeIndex:0,myConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/admin/UEditor/",serverUrl:""},activeIndexs:0}},computed:v({},Object(r["e"])("admin/layout",["isMobile","menuCollapse"]),{labelWidth:function(){return this.isMobile?void 0:120},labelPosition:function(){return this.isMobile?"top":"right"}}),mounted:function(){this.menu(1),this.info()},methods:{getEditorContent:function(t){this.content=t,console.log(this.content)},linkUrl:function(t){this.tabList.list[this.activeIndexs].url=t},getContent:function(t){this.formValidate.content=t},onsubmit:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return!1;e.formValidate.content=e.content,Object(d["Y"])(e.formValidate).then(function(){var t=b(o.a.mark((function t(i){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$Message.success(i.msg);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)})),console.log("content:",data.content)}))},getKfAdv:function(){var t=this;Object(d["B"])().then((function(e){var i=e.data.content?e.data.content:"";t.formValidate.content=i,t.content=i})).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},addCustomDialog:function(t){window.UE.registerUI("test-dialog",(function(t,e){var i=new window.UE.ui.Dialog({iframeUrl:"/admin/widget.images/index.html?fodder=dialog",editor:t,name:e,title:"上传图片",cssRules:"width:1200px;height:500px;padding:20px;"});this.dialog=i;var a=new window.UE.ui.Button({name:"dialog-button",title:"上传图片",cssRules:"background-image: url(../../../assets/images/icons.png);background-position: -726px -77px;",onclick:function(){i.render(),i.open()}});return a}),37)},groupAdd:function(){var t=this;this.$modalForm(Object(d["F"])({config_name:this.pageId},"setting/group_data/create")).then((function(){return t.info()}))},info:function(){var t=this;"pc_home_banner"==this.pageId&&Object(d["I"])({config_name:this.pageId},"setting/group_data").then(function(){var e=b(o.a.mark((function e(i){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.tabList=i.data,t.tabList.list.forEach((function(t,e,i){"string"!=typeof t.image&&"undefined"!=t.image&&(t.image=t.image[0])}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)})),1==this.pageId&&Object(d["R"])("pc_logo").then((function(e){t.pclogo=e.data.value})),3==this.pageId&&this.getKfAdv()},menu:function(t){this.pageId=t,this.info()},addBox:function(){if(0==this.tabList.list.length)this.tabList.list.push(this.lastObj),this.lastObj={add_time:"",comment:"",gid:"",id:"",img:"",link:"",sort:"",status:1};else if(5==this.tabList.list.length)this.$Message.warning("最多添加五张呦");else{var t=JSON.parse(JSON.stringify(this.lastObj));this.tabList.list.push(t)}},bindDelete:function(t,e){1==this.tabList.list.length&&(this.lastObj=this.tabList.list[0]),this.tabList.list.splice(e,1)},modalPicTap:function(t,e){this.activeIndex=e,this.modalPic=!0},getPic:function(t){var e=this;this.$nextTick((function(){"pc_home_banner"==e.pageId?e.tabList.list[e.activeIndex].image=t.att_dir:e.pclogo=t.att_dir,e.modalPic=!1}))},save:function(){var t=this;"pc_home_banner"==this.pageId&&Object(d["M"])({config_name:this.pageId,data:this.tabList.list}).then((function(e){t.$Message.success(e.msg)})).catch((function(e){t.$Message.error(e.msg)})),1==this.pageId&&Object(d["S"])({pc_logo:this.pclogo}).then((function(e){t.$Message.success(e.msg)})).catch((function(e){t.$Message.error(e.msg)})),3==this.pageId&&this.onsubmit("formValidate")},link:function(t){this.activeIndexs=t,this.$refs.linkaddres.modals=!0}}},x=C,w=(i("a9d8"),i("504e"),i("2877")),y=Object(w["a"])(x,a,s,!1,null,"461c22fc",null);e["default"]=y.exports},fcc1:function(t,e,i){}}]);