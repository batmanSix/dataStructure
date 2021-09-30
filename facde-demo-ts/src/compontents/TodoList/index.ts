import { ITodoData } from './../../types/index';
class TodoList {
  private el:HTMLElement;
  private todoData: ITodoData
  constructor(el:HTMLElement,todoData: ITodoData){
    this.el = el
    this.todoData = todoData
  }

  public init(){
    this.createComponent() 
    this.render()
    this.bindEvent() 
  }

  private render(){
    console.log('render')
  }

  private createComponent(){
    console.log('create')
  }

  private bindEvent(){
    console.log('bindEvent')
  }
}

export default TodoList