import { useState } from "react"
import Formulario from "./components/Formulario"
import Todos from "./components/Todos"

const initialStateTodo = [
  {
    id: 1,
    title: "Todo #1",
    description: "Description 1" ,
    state: true,
    priority: true
  },

  {
    id: 2,
    title: "Todo #2",
    description: "Description 2" ,
    state: false,
    priority: false
  },

  {
    id: 3,
    title: "Todo #3",
    description: "Description 3" ,
    state: false,
    priority: true
  }
]

const App = () => {

  const [todos, setTodos] = useState(initialStateTodo) //setTodos actualiza todos los ToDos o tareas

  //Esta función toma el array de To-Dos, hace una copia de este y agrega el nuevo to-do
  const addTodo = todo =>{
    //el primer parametro [...todo, ] hace una copia de todos los To-Do
    //el segundo parametro [ , todo] es para agregar un nuevo To-Do
    setTodos([...todos, todo])
  }

  // Esta funcion obtiene todos los To-Dos del arreglo a exepción del que coincide con el ID que se le pasa como parametro
  const deleteTodo = id =>{
    const newArray = todos.filter(todo => todo.id !== id) 
    setTodos(newArray)
  }

  //Esta función cambia el estado booleano de una tarea
  const updateTodo = id => {
    const newArray = todos.map(todo => {
      if(todo.id === id){
        todo.state = !todo.state
      }
      return todo
    })
    setTodos(newArray)
  }

  //
  const orderTodo = (arrayTodo) =>{
    return arrayTodo.sort((a,b) =>{
      if(a.priority === b.priority)
    })
  }

  return (
    <div className="container mb-2">
      <h1 className="my-5">Formularios</h1>
      <Formulario addTodo={addTodo} />
      <Todos todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
    </div>)
}

export default App