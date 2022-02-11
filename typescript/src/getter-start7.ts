export {}  // 确保跟其它事例没有成员变量冲突 
// ? interface 接口  可选成员 只读成员

interface app {
  title:string,
  content: string,
  id: number,
  subtitle?:string,
  readonly summary: string  //只读的属性不能修改
}

function printPost(props:app){
  console.log(props)
}

printPost({title:'ceshi',content: 'ceshi neirong ',id:1,summary:'1'})


// 动态成员
interface cache {
  [prop:string]:string
}

