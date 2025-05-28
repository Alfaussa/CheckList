import React, { useState } from "react";



function TodoItem({todo}){

    return <>
<div>
    {todo.task}
</div>
    </>

    
}


export default TodoItem;