"use client"
import React, { useEffect, useRef } from 'react';
import './HeroCarousel.module.css';

export const videoData = [
    {
        id: 1,
        src: "https://player.vimeo.com/external/394678700.sd.mp4?s=353646e34d7bde02ad638c7308a198786e0dff8f&profile_id=165&oauth2_token_id=57447761",
        title: "ॐ नमः शिवाय",
        description: "The eternal dance of Lord Shiva reveals the cosmic cycles of creation and dissolution. Experience the divine presence of Mahakal."
    },
    {
        id: 2,
        src: "https://player.vimeo.com/external/368320203.sd.mp4?s=38984cea9332f87ac434f7eea65b2a4b9e09bc0d&profile_id=165&oauth2_token_id=57447761",
        title: "महाकालेश्वर ज्योतिर्लिंग",
        description: "One of the twelve Jyotirlingas, Mahakaleshwar embodies the infinite power of Lord Shiva, the destroyer of ignorance and illusion."
    },
    {
        id: 3,
        src: "https://player.vimeo.com/external/370467553.sd.mp4?s=32d525b068d7b5ee799de49b26bed8bd4231cb5f&profile_id=165&oauth2_token_id=57447761",
        title: "शिव तांडव",
        description: "Witness the cosmic dance of destruction and creation, as Lord Shiva performs the Tandava, bringing balance to the universe."
    },
    {
        id: 4,
        src: "https://player.vimeo.com/external/404113349.sd.mp4?s=5438282a0415a24c83e4fd3189a553a04214bc39&profile_id=165&oauth2_token_id=57447761",
        title: "आरती श्री महाकालेश्वर",
        description: "The divine aarti at the Mahakaleshwar Temple illuminates the spiritual path and cleanses the soul of all impurities."
    }
];
const VideoSlide = ({ video, isMuted }) => {
    if (!video) return null;

    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.error("Video playback error:", error);
            });
        }
    }, [video.src]);

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