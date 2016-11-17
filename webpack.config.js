var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
  entry: [
    // 'react-hot-loader/patch',
    // 'webpack-dev-server/client?http://0.0.0.0:3000',
    // 'webpack/hot/only-dev-server',
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
    path.resolve(__dirname,'src/app/entry.js')
  ],
  output: {
    path: BUILD_DIR,
    filename: 'scripts/bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { 
        test: /\.html/, loader: 'file?name=[name].[ext]' 
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      },
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loaders: ['babel']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ]
};

module.exports = config;