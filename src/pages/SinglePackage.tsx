import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { PackageProps } from "../config/types";
import { useParams } from "react-router";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loader from "../components/ui/loaders/Loader";
import { Airplane, Mail, WhatsApp } from "../components/ui/Icons";
import CategoryTag from "../components/ui/CategoryTag";
import ConsultaModal from "../components/modals/ConsultaModal";
import ConsultaModalMail from "../components/modals/ConsultaModalMail";

export default function SinglePackage() {
	const [pkg, setPkg] = useState<PackageProps>()
	const [isModalOpenWsp, setIsModalOpenWsp] = useState(false)
	const [isModalOpenMail, setIsModalOpenMail] = useState(false)
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

	const handleModalWsp = () => {
		setIsModalOpenWsp(!isModalOpenWsp)
	}

	const handleModalMail = () => {
		setIsModalOpenMail(!isModalOpenMail)
	}

	useEffect(() => {
		id ? fetchData(id) : console.log("No hay id");
	}, [])

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [])



	return (
		<Layout>
			{
				pkg ? (
					<>
						<hr className="w-4/5 m-auto border border-bluemain" />
						<div className="w-full h-fit px-5 my-5 md:w-4/5 md:m-auto md:my-10 md:flex flex-col md:justify-center md:items-center" style={{ fontFamily: 'Mundial' }}>
							<div className="md:w-4/5 flex flex-col md:flex-row-reverse">
								<div className="-w-full md:w-1/2">
									<img src={pkg.imgUrl[0]} className="rounded-md" alt="" />
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
							<div className="w-full md:w-4/5 flex flex-col gap-2 md:flex-row md:gap-10 mt-5">
								<button type="submit" onClick={handleModalWsp} className="w-full md:w-1/2 h-10 rounded bg-bluesec text-white flex justify-center items-center ">
									<p className="flex gap-2"><WhatsApp /><span>Consultar por WhatsApp</span></p>
								</button>
								<button type="submit" onClick={handleModalMail} className="w-full md:w-1/2 h-10 rounded bg-bluesec text-white flex justify-center items-center ">
									<p className="flex gap-2"><Mail color="white" size={24} /><span>Consultar por Email</span></p>
								</button>
							</div>
						</div>
					</>
				)
					:
					<div className="w-full h-full flex justify-center items-center py-10">
						<Loader />
					</div>
			}
			{
				isModalOpenWsp && <ConsultaModal HandleModal={handleModalWsp} pkgName={pkg?.destino} ModalOpen={isModalOpenWsp} />
			}

			{
				isModalOpenMail && <ConsultaModalMail HandleModal={handleModalMail} pkgName={pkg?.destino} ModalOpen={isModalOpenMail} />
			}
		</Layout>
	)
}
