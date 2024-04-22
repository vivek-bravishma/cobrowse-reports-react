var path = require("path");

module.exports = {
	mode: "production",
	entry: "./src/index.js",
	output: {
		path: path.resolve("build"),
		filename: "index.js",
		libraryTarget: "commonjs2",
	},
	resolve: {
		extensions: ["", ".js", ".jsx"],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.css$/,
				// loader: "style-loader!css-loader"
				use: ["style-loader", "css-loader"],
			},
		],
	},
	externals: {
		react: "react",
	},
};
