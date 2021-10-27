import React from "react";
import "../static/css/ui.scss"
import "../static/css/todo.scss"
const TodoList = (props) => {
  const { data } = props;

  return (
    <li className="todo-item">
      <div className="check-box">
        <input className type="checkbox" checked={data.compute}></input>
      </div>
      <span
        className="content"
        style={{ textDecoration: data.compute ? "line-through" : "none" }}
      >
        {data.content}
      </span>
      <div className="btn-group">
        <button className="btn btn-parimy">查看</button>
        <button className="btn btn-waring">编辑</button>
        <button className="btn btn-danger">删除</button>
      </div>
    </li>
  );
};

export default TodoList;
