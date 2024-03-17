import { useState } from "react";

const Contrlado = () => {
    //desestructuracion usando objetos
    const [todo, setTodo] = useState({
        title: 'Todo #01',
        description: "Description 01",
        state: "pendediente",
        priority: true,
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(todo.title, todo.description, todo.state)
    };

    const handleChange = e => {
        console.log(e.target.value)
        console.log(e.target.name)
        setTodo({
            ...todo,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Ingrese ToDo"
                className="form-control mb-2"
                name="title"
                value={todo.title}
                onChange={handleChange}
            />
            <textarea
                className="form-control mb-2"
                placeholder="Ingrese descipción"
                name="description"
                value={todo.description}
                onChange={handleChange}
            />

            <div className="form-check">
                <input type="checkbox" 
                name="priority" 
                className="form-check-input" 
                id="inputCheck" 
                checked={todo.priority}
                onChange={(e) => setTodo({
                    ...todo,
                    priority: e.target.checked
                })} />
                <label htmlFor="inputCheck">Dar prioridad</label>
            </div>

            <select className="form-select mb-2" name="state"
                value={todo.state} onChange={handleChange}>
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button type="submit" className="btn btn-primary">
                Procesar
            </button>
        </form>
    );
};

export default Contrlado;
