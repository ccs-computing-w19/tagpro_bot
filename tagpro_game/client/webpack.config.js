const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    main: "./lib/index.js",
    test: "mocha!./test/index.js"
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
	test: /\.m?js$/,
	exclude: /(node_modules|bower_components)/,
	use: {
	  loader: 'babel-loader',
	  options: {
	    presets: ['@babel/preset-env']
	  }
	}
      },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loader: "style!css!sass" },
    ]
  }, 
  resolve: {
    extensions: ['.js', '.json', '.scss', '.css']
  }
};
