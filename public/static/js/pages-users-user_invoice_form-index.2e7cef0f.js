(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_invoice_form-index"],{"1a31":function(e,t,i){"use strict";var n=i("4ea4");i("99af"),i("7db0"),i("d3b7"),i("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("f176")),o=i("d5e6"),r=n(i("d0ca")),s={components:{home:a.default},mixins:[r.default],data:function(){return{invoiceTypeList:[{name:"增值税电子普通发票",value:"1",info:"纸质发票开出后将以邮寄形式交付"},{name:"增值税电子专用发票",value:"2",info:"纸质发票开出后将以邮寄形式交付"}],id:"",header_type:"1",type:"1",drawer_phone:"",name:"",duty_number:"",tell:"",address:"",bank:"",card_number:"",is_default:[],email:"",popupType:!1,typeName:"",urlQuery:"",from:"",specialInvoice:!0,order_id:""}},computed:{backUrl:function(){switch(this.from){case"order_confirm":return"/pages/users/order_confirm/index".concat(this.urlQuery);default:return"/pages/users/user_invoice_list/index?from=invoice_form"}}},onLoad:function(e){var t=this;for(var i in e)switch(i){case"couponTitle":case"new":case"cartId":case"pinkId":case"couponId":case"addressId":this.urlQuery+="".concat(this.urlQuery?"&":"?").concat(i,"=").concat(e[i]);break;case"from":this.from=e[i];break;case"header_type":this.header_type=e[i];break;case"id":this.id=e[i],this.getInvoiceDetail();break;case"specialInvoice":"false"===e[i]&&(this.specialInvoice=!1);break}e.order_id&&(this.order_id=e.order_id);var n=this.invoiceTypeList.find((function(e){return e.value===t.type}));this.typeName=n.name},methods:{getInvoiceDetail:function(){var e=this;uni.showLoading({title:"加载中"}),(0,o.invoiceDetail)(this.id).then((function(t){uni.hideLoading(),e.header_type=t.data.header_type.toString(),e.type=t.data.type.toString();var i=e.invoiceTypeList.find((function(t){return t.value===e.type}));e.typeName=i.name,e.name=t.data.name,e.drawer_phone=t.data.drawer_phone,e.email=t.data.email,e.duty_number=t.data.duty_number,e.bank=t.data.bank,e.card_number=t.data.card_number,e.address=t.data.address,e.tell=t.data.tell,e.is_default=t.data.is_default?[""]:[]})).catch((function(e){uni.showToast({title:e,icon:"none"})}))},formSubmit:function(e){var t=this,i=e.detail.value;if(i.type=this.type,"1"===i.header_type){if(!i.name)return uni.showToast({title:"请输入需要开具发票的姓名",icon:"none"});if(!i.drawer_phone)return uni.showToast({title:"请输入您的手机号",icon:"none"});if(!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(i.drawer_phone))return uni.showToast({title:"请正确输入您的手机号",icon:"none"});if(!i.email)return uni.showToast({title:"请输入您的联系邮箱",icon:"none"});if(!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(i.email))return uni.showToast({title:"请正确输入您的联系邮箱",icon:"none"})}if("2"===i.header_type){if("1"===i.type){if(!i.name)return uni.showToast({title:"请输入需要开具发票的企业名称",icon:"none"});if(!i.duty_number)return uni.showToast({title:"请输入纳税人识别号",icon:"none"});if(!/[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}/.test(i.duty_number))return uni.showToast({title:"请正确输入纳税人识别号",icon:"none"});if(!i.drawer_phone)return uni.showToast({title:"请输入您的手机号",icon:"none"});if(!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(i.drawer_phone))return uni.showToast({title:"请正确输入您的手机号",icon:"none"});if(!i.email)return uni.showToast({title:"请输入您的联系邮箱",icon:"none"});if(!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(i.email))return uni.showToast({title:"请正确输入您的联系邮箱",icon:"none"})}if("2"===i.type){if(!i.name)return uni.showToast({title:"请输入需要开具发票的企业名称",icon:"none"});if(!i.duty_number)return uni.showToast({title:"请输入纳税人识别号",icon:"none"});if(!/[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}/.test(i.duty_number))return uni.showToast({title:"请正确输入纳税人识别号",icon:"none"});if(!i.drawer_phone)return uni.showToast({title:"请输入您的手机号",icon:"none"});if(!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(i.drawer_phone))return uni.showToast({title:"请正确输入您的手机号",icon:"none"});if(!i.email)return uni.showToast({title:"请输入您的联系邮箱",icon:"none"});if(!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(i.email))return uni.showToast({title:"请正确输入您的联系邮箱",icon:"none"});if(!i.bank)return uni.showToast({title:"请输入您的开户银行",icon:"none"});if(!i.card_number)return uni.showToast({title:"请输入您的银行账号",icon:"none"});if(!/^\d{16}|\d{19}$/.test(i.card_number))return uni.showToast({title:"请正确输入您的银行账号",icon:"none"});if(!i.address)return uni.showToast({title:"请输入您所在的企业地址",icon:"none"});if(!i.tell)return uni.showToast({title:"请输入您的企业电话",icon:"none"})}}i.is_default=i.is_default.length,i.id=this.id,uni.showLoading({title:"保存中"}),(0,o.invoiceSave)(i).then((function(e){var n=t;uni.showToast({title:e.msg,icon:"success",success:function(){switch(n.from){case"order_confirm":var t="";t+=1==i.header_type?"个人":"企业",t+=1==i.type?"普通":"专用",t+="发票",n.id?uni.navigateTo({url:"/pages/users/order_confirm/index".concat(n.urlQuery,"&invoice_id=").concat(n.id,"&invoice_name=").concat(t)}):uni.navigateTo({url:"/pages/users/order_confirm/index".concat(n.urlQuery,"&invoice_id=").concat(e.data.id,"&invoice_name=").concat(t)});break;case"order_details":n.id?uni.navigateTo({url:"/pages/users/order_details/index?order_id=".concat(n.order_id,"&invoice_id=").concat(n.id)}):uni.navigateTo({url:"/pages/users/order_details/index?order_id=".concat(n.order_id,"&invoice_id=").concat(e.data.id)});break;default:uni.navigateTo({url:"/pages/users/user_invoice_list/index?from=invoice_form"});break}}})})).catch((function(e){uni.showToast({title:e,icon:"none"})}))},callType:function(){this.popupType=!0},changeType:function(e){var t=e.detail.value,i=this.invoiceTypeList.find((function(e){return e.value===t}));"2"===t&&"1"===this.header_type&&(this.header_type="2"),this.typeName=i.name,this.type=t,this.popupType=!1},closeType:function(){this.popupType=!1},changeTitleType:function(e){this.header_type=e.detail.value,this.type="1"}}};t.default=s},"248b":function(e,t,i){var n=i("7f49");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f065").default;a("0923aeae",n,!0,{sourceMap:!1,shadowMode:!1})},"2b49":function(e,t,i){"use strict";var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i("26cb"),o=n(i("d0ca")),r=i("12b8"),s={name:"Home",props:{},mixins:[o.default],data:function(){return{top:"545",imgHost:r.HTTP_REQUEST_URL}},computed:(0,a.mapGetters)(["homeActive"]),methods:{setTouchMove:function(e){var t=this;e.touches[0].clientY<545&&e.touches[0].clientY>66&&(t.top=e.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){},beforeDestroy:function(){this.$store.commit("CLOSE_HOME")}};t.default=s},4899:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".pictrueBox[data-v-59354ea8]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-59354ea8]{position:fixed;color:#fff;text-align:center;z-index:9999;right:%?15?%;display:flex}.home .homeCon[data-v-59354ea8]{border-radius:%?50?%;opacity:0;height:0;color:var(--view-theme);width:0}.home .homeCon.on[data-v-59354ea8]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)!important}.home .homeCon .iconfont[data-v-59354ea8]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-59354ea8]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme)}.home .pictrue .image[data-v-59354ea8]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),e.exports=t},"4d90":function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{style:e.colorStyle},[i("v-uni-form",{on:{submit:function(t){arguments[0]=t=e.$handleEvent(t),e.formSubmit.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"panel"},[i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",[e._v("抬头类型")]),i("v-uni-radio-group",{attrs:{name:"header_type"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeTitleType.apply(void 0,arguments)}}},[i("v-uni-label",[i("v-uni-radio",{staticClass:"disabled",attrs:{value:"1",checked:"1"===e.header_type}}),i("v-uni-text",[e._v("个人")])],1),i("v-uni-label",[i("v-uni-radio",{attrs:{value:"2",checked:"2"===e.header_type}}),i("v-uni-text",[e._v("企业")])],1)],1)],1),i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",[e._v("发票类型")]),i("v-uni-input",{attrs:{name:"type",value:"2"===e.type&&"2"===e.header_type?"增值税电子专用发票":"增值税电子普通发票",disabled:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.callType.apply(void 0,arguments)}}}),i("v-uni-text",{staticClass:"iconfont icon-xiangyou"})],1),i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",[e._v("发票抬头")]),i("v-uni-input",{attrs:{name:"name",value:e.name,placeholder:"1"===e.header_type?"需要开具发票的姓名":"需要开具发票的企业名称"}})],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"2"===e.header_type,expression:"header_type === '2'"}],staticClass:"acea-row row-middle"},[i("v-uni-view",[e._v("税号")]),i("v-uni-input",{attrs:{name:"duty_number",value:e.duty_number,placeholder:"纳税人识别号"}})],1),i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",[e._v("手机号")]),i("v-uni-input",{attrs:{name:"drawer_phone",value:e.drawer_phone,placeholder:"您的手机号"}})],1),i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",[e._v("邮箱")]),i("v-uni-input",{attrs:{name:"email",value:e.email,placeholder:"您的联系邮箱"}})],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"2"===e.type,expression:"type === '2'"}],staticClass:"panel"},[i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",[e._v("开户银行")]),i("v-uni-input",{attrs:{name:"bank",value:e.bank,placeholder:"您的开户银行"}})],1),i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",[e._v("银行账号")]),i("v-uni-input",{attrs:{name:"card_number",value:e.card_number,placeholder:"您的银行账号"}})],1),i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",[e._v("企业地址")]),i("v-uni-input",{attrs:{name:"address",value:e.address,placeholder:"您所在的企业地址"}})],1),i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",[e._v("企业电话")]),i("v-uni-input",{attrs:{name:"tell",value:e.tell,placeholder:"您的企业电话"}})],1)],1),i("v-uni-checkbox-group",{staticClass:"acea-row row-middle panel",attrs:{name:"is_default"}},[i("v-uni-label",[i("v-uni-checkbox",{attrs:{checked:0!==e.is_default.length}}),i("v-uni-text",[e._v("设置为默认抬头")])],1)],1),i("v-uni-view",{staticClass:"button-section"},[i("v-uni-button",{staticClass:"button",attrs:{"form-type":"submit"}},[e._v("保存")]),i("v-uni-navigator",{staticClass:"navigator",attrs:{url:e.backUrl,"hover-class":"none"}},[e._v("取消")])],1)],1),i("v-uni-view",{class:{mask:e.popupType}}),i("v-uni-view",{staticClass:"popup",class:{on:e.popupType}},[i("v-uni-view",{staticClass:"title"},[e._v("发票类型选择"),i("v-uni-text",{staticClass:"iconfont icon-guanbi",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.closeType.apply(void 0,arguments)}}})],1),i("v-uni-scroll-view",{attrs:{"scroll-y":"true"}},[i("v-uni-radio-group",{attrs:{name:"invoice-type"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeType.apply(void 0,arguments)}}},[e._l(e.invoiceTypeList,(function(t){return["1"===t.value||"2"===t.value&&e.specialInvoice?i("v-uni-label",{key:t.type,staticClass:"acea-row row-middle"},[i("v-uni-view",{staticClass:"text"},[i("v-uni-view",[e._v(e._s(t.name))]),i("v-uni-view",{staticClass:"info"},[e._v(e._s(t.info))])],1),i("v-uni-radio",{attrs:{value:t.value,checked:t.value===e.type}})],1):e._e()]}))],2)],1)],1),e.navigation?i("home"):e._e()],1)},o=[]},"4e7d":function(e,t,i){"use strict";i.r(t);var n=i("1a31"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"65a8":function(e,t,i){var n=i("4899");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f065").default;a("0114b9c6",n,!0,{sourceMap:!1,shadowMode:!1})},"77b7":function(e,t,i){"use strict";i.r(t);var n=i("2b49"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"7f49":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,"[data-v-6b760ef7] .disabled .uni-radio-input{background-color:#f8f8f8}uni-form[data-v-6b760ef7]{font-size:%?28?%;color:#282828}uni-form uni-input[data-v-6b760ef7],\nuni-form uni-radio-group[data-v-6b760ef7]{flex:1;margin-left:%?30?%;text-align:right}uni-form uni-input[data-v-6b760ef7]{font-size:%?26?%}uni-form uni-label[data-v-6b760ef7]{margin-right:%?50?%}uni-form uni-radio[data-v-6b760ef7]{margin-right:%?8?%}uni-form uni-checkbox-group[data-v-6b760ef7]{height:%?90?%}uni-form uni-checkbox[data-v-6b760ef7]{margin-right:%?20?%}.panel[data-v-6b760ef7]{padding-right:%?30?%;padding-left:%?30?%;background-color:#fff}.panel~.panel[data-v-6b760ef7]{margin-top:%?14?%}.panel .acea-row[data-v-6b760ef7]{height:%?90?%}.panel .acea-row~.acea-row[data-v-6b760ef7]{border-top:%?1?% solid #eee}.input-placeholder[data-v-6b760ef7]{font-size:%?26?%;color:#bbb}.icon-xiangyou[data-v-6b760ef7]{margin-left:%?25?%;font-size:%?26?%;color:#bfbfbf;margin-top:%?2?%}.popup[data-v-6b760ef7]{position:fixed;bottom:0;left:0;z-index:99;width:100%;padding-bottom:%?100?%;border-top-left-radius:%?16?%;border-top-right-radius:%?16?%;background-color:#f5f5f5;overflow:hidden;-webkit-transform:translateY(100%);transform:translateY(100%);transition:.3s}.popup.on[data-v-6b760ef7]{-webkit-transform:translateY(0);transform:translateY(0)}.popup .title[data-v-6b760ef7]{position:relative;height:%?137?%;font-size:%?32?%;line-height:%?137?%;text-align:center}.popup uni-scroll-view[data-v-6b760ef7]{height:%?466?%;padding-right:%?30?%;padding-left:%?30?%;box-sizing:border-box}.popup uni-label[data-v-6b760ef7]{padding:%?35?% %?30?%;border-radius:%?16?%;margin-bottom:%?20?%;background-color:#fff}.popup .text[data-v-6b760ef7]{flex:1;min-width:0;font-size:%?28?%;color:#282828}.popup .info[data-v-6b760ef7]{margin-top:%?10?%;font-size:%?22?%;color:#909090}.popup .icon-guanbi[data-v-6b760ef7]{position:absolute;top:50%;right:%?30?%;z-index:2;-webkit-transform:translateY(-50%);transform:translateY(-50%);font-size:%?30?%;color:#707070;cursor:pointer}.popup .text .acea-row[data-v-6b760ef7]{display:inline-flex;max-width:100%}.popup .name[data-v-6b760ef7]{flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:%?30?%}.popup .label[data-v-6b760ef7]{width:%?56?%;height:%?28?%;border:%?1?% solid #e93323;margin-left:%?18?%;font-size:%?20?%;line-height:%?26?%;text-align:center;color:#e93323}.popup .type[data-v-6b760ef7]{width:%?124?%;height:%?42?%;margin-top:%?14?%;background-color:#fcf0e0;font-size:%?24?%;line-height:%?42?%;text-align:center;color:#d67300}.popup .type.special[data-v-6b760ef7]{background-color:#fde9e7;color:#e93323}.button-section[data-v-6b760ef7]{\n\t/* position: fixed;\n\tbottom: 0;\n\tleft: 0;\n\twidth: 100%; */padding:%?58?% %?30?%}.button-section .button[data-v-6b760ef7]{height:%?86?%;border-radius:%?43?%;background-color:var(--view-theme);font-size:%?30?%;line-height:%?86?%;color:#fff}.button-section .navigator[data-v-6b760ef7]{height:%?86?%;border:%?1?% solid var(--view-theme);border-radius:%?43?%;margin-top:%?26?%;font-size:%?30?%;line-height:%?86?%;text-align:center;color:var(--view-theme)}",""]),e.exports=t},bf91:function(e,t,i){"use strict";var n=i("248b"),a=i.n(n);a.a},d0ca:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{colorStyle:"",navigation:0,colorNum:0}},created:function(){var e=this;this.colorStyle=uni.getStorageSync("viewColor"),uni.$on("ok",(function(t){e.colorStyle=t})),this.navigation=uni.getStorageSync("navigation"),uni.$on("navOk",(function(t){e.navigation=t}))},methods:{colorData:function(){var e=this;this.colorNum=uni.getStorageSync("statusColor"),uni.$on("colorOk",(function(t){e.colorNum=t}))}}};t.default=n},da19:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{style:e.colorStyle},[i("v-uni-view",{staticStyle:{"touch-action":"none"}},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:e.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t),e.setTouchMove.apply(void 0,arguments)}}},[e.homeActive?i("v-uni-view",{staticClass:"homeCon bg-color",class:!0===e.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/index/index"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/order_addcart/order_addcart"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/user/index"}})],1):e._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image",attrs:{src:!0===e.homeActive?e.imgHost+"/statics/images/close.gif":e.imgHost+"/statics/images/open.gif"}})],1)],1)],1)],1)],1)},o=[]},eb30:function(e,t,i){"use strict";var n=i("65a8"),a=i.n(n);a.a},f176:function(e,t,i){"use strict";i.r(t);var n=i("da19"),a=i("77b7");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("eb30");var r,s=i("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"59354ea8",null,!1,n["a"],r);t["default"]=u.exports},f65a:function(e,t,i){"use strict";i.r(t);var n=i("4d90"),a=i("4e7d");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("bf91");var r,s=i("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"6b760ef7",null,!1,n["a"],r);t["default"]=u.exports}}]);