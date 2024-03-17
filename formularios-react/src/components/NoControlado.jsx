import { useRef, useState } from "react";

const NoContrlado = () => {
    const form = useRef(null);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("")

        //Capturar los datos
        const data = new FormData(form.current);
        const { title, description, state } = Object.fromEntries([
            ...data.entries(),
        ]);

        //validaciones
        if (!title.trim()  || !description.trim() || !state.trim())
            return setError("Llena todos los campos")

        //enviar los datos
        console.log(title, description, state)
    };

    return (
        <form onSubmit={handleSubmit} ref={form}>
            <input
                type="text"
                placeholder="Ingrese ToDo"
                className="form-control mb-2"
                name="title"
                defaultValue={"ToDo #1"}
            />
            <textarea
                className="form-control mb-2"
                placeholder="Ingrese descipción"
                name="description"
                defaultValue={"description #1"}
            />
            <select className="form-select mb-2" name="state">
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button type="submit" className="btn btn-primary">
                Procesar
            </button>
            {error !== "" && error}
        </form>
    );
};

export default NoContrlado;
