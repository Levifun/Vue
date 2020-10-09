import * as MathUtils from "./js/MathUtils"
//CommonJS模块化
//const {sum,mul} = require("./MathUtils")


//main.js作为入口文件一般不放在js文件夹里

console.log(MathUtils.sum(20, 30));

console.log(MathUtils.mul(10, 20));

//使用webpack打包只需要打包main.js，其他的js模块用import导入
//语法：webpack .\src\main.js .\dist\bundle.js

//依赖css文件，打包时只会打包有关联的文件
require("./css/normal.css")

//依赖vue
import Vue from 'vue'
import App from './vue/App.vue'

new Vue({
    el:'#app',
    template:'<App />',
    components:{
        App
    }
})
//记得在webpack.config.js中配置resolve,防止出现runtime-only的错误
