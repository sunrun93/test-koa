const baseWebpackConfig = require('./webpack.config.base');
const webpackMerge = require('webpack-merge');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const webpackçonfig = webpackMerge(baseWebpackConfig, {
  mode:'production',
  stats:{children: false, warnings: false},
  optimization:{
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            warnings: false,
            drop_console: false,
            drop_debugger: true,
            dead_code: true
          },
          output:{
            comments: false,
            beautify: false
          },
          mangle: true
        },
        parallel: true,
        sourceMap: false
      })
    ]
  }
})

module.exports = webpackçonfig;