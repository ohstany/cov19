import React, { createContext, useEffect, useReducer, useState } from "react";
import bpis from "api";

import { withRouter } from "next/router";

import { root_store_reducer, root_store_initial_state } from "./reducers";

import { rootActions } from "./actions";

import getConfig from "next/config";

const { PROTOCOL } = getConfig().publicRuntimeConfig;

const w = { device: "pc" };

if (typeof window !== "undefined") {
	w.device = window.innerWidth > 768 ? "pc" : "mobile";
	document.body.classList.add(w.device);
}

// common global context
const RootContext = createContext({});

const finalizeStore = async (
	{ store, actions, reducer },
	single,
	{ loginStatus, logout },
	signal
) => {
	const { reduce } = single || {};

	if (!reduce) return false;

	const actionExist = {
		...(actions[reduce] || {}),
		...single
	};

	if (!actionExist.action || actionExist.api === false) {
		return reducer(store, {
			reduce,
			data: actionExist.data || false
		});
	}

	return reducer(
		store,
		{
			reduce,
			data: await bpis(actionExist, signal, {
				logout,
				loginStatus
			})
		},
		actionExist
	);
};

const setStoreReducer = (state, data) => {
	return { ...state, ...data };
};

const proxy = PROTOCOL + "//cors-anywhere.herokuapp.com/";

const origin =
	(typeof window !== "undefined" && window.location.host) || "cov19.online";

const formating = key => {
	switch (key) {
		case "geoplugin_request":
		case "ip":
			return "ip";

		case "geoplugin_region":
		case "region_name":
			return "region";

		case "geoplugin_regionName":
		case "region_name":
			return "region_name";

		case "geoplugin_city":
		case "city":
			return "city";

		case "geoplugin_regionCode":
		case "region_code":
			return "region_code";

		case "geoplugin_countryCode":
		case "country_code":
			return "country_code";

		case "geoplugin_countryName":
		case "country_name":
			return "country_name";

		case "geoplugin_continentCode":
			return "continent_code";

		case "geoplugin_timezone":
		case "time_zone":
			return "continent_code";

		case "geoplugin_latitude":
		case "latitude":
			return "lat";

		case "geoplugin_longitude":
		case "longitude":
			return "lng";

		default:
			return false;
	}
};

// Context as global app store
export const RootProvider = withRouter(props => {
	const { presets, children, siteMeta } = props;

	root_store_initial_state.settings = presets;

	const [store, setStore] = useReducer(
		setStoreReducer,
		root_store_initial_state
	);

	const actioner = async apiParams => {
		const updater = { api: apiParams, toState: {}, signals: [] };
		/** ARRAY:   if type is array we are able to make several
		 *           api request, reduce them, and then assign all data at once to the state
		 *  OBJECT:  single api request, reduce and state setter
		 */
		if (updater.api instanceof Array) {
			updater.toState = Object.assign(
				{},
				(
					await Promise.all(
						updater.api.map(async (single, x) => {
							updater.signals[x] = new window.AbortController();
							return await finalizeStore(
								{
									store,
									actions: rootActions,
									reducer: root_store_reducer
								},
								single,
								{ loginStatus: store.loginStatus, logout },
								updater.signals[x]
							);
						})
					)
				).reduce((p, n) => Object.assign({}, p, n), {})
			);
		} else {
			updater.signals[0] = new window.AbortController();
			updater.toState = await finalizeStore(
				{ store, actions: rootActions, reducer: root_store_reducer },
				apiParams,
				{ loginStatus: store.loginStatus, logout },
				updater.signals[0]
			);
		}

		if (updater.toState) {
			if (apiParams.set !== false) {
				setStore(updater.toState);
				return updater.toState;
			} else {
				return { data: updater.toState, set: setStore };
			}
		}

		return function clean() {
			updater.signals.map(s => {
				s.abort();
			});
		};
	};

	const [device, _device] = useState("pc");

	const getScreenState = e => {
		e.preventDefault();
		_device(s => {
			const canSet =
				s === "mobile" && window.innerWidth > 768
					? "pc"
					: s === "pc" && window.innerWidth <= 768
					? "mobile"
					: false;
			if (canSet) {
				document.body.classList.remove(
					canSet === "mobile" ? "pc" : "mobile"
				);
				document.body.classList.add(canSet);
			}
			return canSet || s;
		});
	};

	// set user's geo information
	useEffect(() => {
		actioner({
			reduce: "LOGIN",
			method: "POST",
			action: "settings",
			method: "GET"
		});

		if (typeof window !== "undefined") {
			const dev = window.innerWidth > 768 ? "pc" : "mobile";
			_device(dev);
			document.body.classList.add(dev);
			window.addEventListener("resize", getScreenState);

			const geo = JSON.parse(localStorage.getItem("geo") || "{}");
			// const geo = {
			// 	ip: "94.153.30.123",
			// 	country_code: "UA",
			// 	country_name: "Украина",
			// 	region_code: 12,
			// 	region_name: "Seoul",
			// 	city: "Seoul",
			// 	zip_code: "02878",
			// 	time_zone: "Europe/Kiev",
			// 	latitude: 50.4522,
			// 	longitude: 30.5287,
			// 	metro_code: 0
			// };

			if (geo) {
				// console.log("INTERNAL", geo);
				const { region_code, country_code } = geo || {};

				setStore({
					region_code,
					country_code,
					geo
				});
			} else {
				// console.log("EXTERNAL", PROTOCOL);
				fetch(
					PROTOCOL === "https"
						? "https://freegeoip.app/json/"
						: "http://www.geoplugin.net/json.gp"
				)
					.then(res => res.json())
					.then(res => {
						const geo = Object.keys(res).reduce((p, n) => {
							const key = formating(n);

							return Object.assign(
								{},
								p,
								key
									? {
											[key]: res[n]
									  }
									: {}
							);
						}, {});

						const { region_code, country_code } = geo || {};

						geo.lat = parseFloat(geo.lat);
						geo.lng = parseFloat(geo.lng);

						localStorage.setItem("geo", JSON.stringify(geo));

						setStore({
							region_code,
							country_code,
							geo
						});
					});
			}
		}
	}, []);

	const logout = serverStatus => {
		if (store.loginStatus === true && serverStatus === false) {
			api({ action: "apilogout" });
		}

		setStore({
			loginStatus: false
		});
	};

	const api = (data, signal = false) => {
		return bpis(data, signal, {
			logout,
			loginStatus: store.loginStatus
		});
	};

	return (
		<RootContext.Provider
			value={{
				siteMeta,
				origin,
				protocol: PROTOCOL,
				proxy,
				store,
				actioner,
				device,
				setStore,
				logout,
				api
			}}>
			{children}
		</RootContext.Provider>
	);
});

export default RootContext;
