import React, { useState } from "react";



function List(){

const[toDo, setToDo] = useState('');
const[list, setList] = useState([]);

function addToDo(){

list.push(toDo);
setList();


}
let ListToDos = list.map((i){
    return  <ul><li>[i]</li></ul>

})
   


    return <>

<input value={toDo} onChange={(event)=>setToDo(event.target.value)} onBlur={()=>addToDo()}></input>
<p>
    {ListToDos}
</p>
    </>

    
}


export default List;