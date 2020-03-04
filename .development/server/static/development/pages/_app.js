module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, Object.assign({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! core-js */ "core-js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _app = _interopRequireDefault(__webpack_require__(/*! next/app */ "./node_modules/next/app.js"));

var _api = _interopRequireDefault(__webpack_require__(/*! ../src/api */ "./src/api.js"));

var _Context = _interopRequireWildcard(__webpack_require__(/*! ../src/Context */ "./src/Context/index.js"));

var _Library = __webpack_require__(/*! ../src/Library */ "./src/Library/index.js");

var _head = _interopRequireDefault(__webpack_require__(/*! next/head */ "next/head"));

var _jsxFileName = "/Users/stanislavohstany/WebApps/DEV/cov19/pages/_app.js";

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __jsx = _react.default.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

if (false) {} else {
  __webpack_require__(/*! promise-polyfill */ "promise-polyfill");

  __webpack_require__(/*! abortcontroller-polyfill */ "abortcontroller-polyfill");
}

const siteMeta = {
  title: "Коронавирус в Украине",
  description: "",
  icon: "coronavirus2.png",
  url:  false || "https://cov19.online/"
};

class MyApp extends _app.default {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "AddToHead", (0, _Library.memoize)(() => {
      return __jsx(_head.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, __jsx("link", {
        rel: "shortcut icon",
        href: siteMeta.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), __jsx("meta", {
        name: "msapplication-TileColor",
        content: "#ffffff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), __jsx("meta", {
        name: "msapplication-config",
        content: "/static/favicon/browserconfig.xml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), __jsx("meta", {
        name: "theme-color",
        content: "#ffffff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, siteMeta.title));
    }));
  }

  static async getInitialProps({
    Component,
    ctx
  }) {
    let pageProps = {};
    let presets = {};
    const isProduction = false;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if (ctx.req && ctx.req.url) {
      presets = await (0, _api.default)({
        action: "front",
        method: "GET",
        params: "source=settings"
      });
    }

    return {
      loaded: true,
      mode: ctx.req && !ctx.req.url.includes("/admin") ? "front" : "admin",
      isProduction,
      headers: ctx.req ? ctx.req.headers : {},
      pageProps,
      presets
    };
  }

  render() {
    const {
      Component,
      pageProps,
      router,
      headers,
      presets
    } = this.props;
    return __jsx(_Context.RootProvider, _extends({}, presets, {
      headers: headers,
      siteMeta: siteMeta,
      router: router,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }), __jsx(_Context.default.Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, context => __jsx(_react.default.Fragment, null, __jsx(this.AddToHead, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }), __jsx(Component, _extends({}, pageProps, {
      context: context,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    })))));
  }

}

exports.default = MyApp;

/***/ }),

/***/ "./src/Context/actions/index.js":
/*!**************************************!*\
  !*** ./src/Context/actions/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootActions = void 0;
const rootActions = {
  SET_ACTION: {
    method: "GET",
    action: "",
    params: ""
  }
};
exports.rootActions = rootActions;

/***/ }),

/***/ "./src/Context/index.js":
/*!******************************!*\
  !*** ./src/Context/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RootProvider = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _api = _interopRequireDefault(__webpack_require__(/*! ../api */ "./src/api.js"));

var _router = __webpack_require__(/*! next/router */ "next/router");

var _reducers = __webpack_require__(/*! ./reducers */ "./src/Context/reducers/index.js");

var _actions = __webpack_require__(/*! ./actions */ "./src/Context/actions/index.js");

var _jsxFileName = "/Users/stanislavohstany/WebApps/DEV/cov19/src/Context/index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __jsx = _react.default.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const w = {
  device: "pc"
};

if (false) {} // common global context


const RootContext = (0, _react.createContext)({});

const finalizeStore = async ({
  store,
  actions,
  reducer
}, single, {
  loginStatus,
  logout
}, signal) => {
  const {
    reduce
  } = single || {};
  if (!reduce) return false;

  const actionExist = _objectSpread({}, actions[reduce] || {}, {}, single);

  if (!actionExist.action || actionExist.api === false) {
    return reducer(store, {
      reduce,
      data: actionExist.data || false
    });
  }

  return reducer(store, {
    reduce,
    data: await (0, _api.default)(actionExist, signal, {
      logout,
      loginStatus
    })
  }, actionExist);
};

