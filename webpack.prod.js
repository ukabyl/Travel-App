const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const configs = {
    entry: path.join(__dirname, '/src/public/js/index.js'),
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\/.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png|svg|jpeg)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(__dirname, '/src/public/index.html'),
            filename: 'index.html'
        }),
        new WorkboxPlugin.GenerateSW()
    ]
};

module.exports = configs;