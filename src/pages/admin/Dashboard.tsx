import { useEffect, useState } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import { PackageProps } from "../../config/types";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import CategoryTag from "../../components/ui/CategoryTag";

export default function Dashboard() {
  const [packages, setPackages] = useState<PackageProps[]>([])
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
    <>
        <HeaderAdmin />
        <div className="w-full bg-bluesec md:w-3/5 m-auto px-5 flex items-center flex-col" style={{fontFamily: "Mundial"}}>
          <h2 className="text-white text-3xl my-3 font-semibold">Lista de paquetes</h2>
          <div className="w-full flex flex-col gap-5 bg-bluemain">
            {
              packages.map((pkg) => (
                <div className="w-full py-2 bg-red flex gap-10">
                  <div className="w-2/3 flex">
                    <img src={pkg.imgUrl} width={50} alt="" />
                    <div>
                      <h2>{pkg.destino}</h2>
                      <CategoryTag categoria={pkg.categoria} />
                  
                    </div>
                  </div>
                  <div className="w-1/3">
                    <button>asd</button>
                    <button>asd</button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </>
  )
}
