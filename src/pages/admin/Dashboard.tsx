import { useEffect, useState } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import { PackageProps } from "../../config/types";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import CategoryTag from "../../components/ui/CategoryTag";
import { Edit, Trash } from "../../components/ui/Icons";
import Loader from "../../components/ui/loaders/Loader";
import PromotedTag from "../../components/ui/PromotedTag";
import CreatePackage from "./CreatePackage";
import DeletePackage from "./DeletePackage";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [packages, setPackages] = useState<PackageProps[]>([])
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedID, setSelectedID] = useState<string>("")
  const db = getFirestore();
  // const navigate = useNavigate()

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

  const openCreateModal = () => {
    setCreateModalOpen(!createModalOpen);
  }

  const openDeleteModal = (id: string = "") => {
    setSelectedID(id)
    setDeleteModalOpen(!deleteModalOpen);
  }

  const openEditModal = (id: string) => {
    setEditModalOpen(!editModalOpen);
    setSelectedID(id)
  }

  useEffect(() => {
    fetchData();
  }, [packages]);

  // const auth = getAuth();
  // useEffect(() => {

  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     if (currentUser) {
  //       console.log('User exists')
  //     } else {
  //       navigate('../administracion')
  //     }
  //   });

  //   return () => unsubscribe();
  // }, [auth, navigate])

  return (
    <>
      <HeaderAdmin />
      <div className="w-full my-7 px-5 md:w-4/5 m-auto flex items-center flex-col" style={{ fontFamily: "Mundial" }}>
        <div className="w-full flex justify-between">
          <h2 className="text-bluemain text-3xl my-3 font-semibold">Lista de paquetes</h2>
          <button className="text-4xl text-bluemain hover:scale-110 transition" onClick={openCreateModal}>+</button>
        </div>
        <div className="w-full flex flex-col gap-5">
          {
            packages && packages.length > 0 ? packages.map((pkg) => (
              <div className="w-full py-4 px-7 rounded-2xl bg-lightgray shadow-lg flex flex-col md:flex-row justify-between gap-10">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <img src={pkg.imgUrl[0]} className="w-full md:w-52 rounded-lg" alt="" />
                  <div>
                    <h2 className="text-3xl font-medium">{pkg.destino}</h2>
                    <CategoryTag categoria={pkg.categoria} />
                    <PromotedTag promoted={pkg.isPromoted} />
                  </div>
                </div>
                <div className="flex justify-end gap-5">
                  <button onClick={() => openEditModal(pkg.id)} className="hover:scale-110 transition"><Edit /></button>
                  <button onClick={() => openDeleteModal(pkg.id)} className="hover:scale-110 transition"><Trash /></button>
                </div>
              </div>

            ))
              : (
                <div className="w-full h-full flex justify-center items-center">
                  <Loader />
                </div>
              )
          }
        </div>
      </div>
      {
        createModalOpen && <CreatePackage HandleModal={openCreateModal} ModalOpen={createModalOpen} />
      }
      {
        deleteModalOpen && <DeletePackage id={selectedID} HandleModal={openDeleteModal} ModalOpen={deleteModalOpen} />
      }
    </>
  )
}
