!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/build",n(n.s=5)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-router")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o={message:null};t.appReducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case"SET_MESSAGE":return r({},e,{message:t.message});default:return e}},t.setMessage=function(e){return{type:"SET_MESSAGE",message:e}}},function(e,t){e.exports=require("redux")},function(e,t,n){"use strict";n(6);var r=f(n(7)),o=f(n(0)),i=f(n(8)),a=n(2),u=f(n(9)),l=f(n(10)),c=(n(4),n(1)),s=f(n(13));function f(e){return e&&e.__esModule?e:{default:e}}var d=(0,r.default)(),p=process.env.PORT||3e3;d.use(u.default.json()),d.use(r.default.static("build/public")),d.use(function(e,t){var n=(0,s.default)(),r=i.default.renderToString(o.default.createElement(c.Provider,{store:n},o.default.createElement(a.StaticRouter,{location:e.url,context:{}},o.default.createElement(l.default,null)))),u=n.getState();t.send(function(e,t){return"\n          <html>\n          <head>\n          </head>\n          <body>\n            <div id='root'>"+e+"</div>\n            <script>window.__PRELOADED_STATE__ = "+JSON.stringify(t)+"<\/script>\n            <script type='babel' src='client_bundle.js'><\/script>\n          </body>\n          </html>"}(r,u))}),d.listen(p,function(){console.log("React SSR App is running on port "+p)})},function(e,t){e.exports=require("babel-polyfill")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("body-parser")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(0)),i=n(2),a=(n(1),n(3),l(n(11))),u=l(n(12));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){return o.default.createElement(i.Switch,null,o.default.createElement(i.Route,{exact:!0,path:"/",component:a.default}),o.default.createElement(i.Route,{exact:!0,path:"/article",component:u.default}))}}]),t}();t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),i=n(1);var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"exampleMethod",value:function(){console.log("Shit is going down")}},{key:"render",value:function(){var e=this;return o.default.createElement("div",null,o.default.createElement("h1",null,this.props.state.attributes.name),o.default.createElement("button",{onClick:function(){return e.exampleMethod()}}," Console log some text "))}}]),t}();a=(0,i.connect)(function(e){return{state:e.optimizelyReducer}},function(e){return{dataFileManager:function(t,n,r){return e({type:"USER_SERVICE",id:n,attributes:r},e({type:"DATAFILE_MANAGER",timing:t}))},updateAttr:function(t){return e({type:"UPDATE_ATTR",attr:t,value:value})}}})(a),t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(0));var i=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){return o.default.createElement("div",null,"HELLLO")}}]),t}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l(c,e)};var r=n(4),o=u(n(14)),i=n(3),a=u(n(15));function u(e){return e&&e.__esModule?e:{default:e}}var l=(0,r.compose)((0,r.applyMiddleware)(o.default))(r.createStore),c=(0,r.combineReducers)({appReducer:i.appReducer,optimizelyReducer:a.default})},function(e,t){e.exports=require("redux-thunk")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(16)),o=u(n(17)),i=u(n(18)),a=u(n(19));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(o,i){try{var a=t[o](i),u=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}("next")})}}var c="https://cdn.optimizely.com/datafiles/BwwucPUXt9Zc4PttHxBCXQ.json",s=5,f={fetchAsync:function(){var e=l(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.default.get(c).then(function(e){return window.localStorage.setItem("datafile",JSON.stringify(e.data)),e});case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}},e,void 0,[[0,6]])}));return function(){return e.apply(this,arguments)}}(),fetchSync:function(){var e=(0,a.default)("GET",c);return window.localStorage.setItem("datafile",e.body),e.body},datafileCheck:function(){var e=l(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.default.get(c).then(function(e){return window.localStorage.getItem("datafile")!==JSON.stringify(e.data)?(window.localStorage.setItem("datafile",JSON.stringify(e.data)),console.log("the datafile has been updated"),!0):(console.log("just did a datafile check but the datafile has remained the same"),!1)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,void 0)}));return function(){return e.apply(this,arguments)}}()},d={optlyClient:!1,lastRequest:!1,datafileChange:!1,attributes:{name:"Peter"},actions:!1};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments[1],n=Object.assign({},e),o=new Date,a={activate:function(e){return n.optlyClient?n.optlyClient.activate(e,n.userProfile.user_id,n.attributes):void console.log("no client available, did not activate experiment: ",e)},event:function(e){return n.optlyClient?(n.optlyClient.track(e,n.userProfile.user_id,n.attributes),void console.log("sent event: ",e)):void console.log("no client available, did not send event: ",e)},getVariation:function(e){return n.optlyClient?n.optlyClient.getVariation(e,n.userProfile.user_id,n.attributes):void console.log("no client available, did not get variation for experiment: ",e)},isFeatureEnabled:function(e){return n.optlyClient?n.isFeatureEnabled(e,n.userProfile.user_id,n.attributes):void console.log("no client available, could not enable feature for experiment: ",e)},getFeatureVariable:function(e,t,r){if(n.optlyClient)switch(r){case"boolean":return n.optlyClient.getFeatureVariableBoolean(e,t,n.userProfile.user_id,n.attributes);case"string":return n.optlyClient.getFeatureVariableString(e,t,n.userProfile.user_id,n.attributes);case"integer":return n.optlyClient.getFeatureVariableInteger(e,t,n.userProfile.user_id,n.attributes);case"double":return n.optlyClient.getFeatureVariableDouble(e,t,n.userProfile.user_id,n.attributes);default:return void console.log("please specify a type of feature variable to return")}}},u={lookup:function(e){return n.userProfile},save:function(e){n.userProfile=e}},l=function(e){return r.default.createInstance({datafile:e,userProfileService:u})};switch(t.type){case"DATAFILE_MANAGER":var c=window.localStorage.getItem("lastRequest");if(!window.localStorage.getItem("datafile")||o.getTime()-c>=60*s*1e4){if("async"===t.timing)return f.fetchAsync().then(function(e){return n.optlyClient=l(e.data),window.localStorage.setItem("lastRequest",o.getTime()),console.log("i have downloaded it async and initialized"),n}),n;if("sync"===t.timing){var p=f.fetchSync();return window.localStorage.setItem("lastRequest",o.getTime()),n.optlyClient=l(p),console.log("I have downloaded it sync and initalized"),n}return console.log("error, you need to supply a timing paramater"),n}return(!c||o.getTime()-c>=60*s*1e3)&&(window.localStorage.setItem("lastRequest",o.getTime()),f.datafileCheck().then(function(e){if(e)return n.datafileChange=!0,console.log("I have set the datafileChange flag",n),n})),!n.datafileChange&&n.optlyClient?(console.log("I have not re-initialized the client due to no datafile change"),n):n.datafileChange&&n.optlyClient?(n.optlyClient=l(JSON.parse(window.localStorage.getItem("datafile"))),n.datafilechange=!1,console.log("I had a client already but there was a datafilechange, so I re-initalized the client"),n):(console.log("just initalized the client!"),n.optlyClient=l(JSON.parse(window.localStorage.getItem("datafile"))),n);case"USER_SERVICE":var y;if(t.id?(y=t.id,window.localStorage.setItem("userId",t.id)):y=window.localStorage.getItem("userId"),t.attributes&&(n.attributes=t.attributes),y&&!n.userProfile)return console.log("set user id in redux store"),n.userProfile={user_id:"",experiment_bucket_map:{}},n.userProfile.user_id=y,n.actions=a,n;if(!y){var b=(0,i.default)();return n.userProfile={user_id:"",experiment_bucket_map:{}},n.userProfile.user_id=b,window.localStorage.setItem("userId",b),n.actions=a,console.log("created user ID and set it in redux and local cache"),n}return n;case"UPDATE_ATTR":return t.attr&&t.value?n.attributes[t.attr]=t.value:console.log("You need to provide a key and value to update your attributes"),n;default:return e}}},function(e,t){e.exports=require("@optimizely/optimizely-sdk")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("uuid/v4")},function(e,t){e.exports=require("sync-request")}]);