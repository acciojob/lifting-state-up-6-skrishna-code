import React from "react";

function TodoList({todos,handleComplete}){
    return(
        <div>
           {todos.map((todo)=>(
            <div key={todo.id}>
                <span>
                    {todo.title}-{todo.completed ? "completed" : "Pending"}
                </span>

                {!todo.completed && (
                    <button onClick={()=>handleComplete (todo.id)}> Complete</button>
                )}
            </div>
           ))}
        </div>
    );
}

export default TodoList;