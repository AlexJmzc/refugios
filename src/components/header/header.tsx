import Logo from '../../assets/img/logoMain.png';

export const Header = () => {

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        section && section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='bg-gray-300 w-screen flex justify-around sticky'>
            <div className='flex gap-x-3 items-center justify-center cursor-pointer' onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                <img className='w-11/12 h-20' src={Logo} alt='Refugees logo' />
            </div>

            <div className='flex gap-x-12 items-center font-semibold'>
                <a className='transition duration-300' href='#home' onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Inicio</a>
                <a className='transition duration-300' href='#refugees' onClick={(e) => { e.preventDefault(); scrollToSection('refugees'); }}>Refugios</a>
                <a className='transition duration-300' href='#help' onClick={(e) => { e.preventDefault(); scrollToSection('help'); }}>Ayuda</a>
            </div>
        </div>
    )
}