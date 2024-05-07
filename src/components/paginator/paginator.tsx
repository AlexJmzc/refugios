import { Refugee } from '../../assets/interfaces/refugee';


interface PaginatorProps {
    refugees: number,
    setRefugees: (refugees: number) => void,
    data: Refugee[]
}

export const Paginator = ({ refugees, data, setRefugees }: PaginatorProps) => {
    const nextPage = () => {
        setRefugees(refugees + 6);
    }

    const previousPage = () => {
        setRefugees(refugees - 6);
    }

    return (
        <>
            <div className="flex flex-col items-center">
                <span className="text-sm text-white">
                    Mostrando <span className="font-semibold text-gray-900 dark:text-white">{refugees + 1}</span> - <span className="font-semibold text-gray-900 dark:text-white">{refugees + 8 > data.length ? data.length : refugees + 8}</span> de <span className="font-semibold text-gray-900 dark:text-white">{data.length}</span> Resultados
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                    {
                        refugees >= 8
                            ?
                            <button 
                                className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                onClick={previousPage}
                                >
                                <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                                </svg>
                                Anterior
                            </button>
                            :
                            <></>
                    }

                    {
                        refugees < data.length - 8
                            ?
                            <button 
                                className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                onClick={nextPage}
                            > 
                                Siguiente
                                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                            :
                            <></>
                    }
                </div>
            </div>
        </>
    )
}
