interface SearchProps {
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export const Search = ( {setSearch}: SearchProps ) => {

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const inputValue = e.target.value;
        setSearch(inputValue.toUpperCase());
    }

    return (
        <>
            <div className="pt-5 relative">
                <div className="absolute inset-y-0 start-0 flex items-center mt-4 ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input 
                    type="search" 
                    id="search" 
                    className="block w-72 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                    placeholder="Pais, provincia o ciudad" 
                    onChange={handleInputChange}
                />
            </div>
        </>
    )
}

