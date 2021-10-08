abstract class Component {
  constructor() {

  }

  // 子类 内部类使用
  protected static inputView(placeholderText:string,buttonText:string){
    return `
     <div> <input  type="text" class="todo-input" placeholder="${placeholderText}" />
      <button class="add-btn">${buttonText}</button>
     </div>
    `
  }


}
export default Component