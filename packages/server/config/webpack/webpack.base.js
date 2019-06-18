const nodeExternals = require("webpack-node-externals");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
    target: "node",
    externals: [nodeExternals()],
    resolve: {
        extensions: [".js", ".ts"],
        plugins: [new TsconfigPathsPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "awesome-typescript-loader"
            }
        ]
    }
};
