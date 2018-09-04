const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",

  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader"
      ]
    }]
  },

  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new MiniCssExtractPlugin({
      // filename: "[name].css",
      // chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html"
    })
  ]
});
