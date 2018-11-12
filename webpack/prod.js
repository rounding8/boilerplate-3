
const merge        = require('webpack-merge');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const webpack      = require('webpack');

const common = require('./common');

module.exports = merge(common, {
  devtool: 'none',
  plugins: [
    new MinifyPlugin({ /* minifyOpts */ }, { comments: false }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});
