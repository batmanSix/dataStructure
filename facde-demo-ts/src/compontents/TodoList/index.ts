import { ITodoData } from './../../types/index';
import Input, { IInputOptions } from "./subs/Input"
class TodoList {
  private el:HTMLElement;
  private todoData: ITodoData
  private input: Input  
  private todoWrapper: HTMLElement
  constructor(el:HTMLElement,todoData: ITodoData){
    this.el = el
    this.todoData = todoData
    this.todoWrapper = document.createElement('div')
  }

  public init(){
    this.createComponents() 
    this.render()
    this.bindEvent() 
  }

  private render(){
    this.el.appendChild(this.todoWrapper)
    this.input.render()
  }

   
 
  private createComponents(){
    this.input = new Input(<IInputOptions>{
      wrapperEl: this.todoWrapper,
      placeholderText: '请输入',
      buttonText: '增加'
    })
    console.log('createComponents')
  }

  private bindEvent(){
    console.log('bindEvent')
  }
}

export default TodoList