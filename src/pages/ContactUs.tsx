import Layout from "../components/Layout";
import { Mail, WhatsApp } from "../components/ui/Icons";

export default function ContactUs() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget)

		const nombre = formData.get("nombre")
		const consulta = formData.get("consulta")
		const provincia = formData.get("provincia")

		const message = `¡Hola! Mi nombre es ${nombre}, me comunico desde ${provincia}, el motivo de mi consulta es: ${consulta}. ¡Espero su respuesta!`;
		const phoneNumber = "543804325711";
		window.open(`https://wa.me/${phoneNumber}?text=${message}`);
	}


	return (
		<>
			<Layout>
				<hr className="w-4/5 m-auto border border-bluemain" />
				<section className="w-full h-fit flex flex-col items-center mt-10" style={{ fontFamily: 'Mundial' }}>
					<div className="mb-3 text-center">
						<h2 className="text-bluemain text-center text-3xl font-extrabold">¿TENÉS DUDAS? ¡CONTACTANOS!</h2>
						<hr className='w-2/5 m-auto border text-bluesec text-center mt-4' />
					</div>
					<form action="" className="w-full px-5 h-fit mb-10 flex flex-col items-center justify-center gap-4 md:w-4/5" onSubmit={handleSubmit}>
						<div className=" w-full md:w-3/5 flex-col md:flex-row h-fit flex gap-5">
							<div className="w-full flex flex-col items-start md:w-1/2">
								<label htmlFor="">Nombre y apellido</label>
								<input
									type="text"
									className="w-full h-9 px-2 border-2 rounded-sm border-bluemain"
									required
									placeholder="Introduzca"
									name="name"
								/>

							</div>
							
							<div className="w-full flex flex-col items-start md:w-1/2">
								<label htmlFor="" className="text-nowrap">¿De donde nos consultas?</label>
								<select name="provincia" id="provincias" className="w-full h-9 border-2 rounded-sm border-bluemain">
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
						<div className="w-full flex flex-col items-start md:w-3/5">
							<label htmlFor="">Ingrese su mail</label>
							<input type="email" name="mail" required placeholder="Introduzca" className=" px-2 border-2 border-bluemain w-full h-9" />
						</div>
						<div className="w-full h-52 flex flex-col items-start md:w-3/5">
							<label htmlFor="">Motivo de la consulta:</label>
							<textarea name="consulta" id="" className="w-full h-full resize-none border-2 border-bluemain"></textarea>
						</div>
						<div className="w-full md:w-3/5 flex flex-col md:flex-row md:gap-2">
							<button type="submit" className="w-full md:w-1/2 h-10 rounded bg-bluesec text-white flex justify-center items-center ">
								<p className="flex gap-2"><WhatsApp /><span>Consultar por WhatsApp</span></p>
							</button>
							<button type="submit" className="w-full md:w-1/2 h-10 rounded bg-bluesec text-white flex justify-center items-center ">
								<p className="flex gap-2"><Mail color="white" size={24} /><span>Consultar por Mail</span></p>
							</button>

						</div>
					</form>
				</section>
			</Layout >
		</>
	)
}