import { useEffect, useState } from "react"
import Error from "./Error"

const Formulario = ({pacientes, setPacientes,paciente,setPaciente}) => {
   
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])
  

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  }

  const guardar = (e) => {
    e.preventDefault();

    //Validacion del Formulario
    if ([ nombre,propietario,email,fecha,sintomas ].includes('')) {
      setError(true);
      return;
    }
    setError(false);

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }

    if (paciente.id) {
      //Editando Registro
      objetoPaciente.id = paciente.id;

      const pacienteActualizado = pacientes.map(pacienteState => pacienteState.id ===
      paciente.id ? objetoPaciente : pacienteState)

      setPacientes(pacienteActualizado)
      setPaciente({})
    }else{
      //Nuevo Registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente  ])
    }

    //Reinicir Form
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
    
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-3'>
        <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
        <p className='text-lg text-center mt-5 mb-10'>
          Añade Pacientes y {''}
          <span className='text-indigo-600 font-bold'>Administralos</span>
        </p>

        <form onSubmit={guardar} className='bg-white shadow-md py-10 px-5 rounded-lg mb-10'>
          {error && <Error><p>Todos los campos son obligatorios</p></Error>}
          <div className="mb-4">

            <label htmlFor='mascota' className='block text-gray-700 font-bold uppercase'>
              Nombre Mascota
            </label>

            <input className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400' 
                   type="text"
                   placeholder='Nombre de la Mascota' 
                   name=""
                   value={nombre}
                   onChange={ (e) => setNombre(e.target.value) }
                   id="mascota"/>
          </div>

          <div className="mb-4">

            <label htmlFor='propietario' className='block text-gray-700 font-bold uppercase'>
              Nombre Propietario
            </label>

            <input className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400' 
                   type="text"
                   placeholder='Nombre del Propietario' 
                   name=""
                   value={propietario}
                   onChange={ (e) => setPropietario(e.target.value) } 
                   id="propietario" />
          </div>

          <div className="mb-4">

            <label htmlFor='email' className='block text-gray-700 font-bold uppercase'>
              Email
            </label>

            <input className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400' 
                   type="email"
                   placeholder='Email' 
                   name=""
                   value={email}
                   onChange={ (e) => setEmail(e.target.value) } 
                   id="email" />
          </div>

          <div className="mb-4">

            <label htmlFor='alta' className='block text-gray-700 font-bold uppercase'>
              Alta
            </label>

            <input className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400' 
                   type="date" 
                   name=""
                   value={fecha}
                   onChange={ (e) => setFecha(e.target.value) } 
                   id="alta" />
          </div>

          <div className="mb-4">

            <label htmlFor='sintomas' className='block text-gray-700 font-bold uppercase'>
              Sintomas
            </label>
            <textarea className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
                      placeholder='Describe los Sintomas' 
                      id="sintomas"
                      value={sintomas}
                      onChange={ (e) => setSintomas(e.target.value) } 
                      cols="30" 
                      rows="3">

            </textarea>
          </div>

          <input className='bg-indigo-600 w-full p-2 text-white font-bold uppercase rounded-md cursor-pointer hover:bg-indigo-800 transition-all' 
                 type="submit" 
                 value={paciente.id ? 'Editar Paciente': 'Agregar Paciente'}/>
        </form>
    </div>
  )
}

export default Formulario