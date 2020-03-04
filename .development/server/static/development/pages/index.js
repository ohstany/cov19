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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.reducer = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! next/head */ "next/head"));

var _GoogleMaps = _interopRequireDefault(__webpack_require__(/*! ../src/Templates/GoogleMaps */ "./src/Templates/GoogleMaps/index.js"));

var _Subscribe = _interopRequireDefault(__webpack_require__(/*! ../src/Templates/Subscribe */ "./src/Templates/Subscribe/index.js"));

var _MakeMark = _interopRequireDefault(__webpack_require__(/*! ../src/Templates/MakeMark */ "./src/Templates/MakeMark/index.js"));

var _ActivityArea = _interopRequireDefault(__webpack_require__(/*! ../src/Templates/ActivityArea */ "./src/Templates/ActivityArea/index.js"));

var _Socials = _interopRequireDefault(__webpack_require__(/*! ../src/Templates/Socials */ "./src/Templates/Socials/index.js"));

__webpack_require__(/*! ../src/global.scss */ "./src/global.scss");

var _jsxFileName = "/Users/stanislavohstany/WebApps/DEV/coronamap/pages/index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __jsx = _react.default.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const reducer = (state, a) => {
  // auto state update via KEYS
  a && Object.keys(a).map(k => {
    state[k] = a[k];
    return false;
  });
  return _objectSpread({}, state);
};

exports.reducer = reducer;
const siteMeta = {
  title: "Коронавирус в Украине",
  description: "",
  icon: "coronavirus2.png",
  url:  false || "https://cov19.online/"
};

