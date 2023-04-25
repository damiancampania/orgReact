import "./Formulario.css"
import { useState } from "react"
import CampoTexto from "../Campo/CampoTexto"

import Boton from "../boton/boton.js";
import ListaOpciones from "../ListaOpciones/ListaOpciones.js";
const Formulario = (props) => {

    const [nombre, actualizaNombre]= useState ("")
    const [puesto, actualizaPuesto]= useState ("")
    const [foto, actualizaFoto]= useState ("")
    const [equipo, actualizarEquipo] = useState ("")


   const [ titulo, actualizarTitulo]  = useState ("")
   const [ color, actualizarColor]  = useState ("")
    
const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (evento) => {
        evento.preventDefault() ;
        let datosAEnviar ={
            nombre,
            puesto,
            foto,
            equipo
           
        }
        props.registrarColaborador (datosAEnviar);
    }

    const manejarNuevoEquipo = (evento) => {
        evento.preventDefault() ;
        crearEquipo ({titulo, colorPrimario: color})
    }


    return <section className="formulario"> 
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear colaborador</h2>
            <CampoTexto titulo="Nombre" placeholder= "Ingrese Nombre" required valor ={nombre} actualizarValor={actualizaNombre}/>
            <CampoTexto titulo= "Puesto" placeholder= "Ingrese puesto" required valor ={puesto} actualizarValor={actualizaPuesto}/>
            <CampoTexto titulo="Foto" placeholder= "Ingrese foto" required valor ={foto} actualizarValor={actualizaFoto}/>
           <ListaOpciones valor ={equipo} actualizarValor={actualizarEquipo} equipos ={props.equipos}/>
           <Boton texto ="crear"/>
        </form>
            

           <boton />

           <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear Equipo</h2>
            <CampoTexto titulo="Titulo" placeholder= "Ingrese titulo" required valor ={titulo} actualizarValor={actualizarTitulo}/>
            <CampoTexto titulo= "Color" placeholder= "Ingrese Color" type="color" required valor ={color} actualizarValor={actualizarColor}/>
           
            <Boton texto ="registrar equipo"/>
           </form>
           
    </section>

}

export default Formulario