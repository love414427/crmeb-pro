(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6799a300"],{"370a":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Table",{ref:"table",staticClass:"orderData mt25",attrs:{columns:t.columns,data:t.orderList,loading:t.loading,"highlight-row":"","no-data-text":"暂无数据","no-filtered-data-text":"暂无筛选结果"},scopedSlots:t._u([{key:"order_id",fn:function(e){var a=e.row;e.index;return[r("span",{staticStyle:{display:"block"},domProps:{textContent:t._s(a.order_id)}}),r("span",{directives:[{name:"show",rawName:"v-show",value:1===a.is_del,expression:"row.is_del === 1"}],staticStyle:{color:"#ed4014",display:"block"}},[t._v("用户已删除")])]}},{key:"nickname",fn:function(e){var a=e.row;e.index;return[r("a",{on:{click:function(e){return t.showUserInfo(a)}}},[t._v(t._s(a.nickname)),r("span",{staticStyle:{"margin-left":"5px"}},[t._v("/"+t._s(a.uid))])])]}},{key:"info",fn:function(e){var a=e.row;e.index;return t._l(a._info,(function(e,a){return r("div",{key:a,staticClass:"tabBox"},[r("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.cart_info.productInfo.attrInfo?e.cart_info.productInfo.attrInfo.image:e.cart_info.productInfo.image,expression:"\n                val.cart_info.productInfo.attrInfo\n                  ? val.cart_info.productInfo.attrInfo.image\n                  : val.cart_info.productInfo.image\n              "}]})]),r("span",{staticClass:"tabBox_tit"},[t._v("\n\t\t\t\t\t\t"+t._s(e.cart_info.productInfo.store_name+" | ")+t._s(e.cart_info.productInfo.attrInfo?e.cart_info.productInfo.attrInfo.suk:"")+"\n\t\t\t\t\t")]),r("span",{staticClass:"tabBox_pice"},[t._v(t._s("￥"+e.cart_info.truePrice+" x "+e.cart_info.cart_num))])])}))}},{key:"statusName",fn:function(e){var a=e.row;e.index;return[r("div",{staticClass:"pt5",domProps:{innerHTML:t._s(a.status_name.status_name)}}),r("div",{staticClass:"pictrue-box"},t._l(a.status_name.pics||[],(function(e,s){return a.status_name.pics?r("div",{directives:[{name:"viewer",rawName:"v-viewer"}],key:s},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"item"}],staticClass:"pictrue mr10",attrs:{src:e}})]):t._e()})),0)]}},{key:"action",fn:function(e){var a=e.row;e.index;return[1===a._status?r("a",{on:{click:function(e){return t.edit(a)}}},[t._v("编辑")]):t._e(),2!==a._status&&8!==a._status||1!==a.shipping_type||null!==a.pinkStatus&&2!==a.pinkStatus?t._e():r("a",{on:{click:function(e){return t.sendOrder(a)}}},[t._v("发送货")]),4===a._status?r("a",{on:{click:function(e){return t.delivery(a)}}},[t._v("配送信息")]):t._e(),2==a.shipping_type&&0==a.status&&1==a.paid&&0===a.refund_status?r("a",{on:{click:function(e){return t.bindWrite(a)}}},[t._v("立即核销")]):t._e(),1===a._status||(2===a._status||8===a._status)&&(null===a.pinkStatus||2===a.pinkStatus)||4===a._status||2==a.shipping_type&&0==a.status&&1==a.paid&&0===a.refund_status?r("Divider",{attrs:{type:"vertical"}}):t._e(),[r("Dropdown",{on:{"on-click":function(e){return t.changeMenu(a,e)}}},[r("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n\t\t\t\t\t\t\t更多\n\t\t\t\t\t\t\t"),r("Icon",{attrs:{type:"ios-arrow-down"}})],1),r("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[r("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:1===a._status&&0===a.paid&&"offline"===a.pay_type,expression:"\n                  row._status === 1 &&\n                  row.paid === 0 &&\n                  row.pay_type === 'offline'\n                "}],ref:"ones",attrs:{name:"1"}},[t._v("立即支付")]),r("DropdownItem",{attrs:{name:"2"}},[t._v("订单详情")]),r("DropdownItem",{attrs:{name:"3"}},[t._v("订单记录")]),r("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:a._status>=3&&a.express_dump,expression:"row._status >= 3 && row.express_dump"}],attrs:{name:"11"}},[t._v("电子面单打印")]),r("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:a._status>=2,expression:"row._status >= 2"}],attrs:{name:"10"}},[t._v("小票打印")]),r("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:1!==a._status||3===a._status&&a.use_integral>0&&a.use_integral>=a.back_integral,expression:"\n                  row._status !== 1 ||\n                  (row._status === 3 &&\n                    row.use_integral > 0 &&\n                    row.use_integral >= row.back_integral)\n                "}],attrs:{name:"4"}},[t._v("订单备注")]),r("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:2!=a.refund_type&&4!=a.refund_type&&6!=a.refund_type&&1==a.paid&&2!==a.refund_status&&parseFloat(a.pay_price)>0,expression:"row.refund_type != 2 && row.refund_type != 4 && row.refund_type != 6 && row.paid==1 && row.refund_status !==2 && parseFloat(row.pay_price) > 0"}],attrs:{name:"5"}},[t._v("立即退款")]),r("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:2==a.refund_type,expression:"row.refund_type == 2"}],attrs:{name:"55"}},[t._v("同意退货")]),r("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:4===a._status,expression:"row._status === 4"}],attrs:{name:"8"}},[t._v("已收货")]),1==a.is_del?r("DropdownItem",{attrs:{name:"9"}},[t._v("删除订单")]):t._e()],1)],1)]]}}])}),r("edit-from",{ref:"edits",attrs:{FromData:t.FromData},on:{submitFail:t.submitFail}}),r("user-details",{ref:"userDetails"}),r("details-from",{ref:"detailss",attrs:{orderDatalist:t.orderDatalist,orderId:t.orderId}}),r("order-remark",{ref:"remarks",attrs:{orderId:t.orderId},on:{submitFail:t.submitFail}}),r("order-record",{ref:"record"}),r("order-send",{ref:"send",attrs:{orderId:t.orderId,status:t.status},on:{submitFail:t.submitFail}})],1)},s=[],n=r("a34a"),i=r.n(n),o=r("a464"),d=r("f8b7"),c=r("31b4"),u=r("91b4"),l=r("7dc5"),f=r("5465"),m=r("1a84"),p=r("759d");function h(t,e,r,a,s,n,i){try{var o=t[n](i),d=o.value}catch(c){return void r(c)}o.done?e(d):Promise.resolve(d).then(a,s)}function _(t){return function(){var e=this,r=arguments;return new Promise((function(a,s){var n=t.apply(e,r);function i(t){h(n,a,s,i,o,"next",t)}function o(t){h(n,a,s,i,o,"throw",t)}i(void 0)}))}}var v={name:"table_list",components:{expandRow:o["a"],editFrom:c["a"],detailsFrom:u["a"],orderRemark:l["a"],orderRecord:f["a"],orderSend:m["a"],userDetails:p["a"]},props:["where","isAll"],data:function(){return{columns:[{type:"expand",width:30,render:function(t,e){return t(o["a"],{props:{row:e.row}})}},{title:"订单号",align:"center",slot:"order_id",minWidth:150},{title:"订单类型",key:"pink_name",minWidth:120},{title:"用户信息",slot:"nickname",minWidth:100},{title:"商品信息",slot:"info",minWidth:330},{title:"实际支付",key:"pay_price",minWidth:70},{title:"支付时间",key:"_pay_time",minWidth:100},{title:"支付状态",key:"pay_type_name",minWidth:80},{title:"订单状态",key:"statusName",slot:"statusName",minWidth:120},{title:"操作",slot:"action",fixed:"right",minWidth:150,align:"center"}],orderList:[],FromData:null,orderId:0,status:0,orderDatalist:null,delfromData:{},loading:!1,modal:!1}},mounted:function(){},created:function(){this.getList()},watch:{},methods:{getList:function(){var t=this;this.loading=!0,Object(d["ab"])(this.$route.query.id).then(function(){var e=_(i.a.mark((function e(r){return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.orderList=r.data,t.loading=!1;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},showUserInfo:function(t){this.$refs.userDetails.modals=!0,this.$refs.userDetails.getDetails(t.uid)},edit:function(t){this.getOrderData(t.id)},getOrderData:function(t){var e=this;Object(d["x"])(t).then(function(){var t=_(i.a.mark((function t(r){return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!1!==r.data.status){t.next=2;break}return t.abrupt("return",e.$authLapse(r.data));case 2:e.$authLapse(r.data),e.FromData=r.data,e.$refs.edits.modals=!0;case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},sendOrder:function(t){var e=this;this.$refs.send.modals=!0,this.orderId=t.id,this.status=t._status,this.$refs.send.getList(),this.$refs.send.getDeliveryList(),this.$nextTick((function(r){e.$refs.send.getCartInfo(t._status,t.id)}))},bindWrite:function(t){var e=this;this.$Modal.confirm({title:"提示",content:"确定要核销该订单吗？",cancelText:"取消",closable:!0,maskClosable:!0,onOk:function(){Object(d["eb"])(t.order_id).then((function(t){e.$Message.success(t.msg),e.getList()}))},onCancel:function(){}})},changeMenu:function(t,e){var r=this;switch(this.orderId=t.id,e){case"1":this.delfromData={title:"修改立即支付",url:"/order/pay_offline/".concat(t.id),method:"post",ids:""},this.$modalSure(this.delfromData).then((function(t){r.$Message.success(t.msg),r.getList()})).catch((function(t){r.$Message.error(t.msg)}));break;case"2":this.getData(t.id);break;case"3":this.$refs.record.modals=!0,this.$refs.record.getList(t.id);break;case"4":this.$refs.remarks.modals=!0;break;case"5":this.getOnlyRefundData(t.id,t.refund_type);break;case"55":this.getRefundData(t.id,t.refund_type);break;case"8":this.delfromData={title:"修改确认收货",url:"/order/take/".concat(t.id),method:"put",ids:""},this.$modalSure(this.delfromData).then((function(t){r.$Message.success(t.msg),r.getList()})).catch((function(t){r.$Message.error(t.msg)}));break;case"10":this.delfromData={title:"立即打印订单",info:"您确认打印此订单吗?",url:"/order/print/".concat(t.id),method:"get",ids:""},this.$modalSure(this.delfromData).then((function(t){r.$Message.success(t.msg),r.getList()})).catch((function(t){r.$Message.error(t.msg)}));break;case"11":this.delfromData={title:"立即打印电子面单",info:"您确认打印此电子面单吗?",url:"/order/order_dump/".concat(t.id),method:"get",ids:""},this.$modalSure(this.delfromData).then((function(t){r.$Message.success(t.msg),r.getList()})).catch((function(t){r.$Message.error(t.msg)}));break;default:this.delfromData={title:"删除订单",url:"/order/del/".concat(t.id),method:"DELETE",ids:""},this.delOrder(t,this.delfromData)}},getOnlyRefundData:function(t,e){var r=this;this.$modalForm(Object(d["A"])(t)).then((function(){r.getList()}))},getRefundData:function(t,e){var r=this;this.$route.query.orderChartType;this.delfromData={title:"是否立即退货退款",url:"/refund/agree/".concat(t),method:"get"},this.$modalSure(this.delfromData).then((function(t){r.$Message.success(t.msg),r.getList()})).catch((function(t){r.$Message.error(t.msg)}))},getData:function(t){var e=this;Object(d["r"])(t).then(function(){var t=_(i.a.mark((function t(r){return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$refs.detailss.modals=!0,e.orderDatalist=r.data,e.orderDatalist.orderInfo.refund_reason_wap_img)try{e.orderDatalist.orderInfo.refund_reason_wap_img=JSON.parse(e.orderDatalist.orderInfo.refund_reason_wap_img)}catch(a){e.orderDatalist.orderInfo.refund_reason_wap_img=[]}case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},delOrder:function(t,e){var r=this;if(1===t.is_del)this.$modalSure(e).then((function(t){r.$Message.success(t.msg),r.getList()})).catch((function(t){r.$Message.error(t.msg)}));else{var a="错误！",s="<p>您选择的的订单存在用户未删除的订单，无法删除用户未删除的订单！</p>";this.$Modal.error({title:a,content:s})}},submitFail:function(){this.status=0,this.getList()},delivery:function(t){var e=this;Object(d["s"])(t.id).then(function(){var t=_(i.a.mark((function t(r){return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.FromData=r.data,e.$refs.edits.modals=!0;case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))}}},w=v,g=(r("b7de"),r("2877")),y=Object(g["a"])(w,a,s,!1,null,"43006cde",null);e["default"]=y.exports},b7de:function(t,e,r){"use strict";var a=r("b98c"),s=r.n(a);s.a},b98c:function(t,e,r){}}]);