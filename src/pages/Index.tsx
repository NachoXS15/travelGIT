import Layout from "../components/Layout";
import Slider from "../components/Slider";

const Slides = [
  "https://i.pinimg.com/originals/a5/11/32/a511323ec9460a20e7b78bd5e64bc20b.jpg",
  "../assets/logo.png",
  "../assets/logo.png",
]

export default function Index() {
  return (
    <Layout>
      <main>
        <section className="max-w-full h-fit">
          <Slider slides={Slides} />
        </section>
      </main>
    </Layout>
  )
}

