const path = require("path");
module.exports = {
  entry: "./script.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // this has to be in reverse order
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  mode: "development",
  devtool: "source-map",
};
