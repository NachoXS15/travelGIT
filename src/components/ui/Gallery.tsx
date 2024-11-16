import Postals from "../../config/Images";


export default function Gallery() {
  return (
    <section className="p-5 md:p-10">
        <div className="gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4">
            {
                Postals.map(postal => (
                    <img src={postal.img} alt="" className="rounded-md mb-4"/>
                ))
            }
        </div>
    </section>
  )
}
