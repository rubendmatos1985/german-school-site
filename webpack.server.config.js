const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
	target: 'node',
	entry: './server/index.js',
	mode: "development",
	output: {
		filename: 'server.bundle.js',
		path: path.resolve(__dirname, 'server')
	},

	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: '/node_modules/',
			}
		]
	},
	externals: [ webpackNodeExternals() ]
};
