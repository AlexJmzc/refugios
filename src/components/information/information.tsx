import Main from '../../assets/img/mainImage.jpg';

export const Information = () => {

  const redirect = (url: string) => {
    window.location.href = url;
  }

  return (
    <div className='bg-gray-200 w-screen flex justify-center min-h-max pt-4' id='home'>
      <div className='flex justify-center rounded-3xl relative'>
        <img className='w-11/12 rounded-3xl' src={Main} alt='Refugios' />
        <div className='absolute w-11/12 left-1/2 transform -translate-x-1/2 inset-0 bg-gradient-to-r from-violet-800 via-blue-800/75 to-transparent rounded-3xl'></div>
        <div className='absolute inset-y-0 left-16 flex flex-col justify-center items-start gap-y-12 text-white'>
          <h1 className='text-3xl font-main'>Bienvenido a esta página dedicada <br />a los refugios de animales. </h1>
          <h3>En esta plataforma, se destaca el trabajo incansable de los refugios de <br />toda la región que brindan amor, atención y un hogar seguro a los <br /> animales necesitados. </h3>
          <div className='flex gap-x-3 items-center'>
            <h3>Visita nuestras redes:</h3>
            <span className='w-6 h-6 icon-[mdi--instagram] hover:cursor-pointer' onClick={() => redirect('https://www.instagram.com')}></span>
          </div>
        </div>
      </div>
    </div>
  )
}