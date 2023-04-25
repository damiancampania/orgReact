import "./ListaOpciones.css"

const ListaOpciones =(props) => {
const equipos = [
    "Programacion",
    "Front-end",
    "Data science",
    "Devops",
    "Ux y Diseño",
    "Movil",
    "Innovacion y Gestion"


]

const manejarCambio = (e) => {
    props.actualizarValor(e.target.value)

}

return <div className="lista-opciones">
    <label>Equipos</label>
    <select value= {props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue= "" hidden> Seleccionar equipo</option>
        {props.equipos.map((equipo, index) =>{
            return <option key={index} value={equipo}>{equipo} </option>

        })}

    </select>



</div>

}

export default ListaOpciones