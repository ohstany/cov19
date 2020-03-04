webpackHotUpdate("static/development/pages/index.js",{

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

      console.log("news", news);
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
        lineNumber: 84
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
        lineNumber: 85
      },
      __self: this
    }, news ? a.title : "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C #".concat(a.id)), __jsx("div", {
      className: "desc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, a.content), a.source && a.source.length && __jsx("div", {
      className: "source",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, a.source.map(function (s, sx) {
      return __jsx(RenderSource, {
        key: sx,
        s: s,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
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
        lineNumber: 107
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
        lineNumber: 123
      },
      __self: this
    }, s.indexOf("youtube") >= 0 && s.indexOf("iframe") >= 0 ? __jsx("div", {
      dangerouslySetInnerHTML: {
        __html: s
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }) : __jsx("a", {
      href: s,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, s));
  }, []);
  return __jsx("div", {
    className: "block activityArea " + nav,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, [{
    id: "local",
    title: __jsx(Pin, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
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
        lineNumber: 152
      },
      __self: this
    }, m.title);
  }))), __jsx("div", {
    className: "activity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx("div", {
    className: "bb b1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, markers.length ? markers.map(function (a, ax) {
    return __jsx(SingleItem, {
      nav: nav,
      key: ax,
      a: a,
      ax: ax,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    });
  }) : __jsx(_Skeleton.Skeleton1, {
    row: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  })), __jsx("div", {
    className: "bb b2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, __jsx(SingleItem, {
    nav: nav,
    a: active,
    ax: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }), active && __jsx("div", {
    className: "comments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 (", comments.length || 0, ")"), comments ? comments.map(function (c, cx) {
    return __jsx("div", {
      className: "cm author",
      key: cx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, __jsx("div", {
      className: "chead",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, c.user), c.date ? __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, " - " + c.date) : ""), __jsx("div", {
      className: "cbody",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, c.content));
  }) : "Пока нет коментариев, напишите первым")), __jsx("div", {
    className: "bb b3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, news.length ? news.map(function (a, ax) {
    return __jsx(News, {
      key: ax,
      data: a,
      ax: ax,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    });
  }) : __jsx(_Skeleton.Skeleton1, {
    row: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }))));
};

exports.default = _default;

/***/ })

})
//# sourceMappingURL=index.js.4b8ed4ec5a826fab4e34.hot-update.js.map