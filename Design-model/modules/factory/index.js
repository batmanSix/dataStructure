import ModalFactory from "./factory.js"
;(() => {
  const modal = document.getElementsByClassName("modal")[0];
  const btnGroup = document.getElementsByClassName("btn-group")[0];
  const factory = new ModalFactory(modal)
  const init = () => {
    bindEvent() 
  };

  function bindEvent() {
    btnGroup.addEventListener("click", handleClick, false);
  }

  function handleClick(e) {
    const tar = e.target;
    const tagName = tar.tagName.toLowerCase();
    if (tagName === "button") {
      const status = tar.dataset.status;
      const info = '这是弹窗信息'
      factory.create('这是一个工厂模式的应用场景', status)
      
      if(status === 'w' || status === 'e'){
       
      }
    }
  }

  function changeStatus(status) {
    switch (status) {
      case "s":
        modal.className = "modal success";
        break;
      case "w":
        modal.className = "modal warning";
        break;
      case "e":
        modal.className = "modal error";
        break;
    }
  }

  init()
})();
