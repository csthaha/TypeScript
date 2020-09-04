const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: {
        'app': './src/index.tsx'
    },
    output: {
        filename: '[name].[chunkhash:8].js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [{
                    loader: 'ts-loader'
                }],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        }),

        // process.env.NODE_ENV 全局化
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": (JSON.stringify(process.env.NODE_ENV + 'env'))
        }),

        //解析sass
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // }
}