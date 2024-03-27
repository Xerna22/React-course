import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import Todos from "./components/Todos"

const initialStateTodo = JSON.parse(localStorage.getItem('todos')) || []

const App = () => {

  const [todos, setTodos] = useState(initialStateTodo) //setTodos actualiza todos los ToDos o tareas

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

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

  //Coloca primero las tareas con mayor prioridad
  const orderTodo = (arrayTodo) =>{
    return arrayTodo.sort((a,b) =>{
      if(a.priority === b.priority) return 0
      if(a.priority) return -1
      if(!a.priority) return 1
    })
  }

  return (
    <div className="container mb-2">
      <h1 className="my-5">Formularios</h1>
      <Formulario addTodo={addTodo} />
      <Todos todos={orderTodo(todos)} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
    </div>)
}

export default App