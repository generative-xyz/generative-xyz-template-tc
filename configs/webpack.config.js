const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

var glob = require("glob");
console.log('list script: ', glob.sync("./src/*.js"));

module.exports = {
    entry: glob.sync("./src/*.js"),
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "index.js",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            inject: "body",
            publicPath: "./"
        })
    ],
    performance: {
        hints: 'error',
        maxAssetSize: 5000,
        assetFilter: function (assetFilename) {
            return assetFilename.endsWith('.js');
        },
    },
    optimization: {
    },
}