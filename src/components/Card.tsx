import { NavLink } from "react-router-dom"
import PackageProps from "../config/PackageType"
import CategoryTag from "./ui/CategoryTag"
export default function Card({ id, destino, salida, categoria, imgUrl }: PackageProps) {
  return (
    <div style={{ fontFamily: 'Mundial' }} className="flex justify-between flex-col w-full rounded-lg sm:h-fit md:h-96 shadow-2xl p-5 bg-lightgray md:w-72 hover:border-bluemain">
      <div>
        <img src={imgUrl ? imgUrl : "https://fondosmil.co/fondo/2257.jpg"} className="w-full h-36 aspect-video" alt="" />
        <h1 className="font-bold text-2xl uppercase mt-3" >{destino}</h1>
        <CategoryTag categoria={categoria} />
        <p className="font-light mt-1">Salida: {salida}</p>
      </div>
      <NavLink
        to={`/paquetes/:${id}`}
        className="w-fit bg-bluesec mt-5 rounded-full py-1 px-4 text-white hover:border-bluemain hover:bg-white hover:text-bluesec transition duration-300">
        Ver Más
      </NavLink>
    </div>
  )
}
