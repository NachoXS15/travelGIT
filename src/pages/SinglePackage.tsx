// import { useState, useEffect } from "react";
// import Layout from "../components/Layout";
// import PackageProps from "../config/PackageType";
// import { useParams } from "react-router-dom";
// import { getFirestore, getDoc, doc } from "firebase/firestore";
// // import Loader from "../components/ui/loaders/Loader";
// // import { SadFace } from "../components/ui/Icons";
// // import Error404 from "../components/404";
// import WIP from "../components/WIP";

// export default function SinglePackage() {
//   // const [pkg, setPkg] = useState<PackageProps | null>(null);
//   const db = getFirestore();
//   const { id } = useParams<{ id: string }>(); // Asegúrate de que el tipo de id sea string

//   // const fetchData = async (id: string | undefined) => {
//   //   if (!id) {
//   //     console.error("ID no encontrado en los parámetros de la URL");
//   //     return;
//   //   }

//   //   try {
//   //     const docRef = doc(db, "paquetes", id);
//   //     const docSnap = await getDoc(docRef);

//   //     if (docSnap.exists()) {
//   //       const data = {
//   //         id: docSnap.id,
//   //         ...docSnap.data()
//   //       } as PackageProps;
//   //       setPkg(data);
//   //     } else {
//   //       console.log("No existe tal documento!");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error al obtener el documento:", error);
//   //   }
//   // }

//   // useEffect(() => {
//   //   fetchData(id);
//   // }, []);

//   return (
//     <Layout>
//       {/* {pkg ? (
//         <>
//           <hr className='w-2/5 m-auto border text-bluesec text-center mt-4' />
//           <section className="w-full h-fit m-auto my-10 px-5 flex items-start justify-between flex-col-reverse md:flex-row" style={{fontFamily: 'Mundial'}}>
//             <div className="w-1/2">
//               <h1 className=" md:text-7xl md:font-semibold text-5xl uppercase font-bold">{pkg.destino}</h1>
//               <h3 className=" md:text-5xl  text-2xl">{pkg.categoria}</h3>
//               <hr className='w-2/5 border text-bluesec text-center mt-2' />
//               <p className="text-xl">{pkg.Descripcion}</p>
//             </div>
//             <div className="mt-4 mb-4 w-1/2 h-fit">
//               <img src={pkg.imgUrl} className="h-96 rounded" alt="" />
//             </div>
//           </section>

//         </>
//       ) : (
//         <Error404 />
//       )} */}
//       <WIP />
//     </Layout>
//   );
// }