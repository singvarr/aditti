const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const WebpackShellPlugin = require("webpack-shell-plugin");
const merge = require("webpack-merge");
require("dotenv").config();

const baseConfig = require("./webpack.base");
const PROJECT_ROOT = require("./root");

const { NODE_ENV } = process.env;

const DEVELOPMENT_MODE = "development";
const OUTPUT_DIR = NODE_ENV === DEVELOPMENT_MODE ? "dev" : "dist";

const basePlugins = [new CleanWebpackPlugin()];

module.exports = merge(baseConfig, {
    devtool: process.env.NODE_ENV === DEVELOPMENT_MODE ? "source-map" : false,
    entry: path.resolve(PROJECT_ROOT, "index.ts"),
    output: {
        path: path.resolve(PROJECT_ROOT, "dist", OUTPUT_DIR),
        filename: "index.js"
    },
    mode: NODE_ENV,
    module: {
        rules: [
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
    plugins:
        NODE_ENV !== DEVELOPMENT_MODE
            ? basePlugins
            : [
                ...basePlugins,
                new WebpackShellPlugin({
                    onBuildEnd: "nodemon ./dist/dev"
                })
            ]
});
