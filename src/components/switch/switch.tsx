import React from 'react'

export const Switch = () => {
    return (
        <div className="relative inline-block w-12 h-6">
            <input type="checkbox" className="absolute opacity-0 w-0 h-0" />
            <div className="slider absolute top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full transition duration-300">
                <div className="before absolute w-6 h-6 rounded-full bg-white transform transition-transform translate-x-4"></div>
            </div>
        </div>
    )
}