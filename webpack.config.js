const HtmlWebpackPlugin = require("html-webpack-plugin"); // 引入html
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 引入css
const path = require("path"); // 路径

module.exports = {
  mode: "development",
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
    new MiniCssExtractPlugin({
      // css
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),
  ],
  // 引入css
  module: {
    rules: [
      {
        test: /\.css$/i, // 判断文件后缀是否有.css
        // 抽离css文件
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/public/path/to/",
            },
          },
          "css-loader",
        ],
        // style-loader将css加入head里面，渲染样式
        // css-loader加载css文件，转译成可读格式
        // use: ["style-loader", "css-loader"],
      },
    ],
  },
};
