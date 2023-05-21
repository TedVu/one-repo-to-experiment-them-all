const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./script.js",
  module: {
    rules: [
      {
        test: /\.scss$/,
        // this has to be in reverse order
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  mode: "development",
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "template.html",
    }),
  ],
};
