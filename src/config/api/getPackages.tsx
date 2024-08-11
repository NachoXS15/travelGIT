import { useState, useEffect } from "react";
import {PackageProps, categoryProp} from "../types";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import Card from "../../components/Card";
import Loader from "../../components/ui/loaders/Loader";


export default function GetPackages({ categoryProp }: categoryProp) {
  const [packages, setPackages] = useState<PackageProps[]>([]);
  const filteredCategory = categoryProp === "Todas" ? packages : packages.filter(pack => pack.categoria === categoryProp)
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
      {filteredCategory.length > 0 ? (
        filteredCategory.map((pkg) => (
          <Card key={pkg.id} id={pkg.id} salida={pkg.salida} destino={pkg.destino} imgUrl={pkg.imgUrl} categoria={pkg.categoria} />
        ))
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <Loader />
        </div>
      )}
    </>
  )
}
