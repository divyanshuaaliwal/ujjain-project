import React from 'react';
import styles from './Gallery.module.css';
import { Camera, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionIcon}>
          <Camera size={24} />
        </div>
        <h2 className={styles.sectionTitle}>Tour Gallery</h2>
      </div>
      
      <div className={styles.galleryContainer}>
        <div className={styles.mainVideo}>
          <div className={styles.videoThumb}>
            <img 
              src="https://images.pexels.com/photos/14539766/pexels-photo-14539766.jpeg" 
              alt="Helicopter Tour Video Thumbnail" 
            />
            <div className={styles.playButton}>
              <Play size={48} fill="white" />
            </div>
            <div className={styles.videoDuration}>5:32</div>
          </div>
          <div className={styles.videoInfo}>
            <div className={styles.tourNameContainer}>
              <h3 className={styles.tourLabel}>Tour Name</h3>
              <div className={styles.tourName}>Scenic Mountain Helicopter Tour</div>
            </div>
            <div className={styles.tourDurationContainer}>
              <h3 className={styles.tourLabel}>Tour Duration</h3>
              <div className={styles.tourDuration}>06 Days / 05 Nights</div>
            </div>
          </div>
        </div>
        
        <div className={styles.tourDetails}>
          <div className={styles.detailRow}>
            <div className={styles.detailLabel}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 10H21M7 14H7.01M12 14H12.01M17 14H17.01M5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Meals
            </div>
            <div className={styles.detailValue}>
              Breakfast, Lunch, Dinner
            </div>
          </div>
          
          <div className={styles.detailRow}>
            <div className={styles.detailLabel}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9V12L14 14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Helicopter Type
            </div>
            <div className={styles.detailValue}>
              Bell 407/ AS 350 B3
            </div>
          </div>
          
          <div className={styles.detailRow}>
            <div className={styles.detailLabel}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 20L3 17V4L9 7M9 20L15 17M9 20V7M15 17L21 20V7L15 4M15 17V4M9 7L15 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Start & End Point
            </div>
            <div className={styles.detailValue}>
              Dehradun
            </div>
          </div>
          
          <div className={styles.detailRow}>
            <div className={styles.detailLabel}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 20L3 17V4L9 7M9 20L15 17M9 20V7M15 17L21 20V7L15 4M15 17V4M9 7L15 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Destination Covered
            </div>
            <div className={styles.detailValue}>
              Dehradun → Kharsali
            </div>
          </div>
          
          <div className={styles.detailRow}>
            <div className={styles.detailLabel}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 12V22H4V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 7H2V12H22V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 7H16.5C17.1667 7 18.5 6.2 18.5 4C18.5 1.8 17.1667 1 16.5 1C15.8333 1 15 1 15 1H9C9 1 8.16667 1 7.5 1C6.83333 1 5.5 1.8 5.5 4C5.5 6.2 6.83333 7 7.5 7H12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Package Type
            </div>
            <div className={styles.detailValue}>
              All Inclusive Package (Airport Pickup + Hotel Stay + Local transport + Meals Etc).
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.thumbnailGallery}>
        <button className={styles.galleryNav} aria-label="Previous">
          <ChevronLeft size={24} />
        </button>
        <div className={styles.thumbnails}>
          <div className={`${styles.thumbnail} ${styles.active}`}>
            <img 
              src="https://images.pexels.com/photos/14539766/pexels-photo-14539766.jpeg" 
              alt="Helicopter Tour" 
            />
          </div>
          <div className={styles.thumbnail}>
            <img 
              src="https://images.pexels.com/photos/14539770/pexels-photo-14539770.jpeg" 
              alt="Mountain View" 
            />
          </div>
          <div className={styles.thumbnail}>
            <img 
              src="https://images.pexels.com/photos/1244705/pexels-photo-1244705.jpeg" 
              alt="Aerial View" 
            />
          </div>
          <div className={styles.thumbnail}>
            <img 
              src="https://images.pexels.com/photos/9010768/pexels-photo-9010768.jpeg" 
              alt="Scenic View" 
            />
          </div>
          <div className={styles.thumbnail}>
            <img 
              src="https://images.pexels.com/photos/14426658/pexels-photo-14426658.jpeg" 
              alt="Helicopter Landing" 
            />
          </div>
        </div>
        <button className={styles.galleryNav} aria-label="Next">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Gallery;