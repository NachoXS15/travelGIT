import Layout from "../components/Layout";
import { Compass } from "../components/ui/Icons";
import GetPackages from "../config/api/getPackages";
import categories from "../config/Categories";

export default function Packages() {

  return (
    <Layout>
      <section className="w-full h-[350px] bg-cover bg-center"
        style={{ backgroundImage: `url("https://www.10wallpaper.com/wallpaper/1920x1080/1410/Best_Nature_Views-Scenery_HD_Wallpaper_1920x1080.jpg")` }}>
        <div className="w-full h-full flex justify-center items-center bg-bluesec bg-opacity-70">
          <p className="text-white text-4xl font-semibold md:text-7xl" style={{ fontFamily: 'Mundial' }}>PAQUETES</p>
        </div>
      </section>
      <section className="w-full m-auto h-fit pt-5 pb-10 px-5">
        <div className="mb-8 text-center">
          <h2 className="text-bluemain text-center text-4xl font-extrabold">ELEGÍ TU PRÓXIMO DESTINO</h2>
          <hr className='w-2/5 m-auto border text-bluesec text-center mt-4' />
          <div className="w-full mt-4 text-center m-auto flex flex-wrap justify-center items-center">
            {categories.map((category) => (
              <div className="w-fit text-nowrap py-0.5 px-2 m-1 flex items-center gap-2 bg-darkgray text-lightgray md:px-2 md:pr-4 rounded-full hover:">
                <Compass />
                {category}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-5 m-auto md:w-4/5 justify-center md:gap-7">
          <GetPackages />
        </div>
      </section>
    </Layout>
  )
}