const Home = props => {
  console.log("props", props);
  const {
    0: setLocation,
    1: _setLocation
  } = (0, _react.useState)(false);

  const getLocationViaLat = () => {
    const {
      lat,
      lng
    } = localStorage.getItem("position") && JSON.parse(localStorage.getItem("position"));
    const lReq = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyA4zKpi3hRchkPewoFrU0h_V4a2ykGrohk`;

    if (lat && lng) {
      fetch(lReq).then(blob => blob.json()).then(res => {
        if (res && res.results && res.results[0]) {
          localStorage.setItem("positionDatail", JSON.stringify(res.results[0]));
        }

        console.log("rrrr", res, res.results[0]);
      });
    } else {
      console.log("not set");
    }
  };

  (0, _react.useEffect)(() => {
    if (navigator.geolocation) {
      const pos = localStorage.getItem("position") && JSON.parse(localStorage.getItem("position"));

      if (pos.lng >= 0) {
        _setLocation(true); // getLocationViaLat();

      } else {
        navigator.geolocation.getCurrentPosition(position => {
          localStorage.setItem("position", JSON.stringify({
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
    __self: void 0
  }, __jsx("section", {
    className: "mapArea",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: void 0
  }, __jsx(_GoogleMaps.default, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: void 0
  }))), __jsx("section", {
    className: "mainBlock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: void 0
  }, __jsx(_Socials.default, _extends({}, props, siteMeta, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: void 0
  })), __jsx(_MakeMark.default, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: void 0
  })), __jsx(_ActivityArea.default, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: void 0
  })), __jsx(_Subscribe.default, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: void 0
  }))));
};

var _default = Home;
exports.default = _default;

/***/ }),

/***/ "./src/Library/xmlToJson.js":
/*!**********************************!*\
  !*** ./src/Library/xmlToJson.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* Copyright 2015 William Summers, MetaTribal LLC
 * adapted from https://developer.mozilla.org/en-US/docs/JXON
 *
 * Licensed under the MIT License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @author William Summers
 *
 */
var xmlToJSON = function () {
  this.version = "1.3.4";
  var options = {
    // set up the default options
    mergeCDATA: true,
    // extract cdata and merge with text
    grokAttr: true,
    // convert truthy attributes to boolean, etc
    grokText: true,
    // convert truthy text/attr to boolean, etc
    normalize: true,
    // collapse multiple spaces to single space
    xmlns: true,
    // include namespaces as attribute in output
    namespaceKey: "_ns",
    // tag name for namespace objects
    textKey: "_text",
    // tag name for text nodes
    valueKey: "_value",
    // tag name for attribute values
    attrKey: "_attr",
    // tag for attr groups
    cdataKey: "_cdata",
    // tag for cdata nodes (ignored if mergeCDATA is true)
    attrsAsObject: true,
    // if false, key is used as prefix to name, set prefix to '' to merge children and attrs.
    stripAttrPrefix: true,
    // remove namespace prefixes from attributes
    stripElemPrefix: true,
    // for elements of same name in diff namespaces, you can enable namespaces and access the nskey property
    childrenAsArray: true // force children into arrays

  };
  var prefixMatch = new RegExp(/(?!xmlns)^.*:/);
  var trimMatch = new RegExp(/^\s+|\s+$/g);

  this.grokType = function (sValue) {
    if (/^\s*$/.test(sValue)) {
      return null;
    }

    if (/^(?:true|false)$/i.test(sValue)) {
      return sValue.toLowerCase() === "true";
    }

    if (isFinite(sValue)) {
      return parseFloat(sValue);
    }

    return sValue;
  };

  this.parseString = function (xmlString, opt) {
    return this.parseXML(this.stringToXML(xmlString), opt);
  };

  this.parseXML = function (oXMLParent, opt) {
    // initialize options
    for (var key in opt) {
      options[key] = opt[key];
    }

    var vResult = {},
        nLength = 0,
        sCollectedTxt = ""; // parse namespace information

    if (options.xmlns && oXMLParent.namespaceURI) {
      vResult[options.namespaceKey] = oXMLParent.namespaceURI;
    } // parse attributes
    // using attributes property instead of hasAttributes method to support older browsers


    if (oXMLParent.attributes && oXMLParent.attributes.length > 0) {
      var vAttribs = {};

      for (nLength; nLength < oXMLParent.attributes.length; nLength++) {
        var oAttrib = oXMLParent.attributes.item(nLength);
        var vContent = {};
        var attribName = "";

        if (options.stripAttrPrefix) {
          attribName = oAttrib.name.replace(prefixMatch, "");
        } else {
          attribName = oAttrib.name;
        }

        if (options.grokAttr) {
          vContent[options.valueKey] = this.grokType(oAttrib.value.replace(trimMatch, ""));
        } else {
          vContent[options.valueKey] = oAttrib.value.replace(trimMatch, "");
        }

        if (options.xmlns && oAttrib.namespaceURI) {
          vContent[options.namespaceKey] = oAttrib.namespaceURI;
        }

        if (options.attrsAsObject) {
          // attributes with same local name must enable prefixes
          vAttribs[attribName] = vContent;
        } else {
          vResult[options.attrKey + attribName] = vContent;
        }
      }

      if (options.attrsAsObject) {
        vResult[options.attrKey] = vAttribs;
      } else {}
    } // iterate over the children


    if (oXMLParent.hasChildNodes()) {
      for (var oNode, sProp, nItem = 0; nItem < oXMLParent.childNodes.length; nItem++) {
        oNode = oXMLParent.childNodes.item(nItem);

        if (oNode.nodeType === 4) {
          if (options.mergeCDATA) {
            sCollectedTxt += oNode.nodeValue;
          } else {
            if (vResult.hasOwnProperty(options.cdataKey)) {
              if (vResult[options.cdataKey].constructor !== Array) {
                vResult[options.cdataKey] = [vResult[options.cdataKey]];
              }

              vResult[options.cdataKey].push(oNode.nodeValue);
            } else {
              if (options.childrenAsArray) {
                vResult[options.cdataKey] = [];
                vResult[options.cdataKey].push(oNode.nodeValue);
              } else {
                vResult[options.cdataKey] = oNode.nodeValue;
              }
            }
          }
        }
        /* nodeType is "CDATASection" (4) */
        else if (oNode.nodeType === 3) {
            sCollectedTxt += oNode.nodeValue;
          }
          /* nodeType is "Text" (3) */
          else if (oNode.nodeType === 1) {
              /* nodeType is "Element" (1) */
              if (nLength === 0) {
                vResult = {};
              } // using nodeName to support browser (IE) implementation with no 'localName' property


              if (options.stripElemPrefix) {
                sProp = oNode.nodeName.replace(prefixMatch, "");
              } else {
                sProp = oNode.nodeName;
              }

              vContent = xmlToJSON.parseXML(oNode);

              if (vResult.hasOwnProperty(sProp)) {
                if (vResult[sProp].constructor !== Array) {
                  vResult[sProp] = [vResult[sProp]];
                }

                vResult[sProp].push(vContent);
              } else {
                if (options.childrenAsArray) {
                  vResult[sProp] = [];
                  vResult[sProp].push(vContent);
                } else {
                  vResult[sProp] = vContent;
                }

                nLength++;
              }
            }
      }
    } else if (!sCollectedTxt) {
      // no children and no text, return null
      if (options.childrenAsArray) {
        vResult[options.textKey] = [];
        vResult[options.textKey].push(null);
      } else {
        vResult[options.textKey] = null;
      }
    }

    if (sCollectedTxt) {
      if (options.grokText) {
        var value = this.grokType(sCollectedTxt.replace(trimMatch, ""));

        if (value !== null && value !== undefined) {
          vResult[options.textKey] = value;
        }
      } else if (options.normalize) {
        vResult[options.textKey] = sCollectedTxt.replace(trimMatch, "").replace(/\s+/g, " ");
      } else {
        vResult[options.textKey] = sCollectedTxt.replace(trimMatch, "");
      }
    }

    return vResult;
  }; // Convert xmlDocument to a string
  // Returns null on failure


  this.xmlToString = function (xmlDoc) {
    try {
      var xmlString = xmlDoc.xml ? xmlDoc.xml : new XMLSerializer().serializeToString(xmlDoc);
      return xmlString;
    } catch (err) {
      return null;
    }
  }; // Convert a string to XML Node Structure
  // Returns null on failure


  this.stringToXML = function (xmlString) {
    try {
      var xmlDoc = null;

      if (window.DOMParser) {
        var parser = new DOMParser();
        xmlDoc = parser.parseFromString(xmlString, "text/xml");
        return xmlDoc;
      } else {
        //xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = false;
        xmlDoc.loadXML(xmlString);
        return xmlDoc;
      }
    } catch (e) {
      return null;
    }
  };

  return this;
}.call({});

if ( true && module !== null && module.exports) module.exports = xmlToJSON;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/Templates/ActivityArea/index.js":
/*!*********************************************!*\
  !*** ./src/Templates/ActivityArea/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _xmlToJson = _interopRequireDefault(__webpack_require__(/*! ../../Library/xmlToJson */ "./src/Library/xmlToJson.js"));

var _Skeleton = __webpack_require__(/*! ../Skeleton */ "./src/Templates/Skeleton/index.js");

var _jsxFileName = "/Users/stanislavohstany/WebApps/DEV/coronamap/src/Templates/ActivityArea/index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __jsx = _react.default.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Pin = function Pin(props) {
  return __jsx("svg", _extends({}, props, {
    __self: this
  }), __jsx("path", {
    fill: "#ef5411",
    className: "path1",
    d: "M8 2.1c1.1 0 2.2.5 3 1.3.8.9 1.3 1.9 1.3 3.1S11.8 9 11 9.8l-3 3.1-3-3.1c-.8-.8-1.3-2-1.3-3.3 0-1.2.4-2.2 1.3-3.1.8-.8 1.9-1.3 3-1.3z",
    __self: this
  }), __jsx("path", {
    fill: "#fff",
    className: "path2",
    d: "M8 15.8l-4.4-4.6C2.4 10 1.7 8.3 1.7 6.5c0-1.7.6-3.2 1.8-4.5C4.8.8 6.3.2 8 .2s3.2.7 4.4 1.9c1.2 1.2 1.8 2.8 1.8 4.5s-.7 3.5-1.8 4.7L8 15.8zm-4-5.1l4 4.1 3.9-4.1c1-1.1 1.6-2.6 1.6-4.2 0-1.5-.6-2.9-1.6-4S9.5.8 8 .8s-2.9.6-4 1.7C3 3.6 2.4 5 2.4 6.5c0 1.6.6 3.2 1.6 4.2z",
    __self: this
  }), __jsx("path", {
    fill: "#fff",
    className: "path3",
    d: "M8 16l-4.5-4.7c-1.2-1.2-1.9-3-1.9-4.8 0-1.7.6-3.3 1.9-4.6C4.7.7 6.3 0 8 0s3.3.7 4.5 1.9c1.2 1.3 1.9 2.9 1.9 4.6 0 1.8-.7 3.6-1.9 4.8L8 16zM8 .3C6.4.3 4.8 1 3.7 2.2 2.5 3.4 1.9 4.9 1.9 6.5c0 1.7.7 3.4 1.8 4.5L8 15.5l4.3-4.5c1.1-1.2 1.8-2.9 1.8-4.5s-.6-3.1-1.8-4.4C11.1 1 9.6.3 8 .3zm0 14.8l-4.1-4.2c-1-1.2-1.7-2.8-1.7-4.4s.6-3 1.7-4.1C5 1.3 6.5.7 8 .7s3 .6 4.1 1.7c1.1 1.1 1.7 2.6 1.7 4.1 0 1.6-.6 3.2-1.7 4.3L8 15.1zm-3.8-4.5l3.8 4 3.8-4c1-1 1.6-2.6 1.6-4.1s-.6-2.8-1.6-3.9C10.8 1.6 9.4 1 8 1s-2.8.6-3.8 1.6C3.2 3.7 2.6 5 2.6 6.5c0 1.6.6 3.1 1.6 4.1z",
    __self: this
  }));
};

Pin.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
};
const proxyUrl = "http://cors-anywhere.herokuapp.com/";

const News = ({
  data
}) => {
  return __jsx("div", {
    className: "author",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: void 0
  }, data.img && __jsx("div", {
    className: "imgb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: void 0
  }, __jsx("img", {
    src: data.img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: void 0
  })), __jsx("h3", {
    className: "atitle clickable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: void 0
  }, __jsx("a", {
    href: data.link,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: void 0
  }, data.title)), __jsx("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: void 0
  }, data.description), __jsx("div", {
    className: "source",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: void 0
  }, "\u0420\u0435\u0441\u0443\u0440\u0441: #"));
};

var _default = ({
  context
}) => {
  const {
    store: {
      index,
      markers,
      news = false,
      activity
    },
    setStore
  } = context || {};
  const active = index >= 0 ? markers[index] : false;
  const comments = activity[index] || false;
  const {
    0: nav,
    1: _nav
  } = (0, _react.useState)("acts");
  const navigation = (0, _react.useCallback)(key => {
    _nav(key);
  }, []);

  const getNews = () => {
    console.log("newsstrted");
    fetch(proxyUrl + "https://gazeta.ua/rss").then(blop => {
      return blop.text();
    }).then(res => {
      const news = _xmlToJson.default.parseString(res).rss[0].channel[0].item.map(i => {
        return {
          title: i.title[0]._text,
          link: i.guid[0]._text,
          pubDate: i.pubDate[0]._text,
          description: i.description[0]._text.replace(/(<([^>]+)>)/gi, "").substring(0, 180) + "...",
          img: i.enclosure && i.enclosure[0]._attr.url._value
        };
      });

      console.log("news", news);
      setStore({
        news
      });
    });
  };

  (0, _react.useEffect)(() => {
    getNews();
  }, []);
  (0, _react.useEffect)(() => {
    if (index >= 0) {
      navigation("local");
    }
  }, [index]);
  const SingleItem = (0, _react.useCallback)(({
    nav,
    a,
    ax,
    news = false
  }) => {
    return a ? __jsx("div", {
      className: "author",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: void 0
    }, __jsx("h3", {
      className: "atitle" + (nav === "acts" ? " clickable" : ""),
      onClick: () => {
        if (nav === "acts") {
          setStore({
            index: ax
          });
          navigation("local");
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: void 0
    }, news ? a.title : `Пользователь #${a.id}`), __jsx("div", {
      className: "desc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: void 0
    }, a.content), a.source && a.source.length && __jsx("div", {
      className: "source",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: void 0
    }, a.source.map((s, sx) => __jsx(RenderSource, {
      key: sx,
      s: s,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: void 0
    }))), nav === "acts" && __jsx("button", {
      onClick: () => {
        setStore({
          index: ax
        });
        navigation("local");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: void 0
    }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C")) : "Нажмите не метку на карте";
  }, []);
  const RenderSource = (0, _react.useCallback)(({
    s
  }) => {
    return __jsx("div", {
      className: "src",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: void 0
    }, s.indexOf("youtube") >= 0 && s.indexOf("iframe") >= 0 ? __jsx("div", {
      dangerouslySetInnerHTML: {
        __html: s
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: void 0
    }) : __jsx("a", {
      href: s,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: void 0
    }, s));
  }, []);
  return __jsx("div", {
    className: "block activityArea " + nav,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: void 0
  }, __jsx("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: void 0
  }, __jsx("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: void 0
  }, [{
    id: "local",
    title: __jsx(Pin, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: void 0
    })
  }, {
    id: "acts",
    title: "Активность"
  }, {
    id: "news",
    title: "Новости"
  }].map((m, mx) => {
    return __jsx("li", {
      key: mx,
      className: "navi " + (m.id === nav ? "active" : ""),
      onClick: () => {
        navigation(m.id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: void 0
    }, m.title);
  }))), __jsx("div", {
    className: "activity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: void 0
  }, __jsx("div", {
    className: "bb b1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: void 0
  }, markers.length ? markers.map((a, ax) => {
    return __jsx(SingleItem, {
      nav: nav,
      key: ax,
      a: a,
      ax: ax,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: void 0
    });
  }) : __jsx(_Skeleton.Skeleton1, {
    row: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: void 0
  })), __jsx("div", {
    className: "bb b2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: void 0
  }, __jsx(SingleItem, {
    nav: nav,
    a: active,
    ax: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: void 0
  }), active && __jsx("div", {
    className: "comments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: void 0
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: void 0
  }, "\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 (", comments.length || 0, ")"), comments ? comments.map((c, cx) => {
    return __jsx("div", {
      className: "cm author",
      key: cx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: void 0
    }, __jsx("div", {
      className: "chead",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: void 0
    }, __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: void 0
    }, c.user), c.date ? __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: void 0
    }, " - " + c.date) : ""), __jsx("div", {
      className: "cbody",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: void 0
    }, c.content));
  }) : "Пока нет коментариев, напишите первым")), __jsx("div", {
    className: "bb b3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: void 0
  }, news.length ? news.map((a, ax) => {
    return __jsx(News, {
      key: ax,
      data: a,
      ax: ax,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: void 0
    });
  }) : __jsx(_Skeleton.Skeleton1, {
    row: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: void 0
  }))));
};

