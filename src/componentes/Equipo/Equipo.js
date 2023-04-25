import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador.js"
import hexToRgba from "hex-to-rgba";
const Equipo =(props) => {

/* para hacer mas limpio el codigo se hace

const {colorPrimario,colorSecundario, titulo} = props.datos

const obj ={backgroundColor : colorSecundario} y reemplaza en style todo el backgrund y la doble llave por solo obj

*/

const {colorPrimario,colorSecundario, titulo, id} = props.datos
const obj ={backgroundColor : hexToRgba(colorPrimario, 0.6 )}

const { colaboradores, eliminarColaborador, actualizarColor, like} = props


        return <>{  colaboradores.length>0 &&           
            
            <section className="equipo" style={obj}>
                <input   
                    type="color" className="input-color"
                    value={colorPrimario}
                    onChange={(evento) => {actualizarColor(evento.target.value, props.datos.id)}}
                />
            <h3 style={{borderColor: props.datos.colorPrimario}}>{props.datos.titulo} </h3>
            <div className="colaboradores">
                
                {
                    colaboradores.map( (colaborador, index) => <Colaborador 
                    datos={colaborador} 
                    key={index} 
                    colorPrimario={props.datos.colorPrimario}
                    eliminarColaborador={eliminarColaborador}
                    like={like}
                    />)

                }
            </div>

        </section>}
        </>
}

export default Equipo