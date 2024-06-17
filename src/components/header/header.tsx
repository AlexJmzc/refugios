import { useEffect, useState } from 'react';
import { englishData, spanishData } from './headerData';
import { Switch } from '../switch/switch';

import logo from '../../assets/img/logo.png';

interface LanguageProps {
    language: string,
    setLanguage: (language: string) => void
}


export const Header = ({ language, setLanguage }: LanguageProps) => {

    const [headerData, setHeaderData] = useState(spanishData);

    useEffect(() => {
        switch (language) {
            case 'English':
                setHeaderData(englishData);
                break;

            default:
                setHeaderData(spanishData);
                break;
        }

    }, [language])


    const languageChange = (id: string) => {
        setLanguage(id);
    }


    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        section && section.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <div className='bg-gray-200 w-screen hsm:pb-4 sm:pb-0 flex justify-between xsm:px-12 hsm:px-6 sticky top-0 z-50 pt-3'>
            <div className='flex items-center gap-x-2 justify-center cursor-pointer' onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                <img src={logo}
                 className='md:w-12 md:h-12 xsm:w-10 xsm:h-10'
                 alt="Logo" />
                <h2 className='font-main text-violet-800 md:text-2xl xsm:text-base xsm:block hsm:hidden'>HOMEFORPAWS</h2>
            </div>

            <div className='flex xsm:gap-x-12 hsm:gap-x-4 items-center font-medium xsm:text-base hsm:text-sm'>
                <div className='flex gap-x-1 items-center cursor-pointer' onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                    <span className="icon-[material-symbols--home]"></span>
                    <a className='transition duration-300' href='#home'>{headerData.home}</a>
                </div>

                <div className='flex gap-x-1 items-center cursor-pointer' onClick={(e) => { e.preventDefault(); scrollToSection('shelters'); }}>
                    <span className="icon-[teenyicons--paws-outline]"></span>
                    <a className='transition duration-300' href='#shelters'>{headerData.shelters}</a>
                </div>

                <div className='flex gap-x-1 items-center cursor-pointer' onClick={(e) => { e.preventDefault(); scrollToSection('help'); }}>
                    <span className="icon-[material-symbols--help]"></span>
                    <a className='transition duration-300' href='#help'>{headerData.help}</a>
                </div>

                <Switch changeLanguage={languageChange}/>

            </div>
        </div>
    )
}