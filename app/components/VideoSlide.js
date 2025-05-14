"use client";
import React, { useEffect, useRef } from 'react';
import styles from './HeroCarousel.module.css'; // Import CSS module properly

const VideoSlide = ({ video, isMuted }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load(); // Ensure it resets the video before playing a new one
            videoRef.current.play().catch(error => {
                console.error("Video playback error:", error);
            });
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
                muted={isMuted}
                playsInline
            />
            <div className={styles.videoOverlay}></div>
        </div>
    );
};

export default VideoSlide;
