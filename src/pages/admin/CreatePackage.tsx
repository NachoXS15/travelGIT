import { useEffect, useState } from "react"
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Trash } from "../../components/ui/Icons";
import { Toaster, toast } from 'sonner'
type addProps = {
    ModalOpen: boolean,
    HandleModal: () => void
}

const categoriesCreate: string[] = [
    "Turismo Nacional",
    "Turismo Internacional",
    "Excursiones",
    "Quinceañeras"
]

type arrayItems = {
    item: string
}

export default function CreatePackage({ ModalOpen, HandleModal }: addProps) {
    const [isModalOpen, setisModalOpen] = useState(ModalOpen);
    const [descItems, setdescItems] = useState<arrayItems[]>([{ item: '' }]);
    const [imgItems, setImgItems] = useState<arrayItems[]>([{ item: '' }]);
    const [isPromoted, setIsPromoted] = useState(false)
    useEffect(() => {
        setisModalOpen(ModalOpen);
    }, [ModalOpen]);

    const db = getFirestore();

    //manejo de promocion
    const handlePromoted = async () => {
        setIsPromoted(!isPromoted)
    }

    useEffect(() => {
        console.log(isPromoted);
    }, [isPromoted]);

    //crear elementos de descripcion
    const handleAddDesc = () => {
        setdescItems([...descItems, { item: '' }])
    }

    const handleDeleteDesc = (index: number) => {
        const newItems = descItems.filter((_, i) => i !== index);
        setdescItems(newItems);
    };

    const handleInputChange = (index: number, value: string) => {
        const newItems = [...descItems];
        newItems[index].item = value;
        setdescItems(newItems)
    };

    //crear imagenes
    const handleAddImgs = () => {
        setImgItems([...imgItems, { item: '' }])
    }

    const handleDeleteImg = (index: number) => {
        const newItems = imgItems.filter((_, i) => i !== index);
        setImgItems(newItems);
    };

    const handleInputChangeImg = (index: number, value: string) => {
        const newItems = [...imgItems];
        newItems[index].item = value;
        setImgItems(newItems)
    };



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const destiny = formData.get("destino")?.toString()
        const date = formData.get("salida")?.toString()
        const category = formData.get("categoria")?.toString()

        const descArray = descItems.map((item) => item.item);
        const imgArray = imgItems.map((item) => item.item);
        try {
            const docRef = await addDoc(collection(db, "paquetes"), {
                destino: destiny,
                salida: date,
                categoria: category,
                Descripcion: descArray,
                imgUrl: imgArray,
                isPromoted: isPromoted
            })
            console.log("creado: ", docRef.id);

            const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 200));
            toast.promise(promise, {
                loading: 'Creando',
                success: "Paquete creado",
                error: 'Paquete no creado',
            });
            setisModalOpen(false)
        } catch (error) {
            console.log("error: ", error);
        }
    }
    return (
        <>
            {isModalOpen && (
                <>
                    <div className="w-11/12 md:w-4/6 h-fit max-h-[600px] bg-white rounded-lg m-auto overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none bg-cover bg-center focus:outline-none" style={{ fontFamily: "Mundial" }}>
                        <div className="w-full relative flex flex-col gap-5 px-10 py-5">
                            <div className="w-full flex mt-2 justify-between">
                                <div>
                                    <h2 className="text-4xl mb-2">Crear paquete</h2>
                                    <hr className="w-full border border-bluemain" />
                                </div>
                            </div>
                        </div>
                        <form action="" className="w-full h-full flex flex-col px-7 md:px-10 gap-0 justify-between" onSubmit={handleSubmit}>
                            <div className="w-full flex flex-col md:flex-row gap-3 md:gap-10">
                                <div className="w-full md:w-1/2 flex flex-col md:my-3">
                                    <label htmlFor="">Nombre del destino</label>
                                    <input className="border-2 border-bluemain rounded px-3 h-9 text-xl" type="text" name="destino" required placeholder="Introduzca" />
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col md:my-3">
                                    <label htmlFor="">Categoria</label>
                                    <select name="categoria" id="" required className="border-2 border-bluemain rounded px-3 h-9 text-xl ">
                                        <option value="" disabled defaultChecked className="text-darkgray">Seleccione</option>
                                        {
                                            categoriesCreate.map((category) => (
                                                <option value={category}>{category}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="flex items-start md:flex-row md:gap-9">
                                <div className="w-full flex flex-col my-3">
                                    <label htmlFor="">Salida (mes y año):</label>
                                    <input className="border-2 border-bluemain rounded px-3 h-9 text-xl" required type="text" name="salida" placeholder="Introduzca" />
                                </div>
                            </div>
                            <div className="w-full flex flex-col md:flex-row gap-3 md:gap-8">
                                <div className="w-full flex flex-col md:my-3">
                                    {
                                        descItems.map((item, i) => (
                                            <div key={i} className="w-full">
                                                <label htmlFor="">Inserte descripción</label>
                                                <div className="flex items-center gap-2">
                                                    <input className=" w-full border-2 border-bluemain rounded px-3 h-9 text-xl" onChange={(e) => handleInputChange(i, e.target.value)} required type="text" name="desc" value={item.item} placeholder="Introduzca" />
                                                    <button onClick={handleAddDesc} className="text-3xl text-bluemain border text-center rounded size-[35px] hover:text-white hover:bg-bluemain">+</button>
                                                    {descItems.length > 1 ? (<button onClick={() => handleDeleteDesc(i)} className="text-3xl text-bluemain border text-center rounded size-[35px] hover:text-white hover:bg-bluemain"><Trash /></button>) : null}
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="w-full flex flex-col md:my-3">
                                    {
                                        imgItems.map((items, i) => (
                                            <div key={i}>
                                                <label htmlFor="">Inserte Links de imagenes</label>
                                                <div className="flex items-center gap-2">
                                                    <input type="text" className="w-full border-2 border-bluemain rounded px-3 h-9 text-xl" onChange={(e) => handleInputChangeImg(i, e.target.value)} required value={items.item} name="img" placeholder="Introduzca" />
                                                    <button onClick={handleAddImgs} className="text-3xl text-bluemain border text-center rounded size-[35px] hover:text-white hover:bg-bluemain">+</button>
                                                    {imgItems.length > 1 ? (<button onClick={() => handleDeleteImg(i)} className="text-3xl text-bluemain border text-center rounded size-[35px] hover:text-white hover:bg-bluemain"><Trash /></button>) : null}
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="h-fit m-auto my-5 flex items-center gap-2 text-xl">
                                <label className="text-md" htmlFor="session">Promocionar paquete</label>
                                <input type="checkbox" name="session" checked={isPromoted} onClick={handlePromoted} id="session" />
                            </div>
                            <div className="w-full md:w-3/5 h-fit flex flex-col items-center md:flex-row gap-2 py-2 m-auto mb-2">
                                <input type="submit" className="w-3/5 mx-2 bg-bluemain px-6 py-2 rounded text-white hover:bg-bluesec active:bg-bluesec" value={"Crear paquete"} />
                                <button className="w-3/5 mx-2 bg-darkgray px-6 py-2 rounded text-white hover:bg-red active:bg-red" onClick={HandleModal}>Cancelar</button>
                            </div>
                        </form>
                    </div>
                    <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </>
            )}
            <Toaster richColors expand={false} closeButton />

        </>
    )
}