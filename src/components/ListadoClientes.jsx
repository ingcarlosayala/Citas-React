import Paciente from './Paciente';

const ListadoClientes = ({pacientes,setPaciente,eleminarPaciente}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 mx-3 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length? (
        <>
          <h2 className="text-3xl font-black text-center">Listado de Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map( paciente =>(
              <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eleminarPaciente={eleminarPaciente}
              />
            )
          )}
        </>

      ): (
        <>
        <h2 className="text-3xl font-black text-center">No hay pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Comienza agregar pacientes {""}
            <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
          </p>
        </>
      )}
      
    </div>
  );
}

export default ListadoClientes