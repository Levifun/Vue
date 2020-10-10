//生产时依赖
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
//压缩bundle.js节省空间

const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')
//配置合并

module.exports = webpackMerge(baseConfig,{
    plugins:[
        new uglifyJsPlugin()//压缩bundle.js文件，删除里面的空格和回车，节省空间
    ]
})