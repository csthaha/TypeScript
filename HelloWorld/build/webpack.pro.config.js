const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 在每次成功构建之后，清空 dist 目录
module.exports = {
    plugins: [
        new CleanWebpackPlugin()
    ]
}