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

var _GoogleMaps = _interopRequireDefault(__webpack_require__(/*! ../src/Templates/GoogleMaps */ "./src/Templates/GoogleMaps/index.js"));

var _Subscribe = _interopRequireDefault(__webpack_require__(/*! ../src/Templates/Subscribe */ "./src/Templates/Subscribe/index.js"));

var _MakeMark = _interopRequireDefault(__webpack_require__(/*! ../src/Templates/MakeMark */ "./src/Templates/MakeMark/index.js"));

var _ActivityArea = _interopRequireDefault(__webpack_require__(/*! ../src/Templates/ActivityArea */ "./src/Templates/ActivityArea/index.js"));

var _Socials = _interopRequireDefault(__webpack_require__(/*! ../src/Templates/Socials */ "./src/Templates/Socials/index.js"));

__webpack_require__(/*! ../src/global.scss */ "./src/global.scss");

var _jsxFileName = "/Users/stanislavohstany/WebApps/DEV/cov19/pages/index.js";

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
  } = (0, _react.useState)(false); // const getLocationViaLat = () => {
  // 	const { lat = false, lng = false } =
  // 		(localStorage.getItem("position") &&
  // 			JSON.parse(localStorage.getItem("position"))) ||
  // 		{};
  // 	const lReq = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyA4zKpi3hRchkPewoFrU0h_V4a2ykGrohk`;
  // 	if (lat && lng) {
  // 		fetch(lReq)
  // 			.then(blob => blob.json())
  // 			.then(res => {
  // 				if (res && res.results && res.results[0]) {
  // 					localStorage.setItem(
  // 						"positionDatail",
  // 						JSON.stringify(res.results[0])
  // 					);
  // 				}
  // 				console.log("rrrr", res, res.results[0]);
  // 			});
  // 	} else {
  // 		console.log("not set");
  // 	}
  // };
  // useEffect(() => {
  // 	if (navigator.geolocation) {
  // 		const { lat = false, lng = false } =
  // 			(localStorage.getItem("position") &&
  // 				JSON.parse(localStorage.getItem("position"))) ||
  // 			{};
  // 		if (lat && lng) {
  // 			_setLocation(true);
  // 			// getLocationViaLat();
  // 		} else {
  // 			navigator.geolocation.getCurrentPosition(position => {
  // 				localStorage.setItem(
  // 					"position",
  // 					JSON.stringify({
  // 						lat: position.coords.latitude,
  // 						lng: position.coords.longitude
  // 					})
  // 				);
  // 				if (position.coords.latitudeg >= 0) {
  // 					_setLocation(true);
  // 				}
  // 			});
  // 		}
  // 	}
  // }, []);

  return __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: void 0
  }, __jsx("section", {
    className: "mapArea",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: void 0
  }, __jsx(_GoogleMaps.default, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: void 0
  }))), __jsx("section", {
    className: "mainBlock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: void 0
  }, __jsx(_Socials.default, _extends({}, props, siteMeta, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: void 0
  })), __jsx(_MakeMark.default, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: void 0
  })), __jsx(_ActivityArea.default, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: void 0
  })), __jsx(_Subscribe.default, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: void 0
  }))));
};

var _default = Home;
exports.default = _default;

/***/ }),

