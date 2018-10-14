/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _reactRouter = __webpack_require__(/*! react-router */ \"react-router\");\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _App = __webpack_require__(/*! ./src/App.js */ \"./src/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _optimizelyReducer = __webpack_require__(/*! ./src/store/optimizelyReducer.js */ \"./src/store/optimizelyReducer.js\");\n\nvar _optimizelyReducer2 = _interopRequireDefault(_optimizelyReducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\nvar PORT = process.env.PORT || 3000;\n\napp.use(_bodyParser2.default.json());\n\napp.use(_express2.default.static('build/public'));\n\napp.listen(PORT, function () {\n  console.log('React SSR App is running on port ' + PORT);\n});\n\napp.get('*', function (req, res) {\n  var context = {};\n  var content = _server2.default.renderToString(_react2.default.createElement(\n    _reactRouter.StaticRouter,\n    { location: req.url, context: context },\n    _react2.default.createElement(_App2.default, null)\n  ));\n  var helmet = _reactHelmet.Helmet.renderStatic();\n  var html = '\\n        <html>\\n          <head>\\n          ' + helmet.meta.toString() + '\\n          ' + helmet.title.toString() + '\\n          </head>\\n          <body>\\n            <div id=\\'root\\'>' + content + '</div>\\n            <script src=\\'client_bundle.js\\'></script>\\n          </body>\\n        </html>\\n  ';\n\n  res.send(html);\n});\n\n//# sourceURL=webpack:///./server.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouter = __webpack_require__(/*! react-router */ \"react-router\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _appReducer = __webpack_require__(/*! ./store/appReducer */ \"./src/store/appReducer.js\");\n\nvar _homepage = __webpack_require__(/*! ./components/homepage.js */ \"./src/components/homepage.js\");\n\nvar _homepage2 = _interopRequireDefault(_homepage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        _reactRouter.Switch,\n        null,\n        _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/', component: _homepage2.default })\n      );\n    }\n  }]);\n\n  return App;\n}(_react2.default.Component);\n\nexports.default = App;\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/components/homepage.js":
/*!************************************!*\
  !*** ./src/components/homepage.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar HomePage = function (_React$Component) {\n  _inherits(HomePage, _React$Component);\n\n  function HomePage(props) {\n    _classCallCheck(this, HomePage);\n\n    var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));\n\n    _this.state = {};\n    return _this;\n  }\n\n  _createClass(HomePage, [{\n    key: 'exampleMethod',\n    value: function exampleMethod() {\n      console.log('Shit is going down');\n    }\n  }, {\n    key: 'head',\n    value: function head() {\n      return _react2.default.createElement(\n        _reactHelmet.Helmet,\n        null,\n        _react2.default.createElement(\n          'title',\n          null,\n          ' React SSR Headline Testing App '\n        )\n      );\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        this.head(),\n        _react2.default.createElement(\n          'h1',\n          null,\n          'Hello'\n        ),\n        _react2.default.createElement(\n          'button',\n          { onClick: function onClick() {\n              return _this2.exampleMethod();\n            } },\n          ' Console log some text '\n        )\n      );\n    }\n  }]);\n\n  return HomePage;\n}(_react2.default.Component);\n\nexports.default = HomePage;\n\n//# sourceURL=webpack:///./src/components/homepage.js?");

/***/ }),

/***/ "./src/store/appReducer.js":
/*!*********************************!*\
  !*** ./src/store/appReducer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar initialState = {\n    message: null\n};\nvar appReducer = exports.appReducer = function appReducer() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n    var action = arguments[1];\n\n    switch (action.type) {\n        case 'SET_MESSAGE':\n            return _extends({}, state, {\n                message: action.message\n            });\n        default:\n            return state;\n    }\n};\n\nvar setMessage = exports.setMessage = function setMessage(messageText) {\n    return { type: 'SET_MESSAGE', message: messageText };\n};\n\n//# sourceURL=webpack:///./src/store/appReducer.js?");

/***/ }),

