import { useEffect, useState } from "react";
import { updateDoc, getFirestore, doc, getDoc } from "firebase/firestore";
import { Trash } from "../../components/ui/Icons";
import { Toaster, toast } from 'sonner';
import { PackageProps } from "../../config/types";

const categoriesCreate: string[] = [
    "Turismo Nacional",
    "Turismo Internacional",
    "Excursiones",
];

type editProps = {
    ModalOpen: boolean,
    HandleModal: () => void,
    id: string
};

type arrayItems = {
    item: string
};

export default function EditPackage({ ModalOpen, HandleModal, id }: editProps) {
    const [isModalOpen, setIsModalOpen] = useState(ModalOpen);
    const [descItems, setDescItems] = useState<arrayItems[]>([{ item: '' }]);
    const [imgItems, setImgItems] = useState<arrayItems[]>([{ item: '' }]);
    const [isPromoted, setIsPromoted] = useState<boolean>(false);
    const [pkg, setPkg] = useState<PackageProps | null>(null);
    const db = getFirestore();

    const getPkg = async () => {
        try {
            const docRef = doc(db, "paquetes", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data() as PackageProps;
                setPkg(data);
                if (data) {
                    setIsPromoted(data.isPromoted);
                    setDescItems((data.Descripcion as string[]).map(item => ({ item })));
                    setImgItems((data.imgUrl as string[]).map(item => ({ item })));
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPkg();
    }, [id]);

    useEffect(() => {
        setIsModalOpen(ModalOpen);
    }, [ModalOpen]);

    const handlePromoted = () => {
        setIsPromoted(!isPromoted);
    };

    const handleAddDesc = () => {
        setDescItems([...descItems, { item: '' }]);
    };

    const handleDeleteDesc = (index: number) => {
        const newItems = descItems.filter((_, i) => i !== index);
        setDescItems(newItems);
    };

    const handleInputChange = (index: number, value: string) => {
        const newItems = [...descItems];
        newItems[index].item = value;
        setDescItems(newItems);
    };

    const handleAddImgs = () => {
        setImgItems([...imgItems, { item: '' }]);
    };

    const handleInputChangeImg = (index: number, value: string) => {
        const newItems = [...imgItems];
        newItems[index].item = value;
        setImgItems(newItems);
    };

    const editPackage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const destiny = formData.get("destino")?.toString();
        const date = formData.get("salida")?.toString();
        const category = formData.get("categoria")?.toString();

        const descArray = descItems.map((item) => item.item);
        const imgArray = imgItems.map((item) => item.item);

        try {
            const docRef = doc(db, "paquetes", id);
            await updateDoc(docRef, {
                destino: destiny,
                salida: date,
                categoria: category,
                Descripcion: descArray,
                imgUrl: imgArray,
                isPromoted: isPromoted
            });
            const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 200));
            toast.promise(promise, {
                loading: 'Eliminando',
                success: "Paquete eliminado",
                error: 'Paquete no eliminado',
            });
            HandleModal();
        } catch (error) {
            console.log("Error", error);
            toast.error("Paquete no actualizado");
        }
    };

    return (
        <>
            {isModalOpen && pkg ? (
                <>
                    <div className="w-11/12 md:w-4/6 h-fit bg-white rounded-lg m-auto overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none bg-cover bg-center focus:outline-none" style={{ fontFamily: "Mundial" }}>
                        <div className="w-full relative flex flex-col gap-5 px-10 py-5">
                            <div className="w-full flex mt-2 justify-between">
                                <div>
                                    <h2 className="text-4xl mb-2">Editar</h2>
                                    <hr className="w-full border border-bluemain" />
                                </div>
                            </div>
                        </div>
                        <form className="w-full h-full flex flex-col px-7 md:px-10 gap-0 justify-between" onSubmit={editPackage}>
                            <div className="w-full flex flex-col md:flex-row gap-3 md:gap-10">
                                <div className="w-full md:w-1/2 flex flex-col md:my-3">
                                    <label>Nombre del destino</label>
                                    <input
                                        className="border-2 border-bluemain rounded px-3 h-9 text-xl"
                                        value={pkg.destino}
                                        type="text"
                                        name="destino"
                                        required
                                        placeholder="Introduzca"
                                        onChange={(e) => setPkg({ ...pkg, destino: e.target.value })}
                                    />
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col md:my-3">
                                    <label>Categoria</label>
                                    <select
                                        name="categoria"
                                        id=""
                                        value={pkg.categoria}
                                        required
                                        className="border-2 border-bluemain rounded px-3 h-9 text-xl"
                                        onChange={(e) => setPkg({ ...pkg, categoria: e.target.value })}
                                    >
                                        <option value="" disabled defaultChecked>Seleccione</option>
                                        {categoriesCreate.map((category, index) => (
                                            <option key={index} value={category}>{category}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="flex items-start md:flex-row md:gap-9">
                                <div className="w-full flex flex-col my-3">
                                    <label>Salida (mes y año):</label>
                                    <input
                                        className="border-2 border-bluemain rounded px-3 h-9 text-xl"
                                        required
                                        type="text"
                                        name="salida"
                                        value={pkg.salida}
                                        placeholder="Introduzca"
                                        onChange={(e) => setPkg({ ...pkg, salida: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="w-full flex flex-col md:flex-row gap-3 md:gap-8">
                                <div className="w-full flex flex-col md:my-3">
                                    {descItems.map((item, i) => (
                                        <div key={i} className="w-full">
                                            <label>Inserte descripción</label>
                                            <div className="flex items-center gap-2">
                                                <input
                                                    className="w-full border-2 border-bluemain rounded px-3 h-9 text-xl"
                                                    onChange={(e) => handleInputChange(i, e.target.value)}
                                                    required
                                                    type="text"
                                                    name="desc"
                                                    value={item.item}
                                                    placeholder="Introduzca"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={handleAddDesc}
                                                    className="text-3xl text-bluemain border text-center rounded size-[35px] hover:text-white hover:bg-bluemain"
                                                >
                                                    +
                                                </button>
                                                {descItems.length > 1 && (
                                                    <button
                                                        type="button"
                                                        onClick={() => handleDeleteDesc(i)}
                                                        className="text-3xl text-bluemain border text-center rounded size-[35px] hover:text-white hover:bg-bluemain"
                                                    >
                                                        <Trash />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="w-full flex flex-col md:my-3">
                                    {imgItems.map((items, i) => (
                                        <div key={i}>
                                            <label>Inserte Links de imagenes</label>
                                            <div className="flex items-center gap-2">
                                                <input
                                                    className="w-full border-2 border-bluemain rounded px-3 h-9 text-xl"
                                                    onChange={(e) => handleInputChangeImg(i, e.target.value)}
                                                    required
                                                    type="text"
                                                    value={items.item}
                                                    name="img"
                                                    placeholder="Introduzca"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={handleAddImgs}
                                                    className="text-3xl text-bluemain border text-center rounded size-[35px] hover:text-white hover:bg-bluemain"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="h-fit m-auto my-5 flex items-center gap-2 text-xl">
                                <label className="text-md" htmlFor="session">Promocionar paquete</label>
                                <input
                                    type="checkbox"
                                    name="session"
                                    checked={isPromoted}
                                    onChange={handlePromoted}
                                    id="session"
                                />
                            </div>
                            <div className="w-full md:w-3/5 h-fit flex flex-col items-center md:flex-row gap-2 py-2 m-auto mb-2">
                                <input
                                    type="submit"
                                    className="w-3/5 mx-2 bg-bluemain px-6 py-2 rounded text-white hover:bg-bluesec active:bg-bluesec"
                                    value={"Actualizar paquete"}
                                />
                                <button
                                    type="button"
                                    className="w-3/5 mx-2 bg-darkgray px-6 py-2 rounded text-white hover:bg-red active:bg-red"
                                    onClick={HandleModal}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : (
                <div>
                    <p>No se encontró paquete</p>
                </div>
            )}
            <Toaster richColors expand={false} closeButton />
        </>
    );
}
