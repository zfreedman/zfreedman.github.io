const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  
  // output: {
  //   filename: "[name].bundle.js",
  //   path: path.resolve(__dirname, "dist")
  // },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, ".")
  },

  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.(png|svg|jpg|gif)$/, use: "file-loader" },
    ]
  }
}
