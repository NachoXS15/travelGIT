import { NavLink } from 'react-router-dom'
import { SadFace } from './ui/Icons'

export default function Error404() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center my-20">
            <SadFace />
            <p className="uppercase text-2xl mt-5" style={{ fontFamily: 'Mundial' }}>No se encontró la pagina que estás buscando</p>
            <NavLink className='mt-2 font-bold text-2xl uppercase text-white bg-bluesec px-5 py-2 rounded-xl' to="/">Volver a Inicio</NavLink>
        </div>
    )
}
