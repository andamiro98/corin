import React from "react";
import Todo from "../todo/Todo";
import "./list.css";


const List = function({todos,Remove}){

    

    return(
        <div className="list-contain">
            <div>
                <h2 style ={{color: "#395B64"}}>
                My List 🔥
                </h2>

                <div className="list-wrapper">
                {todos.map((todo) =>(
                    <Todo 
                    todo = {todo}
                    key = {todo.id}
                    Remove = {Remove}
                    />
                ))}
                </div>
                
                <h2 style ={{color: "#395B64"}} >
                Complete  🎉
                </h2>

                
             
            </div>
        </div>


    );

};
export default List;