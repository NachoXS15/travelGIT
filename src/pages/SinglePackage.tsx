import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { PackageProps } from "../config/types";
import { useParams } from "react-router";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loader from "../components/ui/loaders/Loader";
import { Airplane, WhatsApp } from "../components/ui/Icons";

export default function SinglePackage() {
  const [pkg, setPkg] = useState<PackageProps>()
  const { id } = useParams();
  const db = getFirestore();

  const fetchData = async (id: string) => {
    try {
      const docRef = doc(db, 'paquetes', id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        const data = {
          id: docSnap.id,
          ...docSnap.data()
        } as PackageProps
        setPkg(data)
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    id ? fetchData(id) : console.log("No hay id");
  }, [])


  return (
    <Layout>
      {
        pkg ? (
          <>
            <hr className="w-4/5 m-auto border border-bluemain" />
            <div className="w-full h-fit px-5 my-5">
              <img src={pkg.imgUrl} className="rounded-md" alt="" />
              <h1 className="uppercase font-bold text-5xl mt-3" style={{color: '#181818'}}>{pkg.destino}</h1>
              <div className="w-full mt-4">
                <hr className="w-2/5 border border-bluemain" />
                <h2 className="font-semibold text-2xl mt-4">Incluye:</h2>
                <ul className="w-full list-none">
                  {
                    pkg.Descripcion?.map((desc) => (
                      <li className="flex items-center gap-2 py-1">
                        <Airplane />
                        <span className="font-medium text-lg">{desc}</span>
                      </li>
                    ))  
                  }
                </ul>
              </div>
              <button type="submit" className="w-full md:w-3/5 h-10 mt-5 rounded bg-bluesec text-white flex justify-center items-center ">
                <p className="flex gap-2"><WhatsApp /><span>Consultar por WhatsApp</span></p>
              </button>
            </div>

          </>
        )
          :
          <div className="w-full h-full flex justify-center items-center">
            <Loader />
          </div>
      }
    </Layout>
  )
}
