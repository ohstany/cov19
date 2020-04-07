import ReactDOM from "react-dom";
import { memo } from "react";
import { withTranslation } from "i18n";

const isArray =
	Array.isArray ||
	function (obj) {
		return toStr.call(obj) === "[object Array]";
	};

const isBoolean = (obj) =>
	typeof obj === "boolean" || toString(obj) === "[object Boolean]";

export const isObject = (obj) =>
	typeof obj === "object" && toString(obj) === "[object Object]";

const toString = (type) => toStr.call(type);

const getKey = (key) => {
	const intKey = parseInt(key);
	if (intKey.toString() === key) {
		return intKey;
	}
	return key;
};

const hasOwnProperty = (obj, prop) => {
	if (obj == null) {
		return false;
	}
	return Object.prototype.hasOwnProperty.call(obj, prop);
};

const hasShallowProperty = (obj, prop) =>
	(typeof prop === "number" && Array.isArray(obj)) ||
	hasOwnProperty(obj, prop);

const getShallowProperty = (obj, prop) => {
	if (hasShallowProperty(obj, prop)) {
		return obj[prop];
	}
};

const isEmpty = (value) => {
	if (!value) return true;

	if (isArray(value) && value.length === 0) {
		return true;
	} else if (typeof value !== "string") {
		for (var i in value) {
			if (hasOwnProperty(value, i)) {
				return false;
			}
		}
		return true;
	}
	return false;
};

export const emptyObjectPath = (obj, path) => {
	if (isEmpty(path)) {
		return void 0;
	}
	if (obj == null) {
		return void 0;
	}

	var value, i;

	if (!(value = objectPath.get(obj, path))) {
		return void 0;
	}

	if (typeof value === "string") {
		return setObjectPath(obj, path, "");
	} else if (isBoolean(value)) {
		return setObjectPath(obj, path, false);
	} else if (typeof value === "number") {
		return setObjectPath(obj, path, 0);
	} else if (isArray(value)) {
		value.length = 0;
	} else if (isObject(value)) {
		for (i in value) {
			if (hasShallowProperty(value, i)) {
				delete value[i];
			}
		}
	} else {
		return setObjectPath(obj, path, null);
	}
};

export const insertObjectPath = (obj, path, value, at) => {
	var arr = objectValue(obj, path);
	at = ~~at;
	if (!isArray(arr)) {
		arr = [];
		setObjectPath(obj, path, arr);
	}
	arr.splice(at, 0, value);
};

export const delObjectPath = (obj, path) => {
	if (typeof path === "number") {
		path = [path];
	}

	if (obj == null) {
		return obj;
	}

	if (isEmpty(path)) {
		return obj;
	}
	if (typeof path === "string") {
		return delObjectPath(obj, path.split("."));
	}

	const currentPath = getKey(path[0]);
	if (!hasShallowProperty(obj, currentPath)) {
		return obj;
	}

	if (path.length === 1) {
		if (isArray(obj)) {
			obj.splice(currentPath, 1);
		} else {
			delete obj[currentPath];
		}
	} else {
		return delObjectPath(obj[currentPath], path.slice(1));
	}

	return obj;
};

export const setObjectPath = (obj, path, value, doNotReplace) => {
	if (typeof path === "number") {
		path = [path];
	}

	if (!path || path.length === 0) {
		return obj;
	}

	if (typeof path === "string") {
		return setObjectPath(
			obj,
			path.split(".").map(getKey),
			value,
			doNotReplace
		);
	}

	const currentPath = path[0];
	const currentValue = getShallowProperty(obj, currentPath);

	if (path.length === 1) {
		if (currentValue === void 0 || !doNotReplace) {
			obj[currentPath] = value;
		}
		return currentValue;
	}

	if (currentValue === void 0) {
		if (typeof path[1] === "number") {
			obj[currentPath] = [];
		} else {
			obj[currentPath] = {};
		}
	}

	return setObjectPath(obj[currentPath], path.slice(1), value, doNotReplace);
};

export const objectValue = (obj, path) => {
	const parts = path.split(".");
	if (!obj) return;
	if (parts.length == 1) return obj[parts[0]];
	return objectValue(obj[parts[0]], parts.slice(1).join("."));
};

export const mergeDeep = (target, source) => {
	let output = Object.assign({}, target);
	if (isObject(target) && isObject(source)) {
		Object.keys(source).forEach((key) => {
			if (isObject(source[key])) {
				if (!(key in target))
					Object.assign(output, { [key]: source[key] });
				else output[key] = mergeDeep(target[key], source[key]);
			} else {
				Object.assign(output, { [key]: source[key] });
			}
		});
	}
	return output;
};

let not = 0;

