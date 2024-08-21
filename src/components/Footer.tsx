import logoBlanco from '../assets/logoblanco.png'
import { Facebook, Instagram, Mail, Phone, Pin } from './ui/Icons'

export default function Footer() {
    return (
        <>
            <footer className='w-full h-fit bg-bluesec flex flex-col justify-center px-5 py-3 md:items-start md:px-20 md:pt-10' style={{ fontFamily: 'Mundial' }}>
                <div className='w-full md:flex flex-row'>
                    <div className='w-full flex flex-col justify-start m-0'>
                        <img src={logoBlanco} alt="" width={150} className='mt-4 mb-3' />
                        <p className='text-white text-left w-80 text-wrap'>Somos una agencia de viajes riojana orientada a otorgar la mejor experiencia a nuestros viajeros.</p>
                        <div className='flex gap-4 mt-4'>
                            <a className='hover:scale-1 transition' href="https://www.instagram.com/travelgitoficial/"><Instagram /></a>
                            <a className='hover:scale-1 transition' href="https://www.facebook.com/travelgit"><Facebook /></a>

                        </div>
                    </div>
                    <hr className='w-4/5 border m-5 bg-white text-white text-center md:hidden' />
                    <div className='w-full flex flex-col text-white'>
                        <h2 className='text-3xl mb-3'>Contacto</h2>
                        <nav className='flex flex-col gap-2 md:gap-4'>
                            <div className='flex gap-3 items-start'>
                                <Pin />
                                <h3>Galeria Susex Local 10, <br /> La Rioja, Argentina</h3>
                            </div>
                            <div className='flex gap-3 items-start'>
                                <Mail color='yellow' />
                                <h3>travelgit@gmail.com</h3>
                            </div>
                            <div className='flex gap-3 items-start'>
                                <Phone />
                                <h3>+54 9 3804-325711</h3>
                            </div>
                        </nav>
                    </div>
                    <hr className='w-4/5 border m-5 bg-white text-white text-center md:hidden' />
                    <div className='w-full flex flex-col  text-white'>
                        <h2 className='text-3xl'>Ubicación</h2>
                        <p>Encuentranos aquí</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13902.210108594923!2d-66.8570293!3d-29.4126436!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9427dbb53a260ab3%3A0xb743138d64cb7601!2sTRAVEL%20GIT!5e0!3m2!1ses-419!2sar!4v1722864554641!5m2!1ses-419!2sar" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                    </div>
                </div>
                <div className='w-full text-center bg-bluesec mt-10'>
                    <hr className='w-4/5 m-auto border bg-white text-white text-center' />
                    <div className='w-4/5 m-auto flex flex-col justify-between items-center md:flex-row'>
                        <p className='text-white text-md py-4 font-medium'>Copyright © 2024 TravelGIT | Todos los derechos reservados</p>
                        <p className='text-white text-md py-4 font-medium'>Desarrolado por <a target='_blank' href="https://www.linkedin.com/in/nachoxs15/" className='font-bold hover:underline'>Ignacio Joaquín Pantoja</a></p>
                    </div>
                </div>
            </footer>

        </>
    )
}
