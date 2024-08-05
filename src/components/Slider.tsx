import { useState } from "react";
import { LeftArrowIcon, RightArrowIcon } from "./Icons"

interface CarouselProps {
    images: string[];
    text: string[]
}

export default function Carousel({ images, text }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full h-[550px] overflow-hidden">
            <div
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center transition-transform duration-500"
                style={{ backgroundImage: `url(${images[currentIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
            >
                <div className="w-full h-full bg-opacity-80 flex justify-center items-center">
                    <div className="absolute inset-0 flex items-center justify-between px-4">
                        <button onClick={handlePrev} className="p-2 shadow bg-opacity-40 bg-white rounded-full hover:bg-opacity-100">
                            <LeftArrowIcon />
                        </button>
                        <button onClick={handleNext} className="p-2 shadow bg-opacity-40 bg-white rounded-full hover:bg-opacity-100">
                            <RightArrowIcon />
                        </button>
                    </div>
                    <div className="text-white text-center w-3/5 text-4xl font-bold md:text-7xl md:w-3/5" style={{ fontFamily: 'Mundial' }}>{text[currentIndex]}</div>
                </div>
            </div>
        </div>
    );
}

