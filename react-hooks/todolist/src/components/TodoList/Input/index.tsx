import React,{useRef,FC,ReactElement} from "react"
import { ITodo } from "../type"

interface IProps  {
  addTodo:(todo:ITodo) => void
  todoList: ITodo[];
}

const TDInput:FC<IProps> = ({addTodo,todoList}):ReactElement =>{

  const inputRef = useRef<HTMLInputElement>(null)

  const addItem = ():void=>{
    const val:string = inputRef.current!.value.trim()
    if(val.length > 0){
      const isExist = todoList.find(it=>it.content === val)
      if(isExist){
        alert('数据不能重复')
        return
      }
      addTodo({
        id: new Date().getTime(),
        content: val,
        computed: false
      })
      inputRef.current!.value = ''
    }else{
      alert('请输入值')
    }
  }

  return(
    <div className="todo-input">
      <input type="text" placeholder="请输入代办项" ref={inputRef}></input>
      <button onClick={addItem}>增加</button>
    </div>
  )
}

export default TDInput