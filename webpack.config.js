const webpack = require('webpack'),
    path = require('path'),
    OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        contentBase: './app',
        port: 8080
    },
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: './bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'app'),
                loader: 'style-loader!css-loader'
            }, {
                test: /\.js[x]?$/,
                include: path.resolve(__dirname, 'app'),
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.md$/,
                loader: 'html-loader!markdown-loader?gfm=false'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ]
};
