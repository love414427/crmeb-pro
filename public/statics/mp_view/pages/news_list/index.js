(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news_list/index"],{"3de6":function(t,e,i){"use strict";(function(t){i("22b3");n(i("66fd"));var e=n(i("bbc3"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},9352:function(t,e,i){"use strict";var n=i("c508"),a=i.n(n);a.a},"9ad5":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("4e1f"),a=c(i("d0ca"));function c(t){return t&&t.__esModule?t:{default:t}}var r=function(){Promise.all([i.e("common/vendor"),i.e("components/home/index")]).then(function(){return resolve(i("f176"))}.bind(null,i)).catch(i.oe)},s={components:{home:r},mixins:[a.default],data:function(){return{imgUrls:[],articleList:[],indicatorDots:!1,circular:!0,autoplay:!0,interval:3e3,duration:500,navList:[],active:0,page:1,limit:8,status:!1,scrollLeft:0}},onShow:function(){this.getArticleHot(),this.getArticleBanner(),this.getArticleCate(),this.status=!1,this.page=1,this.articleList=[],this.getCidArticle()},onReachBottom:function(){this.getCidArticle()},methods:{getArticleHot:function(){var t=this;(0,n.getArticleHotList)().then((function(e){t.$set(t,"articleList",e.data)}))},getArticleBanner:function(){var t=this;(0,n.getArticleBannerList)().then((function(e){t.imgUrls=e.data}))},getCidArticle:function(){var t=this;if(0!=t.active){var e=t.limit,i=t.page,a=t.articleList;t.status||(0,n.getArticleList)(t.active,{page:i,limit:e}).then((function(i){var n=[],c=i.length;n=a.concat(i.data),t.page++,t.$set(t,"articleList",n),t.status=e>c,t.page=t.page}))}},getArticleCate:function(){var t=this;(0,n.getArticleCategoryList)().then((function(e){t.$set(t,"navList",e.data)}))},tabSelect:function(t,e){this.active=t,this.scrollLeft=60*e,0==this.active?this.getArticleHot():(this.$set(this,"articleList",[]),this.page=1,this.status=!1,this.getCidArticle())}}};e.default=s},bbc3:function(t,e,i){"use strict";i.r(e);var n=i("d65a"),a=i("e326");for(var c in a)"default"!==c&&function(t){i.d(e,t,(function(){return a[t]}))}(c);i("9352");var r,s=i("f0c5"),o=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);e["default"]=o.exports},c508:function(t,e,i){},d65a:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return c})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement;t._self._c},c=[]},e326:function(t,e,i){"use strict";i.r(e);var n=i("9ad5"),a=i.n(n);for(var c in n)"default"!==c&&function(t){i.d(e,t,(function(){return n[t]}))}(c);e["default"]=a.a}},[["3de6","common/runtime","common/vendor"]]]);