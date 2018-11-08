const path = require('path');
	
	HtmlWebpackPlugin = require("html-webpack-plugin");
	ExtractTextPlugin = require("extract-text-webpack-plugin");
	webpack = require('webpack');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: path.resolve(__dirname, 'src'),
				use: 'babel-loader'
			},
			{
            	test: /\.less$/,
	            use: ExtractTextPlugin.extract({
	                use: [
	                	{loader: "css-loader"}, 
	                	{loader: "less-loader"}
	                ],
	                fallback: "style-loader"
	            })
        	},
        	{
        		test: /\.(png|svg|jpg|gif)$/,
        		use: 'file-loader'
        	},
        	{
        		test: /\.(woff|woff2|eot|ttf|otf)$/,
        		use: 'file-loader'
        	}
		]	
	},
	devServer: {
		port: 7000,
		contentBase: path.resolve(__dirname, "public"),
		hot: true,
		proxy: {
			"/api/**": {
				target: "http://localhost:3000/",
				secure: false,
				logLevel: "debug",
				changeOrigin: true,
				pathRewrite: {
					"^/api": ""
				},
			}
		}
	},
	plugins: [
    	new HtmlWebpackPlugin({
      		template: path.resolve(__dirname, 'public', 'index.html'),
    	}),
    	new ExtractTextPlugin("style.css"),
    	new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
  	]
};
