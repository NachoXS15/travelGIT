import Layout from "../components/Layout";

export default function ContactUs() {
	return (
		<>
			<Layout>
				<section className="w-full h-fit flex flex-col items-center" style={{fontFamily: 'Mundial'}}>
					<div className="mb-8 text-center">
						<h2 className="text-bluemain text-center text-3xl font-extrabold">¿TENÉS DUDAS? ¡CONTACTANOS!</h2>
						<hr className='w-2/5 m-auto border text-bluesec text-center mt-4' />
					</div>
					<form action="" className="w-4/5 h-fit flex flex-col items-center justify-center">
						<div className="w-3/5 h-fit flex gap-5">
							<div className=" w-1/2 flex flex-col items-start">
								<label htmlFor="">Nombre y apellido</label>
								<input
									type="text"
									className="w-full h-8 border-2 rounded-sm border-bluemain"
								/>

							</div>
							<div className="w-1/2 flex flex-col items-start">
								<label htmlFor="">Nombre y apellido</label>
								<input
									type="text"
									className="w-full h-8 border-2 rounded-sm border-bluemain"
								/>
							</div>
						</div>
						<div className="w-3/5 h-fit flex gap-5">
							<div className=" w-1/2 flex flex-col items-start">
								<label htmlFor="">Nombre y apellido</label>
								<input
									type="text"
									className="w-full h-8 border-2 rounded-sm border-bluemain"
								/>

							</div>
							<div className="w-1/2 flex flex-col items-start">
								<label htmlFor="">Nombre y apellido</label>
								<input
									type="text"
									className="w-full h-8 border-2 rounded-sm border-bluemain"
								/>
							</div>
						</div>
					</form>
				</section>
			</Layout >
		</>
	)
}
