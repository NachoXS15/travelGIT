import Postals from "../../config/Images";


export default function Gallery() {
  return (
    <section className="p-5 md:p-10">
        <div className="gap-2 lg:gap-8 columns-2 lg:columns-3 xl:columns-4">
            {
                Postals.map(postal => (
                    <img src={postal.img} alt="" className="rounded-md w-full mb-4"/>
                ))
            }
        </div>
    </section>
  )
}
