export const Footer = () => {

  const redirect = (url: string) => {
    window.location.href = url;
  }

  return (
    <div className='w-screen bg-primary py-4'>
      <div className='flex flex-col bg-gray-800 rounded-2xl mx-7 py-6 gap-y-3'>
        <div className='flex flex-col items-center text-white'>
          <h2 className='font-bold text-lg'>
            ¿Cómo puedes ayudar?
          </h2>
        </div>

        <div className='flex flex-col items-center gap-y-5'>
          <h2 className="text-white">
            Puedes enviar la información sobre algún refugio que no se encuentre en esta web
            a nuestras redes sociales con este formato:
          </h2>

          <div className='bg-secondary grid grid-cols-2 gap-x-8 justify-items-center p-6 rounded-3xl text-white'>
            <div className=' flex flex-col items-start w-auto'>
              <h2>Información sobre el refugio:</h2>
              <h2>Página web</h2>
              <h2>Nombre</h2>
              <h2>País</h2>
              <h2>Ciudad</h2>
              <h2>Dirección</h2>
              <h2>Teléfono de contacto</h2>
            </div>

            <div className='flex justify-center items-center gap-x-4'>
              <span className="w-6 h-6 icon-[mdi--instagram] hover:cursor-pointer" onClick={() => redirect('https://www.instagram.com')}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}