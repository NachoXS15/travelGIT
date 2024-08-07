import { useState, useEffect } from "react";
import PackageProps from "../PackageType";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import Card from "../../components/Card";
import Loader from "../../components/ui/loaders/Loader";

export default function GetPackages() {
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
    <>
      {packages && packages.length > 0 ? (
        packages.map((pkg) => (
          <Card key={pkg.id} salida={pkg.salida} destino={pkg.destino} imgUrl={pkg.imgUrl} categoria={pkg.categoria} />
        ))
      ) : (
        <Loader />
      )}
    </>
  )
}
