const webpack = require('webpack');
const chalk = require('chalk');
const moment = require('moment');

const HtmlWebpackPlugin = require('html-webpack-plugin');

let ENV = process.env.npm_lifecycle_event;

module.exports = {

    entry: {
        vendor: [
            'angular',
            'angular-aria',
            'angular-animate',
            'angular-messages',
            'angular-material'
        ],
        app: './src/app/app.module.ts'
    },
    module: {
        rules: [{
                test: /\.ts$/,
                enforce: "pre",
                use: "tslint-loader"
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: 'html-loader?interpolate'
            }
        ]
    },

    plugins: [

        new webpack.LoaderOptionsPlugin({
            options: {
                tslint: {
                    emitErrors: true,
                    failOnHint: true
                },
                sassLoader: {},
                context: '',
                resolve: {}
            }
        }),
        new webpack.DefinePlugin({
            __ENV: JSON.stringify(ENV)
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        })
    ],
    resolve: {
        extensions: [".webpack.js", ".web.js", '.ts', '.tsx', '.js', '.jsx', '.json']
    }
};