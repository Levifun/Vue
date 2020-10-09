let name = "Levifun";
let age = 23;
function cal(num1,num2) {
    return num1*num2;
}

//创建变量之后导出
export {
    name,age,cal
}

//导出自定义函数
export function sum(num1,num2) {
    return num1+num2;
}

//导出自定义变量
export var sex = "m";

//export default
export default function () {
    console.log("default");
}
// const address = "赤峰市";
// export default address;