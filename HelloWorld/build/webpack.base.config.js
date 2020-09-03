const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
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
        })
    ],
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // }
}