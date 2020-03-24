import { memo } from "react";
import { withTranslation } from "i18n";

let not = 0;

export const notification = (text, close = 2000) => {
	const idd = "not" + not;
	var node = document.createElement("div");
	var textnode = document.createTextNode(text);
	node.appendChild(textnode);
	node.id = idd;
	node.classList.add("notif");
	document.body.appendChild(node);

	document.getElementById(idd).style.top = "20px";

	setTimeout(() => {
		document.getElementById(idd).style.top = "-50px";
		setTimeout(() => {
			document.getElementById(idd).remove();
		}, 1000);
	}, close);

	not++;
};

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

export const numComma = x => {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Momoization of functional component or CLASS method
export const memoize = fn => {
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

export const make2sideFilter = inpObj => {
	if (!inpObj || !(inpObj instanceof Array)) return { o: {}, f: {} };

	const f = [];
	const o = inpObj.reduce((p, c) => {
		f.push({
			value: "" + c.ID,
			text: c.title
		});

		return Object.assign({}, p, { ["" + c.ID]: c.title });
	}, {});

	return { o, f };
};

export const debounce = (func, wait, immediate) => {
	var timeout;
	return function() {
		var context = this,
			args = arguments;
		var later = function() {
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
	return arr.filter(function(ele) {
		return ele != value;
	});
};

export const reducer = (state, a) => {
	// auto state update via KEYS
	a &&
		Object.keys(a).map(k => {
			state[k] = a[k];
			return false;
		});
	return { ...state };
};

export const validateEmail = email => {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

export const getUrlParams = url => {
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
