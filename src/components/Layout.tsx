import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import DolarNow from './DolarNow'
type props = React.PropsWithChildren<object>
export default function Layout({ children }: props) {
    return (
        <>
            <div className='w-full min-h-screen flex flex-col justify-between items-centerx'>
                <header className="w-full h-[80px] ">
                    <DolarNow />
                    <div className='flex justify-around items-center py-4'>
                        <img src={logo} width={150} alt="" />
                        <nav>
                            <NavLink className="mx-5 text-lg text-bluemain" style={{fontFamily: 'Mundial'}} to="/">Paquetes</NavLink>
                            <NavLink className="mx-5 text-lg text-bluemain" style={{fontFamily: 'Mundial'}} to="/">Guias</NavLink>
                            <NavLink className="mx-5 text-lg text-bluemain" style={{fontFamily: 'Mundial'}} to="/">Contacto</NavLink>
                            <NavLink className="mx-5 text-lg text-bluemain" style={{fontFamily: 'Mundial'}} to="/">Nosotros</NavLink>
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