exports.default = _default;

/***/ }),

/***/ "./src/Templates/GoogleMaps/index.js":
/*!*******************************************!*\
  !*** ./src/Templates/GoogleMaps/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _googleMapsReact = __webpack_require__(/*! google-maps-react */ "google-maps-react");

var _m = _interopRequireDefault(__webpack_require__(/*! ./m.png */ "./src/Templates/GoogleMaps/m.png"));

var _jsxFileName = "/Users/stanislavohstany/WebApps/DEV/coronamap/src/Templates/GoogleMaps/index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __jsx = _react.default.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const MapContainer = ({
  context,
  google
}) => {
  const {
    store: {
      markers = [],
      index
    },
    setStore
  } = context || {};
  const {
    0: state,
    1: _state
  } = (0, _react.useState)({
    activeMarker: null
  });
  const markerSets = {
    icon: {
      url: _m.default,
      scaledSize: new google.maps.Size(defsize, defsize)
    }
  };

  const onMarkerClick = (pp, activeMarker, index) => {
    setStore({
      index: index
    }); // activeMarker.animation = pp.google.maps.Animation.BOUNCE;
    // activeMarker.animating = true;
    // console.log("pp, activeMarker,", pp, activeMarker);

    _state({
      activeMarker
    });
  };

  const onMapClicked = props => {
    _state(e => ({
      activeMarker: null
    }));
  };

  const displayMarkers = (0, _react.useCallback)(() => {
    return markers.map((m, mx) => __jsx(_googleMapsReact.Marker, _extends({
      labelClass: "labelc",
      onClick: (pp, mr) => onMarkerClick(pp, mr, mx),
      key: mx,
      animation: google.maps.Animation.DROP
    }, markerSets, m, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: void 0
    })));
  }, [markers.length >= 0]);
  return __jsx(_googleMapsReact.Map, {
    google: google,
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
    __self: void 0
  }, markers.length && displayMarkers());
};

const defsize = 25;
const styles = [{
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

/***/ }),

/***/ "./src/Templates/GoogleMaps/m.png":
/*!****************************************!*\
  !*** ./src/Templates/GoogleMaps/m.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAuJQTFRFAAAAcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFfgQEhwQEjwMDlQMDnAMDogICqAICrwICtQEBuQEBvAEBvwEBwgEBxgAAyQAAzQAAmwMDcwUFcwUFcwUFcwUFcwUFeQUFiwQEpwICsQICuwEBxQAAcwUFdAUFggQEkwMDowICtAEBxAEBswEBkgMDcwUFcwUFdwUFnwMDxwAAngMDigQEcwUFfwQEzAAAcwUFcwUFcwUFkAMDqwICcwUFfQQEmAMDywAAewUFcwUFcwUFdQUFjgMDrgICjgQEcwUFqgICwAEBvQEBmQMDcwUFcwUFlgMDvgEBcwUFcwUFcwUFegUFoAICoAMDcwUFygAAcwUFcwUFcwUFcwUFcwUFyAAAcwUFkQMDwQEBcwUFcwUFtgEBcwUFcwUFcwUFcwUFcwUFfAQEcwUFcwUFcwUFcwUFcwUFcwUFjQQEcwUFmgMDcwUFdgUFrQICcwUFlAMDcwUFsAICgQQEcwUFcwUFcwUFxAAAcwUFcwUFfAUFcwUFcwUFcwUFcwUFpgICcwUFcwUFcwUFcwUFcwUFcwUFiQQEcwUFcwUFcwUFugEBcwUFnQMDcwUFcwUFcwUFwwEBcwUFhgQEeAUFcwUFgAQEhAQEcwUFqQICcwUFcwUFtwEBcwUFcwUFcwUFcwUFcwUFcwUFjAQEcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFcwUFiAQEsgICcwUFcwUFcwUFcwUFcwUFcwUFsgEBcwUFoQICcwUFcwUFRCanjwAAAPZ0Uk5TAB4tOklWZHF/jJSboqmvtr9VSB9HYXaEn7GDdRMwWHOdvShPiLOyJxA3Y7iLYglZnghSe1SZv7+/v7+/v7+/v7+/v7+/v7+XUUaK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"

/***/ }),

