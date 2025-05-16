import React from 'react';
import styles from './TourOverview.module.css';
import { HeaterIcon as Helicopter, ChevronDown, Eye } from 'lucide-react';

const TourOverview = () => {
    return (

        <div className={styles.parent}>
            <section className={styles.tourOverview}>
                <div className={styles.sectionHeader}>
                    <div className={styles.sectionIcon}>
                        <Helicopter size={24} />
                    </div>
                    <h2 className={styles.sectionTitle}>Tour Overview</h2>
                </div>

                <div className={styles.overviewContent}>
                    <p>
                        Looking for the most seamless and divine helicopter tour experience in 2025?
                        This latest and comprehensive package is designed to answer all your questions
                        and provide every detail you need before booking your journey. Whether it's about
                        the route, schedule, weather considerations, luggage limits, or cancellation policies,
                        we've got you fully covered.
                    </p>

                    <div className={styles.overviewCards}>
                        <div className={styles.overviewCard}>
                            <div className={styles.cardIcon}>
                                <Eye size={24} />
                            </div>
                            <h3>Breathtaking Views</h3>
                            <p>Experience stunning aerial perspectives of mountains, valleys, and iconic landmarks</p>
                        </div>

                        <div className={styles.overviewCard}>
                            <div className={styles.cardIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                            <h3>Time-Efficient</h3>
                            <p>Cover more destinations in less time compared to traditional road journeys</p>
                        </div>

                        <div className={styles.overviewCard}>
                            <div className={styles.cardIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 6L18.29 8.29C18.923 8.923 19.24 9.24 19.24 9.625C19.24 10.01 18.923 10.327 18.29 10.96L13.637 15.613C13.1212 16.1288 12.865 16.3867 12.5546 16.5853C12.2442 16.7839 11.9149 16.9433 11.206 17.262L8 19L7 18L8.739 14.793C9.057 14.085 9.217 13.7554 9.415 13.445C9.614 13.1346 9.871 12.8788 10.387 12.363L15.04 7.71C15.673 7.077 15.99 6.76 16.375 6.76C16.76 6.76 17.077 7.077 17.71 7.71L16 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 22L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14 2L15.1 3.1M19.7 7.7L20.8 8.8M15.1 8.8L16.9 7M6.3 17.6L5.2 18.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h3>Luxury Experience</h3>
                            <p>Enjoy premium comfort with spacious seating and personalized service</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TourOverview;