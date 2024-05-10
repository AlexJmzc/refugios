import { useEffect, useState } from "react";
import { refugeesData } from '../../assets/data/refugees';
import { Card } from "../card/card";
import { Paginator } from "../paginator/paginator";
import { Search } from "../search/search";
import { Refugee } from "../../assets/interfaces/refugee";

export const Container = () => {
  const [data, setData] = useState<Refugee[]>(refugeesData);
  const [refugees, setRefugees] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filtered = refugeesData.filter((item) => {
      const country = item.country.toUpperCase();
      const state = item.state?.toUpperCase();
      const city = item.city?.toUpperCase();

      const matchesCountry = 
        search === "" || country.includes(search);

      const matchesState =
        search === "" || state?.includes(search);

      const matchesCity =
        search === "" || city?.includes(search);

      console.log(search)

      return matchesCountry || matchesState || matchesCity;
    });

    setData(filtered.slice().reverse());

  }, [search])

  return (
    <div className='bg-primary min-h-screen w-screen pb-4'>
      <div className='flex flex-col items-center justify-center'>
        <Search setSearch={setSearch}/>
      </div>
  
      <div className='grid grid-cols-4 h-fit place-items-center'>
        {
          data.length >= 8
          ?
            data?.slice(refugees, refugees + 8).map((refugee) => (
              <Card refugee={refugee} />
            ))
          :
            data?.map((refugee) => (
              <Card refugee={refugee} />
            ))
        }
      </div>
      <Paginator refugees={refugees} data={data} setRefugees={setRefugees}/>
    </div>
  )
}