/***/ "./src/Library/countries.json":
/*!************************************!*\
  !*** ./src/Library/countries.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"timezones\":[\"America/Aruba\"],\"latlng\":[12.5,-69.96666666],\"name\":\"Aruba\",\"country_code\":\"AW\",\"capital\":\"Oranjestad\"},{\"timezones\":[\"Asia/Kabul\"],\"latlng\":[33,65],\"name\":\"Afghanistan\",\"country_code\":\"AF\",\"capital\":\"Kabul\"},{\"timezones\":[\"Africa/Luanda\"],\"latlng\":[-12.5,18.5],\"name\":\"Angola\",\"country_code\":\"AO\",\"capital\":\"Luanda\"},{\"timezones\":[\"America/Anguilla\"],\"latlng\":[18.25,-63.16666666],\"name\":\"Anguilla\",\"country_code\":\"AI\",\"capital\":\"The Valley\"},{\"timezones\":[\"Europe/Mariehamn\"],\"latlng\":[60.116667,19.9],\"name\":\"Åland Islands\",\"country_code\":\"AX\",\"capital\":\"Mariehamn\"},{\"timezones\":[\"Europe/Tirane\"],\"latlng\":[41,20],\"name\":\"Albania\",\"country_code\":\"AL\",\"capital\":\"Tirana\"},{\"timezones\":[\"Europe/Andorra\"],\"latlng\":[42.5,1.5],\"name\":\"Andorra\",\"country_code\":\"AD\",\"capital\":\"Andorra la Vella\"},{\"timezones\":[\"Asia/Dubai\"],\"latlng\":[24,54],\"name\":\"United Arab Emirates\",\"country_code\":\"AE\",\"capital\":\"Abu Dhabi\"},{\"timezones\":[\"America/Argentina/Buenos_Aires\",\"America/Argentina/Cordoba\",\"America/Argentina/Salta\",\"America/Argentina/Jujuy\",\"America/Argentina/Tucuman\",\"America/Argentina/Catamarca\",\"America/Argentina/La_Rioja\",\"America/Argentina/San_Juan\",\"America/Argentina/Mendoza\",\"America/Argentina/San_Luis\",\"America/Argentina/Rio_Gallegos\",\"America/Argentina/Ushuaia\"],\"latlng\":[-34,-64],\"name\":\"Argentina\",\"country_code\":\"AR\",\"capital\":\"Buenos Aires\"},{\"timezones\":[\"Asia/Yerevan\"],\"latlng\":[40,45],\"name\":\"Armenia\",\"country_code\":\"AM\",\"capital\":\"Yerevan\"},{\"timezones\":[\"Pacific/Pago_Pago\"],\"latlng\":[-14.33333333,-170],\"name\":\"American Samoa\",\"country_code\":\"AS\",\"capital\":\"Pago Pago\"},{\"timezones\":[\"Antarctica/McMurdo\",\"Antarctica/Casey\",\"Antarctica/Davis\",\"Antarctica/DumontDUrville\",\"Antarctica/Mawson\",\"Antarctica/Palmer\",\"Antarctica/Rothera\",\"Antarctica/Syowa\",\"Antarctica/Troll\",\"Antarctica/Vostok\"],\"latlng\":[-90,0],\"name\":\"Antarctica\",\"country_code\":\"AQ\",\"capital\":null},{\"timezones\":[\"Indian/Kerguelen\"],\"latlng\":[-49.25,69.167],\"name\":\"French Southern and Antarctic Lands\",\"country_code\":\"TF\",\"capital\":\"Port-aux-Français\"},{\"timezones\":[\"America/Antigua\"],\"latlng\":[17.05,-61.8],\"name\":\"Antigua and Barbuda\",\"country_code\":\"AG\",\"capital\":\"Saint John's\"},{\"timezones\":[\"Australia/Lord_Howe\",\"Antarctica/Macquarie\",\"Australia/Hobart\",\"Australia/Currie\",\"Australia/Melbourne\",\"Australia/Sydney\",\"Australia/Broken_Hill\",\"Australia/Brisbane\",\"Australia/Lindeman\",\"Australia/Adelaide\",\"Australia/Darwin\",\"Australia/Perth\",\"Australia/Eucla\"],\"latlng\":[-27,133],\"name\":\"Australia\",\"country_code\":\"AU\",\"capital\":\"Canberra\"},{\"timezones\":[\"Europe/Vienna\"],\"latlng\":[47.33333333,13.33333333],\"name\":\"Austria\",\"country_code\":\"AT\",\"capital\":\"Vienna\"},{\"timezones\":[\"Asia/Baku\"],\"latlng\":[40.5,47.5],\"name\":\"Azerbaijan\",\"country_code\":\"AZ\",\"capital\":\"Baku\"},{\"timezones\":[\"Africa/Bujumbura\"],\"latlng\":[-3.5,30],\"name\":\"Burundi\",\"country_code\":\"BI\",\"capital\":\"Bujumbura\"},{\"timezones\":[\"Europe/Brussels\"],\"latlng\":[50.83333333,4],\"name\":\"Belgium\",\"country_code\":\"BE\",\"capital\":\"Brussels\"},{\"timezones\":[\"Africa/Porto-Novo\"],\"latlng\":[9.5,2.25],\"name\":\"Benin\",\"country_code\":\"BJ\",\"capital\":\"Porto-Novo\"},{\"timezones\":[\"Africa/Ouagadougou\"],\"latlng\":[13,-2],\"name\":\"Burkina Faso\",\"country_code\":\"BF\",\"capital\":\"Ouagadougou\"},{\"timezones\":[\"Asia/Dhaka\"],\"latlng\":[24,90],\"name\":\"Bangladesh\",\"country_code\":\"BD\",\"capital\":\"Dhaka\"},{\"timezones\":[\"Europe/Sofia\"],\"latlng\":[43,25],\"name\":\"Bulgaria\",\"country_code\":\"BG\",\"capital\":\"Sofia\"},{\"timezones\":[\"Asia/Bahrain\"],\"latlng\":[26,50.55],\"name\":\"Bahrain\",\"country_code\":\"BH\",\"capital\":\"Manama\"},{\"timezones\":[\"America/Nassau\"],\"latlng\":[24.25,-76],\"name\":\"Bahamas\",\"country_code\":\"BS\",\"capital\":\"Nassau\"},{\"timezones\":[\"Europe/Sarajevo\"],\"latlng\":[44,18],\"name\":\"Bosnia and Herzegovina\",\"country_code\":\"BA\",\"capital\":\"Sarajevo\"},{\"timezones\":[\"America/St_Barthelemy\"],\"latlng\":[18.5,-63.41666666],\"name\":\"Saint Barthélemy\",\"country_code\":\"BL\",\"capital\":\"Gustavia\"},{\"timezones\":[\"Europe/Minsk\"],\"latlng\":[53,28],\"name\":\"Belarus\",\"country_code\":\"BY\",\"capital\":\"Minsk\"},{\"timezones\":[\"America/Belize\"],\"latlng\":[17.25,-88.75],\"name\":\"Belize\",\"country_code\":\"BZ\",\"capital\":\"Belmopan\"},{\"timezones\":[\"Atlantic/Bermuda\"],\"latlng\":[32.33333333,-64.75],\"name\":\"Bermuda\",\"country_code\":\"BM\",\"capital\":\"Hamilton\"},{\"timezones\":[\"America/La_Paz\"],\"latlng\":[-17,-65],\"name\":\"Bolivia\",\"country_code\":\"BO\",\"capital\":\"Sucre\"},{\"timezones\":[\"America/Noronha\",\"America/Belem\",\"America/Fortaleza\",\"America/Recife\",\"America/Araguaina\",\"America/Maceio\",\"America/Bahia\",\"America/Sao_Paulo\",\"America/Campo_Grande\",\"America/Cuiaba\",\"America/Santarem\",\"America/Porto_Velho\",\"America/Boa_Vista\",\"America/Manaus\",\"America/Eirunepe\",\"America/Rio_Branco\"],\"latlng\":[-10,-55],\"name\":\"Brazil\",\"country_code\":\"BR\",\"capital\":\"Brasília\"},{\"timezones\":[\"America/Barbados\"],\"latlng\":[13.16666666,-59.53333333],\"name\":\"Barbados\",\"country_code\":\"BB\",\"capital\":\"Bridgetown\"},{\"timezones\":[\"Asia/Brunei\"],\"latlng\":[4.5,114.66666666],\"name\":\"Brunei\",\"country_code\":\"BN\",\"capital\":\"Bandar Seri Begawan\"},{\"timezones\":[\"Asia/Thimphu\"],\"latlng\":[27.5,90.5],\"name\":\"Bhutan\",\"country_code\":\"BT\",\"capital\":\"Thimphu\"},{\"timezones\":[\"Europe/Oslo\"],\"latlng\":[-54.43333333,3.4],\"name\":\"Bouvet Island\",\"country_code\":\"BV\",\"capital\":null},{\"timezones\":[\"Africa/Gaborone\"],\"latlng\":[-22,24],\"name\":\"Botswana\",\"country_code\":\"BW\",\"capital\":\"Gaborone\"},{\"timezones\":[\"Africa/Bangui\"],\"latlng\":[7,21],\"name\":\"Central African Republic\",\"country_code\":\"CF\",\"capital\":\"Bangui\"},{\"timezones\":[\"America/St_Johns\",\"America/Halifax\",\"America/Glace_Bay\",\"America/Moncton\",\"America/Goose_Bay\",\"America/Blanc-Sablon\",\"America/Toronto\",\"America/Nipigon\",\"America/Thunder_Bay\",\"America/Iqaluit\",\"America/Pangnirtung\",\"America/Atikokan\",\"America/Winnipeg\",\"America/Rainy_River\",\"America/Resolute\",\"America/Rankin_Inlet\",\"America/Regina\",\"America/Swift_Current\",\"America/Edmonton\",\"America/Cambridge_Bay\",\"America/Yellowknife\",\"America/Inuvik\",\"America/Creston\",\"America/Dawson_Creek\",\"America/Fort_Nelson\",\"America/Vancouver\",\"America/Whitehorse\",\"America/Dawson\"],\"latlng\":[60,-95],\"name\":\"Canada\",\"country_code\":\"CA\",\"capital\":\"Ottawa\"},{\"timezones\":[\"Indian/Cocos\"],\"latlng\":[-12.5,96.83333333],\"name\":\"Cocos (Keeling) Islands\",\"country_code\":\"CC\",\"capital\":\"West Island\"},{\"timezones\":[\"Europe/Zurich\"],\"latlng\":[47,8],\"name\":\"Switzerland\",\"country_code\":\"CH\",\"capital\":\"Bern\"},{\"timezones\":[\"America/Santiago\",\"Pacific/Easter\"],\"latlng\":[-30,-71],\"name\":\"Chile\",\"country_code\":\"CL\",\"capital\":\"Santiago\"},{\"timezones\":[\"Asia/Shanghai\",\"Asia/Urumqi\"],\"latlng\":[35,105],\"name\":\"China\",\"country_code\":\"CN\",\"capital\":\"Beijing\"},{\"timezones\":[\"Africa/Abidjan\"],\"latlng\":[8,-5],\"name\":\"Ivory Coast\",\"country_code\":\"CI\",\"capital\":\"Yamoussoukro\"},{\"timezones\":[\"Africa/Douala\"],\"latlng\":[6,12],\"name\":\"Cameroon\",\"country_code\":\"CM\",\"capital\":\"Yaoundé\"},{\"timezones\":[\"Africa/Kinshasa\",\"Africa/Lubumbashi\"],\"latlng\":[0,25],\"name\":\"DR Congo\",\"country_code\":\"CD\",\"capital\":\"Kinshasa\"},{\"timezones\":[\"Africa/Brazzaville\"],\"latlng\":[-1,15],\"name\":\"Republic of the Congo\",\"country_code\":\"CG\",\"capital\":\"Brazzaville\"},{\"timezones\":[\"Pacific/Rarotonga\"],\"latlng\":[-21.23333333,-159.76666666],\"name\":\"Cook Islands\",\"country_code\":\"CK\",\"capital\":\"Avarua\"},{\"timezones\":[\"America/Bogota\"],\"latlng\":[4,-72],\"name\":\"Colombia\",\"country_code\":\"CO\",\"capital\":\"Bogotá\"},{\"timezones\":[\"Indian/Comoro\"],\"latlng\":[-12.16666666,44.25],\"name\":\"Comoros\",\"country_code\":\"KM\",\"capital\":\"Moroni\"},{\"timezones\":[\"Atlantic/Cape_Verde\"],\"latlng\":[16,-24],\"name\":\"Cape Verde\",\"country_code\":\"CV\",\"capital\":\"Praia\"},{\"timezones\":[\"America/Costa_Rica\"],\"latlng\":[10,-84],\"name\":\"Costa Rica\",\"country_code\":\"CR\",\"capital\":\"San José\"},{\"timezones\":[\"America/Havana\"],\"latlng\":[21.5,-80],\"name\":\"Cuba\",\"country_code\":\"CU\",\"capital\":\"Havana\"},{\"timezones\":[\"America/Curacao\"],\"latlng\":[12.116667,-68.933333],\"name\":\"Curaçao\",\"country_code\":\"CW\",\"capital\":\"Willemstad\"},{\"timezones\":[\"Indian/Christmas\"],\"latlng\":[-10.5,105.66666666],\"name\":\"Christmas Island\",\"country_code\":\"CX\",\"capital\":\"Flying Fish Cove\"},{\"timezones\":[\"America/Cayman\"],\"latlng\":[19.5,-80.5],\"name\":\"Cayman Islands\",\"country_code\":\"KY\",\"capital\":\"George Town\"},{\"timezones\":[\"Asia/Nicosia\"],\"latlng\":[35,33],\"name\":\"Cyprus\",\"country_code\":\"CY\",\"capital\":\"Nicosia\"},{\"timezones\":[\"Europe/Prague\"],\"latlng\":[49.75,15.5],\"name\":\"Czech Republic\",\"country_code\":\"CZ\",\"capital\":\"Prague\"},{\"timezones\":[\"Europe/Berlin\",\"Europe/Busingen\"],\"latlng\":[51,9],\"name\":\"Germany\",\"country_code\":\"DE\",\"capital\":\"Berlin\"},{\"timezones\":[\"Africa/Djibouti\"],\"latlng\":[11.5,43],\"name\":\"Djibouti\",\"country_code\":\"DJ\",\"capital\":\"Djibouti\"},{\"timezones\":[\"America/Dominica\"],\"latlng\":[15.41666666,-61.33333333],\"name\":\"Dominica\",\"country_code\":\"DM\",\"capital\":\"Roseau\"},{\"timezones\":[\"Europe/Copenhagen\"],\"latlng\":[56,10],\"name\":\"Denmark\",\"country_code\":\"DK\",\"capital\":\"Copenhagen\"},{\"timezones\":[\"America/Santo_Domingo\"],\"latlng\":[19,-70.66666666],\"name\":\"Dominican Republic\",\"country_code\":\"DO\",\"capital\":\"Santo Domingo\"},{\"timezones\":[\"Africa/Algiers\"],\"latlng\":[28,3],\"name\":\"Algeria\",\"country_code\":\"DZ\",\"capital\":\"Algiers\"},{\"timezones\":[\"America/Guayaquil\",\"Pacific/Galapagos\"],\"latlng\":[-2,-77.5],\"name\":\"Ecuador\",\"country_code\":\"EC\",\"capital\":\"Quito\"},{\"timezones\":[\"Africa/Cairo\"],\"latlng\":[27,30],\"name\":\"Egypt\",\"country_code\":\"EG\",\"capital\":\"Cairo\"},{\"timezones\":[\"Africa/Asmara\"],\"latlng\":[15,39],\"name\":\"Eritrea\",\"country_code\":\"ER\",\"capital\":\"Asmara\"},{\"timezones\":[\"Africa/El_Aaiun\"],\"latlng\":[24.5,-13],\"name\":\"Western Sahara\",\"country_code\":\"EH\",\"capital\":\"El Aaiún\"},{\"timezones\":[\"Europe/Madrid\",\"Africa/Ceuta\",\"Atlantic/Canary\"],\"latlng\":[40,-4],\"name\":\"Spain\",\"country_code\":\"ES\",\"capital\":\"Madrid\"},{\"timezones\":[\"Europe/Tallinn\"],\"latlng\":[59,26],\"name\":\"Estonia\",\"country_code\":\"EE\",\"capital\":\"Tallinn\"},{\"timezones\":[\"Africa/Addis_Ababa\"],\"latlng\":[8,38],\"name\":\"Ethiopia\",\"country_code\":\"ET\",\"capital\":\"Addis Ababa\"},{\"timezones\":[\"Europe/Helsinki\"],\"latlng\":[64,26],\"name\":\"Finland\",\"country_code\":\"FI\",\"capital\":\"Helsinki\"},{\"timezones\":[\"Pacific/Fiji\"],\"latlng\":[-18,175],\"name\":\"Fiji\",\"country_code\":\"FJ\",\"capital\":\"Suva\"},{\"timezones\":[\"Atlantic/Stanley\"],\"latlng\":[-51.75,-59],\"name\":\"Falkland Islands\",\"country_code\":\"FK\",\"capital\":\"Stanley\"},{\"timezones\":[\"Europe/Paris\"],\"latlng\":[46,2],\"name\":\"France\",\"country_code\":\"FR\",\"capital\":\"Paris\"},{\"timezones\":[\"Atlantic/Faroe\"],\"latlng\":[62,-7],\"name\":\"Faroe Islands\",\"country_code\":\"FO\",\"capital\":\"Tórshavn\"},{\"timezones\":[\"Pacific/Chuuk\",\"Pacific/Pohnpei\",\"Pacific/Kosrae\"],\"latlng\":[6.91666666,158.25],\"name\":\"Micronesia\",\"country_code\":\"FM\",\"capital\":\"Palikir\"},{\"timezones\":[\"Africa/Libreville\"],\"latlng\":[-1,11.75],\"name\":\"Gabon\",\"country_code\":\"GA\",\"capital\":\"Libreville\"},{\"timezones\":[\"Europe/London\"],\"latlng\":[54,-2],\"name\":\"United Kingdom\",\"country_code\":\"GB\",\"capital\":\"London\"},{\"timezones\":[\"Asia/Tbilisi\"],\"latlng\":[42,43.5],\"name\":\"Georgia\",\"country_code\":\"GE\",\"capital\":\"Tbilisi\"},{\"timezones\":[\"Europe/Guernsey\"],\"latlng\":[49.46666666,-2.58333333],\"name\":\"Guernsey\",\"country_code\":\"GG\",\"capital\":\"St. Peter Port\"},{\"timezones\":[\"Africa/Accra\"],\"latlng\":[8,-2],\"name\":\"Ghana\",\"country_code\":\"GH\",\"capital\":\"Accra\"},{\"timezones\":[\"Europe/Gibraltar\"],\"latlng\":[36.13333333,-5.35],\"name\":\"Gibraltar\",\"country_code\":\"GI\",\"capital\":\"Gibraltar\"},{\"timezones\":[\"Africa/Conakry\"],\"latlng\":[11,-10],\"name\":\"Guinea\",\"country_code\":\"GN\",\"capital\":\"Conakry\"},{\"timezones\":[\"America/Guadeloupe\"],\"latlng\":[16.25,-61.583333],\"name\":\"Guadeloupe\",\"country_code\":\"GP\",\"capital\":\"Basse-Terre\"},{\"timezones\":[\"Africa/Banjul\"],\"latlng\":[13.46666666,-16.56666666],\"name\":\"Gambia\",\"country_code\":\"GM\",\"capital\":\"Banjul\"},{\"timezones\":[\"Africa/Bissau\"],\"latlng\":[12,-15],\"name\":\"Guinea-Bissau\",\"country_code\":\"GW\",\"capital\":\"Bissau\"},{\"timezones\":[\"Africa/Malabo\"],\"latlng\":[2,10],\"name\":\"Equatorial Guinea\",\"country_code\":\"GQ\",\"capital\":\"Malabo\"},{\"timezones\":[\"Europe/Athens\"],\"latlng\":[39,22],\"name\":\"Greece\",\"country_code\":\"GR\",\"capital\":\"Athens\"},{\"timezones\":[\"America/Grenada\"],\"latlng\":[12.11666666,-61.66666666],\"name\":\"Grenada\",\"country_code\":\"GD\",\"capital\":\"St. George's\"},{\"timezones\":[\"America/Godthab\",\"America/Danmarkshavn\",\"America/Scoresbysund\",\"America/Thule\"],\"latlng\":[72,-40],\"name\":\"Greenland\",\"country_code\":\"GL\",\"capital\":\"Nuuk\"},{\"timezones\":[\"America/Guatemala\"],\"latlng\":[15.5,-90.25],\"name\":\"Guatemala\",\"country_code\":\"GT\",\"capital\":\"Guatemala City\"},{\"timezones\":[\"America/Cayenne\"],\"latlng\":[4,-53],\"name\":\"French Guiana\",\"country_code\":\"GF\",\"capital\":\"Cayenne\"},{\"timezones\":[\"Pacific/Guam\"],\"latlng\":[13.46666666,144.78333333],\"name\":\"Guam\",\"country_code\":\"GU\",\"capital\":\"Hagåtña\"},{\"timezones\":[\"America/Guyana\"],\"latlng\":[5,-59],\"name\":\"Guyana\",\"country_code\":\"GY\",\"capital\":\"Georgetown\"},{\"timezones\":[\"Asia/Hong_Kong\"],\"latlng\":[22.267,114.188],\"name\":\"Hong Kong\",\"country_code\":\"HK\",\"capital\":\"City of Victoria\"},{\"timezones\":[\"America/Tegucigalpa\"],\"latlng\":[15,-86.5],\"name\":\"Honduras\",\"country_code\":\"HN\",\"capital\":\"Tegucigalpa\"},{\"timezones\":[\"Europe/Zagreb\"],\"latlng\":[45.16666666,15.5],\"name\":\"Croatia\",\"country_code\":\"HR\",\"capital\":\"Zagreb\"},{\"timezones\":[\"America/Port-au-Prince\"],\"latlng\":[19,-72.41666666],\"name\":\"Haiti\",\"country_code\":\"HT\",\"capital\":\"Port-au-Prince\"},{\"timezones\":[\"Europe/Budapest\"],\"latlng\":[47,20],\"name\":\"Hungary\",\"country_code\":\"HU\",\"capital\":\"Budapest\"},{\"timezones\":[\"Asia/Jakarta\",\"Asia/Pontianak\",\"Asia/Makassar\",\"Asia/Jayapura\"],\"latlng\":[-5,120],\"name\":\"Indonesia\",\"country_code\":\"ID\",\"capital\":\"Jakarta\"},{\"timezones\":[\"Europe/Isle_of_Man\"],\"latlng\":[54.25,-4.5],\"name\":\"Isle of Man\",\"country_code\":\"IM\",\"capital\":\"Douglas\"},{\"timezones\":[\"Asia/Kolkata\"],\"latlng\":[20,77],\"name\":\"India\",\"country_code\":\"IN\",\"capital\":\"New Delhi\"},{\"timezones\":[\"Indian/Chagos\"],\"latlng\":[-6,71.5],\"name\":\"British Indian Ocean Territory\",\"country_code\":\"IO\",\"capital\":\"Diego Garcia\"},{\"timezones\":[\"Europe/Dublin\"],\"latlng\":[53,-8],\"name\":\"Ireland\",\"country_code\":\"IE\",\"capital\":\"Dublin\"},{\"timezones\":[\"Asia/Tehran\"],\"latlng\":[32,53],\"name\":\"Iran\",\"country_code\":\"IR\",\"capital\":\"Tehran\"},{\"timezones\":[\"Asia/Baghdad\"],\"latlng\":[33,44],\"name\":\"Iraq\",\"country_code\":\"IQ\",\"capital\":\"Baghdad\"},{\"timezones\":[\"Atlantic/Reykjavik\"],\"latlng\":[65,-18],\"name\":\"Iceland\",\"country_code\":\"IS\",\"capital\":\"Reykjavik\"},{\"timezones\":[\"Asia/Jerusalem\"],\"latlng\":[31.47,35.13],\"name\":\"Israel\",\"country_code\":\"IL\",\"capital\":\"Jerusalem\"},{\"timezones\":[\"Europe/Rome\"],\"latlng\":[42.83333333,12.83333333],\"name\":\"Italy\",\"country_code\":\"IT\",\"capital\":\"Rome\"},{\"timezones\":[\"America/Jamaica\"],\"latlng\":[18.25,-77.5],\"name\":\"Jamaica\",\"country_code\":\"JM\",\"capital\":\"Kingston\"},{\"timezones\":[\"Europe/Jersey\"],\"latlng\":[49.25,-2.16666666],\"name\":\"Jersey\",\"country_code\":\"JE\",\"capital\":\"Saint Helier\"},{\"timezones\":[\"Asia/Amman\"],\"latlng\":[31,36],\"name\":\"Jordan\",\"country_code\":\"JO\",\"capital\":\"Amman\"},{\"timezones\":[\"Asia/Tokyo\"],\"latlng\":[36,138],\"name\":\"Japan\",\"country_code\":\"JP\",\"capital\":\"Tokyo\"},{\"timezones\":[\"Asia/Almaty\",\"Asia/Qyzylorda\",\"Asia/Aqtobe\",\"Asia/Aqtau\",\"Asia/Oral\"],\"latlng\":[48,68],\"name\":\"Kazakhstan\",\"country_code\":\"KZ\",\"capital\":\"Astana\"},{\"timezones\":[\"Africa/Nairobi\"],\"latlng\":[1,38],\"name\":\"Kenya\",\"country_code\":\"KE\",\"capital\":\"Nairobi\"},{\"timezones\":[\"Asia/Bishkek\"],\"latlng\":[41,75],\"name\":\"Kyrgyzstan\",\"country_code\":\"KG\",\"capital\":\"Bishkek\"},{\"timezones\":[\"Asia/Phnom_Penh\"],\"latlng\":[13,105],\"name\":\"Cambodia\",\"country_code\":\"KH\",\"capital\":\"Phnom Penh\"},{\"timezones\":[\"Pacific/Tarawa\",\"Pacific/Enderbury\",\"Pacific/Kiritimati\"],\"latlng\":[1.41666666,173],\"name\":\"Kiribati\",\"country_code\":\"KI\",\"capital\":\"South Tarawa\"},{\"timezones\":[\"America/St_Kitts\"],\"latlng\":[17.33333333,-62.75],\"name\":\"Saint Kitts and Nevis\",\"country_code\":\"KN\",\"capital\":\"Basseterre\"},{\"timezones\":[\"Asia/Seoul\"],\"latlng\":[37,127.5],\"name\":\"South Korea\",\"country_code\":\"KR\",\"capital\":\"Seoul\"},{\"timezones\":[\"Europe/Belgrade\"],\"latlng\":[42.666667,21.166667],\"name\":\"Kosovo\",\"country_code\":\"XK\",\"capital\":\"Pristina\"},{\"timezones\":[\"Asia/Kuwait\"],\"latlng\":[29.5,45.75],\"name\":\"Kuwait\",\"country_code\":\"KW\",\"capital\":\"Kuwait City\"},{\"timezones\":[\"Asia/Vientiane\"],\"latlng\":[18,105],\"name\":\"Laos\",\"country_code\":\"LA\",\"capital\":\"Vientiane\"},{\"timezones\":[\"Asia/Beirut\"],\"latlng\":[33.83333333,35.83333333],\"name\":\"Lebanon\",\"country_code\":\"LB\",\"capital\":\"Beirut\"},{\"timezones\":[\"Africa/Monrovia\"],\"latlng\":[6.5,-9.5],\"name\":\"Liberia\",\"country_code\":\"LR\",\"capital\":\"Monrovia\"},{\"timezones\":[\"Africa/Tripoli\"],\"latlng\":[25,17],\"name\":\"Libya\",\"country_code\":\"LY\",\"capital\":\"Tripoli\"},{\"timezones\":[\"America/St_Lucia\"],\"latlng\":[13.88333333,-60.96666666],\"name\":\"Saint Lucia\",\"country_code\":\"LC\",\"capital\":\"Castries\"},{\"timezones\":[\"Europe/Vaduz\"],\"latlng\":[47.26666666,9.53333333],\"name\":\"Liechtenstein\",\"country_code\":\"LI\",\"capital\":\"Vaduz\"},{\"timezones\":[\"Asia/Colombo\"],\"latlng\":[7,81],\"name\":\"Sri Lanka\",\"country_code\":\"LK\",\"capital\":\"Colombo\"},{\"timezones\":[\"Africa/Maseru\"],\"latlng\":[-29.5,28.5],\"name\":\"Lesotho\",\"country_code\":\"LS\",\"capital\":\"Maseru\"},{\"timezones\":[\"Europe/Vilnius\"],\"latlng\":[56,24],\"name\":\"Lithuania\",\"country_code\":\"LT\",\"capital\":\"Vilnius\"},{\"timezones\":[\"Europe/Luxembourg\"],\"latlng\":[49.75,6.16666666],\"name\":\"Luxembourg\",\"country_code\":\"LU\",\"capital\":\"Luxembourg\"},{\"timezones\":[\"Europe/Riga\"],\"latlng\":[57,25],\"name\":\"Latvia\",\"country_code\":\"LV\",\"capital\":\"Riga\"},{\"timezones\":[\"Asia/Macau\"],\"latlng\":[22.16666666,113.55],\"name\":\"Macau\",\"country_code\":\"MO\",\"capital\":null},{\"timezones\":[\"America/Marigot\"],\"latlng\":[18.08333333,-63.95],\"name\":\"Saint Martin\",\"country_code\":\"MF\",\"capital\":\"Marigot\"},{\"timezones\":[\"Africa/Casablanca\"],\"latlng\":[32,-5],\"name\":\"Morocco\",\"country_code\":\"MA\",\"capital\":\"Rabat\"},{\"timezones\":[\"Europe/Monaco\"],\"latlng\":[43.73333333,7.4],\"name\":\"Monaco\",\"country_code\":\"MC\",\"capital\":\"Monaco\"},{\"timezones\":[\"Europe/Chisinau\"],\"latlng\":[47,29],\"name\":\"Moldova\",\"country_code\":\"MD\",\"capital\":\"Chișinău\"},{\"timezones\":[\"Indian/Antananarivo\"],\"latlng\":[-20,47],\"name\":\"Madagascar\",\"country_code\":\"MG\",\"capital\":\"Antananarivo\"},{\"timezones\":[\"Indian/Maldives\"],\"latlng\":[3.25,73],\"name\":\"Maldives\",\"country_code\":\"MV\",\"capital\":\"Malé\"},{\"timezones\":[\"America/Mexico_City\",\"America/Cancun\",\"America/Merida\",\"America/Monterrey\",\"America/Matamoros\",\"America/Mazatlan\",\"America/Chihuahua\",\"America/Ojinaga\",\"America/Hermosillo\",\"America/Tijuana\",\"America/Bahia_Banderas\"],\"latlng\":[23,-102],\"name\":\"Mexico\",\"country_code\":\"MX\",\"capital\":\"Mexico City\"},{\"timezones\":[\"Pacific/Majuro\",\"Pacific/Kwajalein\"],\"latlng\":[9,168],\"name\":\"Marshall Islands\",\"country_code\":\"MH\",\"capital\":\"Majuro\"},{\"timezones\":[\"Europe/Skopje\"],\"latlng\":[41.83333333,22],\"name\":\"Macedonia\",\"country_code\":\"MK\",\"capital\":\"Skopje\"},{\"timezones\":[\"Africa/Bamako\"],\"latlng\":[17,-4],\"name\":\"Mali\",\"country_code\":\"ML\",\"capital\":\"Bamako\"},{\"timezones\":[\"Europe/Malta\"],\"latlng\":[35.83333333,14.58333333],\"name\":\"Malta\",\"country_code\":\"MT\",\"capital\":\"Valletta\"},{\"timezones\":[\"Asia/Rangoon\"],\"latlng\":[22,98],\"name\":\"Myanmar\",\"country_code\":\"MM\",\"capital\":\"Naypyidaw\"},{\"timezones\":[\"Europe/Podgorica\"],\"latlng\":[42.5,19.3],\"name\":\"Montenegro\",\"country_code\":\"ME\",\"capital\":\"Podgorica\"},{\"timezones\":[\"Asia/Ulaanbaatar\",\"Asia/Hovd\",\"Asia/Choibalsan\"],\"latlng\":[46,105],\"name\":\"Mongolia\",\"country_code\":\"MN\",\"capital\":\"Ulan Bator\"},{\"timezones\":[\"Pacific/Saipan\"],\"latlng\":[15.2,145.75],\"name\":\"Northern Mariana Islands\",\"country_code\":\"MP\",\"capital\":\"Saipan\"},{\"timezones\":[\"Africa/Maputo\"],\"latlng\":[-18.25,35],\"name\":\"Mozambique\",\"country_code\":\"MZ\",\"capital\":\"Maputo\"},{\"timezones\":[\"Africa/Nouakchott\"],\"latlng\":[20,-12],\"name\":\"Mauritania\",\"country_code\":\"MR\",\"capital\":\"Nouakchott\"},{\"timezones\":[\"America/Montserrat\"],\"latlng\":[16.75,-62.2],\"name\":\"Montserrat\",\"country_code\":\"MS\",\"capital\":\"Plymouth\"},{\"timezones\":[\"America/Martinique\"],\"latlng\":[14.666667,-61],\"name\":\"Martinique\",\"country_code\":\"MQ\",\"capital\":\"Fort-de-France\"},{\"timezones\":[\"Indian/Mauritius\"],\"latlng\":[-20.28333333,57.55],\"name\":\"Mauritius\",\"country_code\":\"MU\",\"capital\":\"Port Louis\"},{\"timezones\":[\"Africa/Blantyre\"],\"latlng\":[-13.5,34],\"name\":\"Malawi\",\"country_code\":\"MW\",\"capital\":\"Lilongwe\"},{\"timezones\":[\"Asia/Kuala_Lumpur\",\"Asia/Kuching\"],\"latlng\":[2.5,112.5],\"name\":\"Malaysia\",\"country_code\":\"MY\",\"capital\":\"Kuala Lumpur\"},{\"timezones\":[\"Indian/Mayotte\"],\"latlng\":[-12.83333333,45.16666666],\"name\":\"Mayotte\",\"country_code\":\"YT\",\"capital\":\"Mamoudzou\"},{\"timezones\":[\"Africa/Windhoek\"],\"latlng\":[-22,17],\"name\":\"Namibia\",\"country_code\":\"NA\",\"capital\":\"Windhoek\"},{\"timezones\":[\"Pacific/Noumea\"],\"latlng\":[-21.5,165.5],\"name\":\"New Caledonia\",\"country_code\":\"NC\",\"capital\":\"Nouméa\"},{\"timezones\":[\"Africa/Niamey\"],\"latlng\":[16,8],\"name\":\"Niger\",\"country_code\":\"NE\",\"capital\":\"Niamey\"},{\"timezones\":[\"Pacific/Norfolk\"],\"latlng\":[-29.03333333,167.95],\"name\":\"Norfolk Island\",\"country_code\":\"NF\",\"capital\":\"Kingston\"},{\"timezones\":[\"Africa/Lagos\"],\"latlng\":[10,8],\"name\":\"Nigeria\",\"country_code\":\"NG\",\"capital\":\"Abuja\"},{\"timezones\":[\"America/Managua\"],\"latlng\":[13,-85],\"name\":\"Nicaragua\",\"country_code\":\"NI\",\"capital\":\"Managua\"},{\"timezones\":[\"Pacific/Niue\"],\"latlng\":[-19.03333333,-169.86666666],\"name\":\"Niue\",\"country_code\":\"NU\",\"capital\":\"Alofi\"},{\"timezones\":[\"Europe/Amsterdam\"],\"latlng\":[52.5,5.75],\"name\":\"Netherlands\",\"country_code\":\"NL\",\"capital\":\"Amsterdam\"},{\"timezones\":[\"Europe/Oslo\"],\"latlng\":[62,10],\"name\":\"Norway\",\"country_code\":\"NO\",\"capital\":\"Oslo\"},{\"timezones\":[\"Asia/Kathmandu\"],\"latlng\":[28,84],\"name\":\"Nepal\",\"country_code\":\"NP\",\"capital\":\"Kathmandu\"},{\"timezones\":[\"Pacific/Nauru\"],\"latlng\":[-0.53333333,166.91666666],\"name\":\"Nauru\",\"country_code\":\"NR\",\"capital\":\"Yaren\"},{\"timezones\":[\"Pacific/Auckland\",\"Pacific/Chatham\"],\"latlng\":[-41,174],\"name\":\"New Zealand\",\"country_code\":\"NZ\",\"capital\":\"Wellington\"},{\"timezones\":[\"Asia/Muscat\"],\"latlng\":[21,57],\"name\":\"Oman\",\"country_code\":\"OM\",\"capital\":\"Muscat\"},{\"timezones\":[\"Asia/Karachi\"],\"latlng\":[30,70],\"name\":\"Pakistan\",\"country_code\":\"PK\",\"capital\":\"Islamabad\"},{\"timezones\":[\"America/Panama\"],\"latlng\":[9,-80],\"name\":\"Panama\",\"country_code\":\"PA\",\"capital\":\"Panama City\"},{\"timezones\":[\"Pacific/Pitcairn\"],\"latlng\":[-25.06666666,-130.1],\"name\":\"Pitcairn Islands\",\"country_code\":\"PN\",\"capital\":\"Adamstown\"},{\"timezones\":[\"America/Lima\"],\"latlng\":[-10,-76],\"name\":\"Peru\",\"country_code\":\"PE\",\"capital\":\"Lima\"},{\"timezones\":[\"Asia/Manila\"],\"latlng\":[13,122],\"name\":\"Philippines\",\"country_code\":\"PH\",\"capital\":\"Manila\"},{\"timezones\":[\"Pacific/Palau\"],\"latlng\":[7.5,134.5],\"name\":\"Palau\",\"country_code\":\"PW\",\"capital\":\"Ngerulmud\"},{\"timezones\":[\"Pacific/Port_Moresby\",\"Pacific/Bougainville\"],\"latlng\":[-6,147],\"name\":\"Papua New Guinea\",\"country_code\":\"PG\",\"capital\":\"Port Moresby\"},{\"timezones\":[\"Europe/Warsaw\"],\"latlng\":[52,20],\"name\":\"Poland\",\"country_code\":\"PL\",\"capital\":\"Warsaw\"},{\"timezones\":[\"America/Puerto_Rico\"],\"latlng\":[18.25,-66.5],\"name\":\"Puerto Rico\",\"country_code\":\"PR\",\"capital\":\"San Juan\"},{\"timezones\":[\"Asia/Pyongyang\"],\"latlng\":[40,127],\"name\":\"North Korea\",\"country_code\":\"KP\",\"capital\":\"Pyongyang\"},{\"timezones\":[\"Europe/Lisbon\",\"Atlantic/Madeira\",\"Atlantic/Azores\"],\"latlng\":[39.5,-8],\"name\":\"Portugal\",\"country_code\":\"PT\",\"capital\":\"Lisbon\"},{\"timezones\":[\"America/Asuncion\"],\"latlng\":[-23,-58],\"name\":\"Paraguay\",\"country_code\":\"PY\",\"capital\":\"Asunción\"},{\"timezones\":[\"Asia/Gaza\",\"Asia/Hebron\"],\"latlng\":[31.9,35.2],\"name\":\"Palestine\",\"country_code\":\"PS\",\"capital\":\"Ramallah\"},{\"timezones\":[\"Pacific/Tahiti\",\"Pacific/Marquesas\",\"Pacific/Gambier\"],\"latlng\":[-15,-140],\"name\":\"French Polynesia\",\"country_code\":\"PF\",\"capital\":\"Papeetē\"},{\"timezones\":[\"Asia/Qatar\"],\"latlng\":[25.5,51.25],\"name\":\"Qatar\",\"country_code\":\"QA\",\"capital\":\"Doha\"},{\"timezones\":[\"Indian/Reunion\"],\"latlng\":[-21.15,55.5],\"name\":\"Réunion\",\"country_code\":\"RE\",\"capital\":\"Saint-Denis\"},{\"timezones\":[\"Europe/Bucharest\"],\"latlng\":[46,25],\"name\":\"Romania\",\"country_code\":\"RO\",\"capital\":\"Bucharest\"},{\"timezones\":[\"Europe/Kaliningrad\",\"Europe/Moscow\",\"Europe/Simferopol\",\"Europe/Volgograd\",\"Europe/Kirov\",\"Europe/Astrakhan\",\"Europe/Samara\",\"Europe/Ulyanovsk\",\"Asia/Yekaterinburg\",\"Asia/Omsk\",\"Asia/Novosibirsk\",\"Asia/Barnaul\",\"Asia/Tomsk\",\"Asia/Novokuznetsk\",\"Asia/Krasnoyarsk\",\"Asia/Irkutsk\",\"Asia/Chita\",\"Asia/Yakutsk\",\"Asia/Khandyga\",\"Asia/Vladivostok\",\"Asia/Ust-Nera\",\"Asia/Magadan\",\"Asia/Sakhalin\",\"Asia/Srednekolymsk\",\"Asia/Kamchatka\",\"Asia/Anadyr\"],\"latlng\":[60,100],\"name\":\"Russia\",\"country_code\":\"RU\",\"capital\":\"Moscow\"},{\"timezones\":[\"Africa/Kigali\"],\"latlng\":[-2,30],\"name\":\"Rwanda\",\"country_code\":\"RW\",\"capital\":\"Kigali\"},{\"timezones\":[\"Asia/Riyadh\"],\"latlng\":[25,45],\"name\":\"Saudi Arabia\",\"country_code\":\"SA\",\"capital\":\"Riyadh\"},{\"timezones\":[\"Africa/Khartoum\"],\"latlng\":[15,30],\"name\":\"Sudan\",\"country_code\":\"SD\",\"capital\":\"Khartoum\"},{\"timezones\":[\"Africa/Dakar\"],\"latlng\":[14,-14],\"name\":\"Senegal\",\"country_code\":\"SN\",\"capital\":\"Dakar\"},{\"timezones\":[\"Asia/Singapore\"],\"latlng\":[1.36666666,103.8],\"name\":\"Singapore\",\"country_code\":\"SG\",\"capital\":\"Singapore\"},{\"timezones\":[\"Atlantic/South_Georgia\"],\"latlng\":[-54.5,-37],\"name\":\"South Georgia\",\"country_code\":\"GS\",\"capital\":\"King Edward Point\"},{\"timezones\":[\"Arctic/Longyearbyen\"],\"latlng\":[78,20],\"name\":\"Svalbard and Jan Mayen\",\"country_code\":\"SJ\",\"capital\":\"Longyearbyen\"},{\"timezones\":[\"Pacific/Guadalcanal\"],\"latlng\":[-8,159],\"name\":\"Solomon Islands\",\"country_code\":\"SB\",\"capital\":\"Honiara\"},{\"timezones\":[\"Africa/Freetown\"],\"latlng\":[8.5,-11.5],\"name\":\"Sierra Leone\",\"country_code\":\"SL\",\"capital\":\"Freetown\"},{\"timezones\":[\"America/El_Salvador\"],\"latlng\":[13.83333333,-88.91666666],\"name\":\"El Salvador\",\"country_code\":\"SV\",\"capital\":\"San Salvador\"},{\"timezones\":[\"Europe/San_Marino\"],\"latlng\":[43.76666666,12.41666666],\"name\":\"San Marino\",\"country_code\":\"SM\",\"capital\":\"City of San Marino\"},{\"timezones\":[\"Africa/Mogadishu\"],\"latlng\":[10,49],\"name\":\"Somalia\",\"country_code\":\"SO\",\"capital\":\"Mogadishu\"},{\"timezones\":[\"America/Miquelon\"],\"latlng\":[46.83333333,-56.33333333],\"name\":\"Saint Pierre and Miquelon\",\"country_code\":\"PM\",\"capital\":\"Saint-Pierre\"},{\"timezones\":[\"Europe/Belgrade\"],\"latlng\":[44,21],\"name\":\"Serbia\",\"country_code\":\"RS\",\"capital\":\"Belgrade\"},{\"timezones\":[\"Africa/Juba\"],\"latlng\":[7,30],\"name\":\"South Sudan\",\"country_code\":\"SS\",\"capital\":\"Juba\"},{\"timezones\":[\"Africa/Sao_Tome\"],\"latlng\":[1,7],\"name\":\"São Tomé and Príncipe\",\"country_code\":\"ST\",\"capital\":\"São Tomé\"},{\"timezones\":[\"America/Paramaribo\"],\"latlng\":[4,-56],\"name\":\"Suriname\",\"country_code\":\"SR\",\"capital\":\"Paramaribo\"},{\"timezones\":[\"Europe/Bratislava\"],\"latlng\":[48.66666666,19.5],\"name\":\"Slovakia\",\"country_code\":\"SK\",\"capital\":\"Bratislava\"},{\"timezones\":[\"Europe/Ljubljana\"],\"latlng\":[46.11666666,14.81666666],\"name\":\"Slovenia\",\"country_code\":\"SI\",\"capital\":\"Ljubljana\"},{\"timezones\":[\"Europe/Stockholm\"],\"latlng\":[62,15],\"name\":\"Sweden\",\"country_code\":\"SE\",\"capital\":\"Stockholm\"},{\"timezones\":[\"Africa/Mbabane\"],\"latlng\":[-26.5,31.5],\"name\":\"Swaziland\",\"country_code\":\"SZ\",\"capital\":\"Lobamba\"},{\"timezones\":[\"America/Lower_Princes\"],\"latlng\":[18.033333,-63.05],\"name\":\"Sint Maarten\",\"country_code\":\"SX\",\"capital\":\"Philipsburg\"},{\"timezones\":[\"Indian/Mahe\"],\"latlng\":[-4.58333333,55.66666666],\"name\":\"Seychelles\",\"country_code\":\"SC\",\"capital\":\"Victoria\"},{\"timezones\":[\"Asia/Damascus\"],\"latlng\":[35,38],\"name\":\"Syria\",\"country_code\":\"SY\",\"capital\":\"Damascus\"},{\"timezones\":[\"America/Grand_Turk\"],\"latlng\":[21.75,-71.58333333],\"name\":\"Turks and Caicos Islands\",\"country_code\":\"TC\",\"capital\":\"Cockburn Town\"},{\"timezones\":[\"Africa/Ndjamena\"],\"latlng\":[15,19],\"name\":\"Chad\",\"country_code\":\"TD\",\"capital\":\"N'Djamena\"},{\"timezones\":[\"Africa/Lome\"],\"latlng\":[8,1.16666666],\"name\":\"Togo\",\"country_code\":\"TG\",\"capital\":\"Lomé\"},{\"timezones\":[\"Asia/Bangkok\"],\"latlng\":[15,100],\"name\":\"Thailand\",\"country_code\":\"TH\",\"capital\":\"Bangkok\"},{\"timezones\":[\"Asia/Dushanbe\"],\"latlng\":[39,71],\"name\":\"Tajikistan\",\"country_code\":\"TJ\",\"capital\":\"Dushanbe\"},{\"timezones\":[\"Pacific/Fakaofo\"],\"latlng\":[-9,-172],\"name\":\"Tokelau\",\"country_code\":\"TK\",\"capital\":\"Fakaofo\"},{\"timezones\":[\"Asia/Ashgabat\"],\"latlng\":[40,60],\"name\":\"Turkmenistan\",\"country_code\":\"TM\",\"capital\":\"Ashgabat\"},{\"timezones\":[\"Asia/Dili\"],\"latlng\":[-8.83333333,125.91666666],\"name\":\"Timor-Leste\",\"country_code\":\"TL\",\"capital\":\"Dili\"},{\"timezones\":[\"Pacific/Tongatapu\"],\"latlng\":[-20,-175],\"name\":\"Tonga\",\"country_code\":\"TO\",\"capital\":\"Nuku'alofa\"},{\"timezones\":[\"America/Port_of_Spain\"],\"latlng\":[11,-61],\"name\":\"Trinidad and Tobago\",\"country_code\":\"TT\",\"capital\":\"Port of Spain\"},{\"timezones\":[\"Africa/Tunis\"],\"latlng\":[34,9],\"name\":\"Tunisia\",\"country_code\":\"TN\",\"capital\":\"Tunis\"},{\"timezones\":[\"Europe/Istanbul\"],\"latlng\":[39,35],\"name\":\"Turkey\",\"country_code\":\"TR\",\"capital\":\"Ankara\"},{\"timezones\":[\"Pacific/Funafuti\"],\"latlng\":[-8,178],\"name\":\"Tuvalu\",\"country_code\":\"TV\",\"capital\":\"Funafuti\"},{\"timezones\":[\"Asia/Taipei\"],\"latlng\":[23.5,121],\"name\":\"Taiwan\",\"country_code\":\"TW\",\"capital\":\"Taipei\"},{\"timezones\":[\"Africa/Dar_es_Salaam\"],\"latlng\":[-6,35],\"name\":\"Tanzania\",\"country_code\":\"TZ\",\"capital\":\"Dodoma\"},{\"timezones\":[\"Africa/Kampala\"],\"latlng\":[1,32],\"name\":\"Uganda\",\"country_code\":\"UG\",\"capital\":\"Kampala\"},{\"timezones\":[\"Europe/Kiev\",\"Europe/Uzhgorod\",\"Europe/Zaporozhye\"],\"latlng\":[49,32],\"name\":\"Ukraine\",\"country_code\":\"UA\",\"capital\":\"Kiev\"},{\"timezones\":[\"Pacific/Johnston\",\"Pacific/Midway\",\"Pacific/Wake\"],\"latlng\":[19.2911437,166.618332],\"name\":\"United States Minor Outlying Islands\",\"country_code\":\"UM\",\"capital\":null},{\"timezones\":[\"America/Montevideo\"],\"latlng\":[-33,-56],\"name\":\"Uruguay\",\"country_code\":\"UY\",\"capital\":\"Montevideo\"},{\"timezones\":[\"America/New_York\",\"America/Detroit\",\"America/Kentucky/Louisville\",\"America/Kentucky/Monticello\",\"America/Indiana/Indianapolis\",\"America/Indiana/Vincennes\",\"America/Indiana/Winamac\",\"America/Indiana/Marengo\",\"America/Indiana/Petersburg\",\"America/Indiana/Vevay\",\"America/Chicago\",\"America/Indiana/Tell_City\",\"America/Indiana/Knox\",\"America/Menominee\",\"America/North_Dakota/Center\",\"America/North_Dakota/New_Salem\",\"America/North_Dakota/Beulah\",\"America/Denver\",\"America/Boise\",\"America/Phoenix\",\"America/Los_Angeles\",\"America/Anchorage\",\"America/Juneau\",\"America/Sitka\",\"America/Metlakatla\",\"America/Yakutat\",\"America/Nome\",\"America/Adak\",\"Pacific/Honolulu\"],\"latlng\":[38,-97],\"name\":\"United States\",\"country_code\":\"US\",\"capital\":\"Washington D.C.\"},{\"timezones\":[\"Asia/Samarkand\",\"Asia/Tashkent\"],\"latlng\":[41,64],\"name\":\"Uzbekistan\",\"country_code\":\"UZ\",\"capital\":\"Tashkent\"},{\"timezones\":[\"Europe/Vatican\"],\"latlng\":[41.9,12.45],\"name\":\"Vatican City\",\"country_code\":\"VA\",\"capital\":\"Vatican City\"},{\"timezones\":[\"America/St_Vincent\"],\"latlng\":[13.25,-61.2],\"name\":\"Saint Vincent and the Grenadines\",\"country_code\":\"VC\",\"capital\":\"Kingstown\"},{\"timezones\":[\"America/Caracas\"],\"latlng\":[8,-66],\"name\":\"Venezuela\",\"country_code\":\"VE\",\"capital\":\"Caracas\"},{\"timezones\":[\"America/Tortola\"],\"latlng\":[18.431383,-64.62305],\"name\":\"British Virgin Islands\",\"country_code\":\"VG\",\"capital\":\"Road Town\"},{\"timezones\":[\"America/St_Thomas\"],\"latlng\":[18.35,-64.933333],\"name\":\"United States Virgin Islands\",\"country_code\":\"VI\",\"capital\":\"Charlotte Amalie\"},{\"timezones\":[\"Asia/Ho_Chi_Minh\"],\"latlng\":[16.16666666,107.83333333],\"name\":\"Vietnam\",\"country_code\":\"VN\",\"capital\":\"Hanoi\"},{\"timezones\":[\"Pacific/Efate\"],\"latlng\":[-16,167],\"name\":\"Vanuatu\",\"country_code\":\"VU\",\"capital\":\"Port Vila\"},{\"timezones\":[\"Pacific/Wallis\"],\"latlng\":[-13.3,-176.2],\"name\":\"Wallis and Futuna\",\"country_code\":\"WF\",\"capital\":\"Mata-Utu\"},{\"timezones\":[\"Pacific/Apia\"],\"latlng\":[-13.58333333,-172.33333333],\"name\":\"Samoa\",\"country_code\":\"WS\",\"capital\":\"Apia\"},{\"timezones\":[\"Asia/Aden\"],\"latlng\":[15,48],\"name\":\"Yemen\",\"country_code\":\"YE\",\"capital\":\"Sana'a\"},{\"timezones\":[\"Africa/Johannesburg\"],\"latlng\":[-29,24],\"name\":\"South Africa\",\"country_code\":\"ZA\",\"capital\":\"Pretoria\"},{\"timezones\":[\"Africa/Lusaka\"],\"latlng\":[-15,30],\"name\":\"Zambia\",\"country_code\":\"ZM\",\"capital\":\"Lusaka\"},{\"timezones\":[\"Africa/Harare\"],\"latlng\":[-20,30],\"name\":\"Zimbabwe\",\"country_code\":\"ZW\",\"capital\":\"Harare\"}]");

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

var _jsxFileName = "/Users/stanislavohstany/WebApps/DEV/cov19/src/Templates/ActivityArea/index.js";

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
const protocol = true ? "https:" : undefined;
const proxyUrl = "//cors-anywhere.herokuapp.com/";

const News = ({
  data
}) => {
  return __jsx("div", {
    className: "author",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: void 0
  }, data.img && __jsx("div", {
    className: "imgb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: void 0
  }, __jsx("img", {
    src: data.img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: void 0
  })), __jsx("h3", {
    className: "atitle clickable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: void 0
  }, __jsx("a", {
    href: data.link,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: void 0
  }, data.title)), __jsx("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: void 0
  }, data.description), __jsx("div", {
    className: "source",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
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
    return;
    fetch(protocol + proxyUrl + "https://gazeta.ua/rss").then(blop => {
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
        lineNumber: 88
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
        lineNumber: 89
      },
      __self: void 0
    }, news ? a.title : `Пользователь #${a.id}`), __jsx("div", {
      className: "desc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: void 0
    }, a.content), a.source && a.source.length && __jsx("div", {
      className: "source",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: void 0
    }, a.source.map((s, sx) => __jsx(RenderSource, {
      key: sx,
      s: s,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
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
        lineNumber: 111
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
        lineNumber: 127
      },
      __self: void 0
    }, s.indexOf("youtube") >= 0 && s.indexOf("iframe") >= 0 ? __jsx("div", {
      dangerouslySetInnerHTML: {
        __html: s
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: void 0
    }) : __jsx("a", {
      href: s,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: void 0
    }, s));
  }, []);
  return __jsx("div", {
    className: "block activityArea " + nav,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: void 0
  }, __jsx("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: void 0
  }, __jsx("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: void 0
  }, [{
    id: "local",
    title: __jsx(Pin, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
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
        lineNumber: 156
      },
      __self: void 0
    }, m.title);
  }))), __jsx("div", {
    className: "activity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: void 0
  }, __jsx("div", {
    className: "bb b1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
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
        lineNumber: 176
      },
      __self: void 0
    });
  }) : __jsx(_Skeleton.Skeleton1, {
    row: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: void 0
  })), __jsx("div", {
    className: "bb b2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: void 0
  }, __jsx(SingleItem, {
    nav: nav,
    a: active,
    ax: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: void 0
  }), active && __jsx("div", {
    className: "comments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: void 0
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: void 0
  }, "\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 (", comments.length || 0, ")"), comments ? comments.map((c, cx) => {
    return __jsx("div", {
      className: "cm author",
      key: cx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: void 0
    }, __jsx("div", {
      className: "chead",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: void 0
    }, __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: void 0
    }, c.user), c.date ? __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: void 0
    }, " - " + c.date) : ""), __jsx("div", {
      className: "cbody",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: void 0
    }, c.content));
  }) : "Пока нет коментариев, напишите первым")), __jsx("div", {
    className: "bb b3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: void 0
  }, news.length ? news.map((a, ax) => {
    return __jsx(News, {
      key: ax,
      data: a,
      ax: ax,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: void 0
    });
  }) : __jsx(_Skeleton.Skeleton1, {
    row: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
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

var _mapStyling = _interopRequireDefault(__webpack_require__(/*! ./mapStyling.json */ "./src/Templates/GoogleMaps/mapStyling.json"));

