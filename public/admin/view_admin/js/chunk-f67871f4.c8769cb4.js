(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f67871f4"],{4777:function(module,__webpack_exports__,__webpack_require__){"use strict";var _api_setting__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("90e7");function _typeof(e){return _typeof="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}__webpack_exports__["a"]={mounted:function(){this.getNewFormBuildRule()},methods:{getNewFormBuildRule:function getNewFormBuildRule(){var _this=this;Object(_api_setting__WEBPACK_IMPORTED_MODULE_0__["u"])(this.type?this.type:this.typeMole).then((function(res){_this.rules=res.data.rules,_this.url=res.data.url;var validate=res.data.validate;Object.keys(validate).map((function(key){"object"===_typeof(validate[key])&&validate[key].map((function(item){void 0!==item.pattern&&(item.pattern=eval(item.pattern))}))})),_this.ruleValidate=validate}))},setRulesValue:function(e,t){var o=this;return e.map((function(e){void 0!==e.field&&(e.value=t[e.field]||""),"object"===_typeof(e.options)&&e.options.map((function(e){void 0!==e.componentsModel&&(e.componentsModel=o.setRulesValue(e.componentsModel,t))})),"object"===_typeof(e.control)&&e.control.map((function(e){void 0!==e.componentsModel&&(e.componentsModel=o.setRulesValue(e.componentsModel,t))})),"object"===_typeof(e.componentsModel)&&(e.componentsModel=o.setRulesValue(e.componentsModel,t))})),e}}}},b7c4:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("from-submit",{attrs:{validate:e.ruleValidate,url:e.url,title:e.title,rules:e.rules}})},i=[],l=o("524f"),u=o("4777"),a={name:"index",components:{fromSubmit:l["a"]},mixins:[u["a"]],data:function(){return{ruleValidate:{},rules:[],url:"",title:"微信开放平台",type:"wxopen"}}},r=a,s=o("2877"),p=Object(s["a"])(r,n,i,!1,null,"130b0656",null);t["default"]=p.exports}}]);