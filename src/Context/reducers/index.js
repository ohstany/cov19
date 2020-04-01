import { getUrlParams, mergeDeep, notification, Notifications } from "Library";
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

		case "SET_LIKE": {
			const { chats } = s;
			const { c, item, status, type } = getUrlParams("?" + params.params);

			const index = chats[c].data.findIndex(i => "" + i.ID === "" + item);

			if (type === "author") {
				if (index >= 0) {
					if (data === 1) {
						if (status === "1") {
							chats[c].data[index].like++;
						} else {
							chats[c].data[index].dislike++;
						}
					} else if (data === 2) {
						if (status === "1") {
							chats[c].data[index].like++;
							chats[c].data[index].dislike--;
						} else {
							chats[c].data[index].like--;
							chats[c].data[index].dislike++;
						}
					}
				}
			}

			return { chats };
		}

		case "LOGIN_SOCIAL": {
			if (data && data.ID) {
				return { userdata: data, loginStatus: true, fetched: true };
			} else {
				return { fetched: true };
			}
		}

		case "PUSH_COMMENT": {
			const { chats, chatReplies } = s;

			if (typeof data === "object" && data.error) {
				notification(
					<Notifications t={params.t} code={data.code} />,
					5000
				);
				return {};
			}

			if (data && data.ID) {
				const { country } = params.data || {};

				if (data.parent) {
					if (!chatReplies[data.parent]) {
						chatReplies[data.parent] = [];
					}

					const index = chats[country].data.findIndex(
						i => "" + i.ID === "" + data.parent
					);

					if (index >= 0) {
						chats[country].data[index].count =
							(chats[country].data[index].count || 0) + 1;
					}

					chatReplies[data.parent].unshift(data);
				} else {
					if (!chats[data.locale]) {
						chats[data.locale] = {
							data: [],
							count: 0,
							limit: false
						};
					}

					chats[country].count++;

					chats[data.locale].data.unshift(data);
				}
			}

			return {
				chats
			};
		}

		case "SET_CHAT_COUNT": {
			const { chats } = s;

			const { country } = getUrlParams("?" + params.params);

			if (!chats[country]) {
				chats[country] = {
					data: [],
					count: 0,
					limit: false
				};
			}

			if (data >= 0) {
				chats[country].count = data || 0;
			}

			return {
				chats
			};
		}

		case "FETCH_CHAT": {
			const { chats } = s;

			const { limit, country, get } = getUrlParams("?" + params.params);

			if (!chats[country]) {
				chats[country] = {
					data: [],
					count: 0,
					limit: false
				};
			}

			if (data) {
				if (get === "new" && chats[country].data.length) {
					chats[country].count =
						parseInt(chats[country].count) + data.length;
				}

				chats[country].data =
					get === "new"
						? [...data, ...chats[country].data]
						: [...chats[country].data, ...data];

				if (limit && data.length < limit) {
					chats[country].limit = true;
				} else {
					chats[country].limit = false;
				}
			} else {
				chats[country].limit = true;
			}

			return {
				chats
			};
		}

		case "FETCH_REPLY": {
			const { chatReplies, chatLimit } = s;

			const { limit, parent, get } = getUrlParams("?" + params.params);

			if (!chatReplies[parent]) {
				chatReplies[parent] = [];
				chatLimit[parent] = false;
			}

			if (data) {
				if (get === "new" && chatReplies[parent].length) {
					chatReplies[parent].count =
						parseInt(chatReplies[parent].count) + data.length;
				}

				chatReplies[parent] =
					get === "new"
						? [...data, ...chatReplies[parent]]
						: [...chatReplies[parent], ...data];

				if (limit && data.length < limit) {
					chatLimit[parent] = true;
				} else {
					chatLimit[parent] = false;
				}
			} else {
				chatLimit[parent] = true;
			}

			return {
				chatReplies,
				chatLimit
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

		case "SET_ACTIVITY": {
			const { activity, activityLimit } = s;

			const { type, limit, country, city } = getUrlParams(
				"?" + params.params
			);

			if (!country) return {};

			const rkey =
				type === "regional"
					? `${country}_${type}`
					: `${country}_${city || "other"}`;

			if (!activity[rkey]) {
				activity[rkey] = [];
				activityLimit[rkey] = false;
			}

			if (data) {
				activity[rkey] = [...activity[rkey], ...data];

				if (limit && data.length < limit) {
					activityLimit[rkey] = true;
				}

				if (type === "regional") {
					data.map(i => {
						const rk = `${i.locale}_${i.region || "other"}`;

						if (!activity[rk]) {
							activity[rk] = [];
							activityLimit[rk] = false;
						}

						activity[rk].push(i);

						return false;
					});
				}
			} else {
				activityLimit[rkey] = true;
			}

			return {
				activity,
				activityLimit
			};
		}

		case "SET_MAP_MARKERS": {
			return {
				mapMarkers: data || []
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

			if (!markers[kk]) {
				markers[kk] = [];
			}

			const index = markers[kk].findIndex(i => i.ID === ID);

			if (index >= 0) {
				markers[kk][index] = mergeDeep(markers[kk][index], modify);
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
	language: "en",
	country_code: undefined,
	region_code: undefined,
	index: undefined,
	contactUs: false,
	subscribe: false,
	fetched: false,
	cpos: false,
	geo: false,
	loginStatus: false,
	mapRef: null,
	chatInfo: {},
	chatLimit: {},
	chats: {},
	chatReplies: {},
	options: {},
	settings: {},
	activityLimit: {},
	activity: { regional: [] },
	newsLimit: {},
	news: {},
	mk: [],
	mapMarkers: [],
	markers: {
		other: []
	}
};