/***/ "./src/Templates/MakeMark/index.js":
/*!*****************************************!*\
  !*** ./src/Templates/MakeMark/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _jsxFileName = "/Users/stanislavohstany/WebApps/DEV/coronamap/src/Templates/MakeMark/index.js";

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __jsx = _react.default.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (0, _react.memo)(() => {
  const {
    0: visible,
    1: _visible
  } = (0, _react.useState)(false);
  const {
    0: state,
    1: _state
  } = (0, _react.useState)({
    email: "",
    city: "",
    street: "",
    content: "",
    amount: undefined,
    source: "",
    source2: ""
  });
  const updateState = (0, _react.useCallback)(e => {
    const {
      target: {
        value
      }
    } = e;
    const name = e.target.getAttribute("name");

    _state(e => {
      return _objectSpread({}, e, {
        [name]: value
      });
    });
  }, []);
  const togglePopup = (0, _react.useCallback)(() => _visible(e => !e), []);

  const clickOut = e => {
    if (!document.getElementById("form").contains(e.target)) {
      togglePopup();
    }
  };

  const {
    email,
    city,
    street,
    content,
    amount,
    source,
    source2
  } = state;
  return __jsx(_react.default.Fragment, null, __jsx("div", {
    className: "block makeMark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: void 0
  }, __jsx("button", {
    onClick: togglePopup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: void 0
  }, "\u0421\u043E\u043E\u0431\u0449\u0438\u0442\u044C \u043E \u0437\u0430\u0440\u0430\u0436\u0435\u043D\u0438\u0438")), visible && __jsx("div", {
    id: "popup",
    className: "popup",
    onClick: clickOut,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: void 0
  }, __jsx("div", {
    id: "form",
    className: "form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: void 0
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: void 0
  }, "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0443 \u043D\u0438\u0436\u0435 \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C."), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: void 0
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: void 0
  }, "\u041D\u0435 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0439\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B \u0438\u043B\u0438 \u0434\u043E\u043C\u0430."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: void 0
  }, "\u041D\u0435 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0439\u0442\u0435 \u043A\u043E\u043D\u043A\u0442\u0440\u0435\u0442\u043D\u044B\u0435 \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u044B."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: void 0
  }, "\u041F\u0440\u0438 \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u0438 \u0432\u044B\u0448\u0435\u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u043E\u043F\u043E\u0432\u0435\u0449\u0435\u043D\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u043E.")), __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: void 0
  }, __jsx("input", {
    type: "email",
    name: "email",
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443",
    onChange: updateState,
    required: true,
    value: email,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: void 0
  }), __jsx("input", {
    type: "text",
    name: "city",
    placeholder: "\u0413\u043E\u0440\u043E\u0434 \u0437\u0430\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
    required: true,
    onChange: updateState,
    value: city,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: void 0
  }), __jsx("input", {
    type: "text",
    name: "street",
    placeholder: "\u0423\u043B\u0438\u0446\u0430 \u0437\u0430\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
    onChange: updateState,
    value: street,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: void 0
  }), __jsx("input", {
    type: "number",
    name: "amount",
    placeholder: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u0440\u0430\u0437\u0438\u0432\u0448\u0438\u0445\u0441\u044F",
    onChange: updateState,
    required: true,
    value: amount === undefined ? 0 : amount,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: void 0
  }), __jsx("input", {
    name: "source",
    type: "text",
    placeholder: "C\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0440\u0435\u0441\u0443\u0440\u0441 \u21161 (Youtube, \u043D\u043E\u0432\u043E\u0441\u0442\u0438 \u0438 \u0442\u0434.)",
    onChange: updateState,
    value: source,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: void 0
  }), __jsx("input", {
    name: "source2",
    type: "text",
    placeholder: "C\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0440\u0435\u0441\u0443\u0440\u0441 \u21162 (Youtube, \u043D\u043E\u0432\u043E\u0441\u0442\u0438 \u0438 \u0442\u0434.)",
    onChange: updateState,
    value: source2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: void 0
  }), __jsx("textarea", {
    name: "content",
    placeholder: "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0441\u043B\u0443\u0447\u0430\u0439",
    onChange: updateState,
    required: true,
    value: content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: void 0
  }), __jsx("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: void 0
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C")))));
});

exports.default = _default;

/***/ }),

/***/ "./src/Templates/Skeleton/index.js":
/*!*****************************************!*\
  !*** ./src/Templates/Skeleton/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Skeleton1 = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _jsxFileName = "/Users/stanislavohstany/WebApps/DEV/coronamap/src/Templates/Skeleton/index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __jsx = _react.default.createElement;

const Skeleton1 = ({
  row = 1
}) => [...Array(row || 1).keys()].map((i, ix) => __jsx("div", {
  key: ix,
  className: "skeleton",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: void 0
}, __jsx("div", {
  className: "skeleton-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: void 0
}, __jsx("h3", {
  className: "skeleton-title",
  style: {
    width: "38%"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: void 0
}), __jsx("ul", {
  className: "skeleton-paragraph",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: void 0
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: void 0
}), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: void 0
}), __jsx("li", {
  style: {
    width: "61%"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: void 0
})))));

exports.Skeleton1 = Skeleton1;

/***/ }),

/***/ "./src/Templates/Socials/index.js":
/*!****************************************!*\
  !*** ./src/Templates/Socials/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactFontawesome = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");

var _fontawesomeFreeSolid = __webpack_require__(/*! @fortawesome/fontawesome-free-solid */ "@fortawesome/fontawesome-free-solid");

var _freeBrandsSvgIcons = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");

var _jsxFileName = "/Users/stanislavohstany/WebApps/DEV/coronamap/src/Templates/Socials/index.js";

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __jsx = _react.default.createElement;

var _default = (0, _react.memo)(({
  title,
  description,
  icon,
  url
}) => {
  return __jsx("div", {
    className: "socials",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: void 0
  }, __jsx("div", {
    className: "share-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: void 0
  }, __jsx("a", {
    href: "https://www.facebook.com/sharer.php?u=" + url,
    rel: "external noopener",
    target: "_blank",
    className: "facebook-share-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: void 0
  }, __jsx(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeBrandsSvgIcons.faFacebook,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: void 0
  })), __jsx("a", {
    href: `https://twitter.com/intent/tweet?text=${title}&amp;url=${url}`,
    rel: "external noopener",
    target: "_blank",
    className: "twitter-share-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: void 0
  }, __jsx(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeBrandsSvgIcons.faTwitter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: void 0
  })), __jsx("a", {
    href: `https://www.linkedin.com/shareArticle?mini=true&amp;url=${url}&amp;title=${title}`,
    rel: "external noopener",
    target: "_blank",
    className: "linkedin-share-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: void 0
  }, __jsx("span", {
    className: "fa fa-linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: void 0
  }), __jsx(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeBrandsSvgIcons.faLinkedin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: void 0
  })), __jsx("a", {
    href: `https://reddit.com/submit?url=${url}&amp;title=${title}`,
    rel: "external noopener",
    target: "_blank",
    className: "reddit-share-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: void 0
  }, __jsx(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeBrandsSvgIcons.faReddit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: void 0
  })), __jsx("a", {
    href: `https://vk.com/share.php?url=${url}`,
    rel: "external noopener",
    target: "_blank",
    className: "vk-share-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: void 0
  }, __jsx(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeBrandsSvgIcons.faVk,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: void 0
  })), __jsx("a", {
    href: `https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&amp;st.shareUrl=${url}&amp;description=${title}&amp;media=http://asiandaily.co.kr/wp-content/uploads/2020/02/지하철11-1-677x470.jpg`,
    rel: "external noopener",
    target: "_blank",
    className: "odnoklassniki-share-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: void 0
  }, __jsx(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeBrandsSvgIcons.faOdnoklassniki,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: void 0
  })), __jsx("a", {
    href: `https://getpocket.com/save?title=${title}&amp;url=${url}`,
    rel: "external noopener",
    target: "_blank",
    className: "pocket-share-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: void 0
  }, __jsx(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeBrandsSvgIcons.faGetPocket,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: void 0
  })), __jsx("a", {
    href: `https://web.skype.com/share?url=${url}&amp;text=${title}`,
    rel: "external noopener",
    target: "_blank",
    className: "skype-share-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: void 0
  }, __jsx(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeBrandsSvgIcons.faSkype,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: void 0
  })), __jsx("a", {
    href: `https://api.whatsapp.com/send?text=${title}%20${url}`,
    rel: "external noopener",
    target: "_blank",
    className: "whatsapp-share-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: void 0
  }, __jsx(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeBrandsSvgIcons.faWhatsapp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: void 0
  })), __jsx("a", {
    href: `https://telegram.me/share/url?url=${url}&amp;text=${title}`,
    rel: "external noopener",
    target: "_blank",
    className: "telegram-share-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: void 0
  }, __jsx(_reactFontawesome.FontAwesomeIcon, {
    icon: _fontawesomeFreeSolid.faPaperPlane,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: void 0
  })), __jsx("a", {
    href: `viber://forward?text=${title}%20${url}`,
    rel: "external noopener",
    target: "_blank",
    className: "viber-share-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: void 0
  }, __jsx(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeBrandsSvgIcons.faViber,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: void 0
  })), __jsx("a", {
    href: `mailto:?subject=${title}&amp;body=${url}`,
    rel: "external noopener",
    target: "_blank",
    className: "email-share-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: void 0
  }, __jsx(_reactFontawesome.FontAwesomeIcon, {
    icon: _fontawesomeFreeSolid.faEnvelope,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: void 0
  })), __jsx("a", {
    className: "custom copyurl",
    onClick: event => {
      event.stopPropagation();
      var el = document.createElement("textarea");
      el.value = "${url}";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      alert("Скопировано");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: void 0
  }, __jsx(_reactFontawesome.FontAwesomeIcon, {
    icon: _fontawesomeFreeSolid.faCopy,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: void 0
  }))));
});

