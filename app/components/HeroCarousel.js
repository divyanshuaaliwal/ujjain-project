'use client'

import { useState, useEffect } from "react";
import styles from "./HeroCarousel.module.css";

const slides = [
    {
        type: "video",
        src: "/video1.mp4",
        content: "Explore Nature with Us 🌿",
    },
    {
        type: "video",
        src: "/video2.mp4",
        content: "Adventure Awaits 🚀",
    },
    {
        type: "image",
        src: "/hero-bg.jpg",
        content: "Discover New Destinations 🧭",
    },
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    const slide = slides[current];

    return (
        <div className={styles.carousel}>
            <div className={styles.mediaWrapper}>
                {slide.type === "video" ? (
                    <video key={slide.src} autoPlay muted loop className={styles.media}>
                        <source src={slide.src} type="video/mp4" />
                    </video>
                ) : (
                    <img src={slide.src} alt="Slide" className={styles.media} />
                )}
                <div className={styles.overlay}>
                    <h1 className={styles.animatedText}>{slide.content}</h1>
                </div>
            </div>
            <button className={styles.arrowLeft} onClick={prevSlide}>⟨</button>
            <button className={styles.arrowRight} onClick={nextSlide}>⟩</button>
        </div>
    );
}
