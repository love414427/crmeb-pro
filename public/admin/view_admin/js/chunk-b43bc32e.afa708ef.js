(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b43bc32e"],{"14e3":function(t,e,a){},"35e0":function(t,e,a){},4018:function(t,e,a){},"417c":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{staticClass:"order_box",attrs:{scrollable:"",title:"订单记录",width:"700","footer-hide":""},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[a("Card",{attrs:{bordered:!1,"dis-hover":""}},[a("Table",{attrs:{columns:t.columns,border:"",data:t.recordData,loading:t.loading,"no-data-text":"暂无数据","highlight-row":"","no-filtered-data-text":"暂无筛选结果"}})],1)],1)},i=[],r=a("a34a"),o=a.n(r),n=a("f8b7");function l(t,e,a,s,i,r,o){try{var n=t[r](o),l=n.value}catch(d){return void a(d)}n.done?e(l):Promise.resolve(l).then(s,i)}function d(t){return function(){var e=this,a=arguments;return new Promise((function(s,i){var r=t.apply(e,a);function o(t){l(r,s,i,o,n,"next",t)}function n(t){l(r,s,i,o,n,"throw",t)}o(void 0)}))}}var c={name:"orderRecord",data:function(){return{modals:!1,loading:!1,recordData:[],page:{page:1,limit:10},columns:[{title:"订单ID",key:"oid",align:"center",minWidth:40},{title:"操作记录",key:"change_message",align:"center",minWidth:280},{title:"操作时间",key:"change_time",align:"center",minWidth:100}]}},methods:{pageChange:function(t){this.page.pageNum=t,this.getList()},getList:function(t){var e=this,a={id:t,datas:this.page};this.loading=!0,Object(n["k"])(a).then(function(){var t=d(o.a.mark((function t(a){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.recordData=a.data,e.loading=!1;case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.loading=!1,e.$Message.error(t.msg)}))}}},v=c,u=(a("9a6c"),a("2877")),_=Object(u["a"])(v,s,i,!1,null,"76aba4fe",null);e["a"]=_.exports},"61f8":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{staticClass:"order_box",attrs:{scrollable:"",title:"备注",closable:!1},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[a("Form",{ref:"formValidate",attrs:{model:t.formValidate,rules:t.ruleValidate,"label-width":80},nativeOn:{submit:function(t){t.preventDefault()}}},[a("FormItem",{attrs:{label:"备注：",prop:"remark"}},[a("Input",{staticStyle:{width:"100%"},attrs:{maxlength:"200","show-word-limit":"",type:"textarea",placeholder:"订单备注"},model:{value:t.formValidate.remark,callback:function(e){t.$set(t.formValidate,"remark",e)},expression:"formValidate.remark"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.putRemark("formValidate")}}},[t._v("提交")]),a("Button",{on:{click:function(e){return t.cancel("formValidate")}}},[t._v("取消")])],1)],1)},i=[],r=a("a34a"),o=a.n(r),n=a("f8b7");function l(t,e,a,s,i,r,o){try{var n=t[r](o),l=n.value}catch(d){return void a(d)}n.done?e(l):Promise.resolve(l).then(s,i)}function d(t){return function(){var e=this,a=arguments;return new Promise((function(s,i){var r=t.apply(e,a);function o(t){l(r,s,i,o,n,"next",t)}function n(t){l(r,s,i,o,n,"throw",t)}o(void 0)}))}}var c={name:"orderMark",props:{orderId:Number,remarkType:{default:"",type:String}},data:function(){return{formValidate:{remark:""},modals:!1,ruleValidate:{remark:[{required:!0,message:"请输入备注信息",trigger:"blur"}]}}},methods:{cancel:function(t){this.modals=!1,this.$refs[t].resetFields()},putRemark:function(t){var e=this,a={id:this.orderId,remark:this.formValidate};this.$refs[t].validate((function(s){s?(e.remarkType?n["H"]:n["I"])(a).then(function(){var a=d(o.a.mark((function a(s){return o.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.$Message.success(s.msg),e.modals=!1,e.$refs[t].resetFields(),e.$emit("submitFail");case 4:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)})):e.$Message.warning("请填写备注信息")}))}}},v=c,u=a("2877"),_=Object(u["a"])(v,s,i,!1,null,"11df61c1",null);e["a"]=_.exports},"9a6c":function(t,e,a){"use strict";var s=a("14e3"),i=a.n(s);i.a},bd9b:function(t,e){t.exports="data:image/jpeg;base64,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"},d63d:function(t,e,a){"use strict";var s=a("4018"),i=a.n(s);i.a},ddbd:function(t,e,a){"use strict";var s=a("35e0"),i=a.n(s);i.a},fc48:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Drawer",{attrs:{closable:!1,width:"1000","class-name":"order_box",styles:{padding:0}},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[t.orderDatalist?s("div",[s("div",{staticClass:"head"},[s("div",{staticClass:"full"},[s("Icon",{class:{"sale-after":-1===t.orderDatalist.orderInfo._status._type},attrs:{custom:"iconfont icondingdan",size:"60"}}),s("div",{staticClass:"text"},[s("div",{staticClass:"title"},[t._v(t._s(t.orderData.pink_name||"售后订单"))]),s("div",[t._v("订单编号："+t._s(t.orderDatalist.orderInfo.order_id))])]),null==t.rowActive.delete_time?s("div",[1===t.orderData._status_new&&0===t.orderData.paid&&"offline"===t.orderData.pay_type?s("Button",{class:t.openErp?"on":"",attrs:{disabled:t.openErp},on:{click:function(e){return t.changeMenu("1")}}},[t._v("立即支付\n              ")]):t._e(),2!=t.orderData._status_new||t.rowActive.split.length?t._e():s("Button",{class:t.openErp?"on":"",attrs:{disabled:t.openErp},on:{click:t.distribution}},[t._v("分配\n              ")]),1==t.orderData._status_new?s("Button",{class:t.openErp?"on":"",attrs:{disabled:t.openErp},on:{click:t.edit}},[t._v("编辑\n              ")]):t._e(),2!==t.orderData._status_new&&8!==t.orderData._status_new&&4!==t.orderData.status||1!==t.orderData.shipping_type||null!==t.orderData.pinkStatus&&2!==t.orderData.pinkStatus?t._e():s("Button",{class:t.openErp?"on":"",attrs:{disabled:t.openErp},on:{click:t.sendOrder}},[t._v("发送货\n              ")]),4!==t.orderData._status_new||t.rowActive.split.length?t._e():s("Button",{class:t.openErp?"on":"",attrs:{disabled:t.openErp},on:{click:t.delivery}},[t._v("\n                配送信息\n              ")]),2==t.orderData.shipping_type&&0==t.orderData.status&&1==t.orderData.paid&&0===t.orderData.refund_status?s("Button",{class:t.openErp?"on":"",attrs:{disabled:t.openErp},on:{click:t.bindWrite}},[t._v("立即核销\n              ")]):t._e(),t.orderData._status_new>=2?s("Button",{on:{click:function(e){return t.changeMenu("10")}}},[t._v("小票打印")]):t._e(),t.orderData._status_new>=3&&t.orderData.express_dump?s("Button",{class:t.openErp?"on":"",attrs:{disabled:t.openErp},on:{click:function(e){return t.changeMenu("11")}}},[t._v("电子面单打印\n              ")]):t._e(),[1,2,5].includes(t.orderData.refund_type)&&(parseFloat(t.orderData.pay_price)>parseFloat(t.orderData.refunded_price)||0==t.orderData.pay_price)&&!t.formType?s("Button",{class:t.openErp?"on":"",attrs:{disabled:t.openErp},on:{click:function(e){return t.changeMenu("5")}}},[t._v(t._s(2==t.orderData.refund_type?"同意退货":"立即退款")+"\n              ")]):t._e(),[1,2].includes(t.orderData.refund_type)?s("Button",{class:t.openErp?"on":"",attrs:{disabled:t.openErp},on:{click:function(e){return t.changeMenu("7")}}},[t._v("不退款\n              ")]):t._e(),t.formType?t._e():s("Button",{on:{click:function(e){return t.changeMenu("4")}}},[t._v("售后备注")]),1==t.orderData.is_del?s("Button",{class:t.openErp?"on":"",attrs:{disabled:t.openErp},on:{click:function(e){return t.changeMenu("9")}}},[t._v("删除订单\n              ")]):t._e(),1!==t.orderData._status_new&&t.formType?s("Dropdown",{on:{"on-click":t.changeMenu}},[s("Button",{attrs:{icon:"ios-more"}}),s("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[1!==t.orderData._status_new||3===t.orderData._status_new&&t.orderData.use_integral>0&&t.orderData.use_integral>=t.orderData.back_integral?s("DropdownItem",{attrs:{name:"4"}},[t._v("订单备注\n                  ")]):t._e(),(0==t.orderData.refund_type||1==t.orderData.refund_type||5==t.orderData.refund_type)&&1==t.orderData.paid&&2!==t.orderData.refund_status&&parseFloat(t.orderData.pay_price)>0&&(!t.rowActive.split.length||t.rowActive.split.length&&1==t.orderData._status._type)?s("DropdownItem",{attrs:{disabled:t.openErp,name:"5"}},[t._v("立即退款\n                  ")]):t._e(),4===t.orderData._status_new?s("DropdownItem",{attrs:{disabled:t.openErp,name:"8"}},[t._v("已收货")]):t._e()],1)],1):t._e()],1):t._e()],1),s("ul",{staticClass:"list"},[s("li",{staticClass:"item"},[s("div",{staticClass:"title"},[t._v("订单状态")]),t.formType?s("div",{staticClass:"value1"},[s("span",{domProps:{innerHTML:t._s(t.orderData.status_name.status_name)}}),!t.orderData.is_all_refund&&t.orderData.refund.length?s("span",[t._v(",部分退款中")]):t._e(),t.orderData.is_all_refund&&t.orderData.refund.length&&6!=t.orderData.refund_type?s("span",[t._v(",退款中")]):t._e()]):s("div",[1==t.orderData.refund_type?s("div",{staticClass:"value1"},[t._v("仅退款")]):2==t.orderData.refund_type?s("div",{staticClass:"value1"},[t._v("退货退款")]):3==t.orderData.refund_type?s("div",{staticClass:"value1"},[t._v("拒绝退款")]):4==t.orderData.refund_type?s("div",{staticClass:"value1"},[t._v("商品待退货")]):5==t.orderData.refund_type?s("div",{staticClass:"value1"},[t._v("退货待收货")]):6==t.orderData.refund_type?s("div",{staticClass:"value2"},[t._v("已退款")]):t._e()])]),s("li",{staticClass:"item"},[s("div",{staticClass:"title"},[t._v("实际支付")]),s("div",[t._v("¥"+t._s(t.orderDatalist.orderInfo.paid>0?t.orderDatalist.orderInfo.pay_price:0))])]),t.formType?s("li",{staticClass:"item"},[s("div",{staticClass:"title"},[t._v("支付方式")]),s("div",[t._v(t._s(t.orderDatalist.orderInfo._status._payType||"-"))])]):s("li",{staticClass:"item"},[s("div",{staticClass:"title"},[t._v("退款件数")]),s("div",[t._v(t._s(t.orderDatalist.orderInfo.total_num||0))])]),t.formType?s("li",{staticClass:"item"},[s("div",{staticClass:"title"},[t._v("支付时间")]),s("div",[t._v(t._s(t.orderDatalist.orderInfo._pay_time||"-"))])]):s("li",{staticClass:"item"},[s("div",{staticClass:"title"},[t._v("退款时间")]),s("div",[t._v(t._s(t.orderDatalist.orderInfo._refund_time||"-"))])])])]),s("Tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[s("TabPane",{attrs:{label:"订单信息",name:"detail"}},[t.formType?t._e():s("div",{staticClass:"section"},[s("div",{staticClass:"title"},[t._v("退款信息")]),s("ul",{staticClass:"list"},[s("li",{staticClass:"item"},[s("div",[t._v("退款原因：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo.refund_reason||"-"))])]),parseFloat(t.orderDatalist.orderInfo.refund_price)?s("li",{staticClass:"item"},[s("div",[t._v("退款金额：")]),s("div",{staticClass:"value"},[t._v(t._s(parseFloat(t.orderDatalist.orderInfo.refund_price)||0))])]):t._e(),parseFloat(t.orderDatalist.orderInfo.back_integral)?s("li",{staticClass:"item"},[s("div",[t._v("退回积分：")]),s("div",{staticClass:"value"},[t._v(t._s(parseFloat(t.orderDatalist.orderInfo.back_integral)||"-"))])]):t._e(),s("li",{staticClass:"item"},[s("div",[t._v("退款说明：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo.refund_explain||"-"))])]),s("li",{staticClass:"item"},[s("div",[t._v("退款凭证：")]),s("div",{staticClass:"value"},t._l(t.orderDatalist.orderInfo.refund_img,(function(t,e){return s("div",{directives:[{name:"viewer",rawName:"v-viewer"}],key:e,staticClass:"image"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"img"}]})])})),0)])])]),!t.formType&&t.orderDatalist.orderInfo.refund_express_name?s("div",{staticClass:"section"},[s("div",{staticClass:"title"},[t._v("退货物流信息")]),s("ul",{staticClass:"list"},[s("li",{staticClass:"item"},[s("div",[t._v("物流公司：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo.refund_express_name||"-"))])]),s("li",{staticClass:"item"},[s("div",[t._v("物流单号：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo.refund_express||"-"))])]),s("li",{staticClass:"item"},[s("div",[t._v("联系电话：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo.refund_phone||"-"))])]),s("li",{staticClass:"item"},[s("div",[t._v("退货说明：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo.refund_goods_explain||"-"))])]),s("li",{staticClass:"item"},[s("div",[t._v("退货凭证：")]),s("div",{staticClass:"value"},t._l(t.orderDatalist.orderInfo.refund_goods_img,(function(t,e){return s("div",{directives:[{name:"viewer",rawName:"v-viewer"}],key:e,staticClass:"image"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"img"}]})])})),0)])])]):t._e(),s("div",{staticClass:"section"},[s("div",{staticClass:"title"},[t._v("用户信息")]),s("ul",{staticClass:"list"},[s("li",{staticClass:"item"},[s("div",[t._v("用户UID：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.userInfo.uid?t.orderDatalist.userInfo.uid:"游客"))])]),s("li",{staticClass:"item"},[s("div",[t._v("用户昵称：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.userInfo.uid?t.orderDatalist.userInfo.nickname:"游客"))])]),s("li",{staticClass:"item"},[s("div",[t._v("绑定电话：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.userInfo.phone||"-"))])])])]),0==t.orderDatalist.orderInfo.product_type?s("div",{staticClass:"section"},[s("div",{staticClass:"title"},[t._v("收货信息")]),s("ul",{staticClass:"list"},[s("li",{staticClass:"item"},[s("div",{staticClass:"value"},[t._v("收货人："+t._s(t.orderDatalist.orderInfo.real_name||"-"))])])]),s("ul",{staticClass:"list"},[s("li",{staticClass:"mt10"},[s("div",{staticClass:"value"},[t._v("收货电话："+t._s(t.orderDatalist.orderInfo.user_phone||"-"))])])]),s("ul",{staticClass:"list"},[s("li",{staticClass:"mt10"},[s("div",{staticClass:"value"},[t._v("收货地址："+t._s(t.orderDatalist.orderInfo.user_address||"-"))])])])]):t._e(),t.orderDatalist.orderInfo.fictitious_content&&1!=t.orderDatalist.orderInfo.cartInfo[0].product_type?s("div",{staticClass:"section"},[s("div",{staticClass:"title"},[t._v("虚拟发货")]),s("ul",{staticClass:"list"},[s("li",{staticClass:"item"},[s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo.fictitious_content))])])])]):t._e(),1==t.orderDatalist.orderInfo.cartInfo[0].product_type?s("div",{staticClass:"section"},[s("div",{staticClass:"title"},[t._v("卡密发货")]),t.orderDatalist.orderInfo.virtual.length?s("div",t._l(t.orderDatalist.orderInfo.virtual,(function(e,a){return s("div",{key:a,staticClass:"list"},[s("div",{staticClass:"item"},[s("div",[t._v("卡号"+t._s(a+1)+"：")]),s("div",{staticClass:"value"},[t._v(t._s(e.card_no))])]),s("div",{staticClass:"item"},[s("div",[t._v("密码"+t._s(a+1)+"：")]),s("div",{staticClass:"value"},[t._v(t._s(e.card_pwd))])])])})),0):s("ul",{staticClass:"list"},[s("li",{staticClass:"item"},[s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo.virtual_info||"-"))])])])]):t._e(),s("div",{staticClass:"section"},[s("div",{staticClass:"title"},[t._v("订单信息")]),s("ul",{staticClass:"list"},[s("li",{staticClass:"item"},[s("div",[t._v("创建时间：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo._add_time||"-"))])]),s("li",{staticClass:"item"},[s("div",[t._v("商品总数：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo.total_num||"-"))])]),s("li",{staticClass:"item"},[s("div",[t._v("商品总价：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo.total_price||"-"))])]),s("li",{staticClass:"item"},[s("div",[t._v("优惠券金额：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo.coupon_price||"-"))])]),s("li",{staticClass:"item"},[s("div",[t._v("积分抵扣：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo.deduction_price||0))])]),parseFloat(t.orderDatalist.orderInfo.use_integral)?s("li",{staticClass:"item"},[s("div",[t._v("使用积分：")]),s("div",{staticClass:"value"},[t._v(t._s(parseFloat(t.orderDatalist.orderInfo.use_integral)))])]):t._e(),s("li",{staticClass:"item"},[s("div",[t._v("支付邮费：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo.pay_postage||"-"))])]),s("li",{staticClass:"item"},[s("div",[t._v("会员商品优惠：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo.vip_true_price||0))])]),2===t.orderDatalist.orderInfo.shipping_type&&0===t.orderDatalist.orderInfo.refund_status&&1===t.orderDatalist.orderInfo.paid?s("li",{staticClass:"item"},[s("div",[t._v("门店名称：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo._store_name||"-"))])]):t._e(),2===t.orderDatalist.orderInfo.shipping_type&&0===t.orderDatalist.orderInfo.refund_status&&1===t.orderDatalist.orderInfo.paid?s("li",{staticClass:"item"},[s("div",[t._v("核销码：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo.verify_code||"-"))])]):t._e(),s("li",{staticClass:"item"},[s("div",[t._v("推广人：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.userInfo.spread_name)+"/ID:"+t._s(t.orderDatalist.userInfo.spread_uid)+"\n                  ")])]),s("li",{staticClass:"item"},[s("div",[t._v("支付时间：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo._pay_time||"-"))])]),s("li",{staticClass:"item"},[s("div",[t._v("支付方式：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo._status._payType||"-"))])]),t.orderDatalist.orderInfo.store_order_sn?s("li",{staticClass:"item"},[s("div",[t._v("原订单号：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo.store_order_sn))])]):t._e(),t._l(t.orderDatalist.orderInfo.promotions_detail,(function(e,a){return s("li",{key:a,staticClass:"item"},[s("div",[t._v(t._s(e.title)+"：")]),s("div",{staticClass:"value"},[t._v("-￥"+t._s(parseFloat(e.promotions_price).toFixed(2)))])])}))],2)]),"express"===t.orderDatalist.orderInfo.delivery_type?s("div",{staticClass:"section"},[s("div",{staticClass:"title"},[t._v("物流信息")]),s("ul",{staticClass:"list"},[s("li",{staticClass:"item"},[s("div",[t._v("快递公司：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo.delivery_name||"-"))])]),s("li",{staticClass:"item"},[s("div",[t._v("快递单号：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo.delivery_id)),s("span",{staticClass:"logisticsLook",on:{click:t.openLogistics}},[t._v("查询")])])])])]):t._e(),"send"===t.orderDatalist.orderInfo.delivery_type?s("div",{staticClass:"section"},[s("div",{staticClass:"title"},[t._v("配送信息")]),s("ul",{staticClass:"list"},[s("li",{staticClass:"item"},[s("div",[t._v("送货人姓名：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo.delivery_name||"-"))])]),s("li",{staticClass:"item"},[s("div",[t._v("送货人电话：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo.delivery_id||"-"))])])])]):t._e(),t.orderDatalist.orderInfo.custom_form.length&&t.isShow?s("div",{staticClass:"section"},[s("div",{staticClass:"title"},[t._v("自定义留言")]),s("ul",{staticClass:"list"},t._l(t.orderDatalist.orderInfo.custom_form,(function(e,a){return e.value?s("li",{key:a,staticClass:"item"},[s("div",[t._v(t._s(e.title)+"：")]),"img"===e.label?s("div",{staticClass:"value"},t._l(e.value,(function(t,e){return s("div",{directives:[{name:"viewer",rawName:"v-viewer"}],key:e,staticClass:"image"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"img"}]})])})),0):s("div",{staticClass:"value"},[t._v(t._s(e.value||"-"))])]):t._e()})),0)]):t._e(),t.orderDatalist.orderInfo.mark?s("div",{staticClass:"section"},[s("div",{staticClass:"title"},[t._v("买家留言")]),s("ul",{staticClass:"list"},[s("li",{staticClass:"item"},[s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo.mark||"-"))])])])]):t._e(),t.orderDatalist.orderInfo.remark?s("div",{staticClass:"section"},[s("div",{staticClass:"title"},[t._v("订单备注")]),s("ul",{staticClass:"list"},[s("li",{staticClass:"item"},[s("div",[t._v("备注：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo.remark||"-"))])])])]):t._e(),t.orderDatalist.orderInfo.refuse_reason?s("div",{staticClass:"section"},[s("div",{staticClass:"title"},[t._v("拒绝退款原因")]),s("ul",{staticClass:"list"},[s("li",{staticClass:"item"},[s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo.refuse_reason))])])])]):t._e(),t.orderDatalist.orderInfo.invoice?s("div",{staticClass:"section"},[s("div",{staticClass:"title"},[t._v("发票信息")]),s("ul",{staticClass:"list"},[s("li",{staticClass:"item"},[s("div",[t._v("发票类型：")]),s("div",{staticClass:"value"},[t._v(t._s(t._f("invoiceType")(t.orderDatalist.orderInfo.invoice.type)))])]),s("li",{staticClass:"item"},[s("div",[t._v("抬头类型：")]),s("div",{staticClass:"value"},[t._v(t._s(t._f("invoiceHeaderType")(t.orderDatalist.orderInfo.invoice.header_type)))])]),s("li",{staticClass:"item"},[s("div",[t._v("发票抬头：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo.invoice.name||"-"))])]),s("li",{staticClass:"item"},[s("div",[t._v("税号：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo.invoice.duty_number||"-"))])]),s("li",{staticClass:"item"},[s("div",[t._v("邮箱：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo.invoice.email||"-"))])]),s("li",{staticClass:"item"},[s("div",[t._v("开户银行：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo.invoice.bank||"-"))])]),s("li",{staticClass:"item"},[s("div",[t._v("企业地址：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo.invoice.address||"-"))])]),s("li",{staticClass:"item"},[s("div",[t._v("企业电话：")]),s("div",{staticClass:"value"},[t._v(t._s(t.orderDatalist.orderInfo.invoice.drawer_phone||"-"))])])])]):t._e()]),s("TabPane",{attrs:{label:"商品信息",name:"product"}},[s("Table",{attrs:{columns:t.columns1,data:t.orderDatalist.orderInfo.cartInfo,"highlight-row":""},scopedSlots:t._u([{key:"product",fn:function(e){var a=e.row;return[s("Tooltip",{attrs:{theme:"dark","max-width":"300",delay:600}},[s("div",{staticClass:"product"},[s("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"image"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.productInfo.attrInfo?a.productInfo.attrInfo.image:a.productInfo.image,expression:"row.productInfo.attrInfo ? row.productInfo.attrInfo.image : row.productInfo.image"}]})]),s("div",{staticClass:"title"},[s("div",{staticClass:"line2"},[a.is_gift?s("span",{staticClass:"font-color-red"},[t._v("[赠品]")]):t._e(),t._v(t._s(a.productInfo.store_name)+" |\n                        "+t._s(a.productInfo.attrInfo?a.productInfo.attrInfo.suk:"")+"\n                      ")])])]),s("div",{attrs:{slot:"content"},slot:"content"},[s("div",[a.is_gift?s("p",{staticClass:"font-color-red"},[t._v("[赠品]")]):t._e(),s("p",[t._v(t._s(a.productInfo.store_name))]),s("p",[t._v(t._s(a.productInfo.attrInfo?a.productInfo.attrInfo.suk:""))])])])])]}}],null,!1,4058604087)})],1),s("TabPane",{attrs:{label:"订单记录",name:"record"}},[s("Table",{attrs:{columns:t.columns2,data:t.recordData,loading:t.loading,"no-data-text":"暂无数据","highlight-row":"","no-filtered-data-text":"暂无筛选结果"}})],1),t.splitList.length?s("TabPane",{attrs:{label:"发货记录",name:"recordList"}},[s("Table",{attrs:{columns:t.columnSplit,data:t.splitList,loading:t.loading,"no-data-text":"暂无数据","highlight-row":"","no-filtered-data-text":"暂无筛选结果"},scopedSlots:t._u([{key:"product",fn:function(e){var a=e.row;return[s("Tooltip",{attrs:{theme:"dark","max-width":"300",delay:600}},[t._l(a._info,(function(e,a){return s("div",{staticClass:"product productTime"},[s("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"image"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.cart_info.productInfo.attrInfo?e.cart_info.productInfo.attrInfo.image:e.cart_info.productInfo.image,expression:"j.cart_info.productInfo.attrInfo ? j.cart_info.productInfo.attrInfo.image : j.cart_info.productInfo.image"}]})]),s("div",{staticClass:"title"},[s("div",{staticClass:"line2"},[e.cart_info.is_gift?s("span",{staticClass:"font-color-red"},[t._v("[赠品]")]):t._e(),t._v("\n                        "+t._s(e.cart_info.productInfo.store_name)+" | "+t._s(e.cart_info.productInfo.attrInfo?e.cart_info.productInfo.attrInfo.suk:"")+"\n                      ")])])])})),s("div",{attrs:{slot:"content"},slot:"content"},t._l(a._info,(function(e,a){return s("div",{key:a},[e.cart_info.is_gift?s("p",{staticClass:"font-color-red"},[t._v("[赠品]")]):t._e(),s("p",[t._v(t._s(e.cart_info.productInfo.store_name))]),s("p",[t._v(t._s(e.cart_info.productInfo.attrInfo?e.cart_info.productInfo.attrInfo.suk:""))]),s("p",{staticClass:"tabBox_pice"},[t._v(t._s("￥"+e.cart_info.sum_price+" x "+e.cart_info.cart_num))])])})),0)],2)]}},{key:"deliveryInfo",fn:function(e){var a=e.row;return[a.add_time?s("div",[t._v("发货时间："+t._s(a.add_time))]):t._e(),"express"==a.delivery_type||"send"==a.delivery_type||"fictitious"==a.delivery_type?s("div",[t._v("\n                  发货方式：\n                  "),"express"==a.delivery_type?s("span",[t._v("物流发货")]):t._e(),"send"==a.delivery_type?s("span",[t._v("送货")]):t._e(),"fictitious"==a.delivery_type?s("span",[t._v("虚拟发货")]):t._e()]):t._e(),a.delivery_name?s("div",[t._v("配   送   人："+t._s(a.delivery_name))]):t._e(),a.delivery_id?s("div",{on:{click:function(e){return t.openItemLogistics(a)}}},[t._v("快递单号："),s("span",{staticStyle:{color:"#1890FF",cursor:"pointer"}},[t._v(t._s(a.delivery_id))])]):t._e()]}},{key:"action",fn:function(e){var a=e.row;e.index;return[2===a._status?s("a",{attrs:{disabled:t.openErp},on:{click:function(e){return t.distribution(a,1)}}},[t._v("分配")]):t._e(),2===a._status?s("Divider",{attrs:{type:"vertical"}}):t._e(),1===a._status?s("a",{attrs:{disabled:t.openErp},on:{click:function(e){return t.edit(a,1)}}},[t._v("编辑")]):t._e(),2!==a._status&&8!==a._status&&4!==a.status||1!==a.shipping_type||null!==a.pinkStatus&&2!==a.pinkStatus?t._e():s("a",{attrs:{disabled:t.openErp},on:{click:function(e){return t.sendOrder(a,1)}}},[t._v("发送货")]),4!==a._status||a.split.length?t._e():s("a",{attrs:{disabled:t.openErp},on:{click:function(e){return t.delivery(a,1)}}},[t._v("配送信息")]),2==a.shipping_type&&0==a.status&&1==a.paid&&0===a.refund_status?s("a",{attrs:{disabled:t.openErp},on:{click:function(e){return t.bindWrite(a,1)}}},[t._v("立即核销")]):t._e(),1===a._status||(2===a._status||a.split.length)&&1===a.shipping_type&&(null===a.pinkStatus||2===a.pinkStatus)||4===a._status||2==a.shipping_type&&0==a.status&&1==a.paid&&0===a.refund_status?s("Divider",{attrs:{type:"vertical"}}):t._e(),[s("Dropdown",{attrs:{transfer:!0},on:{"on-click":function(e){return t.changeMenu("",a,e,1)}}},[s("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n                      更多\n                      "),s("Icon",{attrs:{type:"ios-arrow-down"}})],1),s("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[s("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:1===a._status&&0===a.paid&&"offline"===a.pay_type,expression:"\n                  row._status === 1 &&\n                  row.paid === 0 &&\n                  row.pay_type === 'offline'\n                "}],ref:"ones",attrs:{disabled:t.openErp,name:"1"}},[t._v("立即支付")]),s("DropdownItem",{attrs:{disabled:t.openErp,name:"3"}},[t._v("订单记录")]),s("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:a._status>=3&&a.express_dump,expression:"row._status >= 3 && row.express_dump"}],attrs:{disabled:t.openErp,name:"11"}},[t._v("电子面单打印")]),s("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:a._status>=2,expression:"row._status >= 2"}],attrs:{name:"10"}},[t._v("小票打印")]),s("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:1!==a._status||3===a._status&&a.use_integral>0&&a.use_integral>=a.back_integral,expression:"\n                  row._status !== 1 ||\n                  (row._status === 3 &&\n                    row.use_integral > 0 &&\n                    row.use_integral >= row.back_integral)\n                "}],attrs:{name:"4"}},[t._v("订单备注")]),s("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:2!=a.refund_type&&4!=a.refund_type&&6!=a.refund_type&&1==a.paid&&2!==a.refund_status&&parseFloat(a.pay_price)>0&&(null==a.split||0==a.split.length),expression:"\n                  row.refund_type != 2 &&\n                  row.refund_type != 4 &&\n                  row.refund_type != 6 &&\n                  row.paid == 1 &&\n                  row.refund_status !== 2 &&\n                  parseFloat(row.pay_price) > 0 &&\n                  (row.split == null || row.split.length == 0)\n                "}],attrs:{disabled:t.openErp,name:"5"}},[t._v("立即退款")]),s("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:2==a.refund_type,expression:"row.refund_type == 2"}],attrs:{disabled:t.openErp,name:"55"}},[t._v("同意退货")]),s("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:4===a._status&&!a.split.length,expression:"row._status === 4 && !row.split.length"}],attrs:{disabled:t.openErp,name:"8"}},[t._v("已收货")]),1==a.is_del?s("DropdownItem",{attrs:{disabled:t.openErp,name:"9"}},[t._v("删除订单")]):t._e()],1)],1)]]}}],null,!1,3514357900)})],1):t._e()],1)],1):t._e()]),s("Modal",{staticClass:"order_box2",attrs:{scrollable:"",title:"物流查询",width:"350"},model:{value:t.modal2,callback:function(e){t.modal2=e},expression:"modal2"}},[t.orderDatalist||t.logisticsCon?s("div",{staticClass:"logistics acea-row row-top"},[s("div",{staticClass:"logistics_img"},[s("img",{attrs:{src:a("bd9b")}})]),s("div",{staticClass:"logistics_cent"},[s("span",[t._v("物流公司："+t._s(t.logisticsCon?t.logisticsCon.delivery_name:t.orderDatalist.orderInfo.delivery_name))]),s("span",[t._v("物流单号："+t._s(t.logisticsCon?t.logisticsCon.delivery_id:t.orderDatalist.orderInfo.delivery_id))])])]):t._e(),s("div",{staticClass:"acea-row row-column-around trees-coadd"},[s("div",{staticClass:"scollhide"},[s("Timeline",t._l(t.result,(function(e,a){return s("TimelineItem",{key:a},[s("p",{staticClass:"time",domProps:{textContent:t._s(e.time)}}),s("p",{staticClass:"content",domProps:{textContent:t._s(e.status)}})])})),1)],1)])])],1)},i=[],r=a("a34a"),o=a.n(r),n=a("f8b7");function l(t,e,a,s,i,r,o){try{var n=t[r](o),l=n.value}catch(d){return void a(d)}n.done?e(l):Promise.resolve(l).then(s,i)}function d(t){return function(){var e=this,a=arguments;return new Promise((function(s,i){var r=t.apply(e,a);function o(t){l(r,s,i,o,n,"next",t)}function n(t){l(r,s,i,o,n,"throw",t)}o(void 0)}))}}var c={name:"orderDetails",filters:{invoiceType:function(t){return 1==t?"电子普通发票":"纸质专用发票"},invoiceHeaderType:function(t){return 1==t?"个人":"企业"}},data:function(){return{isShow:0,modal2:!1,modals:!1,grid:{xl:8,lg:8,md:12,sm:24,xs:24},result:[],columns1:[{title:"商品信息",slot:"product",minWidth:400},{title:"售价",key:"sum_price"},{title:"实付金额",key:"truePrice"},{title:"数量",key:"cart_num"},{title:"小计",render:function(t,e){return t("div",(e.row.truePrice*e.row.cart_num).toFixed(2))}}],columns2:[{title:"订单ID",key:"oid",minWidth:40},{title:"操作记录",key:"change_message",minWidth:280},{title:"操作时间",key:"change_time",minWidth:100}],columnSplit:[{title:"订单号",key:"order_id",minWidth:100},{title:"商品信息",slot:"product",minWidth:250},{title:"发货信息",slot:"deliveryInfo",minWidth:100},{title:"操作",slot:"action",minWidth:90}],recordData:[],activeName:"detail",orderData:{},splitList:[],logisticsCon:{}}},props:{orderDatalist:Object,orderId:Number,rowActive:Object,formType:{type:Number,default:0},openErp:{type:Boolean,default:!1}},watch:{orderDatalist:function(t){this.orderData=t.orderInfo,this.getList(this.formType?t.orderInfo.id:t.orderInfo.store_order_id),this.formType&&this.getSplitOrder(t.orderInfo.id)},orderData:function(t){var e=this;t&&t.custom_form&&t.custom_form.length&&t.custom_form.forEach((function(t){if(t.value)return e.isShow=1}))}},mounted:function(){var t=this;this.orderData&&this.orderData.custom_form&&this.orderData.custom_form.length&&this.orderData.custom_form.forEach((function(e){if(e.value)return t.isShow=1}))},methods:{openItemLogistics:function(t){var e=this;this.logisticsCon=t,this.modal2=!0,Object(n["h"])(t.id).then(function(){var t=d(o.a.mark((function t(a){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.result=a.data.result;case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},openLogistics:function(){this.modal2=!0,this.getOrderData()},getOrderData:function(){var t=this;Object(n["h"])(this.formType?this.orderDatalist.orderInfo.id:this.orderDatalist.orderInfo.store_order_id).then(function(){var e=d(o.a.mark((function e(a){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.result=a.data.result;case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},getSplitOrder:function(t){var e=this;Object(n["Q"])(t,{status:2}).then((function(t){e.splitList=t.data})).catch((function(t){e.$Message.error(t.msg)}))},getList:function(t){var e=this,a={id:t,datas:this.page};this.loading=!0,Object(n["k"])(a).then(function(){var t=d(o.a.mark((function t(a){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.recordData=a.data,e.loading=!1;case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.loading=!1,e.$Message.error(t.msg)}))},changeMenu:function(t,e,a,s){s?this.$parent.changeMenu(e,a,s):this.$parent.changeMenu(this.rowActive,t)},distribution:function(t,e){e?this.$parent.distribution(t):this.$parent.distribution(this.rowActive)},edit:function(t,e){e?this.$parent.edit(t):this.$parent.edit(this.rowActive)},sendOrder:function(t,e){e?this.$parent.sendOrder(t,e):this.$parent.sendOrder(this.rowActive)},delivery:function(t,e){e?this.$parent.delivery(t,e):this.$parent.delivery(this.rowActive)},bindWrite:function(t,e){e?this.$parent.bindWrite(t):this.$parent.bindWrite(this.rowActive)}},computed:{}},v=c,u=(a("d63d"),a("ddbd"),a("2877")),_=Object(u["a"])(v,s,i,!1,null,"34fbddf2",null);e["a"]=_.exports}}]);