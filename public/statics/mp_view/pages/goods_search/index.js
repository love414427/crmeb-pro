(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods_search/index"],{"1aa7":function(t,e,n){"use strict";n.r(e);var o=n("dcd2"),i=n("f8ed");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("4816");var s,c=n("f0c5"),r=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);e["default"]=r.exports},"1cae":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("16a8"),i=n("4e1f"),a=c(n("d0ca")),s=n("12b8");function c(t){return t&&t.__esModule?t:{default:t}}var r=function(){Promise.all([n.e("common/vendor"),n.e("components/home/index")]).then(function(){return resolve(n("f176"))}.bind(null,n)).catch(n.oe)},u=function(){Promise.all([n.e("common/vendor"),n.e("components/goodList/index")]).then(function(){return resolve(n("e15d"))}.bind(null,n)).catch(n.oe)},l=function(){Promise.all([n.e("common/vendor"),n.e("components/recommend/index")]).then(function(){return resolve(n("34f7"))}.bind(null,n)).catch(n.oe)},d={components:{goodList:u,recommend:l,home:r},mixins:[a.default],data:function(){return{hostProduct:[],searchValue:"",focus:!0,bastList:[],hotSearchList:[],first:0,limit:8,page:1,loading:!1,loadend:!1,loadTitle:"加载更多",hotPage:1,isScroll:!0,history:[],imgHost:s.HTTP_REQUEST_URL}},onShow:function(){this.getHostProduct(),this.searchList();try{this.hotSearchList=t.getStorageSync("hotList")}catch(e){}},onReachBottom:function(){this.bastList.length>0?this.getProductList():this.getHostProduct()},methods:{searchList:function(){var t=this;(0,i.searchList)({page:1,limit:10}).then((function(e){t.history=e.data}))},clear:function(){var e=this;(0,i.clearSearch)().then((function(n){t.showToast({title:n.msg,success:function(){e.history=[]}})}))},inputConfirm:function(e){e.detail.value&&(t.hideKeyboard(),this.setHotSearchValue(e.detail.value))},getRoutineHotSearch:function(){var t=this;(0,o.getSearchKeyword)().then((function(e){t.$set(t,"hotSearchList",e.data)}))},getProductList:function(){var t=this;t.loadend||t.loading||(t.loading=!0,t.loadTitle="",(0,o.getProductslist)({keyword:t.searchValue,page:t.page,limit:t.limit}).then((function(e){var n=e.data,o=n.length<t.limit;t.bastList=t.$util.SplitArray(n,t.bastList),t.$set(t,"bastList",t.bastList),t.loading=!1,t.loadend=o,t.loadTitle=o?"没有更多内容啦~":"加载更多",t.page=t.page+1})).catch((function(e){t.loading=!1,t.loadTitle="加载更多"})))},getHostProduct:function(){var t=this;this.isScroll&&(0,o.getProductHot)(t.hotPage,t.limit).then((function(e){t.isScroll=e.data.length>=t.limit,t.hostProduct=t.hostProduct.concat(e.data),t.hotPage+=1}))},setHotSearchValue:function(t){this.$set(this,"searchValue",t),this.page=1,this.loadend=!1,this.$set(this,"bastList",[]),this.getProductList()},setValue:function(t){this.$set(this,"searchValue",t.detail.value)},searchBut:function(){var e=this;if(e.focus=!1,!(e.searchValue.length>0))return this.$util.Tips({title:"请输入要搜索的商品",icon:"none",duration:1e3,mask:!0});e.page=1,e.loadend=!1,e.$set(e,"bastList",[]),t.showLoading({title:"正在搜索中"}),e.getProductList(),t.hideLoading()}}};e.default=d}).call(this,n("543d")["default"])},4816:function(t,e,n){"use strict";var o=n("a8ce"),i=n.n(o);i.a},"8f73":function(t,e,n){"use strict";(function(t){n("22b3");o(n("66fd"));var e=o(n("1aa7"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},a8ce:function(t,e,n){},dcd2:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement;t._self._c},a=[]},f8ed:function(t,e,n){"use strict";n.r(e);var o=n("1cae"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a}},[["8f73","common/runtime","common/vendor"]]]);