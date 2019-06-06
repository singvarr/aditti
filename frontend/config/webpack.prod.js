const path = require("path");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const baseConfig = require("./webpack.base");
const PROJECT_ROOT = require("./root");

module.exports = merge(baseConfig, {
    mode: "production",
    output: {
        path: path.resolve(PROJECT_ROOT, "dist", "prod"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,

                    "css-loader",
                    {
                        loader: "less-loader",
                        options: {
                            paths: [path.join(PROJECT_ROOT)]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin(), new TerserPlugin()]
    }
});
