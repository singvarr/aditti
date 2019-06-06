const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
require("dotenv").config();
const baseConfig = require("./webpack.base");
const PROJECT_ROOT = require("./root");

const { DEV_SERVER_PORT, PORT } = process.env;

const PROXY_URL = `http://localhost:${PORT}/`;

module.exports = merge(baseConfig, {
    mode: "development",
    devtool: "source-map",
    output: {
        path: path.resolve(PROJECT_ROOT, "dist", "dev")
    },
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "less-loader",
                        options: {
                            paths: [path.join(PROJECT_ROOT, "frontend")]
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        port: DEV_SERVER_PORT,
        contentBase: path.resolve(PROJECT_ROOT, "frontend", "assets"),
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
    plugins: [new webpack.HotModuleReplacementPlugin()]
});
