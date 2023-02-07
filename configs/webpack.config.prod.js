const config = require("./webpack.config")

const CopyPlugin = require("copy-webpack-plugin")
const path = require("path")
const FileManagerPlugin = require('filemanager-webpack-plugin');

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
        new FileManagerPlugin({
            events: {
                onEnd: {
                    archive: [
                        {
                            source: 'dist', destination: 'dist/project.zip'
                        }
                    ]
                }
            }
        })
    ],
    performance: {
        hints: 'error',
        maxAssetSize: 20000,
        assetFilter: function (assetFilename) {
            return assetFilename.endsWith('.js');
        },
    },
}