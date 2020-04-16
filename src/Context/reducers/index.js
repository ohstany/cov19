import { getUrlParams, mergeDeep, notification, Notifications } from "Library";
import { faSave } from "@fortawesome/fontawesome-free-solid";
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
				return {
					fetched: true,
					closed:
						data &&
						data.error &&
						data.error.code === "user_account_is_closed"
							? true
							: false,
				};
			}
		}

		case "SET_COUNTRIES": {
			const { countries } = s;

			if (!data) return {};

			countries.a = data;

			return { countries };
		}

		case "SET_LIKE": {
			const { chats } = s;
			const { c, item, status, type } = getUrlParams("?" + params.params);

			const index = chats[c].data.findIndex(
				(i) => "" + i.ID === "" + item
			);

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
				return {
					fetched: true,
					closed:
						data &&
						data.error &&
						data.error.code === "user_account_is_closed"
							? true
							: false,
				};
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
						(i) => "" + i.ID === "" + data.parent
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
							limit: false,
						};
					}

					chats[country].count++;

					chats[data.locale].data.unshift(data);
				}
			}

			return {
				chats,
			};
		}

		case "SET_CHAT_COUNT": {
			const { chats } = s;

			const { country } = getUrlParams("?" + params.params);

			if (!chats[country]) {
				chats[country] = {
					data: [],
					count: 0,
					limit: false,
				};
			}

			if (data >= 0) {
				chats[country].count = data || 0;
			}

			return {
				chats,
			};
		}

		case "FETCH_CHAT": {
			const { chats } = s;

			const { limit, country, get } = getUrlParams("?" + params.params);

			if (!chats[country]) {
				chats[country] = {
					data: [],
					count: 0,
					limit: false,
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
				chats,
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
				chatLimit,
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
				news,
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
					data.map((i) => {
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
				activityLimit,
			};
		}

		case "SET_MAP_MARKERS": {
			return {
				mapMarkers: data || [],
			};
		}

		case "ADD_MARKER": {
			const { markers } = s;

			const { locale } = params.data;

			const { ID, fields_updated } = data || {};

			fields_updated.ID = ID;

			if (locale && !markers[locale]) {
				markers[locale] = {
					a: { 1: [] },
					paging: 0,
					page: 1,
				};
			}

			markers[locale || "all"].a[1].unshift(fields_updated);

			return {
				markers,
			};
		}

		case "MODIFY_MARKER": {
			const { markers } = s;
			const { modify, ID, locale, page } = params.data;

			const kk = locale || "all";

			if (!markers[kk]) {
				markers[kk] = {
					a: { [page]: [] },
					paging: 0,
					page: 1,
				};
			}

			const index = markers[kk].a[page].findIndex((i) => i.ID === ID);

			if (index >= 0) {
				markers[kk].a[page][index] = mergeDeep(
					markers[kk].a[page][index],
					modify
				);
			}

			return {
				markers,
			};
		}

		case "DELETE_MARKER": {
			const { markers } = s;
			const { ID, locale, page } = params.data;

			const kk = locale || "all";

			const index = markers[kk].a[page].findIndex((i) => i.ID === ID);

			if (index >= 0) {
				markers[kk].a[page].splice(index, 1);
			}

			return {
				markers,
			};
		}

		case "UPDATE_LOCATION": {
			const { markers } = s;
			const { address, ID, locale, page } = params.data;

			if (address.locale && locale) {
				const inn = markers[locale]
					? markers[locale].a[page].findIndex((i) => i.ID === ID)
					: false;

				if (inn >= 0 && inn !== false) {
					const meta_data = {
						...((markers[locale].a[page][inn] &&
							markers[locale].a[page][inn].meta_data) ||
							{}),
						...address.meta_data,
					};

					markers[locale].a[inn] = {
						...markers[locale].a[page][inn],
						...address,
						meta_data,
					};
				} else {
					const inn2 = markers["all"]
						? markers["all"].a[page].findIndex((i) => i.ID === ID)
						: false;

					if (inn2 >= 0 && inn2 !== false) {
						const meta_data = {
							...markers["all"].a[page][inn2].meta_data,
							...address.meta_data,
						};

						markers["all"].a[page][inn2] = {
							...markers["all"].a[page][inn2],
							...address,
							meta_data,
						};
					}
				}
			}

			return {
				markers,
			};
		}

		case "SET_MARKERS_PAGING": {
			const { markers } = s;
			const { locale } = getUrlParams("?" + params.params);

			if (data >= 0) {
				if (!markers[locale]) {
					markers[locale] = {
						a: {},
						paging: 0,
						page: 1,
					};
				}

				markers[locale].paging = data ? parseInt(data) : 0;
			} else {
				return {};
			}

			return { markers };
		}

		case "SET_MARKERS_ADMIN": {
			const { markers } = s;
			const { locale, page } = getUrlParams("?" + params.params);

			if (data && data instanceof Array) {
				if (!markers[locale]) {
					markers[locale] = {
						a: {
							[page]: [],
						},
						paging: 0,
						page: 1,
					};
				}

				markers[locale].a[page] = data;

				data.map((n) => {
					if (!markers[n.locale])
						markers[n.locale] = {
							a: {
								1: [],
							},
							paging: 0,
							page: 1,
						};

					markers[n.locale].a[1].push(n);
					return false;
				});
			} else {
				return {};
			}

			return { markers };
		}

		case "RESET_MARKERS_ADMIN": {
			const { markers } = s;
			const { locale } = getUrlParams("?" + params.params);

			if (data && data instanceof Array) {
				markers[locale].a = [];
				markers[locale].page = 1;

				markers[locale].a[1] = data;

				if (locale === "all") {
					data.map((n) => {
						if (!markers[n.locale])
							markers[n.locale] = {
								a: {
									1: [],
								},
								paging: 0,
								page: 1,
							};

						markers[n.locale].a[1].push(n);
						return false;
					});
				}
			} else {
				return {};
			}

			return { markers };
		}

		case "MODIFY_MEMBERS": {
			const { members } = s;
			const { modify, ID, page } = params.data;

			const index = members.a[page].findIndex((i) => i.ID === ID);

			if (index >= 0) {
				members.a[page][index] = mergeDeep(
					members.a[page][index],
					modify
				);
			}

			return {
				members,
			};
		}

		case "DELETE_MEMBERS": {
			const { members } = s;
			const { ID, page } = params.data;

			const index = members.a[page].findIndex((i) => i.ID === ID);

			if (index >= 0) {
				members.a[page].splice(index, 1);
			}

			return {
				members,
			};
		}

		case "SET_MEMBERS_PAGING": {
			const { members } = s;

			if (data >= 0) {
				members.paging = data ? parseInt(data) : 0;
			} else {
				return {};
			}

			return { members };
		}

		case "SET_MEMBERS_ADMIN": {
			const { members } = s;
			const { page } = getUrlParams("?" + params.params);

			if (data && data instanceof Array) {
				members.a[page] = data;
			} else {
				return {};
			}

			return { members };
		}

		case "RESET_MEMBERS_ADMIN": {
			const { members } = s;

			if (data && data instanceof Array) {
				members.a = [];
				members.page = 1;
				members.a[1] = data;
			} else {
				return {};
			}

			return { members };
		}

		case "UPDATE_OPTION": {
			const { options } = s;
			const { key, value } = params.data;

			if (!key) return {};

			options[key] = value || {};

			return {
				options,
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
	newsLimit: { EARTH: false },
	news: {
		EARTH: [],
	},
	mk: [],
	mapMarkers: [],
	markers: {
		all: {
			a: {},
			paging: 0,
			page: 1,
		},
	},
	members: {
		a: {},
		paging: 0,
		page: 1,
	},
	countries: {
		a: {},
	},
};