exports.default = _default;

/***/ }),

/***/ "./src/Templates/Subscribe/email.png":
/*!*******************************************!*\
  !*** ./src/Templates/Subscribe/email.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/email-dd76c25ef4fd04023c47950b9dd47d68.png";

/***/ }),

/***/ "./src/Templates/Subscribe/index.js":
/*!******************************************!*\
  !*** ./src/Templates/Subscribe/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactFontawesome = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");

var _fontawesomeFreeSolid = __webpack_require__(/*! @fortawesome/fontawesome-free-solid */ "@fortawesome/fontawesome-free-solid");

var _phone = _interopRequireDefault(__webpack_require__(/*! ./phone.png */ "./src/Templates/Subscribe/phone.png"));

var _email = _interopRequireDefault(__webpack_require__(/*! ./email.png */ "./src/Templates/Subscribe/email.png"));

var _phones = _interopRequireDefault(__webpack_require__(/*! ./phones.json */ "./src/Templates/Subscribe/phones.json"));

var _jsxFileName = "/Users/stanislavohstany/WebApps/DEV/coronamap/src/Templates/Subscribe/index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __jsx = _react.default.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const via = {
  phone: _phone.default,
  email: _email.default
};

var _default = () => {
  const {
    0: state,
    1: _state
  } = (0, _react.useState)({
    via: "phone",
    num: "+82",
    phone: "",
    email: ""
  });
  const updateState = (0, _react.useCallback)(e => {
    const {
      target: {
        value
      }
    } = e;
    const name = e.target.getAttribute("name");

    _state(e => {
      return _objectSpread({}, e, {
        [name]: value
      });
    });
  }, []);
  const setVia = (0, _react.useCallback)(via => {
    _state(e => _objectSpread({}, e, {
      via
    }));
  }, []);
  return __jsx("div", {
    className: "block subscribe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: void 0
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: void 0
  }, "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u0432\u043E\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0438\u043B\u0438 \u0438\u043C\u0435\u0439\u043B \u0438 \u043C\u044B \u0432\u0430\u0441 \u043E\u043F\u043E\u0432\u0435\u0441\u0442\u0438\u043C \u0435\u0441\u043B\u0438 \u0435\u0441\u0442\u044C \u0440\u044F\u0434\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0439 \u0437\u0430\u0440\u0430\u0436\u0435\u043D\u043D\u0438\u044F."), __jsx("div", {
    className: "sel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: void 0
  }, ["phone", "email"].map((w, x) => {
    return __jsx("img", {
      key: x,
      className: w === state.via ? "selected" : "",
      src: via[w],
      onClick: () => setVia(w),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: void 0
    });
  }), __jsx("div", {
    className: "inpf " + state.via,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: void 0
  }, {
    phone: __jsx(_react.default.Fragment, null, __jsx("select", {
      name: "num",
      value: state.num,
      onChange: updateState,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: void 0
    }, _phones.default.map((p, px) => __jsx("option", {
      key: px,
      value: p.dial_code,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: void 0
    }, p.dial_code, " (", p.name, ")"))), __jsx("input", {
      name: "phone",
      placeholder: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
      value: state.phone,
      onChange: updateState,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: void 0
    })),
    email: __jsx("input", {
      name: "email",
      placeholder: "\u042D\u043B.\u043F\u043E\u0447\u0442\u0430",
      value: state.email,
      onChange: updateState,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: void 0
    })
  }[state.via || ""], __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: void 0
  }, __jsx(_reactFontawesome.FontAwesomeIcon, {
    icon: _fontawesomeFreeSolid.faCheck,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: void 0
  })))));
};

exports.default = _default;

/***/ }),

