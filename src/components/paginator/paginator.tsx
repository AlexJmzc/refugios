import { useState, useEffect } from 'react';
import { Shelter } from '../../assets/interfaces/shelter';

import { englishData, spanishData } from './paginatorData';


interface PaginatorProps {
    shelters: number,
    setShelters: (shelters: number) => void,
    data: Shelter[],
    language: string
}

export const Paginator = ({ shelters, data, setShelters, language }: PaginatorProps) => {

    const [paginatorData, setPaginatorData] = useState(spanishData);


    useEffect(() => {
        switch (language) {
          case 'English':
              setPaginatorData(englishData);
              break;
        
          default:
              setPaginatorData(spanishData);
              break;
        }
        
      }, [language])


    const nextPage = () => {
        setShelters(shelters + 8);
    }

    const previousPage = () => {
        setShelters(shelters - 8);
    }

    return (
        <>
            <div className="flex flex-col items-center">
                <span className="text-sm">
                    { paginatorData.show } <span className="font-semibold text-gray-900">{data.length > 0 ? shelters + 1 : shelters}</span> - <span className="font-semibold text-gray-900">{shelters + 8 > data.length ? data.length : shelters + 8}</span> { paginatorData.of } <span className="font-semibold text-gray-900">{data.length}</span> { paginatorData.results }
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                    {
                        shelters >= 8
                            ?
                            <button 
                                className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                onClick={previousPage}
                                >
                                <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                                </svg>
                                { paginatorData.btnPrevious }
                            </button>
                            :
                            <></>
                    }

                    {
                        shelters < data.length - 8
                            ?
                            <button 
                                className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                onClick={nextPage}
                            > 
                                { paginatorData.btnNext }
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
