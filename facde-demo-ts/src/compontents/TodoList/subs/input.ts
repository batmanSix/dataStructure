import Component from "./component";
import List from "./List"
export interface IInputOptions{
  wrapperEl:HTMLElement,
  placeholderText:  string,
  buttonText: string

} 
class Input extends Component {

  private options: IInputOptions;
  constructor(options:IInputOptions){
    super();
    this.options = options
  }

  public render(){
    const { placeholderText,buttonText, } = this.options
    this.options.wrapperEl.innerHTML += Component.inputView(
      placeholderText,
      buttonText
    )
  }

  public bindEvent(){
    const addBtn:HTMLElement = document.querySelector('.add-btn');
    const onInput:HTMLElement = document.querySelector('.todo-input')
    console.log(addBtn,"here")
    addBtn.addEventListener('click',this.handleBtnClick.bind(this,onInput))
  }

  private handleBtnClick(inputdom){
    const val:string = inputdom.value.trim()
    if(val.length){
      List.addItem(val);
      inputdom.value = ''
    }else{
      alert('请输入内容')
    }
  }
}

export default Input