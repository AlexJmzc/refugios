export const Header = () => {

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        section && section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='bg-gray-200 w-screen flex justify-between px-12 sticky pt-3'>
            <div className='flex items-center justify-center cursor-pointer' onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                <span className="w-16 h-12 icon-[streamline--pets-allowed]"></span>
                <h2 className='font-main'>HOMEFORPAWS</h2>
            </div>

            <div className='flex gap-x-12 items-center font-medium'>
                <div className='flex gap-x-1 items-center cursor-pointer' onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                    <span className="icon-[material-symbols--home]"></span>
                    <a className='transition duration-300' href='#home'>Inicio</a>
                </div>

                <div className='flex gap-x-1 items-center cursor-pointer' onClick={(e) => { e.preventDefault(); scrollToSection('refugees'); }}>
                    <span className="icon-[teenyicons--paws-outline]"></span>
                    <a className='transition duration-300' href='#refugees'>Refugios</a>
                </div>

                <div className='flex gap-x-1 items-center cursor-pointer' onClick={(e) => { e.preventDefault(); scrollToSection('help'); }}>
                <span className="icon-[material-symbols--help]"></span>
                    <a className='transition duration-300' href='#help'>Ayuda</a>
                </div>

            </div>
        </div>
    )
}