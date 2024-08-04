import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { CloseIcon, MenuIcon } from './Icons'

export default function Header() {
    const [isClick, setIsClick] = useState(false)

    const toggleNavBar = () => {
        setIsClick(!isClick)
    }

    return (
        <>
            <div className='flex justify-between items-center py-4 md:py-5 px-7 md:justify-around'>
                <NavLink to="/">
                    <img src={logo} width={150} alt="" />
                </NavLink>
                <nav className='hidden md:block'>
                    <NavLink className="hover:scale-150 transition mx-5 text-lg text-bluemain" style={{ fontFamily: 'Mundial' }} to="/paquetes">Paquetes</NavLink>
                    <NavLink className="hover:scale-150 transition mx-5 text-lg text-bluemain" style={{ fontFamily: 'Mundial' }} to="/guias">Guias</NavLink>
                    <NavLink className="hover:scale-150 transition mx-5 text-lg text-bluemain" style={{ fontFamily: 'Mundial' }} to="/about">Nosotros</NavLink>
                </nav>
                <div className='md:hidden flex items-center justify-center' onClick={toggleNavBar}>
                    {isClick ? <CloseIcon /> : <MenuIcon />}
                </div>
            </div>
            {isClick && (
                <div className='md:hidden shadow-2xl z-40'>
                    <div className='flex flex-col '>
                        <NavLink className="hover:scale-105 transition my-2 mx-14 text-lg text-bluemain" style={{ fontFamily: 'Mundial' }} to="/paquetes">Paquetes</NavLink>
                        <NavLink className="hover:scale-105 transition my-2 mx-14 text-lg text-bluemain" style={{ fontFamily: 'Mundial' }} to="/guias">Guias</NavLink>
                        <NavLink className="hover:scale-105 transition my-2 mx-14 text-lg text-bluemain" style={{ fontFamily: 'Mundial' }} to="/about">Nosotros</NavLink>
                    </div>
                </div>
            )}

        </>
    )
}
