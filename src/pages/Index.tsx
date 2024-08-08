import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import PackageProps from "../config/PackageType";
import Card from "../components/Card";
import { Slides, Texts } from "../config/IndexInfo";
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import Loader from "../components/ui/loaders/Loader";
import CardGroup from "../components/ui/CardGroup";

export default function Index() {
  const [packages, setPackages] = useState<PackageProps[]>([]);

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

  return (
    <Layout>
      <main>
        <section className="max-w-full h-fit mb-5">
          <Slider images={Slides} text={Texts} />
        </section>
        <CardGroup />
        <section className="w-full m-auto h-fit pt-5 pb-10 px-5">
          <div className="mb-8 text-center">
            <h2 className="text-bluemain text-center text-4xl font-extrabold">DESTINOS RECOMENDADOS</h2>
            <hr className='w-2/5 m-auto border text-bluesec text-center mt-4' />
          </div>
          <div className="flex flex-wrap items-center gap-5 m-auto md:w-4/5 justify-center md:gap-7">
            {packages && packages.length > 0 ? (
              packages.slice(0, 3).map((pkg) => (
                <Card key={pkg.id} salida={pkg.salida} destino={pkg.destino} imgUrl={pkg.imgUrl} categoria={pkg.categoria} />
              ))
            ) : (
              <Loader />
            )}
          </div>
        </section>
      </main>
    </Layout>
  )
}