export {}

// 类型断言
const nums = [110.1,120]

const res  = nums.find(i=>i > 0)

console.log(res)

const num1 = res as number

const num2 = <number>res // jsx 模式下不能使用

