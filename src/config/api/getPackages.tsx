import { useState, useEffect } from "react";
import { PackageProps, categoryProp } from "../types";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import Card from "../../components/Card";
import Loader from "../../components/ui/loaders/Loader";


export default function GetPackages({ categoryProp, search }: categoryProp) {
  const [packages, setPackages] = useState<PackageProps[]>([]);
  const [noPackages, setNoPackages] = useState(false)
  const filteredCategory = search ? packages.filter(pkg => pkg.destino.toLowerCase().includes(search.toLowerCase())) : categoryProp === "Todas" ? packages : packages.filter(pack => pack.categoria === categoryProp);
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
    const timer = setTimeout(() => {
      if (packages.length === 0) {
        setNoPackages(true)
      }
    }, 5000);
  
    return () => clearTimeout(timer)
  }, []);

  useEffect(() => {
    if (packages.length > 0) {
      setNoPackages(false);
    }
  }, [packages]);


  return (
    <>
      {filteredCategory.length > 0 ? (
        filteredCategory.map((pkg) => (
          <Card key={pkg.id} id={pkg.id} isPromoted={pkg.isPromoted} salida={pkg.salida} destino={pkg.destino} imgUrl={pkg.imgUrl} categoria={pkg.categoria} />
        ))
      ) : noPackages ? (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-2xl">No hay paquetes</p>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <Loader />
        </div>
      )}
    </>
  )
}
