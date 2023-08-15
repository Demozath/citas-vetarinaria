import React from 'react'

function Formulario() {
  return (
    <div className='w-1/2 lg:w-2/5'>
        <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
        <p className='text-lg mt-5 text-center mb-10'>
          Añade Pacientes y {''}
          <span className='text-indigo-600 font-extrabold'>Administralos</span>
        </p>

        <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>

          <div className='mb-5' >
              <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
              <input 
                  id='mascota'
                  type='text'
                  placeholder='Nombre de la mascota' 
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
          </div>

          <div className='mb-5'>
              <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Nombre Propietario</label>
              <input 
                  id='propietario'
                  type='text'
                  placeholder='Nombre del propietario' 
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
          </div>

          <div className='mb-5'>
              <label htmlFor='mail' className='block text-gray-700 uppercase font-bold'>Mail</label>
              <input 
                  id='mail'
                  type='email'
                  placeholder='Mail contacto propietario' 
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
          </div>

          <div className='mb-5'>
              <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Alta</label>
              <input 
                  id='alta'
                  type='date'
                  placeholder='Fecha del alta' 
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
          </div>

          <div className='mb-5'>
              <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Sintomas</label>
              <textArea 
                  id='sintomas'
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                  placeholder='Describe sintomas'
                  />
          </div>

          <input 
                type="submit" 
                className='bg-indigo-600 w-full p-3 text-white font-bold hover:bg-indigo-700 
                cursor-pointer transition-all'
                value='Agregar paciente'
                />
          


        </form>
    </div>
  )
}

export default Formulario
