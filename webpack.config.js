const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");

const proxyUrl = "http://localhost:3000/";

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".jsx", ".js", ".json"],
        alias: {
            store: path.join(__dirname, "src", "store"),
            actions: path.join(__dirname, "src", "store", "actions"),
            reducers: path.join(__dirname, "src", "reducers"),
            components: path.join(__dirname, "src", "components"),
            containers: path.join(__dirname, "src", "containers"),
            less: path.join(__dirname, "src", "less")
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
                use: ["babel-loader", "eslint-loader"]
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: [{ loader: "css-loader" }, { loader: "less-loader" }],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: "file-loader"
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: "file-loader"
            }
        ]
    },
    devServer: {
        port: 7000,
        contentBase: path.resolve(__dirname, "public"),
        hot: true,
        proxy: {
            "/api/**": {
                target: proxyUrl,
                secure: false,
                logLevel: "debug",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html")
        }),
        new ExtractTextPlugin("style.css"),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};
