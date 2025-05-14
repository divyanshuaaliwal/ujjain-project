"use client"
import React, { useEffect, useState } from "react";
import styles from './HeroCarousel.module.css'; // Make sure styles are defined
import VideoSlide from "./VideoSlide";
import {videoData}  from "../Data/videoData";

const HeroCarousel = () => {
    
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMuted, setIsMuted] = useState(true);

   
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % videoData.length);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % videoData.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + videoData.length) % videoData.length);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    return (
        <div className={styles.carouselContainer}>
            <VideoSlide video={videoData[currentIndex]} isMuted={isMuted} />

            <div className={styles.contentOverlay}>
                <h1 className={styles.title}>{videoData[currentIndex].title}</h1>
                <p className={styles.description}>{videoData[currentIndex].description}</p>

                <div className={styles.controls}>
                    <button onClick={goToPrev} className={styles.navButton}>⟨</button>
                    <button onClick={toggleMute} className={styles.muteButton}>
                        {isMuted ? "Unmute 🔇" : "Mute 🔊"}
                    </button>
                    <button onClick={goToNext} className={styles.navButton}>⟩</button>
                </div>
            </div>
        </div>
    );
};

export default HeroCarousel;
