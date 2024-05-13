import FooterImage from '../../assets/img/footerImage.png';

export const Footer = () => {

  const redirect = (url: string) => {
    window.location.href = url;
  }

  return (
    <div className='w-screen bg-gray-300 py-4' id='help'>
      <div className='bg-gradient-to-r from-secondary via-yellow-500/85 grid grid-cols-2 rounded-2xl mx-7 py-6 gap-y-3'>
        <div className='flex justify-center items-center'>
          <img className='' src={FooterImage} alt="Help" />
        </div>

        <div className='flex flex-col items-center gap-y-5'>
          <h2 className='font-bold text-lg text-white'>
            ¿Cómo puedes ayudar?
          </h2>

          <h2 className="text-white">
            Puedes enviar la información sobre algún refugio que no se encuentre en esta web
            a nuestras redes sociales con este formato:
          </h2>

          <div className='bg-secondary grid grid-cols-1 gap-y-4 justify-items-center p-6 w-3/5 rounded-3xl text-white'>
            <div className=' flex flex-col items-center w-auto'>
              <h2>Página web</h2>
              <h2>Nombre del refugio</h2>
              <h2>País</h2>
              <h2>Ciudad</h2>
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