const setStoreReducer = (state, data) => {
  return _objectSpread({}, state, {}, data);
}; // Context as global app store


const RootProvider = (0, _router.withRouter)(props => {
  const {
    loginStatus,
    logout,
    children
  } = props;
  const {
    0: store,
    1: setStore
  } = (0, _react.useReducer)(setStoreReducer, _reducers.root_store_initial_state);

  const actioner = async apiParams => {
    const updater = {
      api: apiParams,
      toState: {},
      signals: []
    };
    /** ARRAY:   if type is array we are able to make several
     *           api request, reduce them, and then assign all data at once to the state
     *  OBJECT:  single api request, reduce and state setter
     */

    if (updater.api instanceof Array) {
      updater.toState = Object.assign({}, (await Promise.all(updater.api.map(async (single, x) => {
        updater.signals[x] = new window.AbortController();
        return await finalizeStore({
          store,
          actions: _actions.rootActions,
          reducer: _reducers.root_store_reducer
        }, single, {
          loginStatus,
          logout
        }, updater.signals[x]);
      }))).reduce((p, n) => Object.assign({}, p, n), {}));
    } else {
      updater.signals[0] = new window.AbortController();
      updater.toState = await finalizeStore({
        store,
        actions: _actions.rootActions,
        reducer: _reducers.root_store_reducer
      }, apiParams, {
        loginStatus,
        logout
      }, updater.signals[0]);
    }

    if (updater.toState) {
      if (apiParams.set !== false) {
        setStore(updater.toState);
        return updater.toState;
      } else {
        return {
          data: updater.toState,
          set: setStore
        };
      }
    }

    return function clean() {
      updater.signals.map(s => {
        s.abort();
      });
    };
  };

  const {
    0: device,
    1: _device
  } = (0, _react.useState)("pc");

  const getScreenState = e => {
    e.preventDefault();

    _device(s => {
      const canSet = s === "mobile" && window.innerWidth > 768 ? "pc" : s === "pc" && window.innerWidth <= 768 ? "mobile" : false;

      if (canSet) {
        document.body.classList.remove(canSet === "mobile" ? "pc" : "mobile");
        document.body.classList.add(canSet);
      }

      return canSet || s;
    });
  };

  (0, _react.useEffect)(() => {
    if (false) {}
  }, []);

  const api = (data, signal = false) => {
    return (0, _api.default)(data, signal, {
      logout,
      loginStatus: state.loginStatus
    });
  };

  return __jsx(RootContext.Provider, {
    value: {
      store,
      actioner,
      device,
      setStore,
      api
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: void 0
  }, children);
});
exports.RootProvider = RootProvider;
var _default = RootContext;
exports.default = _default;

/***/ }),

/***/ "./src/Context/reducers/index.js":
/*!***************************************!*\
  !*** ./src/Context/reducers/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.root_store_initial_state = exports.root_store_reducer = void 0;

var _Library = __webpack_require__(/*! ../../Library */ "./src/Library/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * STORE REDUCER (separate component data, categories, coures etc.)
 * PARAMS: s - store, a - data object (action, data and so on)
 */
const root_store_reducer = (s, a, params = false) => {
  const {
    data = [],
    reduce
  } = a || {};

  switch (reduce) {
    case "UPDATE_OPTION":
      {
        const {
          options
        } = s;
        const {
          key,
          value
        } = params.data;
        if (!key) return {};
        options[key] = value || {};
        return {
          options
        };
      }

    case "DEFAULT":
      {
        return {};
      }

    default:
      {
        return data.single && data.set ? {
          [data.single]: _objectSpread({}, s[data.single], {}, data.set)
        } : {};
      }
  }
};
/**
 * INITIAL default values of application store
 */


