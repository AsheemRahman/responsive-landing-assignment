import { useState, useEffect } from "react";
import "./HeroSection.css";
import runningPerson from "../../assets/running-person.svg";

const slides = [
    {
        id: 1,
        title: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
        button: "Know More",
        img: runningPerson
    },
    {
        id: 2,
        title: "Consetetur elitr",
        text: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit.",
        button: "Learn More",
        img: runningPerson
    },
    {
        id: 3,
        title: "Tempor invidunt",
        text: "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse.",
        button: "Get Started",
        img: runningPerson
    }
];

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide every 4s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const currentSlide = slides[currentIndex];

    return (
        <section className="hero">

            {/* LEFT — content changes */}
            <div className="hero-content">
                <h2 className="hero-title">{currentSlide.title}</h2>
                <p className="hero-text">{currentSlide.text}</p>

                <button className="hero-button">
                    {currentSlide.button}
                    <span className="hero-button-icon">▶</span>
                </button>

                {/* Dots */}
                <div className="hero-dots">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`hero-dot ${currentIndex === index ? "active" : ""}`}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
                </div>
            </div>

            {/* RIGHT — image slides */}
            <div className="hero-visual">
                <div
                    className="hero-slider-track"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide) => (
                        <img
                            key={slide.id}
                            src={slide.img}
                            alt="Running"
                            className="hero-person-image"
                        />
                    ))}
                </div>
            </div>

        </section>
    );
};

export default HeroSection;
