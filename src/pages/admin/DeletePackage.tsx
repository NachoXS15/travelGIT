import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Toaster, toast } from 'sonner'

type deleteProp = {
    ModalOpen: boolean,
    HandleModal: () => void,
    id: string
    destiny: string
}

export default function DeletePackage({ ModalOpen, HandleModal, id }: deleteProp) {
    const [isModalOpen, setIsModalOpen] = useState(ModalOpen)
    const db = getFirestore()
    useEffect(() => {
        setIsModalOpen(ModalOpen);
    }, [ModalOpen]);


    const deleteItem = async () => {
        try {
            await deleteDoc(doc(db, "paquetes", id))
            const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 200));
            toast.promise(promise, {
                loading: 'Eliminando',
                success: "Paquete eliminado",
                error: 'Paquete no eliminado',
            });
            HandleModal()
            console.log("documento eliminado");
            
        } catch (error) { 
            console.log("error: ", error);
        }
    }

    
    return (
        <>
            {
                isModalOpen && (
                    <>
                        <div className="w-11/12 md:w-4/6 h-fit bg-white rounded-lg m-auto overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none bg-cover bg-center focus:outline-none" style={{ fontFamily: "Mundial" }}>
                            <div className="w-full relative flex flex-col gap-5 px-10 py-5">
                                <div className="w-full flex mt-2 justify-between">
                                    <div>
                                        <h2 className="text-4xl mb-2">Eliminar paquete</h2>
                                        <hr className="w-full border border-red" />
                                    </div>
                                </div>
                                <p className="text-xl">¿Estás seguro que quieres eliminar el paquete de ? Esta acción es irreversible</p>
                                <div>
                                    <div className="w-full md:w-3/5 flex flex-col items-center md:flex-row gap-2 py-2 m-auto mb-2">
                                        <button className="w-3/5 mx-2 bg-red px-6 py-2 rounded text-white " onClick={deleteItem}>Eliminar</button>
                                        <button className="w-3/5 mx-2 bg-darkgray px-6 py-2 rounded text-white hover:bg-red active:bg-red" onClick={HandleModal}>Cancelar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                    </>
                )
            }
            <Toaster richColors expand={false} closeButton />
        </>
    )
}
