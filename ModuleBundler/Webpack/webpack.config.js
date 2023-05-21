const path = require("path");
module.exports = {
  entry: "./script.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[hash].js",
  },
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
};
