webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/Templates/GoogleMaps/index.js":
/*!*******************************************!*\
  !*** ./src/Templates/GoogleMaps/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _googleMapsReact = __webpack_require__(/*! google-maps-react */ "./node_modules/google-maps-react/dist/index.js");

var _m = _interopRequireDefault(__webpack_require__(/*! ./m.png */ "./src/Templates/GoogleMaps/m.png"));

var _mapStyling = _interopRequireDefault(__webpack_require__(/*! ./mapStyling.json */ "./src/Templates/GoogleMaps/mapStyling.json"));

var _countries = _interopRequireDefault(__webpack_require__(/*! ../../Library/countries.json */ "./src/Library/countries.json"));

var _Library = __webpack_require__(/*! ../../Library */ "./src/Library/index.js");

var _jsxFileName = "/Users/stanislavohstany/WebApps/DEV/cov19/src/Templates/GoogleMaps/index.js";
var __jsx = _react.default.createElement;
var defsize = 25;

var MapContainer = function MapContainer(_ref) {
  var context = _ref.context,
      google = _ref.google;

  var _ref2 = context || {},
      _ref2$store = _ref2.store,
      _ref2$store$geo = _ref2$store.geo,
      geo = _ref2$store$geo === void 0 ? false : _ref2$store$geo,
      _ref2$store$markers = _ref2$store.markers,
      markers = _ref2$store$markers === void 0 ? [] : _ref2$store$markers,
      index = _ref2$store.index,
      setStore = _ref2.setStore;

  var _useReducer = (0, _react.useReducer)(_Library.reducer, {
    cpos: false,
    latlng: ["49.037868", "31.904297"],
    zoom: 9,
    activeMarker: null
  }),
      state = _useReducer[0],
      _state = _useReducer[1];

  var zoom = state.zoom,
      latlng = state.latlng;
  (0, _react.useEffect)(function () {
    if (geo && geo.countryCode) {
      var gpos = _countries.default.filter(function (c) {
        return c.country_code === geo.countryCode;
      });

      if (gpos.length) {
        _state({
          cpos: gpos[0],
          zoom: 7,
          latlng: [gpos[0].latlng[0], gpos[0].latlng[1]]
        });
      }
    }
  }, [geo]);
  var markerSets = {
    icon: {
      url: _m.default,
      scaledSize: new google.maps.Size(defsize, defsize)
    }
  };

  var onMarkerClick = function onMarkerClick(pp, activeMarker, index) {
    setStore({
      index: index
    }); // activeMarker.animation = pp.google.maps.Animation.BOUNCE;
    // activeMarker.animating = true;
    // console.log("pp, activeMarker,", pp, activeMarker);

    _state({
      zoom: 10
    });

    _state({
      latlng: [pp.position.lat, pp.position.lng],
      zoom: 11,
      activeMarker: activeMarker
    });
  };

  var onMapClicked = function onMapClicked(props) {
    _state({
      activeMarker: null
    });
  };

  var displayMarkers = (0, _react.useCallback)(function () {
    return markers.map(function (m, mx) {
      return __jsx(_googleMapsReact.Marker, (0, _extends2.default)({
        labelClass: "labelc",
        onClick: function onClick(pp, mr) {
          return onMarkerClick(pp, mr, mx);
        },
        key: mx,
        animation: google.maps.Animation.DROP
      }, markerSets, m, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }));
    });
  }, [markers.length >= 0]);
  return __jsx(_googleMapsReact.Map, (0, _extends2.default)({}, _mapStyling.default, {
    google: google,
    zoom: zoom,
    center: {
      lat: latlng[0],
      lng: latlng[1]
    },
    onClick: onMapClicked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), markers.length && displayMarkers());
};

var _default = (0, _googleMapsReact.GoogleApiWrapper)({
  apiKey: "AIzaSyA4zKpi3hRchkPewoFrU0h_V4a2ykGrohk"
})(MapContainer);

exports.default = _default;

/***/ })

})
//# sourceMappingURL=index.js.e4ef4623b1303d56a2b9.hot-update.js.map