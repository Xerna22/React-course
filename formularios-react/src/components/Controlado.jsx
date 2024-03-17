import { useState } from "react";

const Contrlado = () => {
    //desestructuracion usando objetos
    const [todo, setTodo] = useState({
        title: 'Todo #01',
        description: "Description 01",
        state: "pendediente",
        priority: true,
    })

    const {title, description, state, priority} = todo

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, description, state)
    };

    const handleChange = e => {

        const {name, type, checked, value} = e.target

        setTodo({
            ...todo,
            [name]: type === 'checkbox' ? checked : value,
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Ingrese ToDo"
                className="form-control mb-2"
                name="title"
                value={title}
                onChange={handleChange}
            />
            <textarea
                className="form-control mb-2"
                placeholder="Ingrese descipción"
                name="description"
                value={description}
                onChange={handleChange}
            />

            <div className="form-check">
                <input type="checkbox"
                    name="priority"
                    className="form-check-input"
                    id="inputCheck"
                    checked={priority}
                    onChange={handleChange} />
                <label htmlFor="inputCheck">Dar prioridad</label>
            </div>

            <select className="form-select mb-2" name="state"
                value={state} onChange={handleChange}>
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