/***/ "./src/store/optimizelyReducer.js":
/*!****************************************!*\
  !*** ./src/store/optimizelyReducer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _optimizelySdk = __webpack_require__(/*! @optimizely/optimizely-sdk */ \"@optimizely/optimizely-sdk\");\n\nvar _optimizelySdk2 = _interopRequireDefault(_optimizelySdk);\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _v = __webpack_require__(/*! uuid/v4 */ \"uuid/v4\");\n\nvar _v2 = _interopRequireDefault(_v);\n\nvar _syncRequest = __webpack_require__(/*! sync-request */ \"sync-request\");\n\nvar _syncRequest2 = _interopRequireDefault(_syncRequest);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n//************ Insert your datafile link below ************\nvar datafile = 'insert datafile here';\n\n//************ Insert the polling time to trigger a datafile fetch *******\nvar timing = 5; //input in terms of minutes\n\n//************ Logger Level **********************************\n\n\n/******************************DATAFILE ACTIONS MANAGER*************************************************/\n\nvar datafileActions = {\n\n  fetchAsync: function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return _axios2.default.get(datafile).then(function (response) {\n                window.localStorage.setItem('datafile', JSON.stringify(response.data));\n                return response;\n              });\n\n            case 3:\n              return _context.abrupt('return', _context.sent);\n\n            case 6:\n              _context.prev = 6;\n              _context.t0 = _context['catch'](0);\n\n              console.log(_context.t0);\n\n            case 9:\n            case 'end':\n              return _context.stop();\n          }\n        }\n      }, _callee, undefined, [[0, 6]]);\n    }));\n\n    function fetchAsync() {\n      return _ref.apply(this, arguments);\n    }\n\n    return fetchAsync;\n  }(),\n  fetchSync: function fetchSync() {\n    var req = (0, _syncRequest2.default)('GET', datafile);\n    window.localStorage.setItem('datafile', req.body);\n    return req.body;\n  },\n  datafileCheck: function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return _axios2.default.get(datafile).then(function (response) {\n                var datafile = window.localStorage.getItem('datafile');\n                if (datafile !== JSON.stringify(response.data)) {\n                  window.localStorage.setItem('datafile', JSON.stringify(response.data));\n                  console.log(\"the datafile has been updated\");\n                  return true;\n                } else {\n                  console.log('just did a datafile check but the datafile has remained the same');\n                  return false;\n                }\n              });\n\n            case 2:\n              return _context2.abrupt('return', _context2.sent);\n\n            case 3:\n            case 'end':\n              return _context2.stop();\n          }\n        }\n      }, _callee2, undefined);\n    }));\n\n    function datafileCheck() {\n      return _ref2.apply(this, arguments);\n    }\n\n    return datafileCheck;\n  }()\n\n  //The initial state of redux (first load)\n};var intialState = {\n  optlyClient: false,\n  lastRequest: false,\n  datafileChange: false,\n  attributes: {},\n  actions: false\n\n  /*************************************** REDUCER *******************************************************/\n\n};function rootReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : intialState;\n  var action = arguments[1];\n\n\n  var newState = Object.assign({}, state); // copies the state as is\n  var now = new Date(); //used to make sure that the datafile check insn't too often\n\n  /********************************** Optimizely Actions (Tools to carry out your tests here) ************************/\n  var optlyActions = {\n    activate: function activate(key) {\n      if (newState.optlyClient) {\n        return newState.optlyClient.activate(key, newState.userProfile.user_id, newState.attributes);\n      } else {\n        console.log('no client available, did not activate experiment: ', key);\n        return;\n      }\n    },\n    event: function event(key) {\n      if (newState.optlyClient) {\n        newState.optlyClient.track(key, newState.userProfile.user_id, newState.attributes);\n        console.log('sent event: ', key);\n        return;\n      } else {\n        console.log('no client available, did not send event: ', key);\n        return;\n      }\n    },\n    getVariation: function getVariation(key) {\n      if (newState.optlyClient) {\n        return newState.optlyClient.getVariation(key, newState.userProfile.user_id, newState.attributes);\n      } else {\n        console.log('no client available, did not get variation for experiment: ', key);\n        return;\n      }\n    },\n    isFeatureEnabled: function isFeatureEnabled(key) {\n      if (newState.optlyClient) {\n        return newState.isFeatureEnabled(key, newState.userProfile.user_id, newState.attributes);\n      } else {\n        console.log('no client available, could not enable feature for experiment: ', key);\n        return;\n      }\n    },\n    getFeatureVariable: function getFeatureVariable(feature_key, variable_key, type) {\n      if (newState.optlyClient) {\n        switch (type) {\n          case 'boolean':\n            return newState.optlyClient.getFeatureVariableBoolean(feature_key, variable_key, newState.userProfile.user_id, newState.attributes);\n          case 'string':\n            return newState.optlyClient.getFeatureVariableString(feature_key, variable_key, newState.userProfile.user_id, newState.attributes);\n          case 'integer':\n            return newState.optlyClient.getFeatureVariableInteger(feature_key, variable_key, newState.userProfile.user_id, newState.attributes);\n          case 'double':\n            return newState.optlyClient.getFeatureVariableDouble(feature_key, variable_key, newState.userProfile.user_id, newState.attributes);\n          default:\n            console.log('please specify a type of feature variable to return');\n            return;\n        }\n      }\n    }\n  };\n\n  /************************ User Profile Service *******************************************/\n\n  var userProfileService = {\n    lookup: function lookup(userId) {\n      return newState.userProfile;\n    },\n    save: function save(userProfileMap) {\n      newState.userProfile = userProfileMap;\n    }\n  };\n\n  var userProfileInit = function userProfileInit() {\n    var obj = {\n      user_id: '',\n      experiment_bucket_map: {}\n    };\n    return obj;\n  };\n\n  /****************** Initialize the Optimizely Client ********************************************/\n\n  var initializeOptlyClient = function initializeOptlyClient(datafile) {\n    var optimizelyClientInstance = _optimizelySdk2.default.createInstance({\n      datafile: datafile,\n      userProfileService: userProfileService\n    });\n    return optimizelyClientInstance;\n  };\n\n  switch (action.type) {\n    /************************** DATA FILE FUNCTIONALITY ********************************************/\n\n    case 'DATAFILE_MANAGER':\n      var lastRequest = window.localStorage.getItem('lastRequest'); //last request of datafile\n      if (!window.localStorage.getItem('datafile') || now.getTime() - lastRequest >= timing * 60 * 10000) {\n        // Checks to see if datafile is present\n        if (action.timing === 'async') {\n          // If the timing parameter is asynchronous\n          datafileActions.fetchAsync() //fetch asynchronously\n          .then(function (response) {\n            newState.optlyClient = initializeOptlyClient(response.data);\n            window.localStorage.setItem('lastRequest', now.getTime());\n            console.log('i have downloaded it async and initialized');\n            return newState;\n          });\n          return newState;\n        } else if (action.timing === 'sync') {\n          //if timing is sync, fetch sync\n          var datafile = datafileActions.fetchSync();\n          window.localStorage.setItem('lastRequest', now.getTime());\n          newState.optlyClient = initializeOptlyClient(datafile);\n          console.log('I have downloaded it sync and initalized');\n          return newState;\n        } else {\n          //if no timing is present, console log the error\n          console.log('error, you need to supply a timing paramater');\n          return newState;\n        }\n      } else {\n        //if has datafile cached\n        if (!lastRequest || now.getTime() - lastRequest >= timing * 60 * 1000) {\n          window.localStorage.setItem('lastRequest', now.getTime());\n          datafileActions.datafileCheck() //check if datafile is up to date (async)\n          .then(function (bool) {\n            // if it has changed, turn the datafilechange flag on\n            if (bool) {\n              newState.datafileChange = true;\n              console.log('I have set the datafileChange flag', newState);\n              return newState;\n            }\n          });\n        }\n        if (!newState.datafileChange && newState.optlyClient) {\n          //Has client and no datafilechange, so do nothing\n          console.log('I have not re-initialized the client due to no datafile change');\n          return newState;\n        } else if (newState.datafileChange && newState.optlyClient) {\n          //has client and there is a datafilechange, re-initialize\n          newState.optlyClient = initializeOptlyClient(JSON.parse(window.localStorage.getItem('datafile')));\n          newState.datafilechange = false;\n          console.log('I had a client already but there was a datafilechange, so I re-initalized the client');\n          return newState;\n        } else {\n          //doesn't have client but there is a datafile, inialize client\n          console.log('just initalized the client!');\n          newState.optlyClient = initializeOptlyClient(JSON.parse(window.localStorage.getItem('datafile')));\n          return newState;\n        }\n      }\n    /*******************************USER_SERVICE_INIT*****************************************************/\n    case 'USER_SERVICE':\n      var userId;\n      if (action.id) {\n        //Supplied userID via the dataFileManager call within a componentDidMount\n        userId = action.id;\n        window.localStorage.setItem('userId', action.id);\n      } else {\n        userId = window.localStorage.getItem('userId'); //Checks if userID is stored in localStorage\n      }\n\n      if (action.attributes) {\n        // if the user provided pre-defined attribution, assign it in the redux store here\n        newState.attributes = action.attributes;\n      }\n      //The Following takes care of initializing the userProfile Service object that lives in the redux store\n\n      //if they have it cached/it was given but not in redux store (first load on return)\n      if (userId && !newState.userProfile) {\n        console.log('set user id in redux store');\n        newState.userProfile = userProfileInit();\n        newState.userProfile.user_id = userId;\n        newState.actions = optlyActions; // Initializes all the optimizely actions like activate, feature enabled etc..\n        return newState;\n      } else if (!userId) {\n        //dont have it stored, so generatre one and store in both places (localStorage and redux store)\n        var id = (0, _v2.default)();\n        newState.userProfile = userProfileInit();\n        newState.userProfile.user_id = id;\n        window.localStorage.setItem('userId', id);\n        newState.actions = optlyActions; // Initializes all the optimizely actions like activate, feature enabled etc..\n        console.log('created user ID and set it in redux and local cache');\n        return newState;\n      }\n      return newState;\n\n    /************************************ATTRIBUTION_UPDATES*****************************************/\n    case 'UPDATE_ATTR':\n      if (action.attr && action.value) {\n        newState.attributes[action.attr] = action.value;\n      } else {\n        console.log('You need to provide a key and value to update your attributes');\n      }\n      return newState;\n    default:\n      return state;\n  }\n}\n\nexports.default = rootReducer;\n\n//# sourceURL=webpack:///./src/store/optimizelyReducer.js?");

/***/ }),

/***/ "@optimizely/optimizely-sdk":
/*!*********************************************!*\
  !*** external "@optimizely/optimizely-sdk" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@optimizely/optimizely-sdk\");\n\n//# sourceURL=webpack:///external_%22@optimizely/optimizely-sdk%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "sync-request":
/*!*******************************!*\
  !*** external "sync-request" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sync-request\");\n\n//# sourceURL=webpack:///external_%22sync-request%22?");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid/v4\");\n\n//# sourceURL=webpack:///external_%22uuid/v4%22?");

/***/ })

/******/ });