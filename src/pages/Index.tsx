import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import { PackageProps } from "../config/types";
import Card from "../components/Card";
import { Slides, Texts } from "../config/IndexInfo";
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import Loader from "../components/ui/loaders/Loader";
import CardGroup from "../components/ui/CardGroup";
import flyerPromocion from '../assets/mdq.webp'
import { Cancel } from "../components/ui/Icons";

export default function Index() {
  const [packages, setPackages] = useState<PackageProps[]>([]);
  const [showPopup, setShowPopup] = useState<boolean>(true)

  const db = getFirestore();
  const fetchData = async () => {
    try {
      const response = await getDocs(collection(db, 'paquetes'));
      const dataList = response.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as PackageProps[];
      setPackages(dataList);
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  useEffect(() => {
    if (showPopup) {
      document.body.classList.add("overflow-hidden")
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.body.classList.remove("overflow-hidden")
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showPopup])

  const promotedPackages = packages.filter(item => item.isPromoted)

  return (
    <Layout>
      <main >
        <section className="max-w-full h-fit mb-5 user-select-none">
          <Slider images={Slides} text={Texts} />
        </section>
        <CardGroup />
        <section className="w-full m-auto h-fit pt-5 pb-10 px-5">
          <div className="mb-8 text-center">
            <h2 className="text-bluemain text-center text-4xl font-extrabold">DESTINOS RECOMENDADOS</h2>
            <hr className='w-2/5 m-auto border text-bluesec text-center mt-4' />
          </div>
          <div className="flex flex-wrap items-center gap-5 m-auto md:w-4/5 justify-center md:gap-7">
            {promotedPackages && promotedPackages.length > 0 ? (
              promotedPackages.slice(0, 6).map((pkg) => (
                <Card key={pkg.id} id={pkg.id} salida={pkg.salida} destino={pkg.destino} isPromoted={pkg.isPromoted} imgUrl={pkg.imgUrl} categoria={pkg.categoria} />
              ))
            ) : (
              <Loader />
            )}
          </div>
        </section>
      </main>
      {
        showPopup && (
          <div onClick={() => setShowPopup(!showPopup)} className="min-h-screen w-full z-50 bg-black bg-opacity-60 fixed grid grid-cols-1 place-items-center">
            <div className="relative">
              <div className="w-fit h-fit cursor-pointer hover:scale-105 transition" >
                <button className="bg-white rounded-full relative right-0"><Cancel size={40} stroke={3.2} /></button>
              </div>
              <img src={flyerPromocion} className="w-64 xl:w-80" alt="" />
              <p className="text-center">
                <a style={{fontFamily: 'Mundial'}} className="w-fit h-fit underline text-white text-center text-3xl" title="linkPaquete" href="https://travelgit.tur.ar/paquete/UqVfbCw2Y75yimpuR3hZ">Ver paquete</a>
              </p>
            </div>
          </div>
        )
      }
    </Layout>
  )
}