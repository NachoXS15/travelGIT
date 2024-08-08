import { NavLink } from 'react-router-dom'
import { Tools } from './ui/Icons'

export default function WIP() {
  return (
    <div className='w-full h-fit my-20 flex flex-col justify-center items-center'>
        <Tools />
        <h2 className='font-bold text-2xl uppercase text-white bg-bluesec px-5 py-2 rounded-xl'>En construcción</h2>
        <NavLink className='mt-2 font-bold text-2xl uppercase text-bluemain underline hover:text-bluesec' to="/">Volver a Inicio</NavLink>

    </div>
  )
}
