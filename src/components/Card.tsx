import PackageProps from "../config/PackageType"
export default function Card({destino, salida, categoria}: PackageProps) {
  return (
    <div style={{fontFamily: 'Mundial'}} className="w-full rounded-lg sm:h-fit md:h-96 shadow-2xl p-5 bg-lightgray md:w-72 hover:border-bluemain">
      <img src="https://fondosmil.co/fondo/2257.jpg" alt="" />
      <div>
        <h1 className="font-bold text-2xl uppercase mt-3" >{destino}</h1>
        <p className="font-light mt-1">Salida: {salida}</p>
        <button className="bg-bluesec mt-5 rounded-full py-1 px-4 text-white hover:border-bluemain hover:bg-white hover:text-bluesec transition duration-300">Ver Más</button>
      </div>
    </div>
  )
}
