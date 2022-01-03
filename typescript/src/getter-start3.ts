// 数组类型

// 使用范型
const arr1: Array<number> = [1, 2, 3]

const arr2: number[] = [1, 3, 4]

function sum(...arg: number[]) {
  return arg.reduce((pre, cur) => pre + cur, 0)
}


// sum(1,2,"2")