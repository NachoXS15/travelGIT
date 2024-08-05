import DolarNow from './DolarNow'
import Footer from './Footer'
import Header from './Header'

type props = React.PropsWithChildren<object>

export default function Layout({ children }: props) {
    return (
        <>
            <div className='w-full min-h-screen flex flex-col justify-between'>
                <header className="max-w-full">
                    <DolarNow />
                    <Header />
                </header>
                {children}
                <Footer />
                <div className='w-full text-center bg-bluesec'>
                    <hr className='w-4/5 m-auto border bg-white text-white text-center' />
                    <p className='text-white text-md py-4 font-semibold'>Copyright © 2024 TravelGIT | Todos los derechos reservados</p>                
                </div>
            </div>
        </>
    )
}
