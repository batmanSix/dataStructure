import logo from './logo.svg';
import './App.css';
import React, {useState,useCallback} from 'react';
import Test from "./components/test";
import Header from "./components/header"
import HeaderInput from "./components/headerInput"
import TodoList from "./components/todoList"
function App() {

  // const [title,setTitle] = useState('hooks测试');

  // const changeTitle =(e)=>{
  //   setTitle(e)
  // }

  const [isInputShow,setInputShow] = useState(false)

  const [todoList, setTodoList] = useState([])

  // 返回一个缓存函数
  const addItem = useCallback((value)=>{
    const items = {
      id: new Date().getTime(),
      content: value,
      compute: false
    }
    setTodoList((todoList)=>[...todoList,items])
    setInputShow(false)
  },[])


  return (
    <div className="App">
      {/* <header className="App-header">
         react hooks 风格 todolist
         <Test title={title} changeTitle={changeTitle}></Test>
      </header> */}
      <Header openInput={()=>{
        setInputShow(!isInputShow)
      }}></Header>
      <HeaderInput isInputShow={isInputShow} addItem={addItem}></HeaderInput>
      <ul className="todo-list">
        {
          todoList.map((item,index)=>{
            return (
              <TodoList data={item} key={index}></TodoList>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
