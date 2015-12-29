var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  devtool: 'eval-source-map',
  entry:{
    main:[
      './src/components/App.jsx'
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
          presets:['react','es2015', 'stage-0'],
          plugins:['transform-decorators-legacy']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins:[
    new ExtractTextPlugin('./public/style.css', {
      allChunks: true,
      disable: false
    })
  ]
}
