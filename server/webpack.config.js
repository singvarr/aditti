const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const WebpackShellPlugin = require("webpack-shell-plugin");
const nodeExternals = require("webpack-node-externals");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

require("dotenv").config();

const { NODE_ENV } = process.env;

const DEVELOPMENT_MODE = "development";
const OUTPUT_DIR = NODE_ENV === DEVELOPMENT_MODE ? "dev" : "prod";

const basePlugins = [new CleanWebpackPlugin()];

module.exports = {
    mode: NODE_ENV,
    target: "node",
    externals: [nodeExternals()],
    devtool: NODE_ENV === DEVELOPMENT_MODE ? "source-map" : false,
    entry: path.resolve(__dirname, "index.ts"),
    output: {
        path: path.resolve(__dirname, "dist", OUTPUT_DIR),
        filename: "index.js"
    },
    resolve: {
        extensions: [".js", ".ts"],
        plugins: [new TsconfigPathsPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [/node_modules/, path.join(__dirname, "..", "tests")],
                use: {
                    loader: "awesome-typescript-loader",
                    options: {
                        errorsAsWarnings: true
                    }
                }
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
    plugins:
        NODE_ENV !== DEVELOPMENT_MODE
            ? basePlugins
            : [
                ...basePlugins,
                new WebpackShellPlugin({
                    onBuildEnd: "nodemon ./dist/dev"
                })
            ]
};
