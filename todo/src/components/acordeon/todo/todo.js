import React from "react";
import '../todo/todo.css'
import ListaDeTareas from "../tareas/listaDeTareas";

function Todo() {
    return (
        <div className="aplication">
           
            <div className="todo-list">
                <h1>Mis Tareas</h1>
                <ListaDeTareas />
            </div>        
        </div>
    )
}

export default Todo;