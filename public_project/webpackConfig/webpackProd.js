const merge = require('webpack-merge');
const appCommonConfig = require('./webpackCommon.js.js');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge.merge( appCommonConfig, {
  plugins: [new CleanWebpackPlugin()],
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../../public'),
    filename: 'app.bundle.js'
  }
});