export const notification = (text, close = 2000) => {
	let timer = 0;
	let count = 0;
	const idd = "not" + not;
	const node = document.createElement("div");
	node.id = idd;

	ReactDOM.render(
		<div
			className="notif"
			onMouseOver={() => clearInt()}
			onMouseOut={() => startInt()}
		>
			{text}
		</div>,
		document.body.appendChild(node)
	);

	const n = document.getElementById(idd);

	const clearInt = () => clearInterval(timer);

	const startInt = () => {
		timer = setInterval(() => {
			count = count + 1000;

			if (count === close) {
				n.firstChild.style.top =
					"-" + (n.firstChild.offsetHeight + 5) + "px";

				clearInt();

				setTimeout(() => {
					n.remove();
				}, 1000);
			}
		}, 1000);
	};

	setTimeout(() => {
		n.firstChild.style.top = "10px";
	}, 0);

	startInt();

	not++;
};

export const Notifications = memo(({ t, code }) => {
	return {
		100: t("temporaryBlocked"),
		101: t("commentModerating"),
		102: t("cannotCommentCountry"),
		def: "",
	}[code || "def"];
});

export const CountryName = memo(
	withTranslation("countries")(({ t, value }) => {
		return value ? <div className="country">{t(value)}</div> : "";
	})
);

export const CityName = memo(
	withTranslation("cities")(({ t, value }) => {
		return value ? <div className="city">{t(value)}</div> : "";
	})
);

export const swapKeyValue = (data) => {
	return Object.keys(data).reduce(
		(obj, key) => Object.assign({}, obj, { [data[key]]: key }),
		{}
	);
};

export const numComma = (x) => {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Momoization of functional component or CLASS method
export const memoize = (fn) => {
	return () => {
		var args = Array.prototype.slice.call(arguments);
		fn.cache = fn.cache || {};
		return fn.cache[args]
			? fn.cache[args]
			: (fn.cache[args] = fn.apply(this, args));
	};
};

export const randomID = (length = 6) => {
	return (
		Math.random()
			.toString(36)
			.substring(2, length - 1) +
		Math.random()
			.toString(36)
			.substring(2, length - 1)
	);
};

export const make2sideFilter = (inpObj) => {
	if (!inpObj || !(inpObj instanceof Array)) return { o: {}, f: {} };

	const f = [];
	const o = inpObj.reduce((p, c) => {
		f.push({
			value: "" + c.ID,
			text: c.title,
		});

		return Object.assign({}, p, { ["" + c.ID]: c.title });
	}, {});

	return { o, f };
};

export const debounce = (func, wait, immediate) => {
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

export const removeFromArray = (arr, value) => {
	return arr.filter(function (ele) {
		return ele != value;
	});
};

export const reducer = (state, a) => {
	// auto state update via KEYS
	a &&
		Object.keys(a).map((k) => {
			state[k] = a[k];
			return false;
		});
	return { ...state };
};

export const validateEmail = (email) => {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

export const validateNumber = (value) => {
	var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
	return re.test(value);
};

export const getUrlParams = (url) => {
	// get query string from url (optional) or window
	var queryString = url ? url.split("?")[1] : window.location.search.slice(1);

	// we'll store the parameters here
	var obj = {};

	// if query string exists
	if (queryString) {
		// stuff after # is not part of query string, so get rid of it
		queryString = queryString.split("#")[0];

		// split our query string into its component parts
		var arr = queryString.split("&");

		for (var i = 0; i < arr.length; i++) {
			// separate the keys and the values
			var a = arr[i].split("=");

			// set parameter name and value (use 'true' if empty)
			var paramName = a[0];
			var paramValue = typeof a[1] === "undefined" ? true : a[1];

			// (optional) keep case consistent
			// paramName = paramName.toLowerCase();
			// if (typeof paramValue === "string") {
			// 	paramValue = paramValue.toLowerCase();
			// }

			// if the paramName ends with square brackets, e.g. colors[] or colors[2]
			if (paramName.match(/\[(\d+)?\]$/)) {
				// create key if it doesn't exist
				var key = paramName.replace(/\[(\d+)?\]/, "");
				if (!obj[key]) obj[key] = [];

				// if it's an indexed array e.g. colors[2]
				if (paramName.match(/\[\d+\]$/)) {
					// get the index value and add the entry at the appropriate position
					var index = /\[(\d+)\]/.exec(paramName)[1];
					obj[key][index] = paramValue;
				} else {
					// otherwise add the value to the end of the array
					obj[key].push(paramValue);
				}
			} else {
				// we're dealing with a string
				if (!obj[paramName]) {
					// if it doesn't exist, create property
					obj[paramName] = paramValue;
				} else if (
					obj[paramName] &&
					typeof obj[paramName] === "string"
				) {
					// if property does exist and it's a string, convert it to an array
					obj[paramName] = [obj[paramName]];
					obj[paramName].push(paramValue);
				} else {
					// otherwise add the property
					obj[paramName].push(paramValue);
				}
			}
		}
	}
	return obj;
};
