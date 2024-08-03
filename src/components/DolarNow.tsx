import { useState, useEffect } from "react"
type DolarInfo = {
	compra: number,
	venta: number,
	date: string
}

export default function DolarNow() {
	const [dolarPrice, setDolarPrice] = useState<DolarInfo>();

	useEffect(() => {
		fetch("https://dolarapi.com/v1/dolares/blue")
			.then(response => response.json())
			.then(data => setDolarPrice(data));
	}, [dolarPrice])

	return (
		<div className='bg-bluemain text-center py-1'>
			<h2 className='text-white text-xl' style={{ fontFamily: 'Mundial' }}>Precio Dolar Actual: {dolarPrice ? `$${dolarPrice.compra}` : "Cargando..."}</h2>
		</div>
	)
}
