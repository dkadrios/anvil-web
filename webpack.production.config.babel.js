/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack'
import path from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const { UglifyJsPlugin } = webpack.optimize

export default {
  devtool: 'cheap-source-map',
  entry: [path.resolve(__dirname, 'app/main.js')],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: './bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        include: path.resolve(__dirname, 'app'),
        loader: 'style-loader!css-loader!less-loader',
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'app'),
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.js[x]?$/,
        include: path.resolve(__dirname, 'app'),
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.md$/,
        loader: 'html-loader!markdown-loader?gfm=false',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new CopyWebpackPlugin([
      {
        from: './app/index.html',
        to: 'index.html',
      },
    ]),
  ],
}
