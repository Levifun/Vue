//运行时依赖

const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')
//配置合并

module.exports = webpackMerge(baseConfig,{
    devServer:{//配置本地服务器，不用每次打包完再查看结果,npm run dev运行于服务器上
        contentBase:'./dist',//服务于哪个文件夹
        inline:true,//实时监听
        port:8081//指定端口
    }
    //结束本地服务器运行使用ctrl+c提示后按y+回车
})