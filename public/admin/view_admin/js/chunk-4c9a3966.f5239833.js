(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c9a3966"],{"31b4":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.FromData?i("div",[i("Modal",{class:t.userEdit?"userEdit":"",attrs:{scrollable:"","footer-hide":"",closable:"",title:t.FromData.title,width:"700"},on:{"on-cancel":t.cancel},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[["/marketing/coupon/save.html"===t.FromData.action?i("div",{staticClass:"radio acea-row row-middle"},[i("div",{staticClass:"name ivu-form-item-content"},[t._v("优惠券类型")]),i("Radio-group",{on:{"on-change":t.couponsType},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[i("Radio",{attrs:{label:0}},[t._v("通用券")]),i("Radio",{attrs:{label:1}},[t._v("品类券")]),i("Radio",{attrs:{label:2}},[t._v("商品券")])],1)],1):t._e()],i("form-create",{ref:"fc",staticClass:"formBox",attrs:{option:t.config,rule:Array.from(t.FromData.rules),handleIcon:"false"},on:{"on-submit":t.onSubmit}})],2)],1):t._e()},a=[],n=i("9860"),o=i.n(n),r=i("b6bd"),l=i("2f62");function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(i,!0).forEach((function(e){u(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var m={name:"edit",components:{formCreate:o.a.$form()},computed:d({},Object(l["e"])("admin/userLevel",["taskId","levelId"])),props:{FromData:{type:Object,default:null},userEdit:{type:Number,default:0}},data:function(){return{modals:!1,type:0,config:{global:{upload:{props:{onSuccess:function(t,e){200===t.status?e.url=t.data.src:this.Message.error(t.msg)}}}}},isDisable:!1}},methods:{couponsType:function(){this.$parent.addType(this.type)},onSubmit:function(t){var e=this;if(setTimeout((function(){e.isDisable=!1}),1e3),!this.isDisable){this.isDisable=!0;var i={};i=t,Object(r["a"])({url:this.FromData.action,method:this.FromData.method,data:i}).then((function(t){e.$parent.getList(),e.$Message.success(t.msg),e.modals=!1,setTimeout((function(){e.$emit("submitFail")}),1e3)})).catch((function(t){e.$Message.error(t.msg)}))}},cancel:function(){this.type=0}}},g=m,p=(i("8b61"),i("2877")),f=Object(p["a"])(g,s,a,!1,null,"80656ec0",null);e["a"]=f.exports},"341c":function(t,e,i){},"590d":function(t,e,i){t.exports=i.p+"view_admin/img/pclogin.3d27e2c2.png"},"713f":function(t,e,i){t.exports=i.p+"view_admin/img/bluesgin.032bae4b.png"},"89c2":function(t,e,i){t.exports=i.p+"view_admin/img/oragesgin.00077d3a.png"},"8b61":function(t,e,i){"use strict";var s=i("a29b"),a=i.n(s);a.a},"8e92":function(t,e,i){"use strict";var s=i("341c"),a=i.n(s);a.a},"90be":function(t,e,i){t.exports=i.p+"view_admin/img/redsgin.d8b0c12e.png"},"943f":function(t,e,i){t.exports=i.p+"view_admin/img/pinksgin.0e1c51b4.png"},a29b:function(t,e,i){},bceb:function(t,e,i){t.exports=i.p+"view_admin/img/greesgin.43ae54b5.png"},cb18:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{style:t.bgcolors},[s("div",{staticClass:"i-layout-page-header"},[s("PageHeader",{staticClass:"product_tabs",style:"padding-right:"+(t.menuCollapse?105:20)+"px",attrs:{title:t.$route.meta.title,"hidden-breadcrumb":""}},[s("div",{attrs:{slot:"title"},slot:"title"},[s("div",{staticStyle:{float:"left"}},[s("span",{staticClass:"mr20",domProps:{textContent:t._s(t.$route.meta.title)}})])])])],1),s("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[s("Row",{staticClass:"ivu-mt box-wrapper"},[!t.$route.params.id&&t.groupAll.length?s("Col",{staticClass:"left-wrapper",attrs:{xs:24,sm:24,md:6,lg:4}},[s("Menu",{attrs:{theme:t.theme3,"active-name":t.sortName,width:"auto"}},[s("MenuGroup",[t._l(t.groupAll,(function(e,i){return s("MenuItem",{key:i+"menu",staticClass:"menu-item",attrs:{name:e.config_name},nativeOn:{click:function(i){return t.edits(e)}}},[t._v("\n\t\t\t\t\t\t\t    "+t._s(e.name)+"\n\t\t\t\t\t\t\t")])})),s("MenuItem",{staticClass:"menu-item",attrs:{name:"guide"},nativeOn:{click:function(e){return t.edits(2)}}},[t._v("\n\t\t\t\t\t\t\t\t开屏广告\n\t\t\t\t\t\t\t")])],2)],1)],1):t._e(),"user_recharge_quota"==t.name?s("Col",{staticClass:"iframe"},[s("div",{staticClass:"iframe-boxs"},[s("div",{staticClass:"moneyBox"},[s("div",{staticClass:"box1"},[s("div",{staticClass:"font1"},[t._v("我的余额")]),s("div",[t._v("￥ "),s("i",{staticClass:"font2"},[t._v("0.00")])])]),s("div",{staticClass:"moneyBox_content"},[s("div",{staticClass:"box2"},[s("div",[t._v("账户充值")]),s("div",[t._v("佣金导入")])]),s("div",{staticClass:"box3"},[t._l(t.sginList.list,(function(e,i){return 0!=e.status?s("div",{staticClass:"box3_box"},[s("div",[t._v(t._s(e.price)),s("i",{staticClass:"font"},[t._v("元")])]),s("div",{staticClass:"font"},[t._v("赠送:"+t._s(e.give_money)+"元")])]):t._e()})),s("div",{staticClass:"box3_box"},[s("div",{staticClass:"other"},[t._v("其他")])])],2),s("div",{staticClass:"box4"},[s("div",{staticClass:"tips"},[t._v("注意事项：")]),s("div",{staticClass:"tips-samll"},[s("p",[t._v("充值后帐户的金额不能提现，可用于商城消费使用。")]),s("p",[t._v("佣金导入账户之后不能再次导出、不可提现。")]),s("p",[t._v("账户充值出现问题可联系商城客服，也可拨打商城客服热线：40088888889。")])])]),s("div",{staticClass:"box5"},[t._v("立即充值")])])])])]):t._e(),"admin_login_slide"==t.name?s("Col",{staticClass:"pciframe",attrs:{bordered:!1,"dis-hover":""}},[s("img",{staticClass:"pciframe-box",attrs:{src:i("590d")}}),s("div",{staticClass:"pcmoddile_goods"},[""==t.tabList.list?s("div",{staticClass:"nofont"},[t._v("暂无照片，请添加~")]):s("swiper",{staticClass:"pcswiperimg_goods",attrs:{options:t.swiperOption}},t._l(t.tabList.list,(function(t,e){return s("swiper-slide",{staticClass:"spcwiperimg_goods"},[s("img",{attrs:{src:t.slide}})])})),1)],1)]):t._e(),"integral_shop_banner"==t.name?s("Col",{staticClass:"iframe",attrs:{bordered:!1}},[s("div",{staticClass:"iframe-box"},[s("img",{staticStyle:{width:"100%"},attrs:{src:i("d50d")}}),s("div",{staticClass:"moddile_goods"},[""==t.tabList.list?s("div",{staticClass:"nofonts"},[t._v("暂无照片，请添加~")]):s("swiper",{staticClass:"pcswiperimg_goods",attrs:{options:t.swiperOption}},t._l(t.tabList.list,(function(t,e){return s("swiper-slide",{staticClass:"swiperimg_goods"},[s("img",{attrs:{src:t.img}})])})),1)],1)])]):t._e(),"sign_day_num"==t.name||"admin_login_slide"==t.name||"user_recharge_quota"==t.name||"integral_shop_banner"==t.name||["privacy","user","cancel"].includes(t.agreementType)||2==t.guide?t._e():s("Col",{staticClass:"iframe",attrs:{bordered:!1,"dis-hover":""}},[s("iframe",{staticClass:"iframe-box",attrs:{src:t.url,frameborder:"0"}}),s("div",{staticClass:"moddile"}),"routine_home_bast_banner"==t.name||"routine_home_hot_banner"==t.name||"routine_home_new_banner"==t.name||"routine_home_benefit_banner"==t.name?s("div",{staticClass:"moddile_box"},[""==t.tabList.list?s("div",{staticClass:"nofonts"},[t._v("暂无照片，请添加~")]):s("swiper",{staticClass:"swiperimg",attrs:{options:t.swiperOption}},t._l(t.tabList.list,(function(t,e){return s("swiper-slide",{key:e+"c",staticClass:"swiperimg"},[s("img",{attrs:{src:t.img}})])})),1)],1):t._e(),"combination_banner"==t.name?s("div",{staticClass:"moddile_goods combination_height"},[""==t.tabList.list?s("div",{staticClass:"nofonts"},[t._v("暂无照片，请添加~")]):s("swiper",{staticClass:"swiperimg_goods",attrs:{options:t.swiperOption}},t._l(t.tabList.list,(function(t,e){return s("swiper-slide",{key:e+"b",staticClass:"swiperimg_goods"},[s("img",{attrs:{src:t.img}})])})),1)],1):t._e()]),"sign_day_num"==t.name?s("Col",{staticClass:"iframe",attrs:{bordered:!1}},[s("div",{staticClass:"iframe-box"},[1==t.bgimg?s("img",{attrs:{src:i("713f")}}):t._e(),2==t.bgimg?s("img",{attrs:{src:i("bceb")}}):t._e(),3==t.bgimg?s("img",{attrs:{src:i("90be")}}):t._e(),4==t.bgimg?s("img",{attrs:{src:i("943f")}}):t._e(),5==t.bgimg?s("img",{attrs:{src:i("89c2")}}):t._e()])]):t._e(),["privacy","user"].includes(t.agreementType)?s("Col",{staticClass:"iframe",attrs:{bordered:!1}},[s("div",{staticClass:"agreement-box"},[s("div",{staticClass:"template"}),s("div",{staticClass:"htmls_box"},[s("div",{staticClass:"htmls_top"},[t._v(t._s("privacy"==t.agreementType?"隐私协议":"服务协议"))]),s("div",{staticClass:"htmls_font"},[s("div",{staticClass:"ok"},[t._v("我同意")]),s("div",[t._v("不同意")])]),s("div",{staticClass:"htmls",domProps:{innerHTML:t._s(t.formValidate.content)}})])])]):t._e(),["privacy","user","cancel"].includes(t.agreementType)?s("Col",{staticStyle:{"margin-left":"40px"},attrs:{xs:24,sm:24,md:12,lg:11}},[s("div",{staticClass:"table_box"},[s("Row",{attrs:{type:"flex"}},[s("Col",t._b({},"Col",t.grid,!1),[s("div",{staticClass:"title"},[t._v(t._s("privacy"==t.agreementType?"隐私权限页面展示":"user"==t.agreementType?"用户协议":"注销协议")+"：")])])],1),s("div",[s("Form",{ref:"formValidate",staticClass:"form",attrs:{model:t.formValidate,rules:t.ruleValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[s("div",{staticClass:"goodsTitle acea-row"}),s("FormItem",{staticStyle:{margin:"0px"},attrs:{label:"",prop:"content"}},[s("WangEditor",{staticStyle:{width:"90%"},attrs:{content:t.formValidate.content},on:{editorContent:t.getEditorContent}})],1)],1)],1)],1)]):t._e(),2==t.guide?s("Col",[2==t.guide?s("div",{staticClass:"iframe",attrs:{bordered:!1}},[""==t.tabList.list?s("div",{staticClass:"nofonts"},[t._v("暂无照片，请添加~")]):t._e(),s("swiper",{staticClass:"swiperimg",attrs:{options:t.swiperOption}},t._l(t.tabList.list,(function(t,e){return s("swiper-slide",{key:e+"a",staticClass:"swiperimg"},[s("img",{attrs:{src:t.img}})])})),1)],1):t._e()]):t._e(),"sign_day_num"==t.name?s("Col",{staticStyle:{"margin-left":"20px"},attrs:{xs:24,sm:24,md:14,lg:11}},[s("div",{staticClass:"table_box"},[s("Row",{attrs:{type:"flex"}},[s("Col",t._b({},"Col",t.grid,!1),[s("div",{staticClass:"title"},[t._v("签到天数设置")]),s("Button",{staticStyle:{"margin-left":"14px","margin-top":"30px"},attrs:{type:"primary",icon:"md-add"},on:{click:function(e){return t.groupAdd("添加数据")}}},[t._v("添加数据")])],1)],1),s("div",{staticClass:"table"},[s("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns1,data:t.cmsList,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"status",fn:function(e){var i=e.row;e.index;return[s("i-switch",{attrs:{value:i.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeIsShow(i)}},model:{value:i.status,callback:function(e){t.$set(i,"status",e)},expression:"row.status"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("显示")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("隐藏")])])]}},{key:"action",fn:function(e){var i=e.row,a=e.index;return[s("a",{on:{click:function(e){return t.edit(i,"编辑")}}},[t._v("编辑")]),s("Divider",{attrs:{type:"vertical"}}),s("a",{on:{click:function(e){return t.del(i,"删除这条信息",a)}}},[t._v("删除")])]}}],null,!1,1790299090)})],1)],1)]):t._e(),"user_recharge_quota"==t.name?s("Col",{staticStyle:{"margin-left":"20px"},attrs:{xs:24,sm:24,md:14,lg:11}},[s("div",{staticClass:"table_box"},[s("Row",{attrs:{type:"flex"}},[s("Col",t._b({},"Col",t.grid,!1),[s("div",{staticClass:"title"},[t._v("充值金额设置")]),s("Button",{staticStyle:{"margin-left":"14px","margin-top":"30px"},attrs:{type:"primary",icon:"md-add"},on:{click:function(e){return t.groupAdd("添加数据")}}},[t._v("添加数据")])],1)],1),s("div",{staticClass:"table"},[s("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns1,data:t.sginList.list,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"status",fn:function(e){var i=e.row;e.index;return[s("i-switch",{attrs:{value:i.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeIsShow(i)}},model:{value:i.status,callback:function(e){t.$set(i,"status",e)},expression:"row.status"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("显示")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("隐藏")])])]}},{key:"action",fn:function(e){var i=e.row,a=e.index;return[s("a",{on:{click:function(e){return t.edit(i,"编辑")}}},[t._v("编辑")]),s("Divider",{attrs:{type:"vertical"}}),s("a",{on:{click:function(e){return t.del(i,"删除这条信息",a)}}},[t._v("删除")])]}}],null,!1,1790299090)})],1)],1)]):t._e(),2==t.guide?s("Col",[s("div",{class:"admin_login_slide"!=t.name?"content":"contents"},[s("div",{staticClass:"right-box"},[s("div",{staticClass:"hot_imgs"},[s("div",{staticClass:"title"},[t._v("引导页设置")]),s("div",{staticClass:"title-text"},[t._v("建议尺寸：750 * 1334px，拖拽图片可调整图片顺序哦，最多添加五张")]),s("div",{staticClass:"list-box"},[s("div",[s("Form",{attrs:{model:t.formItem,"label-width":80}},[s("FormItem",{attrs:{label:"开屏广告:"}},[s("i-switch",{attrs:{"true-value":1,"false-value":0,size:"large"},model:{value:t.formItem.status,callback:function(e){t.$set(t.formItem,"status",e)},expression:"formItem.status"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开启")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关闭")])])],1),s("FormItem",{attrs:{label:"广告时间:"}},[s("Input",{staticStyle:{width:"150px"},attrs:{type:"number",placeholder:"请输入开屏广告时间"},model:{value:t.formItem.time,callback:function(e){t.$set(t.formItem,"time",t._n(e))},expression:"formItem.time"}}),t._v("（单位：秒）\n                            ")],1)],1)],1),s("draggable",{staticClass:"dragArea list-group",attrs:{list:t.tabList.list,group:"peoples",handle:".move-icon"}},t._l(t.tabList.list,(function(e,i){return s("div",{key:i+"d",staticClass:"item"},[s("div",{staticClass:"move-icon"},[s("span",{staticClass:"iconfont icondrag2"})]),s("div",{staticClass:"img-box",on:{click:function(e){return t.modalPicTap("单选",i)}}},[e.img?s("img",{attrs:{src:e.img,alt:""}}):s("div",{staticClass:"upload-box"},[s("Icon",{attrs:{type:"ios-camera-outline",size:"36"}})],1),s("div",{staticClass:"delect-btn",on:{click:function(s){return s.stopPropagation(),t.bindDelete(e,i)}}},[s("Icon",{attrs:{type:"md-close-circle",size:"26"}})],1)]),s("div",{staticClass:"info"},[s("div",{staticClass:"info-item"},[s("span",[t._v("图片名称：")]),s("div",{staticClass:"input-box"},[s("Input",{attrs:{placeholder:"请填写名称"},model:{value:e.comment,callback:function(i){t.$set(e,"comment",i)},expression:"item.comment"}})],1)]),s("div",{staticClass:"info-item"},[s("span",[t._v("链接地址：")]),s("div",{staticClass:"input-box",on:{click:function(e){return t.link(i)}}},[s("Input",{attrs:{icon:"ios-arrow-forward",readonly:"",placeholder:"选择链接"},model:{value:e.link,callback:function(i){t.$set(e,"link",i)},expression:"item.link"}})],1)])])])})),0),s("div",[s("Modal",{attrs:{width:"960px",scrollable:"","footer-hide":"",closable:"",title:"上传商品图","mask-closable":!1,"z-index":999},model:{value:t.modalPic,callback:function(e){t.modalPic=e},expression:"modalPic"}},[t.modalPic?s("uploadPictures",{attrs:{isChoice:t.isChoice,gridBtn:t.gridBtn,gridPic:t.gridPic},on:{getPic:t.getPic}}):t._e()],1)],1)],1),[s("div",{staticClass:"add-btn"},[s("Button",{staticStyle:{width:"100px",height:"35px","background-color":"#1890FF",color:"#FFFFFF"},attrs:{type:"primary",ghost:""},on:{click:t.addBox}},[t._v("添加图片\n                    ")])],1)]],2)])])]):s("Col",["sign_day_num"==t.name||"user_recharge_quota"==t.name||["privacy","user","cancel"].includes(t.agreementType)||2==t.guide?t._e():s("div",{class:"admin_login_slide"!=t.name?"content":"contents"},[s("div",{staticClass:"right-box"},[s("div",{staticClass:"hot_imgs"},["admin_login_slide"==t.name?s("div",{staticClass:"title"},[t._v("幻灯片设置")]):s("div",{staticClass:"title"},[t._v("轮播图设置")]),s("div",{staticClass:"title-text"},[t._v("建议尺寸：690 * 240px，拖拽图片可调整图片顺序哦，最多添加五张")]),s("div",{staticClass:"list-box"},["admin_login_slide"==t.name?s("draggable",{staticClass:"dragArea list-group Bbox",attrs:{list:t.tabList.list,group:"peoples",handle:".move-icon"}},t._l(t.tabList.list,(function(e,i){return s("div",{key:i+"e",staticClass:"items"},[s("div",{staticClass:"move-icon"},[s("span",{staticClass:"iconfont icondrag2"})]),s("div",{staticClass:"img-box",on:{click:function(e){return t.modalPicTap("单选",i)}}},[e.slide?s("img",{attrs:{src:e.slide,alt:""}}):s("div",{staticClass:"upload-box"},[s("Icon",{attrs:{type:"ios-camera-outline",size:"36"}})],1),s("div",{staticClass:"delect-btn",on:{click:function(s){return s.stopPropagation(),t.bindDelete(e,i)}}},[s("Icon",{attrs:{type:"md-close-circle",size:"26"}})],1)]),s("div",{staticClass:"info"})])})),0):s("draggable",{staticClass:"dragArea list-group",attrs:{list:t.tabList.list,group:"peoples",handle:".move-icon"}},t._l(t.tabList.list,(function(e,i){return s("div",{key:i+"f",staticClass:"item"},[s("div",{staticClass:"move-icon"},[s("span",{staticClass:"iconfont icondrag2"})]),s("div",{staticClass:"img-box",on:{click:function(e){return t.modalPicTap("单选",i)}}},[e.img?s("img",{attrs:{src:e.img,alt:""}}):s("div",{staticClass:"upload-box"},[s("Icon",{attrs:{type:"ios-camera-outline",size:"36"}})],1),s("div",{staticClass:"delect-btn",on:{click:function(s){return s.stopPropagation(),t.bindDelete(e,i)}}},[s("Icon",{attrs:{type:"md-close-circle",size:"26"}})],1)]),s("div",{staticClass:"info"},[s("div",{staticClass:"info-item"},[s("span",[t._v("图片名称：")]),s("div",{staticClass:"input-box"},[s("Input",{attrs:{placeholder:"请填写名称"},model:{value:e.comment,callback:function(i){t.$set(e,"comment",i)},expression:"item.comment"}})],1)]),s("div",{staticClass:"info-item"},[s("span",[t._v("链接地址：")]),s("div",{staticClass:"input-box",on:{click:function(e){return t.link(i)}}},[s("Input",{attrs:{icon:"ios-arrow-forward",readonly:"",placeholder:"选择链接"},model:{value:e.link,callback:function(i){t.$set(e,"link",i)},expression:"item.link"}})],1)])])])})),0),s("div",[s("Modal",{attrs:{width:"960px",scrollable:"","footer-hide":"",closable:"",title:"上传商品图","mask-closable":!1,"z-index":999},model:{value:t.modalPic,callback:function(e){t.modalPic=e},expression:"modalPic"}},[t.modalPic?s("uploadPictures",{attrs:{isChoice:t.isChoice,gridBtn:t.gridBtn,gridPic:t.gridPic},on:{getPic:t.getPic}}):t._e()],1)],1)],1),[s("div",{staticClass:"add-btn"},[s("Button",{staticStyle:{width:"100px",height:"35px","background-color":"#1890FF",color:"#FFFFFF"},attrs:{type:"primary",ghost:""},on:{click:t.addBox}},[t._v("添加图片\n\t\t\t\t\t\t\t               ")])],1)]],2)])])])],1)],1),s("Card",{staticClass:"fixed-card",style:{left:t.menuCollapse?t.isMobile?"0":"80px":"200px"},attrs:{bordered:!1,"dis-hover":""}},[s("div",{staticClass:"acea-row row-center-wrapper"},[s("Button",{staticClass:"bnt",attrs:{type:"primary",loading:t.loadingExist},on:{click:t.save}},[t._v("保存")])],1)]),s("linkaddress",{ref:"linkaddres",on:{linkUrl:t.linkUrl}})],1)},a=[],n=i("a34a"),o=i.n(n),r=i("a069"),l=i("d708"),c=i("f478"),d=i("2f62"),u=i("31b4"),m=i("8593"),g=i("310e"),p=i.n(g),f=i("b0e7"),b=i("7af3");function v(t,e,i,s,a,n,o){try{var r=t[n](o),l=r.value}catch(c){return void i(c)}r.done?e(l):Promise.resolve(l).then(s,a)}function h(t){return function(){var e=this,i=arguments;return new Promise((function(s,a){var n=t.apply(e,i);function o(t){v(n,s,a,o,r,"next",t)}function r(t){v(n,s,a,o,r,"throw",t)}o(void 0)}))}}function _(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function C(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?_(i,!0).forEach((function(e){x(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):_(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function x(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var y={name:"list",components:{editFrom:u["a"],draggable:p.a,uploadPictures:f["a"],linkaddress:b["a"],WangEditor:r["a"]},computed:C({bgcolors:function(){return{"--color-theme":this.bgCol}},labelWidth:function(){return this.isMobile?void 0:120},labelPosition:function(){return this.isMobile?"top":"right"}},Object(d["e"])("admin/layout",["menuCollapse","isMobile"])),data:function(){return{formValidate:{content:""},agreementList:[{name:"隐私协议",type:"privacy"},{name:"用户协议",type:"user"},{name:"注销协议",type:"cancel"}],ruleValidate:{},myConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/admin/UEditor/",serverUrl:""},agreementType:0,bgimg:0,columns1:[],bgCol:"",name:"routine_home_bast_banner",grid:{xl:7,lg:7,md:12,sm:24,xs:24},loading:!1,sginList:[],swiperOption:{pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:2e3,disableOnInteraction:!1},loop:!1},url:"",BaseURL:l["a"].apiBaseURL.replace(/adminapi/,""),pageId:0,theme3:"light",tabList:[],lastObj:{add_time:"",comment:"",gid:"",id:"",img:"",link:"",sort:"",status:1},isChoice:"单选",modalPic:!1,gridPic:{xl:6,lg:8,md:12,sm:12,xs:12},gridBtn:{xl:4,lg:8,md:8,sm:8,xs:8},groupAll:[],activeIndex:0,sortName:null,activeIndexs:0,cmsList:[],loadingExist:!1,formItem:{time:"",type:"pic",status:1,value:[],video_link:""},guide:0}},created:function(){this.color()},mounted:function(){this.getGroupAll(),this.info(),this.url=this.BaseURL+"pages/columnGoods/HotNewGoods/index?type=1&name=精品推荐"},methods:{getEditorContent:function(t){this.formValidate.content=t},linkUrl:function(t){this.tabList.list[this.activeIndexs].link=t},color:function(){var t=this;Object(c["h"])("color_change").then((function(e){switch(e.data.status){case 1:t.bgCol="#3875EA",t.bgimg=1;break;case 2:t.bgCol="#00C050",t.bgimg=2;break;case 3:t.bgCol="#E93323",t.bgimg=3;break;case 4:t.bgCol="#FF448F",t.bgimg=4;break;case 5:t.bgCol="#FE5C2D",t.bgimg=5;break}}))},groupAdd:function(){var t=this;this.$modalForm(Object(m["F"])({gid:this.pageId,config_name:this.name},"setting/group_data/create")).then((function(){t.url=t.BaseURL+"pages/users/user_sgin/index",t.info()}))},info:function(){var t=this;Object(m["I"])({config_name:this.name},"setting/group_data").then(function(){var e=h(o.a.mark((function e(i){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.tabList=i.data,"admin_login_slide"==t.name?t.tabList.list.forEach((function(t,e,i){"string"!=typeof t.slide&&"undefined"!=t.slide&&(t.slide=t.slide[0])})):"sign_day_num"==t.name?t.cmsList=i.data.list:"user_recharge_quota"==t.name?t.sginList=i.data:t.tabList.list.forEach((function(t,e,i){"string"!=typeof t.img&&"undefined"!=t.img&&(t.img=t.img[0])}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},edits:function(t){var e=this;if(this.pageId=t.id,this.name=t.config_name||"",["privacy","user","cancel"].includes(t))this.agreementType=t,this.guide=0,this.formValidate.content="",this.getAgreement(t);else if(2==t)this.agreementType="",this.guide=2,this.name="",Object(m["C"])().then((function(t){t.data.status=parseInt(t.data.status),e.formItem=t.data,e.tabList.list=t.data.value}));else switch(this.info(),this.agreementType="",this.guide=0,t.config_name){case"routine_home_bast_banner":this.url=this.BaseURL+"pages/columnGoods/HotNewGoods/index?type=1&name=精品推荐";break;case"sign_day_num":this.url="",this.getListHeader();break;case"combination_banner":this.url=this.BaseURL+"pages/activity/goods_combination/index";break;case"routine_home_hot_banner":this.url=this.BaseURL+"pages/columnGoods/HotNewGoods/index?type=2&name=热门榜单";break;case"routine_home_new_banner":this.url=this.BaseURL+"pages/columnGoods/HotNewGoods/index?type=3&name=首发新品";break;case"routine_home_benefit_banner":this.url=this.BaseURL+"pages/columnGoods/HotNewGoods/index?type=4&name=促销单品";break;case"user_recharge_quota":this.url="",this.getListHeader();break;case"admin_login_slide":this.url="";break;case"integral_shop_banner":this.url="";break}},addBox:function(){if(0==this.tabList.list.length)this.tabList.list.push(this.lastObj),this.lastObj={add_time:"",comment:"",gid:"",id:"",img:"",link:"",sort:"",status:1};else if(5==this.tabList.list.length)this.$Message.warning("最多添加五张呦");else{var t=JSON.parse(JSON.stringify(this.lastObj));this.tabList.list.push(t)}},bindDelete:function(t,e){this.tabList.list.splice(e,1)},modalPicTap:function(t,e){this.activeIndex=e,this.modalPic=!0},getPic:function(t){var e=this;this.$nextTick((function(){"admin_login_slide"==e.name?e.tabList.list[e.activeIndex].slide=t.att_dir:e.tabList.list[e.activeIndex].img=t.att_dir,e.modalPic=!1}))},save:function(){var t=this;["privacy","user","cancel"].includes(this.agreementType)?this.onsubmit("formValidate"):2==this.guide?(this.formItem.value=this.tabList.list,Object(m["O"])(this.formItem).then((function(e){t.loadingExist=!1,t.$Message.success(e.msg)})).catch((function(e){t.loadingExist=!1,t.$Message.error(e.msg)}))):(this.loadingExist=!0,Object(m["M"])({gid:this.pageId,config_name:this.name,data:this.tabList.list}).then((function(e){t.loadingExist=!1,t.$Message.success(e.msg)})).catch((function(e){t.loadingExist=!1,t.$Message.error(e.msg)})))},link:function(t){this.activeIndexs=t,this.$refs.linkaddres.modals=!0},getListHeader:function(){var t=this;this.loading=!0,Object(m["H"])({config_name:this.name},"setting/sign_data/header").then((function(e){var i=e.data,s=i.header;t.columns1=s,t.loading=!1})).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},edit:function(t){var e=this;this.$modalForm(Object(m["G"])({gid:this.pageId,config_name:this.name},"setting/group_data/"+t.id+"/edit")).then((function(){e.info(),e.url=e.BaseURL+"pages/users/user_sgin/index"}))},del:function(t,e,i){var s=this,a={title:e,num:i,url:"setting/group_data/"+t.id,method:"DELETE",ids:""};this.$modalSure(a).then((function(t){s.info(),s.$Message.success(t.msg)})).catch((function(t){s.$Message.error(t.msg)}))},onchangeIsShow:function(t){var e=this;Object(m["J"])("setting/group_data/set_status/"+t.id+"/"+t.status).then(function(){var t=h(o.a.mark((function t(i){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.url=e.BaseURL+"/pages/users/user_sgin/index",e.$Message.success(i.msg),e.info();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.url=e.BaseURL+"/pages/users/user_sgin/index",e.$Message.error(t.msg)}))},getGroupAll:function(){var t=this;Object(m["E"])().then(function(){var e=h(o.a.mark((function e(i){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.groupAll=i.data,t.sortName=i.data[0].config_name,t.pageId=i.data[0].id;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},getContent:function(t){this.formValidate.content=t},onsubmit:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return!1;Object(m["X"])(e.formValidate,e.agreementType).then(function(){var t=h(o.a.mark((function t(i){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$Message.success(i.msg);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))}))},getAgreement:function(t){var e=this;Object(m["y"])(t).then(function(){var t=h(o.a.mark((function t(i){var s;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s=i.data,e.formValidate={content:s.content};case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.loading=!1,e.$Message.error(t.msg)}))},addCustomDialog:function(t){window.UE.registerUI("test-dialog",(function(t,e){var i=new window.UE.ui.Dialog({iframeUrl:"/admin/widget.images/index.html?fodder=dialog",editor:t,name:e,title:"上传图片",cssRules:"width:1200px;height:500px;padding:20px;"});this.dialog=i;var s=new window.UE.ui.Button({name:"dialog-button",title:"上传图片",cssRules:"background-image: url(../../../assets/images/icons.png);background-position: -726px -77px;",onclick:function(){i.render(),i.open()}});return s}),37)}}},w=y,k=(i("8e92"),i("2877")),O=Object(k["a"])(w,s,a,!1,null,"90325e64",null);e["default"]=O.exports},d50d:function(t,e,i){t.exports=i.p+"view_admin/img/integral.fcfc352b.png"}}]);