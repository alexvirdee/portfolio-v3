const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: { index: path.resolve(__dirname, "assets/js", "portfolio.js") },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve("index.html")
        })
    ]
};