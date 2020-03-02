const baseWebpackConfig = require('./webpack.config.base');
const webpackMerge = require('webpack-merge');

const webpackçonfig = webpackMerge(baseWebpackConfig, {
  mode:'development',
  devtool: "eval-source-map",
  stats:{children: false}
})

module.exports = webpackçonfig;