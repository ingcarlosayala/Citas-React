
const Paciente = ({paciente,setPaciente,eleminarPaciente}) => {

  const {nombre,propietario,email,fecha,sintomas,id} = paciente;

  const handleElimiar = () => {
    const respuestas = confirm('Deseas eliminar este paciente?')

    if (respuestas) {
      eleminarPaciente(id)
    }
  }

  return (
    <div className="bg-white shadow-md ml-3 py-10 px-5 rounded-xl mb-3">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          {" "}
          Nombre: {""}
          <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          {" "}
          Propietario: {""}
          <span className="font-normal normal-case">{propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          {" "}
          Email: {""}
          <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          {" "}
          Fecha Alta: {""}
          <span className="font-normal normal-case">{fecha}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          {" "}
          Sintomas: {""}
          <span className="font-normal normal-case">
          {sintomas}
          </span>
        </p>

        <div className="flex justify-between mt-10">
          <button type="button"
          onClick={ () => setPaciente(paciente) }
                  className="bg-indigo-600 py-2 px-8 font-bold uppercase text-white rounded-lg hover:bg-indigo-800">
            Editar
          </button>
          <button type="button"
          onClick={handleElimiar}
                  className="bg-red-600 py-2 px-8 font-bold uppercase text-white rounded-lg hover:bg-red-800">
            Eliminar
          </button>
        </div>
      </div>
  )
}

export default Paciente