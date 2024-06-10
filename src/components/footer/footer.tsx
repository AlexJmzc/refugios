import FooterImage from '../../assets/img/footerImage.jpg';
import { useEffect, useState } from 'react';

import { englishData, spanishData } from './footerData';

interface footerProps {
  language: string
}

export const Footer = ( { language }:footerProps ) => {

  const [footerData, setFooterData] = useState(spanishData);

  useEffect(() => {
    switch (language) {
      case 'English':
          setFooterData(englishData);
          break;
    
      default:
          setFooterData(spanishData);
          break;
    }
    
  }, [language])

  const redirect = (url: string) => {
    window.location.href = url;
  }

  return (
    <div className='w-screen bg-gray-200 py-4' id='help'>
      <div className='bg-gradient-to-r from-red-100 via-gray-100 to-violet-100  grid xsm:grid-cols-2 hsm:grid-cols-1 rounded-2xl mx-7 py-6 gap-y-3'>
        <div className='flex justify-center items-center'>
          <img className='w-2/3 rounded-e-full' src={FooterImage} alt="Help" />
        </div>

        <div className='flex flex-col items-center md:gap-y-5 xsm:gap-y-4 hsm:gap-y-3'>
          <h2 className='font-bold md:text-lg sm:text-base xsm:text-sm'>
            { footerData.title }
          </h2>

          <h2 className="font-medium text-justify sm:text-base xsm:text-sm xsm:mr-4 xsm:px-0 hsm:px-4">
            { footerData.subtitle }
          </h2>

          <div className='bg-white grid grid-cols-1 gap-y-4 justify-items-center p-6 md:w-3/5 xsm:w-4/5 rounded-3xl font-semibold'>
            <div className=' flex flex-col items-center w-auto'>
              <h2>{ footerData.web }</h2>
              <h2>{ footerData.name }</h2>
              <h2>{ footerData.country }</h2>
              <h2>{ footerData.city }</h2>
            </div>

            <div className='flex justify-center items-center gap-x-4'>
              <span className="md:w-6 md:h-6 xsm:w-5 xsm:h-5 icon-[mdi--instagram] hover:cursor-pointer" onClick={() => redirect('https://www.instagram.com')}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}