const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: path.resolve(__dirname, "../src/index.js"),
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].[fullhash].js",
        chunkFilename: "[name].[chunkhash].js",
        assetModuleFilename: "images/[fullhash][ext][query]"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)$/,
                type: "asset/resource"
            },
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                type: "asset/resource",
                generator: {
                    filename: "fonts/[fullhash][ext][query]"
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/index.html")
        }),
        new webpack.ProvidePlugin({
            "React": "react",
        })
    ],
    /*externals: {
        "react": "React"
    }*/
}