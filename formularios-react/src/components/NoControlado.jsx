const NoContrlado = () =>{
    return (
        <form>
            <input type="text" placeholder="Ingrese Todo" className="form-control mb-2" name="title"/>
            <textarea className="form-control mb-2" placeholder="Ingrese descripcion" name="description"></textarea>
            <select className="form-select mb-2" name="state">
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button type="submit" className="btn btn-primary">Procesar</button>
        </form>
    )
}

export default NoContrlado