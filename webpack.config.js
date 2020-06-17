const HtmlWebpackPlugin = require("html-webpack-plugin"); // 引入html
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 引入css
const path = require("path"); // 路径
const base = require("./webpack.config.base.js");

module.exports = {
  ...base,
  mode: "development",

  // 引入css
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
