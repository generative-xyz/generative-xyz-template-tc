const config = require("./webpack.config")

const CopyPlugin = require("copy-webpack-plugin")
const path = require("path")
const ZipPlugin = require('zip-webpack-plugin');

module.exports = {
    ...config,
    mode: "production",
    plugins: [
        ...config.plugins,
        new CopyPlugin({
            patterns: [
                {
                    from: "public",
                    filter: async (filePath) => {
                        return path.basename(filePath) !== "index.html"
                    }
                }
            ]
        }),
        new ZipPlugin({
            filename: 'project.zip',
        })
    ]
}