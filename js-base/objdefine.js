//  数据劫持

// object 对象
// define 定规
// property 属性 对象的key // attribute 属性


let obj = {};
let newobj = Object.defineProperty(obj,'a',{
  value: 1,
  configurable: true, // 可配置修改
  enumerable: true, // 可枚举
  writable: true // 可重写 默认false
})


console.log(obj === newobj) // true

console.log(newobj)

// 调用 defineProperty 为 object 构造函数上 对象的静态方法

// ? 语法 Object.defineProperty(obj,prop,description)
// ? obj：对象 prop：属性 description：obj的描述
// ? 默认情况下不可枚举 删除 修改
// ? 可删除修改新增的属性


let obk = {}

let newobk = Object.defineProperty(obk,'a',{
  value: 1,
  configurable: true, // 可配置修改
  enumerable: true, // 可枚举
  writable: true, // 可重写 默认false

  get(){
    // 获取原数据
  },

  set(newval){
    // 获取更新数据

  }
})


