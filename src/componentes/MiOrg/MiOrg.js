import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
/*const [mostrar, actualizarMostrar] = useState (true)
const manejarclick = () => {
actualizarMostrar(!mostrar);
console.log (mostrar);
}*/

    return <section className="orgSection">
        <h3 className="title">Mi organicacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>

    </section>

}

export default MiOrg