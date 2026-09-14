const path = require("path");

module.exports = {
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
