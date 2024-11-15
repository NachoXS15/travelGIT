import Layout from "../components/Layout";
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
      <section className="w-full md:w-full h-fit flex flex-wrap justify-center gap-10 my-10">
        {
          Testimonies.map(test => (
            <TestimonyCard passenger={test.passenger} msg={test.msg} />
          ))
        }
      </section>
    </Layout>
  )
}
