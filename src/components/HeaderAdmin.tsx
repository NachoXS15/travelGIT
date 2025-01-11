import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { LogOut } from './ui/Icons'
import { logOutAuth } from '../config/auth/authServices'
export default function HeaderAdmin() {

    return (
        <>
            <div style={{ fontFamily: 'Mundial' }} className='flex justify-between flex-col gap-2 md:gap-0 items-center py-4 md:py-4 px-7 md:flex-row md:justify-around select-none drop-shadow-sm'>
                <NavLink to="/">
                    <img src={logo} className='w-[220px] md:w-[200px]' alt="" />
                </NavLink>
                <hr className="w-4/5 m-auto border border-bluemain md:hidden " />
                <div className='flex items-center gap-5'>
                    <h2 className='text-xl text-bluesec text-center'>Sistema de Autogestión de paquetes de viaje</h2>
                    <button className={`${window.location.pathname == "/admin/check/dashboard" ? "block" : "hidden"}`} onClick={logOutAuth}><LogOut size={24} color='#3c41b0' /></button>
                </div>
            </div>
            <hr className="hidden md:block md:w-4/5 md:m-auto md:border md:border-bluemain " />

        </>
    )
}