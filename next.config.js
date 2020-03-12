const withCss = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const withSize = require("next-size");
const withTM = require("next-transpile-modules");
const withPlugins = require("next-compose-plugins");
const envConfig = require("./env.config");

const nextConfig = {
	distDir: "." + process.env.NODE_ENV,
	transpileModules: ["gsap"],
	...envConfig,
	// useFileSystemPublicRoutes: false,

	webpack: (config, options) => {
		config.module.rules.push({
			// shader import support
			test: /\.glsl$/,
			use: [
				{
					loader: "emit-file-loader",
					options: {
						name: "dist/[path][name].[ext]"
					}
				},
				"babel-loader",
				"webpack-glsl-loader"
			]
		});

		if (!options.isServer) {
			const cacheGroups = config.optimization.splitChunks.cacheGroups;

			delete cacheGroups.react;

			cacheGroups.default = false;

			cacheGroups.vendors = {
				name: "vendors",
				test: /[\\/](node_modules|packages)[\\/]/,
				enforce: true,
				priority: 20
			};

			cacheGroups.commons = {
				name: "commons",
				test: /\.(css|scss)$/,
				chunks: "all",
				minChunks: 2,
				enforce: true,
				priority: 10
			};

			config.optimization.splitChunks.cacheGroups = cacheGroups;
		}

		return config;
	}
};

module.exports = withPlugins(
	[
		[
			withCss,
			{
				cssModules: true,
				cssLoaderOptions: {
					sourceMap: true,
					modules: true,
					minimize: true,
					localIdentName: "[local]"
				}
			}
		],
		[
			withSass,
			{
				cssModules: true,
				cssLoaderOptions: {
					sourceMap: true,
					modules: true,
					minimize: true,
					localIdentName: "[local]"
				}
			}
		],
		withTM,
		withImages,
		withSize
	],
	nextConfig
);
