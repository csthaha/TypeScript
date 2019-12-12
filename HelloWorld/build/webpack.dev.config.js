module.exports = {
    devtool: 'cheap-module-eval-source-map',
    // chep表示： source-map 会忽略文件的列信息，列信息时没有用
    // module: 定位到 ts 的源码，而不是打包后的代码
    // eval-source-map: 将 spurce-map 以 data url 的形式打包到文件中 
    devServer: {
        port: 8080
    }
}