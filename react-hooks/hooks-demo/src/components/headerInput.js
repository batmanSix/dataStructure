import React,{useEffect,useRef} from "react";
import "../static/css/ui.scss"
import "../static/css/input.scss"
const HeaderInput = (props) => {
  const { isInputShow,addItem } = props;
  const inputRef = useRef();
  const SubmitEvent =()=>{
    const value = inputRef.current.value
    if(value.length  === 0){
      return alert('请输入')
    }else{
      // 提交给父组件
      addItem(value)
      inputRef.current.value = ''
    }
  }

  return (
    <>
      {isInputShow ? (
        <div className="input-warp">
          <input type="text" ref={inputRef} placeholder="请输入需要添加的事件"></input>
          <button className="btn btn-parimy"  onClick={SubmitEvent}>新增</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default HeaderInput;
