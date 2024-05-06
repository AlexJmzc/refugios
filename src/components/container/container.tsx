import { refugeesData } from "../../assets/data/refugees"
import { Card } from "../card/card";

export const Container = () => {
  return (
    <div className="bg-secondary grid grid-cols-3 min-h-screen h-max place-items-center">
        {
            refugeesData.map((refugee) => (
                <Card refugee={refugee}/>
            ))
        }
    </div>
  )
}
