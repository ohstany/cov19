import { getUrlParams } from "Library";

/**
 * STORE REDUCER (separate component data, categories, coures etc.)
 * PARAMS: s - store, a - data object (action, data and so on)
 */
export const root_store_reducer = (s, a, params = false) => {
	const { data = [], reduce } = a || {};

	switch (reduce) {
		case "LOGIN": {
			if (data && data.ID) {
				return { userdata: data, loginStatus: true, fetched: true };
			} else {
				return { fetched: true };
			}
		}

		case "SET_ACTIVITY": {
			const { activity } = s;

			const { country, city } = getUrlParams("?" + params.params);

			if (!activity[country]) {
				activity[country] = {};
			}

			const key = city || "other";

			activity[country][key] = data || [];

			return {
				activity
			};
		}

		case "SET_MAP_MARKERS": {
			const { mapMarkers } = s;

			const { country } = getUrlParams("?" + params.params);

			mapMarkers[country] = data;

			return {
				mapMarkers
			};
		}

		case "ADD_MARKER": {
			const { markers } = s;

			const { ID, fields_updated } = data || {};

			fields_updated.ID = ID;

			const kk = fields_updated.locale;

			if (kk && !markers[kk]) markers[kk] = [];

			markers[kk || "other"].unshift(fields_updated);

			return {
				markers
			};
		}

		case "MODIFY_MARKER": {
			const { markers } = s;
			const { modify, ID, locale } = params.data;

			const kk = locale || "other";

			const index = markers[kk].findIndex(i => i.ID === ID);

			if (index >= 0) {
				markers[kk][index] = {
					...markers[kk][index],
					...modify
				};
			}

			return {
				markers
			};
		}

		case "DELETE_MARKER": {
			const { markers } = s;
			const { ID, locale } = params.data;

			const kk = locale || "other";

			const index = markers[kk].findIndex(i => i.ID === ID);

			if (index >= 0) {
				markers[kk].splice(index, 1);
			}

			return {
				markers
			};
		}

		case "UPDATE_LOCATION": {
			const { markers } = s;
			const { address, ID } = params.data;

			if (address.locale) {
				const inn = markers[address.locale]
					? markers[address.locale].findIndex(i => i.ID === ID)
					: false;

				if (inn >= 0 && inn !== false) {
					const meta_data = {
						...((markers[address.locale][inn] &&
							markers[address.locale][inn].meta_data) ||
							{}),
						...address.meta_data
					};

					markers[address.locale][inn] = {
						...markers[address.locale][inn],
						...address,
						meta_data
					};
				} else {
					const inn2 = markers["other"]
						? markers["other"].findIndex(i => i.ID === ID)
						: false;

					if (inn2 >= 0 && inn2 !== false) {
						const meta_data = {
							...markers["other"][inn2].meta_data,
							...address.meta_data
						};

						markers["other"][inn2] = {
							...markers["other"][inn2],
							...address,
							meta_data
						};
					}
				}
			}

			return {
				markers
			};
		}

		case "SET_MARKERS_ADMIN": {
			const red = (data && data instanceof Array ? data : []).reduce(
				(p, n) => {
					if (n.locale) {
						if (!p[n.locale]) p[n.locale] = [];
						p[n.locale].push(n);
					} else {
						if (!p["other"]) p["other"] = [];
						p.other.push(n);
					}
					return Object.assign({}, p);
				},
				{}
			);

			return { markers: red };
		}

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
	userdata: {},
	country_code: undefined,
	region_code: undefined,
	index: undefined,
	fetched: false,
	cpos: false,
	geo: false,
	loginStatus: false,
	mapRef: null,
	options: {},
	settings: {},
	activity: {},
	newsLimit: {},
	news: {},
	mk: [],
	mapMarkers: {},
	markers: {
		other: []
	}
};
