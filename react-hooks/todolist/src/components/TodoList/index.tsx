import React, { FC, ReactElement,useCallback, useEffect, useState ,useReducer} from 'react';
import TDInput from "./Input/index"
import TDList from "./List/index"
import { ITodo } from './type';

const initialState = {

}

const TodoList:FC = ():ReactElement => {

  //const [todoList,setTodoList] = useState<ITodo[]>([])

  const [state,dispatch] = useReducer(todoReducer,initialState)

  const addTodo = useCallback((todo:ITodo)=>{
    console.log(todo,"todo")
    //setTodoList(todoList=>[...todoList,todo])
  },[])

  //useReducer1

  useEffect(()=>{
    console.log(state.todoList,"todoList")
  },[state.todoList])

  return (
    <div className="todo-list">
      <TDInput addTodo={addTodo} todoList={todoList}/>
      <TDList />
    </div>
  )
}

export default TodoList