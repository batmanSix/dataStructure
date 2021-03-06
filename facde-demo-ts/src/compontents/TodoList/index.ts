import { ITodoData } from './../../types/index';
import Input, { IInputOptions } from "./subs/Input"
import List, { IListOptions } from "./subs/List"
class TodoList {
  private el: HTMLElement;
  private todoData: ITodoData[]
  private input: Input
  private todoWrapper: HTMLElement
  private list: List
  constructor(el: HTMLElement, todoData: ITodoData[]) {
    this.el = el
    this.todoData = todoData
    this.todoWrapper = document.createElement('div')
  }

  public init() {
    this.createComponents()
    this.render()
    this.bindEvent()
  }

  // 渲染试图
  private render() {
    this.input.render()
    this.list.render()
    this.el.appendChild(this.todoWrapper)
  }


  // 创建组件
  private createComponents() {
    this.input = new Input(<IInputOptions>{
      wrapperEl: this.todoWrapper,
      placeholderText: '请输入',
      buttonText: '新增'
    })
    this.list = new List(<IListOptions><unknown>{
      todoData: this.todoData,
      wrapperEl: this.todoWrapper
    })
  }

  // 绑定事件
  private bindEvent() {
    this.input.bindEvent()
    this.list.bindEvent()
  }
}

export default TodoList