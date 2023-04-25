import { useState } from "react"
import './App.css';
import { v4 as uuid } from "uuid";
import Header from './componentes/header/header.js';
import Formulario from './componentes/formulario/Formulario.js';
import MiOrg from "./componentes/MiOrg/MiOrg.js";
import Equipo from "./componentes/Equipo/Equipo.js";
import Footer from "./componentes/Footer/Footer.js";
function App() {
  const [mostrarFormulario, actualizarMostrar] = useState (true)
  const [colaboradores, actualizarColaboradores] = useState ([
    {id: uuid(),
     equipo:"Programacion",
     foto: "https://github.com/genesysaluralatam.png",
    nombre: "genesys rondon",
    Puesto: "desarrolladora",
    fav: true
    
    },
  ])
  
  const [equipos, actualizarEquipos] = useState ( [
    { id: uuid(),
      titulo:"Programacion",
    colorPrimario: "#57c278",
    colorSecundario: "#d9f7e9"
    },
    { id: uuid(),
      titulo:"Front end",
    colorPrimario: "#82CFFA",
    colorSecundario: "#E8F8FF"
    },
    { id: uuid(),
      titulo:"Data Science",
    colorPrimario: "#A6D157",
    colorSecundario: "#F0F8E2"
    },
    { id: uuid(),
      titulo:"Devops",
    colorPrimario: "#E06B69",
    colorSecundario: "#FDE7E8"
    },
    { id: uuid(),
      titulo:"UX y Diseño",
    colorPrimario: "#DB6EBF",
    colorSecundario: "#FAE9F5"
    },
    { id: uuid(),
      titulo:"Móvil",
    colorPrimario: "#FFBA05",
    colorSecundario: "#FFF5D9"
    },
    { id: uuid(),
       titulo:"Innovación y  Gestión",
    colorPrimario: "#FF8A29",
    colorSecundario: "#FFEEDF"
    },
    





  ])
  
  
  const cambiarMostrar =() => {
     actualizarMostrar (!mostrarFormulario);
  }

const registrarColaborador =(colaborador) => {
console.log ("nuevo colaborario", colaborador)
actualizarColaboradores([...colaboradores, colaborador])
}
//eliminar colaborador


const eliminarColaborador =(id) => {
  console.log ("eliminar", id)
  const nuevosColaboradores = colaboradores.filter ((colaborador) => colaborador.id !== id)
  actualizarColaboradores (nuevosColaboradores);
}

const like = (id) =>{
  console.log ("like",id)
  const colaboradoresActualizados = colaboradores.map((colaborador) =>{
    if (colaborador.id === id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })
  actualizarColaboradores(colaboradoresActualizados)
}

const actualizarColor =(color, id) =>{
console.log  ("actualizar", color, id);

const equiposAtualizados = equipos.map ((equipo) => {
if (equipo.id === id){
  equipo.colorPrimario = color
}
return equipo
})
actualizarEquipos(equiposAtualizados)
}


//lista de equipos
const crearEquipo = (nuevoEquipo) => {
  console.log (nuevoEquipo)
  actualizarEquipos ([...equipos, {...nuevoEquipo, id:uuid()}])
}
  
  return (
    <div className="App"> 
      
      <Header /> 
      {/* mostrarFormulario === true ? <Formulario /> :  <div></div>*/}
      {mostrarFormulario && <Formulario 
           equipos= {equipos.map((equipo) => equipo.titulo)}
           registrarColaborador = {registrarColaborador}
           crearEquipo ={crearEquipo}/>
           }
      <MiOrg cambiarmostrar={cambiarMostrar}/>
      {
        equipos.map( (equipo) => {
          return <Equipo datos= {equipo} key={equipo.titulo}
          colaboradores = {colaboradores.filter (colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador ={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />

        })

      }
      <Footer />

    </div>
  );
}

export default App;
