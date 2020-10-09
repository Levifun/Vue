function sum(num1,num2) {
    return num1+num2
}

function mul(num1,num2) {
    return num1*num2
}

//es6模块化
export {
    sum,mul
}

//CommonJS模块化
// module.exports = {
//     sum,mul
// }