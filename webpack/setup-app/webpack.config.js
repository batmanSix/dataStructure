const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 生成html 页面插件

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    clean: true, // 使用clean 配置可以自定义删除 dist 包
    assetModuleFileName: 'image[contenthash][ext]'
  },
  mode: "development",
  devtool: "inline-source-map", // 开启source-map 排查错误
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "app.html",
    }),
  ],
  devServer: {
    static: "./dist/app.html",
    hot: true,
  },
  // 资源加载 generator 优先级 高于 output的资源优先级

  // inline 资源 用于加载data url 的资源类型

  // source 资源用于导出资源源代码

  // 通用资源类型
  module: {
    rules: [{ test: "/\.png$/" }],
    type: 'static/image',
    generator: {
      filename:  'image/[contenthash][ext]'
    }
  },
};
