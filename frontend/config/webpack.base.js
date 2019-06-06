const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

require("dotenv").config();
const { NODE_ENV } = process.env;

const PROJECT_ROOT = require("./root");

module.exports = {
    entry: path.resolve(PROJECT_ROOT, "index.tsx"),
    resolve: {
        extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
        plugins: [new TsconfigPathsPlugin({ configFile: "tsconfig.json" })],
        alias: {
            assets: path.join(PROJECT_ROOT, "assets"),
            vendor: path.join(PROJECT_ROOT, "vendor"),
            less: path.join(PROJECT_ROOT, "less")
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: "awesome-typescript-loader"
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
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
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(PROJECT_ROOT, "index.html")
        }),
        new CleanWebpackPlugin()
    ],
    optimization: {
        namedModules: true
    }
};
