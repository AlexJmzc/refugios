import Logo from '../../assets/img/logoMain.png';

export const Header = () => {

    const redirect = () => {
        window.location.href = '/';
    }

    return (
        <div className='bg-primary w-screen flex justify-around'>
            <div className='flex gap-x-3 items-center justify-center cursor-pointer' onClick={redirect}>
                <img className='w-11/12 h-20' src={Logo} alt="Refugees logo" />
            </div>

            <div className='flex gap-x-12 items-center text-white'>
                <a href="#about">Inicio</a>
                <a href="#refugees">Refugios</a>
            </div>
        </div>
    )
}