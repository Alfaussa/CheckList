import React, { useState } from "react";


function TodoForm({addTask}){
const [task, setTask] = useState('');

function changeHandler(event){
    setTask(event.target.value)
}
function handleClick(){
    addTask(task);
    setTask('');
}


    return <>
<input type = "text" value={task} onChange={changeHandler}></input>
<button onClick={(task) => handleClick(task)}></button>
    </>

    
}


export default  TodoForm;