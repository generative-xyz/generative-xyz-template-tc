const config = require("./webpack.config")

module.exports = {
    ...config,
    mode: "development",
    devServer: {
        hot: false,
        port: 3000,
        open: true,
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
    },
}