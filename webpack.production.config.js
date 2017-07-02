const webpack = require('webpack'),
    path = require('path'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    devtool: 'cheap-source-map',
    entry: [path.resolve(__dirname, 'app/main.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: './bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                include: path.resolve(__dirname, 'app'),
                loader: 'style-loader!css-loader!less-loader'
            }, {
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
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new CopyWebpackPlugin([
            { from: './app/index.html', to: 'index.html' }/*,
            { from: './app/main.css', to: 'main.css' }*/
        ])
    ]
};
