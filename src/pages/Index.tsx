import { useState } from "react";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import PackageProps from "../config/PackageType";
const Slides = [
  "https://i.pinimg.com/originals/a5/11/32/a511323ec9460a20e7b78bd5e64bc20b.jpg",
  "https://fondosmil.co/fondo/2257.jpg",
  "https://i.pinimg.com/originals/38/53/36/385336bdb4b63eecc5f68246f80a29e5.jpg",
]

const text = [
  "DESCUBRÍ EL MUNDO CON NOSOTROS",
  "EXPERIMENTÁ LA FELICIDAD DE VIAJAR",
  "CONOCÉ LUGARES MARAVILLOSOS"
]

export default function Index() {
  const [packages, setPackages] = useState<PackageProps[]>();

  
  
  return (
    <Layout>
      <main>
        <section className="max-w-full h-fit">
          <Slider images={Slides} text={text} />
        </section>
        <section className="w-4/5 m-auto h-fit py-5">
            <h2 className="text-bluemain text-center text-4xl font-bold">PAQUETES</h2>
            <hr className='w-2/5 m-auto border text-bluesec text-center mt-4' />
        </section>
      </main>
    </Layout>
  )
}

