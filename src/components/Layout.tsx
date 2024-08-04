import DolarNow from './DolarNow'
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
                <footer className='w-full h-[200px] bg-bluesec'>
                    <h2>contact</h2>
                </footer>
            </div>
        </>
    )
}
