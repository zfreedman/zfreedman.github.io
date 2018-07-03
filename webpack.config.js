// use ES5 in this file
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'index_bundle.js',
    publicPath: "/"
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
      { test: /\.(png|jpg|gif)$/, use: [ "url-loader" ]},
      // https://chriscourses.com/blog/loading-fonts-webpack
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
            }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  mode: process.env.NODE_ENV === "production" ? "production" : "development"
};
