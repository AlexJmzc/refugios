import { useEffect, useState } from "react";
import { SheltersData } from '../../assets/data/shelters';
import { Card } from "../card/card";
import { Paginator } from "../paginator/paginator";
import { Search } from "../search/search";
import { Shelter } from "../../assets/interfaces/shelter";

interface containerProps {
  language: string
}

export const Container = ( { language }:containerProps) => {
  
  const [data, setData] = useState<Shelter[]>(SheltersData);
  const [shelters, setShelters] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filtered = SheltersData.filter((item) => {
      const country = item.country.toUpperCase();
      const state = item.state?.toUpperCase();
      const city = item.city?.toUpperCase();

      const matchesCountry = 
        search === "" || country.includes(search);

      const matchesState =
        search === "" || state?.includes(search);

      const matchesCity =
        search === "" || city?.includes(search);

      return matchesCountry || matchesState || matchesCity;
    });

    setData(filtered.slice().reverse());

  }, [search])

  return (
    <div className='bg-gray-200 min-h-screen w-screen py-6' id='shelters'>
      <div className='flex flex-col items-center justify-center py-6'>
        <Search setSearch={setSearch}/>
      </div>
  
      <div className='grid lg:grid-cols-4 md:grid-cols-3 xsm:grid-cols-2 h-fit place-items-center'>
        {
          data.length >= 8
          ?
            data?.slice(shelters, shelters + 8).map((Shelter) => (
              <Card shelter={Shelter} />
            ))
          :
            data?.map((shelter) => (
              <Card shelter={shelter} />
            ))
        }
      </div>
      <Paginator shelters={shelters} data={data} setShelters={setShelters}/>
    </div>
  )
}