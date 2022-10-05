import React from "react";
import "./todo.css";


const Todo = function({todo,Remove}){
    const {id, title, content, isDone} = todo;
    
    const Complet =() => {
        isDone(true);
    };

    const onChangeHandler = ()=>{
        
    }

    return(
    <div className="list-contain">
        
        <div className="list-wrapper" key={todo.id}>
            <div className="todo-container">
                <div>
                    <h2>{title}</h2>
                    <div>{content}</div>
                </div>

                <div className="button-set">
                    
                    <button className="todo-delete-button" 
                            onClick={() => Remove(todo.id)}>
                            삭제하기
                    </button>

                    <button className="todo-complete-button"
                            onClick={() => Complet}>
                            완료
                    </button>
                </div>

            </div>
        </div>
        
        

        {/* <div className="list-wrapper">
            <div className="todo-container">
                <div>
                    <h2>{title}</h2>
                    <div>{content}</div>
                </div>

                <div className="button-set">
                    <button className="todo-delete-button">삭제하기</button>
                    <button className="todo-complete-button">취소</button>
                </div>

            </div>
        </div> */}

    </div>
);

};
export default Todo;