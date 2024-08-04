import { LeftArrowIcon, RightArrowIcon } from "./Icons"

type props = {
    slides: string[]
}

export default function Slider({ slides }: props) {
    return (
        <div className="h-[550px] overflow-hidden relative">
            <div className="flex">
                {slides.map((slide, index) => (
                    <img key={index} src={slide} alt={`Slide ${index + 1}`} />
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-6">
                <button className="bg-white h-fit shadow p-3 opacity-70 rounded-full hover:opacity-100">
                    <LeftArrowIcon />
                </button>
                <button className="bg-white h-fit shadow p-3 opacity-70 rounded-full hover:opacity-100">
                    <RightArrowIcon />
                </button>
            </div>
        </div>
    )
}
