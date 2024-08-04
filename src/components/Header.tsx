import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

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
                    {isClick ? (<svg className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="blue" >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>

                    ) : <svg className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="blue">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>}

                </div>
            </div>
            {isClick && (
                <div className='md:hidden shadow-2xl transition'>
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
