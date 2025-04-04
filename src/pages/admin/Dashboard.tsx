import { useEffect, useState, useRef } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import { PackageProps } from "../../config/types";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import CategoryTag from "../../components/ui/CategoryTag";
import { Cancel, Edit, Search, Trash } from "../../components/ui/Icons";
import Loader from "../../components/ui/loaders/Loader";
import PromotedTag from "../../components/ui/PromotedTag";
import CreatePackage from "./CreatePackage";
import DeletePackage from "./DeletePackage";
import EditPackage from "./EditPackage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [packages, setPackages] = useState<PackageProps[]>([])
  const [search, setSearch] = useState<string | undefined>("")
  const filteredPackages = search ? packages.filter(pkg => pkg.destino.toLowerCase().includes(search.toLowerCase())) : packages;
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedID, setSelectedID] = useState<string>("")
  const [selectedName, setSelectedName] = useState<string>("")
  const navigate = useNavigate();
  

  const db = getFirestore();
  // const navigate = useNavigate()

  const openCreateModal = () => {
    setCreateModalOpen(!createModalOpen);
  }

  const openDeleteModal = (id: string = "", destiny: string = "") => {
    setSelectedID(id);
    setSelectedName(destiny)
    setDeleteModalOpen(!deleteModalOpen);
  }

  const openEditModal = (id: string = "", destiny: string = "") => {
    setEditModalOpen(!editModalOpen);
    setSelectedID(id);
    setSelectedName(destiny)
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'paquetes'), (snapshot) => {
      const dataList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as PackageProps[];
      setPackages(dataList);
    }, (error) => {
      console.log("Error: ", error);
    });
  
    return () => unsubscribe();
  }, []);

  const form = useRef<HTMLFormElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
		const formData = new FormData(form.current!);
    const searchData = formData.get("search")?.toString()
    setSearch(searchData)
  }

  const clearSearch = () => {
    setSearch("");
  }

  const auth = getAuth();
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        return;
      } else {
        navigate('/admin/login')
      }
    });

    return () => unsubscribe();
  }, [auth, navigate])

  return (
    <>
      <HeaderAdmin />
      <div className="w-full my-7 px-5 md:w-4/5 m-auto flex items-center flex-col" style={{ fontFamily: "Mundial" }}>
        <div className="w-full flex flex-col md:flex-row justify-between">
          <h2 className="text-bluemain text-2xl md:text-3xl my-3 font-semibold">Lista de paquetes</h2>
          <div className="flex justify-between px-3 items-center md:gap-5">
            <form ref={form} onSubmit={handleSearch} className="flex items-center">
              <input type="text" name="search" className="w-56 border-b border-bluemain focus:outline-none" placeholder="Buscar" />
              <button type="submit"><Search/></button>
              <button type="reset" onClick={clearSearch}><Cancel /></button>
            </form>
            <button className="text-4xl text-bluemain hover:scale-110 transition" onClick={openCreateModal}>+</button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5">
          {
            filteredPackages && filteredPackages.length > 0 ? filteredPackages.map((pkg, index) => (
              <div key={index} className="w-full py-4 px-7 rounded-md md:rounded-2xl bg-lightgray shadow-lg flex flex-col md:flex-row justify-between gap-10">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <img src={pkg.imgUrl[0]} className="w-full md:w-52 rounded-lg" alt="" />
                  <div>
                    <h2 className="text-3xl font-medium">{pkg.destino}</h2>
                    <CategoryTag categoria={pkg.categoria} />
                    <PromotedTag promoted={pkg.isPromoted} />
                  </div>
                </div>
                <div className="flex justify-end gap-5">
                  <button onClick={() => openEditModal(pkg.id, pkg.destino)} className="hover:scale-110 transition"><Edit /></button>
                  <button onClick={() => openDeleteModal(pkg.id, pkg.destino)} className="hover:scale-110 transition"><Trash /></button>
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
        deleteModalOpen && <DeletePackage id={selectedID} destiny={selectedName} HandleModal={openDeleteModal} ModalOpen={deleteModalOpen} />
      }
      {
        editModalOpen && <EditPackage id={selectedID} HandleModal={openEditModal} ModalOpen={editModalOpen} />
      }
    </>
  )
}
