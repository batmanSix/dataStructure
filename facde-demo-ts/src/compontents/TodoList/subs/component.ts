import { ITodoData } from './../../../types/index';
abstract class Component {
  constructor() {

  }

  // 子类 内部类使用
  protected static inputView(placeholderText: string, buttonText: string) {
    return `
     <div> <input  type="text" class="todo-input" placeholder="${placeholderText}" />
      <button class="add-btn">${buttonText}</button>
     </div>
    `
  }

  protected static todoView(todo: ITodoData): string {
    console.log(todo, "we")
    const { id,
      content,
      completed } = todo

    return `
      <div class="todo-item">
        <input  type="checkbox" data-id="${id} ${completed ? 'checked' : ''}" />
        <span style="text-decoration:${completed ? 'line-through' : ''}">${content}</span>
        <button data-id="${id}">删除</button> 
      </div>`
  }

  // 渲染list 组件

  protected static listView(data: ITodoData[]): string {
    return `
      <div class="todo-list">
        ${data.length > 0 ? data.map((todo: ITodoData) => {
      return Component.todoView(todo)
    }) : '当前没有数据'
      }
      </div>`.split(',').join('');
  }


}
export default Component