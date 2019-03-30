const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

require("dotenv").config();

const { NODE_ENV, DB_USER, DB_PASSWORD } = process.env;

const DEVELOPMENT_MODE = "development";

const OUTPUT_DIR = NODE_ENV === DEVELOPMENT_MODE ? "dev" : "prod";

module.exports = {
    mode: NODE_ENV,
    target: "node",
    externals: [nodeExternals()],
    devtool: NODE_ENV === DEVELOPMENT_MODE ? "source-map" : false,
    entry: path.resolve(__dirname, "server", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist", OUTPUT_DIR, "server"),
        filename: "index.js"
    },
    resolve: {
        extensions: [".ts", ".tsx"],
        alias: {
            config: path.join(__dirname, "server", "config"),
            fixtures: path.join(__dirname, "server", "fixtures"),
            models: path.join(__dirname, "server", "models"),
            routes: path.join(__dirname, "server", "routes")
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                include: path.resolve(__dirname, "server"),
                use: "awesome-typescript-loader"
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
            "process.env.DB_USER": JSON.stringify(DB_USER),
            "process.env.DB_PASSWORD": JSON.stringify(DB_PASSWORD)
        })
    ]
};
