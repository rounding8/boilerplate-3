
const merge              = require('webpack-merge');
const path               = require('path');
const webpack            = require('webpack');
const WebpackShellPlugin = require('webpack-shell-plugin');

const common = require('./common');

module.exports = merge(common, {
  devtool: 'source-map',
  devServer: {
    compress           : true,
    historyApiFallback : true,
    port               : 3000
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new WebpackShellPlugin({
      onBuildEnd: 'echo \nDemo #3 ∞ React + webpack Application v2 🍽  is running @ http://localhost:3000\n'
    })
  ]
});
