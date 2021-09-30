/**
 *
 *  有一些公共的方法，属性，静态工具
 *  modal 父类
 *
 *  对每种状态内部的属性加工，每种状态的功能扩展
 *  三个类 success warning error
 *  有个工厂通过传入的状态来给我自动实力话相应的类
 *
 */
import  modelTypes from "./type.js";
class modal {
  constructor(status) {
    this.status = status;
  }
  get className() {
    let classStr = "modal ";
    switch (this.status) {
      case modelTypes.success:
        classStr = `${classStr}success`;
        break;
      case modelTypes.warning:
        classStr = `${classStr}warning`;
        break;
      case modelTypes.error:
        classStr = `${classStr}error`;
        break;
      default:
        break;
    }
    return classStr;
  }
  static changeStatusExit(types,status){
    if(k in types){
      if(types[k] === status){
        return true
      }
    }
    return false
  }

  static outputInfo(type,info){
    console.log(type+':'+info)
  }
}

class successModal extends modal {
  constructor(title) {
    super(modelTypes.success);
    this.title = "成功" + title;
  }  
  
}

class warnModal extends modal {
  constructor(title) {
    super(modelTypes.warning);
    this.title = "告警" + title;
  }

  outputInfo(info){
    modal.outputInfo('告警提示:' + info)
  }
}

class errorModal extends modal {
  constructor(title) {
    super(modelTypes.error);
    this.title = "失败" + title;
  }

  outputInfo(info){
    modal.outputInfo('错误提示:' + error)
  }
}

// 工厂类
class ModalFactory {

  constructor(dom) {
    this.dom = dom;
  }

  create(title, status) {
    const StatusExit = modal.changeStatusExit(modelTypes,status)
    if(!StatusExit){
      throw new Error('modal types is incorrect')
    }
    const dom = this.dom;
    let modal = null;
    switch (status) {
      case modelTypes.success:
        modal = new successModal(title);
        break;
      case modelTypes.warning:
        modal = new warnModal(title);
        break;
      case modelTypes.error:
        modal = new errorModal(title);
        break;
      default:
        break;
    }


    dom.getElementsByTagName('header')[0].innerText = modal.title
    dom.className = modal.className

    return{
      outputInfo: modal.outputInfo
    }
  }

}

export default ModalFactory;
