const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    bundle: './src/index.jsx', // Bundle with our code
    vendor: ['react', 'react-dom'], // Vendor libraries we want make in separate bundles
  },
  output: {
    filename: '[name].[hash].js', // [name] - name of the entry (bundle),
    // [checksum] or [hash] - to cache different bundles
    // from update when developing (doing changes in the files)
    path: path.resolve(__dirname, 'dist'),
    // where you uploaded your bundled files. (Relative to server root)
    // needs for react-router-dom
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      // To split up (разделить) js code to different bundles.
      chunks: 'all', // Now bundle with our code will be cleaned up
    }, // from vendors imports (2mb ~> 100kb)
    minimizer: [], // to minimize file size
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // html template we want to use
    }),
    new webpack.HotModuleReplacementPlugin(), // for hot module replacement option of devServer
    new webpack.DefinePlugin({
      'process.env.SERVICE_URL': JSON.stringify('http://localhost:8080/api'),
    }),
  ],
  devServer: {
    contentBase: [
      path.join(__dirname, 'dist'),
      // path.join(__dirname, 'assets') // we can serve different folders if needed
    ],
    compress: true, // compress files to gzip to increase download speed
    port: 9001,
    disableHostCheck: false, // by default true, it is not recomended,
    // because it makes app vulnerable to DNS rebinding attacks
    headers: {
      'X-Custom-header': 'custom', // this requires apps with authentication
      // useful config obj
    },
    open: true, // open the browser after server had been started
    hot: true, // hot module replacement
    historyApiFallback: true, // needs for react-router-dom
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.(png|jpg)$/,
        use: [{ loader: 'url-loader' }],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
};
