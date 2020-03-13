import { getUrlParams } from "Library";

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

		case "SET_NEWS": {
			const { news, newsLimit } = s;

			const { limit, locale } = getUrlParams("?" + params.params);

			if (!locale) return {};

			if (!news[locale]) {
				news[locale] = [];
				newsLimit[locale] = false;
			}

			if (data) {
				news[locale] = [...news[locale], ...data];
				if (limit && data.length < limit) {
					newsLimit[locale] = true;
				}
			} else {
				newsLimit[locale] = true;
			}

			return {
				newsLimit,
				news
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
	country_code: undefined,
	region_code: undefined,
	index: undefined,
	cpos: false,
	geo: false,
	loginStatus: false,
	mapRef: null,
	options: {},
	settings: {},
	activity: {},
	newsLimit: {},
	news: {},
	markers: {
		a: [],
		loaded: false
	}
};