/***/ "./src/Templates/Subscribe/phone.png":
/*!*******************************************!*\
  !*** ./src/Templates/Subscribe/phone.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/Templates/Subscribe/phones.json":
/*!*********************************************!*\
  !*** ./src/Templates/Subscribe/phones.json ***!
  \*********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Afghanistan\",\"dial_code\":\"+93\",\"code\":\"AF\"},{\"name\":\"Albania\",\"dial_code\":\"+355\",\"code\":\"AL\"},{\"name\":\"Algeria\",\"dial_code\":\"+213\",\"code\":\"DZ\"},{\"name\":\"AmericanSamoa\",\"dial_code\":\"+1 684\",\"code\":\"AS\"},{\"name\":\"Andorra\",\"dial_code\":\"+376\",\"code\":\"AD\"},{\"name\":\"Angola\",\"dial_code\":\"+244\",\"code\":\"AO\"},{\"name\":\"Anguilla\",\"dial_code\":\"+1 264\",\"code\":\"AI\"},{\"name\":\"Antarctica\",\"dial_code\":\"+672\",\"code\":\"AQ\"},{\"name\":\"Antigua and Barbuda\",\"dial_code\":\"+1268\",\"code\":\"AG\"},{\"name\":\"Argentina\",\"dial_code\":\"+54\",\"code\":\"AR\"},{\"name\":\"Armenia\",\"dial_code\":\"+374\",\"code\":\"AM\"},{\"name\":\"Aruba\",\"dial_code\":\"+297\",\"code\":\"AW\"},{\"name\":\"Australia\",\"dial_code\":\"+61\",\"code\":\"AU\"},{\"name\":\"Austria\",\"dial_code\":\"+43\",\"code\":\"AT\"},{\"name\":\"Azerbaijan\",\"dial_code\":\"+994\",\"code\":\"AZ\"},{\"name\":\"Bahamas\",\"dial_code\":\"+1 242\",\"code\":\"BS\"},{\"name\":\"Bahrain\",\"dial_code\":\"+973\",\"code\":\"BH\"},{\"name\":\"Bangladesh\",\"dial_code\":\"+880\",\"code\":\"BD\"},{\"name\":\"Barbados\",\"dial_code\":\"+1 246\",\"code\":\"BB\"},{\"name\":\"Belarus\",\"dial_code\":\"+375\",\"code\":\"BY\"},{\"name\":\"Belgium\",\"dial_code\":\"+32\",\"code\":\"BE\"},{\"name\":\"Belize\",\"dial_code\":\"+501\",\"code\":\"BZ\"},{\"name\":\"Benin\",\"dial_code\":\"+229\",\"code\":\"BJ\"},{\"name\":\"Bermuda\",\"dial_code\":\"+1 441\",\"code\":\"BM\"},{\"name\":\"Bhutan\",\"dial_code\":\"+975\",\"code\":\"BT\"},{\"name\":\"Bolivia, Plurinational State of\",\"dial_code\":\"+591\",\"code\":\"BO\"},{\"name\":\"Bosnia and Herzegovina\",\"dial_code\":\"+387\",\"code\":\"BA\"},{\"name\":\"Botswana\",\"dial_code\":\"+267\",\"code\":\"BW\"},{\"name\":\"Brazil\",\"dial_code\":\"+55\",\"code\":\"BR\"},{\"name\":\"British Indian Ocean Territory\",\"dial_code\":\"+246\",\"code\":\"IO\"},{\"name\":\"Brunei Darussalam\",\"dial_code\":\"+673\",\"code\":\"BN\"},{\"name\":\"Bulgaria\",\"dial_code\":\"+359\",\"code\":\"BG\"},{\"name\":\"Burkina Faso\",\"dial_code\":\"+226\",\"code\":\"BF\"},{\"name\":\"Burundi\",\"dial_code\":\"+257\",\"code\":\"BI\"},{\"name\":\"Cambodia\",\"dial_code\":\"+855\",\"code\":\"KH\"},{\"name\":\"Cameroon\",\"dial_code\":\"+237\",\"code\":\"CM\"},{\"name\":\"Canada\",\"dial_code\":\"+1\",\"code\":\"CA\"},{\"name\":\"Cape Verde\",\"dial_code\":\"+238\",\"code\":\"CV\"},{\"name\":\"Cayman Islands\",\"dial_code\":\"+ 345\",\"code\":\"KY\"},{\"name\":\"Central African Republic\",\"dial_code\":\"+236\",\"code\":\"CF\"},{\"name\":\"Chad\",\"dial_code\":\"+235\",\"code\":\"TD\"},{\"name\":\"Chile\",\"dial_code\":\"+56\",\"code\":\"CL\"},{\"name\":\"China\",\"dial_code\":\"+86\",\"code\":\"CN\"},{\"name\":\"Christmas Island\",\"dial_code\":\"+61\",\"code\":\"CX\"},{\"name\":\"Cocos (Keeling) Islands\",\"dial_code\":\"+61\",\"code\":\"CC\"},{\"name\":\"Colombia\",\"dial_code\":\"+57\",\"code\":\"CO\"},{\"name\":\"Comoros\",\"dial_code\":\"+269\",\"code\":\"KM\"},{\"name\":\"Congo\",\"dial_code\":\"+242\",\"code\":\"CG\"},{\"name\":\"Congo, The Democratic Republic of the\",\"dial_code\":\"+243\",\"code\":\"CD\"},{\"name\":\"Cook Islands\",\"dial_code\":\"+682\",\"code\":\"CK\"},{\"name\":\"Costa Rica\",\"dial_code\":\"+506\",\"code\":\"CR\"},{\"name\":\"Cote d'Ivoire\",\"dial_code\":\"+225\",\"code\":\"CI\"},{\"name\":\"Croatia\",\"dial_code\":\"+385\",\"code\":\"HR\"},{\"name\":\"Cuba\",\"dial_code\":\"+53\",\"code\":\"CU\"},{\"name\":\"Cyprus\",\"dial_code\":\"+537\",\"code\":\"CY\"},{\"name\":\"Czech Republic\",\"dial_code\":\"+420\",\"code\":\"CZ\"},{\"name\":\"Denmark\",\"dial_code\":\"+45\",\"code\":\"DK\"},{\"name\":\"Djibouti\",\"dial_code\":\"+253\",\"code\":\"DJ\"},{\"name\":\"Dominica\",\"dial_code\":\"+1 767\",\"code\":\"DM\"},{\"name\":\"Dominican Republic\",\"dial_code\":\"+1 849\",\"code\":\"DO\"},{\"name\":\"Ecuador\",\"dial_code\":\"+593\",\"code\":\"EC\"},{\"name\":\"Egypt\",\"dial_code\":\"+20\",\"code\":\"EG\"},{\"name\":\"El Salvador\",\"dial_code\":\"+503\",\"code\":\"SV\"},{\"name\":\"Equatorial Guinea\",\"dial_code\":\"+240\",\"code\":\"GQ\"},{\"name\":\"Eritrea\",\"dial_code\":\"+291\",\"code\":\"ER\"},{\"name\":\"Estonia\",\"dial_code\":\"+372\",\"code\":\"EE\"},{\"name\":\"Ethiopia\",\"dial_code\":\"+251\",\"code\":\"ET\"},{\"name\":\"Falkland Islands (Malvinas)\",\"dial_code\":\"+500\",\"code\":\"FK\"},{\"name\":\"Faroe Islands\",\"dial_code\":\"+298\",\"code\":\"FO\"},{\"name\":\"Fiji\",\"dial_code\":\"+679\",\"code\":\"FJ\"},{\"name\":\"Finland\",\"dial_code\":\"+358\",\"code\":\"FI\"},{\"name\":\"France\",\"dial_code\":\"+33\",\"code\":\"FR\"},{\"name\":\"French Guiana\",\"dial_code\":\"+594\",\"code\":\"GF\"},{\"name\":\"French Polynesia\",\"dial_code\":\"+689\",\"code\":\"PF\"},{\"name\":\"Gabon\",\"dial_code\":\"+241\",\"code\":\"GA\"},{\"name\":\"Gambia\",\"dial_code\":\"+220\",\"code\":\"GM\"},{\"name\":\"Georgia\",\"dial_code\":\"+995\",\"code\":\"GE\"},{\"name\":\"Germany\",\"dial_code\":\"+49\",\"code\":\"DE\"},{\"name\":\"Ghana\",\"dial_code\":\"+233\",\"code\":\"GH\"},{\"name\":\"Gibraltar\",\"dial_code\":\"+350\",\"code\":\"GI\"},{\"name\":\"Greece\",\"dial_code\":\"+30\",\"code\":\"GR\"},{\"name\":\"Greenland\",\"dial_code\":\"+299\",\"code\":\"GL\"},{\"name\":\"Grenada\",\"dial_code\":\"+1 473\",\"code\":\"GD\"},{\"name\":\"Guadeloupe\",\"dial_code\":\"+590\",\"code\":\"GP\"},{\"name\":\"Guam\",\"dial_code\":\"+1 671\",\"code\":\"GU\"},{\"name\":\"Guatemala\",\"dial_code\":\"+502\",\"code\":\"GT\"},{\"name\":\"Guernsey\",\"dial_code\":\"+44\",\"code\":\"GG\"},{\"name\":\"Guinea\",\"dial_code\":\"+224\",\"code\":\"GN\"},{\"name\":\"Guinea-Bissau\",\"dial_code\":\"+245\",\"code\":\"GW\"},{\"name\":\"Guyana\",\"dial_code\":\"+595\",\"code\":\"GY\"},{\"name\":\"Haiti\",\"dial_code\":\"+509\",\"code\":\"HT\"},{\"name\":\"Holy See (Vatican City State)\",\"dial_code\":\"+379\",\"code\":\"VA\"},{\"name\":\"Honduras\",\"dial_code\":\"+504\",\"code\":\"HN\"},{\"name\":\"Hong Kong\",\"dial_code\":\"+852\",\"code\":\"HK\"},{\"name\":\"Hungary\",\"dial_code\":\"+36\",\"code\":\"HU\"},{\"name\":\"Iceland\",\"dial_code\":\"+354\",\"code\":\"IS\"},{\"name\":\"India\",\"dial_code\":\"+91\",\"code\":\"IN\"},{\"name\":\"Indonesia\",\"dial_code\":\"+62\",\"code\":\"ID\"},{\"name\":\"Iran, Islamic Republic of\",\"dial_code\":\"+98\",\"code\":\"IR\"},{\"name\":\"Iraq\",\"dial_code\":\"+964\",\"code\":\"IQ\"},{\"name\":\"Ireland\",\"dial_code\":\"+353\",\"code\":\"IE\"},{\"name\":\"Isle of Man\",\"dial_code\":\"+44\",\"code\":\"IM\"},{\"name\":\"Israel\",\"dial_code\":\"+972\",\"code\":\"IL\"},{\"name\":\"Italy\",\"dial_code\":\"+39\",\"code\":\"IT\"},{\"name\":\"Jamaica\",\"dial_code\":\"+1 876\",\"code\":\"JM\"},{\"name\":\"Japan\",\"dial_code\":\"+81\",\"code\":\"JP\"},{\"name\":\"Jersey\",\"dial_code\":\"+44\",\"code\":\"JE\"},{\"name\":\"Jordan\",\"dial_code\":\"+962\",\"code\":\"JO\"},{\"name\":\"Kazakhstan\",\"dial_code\":\"+7 7\",\"code\":\"KZ\"},{\"name\":\"Kenya\",\"dial_code\":\"+254\",\"code\":\"KE\"},{\"name\":\"Kiribati\",\"dial_code\":\"+686\",\"code\":\"KI\"},{\"name\":\"Korea, Democratic People's Republic of\",\"dial_code\":\"+850\",\"code\":\"KP\"},{\"name\":\"Korea, Republic of\",\"dial_code\":\"+82\",\"code\":\"KR\"},{\"name\":\"Kuwait\",\"dial_code\":\"+965\",\"code\":\"KW\"},{\"name\":\"Kyrgyzstan\",\"dial_code\":\"+996\",\"code\":\"KG\"},{\"name\":\"Lao People's Democratic Republic\",\"dial_code\":\"+856\",\"code\":\"LA\"},{\"name\":\"Latvia\",\"dial_code\":\"+371\",\"code\":\"LV\"},{\"name\":\"Lebanon\",\"dial_code\":\"+961\",\"code\":\"LB\"},{\"name\":\"Lesotho\",\"dial_code\":\"+266\",\"code\":\"LS\"},{\"name\":\"Liberia\",\"dial_code\":\"+231\",\"code\":\"LR\"},{\"name\":\"Libyan Arab Jamahiriya\",\"dial_code\":\"+218\",\"code\":\"LY\"},{\"name\":\"Liechtenstein\",\"dial_code\":\"+423\",\"code\":\"LI\"},{\"name\":\"Lithuania\",\"dial_code\":\"+370\",\"code\":\"LT\"},{\"name\":\"Luxembourg\",\"dial_code\":\"+352\",\"code\":\"LU\"},{\"name\":\"Macao\",\"dial_code\":\"+853\",\"code\":\"MO\"},{\"name\":\"Macedonia, The Former Yugoslav Republic of\",\"dial_code\":\"+389\",\"code\":\"MK\"},{\"name\":\"Madagascar\",\"dial_code\":\"+261\",\"code\":\"MG\"},{\"name\":\"Malawi\",\"dial_code\":\"+265\",\"code\":\"MW\"},{\"name\":\"Malaysia\",\"dial_code\":\"+60\",\"code\":\"MY\"},{\"name\":\"Maldives\",\"dial_code\":\"+960\",\"code\":\"MV\"},{\"name\":\"Mali\",\"dial_code\":\"+223\",\"code\":\"ML\"},{\"name\":\"Malta\",\"dial_code\":\"+356\",\"code\":\"MT\"},{\"name\":\"Marshall Islands\",\"dial_code\":\"+692\",\"code\":\"MH\"},{\"name\":\"Martinique\",\"dial_code\":\"+596\",\"code\":\"MQ\"},{\"name\":\"Mauritania\",\"dial_code\":\"+222\",\"code\":\"MR\"},{\"name\":\"Mauritius\",\"dial_code\":\"+230\",\"code\":\"MU\"},{\"name\":\"Mayotte\",\"dial_code\":\"+262\",\"code\":\"YT\"},{\"name\":\"Mexico\",\"dial_code\":\"+52\",\"code\":\"MX\"},{\"name\":\"Micronesia, Federated States of\",\"dial_code\":\"+691\",\"code\":\"FM\"},{\"name\":\"Moldova, Republic of\",\"dial_code\":\"+373\",\"code\":\"MD\"},{\"name\":\"Monaco\",\"dial_code\":\"+377\",\"code\":\"MC\"},{\"name\":\"Mongolia\",\"dial_code\":\"+976\",\"code\":\"MN\"},{\"name\":\"Montenegro\",\"dial_code\":\"+382\",\"code\":\"ME\"},{\"name\":\"Montserrat\",\"dial_code\":\"+1664\",\"code\":\"MS\"},{\"name\":\"Morocco\",\"dial_code\":\"+212\",\"code\":\"MA\"},{\"name\":\"Mozambique\",\"dial_code\":\"+258\",\"code\":\"MZ\"},{\"name\":\"Myanmar\",\"dial_code\":\"+95\",\"code\":\"MM\"},{\"name\":\"Namibia\",\"dial_code\":\"+264\",\"code\":\"NA\"},{\"name\":\"Nauru\",\"dial_code\":\"+674\",\"code\":\"NR\"},{\"name\":\"Nepal\",\"dial_code\":\"+977\",\"code\":\"NP\"},{\"name\":\"Netherlands\",\"dial_code\":\"+31\",\"code\":\"NL\"},{\"name\":\"Netherlands Antilles\",\"dial_code\":\"+599\",\"code\":\"AN\"},{\"name\":\"New Caledonia\",\"dial_code\":\"+687\",\"code\":\"NC\"},{\"name\":\"New Zealand\",\"dial_code\":\"+64\",\"code\":\"NZ\"},{\"name\":\"Nicaragua\",\"dial_code\":\"+505\",\"code\":\"NI\"},{\"name\":\"Niger\",\"dial_code\":\"+227\",\"code\":\"NE\"},{\"name\":\"Nigeria\",\"dial_code\":\"+234\",\"code\":\"NG\"},{\"name\":\"Niue\",\"dial_code\":\"+683\",\"code\":\"NU\"},{\"name\":\"Norfolk Island\",\"dial_code\":\"+672\",\"code\":\"NF\"},{\"name\":\"Northern Mariana Islands\",\"dial_code\":\"+1 670\",\"code\":\"MP\"},{\"name\":\"Norway\",\"dial_code\":\"+47\",\"code\":\"NO\"},{\"name\":\"Oman\",\"dial_code\":\"+968\",\"code\":\"OM\"},{\"name\":\"Pakistan\",\"dial_code\":\"+92\",\"code\":\"PK\"},{\"name\":\"Palau\",\"dial_code\":\"+680\",\"code\":\"PW\"},{\"name\":\"Palestinian Territory, Occupied\",\"dial_code\":\"+970\",\"code\":\"PS\"},{\"name\":\"Panama\",\"dial_code\":\"+507\",\"code\":\"PA\"},{\"name\":\"Papua New Guinea\",\"dial_code\":\"+675\",\"code\":\"PG\"},{\"name\":\"Paraguay\",\"dial_code\":\"+595\",\"code\":\"PY\"},{\"name\":\"Peru\",\"dial_code\":\"+51\",\"code\":\"PE\"},{\"name\":\"Philippines\",\"dial_code\":\"+63\",\"code\":\"PH\"},{\"name\":\"Pitcairn\",\"dial_code\":\"+872\",\"code\":\"PN\"},{\"name\":\"Poland\",\"dial_code\":\"+48\",\"code\":\"PL\"},{\"name\":\"Portugal\",\"dial_code\":\"+351\",\"code\":\"PT\"},{\"name\":\"Puerto Rico\",\"dial_code\":\"+1 939\",\"code\":\"PR\"},{\"name\":\"Qatar\",\"dial_code\":\"+974\",\"code\":\"QA\"},{\"name\":\"Romania\",\"dial_code\":\"+40\",\"code\":\"RO\"},{\"name\":\"Russia\",\"dial_code\":\"+7\",\"code\":\"RU\"},{\"name\":\"Rwanda\",\"dial_code\":\"+250\",\"code\":\"RW\"},{\"name\":\"Réunion\",\"dial_code\":\"+262\",\"code\":\"RE\"},{\"name\":\"Saint Barthélemy\",\"dial_code\":\"+590\",\"code\":\"BL\"},{\"name\":\"Saint Helena, Ascension and Tristan Da Cunha\",\"dial_code\":\"+290\",\"code\":\"SH\"},{\"name\":\"Saint Kitts and Nevis\",\"dial_code\":\"+1 869\",\"code\":\"KN\"},{\"name\":\"Saint Lucia\",\"dial_code\":\"+1 758\",\"code\":\"LC\"},{\"name\":\"Saint Martin\",\"dial_code\":\"+590\",\"code\":\"MF\"},{\"name\":\"Saint Pierre and Miquelon\",\"dial_code\":\"+508\",\"code\":\"PM\"},{\"name\":\"Saint Vincent and the Grenadines\",\"dial_code\":\"+1 784\",\"code\":\"VC\"},{\"name\":\"Samoa\",\"dial_code\":\"+685\",\"code\":\"WS\"},{\"name\":\"San Marino\",\"dial_code\":\"+378\",\"code\":\"SM\"},{\"name\":\"Sao Tome and Principe\",\"dial_code\":\"+239\",\"code\":\"ST\"},{\"name\":\"Saudi Arabia\",\"dial_code\":\"+966\",\"code\":\"SA\"},{\"name\":\"Senegal\",\"dial_code\":\"+221\",\"code\":\"SN\"},{\"name\":\"Serbia\",\"dial_code\":\"+381\",\"code\":\"RS\"},{\"name\":\"Seychelles\",\"dial_code\":\"+248\",\"code\":\"SC\"},{\"name\":\"Sierra Leone\",\"dial_code\":\"+232\",\"code\":\"SL\"},{\"name\":\"Singapore\",\"dial_code\":\"+65\",\"code\":\"SG\"},{\"name\":\"Slovakia\",\"dial_code\":\"+421\",\"code\":\"SK\"},{\"name\":\"Slovenia\",\"dial_code\":\"+386\",\"code\":\"SI\"},{\"name\":\"Solomon Islands\",\"dial_code\":\"+677\",\"code\":\"SB\"},{\"name\":\"Somalia\",\"dial_code\":\"+252\",\"code\":\"SO\"},{\"name\":\"South Africa\",\"dial_code\":\"+27\",\"code\":\"ZA\"},{\"name\":\"South Georgia and the South Sandwich Islands\",\"dial_code\":\"+500\",\"code\":\"GS\"},{\"name\":\"Spain\",\"dial_code\":\"+34\",\"code\":\"ES\"},{\"name\":\"Sri Lanka\",\"dial_code\":\"+94\",\"code\":\"LK\"},{\"name\":\"Sudan\",\"dial_code\":\"+249\",\"code\":\"SD\"},{\"name\":\"Suriname\",\"dial_code\":\"+597\",\"code\":\"SR\"},{\"name\":\"Svalbard and Jan Mayen\",\"dial_code\":\"+47\",\"code\":\"SJ\"},{\"name\":\"Swaziland\",\"dial_code\":\"+268\",\"code\":\"SZ\"},{\"name\":\"Sweden\",\"dial_code\":\"+46\",\"code\":\"SE\"},{\"name\":\"Switzerland\",\"dial_code\":\"+41\",\"code\":\"CH\"},{\"name\":\"Syrian Arab Republic\",\"dial_code\":\"+963\",\"code\":\"SY\"},{\"name\":\"Taiwan, Province of China\",\"dial_code\":\"+886\",\"code\":\"TW\"},{\"name\":\"Tajikistan\",\"dial_code\":\"+992\",\"code\":\"TJ\"},{\"name\":\"Tanzania, United Republic of\",\"dial_code\":\"+255\",\"code\":\"TZ\"},{\"name\":\"Thailand\",\"dial_code\":\"+66\",\"code\":\"TH\"},{\"name\":\"Timor-Leste\",\"dial_code\":\"+670\",\"code\":\"TL\"},{\"name\":\"Togo\",\"dial_code\":\"+228\",\"code\":\"TG\"},{\"name\":\"Tokelau\",\"dial_code\":\"+690\",\"code\":\"TK\"},{\"name\":\"Tonga\",\"dial_code\":\"+676\",\"code\":\"TO\"},{\"name\":\"Trinidad and Tobago\",\"dial_code\":\"+1 868\",\"code\":\"TT\"},{\"name\":\"Tunisia\",\"dial_code\":\"+216\",\"code\":\"TN\"},{\"name\":\"Turkey\",\"dial_code\":\"+90\",\"code\":\"TR\"},{\"name\":\"Turkmenistan\",\"dial_code\":\"+993\",\"code\":\"TM\"},{\"name\":\"Turks and Caicos Islands\",\"dial_code\":\"+1 649\",\"code\":\"TC\"},{\"name\":\"Tuvalu\",\"dial_code\":\"+688\",\"code\":\"TV\"},{\"name\":\"Uganda\",\"dial_code\":\"+256\",\"code\":\"UG\"},{\"name\":\"Ukraine\",\"dial_code\":\"+380\",\"code\":\"UA\"},{\"name\":\"United Arab Emirates\",\"dial_code\":\"+971\",\"code\":\"AE\"},{\"name\":\"United Kingdom\",\"dial_code\":\"+44\",\"code\":\"GB\"},{\"name\":\"United States\",\"dial_code\":\"+1\",\"code\":\"US\"},{\"name\":\"Uruguay\",\"dial_code\":\"+598\",\"code\":\"UY\"},{\"name\":\"Uzbekistan\",\"dial_code\":\"+998\",\"code\":\"UZ\"},{\"name\":\"Vanuatu\",\"dial_code\":\"+678\",\"code\":\"VU\"},{\"name\":\"Venezuela, Bolivarian Republic of\",\"dial_code\":\"+58\",\"code\":\"VE\"},{\"name\":\"Viet Nam\",\"dial_code\":\"+84\",\"code\":\"VN\"},{\"name\":\"Virgin Islands, British\",\"dial_code\":\"+1 284\",\"code\":\"VG\"},{\"name\":\"Virgin Islands, U.S.\",\"dial_code\":\"+1 340\",\"code\":\"VI\"},{\"name\":\"Wallis and Futuna\",\"dial_code\":\"+681\",\"code\":\"WF\"},{\"name\":\"Yemen\",\"dial_code\":\"+967\",\"code\":\"YE\"},{\"name\":\"Zambia\",\"dial_code\":\"+260\",\"code\":\"ZM\"},{\"name\":\"Zimbabwe\",\"dial_code\":\"+263\",\"code\":\"ZW\"},{\"name\":\"Åland Islands\",\"dial_code\":\"+358\",\"code\":\"AX\"}]");

/***/ }),

