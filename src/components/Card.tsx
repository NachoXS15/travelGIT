import { NavLink } from "react-router-dom"
import { PackageProps } from "../config/types"
import CategoryTag from "./ui/CategoryTag"
import { VerMas } from "./ui/buttons"
export default function Card({ id, destino, salida, categoria, imgUrl }: PackageProps) {
  return (
    <div style={{ fontFamily: 'Mundial' }} className="flex justify-between flex-col w-full rounded-lg h-fit md:h-96 shadow-2xl p-5 bg-lightgray md:w-72 hover:border-bluemain">
      <div>
        <img src={imgUrl[0]} className="w-full h-full aspect-video md:h-max" alt="" />
        <h1 className="font-bold text-2xl uppercase mt-3" >{destino}</h1>
        <CategoryTag categoria={categoria} />
        <p className="font-light mt-1">Salida: {salida}</p>
      </div>
      <NavLink
        to={`/paquetes/${id}`}
      >
        <VerMas>
          Ver más
        </VerMas>
      </NavLink>
    </div>
  )
}
