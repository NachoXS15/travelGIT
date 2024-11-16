import Layout from "../components/Layout";
import Gallery from "../components/ui/Gallery";
import TestimonyCard from "../components/ui/TestimonyCard";
import Testimonies from "../config/Testimonies";
export default function Testimony() {
  return (
    <Layout>
      <section className="w-full h-[350px] bg-cover bg-center"
        style={{ backgroundImage: `url("https://www.10wallpaper.com/wallpaper/1920x1080/1410/Best_Nature_Views-Scenery_HD_Wallpaper_1920x1080.jpg")` }}>
        <div className="w-full h-full flex justify-center items-center bg-bluesec bg-opacity-70">
          <p className="text-white text-4xl font-semibold md:text-7xl" style={{ fontFamily: 'Mundial' }}>TESTIMONIOS</p>
        </div>
      </section>
      <h2 className="font-bold text-5xl text-center my-10 text-bluemain" style={{fontFamily: 'Mundial'}}>Algunos mensajes de nuestros pasajeros</h2>
      <hr className="w-20 m-auto border border-bluemain" />
      <section className="w-full px-5 md:w-full h-fit flex flex-wrap justify-start my-5 md:px-32 md:my-10">
        {
          Testimonies.map(test => (
            <TestimonyCard passenger={test.passenger} msg={test.msg} />
          ))
        }
      </section>
      <h2 className="font-bold text-5xl text-center my-10 text-bluemain" style={{fontFamily: 'Mundial'}}>¡Postales de nuestros viajeros!</h2>
      <hr className="w-20 m-auto border border-bluemain" />
      <Gallery />
    </Layout>
  )
}
