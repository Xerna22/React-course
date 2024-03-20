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

  const [todos, setTodo] = useState(initialStateTodo)

  return (
    <div className="container mb-2">
      <h1 className="my-5">Formularios</h1>
      <Formulario/>
      <Todos todos={todos}/>
    </div>)
}

export default App