const fibonacci = n =>{
  if (n < 1) return 0; // {1}
  if (n <= 2) return 1; // {2}
  return fibonacci(n - 1) + fibonacci(n - 2); // {3}
}

console.log(fibonacci(12))


// 使用函数记忆来完成斐波那契数列
function memoize(func) {
  // 构建数据map 结构
  const cache = new Map()
  return function(...args) {
    const key = JSON.stringify(args)
    if (cache.has(key)) {
      return cache.get(key)
    }
    const result = func.apply(this, args)
    cache.set(key, result)
    return result
  }
}


function sum(n1, n2) {
  const sum = n1 + n2
  console.log(`${n1}+${n2}=${sum}`)
  return sum
}

const memoizedSum = memoize(fibonacci)

memoizedSum(5) // 会打印出：1+2=3
memoizedSum(5) // 没有输出
