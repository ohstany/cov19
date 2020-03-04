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

var _jsxFileName = "/Users/stanislavohstany/WebApps/DEV/coronamap/src/Templates/GoogleMaps/index.js";
var __jsx = _react.default.createElement;

var MapContainer = function MapContainer(_ref) {
  var context = _ref.context;

  var _ref2 = context || {},
      _ref2$store = _ref2.store,
      _ref2$store$markers = _ref2$store.markers,
      markers = _ref2$store$markers === void 0 ? [] : _ref2$store$markers,
      index = _ref2$store.index,
      setStore = _ref2.setStore;

  var _useState = (0, _react.useState)({
    activeMarker: null
  }),
      state = _useState[0],
      _state = _useState[1];

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
      activeMarker: activeMarker
    });
  };

  var onMapClicked = function onMapClicked(props) {
    _state(function (e) {
      return {
        activeMarker: null
      };
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
          lineNumber: 42
        },
        __self: this
      }));
    });
  }, [markers.length >= 0]);
  return __jsx(_googleMapsReact.Map, {
    zoom: 6.5,
    style: {
      width: "100%",
      height: "100%"
    },
    styles: styles,
    initialCenter: {
      lat: 49.037868,
      lng: 31.904297
    },
    onClick: onMapClicked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, markers.length && displayMarkers());
};

var defsize = 25;
var styles = [{
  featureType: "water",
  elementType: "geometry",
  stylers: [{
    color: "#cccccc"
  }, {
    lightness: 17
  }]
}, {
  featureType: "landscape",
  elementType: "geometry",
  stylers: [{
    color: "#f5f5f5"
  }, {
    lightness: 20
  }]
}, {
  featureType: "road.highway",
  elementType: "geometry.fill",
  stylers: [{
    color: "#ffffff"
  }, {
    lightness: 17
  }]
}, {
  featureType: "road.highway",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#ffffff"
  }, {
    lightness: 29
  }, {
    weight: 0.2
  }]
}, {
  featureType: "road.arterial",
  elementType: "geometry",
  stylers: [{
    color: "#ffffff"
  }, {
    lightness: 18
  }]
}, {
  featureType: "road.local",
  elementType: "geometry",
  stylers: [{
    color: "#ffffff"
  }, {
    lightness: 16
  }]
}, {
  featureType: "poi",
  elementType: "geometry",
  stylers: [{
    color: "#f5f5f5"
  }, {
    lightness: 21
  }]
}, {
  featureType: "poi.park",
  elementType: "geometry",
  stylers: [{
    color: "#dedede"
  }, {
    lightness: 21
  }]
}, {
  elementType: "labels.text.fill",
  stylers: [{
    saturation: 36
  }, {
    color: "#333333"
  }, {
    lightness: 40
  }]
}, {
  elementType: "labels.icon",
  stylers: [{
    visibility: "on"
  }]
}, {
  featureType: "transit",
  elementType: "geometry",
  stylers: [{
    color: "#a1a1a1"
  }, {
    lightness: 19
  }]
}, {
  featureType: "administrative",
  elementType: "geometry.fill",
  stylers: [{
    color: "#a1a1a1"
  }, {
    lightness: 20
  }]
}, {
  featureType: "administrative",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#bebebe"
  }, {
    lightness: 17
  }, {
    weight: 1.2
  }]
}];

var _default = (0, _googleMapsReact.GoogleApiWrapper)({
  apiKey: "AIzaSyA4zKpi3hRchkPewoFrU0h_V4a2ykGrohk"
})(MapContainer);

exports.default = _default;

/***/ })

})
//# sourceMappingURL=index.js.82ec88083ced9ce199d1.hot-update.js.map