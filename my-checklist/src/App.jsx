import { useState } from 'react'
import { nanoid } from 'nanoid';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import EditTodoForm from './components/EditTodo'

import './App.css'


function App() {
  
const [todos, setTodos] = useState([]);

const addTask = (task) => {
  if (task) {
    const newTask = {
      id: nanoid(),
      task:task,
      completed: false,
      isEdit: false
    }
     setTodos([...todos, newTask]);
  }
};

const removeTask = (id) =>{
  setTodos([...todos.filter((todo) => ((todo.id !== id )))])

}



const completeTask=(id) =>{
  setTodos([...todos.map((todo)=>todo.id === id ? {...todo, completed:!todo.completed} : {todo}
  )])

}

const editTodo = (id) => {
setTodos(todos.map((todo)=>todo.id === id ?{...todo, isEdit: !todo.isEdit} : todo ))}

const editTask = (task, id) => {
  setTodos(todos.map((todo)=>todo.id === id ?{...todo, task, isEdit: !todo.isEdit} : todo))}

  return  <>
    <h1> Checklist</h1>
    <TodoForm addTask={addTask}/>
    <hr/>
    
    {todos.map((todo) => (
      todo.isEdit ? 
      (<EditTodoForm 
        editTodo={editTask} 
        todoTask={todo}/>) :
       (<TodoItem 
       todo={todo} 
       key={todo.id}
       removeTask={removeTask}
       completeTask={completeTask}
       editTodo={editTodo}     
       />)


    ))}
   
  
    </>
  
}

export default App
