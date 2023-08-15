import Pacientes from "./Pacientes"
function ListadoPacientes() {
  return (
    <div className='w-1/2 lg:w3/5 h-screen overflow-y-scroll'>
        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
        <p>
          Administra tus {' '}
          <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
        </p>
        <Pacientes />
        <Pacientes />
        <Pacientes />
        <Pacientes />
        <Pacientes />
        <Pacientes />
        <Pacientes />


        
    </div>
  )
}

export default ListadoPacientes
