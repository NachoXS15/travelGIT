import { useState, useEffect } from "react"

export default function DolarNow() {
    const [dolarPrice, setDolarPrice] = useState(0)
    useEffect(() => {
        fetch("https://dolarapi.com/v1/dolares/blue")
            .then(response => response.json())
            .then(data => console.log(data));
            .then(setDolarPrice(data))
    })


    return (
        <div className='bg-bluemain text-center py-1'>
            <h2 className='text-white text-xl' style={{ fontFamily: 'Mundial' }}>Precio Dolar Actual: ${dolarPrice}</h2>
        </div>
    )
}
