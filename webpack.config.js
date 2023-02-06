const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].index.js',
        path: path.resolve(__dirname, 'dist'),
    }, module: {
        rules: [{
            test: /\.css$/i, use: ['style-loader', 'css-loader'],
        },],
    },
    optimization: {
        runtimeChunk: 'single',
    },
    devServer: {
        port: 3000, historyApiFallback: {
            index: 'index.html'
        }
    }
};