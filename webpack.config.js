const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');


module.exports = {
    devtool: 'inline-source-map',
    entry: { index: path.resolve(__dirname, "assets/js", "portfolio.js") },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve("index.html")
        })
    ]
}