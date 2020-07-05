const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlaugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const configs = {
    entry: path.resolve(__dirname, 'app/client/scripts/index.js'),
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|svg|jpeg)$/,
                loader: 'file-loader'
            }
        ]
    },
    devServer: {
        compress: true,
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 3000,
        contentBase: path.resolve(__dirname, 'app/client/views/'),
        watchContentBase: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000/api/',
                secure: false
            }
        },
    },
    plugins: [
        new HTMLWebpackPlaugin({
            template: path.resolve(__dirname, 'app/client/views/index.html'),
            filename: './index.hmtl'
        }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
};

module.exports = configs;