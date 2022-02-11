// 函数类型

export {}

// 函数类型 num?:number 可选参数 或者添加 num:number=100 默认参数
const func = (str:string,num:number=100,...rest:number[]):string =>{
  return str+num
}

func("2")

// ts 隐式类型推断
let age = 18 

let foo  // any 类型
foo = "18"


// ts类型断言 
