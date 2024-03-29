const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let mode = "development";
 
if (process.env.NODE_ENV === "production") {
  mode = "production";
}
 
module.exports = {
  mode: mode,
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    static: "./src",
    proxy: [
      {
        context: ["/api"],
        target: "http://localhost:8081",
        // pathRewrite: { "^/api": "/api/" },
      },
    ],
  },
};