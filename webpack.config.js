const path = require("path");
const Htmlplugin = require("html-webpack-plugin");

module.exports = {
	// Entry and output
	entry: {
		index: "./index.js",
		newIndex: {
			import: "./index-copy.js",
			filename: "newIndexCustom.bundle.js",
		},
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "assets/[hash][ext]",
		clean: true,
	},

	// Plugin
	plugins: [
		new Htmlplugin({
			template: "./index.html",
			chunks: ["index"],
			filename: "index.html",
		}),
		new Htmlplugin({
			template: "./newtest.html",
			chunks: ["newIndex"],
			filename: "newIndex.html",
		}),
	],

	// Loaders
	module: {
		rules: [
			{
				test: /\.(png|jpg|jpeg|gif|webp|avif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(css)$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(scss)$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(ttf)$/i,
				type: "asset/resource",
			},
		],
	},
};
