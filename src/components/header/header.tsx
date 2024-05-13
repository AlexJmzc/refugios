import Logo from '../../assets/img/logoMain.png';

export const Header = () => {

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        section && section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='bg-gray-200 w-screen flex justify-around sticky pt-3'>
            <div className='flex gap-x-3 items-center justify-center cursor-pointer' onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                <span className="w-20 h-16 icon-[streamline--pets-allowed]"></span>
                <h2 className='font-main'>HOMEFORPAWS</h2>
            </div>

            <div className='flex gap-x-12 items-center font-main'>
                <a className='transition duration-300' href='#home' onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Inicio</a>
                <a className='transition duration-300' href='#refugees' onClick={(e) => { e.preventDefault(); scrollToSection('refugees'); }}>Refugios</a>
                <a className='transition duration-300' href='#help' onClick={(e) => { e.preventDefault(); scrollToSection('help'); }}>Ayuda</a>
            </div>
        </div>
    )
}