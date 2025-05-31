import React, { useState } from "react";


function EditTodoForm({ editTodo, todoTask}){
const [task, setTask] = useState(todoTask.task);

function changeHandler(event){
    setTask(event.target.value)
}
function handleClick(){
    editTodo(task, todoTask.id);
    setTask("");
}


    return <>
<input type = "text" placeholder="edit your task ..." value={task} onChange={changeHandler}></input>
<button onClick={(task) => handleClick(task)}>update</button>
    </>

    
}


export default  EditTodoForm;