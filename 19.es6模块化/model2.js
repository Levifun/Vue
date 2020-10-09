import {name,age,cal} from "./model1.js"
//import * as info from "./model1.js" 相当于拿取整个对象，使用时用info.name
import {sum} from "./model1.js"
import {sex} from "./model1.js"
import defun from "./model1.js"
//导入default时需要自己起名字，并且不加{}


console.log(name);//模块化获取的是变量，属性和值一起导入
console.log(sum(10, 20));
console.log(sex);
defun();