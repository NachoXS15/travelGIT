export default function CardGroup() {
    return (
        <section className="w-full h-fit py-5">
            <h2 className="text-bluemain text-center text-4xl font-extrabold">¿TENÉS PENSADO VIAJAR?</h2>
            <hr className='w-2/5 m-auto border text-bluesec text-center mt-4' />
            <div className="w-full flex flex-col items-center m-auto px-5 mt-5 gap-2 md:flex-row md:w-3/5 md:h-fit" style={{ fontFamily: 'Mundial' }}>
                <div className="w-full h-[250px] bg-bluemain rounded-lg md:w-1/2 md:h-[350px] bg-cover" style={{ backgroundImage: `url("https://pre-webunwto.s3.eu-west-1.amazonaws.com/2022-09/international-tourism-back-to-60-of-pre-pandemic-levels-in-january-july-2022.jpg?VersionId=7Rvl01UI3YgVz6qyzlPoG6A54B3BPoPZ")` }}>
                    <div className="w-full h-full bg-black bg-opacity-40 rounded-lg flex flex-col items-start justify-end p-5">
                        <h2 className="text-white text-3xl">INTERNACIONALES</h2>
                        <hr className='w-2/5 border mt-1 text-bluesec' />
                        <p className="text-white mt-3">DESTINOS</p>
                    </div>
                </div>
                <div className="w-full h-[250px] flex flex-col gap-3 md:w-1/2 md:h-[350px]">
                    <div className="w-full h-1/2 bg-bluemain rounded-lg bg-cover bg-center " style={{ backgroundImage: `url("https://pre-webunwto.s3.eu-west-1.amazonaws.com/2022-09/international-tourism-back-to-60-of-pre-pandemic-levels-in-january-july-2022.jpg?VersionId=7Rvl01UI3YgVz6qyzlPoG6A54B3BPoPZ")` }}>
                        <div className="w-full h-full bg-black bg-opacity-40 rounded-lg flex flex-col items-start justify-end p-5">
                            <h2 className="text-white text-3xl">EXCURSIONES</h2>
                            <hr className='w-2/5 border mt-1 text-bluesec ' />
                            <p className="text-white mt-3">DESTINOS</p>
                        </div>
                    </div>
                    <div className="w-full h-1/2 flex gap-4">
                        <div className="w-full bg-bluemain rounded-lg bg-cover bg-center " style={{ backgroundImage: `url("https://pre-webunwto.s3.eu-west-1.amazonaws.com/2022-09/international-tourism-back-to-60-of-pre-pandemic-levels-in-january-july-2022.jpg?VersionId=7Rvl01UI3YgVz6qyzlPoG6A54B3BPoPZ")` }}>
                            <div className="w-full h-full bg-black bg-opacity-40 rounded-lg flex flex-col items-start justify-end p-5">
                                <h2 className="text-white text-3xl">Nacional</h2>
                                <hr className='w-2/5 border mt-1 text-bluesec ' />
                                <p className="text-white mt-3">DESTINOS</p>
                            </div>
                        </div>
                        <div className="w-full bg-bluemain rounded-lg bg-cover bg-center " style={{ backgroundImage: `url("https://pre-webunwto.s3.eu-west-1.amazonaws.com/2022-09/international-tourism-back-to-60-of-pre-pandemic-levels-in-january-july-2022.jpg?VersionId=7Rvl01UI3YgVz6qyzlPoG6A54B3BPoPZ")` }}>
                            <div className="w-full h-full bg-black bg-opacity-40 rounded-lg flex flex-col items-start justify-end p-5">
                                <h2 className="text-white text-3xl">Grupales</h2>
                                <hr className='w-2/5 border mt-1 text-bluesec ' />
                                <p className="text-white mt-3">DESTINOS</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
