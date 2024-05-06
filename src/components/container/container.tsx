import { useState } from "react";
import { refugeesData } from "../../assets/data/refugees"
import { Card } from "../card/card";
import { Paginator } from "../paginator/paginator";

export const Container = () => {
  const [refugees, setRefugees] = useState(0);

  return (
    <div className='bg-secondary pb-4'>
      <div className='grid grid-cols-3 min-h-screen h-max place-items-center'>
        {
          refugeesData.slice(refugees, refugees + 6).map((refugee) => (
            <Card refugee={refugee} />
          ))
        }
      </div>
      <Paginator refugees={refugees} data={refugeesData} setRefugees={setRefugees}/>
    </div>
  )
}