const path = require('path')
//当引入node相关内容时需要在控制台输入npm init初始化生成package.json文件
//再输入npm install安装引入node的相关文件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
//vue-loader的15以上版本都需要配置这个插件

//在package.json中配置运行npm run build时自动打包，只要配置了就优先运行本地webpack而不是全局webpack

module.exports = {
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),//使用node里的path对象动态获取路径
        //__dirname是node里自带的，能够获取当前文件所在位置的路径，后面接‘dist’就是
        //在当前文件路径后拼接‘/dist’,获取后得到的是绝对路径
        filename:'bundle.js',
        publicPath:"dist/"
        //publicPath加上后涉及到url的时候都会在路径前加上publicPath的路径
    },
    //loader上官网文档查找
    //打包css文件需要安装css-loader和style-loader
    module: {
        rules: [
            //加载css文件
            {
                test: /\.css$/,//正则表达式
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
                //css-loader只负责将css文件打包，不负责解析
                //style-loader负责将css文件加载到DOM中生效
                //loader的顺序从右向左
            },
            //加载图片
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name:"img/[name].[hash:8].[ext]"//防止生成的图片名字重复,[hash:8]是截取8位hash值，防止图片名重复
                            //加载的图片需要小于设置的限制,文件大小（kb）乘以1024
                            //大于限制的文件会使用file-loader，file-loader不需要额外配置
                            //小于限制的图片会被编译成base64格式
                        }
                    }
                ]
            },
            //es6转换成es5的babel
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            //配置vue-loader
            {
                test:/\.vue$/,
                use:['vue-loader']
            }
        ]
    },
    resolve:{
        extensions:[".js",".css",".vue"],//配置什么类型的文件在import时不需要写后缀
        alias:{//别名
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    //resolve指定vue的位置，指定为2.webpack配置\node_modules\vue\dist\vue.esm.js
    //这个文件里包含runtime-compiler,能够解析template，如果不配置会出现runtime-only错误
    plugins:[
        new VueLoaderPlugin()
        //vue-loader的15以上版本都需要配置这个插件
    ]
}