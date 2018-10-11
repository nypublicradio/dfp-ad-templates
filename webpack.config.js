const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname)],
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {loader: 'postcss-loader'},
          {loader: 'sass-loader'},
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/desktop-and-mobile-splash.html',
      filename: './desktop-and-mobile-splash.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/desktop-splash-mobile-inset.html',
      filename: './desktop-splash-mobile-inset.html',
    }),
    new CompressionPlugin(),

    // // Uncomment this plugin to analyze the bundle size; our goal is to keep
    // // this bundle as small as possible.
    // new BundleAnalyzerPlugin({
    //   analyzerHost: '0.0.0.0'
    // }),
  ],
};
