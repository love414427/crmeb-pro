(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/admin/store/statistics/index"],{"612b":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a("6722"),n=function(){a.e("components/Loading/index").then(function(){return resolve(a("4918"))}.bind(null,a)).catch(a.oe)},r=function(){Promise.all([a.e("common/vendor"),a.e("components/uni-calendar/uni-calendar")]).then(function(){return resolve(a("59a2"))}.bind(null,a)).catch(a.oe)},s=(new Date).getFullYear(),o=(new Date).getMonth()+1,c=(new Date).getDate(),h={name:"Statistics",components:{uniCalendar:r,Loading:n},props:{},data:function(){return{cardData:{data:[],list:[]},datalist:!1,tip:1,value:[[s,o,c-1],[s,o,c]],isrange:!0,weekSwitch:!1,ismulti:!1,monFirst:!0,clean:!1,lunar:!1,renderValues:[],monthRange:[],current:!1,where:{start:"",stop:"",is_manager:"",page:1,limit:15},types:"",time:"today",title:"",loaded:!1,loading:!1,list:[],cWidth:"",cHeight:"",LineA:{categories:["2012","2013","2014","2015","2016","2017"],series:[{data:[35,8,25,37,4,20]}]},info:{startDate:"",endDate:"",lunar:!1,range:!0,insert:!1,selected:[],showMonth:!1},type:"",before:"",after:""}},onLoad:function(t){this.type=t.type,t.before&&(this.before=t.before),t.after&&(this.after=t.after),t.manager&&(this.where.is_manager=t.manager),this.cWidth=e.upx2px(690),this.cHeight=e.upx2px(500),this.setTime(t.time)},methods:{getList:function(){var e=this;this.loading=!0,(0,i.getStatisticsListApi)(this.type,this.where).then((function(t){e.cardData.data=t.data.data,e.datalist=!0,e.where.page+=1,e.loading=!1,e.cardData.list=e.cardData.list.concat(t.data.list),t.data.list.length<e.where.limit&&(e.tip=2)}))},setTime:function(e){var t=this;this.time=e;var a=(new Date).getFullYear(),i=(new Date).getMonth()+1,n=(new Date).getDate();switch(this.list=[],this.tip=1,this.cardData={data:[],list:[]},this.where.page=1,this.loaded=!1,this.loading=!1,e){case"today":this.where.start=new Date(Date.parse(a+"/"+i+"/"+n)).getTime()/1e3,this.where.stop=new Date(Date.parse(a+"/"+i+"/"+n)).getTime()/1e3+86400-1,this.title="今日",this.getList();break;case"yesterday":this.where.start=new Date(Date.parse(a+"/"+i+"/"+n)).getTime()/1e3-86400,this.where.stop=new Date(Date.parse(a+"/"+i+"/"+n)).getTime()/1e3-1,this.title="昨日",this.getList();break;case"month":this.where.start=new Date(a,(new Date).getMonth(),1).getTime()/1e3,this.where.stop=new Date(a,i,1).getTime()/1e3-1,this.title="本月",this.getList();break;case"seven":this.where.start=new Date(Date.parse(a+"/"+i+"/"+n)).getTime()/1e3+86400-604800,this.where.stop=new Date(Date.parse(a+"/"+i+"/"+n)).getTime()/1e3+86400-1,this.title="七日",this.getList();break;case"date":var r=new Date(t.before).getTime()/1e3,s=new Date(t.after).getTime()/1e3;t.where.start=r,t.where.stop=s,Promise.all([t.getList()]);break}},dateTitle:function(){e.navigateTo({url:"/pages/admin/store/custom_date/index?type="+this.type})},close:function(){this.current=!1},confirm:function(e){var t,a,i=this;e.range.after&&e.range.before&&(e.range.before>e.range.after?(t=new Date(e.range.after+" 00:00:00").getTime()/1e3,a=new Date(e.range.before+" 23:59:59").getTime()/1e3):(t=new Date(e.range.before+" 00:00:00").getTime()/1e3,a=new Date(e.range.after+" 23:59:59").getTime()/1e3),i.where.start=t,i.where.stop=a,i.list=[],i.cardData.list=[],i.where.page=1,i.loaded=!1,i.loading=!1,Promise.all([i.getList()]))}},onReachBottom:function(){1==this.tip&&this.getList()}};t.default=h}).call(this,a("543d")["default"])},"6ffa":function(e,t,a){"use strict";a.r(t);var i=a("7ca8"),n=a("ccf8");for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);a("9d72");var s,o=a("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"72be585b",null,!1,i["a"],s);t["default"]=c.exports},"756f":function(e,t,a){"use strict";(function(e){a("22b3");i(a("66fd"));var t=i(a("6ffa"));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=a,e(t.default)}).call(this,a("543d")["createPage"])},"7ca8":function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return i}));var n=function(){var e=this,t=e.$createElement;e._self._c},r=[]},"9d72":function(e,t,a){"use strict";var i=a("f274"),n=a.n(i);n.a},ccf8:function(e,t,a){"use strict";a.r(t);var i=a("612b"),n=a.n(i);for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);t["default"]=n.a},f274:function(e,t,a){}},[["756f","common/runtime","common/vendor"]]]);