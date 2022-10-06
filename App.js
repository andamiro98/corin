import React, { useRef, useState } from 'react';
import './App.css';

function App() {

  const [todo,setTodo] = useState("");
  
  const [todos,setTodos] = useState([
    {id: 1 , content: "React 공부하기"},
    {id: 2 , content: "운동하기"},
  ]);

  const ref = useRef();
  const nextid = useRef(3);
  const handleSubmit  =(content) =>{
    const todo ={
      id:nextid.current,
      content,
    };
    setTodos(todos.concat(todo));
    nextid.current ++;
  };
 
  const onChange = (event) => setTodo(event.target.value)
 
  const onSubmit =(event) =>{
    event.preventDefault();
  
    
    if(todo===""){
      return alert ("List를 작성해주세요")
    }
 
    setTodo("")
    console.log(todos)
   
  };



  return (
    <div className="App">
      <form onSubmit={onSubmit}>
      <input  type="text"
              value={todo}
              ref={ref}
              placeholder ="List 입력"
              onChange={onChange}
              >
              </input>
      <button onClick={handleSubmit}
              type="submit">추가하기</button>
      </form>


      <h1>Todo List</h1>
      <div className="list-wrapper">
      {todos.map((todo) =>
        <div className='todo-container'>
            <h3
            todo={todo}
            key={todo.id}> 
            {todo.content}</h3>
        </div>
        )}
      </div>
     


    </div>
  );
}

export default App;
