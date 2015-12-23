var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry:{
    main:[
      './src/main.js'
    ]
  },
  output: {
    filename: './public/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query:{
          presets:['react','es2015']
        }
      }
    ]
  }
}
