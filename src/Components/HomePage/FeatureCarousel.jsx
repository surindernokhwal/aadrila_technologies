import { useEffect, useState } from "react";
import "./FeatureCarousel.css";
import { Invoice, License, Doc, Scan } from "../../assets/Images/Images";

const slides = [
    { id: 1, img: Invoice },
    { id: 2, img: License },
    { id: 3, img: Doc },
];

export default function FeatureCarousel() {
    const [index, setIndex] = useState(0);

    /* ================= AUTOPLAY ================= */
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 6000);

        return () => clearInterval(timer);
    }, []);

    /* ================= POSITION ================= */
    const getPosition = (i) => {
        const total = slides.length;

        if (i === index) return "center";

        if (i === (index + 1) % total) return "right";

        if (i === (index - 1 + total) % total) return "left";

        return "offscreen";
    };

    return (
        <div className="carousel-container">
            <div className="carousel-main">
                {slides.map((slide, i) => (
                    <div
                        key={slide.id}
                        className={`carousel-feature ${getPosition(i)}`}
                        // onClick={() => setIndex(i)}
                    >
                        <div className="scan"><img src={Scan} alt="scan image" /></div>
                        <img src={slide.img} alt={`slide-${slide.id}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}