/***/ "./src/global.scss":
/*!*************************!*\
  !*** ./src/global.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"clickable": "clickable",
	"title": "title",
	"description": "description",
	"card": "card",
	"mainBlock": "mainBlock",
	"block": "block",
	"activityArea": "activityArea",
	"makeMark": "makeMark",
	"popup": "popup",
	"mapArea": "mapArea",
	"form": "form",
	"act": "act",
	"path1": "path1",
	"active": "active",
	"news": "news",
	"activity": "activity",
	"acts": "acts",
	"local": "local",
	"bb": "bb",
	"b2": "b2",
	"b3": "b3",
	"author": "author",
	"src": "src",
	"comments": "comments",
	"cm": "cm",
	"chead": "chead",
	"imgb": "imgb",
	"subscribe": "subscribe",
	"selected": "selected",
	"sel": "sel",
	"inpf": "inpf",
	"phone": "phone",
	"email": "email",
	"socials": "socials",
	"share-links": "share-links",
	"skeleton": "skeleton",
	"skeleton-content": "skeleton-content",
	"skeleton-title": "skeleton-title",
	"skeleton-paragraph": "skeleton-paragraph",
	"skeleton-loading": "skeleton-loading"
};

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/stanislavohstany/WebApps/DEV/coronamap/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@fortawesome/fontawesome-free-solid":
/*!******************************************************!*\
  !*** external "@fortawesome/fontawesome-free-solid" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid");

/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "google-maps-react":
/*!************************************!*\
  !*** external "google-maps-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("google-maps-react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map