import { useState } from "react";
import Swal from "sweetalert2";

const Formulario = ( {addTodo}) => {
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
        console.log(title, description, state);
        if (!title.trim() || !description.trim()) {
            console.log("Datos incompletos");
            Swal.fire({
                title: "Error!",
                text: "Título y descripción son obligatorios",
                icon: "error",
            });
            return;
        }
        addTodo({
            id: Date.now(),
            ...todo,
            state: state === "completado",
        });
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Tarea agregada con éxito",
            showConfirmButton: false,
            timer: 1500,
        });
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
                Agregar tarea
            </button>
        </form>
    );
};

export default Formulario;
