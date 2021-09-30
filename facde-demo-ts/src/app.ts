import { ITodoData } from './types/index';
import TodoList from "./compontents/TodoList"
((doc)=>{
  const app: HTMLElement = doc.querySelector("#app")

  

  const todoData:ITodoData[] = [{
    id: 1,
    content: "213",
    completed: true
  },{
    id: 2,
    content: "333",
    completed: true
  },{
    id: 3,
    content: "444",
    completed: true
  }]

  const init =(): void=>{
    const todoList: TodoList = new TodoList(app, todoData)
    todoList.init()
  }

  init()
})(document)