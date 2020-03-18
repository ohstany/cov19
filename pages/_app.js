import "core-js";

if (typeof window !== "undefined") {
	const ua = window.navigator.userAgent;
	if (
		ua.indexOf("MSIE") > 0 ||
		ua.indexOf("Edge") > 0 ||
		ua.indexOf("Trident") > 0
	) {
		require("promise-polyfill/src/polyfill");
		require("abortcontroller-polyfill/dist/polyfill-patch-fetch");
	}
} else {
	require("promise-polyfill");
	require("abortcontroller-polyfill");
}

import React from "react";
import App from "next/app";
// import api from "api";
import RootContext, { RootProvider } from "Context";
import { memoize } from "Library";
import Head from "next/head";
import { appWithTranslation, withTranslation, i18n } from "i18n";

const siteMeta = {
	title: "Коронавирус",
	description: "",
	icon: "coronavirus2.png"
};

const AddToHead = memoize(
	withTranslation("common")(({ t }) => {
		return (
			<Head>
				<link rel="shortcut icon" href={siteMeta.icon} />

				<meta name="msapplication-TileColor" content="#ffffff" />

				<meta
					name="msapplication-config"
					content="/static/favicon/browserconfig.xml"
				/>

				<meta name="theme-color" content="#ffffff" />

				<link
					href="https://fonts.googleapis.com/css?family=Lato&display=swap"
					rel="stylesheet"></link>

				<title>{t("siteTitle")}</title>
			</Head>
		);
	})
);

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};
		let presets = {};

		const isProduction = process.env.NODE_ENV === "production";

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		if (ctx.req && ctx.req.url) {
			presets = {};
			//  await api({
			// 	action: "settings",
			// 	method: "GET"
			// });
		}

		return {
			loaded: true,
			mode:
				ctx.req && !ctx.req.url.includes("/admin") ? "front" : "admin",
			isProduction,
			headers: ctx.req ? ctx.req.headers : {},
			pageProps,
			presets
		};
	}

	render() {
		const {
			t,
			Component,
			pageProps,
			router,
			headers,
			presets
		} = this.props;

		return (
			<RootProvider
				language={i18n.language}
				presets={presets}
				headers={headers}
				siteMeta={siteMeta}
				router={router}>
				<RootContext.Consumer>
					{context => (
						<>
							<AddToHead />
							<Component {...pageProps} context={context} />
						</>
					)}
				</RootContext.Consumer>
			</RootProvider>
		);
	}
}

export default appWithTranslation(MyApp);
