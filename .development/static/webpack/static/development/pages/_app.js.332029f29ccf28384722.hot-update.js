webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/Context/reducers/index.js":
/*!***************************************!*\
  !*** ./src/Context/reducers/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty2 = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.root_store_initial_state = exports.root_store_reducer = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _defineProperties = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js"));

var _getOwnPropertyDescriptors = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js"));

var _getOwnPropertyDescriptor = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js"));

var _getOwnPropertySymbols = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js"));

var _keys = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js"));

var _defineProperty3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _Library = __webpack_require__(/*! ../../Library */ "./src/Library/index.js");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { ownKeys(Object(source)).forEach(function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

/**
 * STORE REDUCER (separate component data, categories, coures etc.)
 * PARAMS: s - store, a - data object (action, data and so on)
 */
var root_store_reducer = function root_store_reducer(s, a) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var _ref = a || {},
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      reduce = _ref.reduce;

  switch (reduce) {
    case "UPDATE_OPTION":
      {
        var options = s.options;
        var _params$data = params.data,
            key = _params$data.key,
            value = _params$data.value;
        if (!key) return {};
        options[key] = value || {};
        return {
          options: options
        };
      }

    case "DEFAULT":
      {
        return {};
      }

    default:
      {
        return data.single && data.set ? (0, _defineProperty3.default)({}, data.single, _objectSpread({}, s[data.single], {}, data.set)) : {};
      }
  }
};
/**
 * INITIAL default values of application store
 */


exports.root_store_reducer = root_store_reducer;
var root_store_initial_state = {
  geo: false,
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

/***/ })

})
//# sourceMappingURL=_app.js.332029f29ccf28384722.hot-update.js.map