"use client";
import React, { useEffect, useRef } from 'react';
import styles from './HeroCarousel.module.css'; // Import CSS module properly

const VideoSlide = ({ video }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        if (videoElement) {
            // Pause video before changing src/load
            videoElement.pause();

            // Set a small timeout to avoid interrupt error
            setTimeout(() => {
                videoElement.load();

                videoElement.play().catch(error => {
                    console.error("Video playback error:", error);
                });
            }, 100); // 100ms delay
        }
    }, [video.src]);


    if (!video) return null;

    return (
        <div className={styles.videoWrapper}>
            <video
                ref={videoRef}
                className={styles.videoElement}
                src={video.src}
                loop
                autoPlay
                muted={true}
                playsInline
            />
            <div className={styles.videoOverlay}></div>
        </div>
    );
};

export default VideoSlide;
