let dotenv = require('dotenv').config({path: __dirname + '/.env'});
let webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');


module.exports = {
    devtool: 'inline-source-map',
    entry: { index: path.resolve(__dirname, "assets/js", "portfolio.js") },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    },
                    {
                        loader: 'ejs-html-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: ["babel-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve("index.html"),
            apiUrl: `https://maps.googleapis.com/maps/api/js?key=${process.env.maps_key}&callback=initMap`,
        }),
        new webpack.DefinePlugin({
            "process.env": dotenv.parsed
        })
    ]
}
