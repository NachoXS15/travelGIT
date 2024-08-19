import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { PackageProps } from "../config/types";
import { useParams } from "react-router";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loader from "../components/ui/loaders/Loader";
import { Airplane } from "../components/ui/Icons";
import CategoryTag from "../components/ui/CategoryTag";

export default function SinglePackage() {
	const [pkg, setPkg] = useState<PackageProps>()
	const [isModalOpen, setIsModalOpen] = useState(false)
	const { id } = useParams();
	const db = getFirestore();

	const fetchData = async (id: string) => {
		try {
			const docRef = doc(db, 'paquetes', id)
			const docSnap = await getDoc(docRef)
			if (docSnap.exists()) {
				const data = {
					id: docSnap.id,
					...docSnap.data()
				} as PackageProps
				setPkg(data)
			}
		} catch (error) {
			console.log(error);
		}
	}

	const handleModal = () => {
		setIsModalOpen(!isModalOpen)
	}

	useEffect(() => {
		id ? fetchData(id) : console.log("No hay id");
	}, [])

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget);

		const name = formData.get("name")
		const provincia = formData.get("provincia")
		const personCant = formData.get("personCant");
		const adults = formData.get("adults");
		const kids = formData.get("kids");
		const obraSocial = formData.get("obraSocial");

		const message = `¡Hola!, soy ${name}, me comunico desde ${provincia}. Me interesa el paquete de ${pkg?.destino} y queria solicitar información y cotización. Viajamos ${personCant} personas, somos ${adults} adultos y ${kids ? kids : "ningún"} niños, y ${obraSocial} tenemos obra social. ¡Espero su respuesta!`;
		const phoneNumber = "543804325711";

		window.open(`https://wa.me/${phoneNumber}?text=${message}`);
	}


	return (
		<Layout>
			{
				pkg ? (
					<>
						<hr className="w-4/5 m-auto border border-bluemain" />
						<div className="w-full h-fit px-5 my-5 md:w-4/5 md:m-auto md:my-10 md:flex flex-col md:justify-center md:items-center" style={{ fontFamily: 'Mundial' }}>
							<div className="md:w-4/5 flex flex-col md:flex-row-reverse">
								<div className="-w-full md:w-1/2">
									<img src={pkg.imgUrl} className="rounded-md" alt="" />
								</div>
								<div className="w-1/2">
									<div>
										<h1 className="uppercase font-bold text-5xl mt-3" style={{ color: '#181818' }}>{pkg.destino}</h1>
										<CategoryTag categoria={pkg.categoria} />

									</div>
									<div className="w-full mt-4">
										<hr className="w-2/5 border border-bluemain" />
										<h2 className="font-semibold text-2xl mt-4">Incluye:</h2>
										<ul className="w-full list-none">
											{
												pkg.Descripcion?.map((desc) => (
													<li className="flex items-center gap-2 py-1">
														<Airplane />
														<span className="font-medium text-lg">{desc}</span>
													</li>
												))
											}
										</ul>
									</div>
								</div>
							</div>
							<button type="submit" onClick={handleModal} className="w-full md:w-3/5 h-10 mt-5 rounded bg-bluesec text-white flex justify-center items-center hover:bg-bluemain">
								<p className="flex gap-2 h-fit py-2"><span className="text-2xl">¡Quiero este paquete!</span></p>
							</button>
						</div>
					</>
				)
					:
					<div className="w-full h-full flex justify-center items-center py-10">
						<Loader />
					</div>
			}
			{
				isModalOpen && (
					<>
						<div className="w-11/12 md:w-3/6 h-4/5  md:h-fit bg-white rounded-md m-auto overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none bg-cover bg-center focus:outline-none"
							style={{ fontFamily: "Mundial" }}
						>
							<div className="w-auto relative bg-cover bg-center flex flex-col items-center gap-5 px-10">
								{/*content*/}
								<button onClick={handleModal} className="absolute right-4 text-bluemain text-2xl">X</button>
								<div className="w-full border-b-2 border-bluemain py-5">
									<h2 className="text-3xl text-center md:text-start font-medium">¿Cómo querés organizar tu viaje?</h2>
								</div>
								<form action="" className="w-full flex flex-col md:px-5 gap-0 md:gap-5" onSubmit={handleSubmit}>
									<div className="w-full">
										<div className="flex flex-col my-3">
											<label htmlFor="">¿Cómo te llamas?</label>
											<input className="border-2 border-bluemain rounded px-3 h-9 text-xl" type="text" name="name" required placeholder="Introduzca" />
										</div>
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
												<label htmlFor="">Cantidad de niños</label>
												<input className="border-2 border-bluemain rounded px-3 h-9 text-xl" required type="number" name="kids" placeholder="Introduzca" />
											</div>
										</div>
										<hr className="w-2/5 m-auto border border-bluemain mt-2 md:hidden" />
										<div className="w-full md:w-1/2">
											<div className="flex flex-col my-3">
												<label htmlFor="">Cantidad de personas:</label>
												<input className="border-2 border-bluemain rounded px-3 h-9 text-xl" required type="number" name="adults" placeholder="Introduzca" />
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
									<input type="submit" className="w-3/5 mx-2 bg-bluemain px-6 py-2 rounded text-white hover:bg-bluesec active:bg-bluesec" value={"Crear consulta"} />
									<button className="w-3/5 mx-2 bg-darkgray px-6 py-2 rounded text-white hover:bg-red active:bg-red" onClick={handleModal}>Cancelar</button>
								</div>
								</form>
							</div>
						</div>
						<div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
					</>
				)
			}
		</Layout>
	)
}
