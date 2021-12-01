import { ITodo } from "../../types/type";

class TodoEvent {

  private static instance:TodoEvent;  

  private todoData: ITodo[]

  public  static create(){
    if(!TodoEvent.instance){
      TodoEvent.instance = new TodoEvent()
    }

    return TodoEvent.instance
  }

  public addTodo(todo:ITodo){
    return new Promise((resolve,reject)=>{
      const _todo:ITodo= this.todoData.find(t=>t.content === todo.content)
      if(_todo){
        alert('已经存在该项')
        return reject(500) 
      }
      this.todoData.push(todo)
      resolve(todo)
    })
    
  }

  public removeTodo(id:number){
    return new Promise((resolve,reject)=>{
      
    })
  }

  public toggleTodo(id:number){

  }
}

export default TodoEvent

