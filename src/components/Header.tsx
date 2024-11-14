import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { CloseIcon, MenuIcon } from './ui/Icons'

export default function Header() {
    const [isClick, setIsClick] = useState(false)

    const toggleNavBar = () => {
        setIsClick(!isClick)
    }

    return (
        <>
            <div className='flex justify-between items-center py-4 md:py-4 px-7 md:justify-around select-none drop-shadow-sm'>
                <NavLink to="/">
                    <img src={logo} width={150} alt="" />
                </NavLink>
                <nav className='hidden md:block'>
                    <NavLink className="mx-5 text-lg text-bluemain md:hover:scale-150 transition" style={{ fontFamily: 'Mundial' }} to="/paquetes">Paquetes</NavLink>
                    <NavLink className="mx-5 text-lg text-bluemain md:hover:scale-150 transition" style={{ fontFamily: 'Mundial' }} to="/about">Nosotros</NavLink>
                    <NavLink className="mx-5 text-lg text-bluemain md:hover:scale-150 transition" style={{ fontFamily: 'Mundial' }} to="/testimonies">Testimonios</NavLink>
                    <NavLink className="mx-5 text-lg text-bluemain md:hover:scale-150 transition" style={{ fontFamily: 'Mundial' }} to="/contactanos">Contactanos</NavLink>
                </nav>
                <div className='md:hidden flex items-center justify-center' onClick={toggleNavBar}>
                    {isClick ? <CloseIcon /> : <MenuIcon />}
                </div>
            </div>
            {isClick && (
                <div className=' md:hidden h-fit py-2 bottom-0 shadow-2xl'>
                    <hr className='w-3/5 m-auto border-2 border-bluemain' />
                    <div className='flex flex-col mt-3'>
                        <NavLink className="hover:scale-105 transition my-2 mx-9 text-lg text-bluemain" style={{ fontFamily: 'Mundial' }} to="/paquetes">Paquetes</NavLink>
                        <NavLink className="hover:scale-105 transition my-2 mx-9 text-lg text-bluemain" style={{ fontFamily: 'Mundial' }} to="/testimonies">Testimonios</NavLink>
                        <NavLink className="hover:scale-105 transition my-2 mx-9 text-lg text-bluemain" style={{ fontFamily: 'Mundial' }} to="/about">Nosotros</NavLink>
                        <NavLink className="hover:scale-105 transition my-2 mx-9 text-lg text-bluemain" style={{ fontFamily: 'Mundial' }} to="/contactanos">Contactanos</NavLink>
                    </div>
                </div>
            )}
        </>
    )
}
