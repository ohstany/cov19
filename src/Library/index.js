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
