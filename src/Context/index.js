import React, { createContext, useEffect, useReducer, useState } from "react";
import bpis from "api";

import { withRouter } from "next/router";

import { root_store_reducer, root_store_initial_state } from "./reducers";

import { rootActions } from "./actions";

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

const protocol =
	typeof window === "undefined" ? "https:" : window.location.protocol;
const proxy = protocol + "//cors-anywhere.herokuapp.com/";

// Context as global app store
export const RootProvider = withRouter(props => {
	const { loginStatus, logout, children } = props;

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
								{ loginStatus, logout },
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
				{ loginStatus, logout },
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
		if (typeof window !== "undefined") {
			const dev = window.innerWidth > 768 ? "pc" : "mobile";
			_device(dev);
			document.body.classList.add(dev);
			window.addEventListener("resize", getScreenState);

			const geo = localStorage.getItem("geo");

			if (geo) {
				console.log("INTERNAL");
				setStore({
					geo: JSON.parse(geo)
				});
			} else {
				console.log("EXTERNAL", protocol);
				fetch(
					protocol === "https:"
						? "https://freegeoip.app/json"
						: "http://www.geoplugin.net/json.gp"
				)
					.then(res => res.json())
					.then(res => {
						const geo = Object.keys(res).reduce(
							(p, n) =>
								Object.assign({}, p, {
									[n.replace("geoplugin_", "")]: res[n]
								}),
							{}
						);

						localStorage.setItem("geo", JSON.stringify(geo));
						setStore({
							geo
						});
					});
			}
		}
	}, []);

	const api = (data, signal = false) => {
		return bpis(data, signal, {
			logout,
			loginStatus: state.loginStatus
		});
	};

	return (
		<RootContext.Provider
			value={{
				protocol,
				proxy,
				store,
				actioner,
				device,
				setStore,
				api
			}}>
			{children}
		</RootContext.Provider>
	);
});

export default RootContext;
