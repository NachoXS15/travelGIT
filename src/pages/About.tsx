import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <section className="w-full h-[350px] bg-cover bg-center"
        style={{ backgroundImage: `url("https://i0.wp.com/vacacionesporargentina.com/wp-content/uploads/2020/11/waterfall-5040210_1920.jpg?fit=1920%2C1272&ssl=1")` }}>
        <div className="w-full h-full flex justify-center items-center bg-bluesec bg-opacity-70">
          <p className="text-white text-4xl font-semibold md:text-7xl" style={{ fontFamily: 'Mundial' }}>NOSOTROS</p>
        </div>
      </section>
      <section className="w-full md:w-3/4 h-fit m-auto flex flex-col items-start justify-center my-10 gap-3 px-5" style={{ fontFamily: 'Mundial' }}>
        <div>
          <h2 className="text-3xl text-bluemain font-bold text-center">¿QUIÉNES SOMOS?</h2>
          <hr className="mt-2 border border-bluemain" />
        </div>
        <p className="text-xl leading-relaxed ">Somos una empresa fundada en el año 2008, en el corazón de la provincia de la Rioja. A través de estos años, hemos potenciado nuestras ventajas más significativas con el aporte de nuestra experiencia y profesionalismo, posicionándonos como una empresa confiable que se destaca por la calidad de sus servicios.
          Esta sólida imagen nos permite ser líderes en el rubro a Nivel Provincial con una proyeccion de crecimiento incomparable. Nuestra casa central se encuentra ubicada en frente de la plaza principal de la ciudad de La Rioja, con un staff altamente capacitado brindándoles a nuestros clientes todos nuestros productos con las mejores condiciones, un servicio integral de asesoramiento, y toda una red de servicios complementarios que, para nosotros, son el motor de nuestro crecimiento constante.
          <br /> <br />La combinación efectiva entre profesionalismo y juventud nos da el dinamismo necesario para destacarnos por nuestro espíritu pionero e innovador.
          Por ello quisiéramos transmitirle con orgullo y poner a su disposición este nuevo trabajo, con el objeto de acercarle todas las novedades, los nuevos destinos, las mejores opciones hoteleras y todos los aspectos de su interés.
          Nuestro sitio ha sido pensado para hacerle más fácil la búsqueda de información y consulta de productos.
          No espere más, su viaje puede ser como usted lo planeó, sin sorpresas. Descubra un mundo de opciones y servicios a través de de nuestro equipo, como sólo TravelGit le puede brindar.</p>
      </section>
    </Layout>
  )
}
