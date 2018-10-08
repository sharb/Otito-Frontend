let webpack = require('webpack');
var path = require('path');

var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/static/js');    // bundle.js path
var SRC_DIR = path.resolve(__dirname, 'src/app/js');                // react application's codebase

console.log(BUILD_DIR)
console.log(SRC_DIR)

var webpack_config = {
  entry: SRC_DIR + '/entry.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundled.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
  	loaders: [
  		{
    		test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
  		}
  	]
  }
};

module.exports = webpack_config;