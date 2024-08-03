import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import DolarNow from './DolarNow'
type props = React.PropsWithChildren<object>

export default function Layout({ children }: props) {
    return (
        <>
            <div className='w-full min-h-screen flex flex-col justify-between items-centerx'>
                <header className="max-w-full shadow-2xl">
                    <DolarNow />
                    <div className='flex justify-around items-center py-4'>
                        <NavLink to="/">
                            <img src={logo} width={150} alt="" />
                        </NavLink>
                        <nav>
                            <NavLink className="hover:scale-150 transition mx-5 text-lg text-bluemain" style={{ fontFamily: 'Mundial' }} to="/paquetes">Paquetes</NavLink>
                            <NavLink className="hover:scale-150 transition mx-5 text-lg text-bluemain" style={{ fontFamily: 'Mundial' }} to="/guias">Guias</NavLink>
                            <NavLink className="hover:scale-150 transition mx-5 text-lg text-bluemain" style={{ fontFamily: 'Mundial' }} to="/about">Nosotros</NavLink>
                        </nav>
                    </div>
                </header>
                {children}
                <footer className='w-full h-[200px] bg-bluesec'>
                    <h2>contact</h2>
                </footer>
            </div>
        </>
    )
}
