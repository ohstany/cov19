webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./src/Templates/ActivityArea/index.js":
/*!*********************************************!*\
  !*** ./src/Templates/ActivityArea/index.js ***!
  \*********************************************/
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

var _xmlToJson = _interopRequireDefault(__webpack_require__(/*! ../../Library/xmlToJson */ "./src/Library/xmlToJson.js"));

var _Skeleton = __webpack_require__(/*! ../Skeleton */ "./src/Templates/Skeleton/index.js");

var _jsxFileName = "/Users/stanislavohstany/WebApps/DEV/coronamap/src/Templates/ActivityArea/index.js";
var __jsx = _react.default.createElement;

var Pin = function Pin(props) {
  return __jsx("svg", (0, _extends2.default)({}, props, {
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
var proxyUrl = "http://cors-anywhere.herokuapp.com/";

var News = function News(_ref) {
  var data = _ref.data;
  return __jsx("div", {
    className: "author",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, data.img && __jsx("div", {
    className: "imgb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("img", {
    src: data.img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), __jsx("h3", {
    className: "atitle clickable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("a", {
    href: data.link,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, data.title)), __jsx("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, data.description), __jsx("div", {
    className: "source",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "\u0420\u0435\u0441\u0443\u0440\u0441: #"));
};

var _default = function _default(_ref2) {
  var context = _ref2.context;

  var _ref3 = context || {},
      _ref3$store = _ref3.store,
      index = _ref3$store.index,
      markers = _ref3$store.markers,
      _ref3$store$news = _ref3$store.news,
      news = _ref3$store$news === void 0 ? false : _ref3$store$news,
      activity = _ref3$store.activity,
      setStore = _ref3.setStore;

  var active = index >= 0 ? markers[index] : false;
  var comments = activity[index] || false;

  var _useState = (0, _react.useState)("acts"),
      nav = _useState[0],
      _nav = _useState[1];

  var navigation = (0, _react.useCallback)(function (key) {
    _nav(key);
  }, []);

  var getNews = function getNews() {
    fetch(proxyUrl + "https://gazeta.ua/rss").then(function (blop) {
      return blop.text();
    }).then(function (res) {
      var news = _xmlToJson.default.parseString(res).rss[0].channel[0].item.map(function (i) {
        return {
          title: i.title[0]._text,
          link: i.guid[0]._text,
          pubDate: i.pubDate[0]._text,
          description: i.description[0]._text.replace(/(<([^>]+)>)/gi, "").substring(0, 180) + "...",
          img: i.enclosure && i.enclosure[0]._attr.url._value
        };
      });

      setStore({
        news: news
      });
    });
  };

  (0, _react.useEffect)(function () {
    getNews();
  }, []);
  (0, _react.useEffect)(function () {
    if (index >= 0) {
      navigation("local");
    }
  }, [index]);
  var SingleItem = (0, _react.useCallback)(function (_ref4) {
    var nav = _ref4.nav,
        a = _ref4.a,
        ax = _ref4.ax,
        _ref4$news = _ref4.news,
        news = _ref4$news === void 0 ? false : _ref4$news;
    return a ? __jsx("div", {
      className: "author",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx("h3", {
      className: "atitle" + (nav === "acts" ? " clickable" : ""),
      onClick: function onClick() {
        if (nav === "acts") {
          setStore({
            index: ax
          });
          navigation("local");
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, news ? a.title : "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C #".concat(a.id)), __jsx("div", {
      className: "desc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, a.content), a.source && a.source.length && __jsx("div", {
      className: "source",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, a.source.map(function (s, sx) {
      return __jsx(RenderSource, {
        key: sx,
        s: s,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      });
    })), nav === "acts" && __jsx("button", {
      onClick: function onClick() {
        setStore({
          index: ax
        });
        navigation("local");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C")) : "Нажмите не метку на карте";
  }, []);
  var RenderSource = (0, _react.useCallback)(function (_ref5) {
    var s = _ref5.s;
    return __jsx("div", {
      className: "src",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, s.indexOf("youtube") >= 0 && s.indexOf("iframe") >= 0 ? __jsx("div", {
      dangerouslySetInnerHTML: {
        __html: s
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }) : __jsx("a", {
      href: s,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, s));
  }, []);
  return __jsx("div", {
    className: "block activityArea " + nav,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, [{
    id: "local",
    title: __jsx(Pin, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    })
  }, {
    id: "acts",
    title: "Активность"
  }, {
    id: "news",
    title: "Новости"
  }].map(function (m, mx) {
    return __jsx("li", {
      key: mx,
      className: "navi " + (m.id === nav ? "active" : ""),
      onClick: function onClick() {
        navigation(m.id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, m.title);
  }))), __jsx("div", {
    className: "activity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx("div", {
    className: "bb b1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, markers.map(function (a, ax) {
    return __jsx(SingleItem, {
      nav: nav,
      key: ax,
      a: a,
      ax: ax,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    });
  })), __jsx("div", {
    className: "bb b2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx(SingleItem, {
    nav: nav,
    a: active,
    ax: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }), active && __jsx("div", {
    className: "comments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 (", comments.length || 0, ")"), comments ? comments.map(function (c, cx) {
    return __jsx("div", {
      className: "cm author",
      key: cx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, __jsx("div", {
      className: "chead",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, c.user), c.date ? __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, " - " + c.date) : ""), __jsx("div", {
      className: "cbody",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, c.content));
  }) : "Пока нет коментариев, напишите первым")), __jsx("div", {
    className: "bb b3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, news.length ? news.map(function (a, ax) {
    return __jsx(News, {
      key: ax,
      data: a,
      ax: ax,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: this
    });
  }) : __jsx(_Skeleton.Skeleton1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }))));
};

exports.default = _default;

/***/ }),

/***/ "./src/Templates/Skeleton/index.js":
/*!*****************************************!*\
  !*** ./src/Templates/Skeleton/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Skeleton1 = void 0;

var _style = _interopRequireDefault(__webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _jsxFileName = "/Users/stanislavohstany/WebApps/DEV/coronamap/src/Templates/Skeleton/index.js";
var __jsx = _react.default.createElement;

var Skeleton1 = function Skeleton1() {
  return __jsx(_react.default.Fragment, null, __jsx("div", {
    className: "jsx-4002056427" + " " + "ant-skeleton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4002056427" + " " + "ant-skeleton-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("h3", {
    style: "width: 38%;",
    className: "jsx-4002056427" + " " + "ant-skeleton-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), __jsx("ul", {
    className: "jsx-4002056427" + " " + "ant-skeleton-paragraph",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-4002056427",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("li", {
    className: "jsx-4002056427",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("li", {
    style: "width: 61%;",
    className: "jsx-4002056427",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })))), __jsx(_style.default, {
    id: "4002056427",
    __self: this
  }, ".ant-skeleton.jsx-4002056427{display:table;width:100%;}.ant-skeleton-content.jsx-4002056427{display:table-cell;width:100%;vertical-align:top;}.ant-skeleton-content.jsx-4002056427 .ant-skeleton-title.jsx-4002056427{width:100%;height:16px;margin-top:16px;background:#f2f2f2;margin:0;padding:0;}.ant-skeleton-content.jsx-4002056427 .ant-skeleton-title.jsx-4002056427+.ant-skeleton-paragraph.jsx-4002056427{margin-top:24px;}.ant-skeleton-content.jsx-4002056427 .ant-skeleton-paragraph.jsx-4002056427{padding:0;list-style:none;}.ant-skeleton-content.jsx-4002056427 .ant-skeleton-paragraph.jsx-4002056427>li.jsx-4002056427{width:100%;height:16px;list-style:none;background:#f2f2f2;background:-webkit-gradient( linear, left top, right top, color-stop(25%,#f2f2f2), color-stop(37%,#e6e6e6), color-stop(63%,#f2f2f2) );background:linear-gradient( 90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63% );background-size:400% 100%;-webkit-animation:ant-skeleton-loading 1.4s ease infinite;-webkit-animation:ant-skeleton-loading-jsx-4002056427 1.4s ease infinite;animation:ant-skeleton-loading-jsx-4002056427 1.4s ease infinite;}@-webkit-keyframes ant-skeleton-loading-jsx-4002056427{0%{background-position:100% 50%;}100%{background-position:0 50%;}}@keyframes ant-skeleton-loading-jsx-4002056427{0%{background-position:100% 50%;}100%{background-position:0 50%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGFuaXNsYXZvaHN0YW55L1dlYkFwcHMvREVWL2Nvcm9uYW1hcC9zcmMvVGVtcGxhdGVzL1NrZWxldG9uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVljLEFBR21CLEFBSUssQUFLUixBQVVLLEFBR04sQUFJQyxBQXdCbUIsQUFHSCxVQTlCWCxDQWJKLEFBaUJBLEdBMUJELEVBbUJaLEdBZlksSUFNSyxBQWlCQSxFQTFCakIsQ0FzQkEsQUE4QkMsR0FIQSxDQTdDbUIsU0FNQSxBQWlCQSxVQXRCcEIsU0FNVSxBQXdCUixTQXZCUyxVQUNYLG1IQTRCRSwyRUFDeUIsMEJBQ2dDLDBEQUNSLDBJQUNuRCIsImZpbGUiOiIvVXNlcnMvc3RhbmlzbGF2b2hzdGFueS9XZWJBcHBzL0RFVi9jb3JvbmFtYXAvc3JjL1RlbXBsYXRlcy9Ta2VsZXRvbi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBTa2VsZXRvbjEgPSAoKSA9PiAoXG5cdDw+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJhbnQtc2tlbGV0b25cIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYW50LXNrZWxldG9uLWNvbnRlbnRcIj5cblx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cImFudC1za2VsZXRvbi10aXRsZVwiIHN0eWxlPVwid2lkdGg6IDM4JTtcIj48L2gzPlxuXHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiYW50LXNrZWxldG9uLXBhcmFncmFwaFwiPlxuXHRcdFx0XHRcdDxsaT48L2xpPlxuXHRcdFx0XHRcdDxsaT48L2xpPlxuXHRcdFx0XHRcdDxsaSBzdHlsZT1cIndpZHRoOiA2MSU7XCI+PC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdC5hbnQtc2tlbGV0b24ge1xuXHRcdFx0XHRkaXNwbGF5OiB0YWJsZTtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHR9XG5cdFx0XHQuYW50LXNrZWxldG9uLWNvbnRlbnQge1xuXHRcdFx0XHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0dmVydGljYWwtYWxpZ246IHRvcDtcblx0XHRcdH1cblx0XHRcdC5hbnQtc2tlbGV0b24tY29udGVudCAuYW50LXNrZWxldG9uLXRpdGxlIHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGhlaWdodDogMTZweDtcblx0XHRcdFx0bWFyZ2luLXRvcDogMTZweDtcblx0XHRcdFx0YmFja2dyb3VuZDogI2YyZjJmMjtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0fVxuXHRcdFx0LmFudC1za2VsZXRvbi1jb250ZW50XG5cdFx0XHRcdC5hbnQtc2tlbGV0b24tdGl0bGVcblx0XHRcdFx0KyAuYW50LXNrZWxldG9uLXBhcmFncmFwaCB7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDI0cHg7XG5cdFx0XHR9XG5cdFx0XHQuYW50LXNrZWxldG9uLWNvbnRlbnQgLmFudC1za2VsZXRvbi1wYXJhZ3JhcGgge1xuXHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdFx0fVxuXHRcdFx0LmFudC1za2VsZXRvbi1jb250ZW50IC5hbnQtc2tlbGV0b24tcGFyYWdyYXBoID4gbGkge1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0aGVpZ2h0OiAxNnB4O1xuXHRcdFx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KFxuXHRcdFx0XHRcdGxpbmVhcixcblx0XHRcdFx0XHRsZWZ0IHRvcCxcblx0XHRcdFx0XHRyaWdodCB0b3AsXG5cdFx0XHRcdFx0Y29sb3Itc3RvcCgyNSUsICNmMmYyZjIpLFxuXHRcdFx0XHRcdGNvbG9yLXN0b3AoMzclLCAjZTZlNmU2KSxcblx0XHRcdFx0XHRjb2xvci1zdG9wKDYzJSwgI2YyZjJmMilcblx0XHRcdFx0KTtcblx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuXHRcdFx0XHRcdDkwZGVnLFxuXHRcdFx0XHRcdCNmMmYyZjIgMjUlLFxuXHRcdFx0XHRcdCNlNmU2ZTYgMzclLFxuXHRcdFx0XHRcdCNmMmYyZjIgNjMlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogNDAwJSAxMDAlO1xuXHRcdFx0XHQtd2Via2l0LWFuaW1hdGlvbjogYW50LXNrZWxldG9uLWxvYWRpbmcgMS40cyBlYXNlIGluZmluaXRlO1xuXHRcdFx0XHRhbmltYXRpb246IGFudC1za2VsZXRvbi1sb2FkaW5nIDEuNHMgZWFzZSBpbmZpbml0ZTtcblx0XHRcdH1cblx0XHRcdEBrZXlmcmFtZXMgYW50LXNrZWxldG9uLWxvYWRpbmcge1xuXHRcdFx0XHQwJSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XG5cdFx0XHRcdH1cblx0XHRcdFx0MTAwJSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMCA1MCU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRgfTwvc3R5bGU+XG5cdDwvPlxuKTtcbiJdfQ== */\n/*@ sourceURL=/Users/stanislavohstany/WebApps/DEV/coronamap/src/Templates/Skeleton/index.js */"));
};

exports.Skeleton1 = Skeleton1;

/***/ })

})
//# sourceMappingURL=index.js.2f7cc1993e1908328e75.hot-update.js.map