/*
  Do not copy/paste this file. It is used internally
  to manage end-to-end test suites.
*/

const NextI18Next = require("next-i18next").default;

const { SUBPATHS } = require("next/config").default().publicRuntimeConfig || {};

const languages = require("./languages.json");

const otherLanguages = Object.keys(languages);

const localeSubpathVariations = {
	none: {},
	foreign: {
		en: "en"
	},
	all: otherLanguages.reduce((p, n) => Object.assign({}, p, { [n]: n }), {})
};

module.exports = new NextI18Next({
	defaultLanguage: "en",
	otherLanguages,
	localeSubpaths:
		localeSubpathVariations[SUBPATHS || process.env.SUBPATHS || "none"]
});
