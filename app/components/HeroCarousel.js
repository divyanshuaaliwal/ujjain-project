"use client"
import React, { useState } from "react";
import styles from './HeroCarousel.module.css'; 
import VideoSlide from "./VideoSlide";
import { videoData } from "../Data/videoData";

const HeroCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % videoData.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + videoData.length) % videoData.length);
    };

    const handleBookingClick = () => {
        alert("Booking clicked!");
    };

    const handlePremiumClick = () => {
        alert("Premium Slot clicked!");
    };

    return (
        <div className={styles.carouselContainer}>
            
            <VideoSlide video={videoData[currentIndex]} />

            {/* Overlay */}
            <div className={styles.contentOverlay}>
                <h1 className={styles.title}>{videoData[currentIndex].title}</h1>
                <p className={styles.description}>{videoData[currentIndex].description}</p>

                <div className={styles.controls}>
                    <button onClick={goToPrev} className={styles.navButton}>⟨</button>
                    <div className={styles.muteButton}>
                        {videoData[currentIndex].slug}
                    </div>
                    <button onClick={goToNext} className={styles.navButton}>⟩</button>
                </div>
            </div>


            {/* buttons directly below video */}
            <div className={styles.buttonGroup}>
                <button onClick={handleBookingClick} className={styles.bookingButton}>Aarti Booking</button>
                <button onClick={handlePremiumClick} className={styles.premiumButton}>Premium Slot</button>
            </div>
        </div>
    );
};

export default HeroCarousel;
