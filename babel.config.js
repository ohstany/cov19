const presets = [
	[
		"next/babel",
		{
			"preset-env": {
				modules: "commonjs",
				targets: {
					browsers: ["last 2 versions", "ie >= 11"]
				}
			}
		}
	]
];

const plugins = [
	"inline-react-svg",
	[
		"module-resolver",
		{
			root: ["./src"]
		}
	]
];

module.exports = api => {
	api.cache(true);

	return {
		presets,
		plugins
	};
};
