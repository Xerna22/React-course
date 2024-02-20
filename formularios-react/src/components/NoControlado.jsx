import { useRef } from "react";

const NoContrlado = () => {
    const form = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("me diste click");
        const data = new FormData(form.current);
        const {title, description, state} = Object.fromEntries([...data.entries()])
        console.log(title, description, state)

        //validaciones
        if(title.trim() ==='') return console.log("llena este campo")
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
        </form>
    );
};

export default NoContrlado;
