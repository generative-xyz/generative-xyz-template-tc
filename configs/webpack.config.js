const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

let jsIndex = 0; // index js file with order number

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: (pathData) => {
            if (jsIndex == 0) {
                f = '999.index.js'
            } else {
                f = jsIndex + '.index.js';
            }
            jsIndex++;
            return f;
        },
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
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 2000,
            maxSize: 8000,
        }
    },
}