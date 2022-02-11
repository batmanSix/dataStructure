
function createArray(lengths:number,value:number):number[]{
  const arr = Array<number>(lengths).fill(value)
  return arr
}


function createArray1(lengths:number,value:string):string[]{
  const arr1 = Array<string>(lengths).fill(value)
  return arr1
}

// 当你不确定返回值类型的时候想保证你输入跟你的返回保持一致的时候就选择 范型  
function createArray2<T>(lengths:number,value:T):T[]{
  const arr1 = Array<T>(lengths).fill(value)
  return arr1
}