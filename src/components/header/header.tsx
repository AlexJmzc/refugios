import Logo from '../../assets/img/logo.png';

export const Header = () => {
    return (
        <div className='bg-primary w-screen flex justify-around'>
            <div className='flex gap-x-3 items-center'>
                <img className='w-20 h-20' src={Logo} alt="Refugees logo" />
            </div>

            <div className='flex gap-x-12 items-center text-white'>
                <a href="#about">Inicio</a>
                <a href="#refugees">Refugios</a>
            </div>
        </div>
    )
}