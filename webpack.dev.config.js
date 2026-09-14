const path = require("path");
const Htmlplugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CSSMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
	// Entry and output
	mode: "development",
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

	devServer: {
		port: 3000,
		open: true,
		hot: true,
	},

	optimization: {
		minimizer: [new CSSMinimizerPlugin()],
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
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "fonts"),
					to: path.resolve(__dirname, "dist/assets/fonts"),
				},
			],
		}),
		new MiniCssExtractPlugin({
			filename: "[name][contenthash].css",
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
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
			{
				test: /\.(scss)$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.(ttf)$/i,
				type: "asset/resource",
			},
		],
	},
};
