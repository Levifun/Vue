import * as MathUtils from "./MathUtils"
//CommonJS模块化
//const {sum,mul} = require("./MathUtils")

console.log(MathUtils.sum(20, 30));

console.log(MathUtils.mul(10, 20));

//使用webpack打包只需要打包main.js，其他的js模块用import导入
//语法：webpack .\src\main.js .\dist\bundle.js