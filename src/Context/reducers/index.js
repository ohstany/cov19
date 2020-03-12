// import { make2sideFilter, randomID } from "Library";

/**
 * STORE REDUCER (separate component data, categories, coures etc.)
 * PARAMS: s - store, a - data object (action, data and so on)
 */
export const root_store_reducer = (s, a, params = false) => {
	const { data = [], reduce } = a || {};

	switch (reduce) {
		case "UPDATE_OPTION": {
			const { options } = s;
			const { key, value } = params.data;

			if (!key) return {};

			options[key] = value || {};

			return {
				options
			};
		}

		case "DEFAULT": {
			return {};
		}

		default: {
			return data.single && data.set
				? { [data.single]: { ...s[data.single], ...data.set } }
				: {};
		}
	}
};

/**
 * INITIAL default values of application store
 */

export const root_store_initial_state = {
	cpos: false,
	mapRef: null,
	geo: false,
	options: {},
	index: undefined,
	loginStatus: false,
	settings: {},
	activity: {},
	news: {
		a: [],
		loaded: false
	},
	markers: {
		a: [],
		loaded: false
	}
};
