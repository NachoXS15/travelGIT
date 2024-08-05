import Layout from "../components/Layout";
import Slider from "../components/Slider";

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
  return (
    <Layout>
      <main>
        <section className="max-w-full h-fit">
          <Slider images={Slides} text={text} />
        </section>
      </main>
    </Layout>
  )
}

