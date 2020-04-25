const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

require("webpack");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  }, //파일확장자생략
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  }, //빌드된 파일들이 어디로 뱉어질지 정함.
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      showErrors: true, // dev-server error 발생 시 브라우저에 에러 노출 여부
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    inline: true,
    hot: true, //저장할 때마다 새롭게 번들링
    open: true,
  },
};
