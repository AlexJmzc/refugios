import { useState } from 'react';

import usaFlag from '../../assets/img/usa1.png';
import ecFlag from '../../assets/img/ec1.png';


interface SwitchProps
 {
    changeLanguage: (id: string) => void;
 }

export const Switch = ( { changeLanguage }: SwitchProps ) => {

    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);

        let id = isChecked ? 'Spanish' : 'English';
        
        changeLanguage(id);
    };


    return (
        <label className="relative inline-block w-14 h-7">
            <input
                type="checkbox"
                className="opacity-0 w-0 h-0 peer"
                checked={isChecked}
                onChange={handleToggle}
            />
            <span
                className={`absolute cursor-pointer inset-0 bg-gray-300 transition duration-300 rounded-full ${
                    isChecked ? `bg-violet-600` : `bg-violet-700`
                }`}
            ></span>
            <span
                className={`absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 cursor-pointer
                    ${isChecked ? 'translate-x-7' : 'translate-x-0'}`}

                style={{
                    backgroundImage: `url(${isChecked ? usaFlag : ecFlag})`,
                    backgroundSize: 'cover',
                }}
            ></span>
        </label>
    )
}