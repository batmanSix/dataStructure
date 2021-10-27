import React from "react";
import "../static/css/index.scss";
const Header = (props) =>{
  const {openInput} = props
  return(
    <div className="header">
      <h1>待办事件</h1>
      <span className="icon" onClick={openInput}>添加&#43;</span>
    </div>
  )
}


export default Header