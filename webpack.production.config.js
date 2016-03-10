
var devConfig = require('./webpack.config');

var prodConfig = {};

Object.keys(devConfig).forEach(function(key) {
  prodConfig[key] = devConfig[key];
});

prodConfig.entry = [
	 './public/js/index.js'
];

delete prodConfig.devtool;

prodConfig.plugins = [];

module.exports = prodConfig;