var _countries = _interopRequireDefault(__webpack_require__(/*! ../../Library/countries.json */ "./src/Library/countries.json"));

var _Library = __webpack_require__(/*! ../../Library */ "./src/Library/index.js");

var _jsxFileName = "/Users/stanislavohstany/WebApps/DEV/cov19/src/Templates/GoogleMaps/index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __jsx = _react.default.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const defsize = 25;

const MapContainer = ({
  context,
  google
}) => {
  const {
    store: {
      geo = false,
      markers = [],
      index
    },
    setStore
  } = context || {};
  const {
    0: state,
    1: _state
  } = (0, _react.useReducer)(_Library.reducer, {
    cpos: false,
    latlng: ["49.037868", "31.904297"],
    zoom: 9,
    activeMarker: null
  });
  const {
    zoom,
    latlng
  } = state;
  (0, _react.useEffect)(() => {
    if (geo && geo.countryCode) {
      const gpos = _countries.default.filter(c => c.country_code === geo.countryCode);

      if (gpos.length) {
        _state({
          cpos: gpos[0],
          zoom: 7,
          latlng: [gpos[0].latlng[0], gpos[0].latlng[1]]
        });
      }
    }
  }, [geo]);
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
      zoom: 10
    });

    _state({
      latlng: [pp.position.lat, pp.position.lng],
      zoom: 11,
      activeMarker
    });
  };

  const onMapClicked = props => {
    _state({
      activeMarker: null
    });
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
        lineNumber: 72
      },
      __self: void 0
    })));
  }, [markers.length >= 0]);
  return __jsx(_googleMapsReact.Map, _extends({}, _mapStyling.default, {
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
    __self: void 0
  }), markers.length && displayMarkers());
};

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

