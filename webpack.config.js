const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");

const proxyUrl = "http://localhost:4000/";
const developmentMode = "development";

module.exports = {
    devtool: process.env.NODE_ENV === developmentMode ? "source-map" : "",
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".jsx", ".js", ".json"],
        alias: {
            assets: path.join(__dirname, "src", "assets"),
            vendor: path.join(__dirname, "src", "vendor"),
            store: path.join(__dirname, "src", "store"),
            actions: path.join(__dirname, "src", "store", "actions"),
            constants: path.join(__dirname, "src", "store", "constants"),
            reducers: path.join(__dirname, "src", "store", "reducers"),
            selectors: path.join(__dirname, "src", "store", "selectors"),
            routes: path.join(__dirname, "src", "routes"),
            components: path.join(__dirname, "src", "components"),
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
                test: /\.(less|css)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        { loader: "css-loader" },
                        {
                            loader: "less-loader",
                            options: {
                                paths: [path.join(__dirname, "src")]
                            }
                        }
                    ],
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
        contentBase: path.resolve(__dirname, "src", "assets"),
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
            template: path.resolve(__dirname, "public", "index.html")
        }),
        new ExtractTextPlugin("style.css"),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        })
    ]
};
