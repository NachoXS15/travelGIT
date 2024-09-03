import { useState } from "react";
import Layout from "../components/Layout";
import { Compass } from "../components/ui/Icons";
import GetPackages from "../config/api/getPackages";
import categories from "../config/Categories";
import { useParams } from "react-router";


export default function Packages() {
  //revisa si viene una categoria por parametros y la asigna, si no existe, se utiliza "Todas"
  const {id} = useParams();
  const [word1, word2] = (id?.split(/(?=[A-Z])/)) ?? [];
  const categoryPassed = word1 && word2 ? `${word1} ${word2}` : word1 ?? "";
  const [categorySelected, setCategorySelected] = useState<string>(categoryPassed || "Todas")
  const handleCategory = (c: string) => {
    setCategorySelected(c)
  }

  return (
    <Layout>
      <section className="w-full h-[350px] bg-cover bg-center"
        style={{ backgroundImage: `url("https://www.10wallpaper.com/wallpaper/1920x1080/1410/Best_Nature_Views-Scenery_HD_Wallpaper_1920x1080.jpg")` }}>
        <div className="w-full h-full flex justify-center items-center bg-bluesec bg-opacity-70">
          <p className="text-white text-4xl font-semibold md:text-7xl" style={{ fontFamily: 'Mundial' }}>PAQUETES</p>
        </div>
      </section>
      <section className="w-full m-auto h-fit pt-5 pb-10 md:px-5 flex flex-col justify-center items-center">
        <div className="mb-8 text-center">
          <h2 className="text-bluemain text-center text-4xl font-extrabold">ELEGÍ TU PRÓXIMO DESTINO</h2>
          <hr className='w-2/5 m-auto border text-bluesec text-center mt-4' />
          <div className="w-full mt-4 text-center m-auto flex flex-wrap justify-center items-center">
            {categories.map((c, i) => (
              <button
                key={i}
                onClick={() => handleCategory(c)}
                className={`w-fit text-nowrap py-0.5 px-2 m-1 flex items-center gap-2 rounded-full md:px-2 md:pr-4 
                  ${categorySelected === c ? 'bg-bluesec text-white' : 'bg-darkgray text-lightgray hover:bg-bluemain'}`}
              >
                <Compass />
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-5 m-auto md:w-8/12 max-lg:w-10/12 md:items-center md:gap-y-6 md:gap-x-3 md:px-10 ">
          <GetPackages categoryProp={categorySelected} />
        </div>
      </section>
    </Layout>
  )
}