const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const ImageminPlugin = require("imagemin-webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const configs = {
    entry: path.resolve(__dirname, 'app/client/scripts/index.js'),
    mode: 'production',
    entry: './app/client/scripts/index.js',
    optimization: {
        minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png|svg|jpeg)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff2?|ttf|otf|eot|svg)$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'app/client/views/index.html'),
            filename: 'index.html'
        }),
        new WorkboxPlugin.GenerateSW(),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: false,
            protectWebpackAssets: false
        }),
        new ImageminPlugin({
            bail: false,
            cache: true,
            imageminOptions: {
            plugins: [
            ["gifsicle", { interlaced: true }],
            ["jpegtran", { progressive: true }],
            ["optipng", { optimizationLevel: 5 }],
            [
                "svgo",
                {
                plugins: [
                    {
                    removeViewBox: false
                    }
                ]
                    }
                ]
            ]
            }
        })
    ]
};

module.exports = configs;