"use client"
import React, { useState } from "react";
import styles from './HeroCarousel.module.css'; // Make sure styles are defined
import VideoSlide from "./VideoSlide";
import {videoData}  from "../Data/videoData";

const HeroCarousel = () => {
    
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % videoData.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + videoData.length) % videoData.length);
    };

    return (
        <div className={styles.carouselContainer}>
            <VideoSlide video={videoData[currentIndex]} />

            <div className={styles.contentOverlay}>
                <h1 className={styles.title}>{videoData[currentIndex].title}</h1>
                <p className={styles.description}>{videoData[currentIndex].description}</p>

                <div className={styles.controls}>
                    <button onClick={goToPrev} className={styles.navButton}>⟨</button>
                    <div className={styles.muteButton}>
                        {"🔱 Spiritual Energy"}
                    </div>
                    <button onClick={goToNext} className={styles.navButton}>⟩</button>
                </div>
            </div>
        </div>
    );
};

export default HeroCarousel;
