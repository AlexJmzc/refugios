import { Refugee } from '../../assets/interfaces/refugee';

interface CardProps {
  refugee: Refugee;
}

export const Card = ({ refugee }: CardProps) => {

  const flags = (country: String) => {
    
    switch(country.toUpperCase()) {
        case "ECUADOR":
          return <span className="w-5 h-5 icon-[openmoji--flag-ecuador]"></span>;

        case "ARGENTINA":
          return <span className="w-5 h-5 icon-[twemoji--flag-for-flag-argentina]"></span>

        default:
          return <span className=""></span>
          
    }
  }

  return (
    <div className="max-w-sm bg-secondary w-72 my-6 border border-gray-200 rounded-lg transition-transform hover:scale-105">
      <a href={refugee.web}>
        <img className="rounded-t-lg" src={refugee.img} alt="" />
      </a>
      <div className="p-5 bg-tertiary rounded-b-lg">
        <a href={refugee.web}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-center">{refugee.name}</h5>
        </a>

        <a href={refugee.web} className='flex gap-x-3 justify-center items-center'>
          {flags(refugee.country)}
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-center">{refugee.country}</h5>
        </a>

        <a href={refugee.web}>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-center">{refugee.state}, {refugee.city}</h5>
        </a>

        <a href={refugee.web}>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-center">{refugee.address}</h5>
        </a>

        <a href={refugee.web}>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-center">{refugee.phone}</h5>
        </a>

        <div className='flex flex-col items-center'>
          <a href={refugee.web} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-fifth rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:bg-secondary">
            Ver más
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}