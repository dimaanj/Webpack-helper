const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: 'development',
  entry: {
    bundle: "./src/index.js", // Bundle with our code
    vendor: ["react", "react-dom"], // Vendor libraries we want make in separate bundles
  },
  output: {
    filename: "[name].[hash].js", // [name] - name of the entry (bundle),
    // [checksum] or [hash] - to cache different bundles from update when developing (doing changes in the files)
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      // To split up (разделить) js code to different bundles.
      chunks: "all", // Now bundle with our code will be cleaned up
    }, // from vendors imports (2mb ~> 100kb)
    minimizer: [new UglifyjsWebpackPlugin()], // to minimize file size
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // html template we want to use
    }),
    new webpack.HotModuleReplacementPlugin(), // for hot module replacement option of devServer
  ],
  devServer: {
    contentBase: [
      path.join(__dirname, "dist"),
      // path.join(__dirname, 'assets') // we can serve different folders if needed
    ],
    compress: true, // compress files to gzip to increase download speed
    port: 9000,
    disableHostCheck: false, // by default true, it is not recomended,
    // because it makes app vulnerable to DNS rebinding attacks
    headers: {
      "X-Custom-header": "custom", // this requires apps with authentication
      // useful config obj
    },
    open: true, // open the browser after server had been started
    hot: true, // hot module replacement
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ['syntax-dynamic-import']
          },
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(png|jpg)$/,
        use: [{ loader: "url-loader" }],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] }
};
