import React, { useState } from "react";
import { GrClose, GrEdit } from "react-icons/gr";


function TodoItem({todo, removeTask, completeTask, editTodo}){

    return <>
<div>
  <div onClick={() =>completeTask(todo.id) } className={todo.completed ? "todo-row-completed" : "todo-row" }>  
    {todo.task}</div>
  <div className={todo.isEdit ? "todo-row-editing" : "todo-row" }><GrEdit onClick={()=>editTodo(todo.id)} /></div>
  <div><GrClose onClick={()=>removeTask(todo.id)}/></div>


</div>
    </>

    
}


export default TodoItem;