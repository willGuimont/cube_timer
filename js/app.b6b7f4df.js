(function(t){function e(e){for(var i,a,o=e[0],u=e[1],c=e[2],d=0,p=[];d<o.length;d++)a=o[d],s[a]&&p.push(s[a][0]),s[a]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var u=n[o];0!==s[u]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/cube_timer/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Timer")],1)},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"title"},[t._v("Cube Timer")]),n("h2",{staticClass:"inspection-time"},[t._v("\n        Inspection time\n    ")]),n("div",{staticClass:"inspect-time-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inspectionTime,expression:"inspectionTime"}],staticClass:"inspection-input",attrs:{type:"number",min:"0",step:"1"},domProps:{value:t.inspectionTime},on:{change:t.setInspectionTime,input:function(e){e.target.composing||(t.inspectionTime=e.target.value)}}}),n("p",[t._v("Seconds")])]),n("h2",{staticClass:"timer"},[t._v(t._s(t.timeString))]),n("div",{staticClass:"action-buttons"},[n("button",{staticClass:"button is-success is-rounded action-button",attrs:{disabled:t.isStartButtonDisabled()},on:{click:function(e){return t.startTimer()}}},[t._v("Start\n        ")]),n("button",{staticClass:"button is-danger is-rounded action-button",attrs:{disabled:t.isPauseButtonDisabled()},on:{click:function(e){return t.pauseTimer()}}},[t._v("Pause\n        ")]),n("button",{staticClass:"button is-rounded action-button",attrs:{disabled:t.isResetButtonDisabled()},on:{click:function(e){return t.resetTimer()}}},[t._v("Reset\n        ")]),n("p",[t._v("Press space to start/stop/reset")])])])},o=[],u=(n("0b21"),n("6b54"),n("0d6d"),{data:function(){return{timerStates:Object.freeze({Running:"running",Paused:"paused",Reset:"reset"}),secondsPerMinutes:60,timeString:"",timeSeconds:0,state:null,inspectionTime:15}},methods:{startTimer:function(){this.state=this.timerStates.Running,this.setInspectionTime(),this.tick()},pauseTimer:function(){this.state=this.timerStates.Paused},resetTimer:function(){this.state=this.timerStates.Reset,this.setInspectionTime()},toggleState:function(){switch(this.state){case this.timerStates.Running:this.pauseTimer();break;case this.timerStates.Paused:this.resetTimer();break;case this.timerStates.Reset:this.startTimer();break}},isStartButtonDisabled:function(){return!(this.state===this.timerStates.Reset)},isPauseButtonDisabled:function(){return!(this.state===this.timerStates.Running)},isResetButtonDisabled:function(){return!(this.state===this.timerStates.Running||this.state===this.timerStates.Paused)},setInspectionTime:function(){this.timeSeconds=-this.inspectionTime,this.updateTimeString()},tick:function(){this.state===this.timerStates.Running&&(this.updateTimeString(),this.timeSeconds+=1)},updateTimeString:function(){var t=Math.abs(this.timeSeconds),e=Math.floor(t/this.secondsPerMinutes).toString();e.length<2&&(e="0"+e);var n=(t%this.secondsPerMinutes).toString();n.length<2&&(n="0"+n);var i=Math.sign(this.timeSeconds)<0?"-":"+";this.timeString="".concat(i).concat(e,":").concat(n)}},mounted:function(){var t=this;setInterval(this.tick,1e3),this.setInspectionTime(),this.state=this.timerStates.Reset,window.addEventListener("keydown",function(e){" "===e.key&&t.toggleState()})}}),c=u,l=(n("c168"),n("2877")),d=Object(l["a"])(c,a,o,!1,null,null,null),p=d.exports,m={name:"app",components:{Timer:p}},h=m,f=(n("5c0b"),Object(l["a"])(h,s,r,!1,null,null,null)),b=f.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("5e27"),s=n.n(i);s.a},"5e27":function(t,e,n){},"7c72":function(t,e,n){},c168:function(t,e,n){"use strict";var i=n("7c72"),s=n.n(i);s.a}});
//# sourceMappingURL=app.b6b7f4df.js.map