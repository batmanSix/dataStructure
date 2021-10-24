### JavaScript模块化全面解析


1 解决加载顺序
2 污染全局
es5  的闭包实现的模块化只能解决 全局污染，
### node 环境中 require module.exports 进行模块的使用，不在依赖html 页面真正实现了js 的导入导出


### commonjs 是一种规范 -> 模块化规范, commonjs 用的是同步的方法
### commonjs 缓存机制，使用一次就会缓存模块,之后对比改动在进行加载模块 一定在node 上运行，如果不使用webpack 打包工具是不能在直接非node 环境运行的
### 来源于nodejs  例如：koa egg express
### require 导入在页面上 之后是一个立即执行函数

### (function(module, dir, path, args){

})()


### AMD 异步模块定义, define 定义模块 , require 引用模块, 前置依赖




### CMD 阿里为模块化也做出了贡献，通用模块定义
### cmd define 定义模块，seajs.use 使用模块
