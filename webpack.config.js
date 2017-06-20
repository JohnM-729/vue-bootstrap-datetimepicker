'use strict';

const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: __dirname,
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.jsx', '.json', '.vue']
  },
  entry: './src/index.js',
  // Don't include them into library build
  externals: [
    'vue',
    'jquery',
    'moment',
    'moment-timezone',
    'eonasdan-bootstrap-datetimepicker',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),// where to store build files
    filename: "vue-bootstrap-datetimepicker.min.js", // build file name
    library: 'VueBootstrapDatetimePicker',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['./dist']),
  ],
  devtool: false,
  target: 'web',
  performance: {
    hints: false
  }
};