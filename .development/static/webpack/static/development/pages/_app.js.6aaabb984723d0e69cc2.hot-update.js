webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/Context/index.js":
/*!******************************!*\
  !*** ./src/Context/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _Object$defineProperty2 = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.default = exports.RootProvider = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _defineProperties = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js"));

var _getOwnPropertyDescriptors = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js"));

var _getOwnPropertyDescriptor = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js"));

var _getOwnPropertySymbols = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js"));

var _keys = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js"));

var _promise = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js"));

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/next/dist/build/polyfills/object-assign.js"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _defineProperty3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _api = _interopRequireDefault(__webpack_require__(/*! ../api */ "./src/api.js"));

var _router = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");

var _reducers = __webpack_require__(/*! ./reducers */ "./src/Context/reducers/index.js");

var _actions = __webpack_require__(/*! ./actions */ "./src/Context/actions/index.js");

var _jsxFileName = "/Users/stanislavohstany/WebApps/DEV/cov19/src/Context/index.js";
var __jsx = _react.default.createElement;

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

var w = {
  device: "pc"
};

if (true) {
  w.device = window.innerWidth > 768 ? "pc" : "mobile";
  document.body.classList.add(w.device);
} // common global context


var RootContext = (0, _react.createContext)({});

var finalizeStore = function finalizeStore(_ref, single, _ref2, signal) {
  var store, actions, reducer, loginStatus, logout, _ref3, reduce, actionExist;

  return _regenerator.default.async(function finalizeStore$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          store = _ref.store, actions = _ref.actions, reducer = _ref.reducer;
          loginStatus = _ref2.loginStatus, logout = _ref2.logout;
          _ref3 = single || {}, reduce = _ref3.reduce;

          if (reduce) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", false);

        case 5:
          actionExist = _objectSpread({}, actions[reduce] || {}, {}, single);

          if (!(!actionExist.action || actionExist.api === false)) {
            _context.next = 8;
            break;
          }

          return _context.abrupt("return", reducer(store, {
            reduce: reduce,
            data: actionExist.data || false
          }));

        case 8:
          _context.t0 = reducer;
          _context.t1 = store;
          _context.t2 = reduce;
          _context.next = 13;
          return _regenerator.default.awrap((0, _api.default)(actionExist, signal, {
            logout: logout,
            loginStatus: loginStatus
          }));

        case 13:
          _context.t3 = _context.sent;
          _context.t4 = {
            reduce: _context.t2,
            data: _context.t3
          };
          _context.t5 = actionExist;
          return _context.abrupt("return", (0, _context.t0)(_context.t1, _context.t4, _context.t5));

        case 17:
        case "end":
          return _context.stop();
      }
    }
  });
};

var setStoreReducer = function setStoreReducer(state, data) {
  return _objectSpread({}, state, {}, data);
}; // Context as global app store


var RootProvider = (0, _router.withRouter)(function (props) {
  var loginStatus = props.loginStatus,
      logout = props.logout,
      children = props.children;

  var _useReducer = (0, _react.useReducer)(setStoreReducer, _reducers.root_store_initial_state),
      store = _useReducer[0],
      setStore = _useReducer[1];

  var actioner = function actioner(apiParams) {
    var updater;
    return _regenerator.default.async(function actioner$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            updater = {
              api: apiParams,
              toState: {},
              signals: []
            };
            /** ARRAY:   if type is array we are able to make several
             *           api request, reduce them, and then assign all data at once to the state
             *  OBJECT:  single api request, reduce and state setter
             */

            if (!(updater.api instanceof Array)) {
              _context3.next = 12;
              break;
            }

            _context3.t0 = _assign.default;
            _context3.t1 = {};
            _context3.next = 6;
            return _regenerator.default.awrap(_promise.default.all(updater.api.map(function _callee(single, x) {
              return _regenerator.default.async(function _callee$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      updater.signals[x] = new window.AbortController();
                      _context2.next = 3;
                      return _regenerator.default.awrap(finalizeStore({
                        store: store,
                        actions: _actions.rootActions,
                        reducer: _reducers.root_store_reducer
                      }, single, {
                        loginStatus: loginStatus,
                        logout: logout
                      }, updater.signals[x]));

                    case 3:
                      return _context2.abrupt("return", _context2.sent);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              });
            })));

          case 6:
            _context3.t2 = function (p, n) {
              return (0, _assign.default)({}, p, n);
            };

            _context3.t3 = {};
            _context3.t4 = _context3.sent.reduce(_context3.t2, _context3.t3);
            updater.toState = (0, _context3.t0)(_context3.t1, _context3.t4);
            _context3.next = 16;
            break;

          case 12:
            updater.signals[0] = new window.AbortController();
            _context3.next = 15;
            return _regenerator.default.awrap(finalizeStore({
              store: store,
              actions: _actions.rootActions,
              reducer: _reducers.root_store_reducer
            }, apiParams, {
              loginStatus: loginStatus,
              logout: logout
            }, updater.signals[0]));

          case 15:
            updater.toState = _context3.sent;

          case 16:
            if (!updater.toState) {
              _context3.next = 23;
              break;
            }

            if (!(apiParams.set !== false)) {
              _context3.next = 22;
              break;
            }

            setStore(updater.toState);
            return _context3.abrupt("return", updater.toState);

          case 22:
            return _context3.abrupt("return", {
              data: updater.toState,
              set: setStore
            });

          case 23:
            return _context3.abrupt("return", function clean() {
              updater.signals.map(function (s) {
                s.abort();
              });
            });

          case 24:
          case "end":
            return _context3.stop();
        }
      }
    });
  };

  var _useState = (0, _react.useState)("pc"),
      device = _useState[0],
      _device = _useState[1];

  var getScreenState = function getScreenState(e) {
    e.preventDefault();

    _device(function (s) {
      var canSet = s === "mobile" && window.innerWidth > 768 ? "pc" : s === "pc" && window.innerWidth <= 768 ? "mobile" : false;

      if (canSet) {
        document.body.classList.remove(canSet === "mobile" ? "pc" : "mobile");
        document.body.classList.add(canSet);
      }

      return canSet || s;
    });
  };

  (0, _react.useEffect)(function () {
    if (true) {
      var dev = window.innerWidth > 768 ? "pc" : "mobile";

      _device(dev);

      document.body.classList.add(dev);
      window.addEventListener("resize", getScreenState);
    }

    fetch("http://www.geoplugin.net/javascript.gp").then(function (res) {
      console.log("res", res);
      return res.text();
    }).then(function (res) {
      var ff = new Function(res);
      console.log("res2", ff, ff().geoplugin_request());
    });
  }, []);

  var api = function api(data) {
    var signal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return (0, _api.default)(data, signal, {
      logout: logout,
      loginStatus: state.loginStatus
    });
  };

  return __jsx(RootContext.Provider, {
    value: {
      store: store,
      actioner: actioner,
      device: device,
      setStore: setStore,
      api: api
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, children);
});
exports.RootProvider = RootProvider;
var _default = RootContext;
exports.default = _default;

/***/ })

})
//# sourceMappingURL=_app.js.6aaabb984723d0e69cc2.hot-update.js.map