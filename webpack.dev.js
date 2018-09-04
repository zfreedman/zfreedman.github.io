const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",

  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html"
    })
  ]
});
