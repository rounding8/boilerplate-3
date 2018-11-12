
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path              = require('path');

const pckg = require('../package.json');

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/index.jsx']
  },
  output: {
    path       : path.resolve('app'),
    filename   : '[name].js',
    publicPath : '/'
  },
  module: {
    rules: [
      {
        test : /\.css$/,
        use  : ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      },
      {
        test    : /\.js|\.jsx$/,
        exclude : [/node_modules/, /app/],
        loader  : 'babel-loader',
        options : {
          cacheDirectory : true,
          plugins        : ['transform-class-properties']
        }
      }
    ]
  },
  resolve: {
    extensions : ['.css', '.js', '.jsx'],
    modules    : ['node_modules', 'public', 'src']
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      title    : `Demo #3 ∞ React + webpack Application v2 🍽  v${pckg.version}`,
      template : 'public/html/index.html',
      inject   : 'head',
      favicon  : 'public/icon/favicon.ico',
      chunks   : ['app']
    })
  ]
}
