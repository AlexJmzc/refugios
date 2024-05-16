export const Header = () => {

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        section && section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='bg-gray-200 w-screen flex justify-between xsm:px-12 hsm:px-6 sticky pt-3'>
            <div className='flex items-center gap-x-2 justify-center cursor-pointer' onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                <span className="md:w-16 md:h-14 xsm:w-10 xsm:h-8 icon-[streamline--pets-allowed]"></span>
                <h2 className='font-main md:text-2xl xsm:text-base xsm:block hsm:hidden'>HOMEFORPAWS</h2>
            </div>

            <div className='flex xsm:gap-x-12 hsm:gap-x-4 items-center font-medium xsm:text-base hsm:text-sm'>
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