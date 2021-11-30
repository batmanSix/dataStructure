import { ITodoData } from './../../../types/index';

import Component from "./component";

export interface IListOptions{
  wrapperEl:HTMLElement,
  todoData: ITodoData[],
} 

class List extends Component {
  private options: IListOptions;
  private static todoData:ITodoData[]
  private static wrapperEl:HTMLElement
  constructor(options:IListOptions){
    super();
    List.todoData = options.todoData
    List.wrapperEl = options.wrapperEl
    this.options = options
  }

  public render(){
    console.log(this.options.wrapperEl,"wrapperEl")
    this.options.wrapperEl.innerHTML += Component.listView(
        List.todoData
    )
  }

  /**
   * name
   */
  public bindEvent() {
    const oTodoList:HTMLElement = document.querySelector('.todo-list')
    oTodoList.addEventListener('click',this.handleBtnClick.bind(this))
  }

  private handleBtnClick(e:MouseEvent){
    const  tar = e.target as HTMLElement
    const tarName = tar.tagName.toLowerCase()

    const oTodoItems:HTMLCollection = document.getElementsByClassName("todo-item");

    console.log(tarName,"jere")
    switch(tarName){
      case 'input':
       this._handleCheckBoxClick(tar,oTodoItems)
       break;
      case 'button':
        this._handleButtonClick(tar,oTodoItems)
        break;
      default:
        break;
    }

  } 

  // 选择
  private _handleCheckBoxClick(target:HTMLElement,oTodoItems:HTMLCollection){
    const id:number = parseInt(target.dataset.id)
    List.todoData = List.todoData.map((todo:ITodoData,index:number)=>{
      if(todo.id === id){
        todo.completed = !todo.completed
        oTodoItems[index].querySelector('span').style.textDecoration = todo.completed? 'line-through':''
        
      }
      return todo
    })
  }
  
  // 删除
  private _handleButtonClick(target:HTMLElement,oTodoItems:HTMLCollection){
    const id:number = parseInt(target.dataset.id)
    List.todoData = List.todoData.map((todo:ITodoData,index:number)=>{
      if(todo.id === id){
        oTodoItems[index].remove();
      }
      return todo
    })
  }

  public static addItem(val:string){
    const items:ITodoData = {
      id: new Date().getTime(),
      content: val,
      completed: false
    }

    List.todoData.push(items);
    List.wrapperEl.innerHTML +=Component.todoView(items)
  }


}

export default List