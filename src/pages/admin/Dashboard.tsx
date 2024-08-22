import { useEffect, useState } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import { PackageProps } from "../../config/types";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import CategoryTag from "../../components/ui/CategoryTag";
import { Edit, Trash } from "../../components/ui/Icons";

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
        <div className="w-full my-7 md:w-3/5 m-auto px-8 flex items-center flex-col" style={{fontFamily: "Mundial"}}>
          <div className="w-full flex justify-between">
            <h2 className="text-bluemain text-4xl my-3 font-semibold">Lista de paquetes</h2>
            <button className="text-4xl text-bluemain">+</button>
          </div>
          <div className="w-full flex flex-col gap-5">
            {
              packages.map((pkg) => (
                <div className="w-full py-4 px-7 rounded-2xl bg-lightgray shadow-lg flex flex-col md:flex-row justify-between gap-10">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                    <img src={pkg.imgUrl[0]} className="w-full md:w-52 rounded-lg" alt="" />
                    <div>
                      <h2 className="text-4xl font-medium">{pkg.destino}</h2>
                      <CategoryTag categoria={pkg.categoria} />
                    </div>
                    {/* <div>
                      promocionado
                    </div> */}
                  </div>
                  <div className="flex justify-end gap-5">
                    <button className="hover:scale-110 transition"><Edit /></button>
                    <button className="hover:scale-110 transition"><Trash /></button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </>
  )
}
