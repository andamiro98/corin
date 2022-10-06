import React, { useState } from 'react';
import './App.css';

function App() {

  const [todo,setTodo] = useState("");
  const [todos,setTodos] = useState([{content : "리엑트부숴버리기"},]);
  

  const onChange = (event) => setTodo(event.target.value)
  const onSubmit =(event) =>{
    event.preventDefault();
    if(todo===""){
      return alert ("List를 작성해주세요")
    }
    setTodos((contentArray) => [...contentArray,{content:todo}]);
    setTodo("")
    console.log(todos)
    console.log(todo)
  };


  return (
    <div className="App">
      <form onSubmit={onSubmit}>
      <input  type="text"
              value={todo}
              placeholder ="List 입력"
              onChange={onChange}
              >
              </input>
      <button
              type="submit">추가하기</button>
      </form>


      <h1>Todo List</h1>
      <div className="list-wrapper">
      {todos.map((todo) =>{

        console.log(todo)

        return(
        <div className='todo-container'>
            <h3
            todo={todo}
            key={todo.id}> 
            {todo.content}</h3>
        </div>)}
        )}
      </div>


    </div>
  );
}

export default App;
