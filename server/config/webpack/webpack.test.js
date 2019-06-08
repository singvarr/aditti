const path = require("path");
const merge = require("webpack-merge");
const WebpackShellPlugin = require("webpack-shell-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const baseConfig = require("./webpack.base");
const PROJECT_ROOT = require("./root");

module.exports = merge(baseConfig, {
    mode: "development",
    entry: path.join(PROJECT_ROOT, "test", "index.ts"),
    output: {
        path: path.resolve(PROJECT_ROOT, "dist", "test"),
        filename: "index.spec.js"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new WebpackShellPlugin({
            onBuildEnd: "mocha dist/test/**/*.spec.js"
        })
    ]
});
