;((doc)=>{
  // HTMLElement 没有value   HTMLInputElement才有 value 属性
  const oinput: HTMLInputElement = doc.querySelector('input')
  const aaddbtn: HTMLElement = doc.querySelector('.add-btn')


  const otodolist: HTMLElement = doc.querySelector('.todo-list')


  const todolist = otodolist.create()

  const init = ():void=>{

  }

  function bindEvent(){
    oinput.addEventListener('click', handleBtnClick,false)
    otodolist.addEventListener('click', handleListClick,false)

  }

  function handleBtnClick(){
    const val:string = oinput.value.trim()
    if(!val){
      return
    }

    todolist.additem(
      {
        id: new Date().getTime(),
        content: val,
        completed: false
      }

    )

    oinput.value = ''
  }



  function handleListClick(e: MouseEvent){
    const tar = e.target as HTMLElement;  // 类型断言
    const tagName = tar.tagName

    if(tagName === 'input' || tagName === 'button'){
      const id:number = parseInt(tar.dataset.id)
      

      switch(tagName){
        case 'input':
         break;
        case 'button':
         break
      }
    }
  }


  init()
})(document);