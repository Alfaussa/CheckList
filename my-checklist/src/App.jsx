import { useState } from 'react'
import { nanoid } from 'nanoid';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

import './App.css'


function App() {
  
const [todos, setTodos] = useState([]);

const addTask = (task) => {
  if (task) {
    const newTask = {
      id: nanoid(),
      task:task,
    }
     setTodos([...todos, newTask]);
  }

}
  return  <>
    <h1> Checklist</h1>
    <TodoForm addTask={addTask}/>
    <hr/>
    
    {todos.map((todo) => (
       <TodoItem 
       todo={todo} key={todo.id}/>
    ))}
   
  
    </>
  
}

export default App
