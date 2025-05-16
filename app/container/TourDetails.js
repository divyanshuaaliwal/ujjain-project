// import React from 'react';
import styles from './TourDetails.module.css';
import { MapPin } from 'lucide-react';

const TourDetails = () => {
  return (
    <section className={styles.tourDetails}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionIcon}>
          <MapPin size={24} />
        </div>
        <h2 className={styles.sectionTitle}>Highlights of Your Helicopter Tour</h2>
      </div>
      
      <div className={styles.highlightsTable}>
        <div className={styles.tableHeader}>
          <div className={styles.aspectCol}>Aspect</div>
          <div className={styles.detailsCol}>Details</div>
        </div>
        
        <div className={styles.tableRow}>
          <div className={styles.aspectCol}>Duration</div>
          <div className={styles.detailsCol}>5-6 days (vs. 9-12 days by road)</div>
        </div>
        
        <div className={styles.tableRow}>
          <div className={styles.aspectCol}>Elevation</div>
          <div className={styles.detailsCol}>330 meters / (2,200 feet) (Dehradun) to 3,583 meters / 11,760 Feet (Kedarnath)</div>
        </div>
        
        <div className={styles.tableRow}>
          <div className={styles.aspectCol}>Best Time to Visit</div>
          <div className={styles.detailsCol}>May to June and September to November</div>
        </div>
        
        <div className={styles.tableRow}>
          <div className={styles.aspectCol}>Luggage Limit</div>
          <div className={styles.detailsCol}>5 kg per person (additional luggage can be stored at the base)</div>
        </div>
        
        <div className={styles.tableRow}>
          <div className={styles.aspectCol}>Helicopter Type</div>
          <div className={styles.detailsCol}>Bell 407 (6-seater) and AS 350 B3 (5-seater)</div>
        </div>
        
        <div className={styles.tableRow}>
          <div className={styles.aspectCol}>Booking Window</div>
          <div className={styles.detailsCol}>Minimum 2 weeks in advance recommended (peak season requires 4-6 weeks)</div>
        </div>
      </div>
      
      <div className={styles.keyFeatures}>
        <h3 className={styles.subSectionTitle}>Key Features</h3>
        
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 2V5M15 2V5M12 14V18M12 14C10.3431 14 9 12.6569 9 11V8M12 14C13.6569 14 15 12.6569 15 11V8M15 8H9M15 8C15.7956 8 16.5587 8.31607 17.1213 8.87868C17.6839 9.44129 18 10.2044 18 11M9 8C8.20435 8 7.44129 8.31607 6.87868 8.87868C6.31607 9.44129 6 10.2044 6 11M6 11V13C6 14.3261 6.52678 15.5979 7.46447 16.5355C8.40215 17.4732 9.67392 18 11 18M18 11V13C18 14.3261 17.4732 15.5979 16.5355 16.5355C15.5979 17.4732 14.3261 18 13 18M11 18H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22C12.5523 22 13 21.5523 13 21C13 20.4477 12.5523 20 12 20C11.4477 20 11 20.4477 11 21C11 21.5523 11.4477 22 12 22Z" fill="currentColor"/>
              </svg>
            </div>
            <h4>Experienced Pilots</h4>
            <p>All pilots have 5000+ flying hours and specialized mountain flying experience</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>Safety Certified</h4>
            <p>All helicopters undergo rigorous maintenance and safety checks before each flight</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 10H21M7 14H7.01M12 14H12.01M17 14H17.01M5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>Full Board Meals</h4>
            <p>All packages include breakfast, lunch, and dinner with vegetarian and non-vegetarian options</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 12V22H4V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 7H2V12H22V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 7H16.5C17.1667 7 18.5 6.2 18.5 4C18.5 1.8 17.1667 1 16.5 1C15.8333 1 15 1 15 1H9C9 1 8.16667 1 7.5 1C6.83333 1 5.5 1.8 5.5 4C5.5 6.2 6.83333 7 7.5 7H12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>Premium Accommodation</h4>
            <p>Stay in comfortable hotels and lodges close to helipad locations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourDetails;