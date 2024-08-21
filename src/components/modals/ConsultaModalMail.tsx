import { useEffect, useState } from "react";
import {useForm} from '@formspree/react'
type ConsultaModal = {
    ModalOpen: boolean,
    pkgName: string | undefined
    HandleModal: () => void
}

export default function ConsultaModalMail({ ModalOpen, pkgName, HandleModal }: ConsultaModal) {

    const [isModalOpen, setIsModalOpen] = useState(ModalOpen)
    const [state, handleSubmit] = useForm("mdknwgwy")
    if (state.succeeded) {
        console.log("enviado");
    }
    useEffect(() => {
        setIsModalOpen(ModalOpen);
    }, [ModalOpen]);



    return (
        <>
            {isModalOpen && (
                <>
                    <div className="w-11/12 md:w-3/6 h-4/5  md:h-fit bg-white rounded-md m-auto overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none bg-cover bg-center focus:outline-none"
                        style={{ fontFamily: "Mundial" }}
                    >
                        <div className="w-auto relative bg-cover bg-center flex flex-col items-center gap-5 px-10">
                            {/*content*/}
                            <button onClick={HandleModal} className="absolute right-4 text-bluemain text-2xl">X</button>
                            <div className="w-full border-b-2 border-bluemain py-5">
                                <h2 className="text-3xl text-center md:text-start font-medium">¿Cómo querés organizar tu viaje? Mail</h2>
                            </div>
                            <form action="" className="w-full flex flex-col md:px-5 gap-0 md:gap-5" onSubmit={handleSubmit}>
                                <div className="w-full">
                                    <div className="flex flex-col my-3">
                                        <label htmlFor="">¿Cómo te llamas?</label>
                                        <input className="border-2 border-bluemain rounded px-3 h-9 text-xl" type="text" name="name" required placeholder="Introduzca" />
                                    </div>
                                    <input type="hidden" value={pkgName} name="pkg" />
                                    <div className="flex flex-col my-3">
                                        <label htmlFor="">¿De donde te comunicás?</label>
                                        <select name="provincia" id="provincias" className="w-full h-8 border-2 rounded-sm border-bluemain" required>
                                            <option value="" disabled defaultChecked>Seleccioná tu provincia</option>
                                            <option value="Buenos Aires">Buenos Aires</option>
                                            <option value="Catamarca">Catamarca</option>
                                            <option value="Chaco">Chaco</option>
                                            <option value="Chubut">Chubut</option>
                                            <option value="Córdoba">Córdoba</option>
                                            <option value="Corrientes">Corrientes</option>
                                            <option value="Entre Ríos">Entre Ríos</option>
                                            <option value="Formosa">Formosa</option>
                                            <option value="Jujuy">Jujuy</option>
                                            <option value="La Pampa">La Pampa</option>
                                            <option value="La Rioja">La Rioja</option>
                                            <option value="Mendoza">Mendoza</option>
                                            <option value="Misiones">Misiones</option>
                                            <option value="Neuquén">Neuquén</option>
                                            <option value="Río Negro">Río Negro</option>
                                            <option value="Salta">Salta</option>
                                            <option value="San Juan">San Juan</option>
                                            <option value="San Luis">San Luis</option>
                                            <option value="Santa Cruz">Santa Cruz</option>
                                            <option value="Santa Fe">Santa Fe</option>
                                            <option value="Santiago del Estero">Santiago del Estero</option>
                                            <option value="Tierra del Fuego">Tierra del Fuego</option>
                                            <option value="Tucumán">Tucumán</option>
                                        </select>
                                    </div>
                                </div>
                                <hr className="w-2/5 m-auto border border-bluemain mt-2" />
                                <div className="flex flex-col md:flex-row md:gap-9">
                                    <div className="w-full md:w-1/2">
                                        <div className="flex flex-col my-3">
                                            <label htmlFor="">¿Cuantas Personas viajan?</label>
                                            <input className="border-2 border-bluemain rounded px-3 h-9 text-xl" required type="number" name="personCant" placeholder="Introduzca" />
                                        </div>
                                        <div className="flex flex-col my-3">
                                            <label htmlFor="">Cantidad de Adultos</label>
                                            <input className="border-2 border-bluemain rounded px-3 h-9 text-xl" required type="number" name="adults" placeholder="Introduzca" />
                                        </div>
                                    </div>
                                    <hr className="w-2/5 m-auto border border-bluemain mt-2 md:hidden" />
                                    <div className="w-full md:w-1/2">
                                        <div className="flex flex-col my-3">
                                            <label htmlFor="">Cantidad de niños:</label>
                                            <input className="border-2 border-bluemain rounded px-3 h-9 text-xl" required type="number" name="kids" placeholder="Introduzca" />
                                        </div>
                                        <div className="flex flex-col my-3">
                                            <label htmlFor="">¿Posee obra social o seguro?</label>
                                            <select name="obraSocial" id="" required className="border-2 border-bluemain rounded px-3 h-9 text-xl ">
                                                <option value="" disabled defaultChecked className="text-darkgray">Seleccione</option>
                                                <option value="Si">Si</option>
                                                <option value="Si">No</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-3/5 flex flex-col items-center md:flex-row gap-2 py-2 m-auto mb-2">
                                    <input type="submit" className="w-3/5 mx-2 bg-bluemain px-6 py-2 rounded text-white hover:bg-bluesec active:bg-bluesec" value={"Crear mail"} />
                                    <button className="w-3/5 mx-2 bg-darkgray px-6 py-2 rounded text-white hover:bg-red active:bg-red" onClick={HandleModal}>Cancelar</button>
                                </div>
                            </form>
                        </div>
                    </div><div className="opacity-50 fixed inset-0 z-40 bg-black"></div></>
            )
            }
        </>

    )
}
