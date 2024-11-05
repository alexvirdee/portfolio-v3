let dotenv = require('dotenv').config({ path: __dirname + '/.env' });
let webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: { index: path.resolve(__dirname, 'assets/js', 'portfolio.js') },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `index.html`,
      filename: `index.html`,
      apiUrl: `https://maps.googleapis.com/maps/api/js?key=${process.env.maps_key}&callback=initMap&libraries=marker&v=beta&loading=async`,
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
        removeRedundantAttributes: false,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': dotenv.parsed,
    }),
  ],
};
