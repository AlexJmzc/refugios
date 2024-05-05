import Logo from '../../assets/img/logo.png';

export const Header = () => {
    return (
        <div className='bg-primary absolute w-screen flex justify-around'>
            <div className='flex gap-x-3 items-center'>
                <img className='w-20 h-20' src={Logo} alt="Refugees logo" />
                <h1 className='text-white'>Refugees</h1>
            </div>

            <div className='flex gap-x-4 items-center text-white'>
                <a href="#about">About</a>
                <a href="#refugees">Refugees</a>
            </div>
        </div>
    )
}