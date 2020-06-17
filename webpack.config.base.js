const HtmlWebpackPlugin = require("html-webpack-plugin"); // 引入html
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 引入css
const path = require("path"); // 路径

module.exports = {
  entry: "./src/index.js",
  // webpack-dev-server
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  output: {
    filename: "[name].[contenthash].js",
  },
  // 创建html
  plugins: [
    new HtmlWebpackPlugin({
      // html
      title: "my app", // 标题
      filename: "index.html", // 创建文件名
      template: "./src/index.html", // 不使用自动生成，用自己的html
    }),
  ],
};
