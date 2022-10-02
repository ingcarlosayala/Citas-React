import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoClientes from "./components/ListadoClientes"

function App() {

  const [pacientes, setPacientes] = useState([])

  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    const obtenerLS = () => {
      const pacienteLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacienteLS);
    }
    obtenerLS();
  }, [])

  useEffect(() => {
    
    localStorage.setItem('pacientes',JSON.stringify(pacientes));

  }, [pacientes])
  

  const eleminarPaciente = (id) => {
    const pacienteActualizado = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacienteActualizado)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="md:flex mt-12">

        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        
        <ListadoClientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eleminarPaciente={eleminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
