import { useRef } from "react";
import Layout from "../components/Layout";
import { Mail, WhatsApp } from "../components/ui/Icons";
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner'

export default function ContactUs() {

	const form = useRef<HTMLFormElement>(null);

	const handleWhatsAppSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const formData = new FormData(form.current!);

		const nombre = formData.get("nombre");
		const consulta = formData.get("consulta");
		const provincia = formData.get("provincia");

		const message = `¡Hola! Mi nombre es ${nombre}, me comunico desde ${provincia}, el motivo de mi consulta es: ${consulta}. ¡Espero su respuesta!`;
		const phoneNumber = "543804325711";
		window.open(`https://wa.me/${phoneNumber}?text=${message}`);
	};

	const handleMailSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (form.current) {
			emailjs.sendForm("service_4p5hvnx", "template_7xy9vxc", form.current, {
				publicKey: "21qM3RsP_rUKeFtaj"
			})
				.then(
					() => {
						const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 2000));
						toast.promise(promise, {
							loading: 'Loading...',
							success: "Mail enviado",
							error: 'Mail no enviado',
						});
					},
					(error) => {
						console.log('Mail no enviado: ', error.text);
					},
				);
		}
	};

	return (
		<>
			<Layout>
				<hr className="w-4/5 m-auto border border-bluemain" />
				<section className="w-full h-fit flex flex-col items-center mt-10" style={{ fontFamily: 'Mundial' }}>
					<div className="mb-3 text-center">
						<h2 className="text-bluemain text-center text-3xl font-extrabold">¿TENÉS DUDAS? ¡CONTACTANOS!</h2>
						<hr className='w-2/5 m-auto border text-bluesec text-center mt-4' />
					</div>
					<form ref={form} className="w-full px-5 h-fit mb-10 flex flex-col items-center justify-center gap-4 md:w-4/5">
						<div className="w-full md:w-3/5 flex-col md:flex-row h-fit flex gap-5">
							<div className="w-full flex flex-col items-start md:w-1/2">
								<label htmlFor="nombre">Nombre y apellido</label>
								<input
									type="text"
									className="w-full h-9 px-2 border-2 rounded-sm border-bluemain"
									required
									placeholder="Introduzca"
									name="nombre"
								/>
							</div>
							<div className="w-full flex flex-col items-start md:w-1/2">
								<label htmlFor="provincia" className="text-nowrap">¿De donde nos consultas?</label>
								<select name="provincia" id="provincia" required className="w-full h-9 border-2 rounded-sm border-bluemain">
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
						<div className="w-full md:w-3/5 flex-col md:flex-row h-fit flex gap-5">
							<div className="w-full flex flex-col items-start md:w-1/2">
								<label htmlFor="nombre">Introduzca su mail</label>
								<input
									type="email"
									className="w-full h-9 px-2 border-2 rounded-sm border-bluemain"
									required
									placeholder="Introduzca"
									name="mail"
								/>
							</div>
							<div className="w-full flex flex-col items-start md:w-1/2">
								<label htmlFor="nombre">Introduzca su celular</label>
								<input
									type="number"
									className="w-full h-9 px-2 border-2 rounded-sm border-bluemain"
									required
									placeholder="Introduzca"
									name="number"
								/>
							</div>

						</div>

						<div className="w-full h-52 flex flex-col items-start md:w-3/5">
							<label htmlFor="consulta">Motivo de la consulta:</label>
							<textarea name="consulta" id="consulta" required className="w-full h-full resize-none border-2 border-bluemain"></textarea>
						</div>
						<div className="w-full md:w-3/5 flex flex-col md:flex-row gap-3 md:gap-2">
							<button type="button" onClick={handleWhatsAppSubmit} className="w-full md:w-1/2 h-10 rounded bg-bluesec text-white flex justify-center items-center">
								<p className="flex gap-2"><WhatsApp /><span>Consultar por WhatsApp</span></p>
							</button>
							<button type="button" onClick={handleMailSubmit} className="w-full md:w-1/2 h-10 rounded bg-bluesec text-white flex justify-center items-center">
								<p className="flex gap-2"><Mail color="white" size={24} /><span>Consultar por Mail</span></p>
							</button>
						</div>
					</form>
				</section>
				<Toaster richColors expand={false} closeButton/>
			</Layout>
		</>
	);
}