/***/ "./src/Templates/GoogleMaps/mapStyling.json":
/*!**************************************************!*\
  !*** ./src/Templates/GoogleMaps/mapStyling.json ***!
  \**************************************************/
/*! exports provided: style, styles, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"style\":{\"width\":\"100%\",\"height\":\"100%\"},\"styles\":[{\"featureType\":\"water\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#cccccc\"},{\"lightness\":17}]},{\"featureType\":\"landscape\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#f5f5f5\"},{\"lightness\":20}]},{\"featureType\":\"road.highway\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#ffffff\"},{\"lightness\":17}]},{\"featureType\":\"road.highway\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"color\":\"#ffffff\"},{\"lightness\":29},{\"weight\":0.2}]},{\"featureType\":\"road.arterial\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#ffffff\"},{\"lightness\":18}]},{\"featureType\":\"road.local\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#ffffff\"},{\"lightness\":16}]},{\"featureType\":\"poi\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#f5f5f5\"},{\"lightness\":21}]},{\"featureType\":\"poi.park\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#dedede\"},{\"lightness\":21}]},{\"elementType\":\"labels.text.fill\",\"stylers\":[{\"saturation\":36},{\"color\":\"#333333\"},{\"lightness\":40}]},{\"elementType\":\"labels.icon\",\"stylers\":[{\"visibility\":\"on\"}]},{\"featureType\":\"transit\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#a1a1a1\"},{\"lightness\":19}]},{\"featureType\":\"administrative\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#a1a1a1\"},{\"lightness\":20}]},{\"featureType\":\"administrative\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"color\":\"#bebebe\"},{\"lightness\":17},{\"weight\":1.2}]}]}");

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

var _jsxFileName = "/Users/stanislavohstany/WebApps/DEV/cov19/src/Templates/MakeMark/index.js";

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

var _jsxFileName = "/Users/stanislavohstany/WebApps/DEV/cov19/src/Templates/Skeleton/index.js";

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

var _jsxFileName = "/Users/stanislavohstany/WebApps/DEV/cov19/src/Templates/Socials/index.js";

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

var _jsxFileName = "/Users/stanislavohstany/WebApps/DEV/cov19/src/Templates/Subscribe/index.js";

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

module.exports = __webpack_require__(/*! /Users/stanislavohstany/WebApps/DEV/cov19/pages/index.js */"./pages/index.js");


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