exports.root_store_reducer = root_store_reducer;
const root_store_initial_state = {
  options: {},
  index: undefined,
  activity: {
    "0": [{
      user: "dadm1231",
      respong: "0",
      date: "2020-02-29 14:10",
      content: "No nec mentitum abhorreant, inani errem adipisci per ex."
    }, {
      user: "kpgek742",
      respong: "1",
      date: "2020-02-29 15:10",
      content: "Lorem ipsum dolor sit amet, tibique officiis has cu."
    }, {
      user: "l12j44jw",
      respong: "1",
      date: "2020-02-29 16:10",
      content: "Lorem ipsum dolor sit amet, tibique officiis has cu."
    }, {
      user: "sj12u2302",
      respong: "2",
      date: "2020-02-29 17:10",
      content: "Cibo efficiantur in eos, soleat qualisque mea ne."
    }],
    "1": [{
      user: "dadm1231",
      respong: "0",
      date: "2020-02-29 14:10",
      content: "No nec mentitum abhorreant, inani errem adipisci per ex."
    }, {
      user: "kpgek742",
      respong: "1",
      date: "2020-02-29 14:10",
      content: "Lorem ipsum dolor sit amet, tibique officiis has cu."
    }, {
      user: "l12j44jw",
      respong: "1",
      date: "2020-02-29 14:10",
      content: "Lorem ipsum dolor sit amet, tibique officiis has cu."
    }, {
      user: "sj12u2302",
      respong: "2",
      date: "2020-02-29 14:10",
      content: "Cibo efficiantur in eos, soleat qualisque mea ne."
    }],
    "2": [{
      user: "dadm1231",
      respong: "0",
      date: "2020-02-29 14:10",
      content: "No nec mentitum abhorreant, inani errem adipisci per ex."
    }, {
      user: "kpgek742",
      respong: "1",
      date: "2020-02-29 14:10",
      content: "Lorem ipsum dolor sit amet, tibique officiis has cu."
    }, {
      user: "l12j44jw",
      respong: "1",
      date: "2020-02-29 14:10",
      content: "Lorem ipsum dolor sit amet, tibique officiis has cu."
    }, {
      user: "sj12u2302",
      respong: "2",
      date: "2020-02-29 14:10",
      content: "Cibo efficiantur in eos, soleat qualisque mea ne."
    }]
  },
  news: [],
  markers: [{
    id: "1",
    title: "Title 1",
    source: ["https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019", '<iframe width="560" height="315" src="https://www.youtube.com/embed/J3Hw1I5iz4c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    content: "No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
    label: {
      text: "2",
      color: "white"
    },
    position: {
      lat: 50.452476,
      lng: 30.514183
    }
  }, {
    id: "2",
    title: "Title 2",
    source: ["https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019", '<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    content: "Lorem ipsum dolor sit amet, tibique officiis has cu. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
    label: {
      text: "1",
      color: "white"
    },
    position: {
      lat: 50.454225,
      lng: 30.60482
    }
  }, {
    id: "3",
    title: "Title 3",
    source: ["https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019", '<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    content: "No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugi Lorem ipsum dolor sit amet, tibique officiis has cu. Aperiam invidunt vulputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
    label: {
      text: "1",
      color: "white"
    },
    position: {
      lat: 50.443732,
      lng: 30.569115
    }
  }, {
    id: "4",
    title: "Title 4",
    source: ["https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019", '<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    content: "Inani errem adipisci per ex. Quo autem Lorem ipsum dolor sit amet, tibique officiis has cu. Aperiam invidunt vulputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
    label: {
      text: "3",
      color: "white"
    },
    position: {
      lat: 50.419238,
      lng: 30.505943
    }
  }, {
    id: "5",
    title: "Title 5",
    source: ["https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019", '<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    content: "Lorem ipsum dolor sit amet, tibique officiis has cu. Aperiam invidunt vulputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
    label: {
      text: "1",
      color: "white"
    },
    position: {
      lat: 50.398233,
      lng: 30.415306
    }
  }, {
    id: "6",
    title: "Title 6",
    content: "Aperiam invidunt vulputate quo at, ne dicit sonet p Lorem ipsum dolor sit amet, tibique officiis has cu. Aperiam invidunt vulputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
    label: {
      text: "1",
      color: "white"
    },
    position: {
      lat: 50.59043,
      lng: 30.214806
    }
  }, {
    id: "7",
    title: "Title 7",
    source: ["https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019", '<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    content: "Cibo efficiantur in eos, soleat qualisque mea ne. Lorem ipsum dolor sit amet, tibique officiis has cu. Aperiam invidunt vulputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
    label: {
      text: "1",
      color: "white"
    },
    position: {
      lat: 50.501199,
      lng: 30.819397
    }
  }, {
    id: "8",
    title: "Title 8",
    source: ["https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019", '<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    content: "Tibique officiis has cu. Aperiam invidunt vulputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
    label: {
      text: "4",
      color: "white"
    },
    position: {
      lat: 50.346878,
      lng: 30.920838
    }
  }, {
    id: "9",
    title: "Title 9",
    source: ["https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019", '<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    content: "Tibique officiis has cu. Aperiam invidunt vulputate quo at",
    label: {
      text: "1",
      color: "white"
    },
    position: {
      lat: 50.317072,
      lng: 30.929078
    }
  }, {
    id: "10",
    title: "Title 10",
    source: ["https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019", '<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    content: "sit amet, tibique officiis has cu. Aperiam invidunt vulputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
    label: {
      text: "2",
      color: "white"
    },
    position: {
      lat: 50.341619,
      lng: 30.852174
    }
  }, {
    id: "11",
    title: "Title 11",
    source: ["https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019", '<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    content: "Lorem ipsum dolor sit amet, tibique officiis has cu. Aperiam invidunt vulputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
    label: {
      text: "1",
      color: "white"
    },
    position: {
      lat: 50.392426,
      lng: 30.964783
    }
  }, {
    id: "12",
    title: "Title 12",
    source: ["https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019", '<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    content: "lputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
    label: {
      text: "1",
      color: "white"
    },
    position: {
      lat: 50.429183,
      lng: 30.915345
    }
  }, {
    id: "13",
    title: "Title 13",
    source: ["https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019", '<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    content: "fficiis has cu. Aperiam invidunt vulputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
    label: {
      text: "2",
      color: "white"
    },
    position: {
      lat: 50.038923,
      lng: 36.434741
    }
  }, {
    id: "14",
    title: "Title 14",
    source: ["https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019", '<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    content: "Aperiam invidunt vulputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
    label: {
      text: "1",
      color: "white"
    },
    position: {
      lat: 50.081241,
      lng: 36.127124
    }
  }, {
    id: "15",
    title: "Title 15",
    source: ["https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019", '<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    content: "Lorem ipsum dolor sit amet, tibique officiis has cu. Aperiam invidunt vulputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
    label: {
      text: "1",
      color: "white"
    },
    position: {
      lat: 49.904669,
      lng: 36.313891
    }
  }, {
    id: "16",
    title: "Title 16",
    source: ["https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019", '<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    content: "Aperiam invidunt vulputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
    label: {
      text: "3",
      color: "white"
    },
    position: {
      lat: 49.975376,
      lng: 36.017261
    }
  }, {
    id: "17",
    title: "Title 17",
    source: ["https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019", '<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    content: "Lorem ipsum dolor sit amet, tibique officiis has cu. Aperiam invidunt vulputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
    label: {
      text: "1",
      color: "white"
    },
    position: {
      lat: 50.151689,
      lng: 36.566577
    }
  }, {
    id: "18",
    title: "Title 18",
    source: ["https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019", '<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
    content: "Aperiam invidunt vulputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
    label: {
      text: "1",
      color: "white"
    },
    position: {
      lat: 50.299291,
      lng: 36.236987
    }
  }]
};
exports.root_store_initial_state = root_store_initial_state;

/***/ }),

/***/ "./src/Library/index.js":
/*!******************************!*\
  !*** ./src/Library/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateEmail = exports.reducer = exports.removeFromArray = exports.debounce = exports.make2sideFilter = exports.randomID = exports.memoize = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Momoization of functional component or CLASS method
const memoize = fn => {
  return () => {
    var args = Array.prototype.slice.call(arguments);
    fn.cache = fn.cache || {};
    return fn.cache[args] ? fn.cache[args] : fn.cache[args] = fn.apply(void 0, args);
  };
};

exports.memoize = memoize;

const randomID = (length = 6) => {
  return Math.random().toString(36).substring(2, length - 1) + Math.random().toString(36).substring(2, length - 1);
};

exports.randomID = randomID;

const make2sideFilter = inpObj => {
  if (!inpObj || !(inpObj instanceof Array)) return {
    o: {},
    f: {}
  };
  const f = [];
  const o = inpObj.reduce((p, c) => {
    f.push({
      value: "" + c.ID,
      text: c.title
    });
    return Object.assign({}, p, {
      ["" + c.ID]: c.title
    });
  }, {});
  return {
    o,
    f
  };
};

exports.make2sideFilter = make2sideFilter;

const debounce = (func, wait, immediate) => {
  var timeout;
  return function () {
    var context = this,
        args = arguments;

    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

exports.debounce = debounce;

const removeFromArray = (arr, value) => {
  return arr.filter(function (ele) {
    return ele != value;
  });
};

exports.removeFromArray = removeFromArray;

const reducer = (state, a) => {
  // auto state update via KEYS
  a && Object.keys(a).map(k => {
    state[k] = a[k];
    return false;
  });
  return _objectSpread({}, state);
};

exports.reducer = reducer;

const validateEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

exports.validateEmail = validateEmail;

/***/ }),

/***/ "./src/api-config.js":
/*!***************************!*\
  !*** ./src/api-config.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// use environmental API path or custom if not empty
var _default = {
  apipath: "https://api.cov19.online",
  apiver: "/tk-api/v2/"
};
exports.default = _default;

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apiConfig = _interopRequireDefault(__webpack_require__(/*! ./api-config */ "./src/api-config.js"));

var _isomorphicUnfetch = _interopRequireDefault(__webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = async (_params, _signal = false, methods = false) => {
  const pass = {
    method: _params.method ? _params.method : "POST",
    credentials: "include"
  };

  if (pass.method !== "GET" && pass.method !== "HEAD") {
    if (_params.upload) {
      const formData = new FormData();
      formData.append("data", JSON.stringify(_params));
      if (_params.upload !== undefined) formData.append("upload", _params.upload);
      pass.body = formData;
    } else {
      pass.body = JSON.stringify(_params ? _params : {});
    }
  }

  const location = _params.location ? _params.location : "external"; // do request

  try {
    if (_params.action) {
      const request = await (0, _isomorphicUnfetch.default)(_apiConfig.default.apipath + (location === "local" ? "/" + _params.action : _apiConfig.default.apiver + _params.action + (_params.params ? _params.params[0] === "?" ? _params.params : "?" + _params.params : "")), _signal ? _objectSpread({}, pass, {
        signal: _signal.signal
      }) : pass).then(d => d.json()).then(d => d);
      const {
        return: result = {}
      } = request || {};
      const {
        error = false
      } = result || {};

      if ((error && ["logged_out_user", "unauthorized_request"].indexOf(error.code) >= 0 || request.loginStatus === false) && methods && methods.loginStatus === true) {
        _signal.abort && _signal.abort();
        methods.logout(request.loginStatus);
      } else if (error && error.code === "permission_no_rights") {
        alert("No permissions");
      }

      return result;
    }
  } catch (e) {
    console.log("Request Aborted..", e);
  }

  return false;
};

exports.default = _default;

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "abortcontroller-polyfill":
/*!*******************************************!*\
  !*** external "abortcontroller-polyfill" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("abortcontroller-polyfill");

/***/ }),

/***/ "core-js":
/*!**************************!*\
  !*** external "core-js" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "promise-polyfill":
/*!***********************************!*\
  !*** external "promise-polyfill" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("promise-polyfill");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map