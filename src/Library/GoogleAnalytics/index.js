import React, { memo, useEffect } from "react";
import ReactGA from "react-ga";

const initCode = "UA-159930655-1";

const domainEnable = ["https://cov19.online"];

const initGA = initCode => {
	ReactGA.initialize(initCode);
};

const logPageView = (url = false) => {
	const page = url || window.location.pathname;
	ReactGA.set({ page });
	ReactGA.pageview(page);
};

export default memo(({ children }) => {
	const host = typeof window !== "undefined" ? window.location.origin : false;

	const url =
		typeof window !== "undefined" ? window.location.pathname : false;

	if (!initCode && domainEnable.indexOf(host) === -1) {
		return <>{children}</>;
	}

	useEffect(() => {
		if (typeof window !== "undefined" && url) {
			if (!window.GA_INITIALIZED) {
				initGA(initCode);
				window.GA_INITIALIZED = true;
			}
			logPageView(url);
		}
	}, [url]);

	return <>{children}</>;
});
