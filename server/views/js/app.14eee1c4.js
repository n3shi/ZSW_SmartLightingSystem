(function(t){function e(e){for(var o,a,c=e[0],r=e[1],u=e[2],d=0,h=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&h.push(s[a][0]),s[a]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);l&&l(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,c=1;c<n.length;c++){var r=n[c];0!==s[r]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},s={app:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=r;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"05e8":function(t,e,n){},"0d17":function(t,e,n){"use strict";n("f35b")},"18a4":function(t,e,n){"use strict";n("633a")},"3d10":function(t,e,n){"use strict";n("05e8")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Manager")],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"window",class:{windowDarkMode:t.darkmode,windowLightMode:!t.darkmode}},[n("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Roboto&display=swap",rel:"stylesheet"}}),n("div",{class:{sidePanelDarkMode:t.darkmode,sidePanelLightMode:!t.darkmode}},[n("SideMenu")],1),""!=this.roomName?n("div",{staticClass:"mainPanel"},[n("div",{staticClass:"test"},[n("ControlPanel")],1),n("div",{staticClass:"row"},[n("div",{staticClass:"column"},[n("LightSources"),n("Schedule")],1),this.active?n("LightDetail"):t._e()],1)]):t._e()])},c=[],r=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mainWrapper",class:{sidePanelDarkMode:this.darkMode,sidePanelLightMode:!this.darkMode}},[n("button",{staticClass:"resetButton closeButton",on:{click:this.close}},[n("v-icon",{attrs:{name:"times",scale:"2"}})],1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.test,expression:"test"}],staticClass:"lightsourceName",attrs:{type:"text",placeholder:t.choosenBlock.name,value:"choosenBlock.name"},domProps:{value:t.test},on:{change:function(e){return t.setLightName(t.test)},input:function(e){e.target.composing||(t.test=e.target.value)}}}),n("div",{staticClass:"lightIntensityContainer"},[n("p",{staticClass:"lightIntensity"},[t._v(" Light intensity ")]),n("div",{staticClass:"lightIntensitySliderContainer"},[n("v-icon",{attrs:{name:"sun",scale:"1.5"}}),n("div",{staticClass:"slider"},[n("vue-slider",t._b({on:{change:function(e){t.choosenBlock.funcArg=t.lightValue}},model:{value:t.lightValue,callback:function(e){t.lightValue=e},expression:"lightValue"}},"vue-slider",t.options,!1))],1),n("v-icon",{attrs:{name:"sun",scale:"1.5",color:"#ffba08"}})],1)]),n("div",{staticClass:"buttonsContainer"},[n("button",{staticClass:"resetButton buttonContainer",class:{onButtonLightMode:"on"===this.choosenBlock.func&&!this.darkMode,onButtonDarkMode:"on"===this.choosenBlock.func&&this.darkMode,offButtonLightMode:"off"===this.choosenBlock.func&&!this.darkMode,offButtonDarkMode:"off"===this.choosenBlock.func&&this.darkMode},on:{click:function(e){return t.setLight("on")}}},[t._v(" On ")]),n("button",{staticClass:"resetButton buttonContainer",class:{onButtonLightMode:"off"===this.choosenBlock.func&&!this.darkMode,onButtonDarkMode:"off"===this.choosenBlock.func&&this.darkMode,offButtonLightMode:"on"===this.choosenBlock.func&&!this.darkMode,offButtonDarkMode:"on"===this.choosenBlock.func&&this.darkMode},on:{click:function(e){return t.setLight("off")}}},[t._v(" Off ")])]),n("vue-timepicker",{attrs:{format:"HH:mm"},on:{change:t.changeBeginTime},model:{value:t.beginTimeInput,callback:function(e){t.beginTimeInput=e},expression:"beginTimeInput"}}),n("vue-timepicker",{attrs:{format:"HH:mm"},on:{change:t.changeEndTime},model:{value:t.endTimeInput,callback:function(e){t.endTimeInput=e},expression:"endTimeInput"}}),n("button",{staticClass:"resetButton deletebutton"},[t._v(" Delete ")]),n("SheduleAdd")],1)}),u=[],l=(n("c740"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")}),d=[],h={name:"SheduleAdd"},m=h,f=(n("f7f8"),n("2877")),g=Object(f["a"])(m,l,d,!1,null,null,null),v=g.exports,p=n("4971"),k=n.n(p),b=(n("24df"),n("0874")),S=(n("c52b"),n("c860"),n("97fc")),C=n.n(S),B=(n("1e11"),{name:"LightSourceDetail",components:{SheduleAdd:v,VueSlider:k.a,"v-icon":b["a"],VueTimepicker:C.a},data:function(){return{isOn:void 0,lightValue:0,test:"",beginTimeInput:"",endTimeInput:"",options:{dotSize:14,width:"auto",height:4,contained:!1,direction:"ltr",data:null,min:0,max:100,interval:1,disabled:!1,clickable:!0,duration:.5,adsorb:!1,lazy:!0,tooltip:"active",tooltipPlacement:"top",tooltipFormatter:void 0,useKeyboard:!1,keydownHook:null,dragOnClick:!1,enableCross:!0,fixed:!1,minRange:void 0,maxRange:void 0,order:!0,marks:!1,dotOptions:void 0,process:!0,dotStyle:void 0,railStyle:void 0,processStyle:{"background-color":"#ffba08"},tooltipStyle:void 0,stepStyle:void 0,stepActiveStyle:void 0,labelStyle:void 0,labelActiveStyle:void 0}}},updated:function(){this.beginTimeInput=this.choosenBlock.begin,this.endTimeInput=this.choosenBlock.end},created:function(){this.beginTimeInput=this.choosenBlock.begin,this.endTimeInput=this.choosenBlock.end},methods:{consolelog:function(t){console.log(t)},setLight:function(t){var e=this;this.choosenBlock.func=t;var n=this.allRooms.findIndex((function(t){return t.name==e.name}));this.allRooms[n].lightSources[this.index]=this.choosenBlock,this.$store.commit("setAllRooms",this.allRooms)},setLightName:function(t){var e=this;this.choosenBlock.name=t;var n=this.allRooms.findIndex((function(t){return t.name==e.name}));this.allRooms[n].lightSources[this.index]=this.choosenBlock,this.$store.commit("setAllRooms",this.allRooms)},close:function(){this.$store.commit("setActive",!1),this.$store.commit("setChoosenBlock",void 0),this.$store.commit("setLightSourceIndex",-1)},changeBeginTime:function(t){var e=this,n=t.displayTime;this.choosenBlock.begin=n;var o=this.allRooms.findIndex((function(t){return t.name==e.name}));this.allRooms[o].lightSources[this.index]=this.choosenBlock,this.$store.commit("setAllRooms",this.allRooms)},changeEndTime:function(t){var e=this,n=t.displayTime;this.choosenBlock.end=n;var o=this.allRooms.findIndex((function(t){return t.name==e.name}));this.allRooms[o].lightSources[this.index]=this.choosenBlock,this.$store.commit("setAllRooms",this.allRooms)}},computed:{darkMode:function(){return this.$store.getters.getDarkMode},choosenBlock:function(){return this.$store.getters.getChoosenBlock},name:function(){return this.$store.getters.getCurrentRoomName},manager:function(){return this.$store.getters["getRoom"](this.name)},index:function(){return this.$store.getters.getLightSourceIndex},allRooms:function(){return this.$store.getters.getCurrentOptions}}}),x=B,M=(n("efb2"),Object(f["a"])(x,r,u,!1,null,null,null)),$=M.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sideMenu"},[n("p",{staticClass:"header"},[t._v("Smart Lighting System")]),n("p",{staticClass:"subheader"},[t._v("Rooms")]),n("div",{staticClass:"gradientLine"}),n("div",{staticClass:"rooms"},[t._l(t.manager,(function(e,o){return n("div",{key:o,staticClass:"room",attrs:{contentEditable:"false",readonly:"",tabindex:"0"}},[n("button",{staticClass:"roomName resetButton",on:{click:function(n){return t.updateName(e.name)}}},[t._v(" "+t._s(e.name)+" ")])])})),n("div",{staticClass:"addRoomButtonContainer",attrs:{tabindex:"0"}},[n("button",{staticClass:"addRoomButton resetButton"},[n("v-icon",{attrs:{name:"plus",scale:"1.25"}}),n("p",{staticClass:"addRoomText"},[t._v("Add room")])],1)])],2)])},_=[],w=(n("46fe"),{components:{"v-icon":b["a"]},name:"sideMenu",data:function(){return{isActive:!1,roomName:"",a:0}},watch:{manager:function(){console.log(this.manager)}},methods:{updateName:function(t){this.isActive=!this.isActive,this.roomName=t,this.$store.commit("setRoomName",this.roomName),this.$store.commit("setNewShedule",this.roomName),this.$store.commit("setActive",!1),this.$store.commit("setLightSourceIndex",-1)}},mounted:function(){},computed:{manager:function(){return this.$store.getters.getCurrentOptions}}}),L=w,O=(n("723f"),Object(f["a"])(L,y,_,!1,null,null,null)),I=O.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{class:[t.showPanel,t.getStyleMode]},[n("div",{staticClass:"panelBlock"},[n("p",{staticClass:"roomName"},[t._v(t._s(t.roomName))]),n("button",{staticClass:"resetButton"},[n("div",{staticClass:"buttonContainer offButton",attrs:{tabindex:"1"},on:{click:t.getJSON}},[t._v(" get API JSON ")])]),n("button",{staticClass:"resetButton"},[n("div",{class:["buttonContainer",t.getButtonStyle],attrs:{tabindex:"1"}},[t._v(" On ")])]),n("button",{staticClass:"resetButton"},[n("div",{class:["buttonContainer",t.getButtonStyle],attrs:{tabindex:"1"}},[t._v(" Manual ")])]),n("button",{staticClass:"resetButton "},[n("div",{class:["buttonContainer",t.getButtonStyle],attrs:{tabindex:"1"}},[t._v(" Off ")])]),n("button",{staticClass:"resetButton"},[n("div",{staticClass:"buttonContainer saveButton ",attrs:{tabindex:"1"},on:{click:t.sendJson}},[t._v(" Save ")])]),n("button",{staticClass:"resetButton emoji",on:{click:function(e){return t.toggleDarkMode()}}},[t.darkMode?n("div",{attrs:{tabindex:"1"}},[t._v(" 🌕 ")]):n("div",{attrs:{tabindex:"1"}},[t._v(" ☀️ ")])])])])},A=[],R=n("5530"),j=n("bc3a"),D=n.n(j),T={name:"ControlPanel",computed:{darkMode:function(){return this.$store.getters.getDarkMode},roomName:function(){return this.$store.state.activeRoom.name},showPanel:function(){return this.roomName?"controlPanelContainer":"hidden"},getStyleMode:function(){return this.darkMode?"controlPanelDarkMode":"controlPanelLightMode"},getButtonStyle:function(){return this.darkMode?"offButtonDarkMode":"offButtonLightMode"},jsonData:function(){return this.$store.getters.getCurrentOptions}},methods:{sendJson:function(){console.log(this.jsonData);var t=JSON.stringify(this.jsonData);console.log(t);var e=123456789;console.log(Object(R["a"])(Object(R["a"])({},this.jsonData),{},{token:e})),console.log(this.jsonData),console.log(e),console.log(),D.a.post("/relay/setConfig",{config:this.jsonData,token:e}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},getJSON:function(){var t="{}";t='{"shedule":[{"idSchedule":1,"roomName":"nazwaPomieszczenia","lightName":"nazwaSwiatla","relay":1,"funcArg1":"wartoscFunkcji1","hour1":"godzinaFunkcji1","arg1":"wartosc1","boomerangChange":false,"funcTo2":"wartoscFunkcji2","hour2":"godzinaFunkcji2","arg2":"wartosc2"}],"manager":[{"name":"nazwaPomieszczenia","lightSources":[{"name":"nazwaSwiatla","relay":1,"begin":"00:00","end":"23:59","func":"off","funcArg":""}]}]}';var e=JSON.parse(t);this.$store.commit("setMainManager",e),this.$store.commit("setRoomName",""),this.$store.commit("setActive",!1),this.$store.commit("setChoosenBlock",void 0),this.$store.commit("setLightSourceIndex",-1)},toggleDarkMode:function(){this.$store.commit("toggleDarkMode")}}},P=T,E=(n("18a4"),Object(f["a"])(P,N,A,!1,null,null,null)),z=E.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{lightSourcesContainer:t.name,hidden:!t.name}},[n("p",{staticClass:"label"},[t._v("Light sources")]),n("div",{staticClass:"results"},t._l(t.manager.lightSources,(function(e,o){return n("div",{key:e.relay},[n("LightSource",{attrs:{lightSource:e,index:o},on:{"get-choosen-block":function(e){return t.getBlock(e)}}})],1)})),0)])},V=[],F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["block",t.getBlocksState,t.getStyleMode,t.isActive],on:{click:function(e){return t.setThisButton()}}},[n("p",{staticClass:"lightSourceName"},[t._v(t._s(this.lightSource.name))]),n("v-icon",{class:["lightBulbIcon",t.getIconState],attrs:{name:"lightbulb",scale:"4.5"}}),n("v-icon",{attrs:{name:"sliders-h",scale:"2"}})],1)},H=[],K=(n("a9e3"),n("2ba4"),n("abfd"),{components:{"v-icon":b["a"]},props:{lightSource:Object,index:{type:Number}},name:"LightSource",computed:{getBlocksState:function(){return"on"===this.lightSource.func?"":"offBlock"},darkmode:function(){return this.$store.state.darkmode},getStyleMode:function(){return this.darkmode?"blockDarkMode":"blockLightMode"},getIconState:function(){return"on"===this.lightSource.func?"lightSourceIconsOn":"lightSourceIconsOff"},choosenBlock:function(){return this.$store.state.choosenBlock},vuexIndex:function(){return this.$store.getters.getLightSourceIndex},isActive2:function(){return this.$store.getters.getActive}},watch:{vuexIndex:function(){void 0!=this.vuexIndex&&this.vuexIndex==this.index?this.isActive="isActive":this.isActive=""}},data:function(){return{isActive:""}},methods:{setThisButton:function(){void 0!=this.choosenBlock?this.index!=this.vuexIndex?(this.$store.commit("setChoosenBlock",this.lightSource),this.$store.commit("setLightSourceIndex",this.index),this.$store.commit("setActive",!0)):(this.$store.commit("setLightSourceIndex",-1),this.$store.commit("setActive",!1)):(this.$store.commit("setChoosenBlock",this.lightSource),this.$store.commit("setLightSourceIndex",this.index),this.$store.commit("setActive",!0)),console.log(this.isActive2)}}}),W=K,q=(n("6da0"),Object(f["a"])(W,F,H,!1,null,null,null)),G=q.exports,Q={components:{LightSource:G},name:"LightSources",methods:{mouseOver:function(){this.active=!this.active},getBlock:function(t){console.log(t),console.log(t.func)}},computed:{name:function(){return this.$store.getters.getCurrentRoomName},manager:function(){return this.$store.getters["getRoom"](this.name)},active:function(){return this.$store.getters.getActive}}},U=Q,X=(n("c9cc"),Object(f["a"])(U,J,V,!1,null,null,null)),Y=X.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scheduleContainer"},[n("div",{class:{scheduleContentContaier:0!=t.scheduleLenght,hideConteinter:0==t.scheduleLenght}},[n("p",{staticClass:"label"},[t._v("Schedule")]),t._l(t.schedule,(function(t,e){return n("div",{key:e,staticClass:"scheduleEventsContainer"},[n("ScheduleEvent",{attrs:{schedule:t}})],1)}))],2)])},tt=[],et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["eventContainer",t.getStyleMode]},[n("p",[t._v("Turn off all lights at 00:00")]),n("p",[t._v(t._s(t.schedule.roomName))]),n("button",{staticClass:"resetButton"},[t._v("Cancel")])])},nt=[],ot={name:"ScheduleEvent",computed:{darkmode:function(){return this.$store.state.darkmode},getStyleMode:function(){return this.darkmode?"eventDarkMode":"eventLightMode"}},props:{schedule:Object}},st=ot,it=(n("0d17"),Object(f["a"])(st,et,nt,!1,null,"19ff9aa2",null)),at=it.exports,ct={components:{ScheduleEvent:at},methods:{getNewShedule:function(){console.log(this.name),this.sheduleArray=this.$store.commit("getAllShedule",this.name),console.log(this.sheduleArray.lenght)}},computed:{name:function(){return this.$store.getters.getCurrentRoomName},schedule:function(){return this.$store.getters.getNewShedule},scheduleLenght:function(){return this.$store.getters.getNewSheduleLenght}}},rt=ct,ut=(n("e3ae"),Object(f["a"])(rt,Z,tt,!1,null,null,null)),lt=ut.exports,dt={name:"Manager",computed:{darkmode:function(){return this.$store.state.darkmode},roomName:function(){return this.$store.state.activeRoom.name},active:function(){return this.$store.getters.getActive}},created:function(){this.load()},methods:{load:function(){var t=this;D.a.get("/technical/getInstallation/1").then((function(e){console.log(e.data),t.$store.commit("setCurrentOptions",e.data.manager)})).catch((function(t){console.error(t)}))}},components:{SideMenu:I,ControlPanel:z,LightSources:Y,Schedule:lt,LightDetail:$}},ht=dt,mt=(n("3d10"),Object(f["a"])(ht,a,c,!1,null,null,null)),ft=mt.exports,gt={name:"App",components:{Manager:ft}},vt=gt,pt=(n("034f"),Object(f["a"])(vt,s,i,!1,null,null,null)),kt=pt.exports,bt=(n("7db0"),n("4160"),n("159b"),n("2f62"));o["default"].use(bt["a"]);var St=new bt["a"].Store({state:{darkmode:!1,activeRoom:{name:""},manager:[],newShedule:[],newSheduleLenght:0,lightSourceIndex:void 0,active:!1,choosenBlock:void 0},mutations:{setCurrentOptions:function(t,e){console.log(e),t.manager=e},setRoomName:function(t,e){t.activeRoom.name=e},setNewShedule:function(t,e){var n=[];t.shedule.forEach((function(t){t.roomName==e&&n.push(t)})),t.newShedule=n,t.newSheduleLenght=n.length},setActive:function(t,e){t.active=e},setChoosenBlock:function(t,e){t.choosenBlock=e},setLightSourceIndex:function(t,e){t.lightSourceIndex=e},setAllRooms:function(t,e){t.manager=e},setMainManager:function(t,e){e},toggleDarkMode:function(t){t.darkmode=!t.darkmode}},actions:{},modules:{},getters:{getCurrentOptions:function(t){return t.manager},getCurrentRoomName:function(t){return t.activeRoom.name},getRoom:function(t){return function(e){return t.manager.find((function(t){return t.name===e}))}},getShedule:function(t){return t.shedule},getNewShedule:function(t){return t.newShedule},getNewSheduleLenght:function(t){return t.newSheduleLenght},getLightSourceIndex:function(t){return t.lightSourceIndex},getActive:function(t){return t.active},getChoosenBlock:function(t){return t.choosenBlock},getJsonData:function(t){return t.manager},getDarkMode:function(t){return t.darkmode}}});o["default"].config.productionTip=!1,new o["default"]({store:St,render:function(t){return t(kt)}}).$mount("#app")},"633a":function(t,e,n){},"69fe":function(t,e,n){},"6cd9":function(t,e,n){},"6da0":function(t,e,n){"use strict";n("d7d4")},"723f":function(t,e,n){"use strict";n("69fe")},"85ec":function(t,e,n){},a099:function(t,e,n){},c573:function(t,e,n){},c9cc:function(t,e,n){"use strict";n("f6ce")},d7d4:function(t,e,n){},e3ae:function(t,e,n){"use strict";n("c573")},efb2:function(t,e,n){"use strict";n("a099")},f35b:function(t,e,n){},f6ce:function(t,e,n){},f7f8:function(t,e,n){"use strict";n("6cd9")}});
//# sourceMappingURL=app.14eee1c4.js.map