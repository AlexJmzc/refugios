import Main from '../../assets/img/mainImage.jpg';

export const Information = () => {

  const redirect = (url: string) => {
    window.location.href = url;
  }

  return (
    <div className='bg-gray-200 w-screen flex justify-center min-h-max pt-14' id='home'>
      <div className='flex justify-center rounded-3xl relative'>
        <img className='w-11/12 rounded-3xl' src={Main} alt='Refugios' />
        <div className='absolute w-11/12 left-1/2 transform -translate-x-1/2 inset-0 bg-gradient-to-r from-violet-800 via-blue-800/75 to-transparent rounded-3xl'></div>
        <div className='absolute inset-y-0 xsm:left-16 xxsm:left-9 hsm:left-6 flex flex-col justify-center items-start md:gap-y-12 sm:gap-y-6 xsm:gap-y-5 hsm:gap-y-3 text-white'>
          <h1 className='font-main lg:text-3xl md:text-xl sm:text-lg xsm:text-base hsm:text-xs'>Bienvenido a esta página dedicada <br />a los refugios de animales. </h1>
          <h3 className='xsm:w-2/5 text-justify md:text-base sm:text-sm xsm:text-xs xsm:flex hsm:hidden'>En esta plataforma, se destaca el trabajo incansable de los refugios de toda la región que brindan amor, atención y un hogar seguro a los animales necesitados. </h3>
          <h3 className='hsm:w-4/6 text-justify xsm:hidden hsm:text-xs'>En esta web, se destaca el trabajo de los refugios que brindan un hogar a los animales necesitados. </h3>
          <div className='xsm:flex md:gap-x-3 xsm:gap-x-2 items-center md:text-base sm:text-sm hsm:text-xs hsm:hidden'>
            <h3>Visita nuestras redes:</h3>
            <span className='md:w-6 md:h-6 sm:w-5 sm:h-5 xsm:w-4 xsm:h-4 icon-[mdi--instagram] hover:cursor-pointer' onClick={() => redirect('https://www.instagram.com')}></span>
          </div>
        </div>
      </div>
    </div>
  )
}