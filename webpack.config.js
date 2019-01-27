const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

const proxyUrl = "http://localhost:4000/";
const developmentMode = "development";

module.exports = {
    mode: process.env.NODE_ENV,
    devtool: process.env.NODE_ENV === developmentMode ? "source-map" : false,
    entry: path.resolve(__dirname, "frontend", "index.js"),
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".jsx", ".js", ".json"],
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
        port: 7000,
        contentBase: path.resolve(__dirname, "frontend", "assets"),
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
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        })
    ]
};
