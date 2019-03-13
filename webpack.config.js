const webpack = require("webpack");
require("dotenv").config();
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { DEV_SERVER_PORT, NODE_ENV, PORT } = process.env;

const PROXY_URL = `http://localhost:${PORT}/`;
const DEVELOPMENT_MODE = "development";

module.exports = {
    mode: NODE_ENV,
    devtool: NODE_ENV === DEVELOPMENT_MODE ? "source-map" : false,
    entry: path.resolve(__dirname, "frontend", "index.js"),
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
        alias: {
            assets: path.join(__dirname, "frontend", "assets"),
            vendor: path.join(__dirname, "frontend", "vendor"),
            fixtures: path.join(__dirname, "frontend", "fixtures"),
            store: path.join(__dirname, "frontend", "store"),
            actions: path.join(__dirname, "frontend", "store", "actions"),
            constants: path.join(__dirname, "frontend", "store", "constants"),
            reducers: path.join(__dirname, "frontend", "store", "reducers"),
            selectors: path.join(__dirname, "frontend", "store", "selectors"),
            routes: path.join(__dirname, "frontend", "routes"),
            components: path.join(__dirname, "frontend", "components"),
            less: path.join(__dirname, "frontend", "less")
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                include: path.resolve(__dirname, "frontend"),
                use: "awesome-typescript-loader"
            },
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "frontend"),
                exclude: /node_modules/,
                use: ["babel-loader", "eslint-loader"]
            },
            {
                test: /\.(less|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "less-loader",
                        options: {
                            paths: [path.join(__dirname, "frontend")]
                        }
                    }
                ]
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
        port: DEV_SERVER_PORT,
        contentBase: path.resolve(__dirname, "frontend", "assets"),
        hot: true,
        proxy: {
            "/api/**": {
                target: PROXY_URL,
                secure: false,
                logLevel: "debug",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        },
        publicPath: "/",
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "frontend", "index.html")
        }),
        new MiniCssExtractPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
        })
    ]
};
