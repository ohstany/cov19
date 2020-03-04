webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty2 = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.default = exports.reducer = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _defineProperties = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js"));

var _getOwnPropertyDescriptors = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js"));

var _getOwnPropertyDescriptor = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js"));

var _getOwnPropertySymbols = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _defineProperty3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _keys = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js"));

var _head = _interopRequireDefault(__webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js"));

var _GoogleMaps = _interopRequireDefault(__webpack_require__(/*! ../src/Templates/GoogleMaps */ "./src/Templates/GoogleMaps/index.js"));

var _Subscribe = _interopRequireDefault(__webpack_require__(/*! ../src/Templates/Subscribe */ "./src/Templates/Subscribe/index.js"));

var _MakeMark = _interopRequireDefault(__webpack_require__(/*! ../src/Templates/MakeMark */ "./src/Templates/MakeMark/index.js"));

var _ActivityArea = _interopRequireDefault(__webpack_require__(/*! ../src/Templates/ActivityArea */ "./src/Templates/ActivityArea/index.js"));

var _Socials = _interopRequireDefault(__webpack_require__(/*! ../src/Templates/Socials */ "./src/Templates/Socials/index.js"));

__webpack_require__(/*! ../src/global.scss */ "./src/global.scss");

var _jsxFileName = "/Users/stanislavohstany/WebApps/DEV/coronamap/pages/index.js";
var __jsx = _react.default.createElement;

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

var reducer = function reducer(state, a) {
  // auto state update via KEYS
  a && (0, _keys.default)(a).map(function (k) {
    state[k] = a[k];
    return false;
  });
  return _objectSpread({}, state);
};

exports.reducer = reducer;
var siteMeta = {
  title: "Коронавирус в Украине",
  description: "",
  icon: "coronavirus2.png",
  url:  true && window.location.href || "https://cov19.online/"
};

var Home = function Home(_ref) {
  var context = _ref.context;
  console.log("props", context);

  var _useState = (0, _react.useState)(false),
      setLocation = _useState[0],
      _setLocation = _useState[1];

  var getLocationViaLat = function getLocationViaLat() {
    var _ref2 = localStorage.getItem("position") && JSON.parse(localStorage.getItem("position")),
        lat = _ref2.lat,
        lng = _ref2.lng;

    var lReq = "https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(lat, ",").concat(lng, "&key=AIzaSyA4zKpi3hRchkPewoFrU0h_V4a2ykGrohk");

    if (lat && lng) {
      fetch(lReq).then(function (blob) {
        return blob.json();
      }).then(function (res) {
        if (res && res.results && res.results[0]) {
          localStorage.setItem("positionDatail", (0, _stringify.default)(res.results[0]));
        }

        console.log("rrrr", res, res.results[0]);
      });
    } else {
      console.log("not set");
    }
  };

  (0, _react.useEffect)(function () {
    if (navigator.geolocation) {
      var pos = localStorage.getItem("position") && JSON.parse(localStorage.getItem("position"));

      if (pos.lng >= 0) {
        _setLocation(true); // getLocationViaLat();

      } else {
        navigator.geolocation.getCurrentPosition(function (position) {
          localStorage.setItem("position", (0, _stringify.default)({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }));

          if (position.coords.latitudeg >= 0) {
            _setLocation(true);
          }
        });
      }
    }
  }, []);
  return __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("section", {
    className: "mapArea",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(_GoogleMaps.default, (0, _extends2.default)({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }))), __jsx("section", {
    className: "mainBlock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(_Socials.default, (0, _extends2.default)({}, props, siteMeta, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })), __jsx(_MakeMark.default, (0, _extends2.default)({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  })), __jsx(_ActivityArea.default, (0, _extends2.default)({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  })), __jsx(_Subscribe.default, (0, _extends2.default)({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }))));
};

var _default = Home;
exports.default = _default;

/***/ })

})
//# sourceMappingURL=index.js.ea57db840653b319e8e0.hot-update.js.map