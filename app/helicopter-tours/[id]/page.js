'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { travelPackages } from '../../Data/helicopterTravelPackagesData';
import Image from 'next/image';
import styles from './page.module.css';
import { InternalPageHeading, Wrapper } from '../../MainLayouts';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function HelicopterTourPage() {

    const tabs = ['highlights', 'itinerary', 'inclusions', 'exclusions'];
    const { id } = useParams();
    const tour = travelPackages.find((t) => t.id === Number(id));

    const [activeTab, setActiveTab] = useState('highlights');
    const [showBookingForm, setShowBookingForm] = useState(false);

    if (!tour) {
        return <div className={styles.notFound}>Tour not found</div>;
    }

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleBookNow = () => {
        setShowBookingForm(true);
        setTimeout(() => {
            document.getElementById('bookingForm')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <Wrapper>

            <div className={styles.container}>


                <InternalPageHeading title={tour.title} description={tour.subtitle} />

                <div className={styles.heroGrid}>
                    <div className={styles.heroImageWrapper}>
                        <Image
                            src={tour.heroImage}
                            alt={tour.title}
                            fill
                            className={styles.heroImage}
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>
                    <div className={styles.overviewCard}>
                        <h3 className={styles.cardTitle}>Tour Overview</h3>
                        <div className={styles.overviewDetails}>
                            <p><strong>Duration:</strong> {tour.duration}</p>
                            <p><strong>Route:</strong> {tour.startLocation}</p>
                            <p className={styles.priceInfo}>
                                <strong>Price:</strong>{' '}
                                <span className={styles.currentPrice}>₹{tour.currentPrice}</span>{' '}
                                <span className={styles.originalPrice}>₹{tour.originalPrice}</span>{' '}
                                <span className={styles.saving}>(Save {"  "} ₹{tour.saving})</span>
                            </p>
                              <Stack spacing={1} direction="row" alignItems="center" className={styles.ratingParent}>
                    <span className={styles.ratingLabel}>Customer Rating:</span>
                    <Rating name="half-rating-read" defaultValue={tour.rating} precision={0.5} readOnly size="small" />
                    <span className={styles.ratingValue}>({tour.rating})</span>
                </Stack>
                            <p className={styles.overviewText}>{tour.overview}</p>
                        </div>
                        <button onClick={handleBookNow} className={styles.bookNowButtonHero}>
                            Book Now
                        </button>
                    </div>
                </div>

                <div className={styles.heroGrid}>
                    <div>
                        <div className={styles.tabContainer}>
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    className={`${styles.tabButton} ${activeTab === tab ? styles.activeTab : ''}`}
                                    onClick={() => handleTabChange(tab)}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>

                        {activeTab === 'highlights' && (
                            <section className={styles.section}>
                                <h3 className={styles.sectionTitle}>Highlights</h3>
                                <ul className={styles.list}>
                                    {tour.highlights.map((item, i) => (
                                        <li key={i} className={styles.listItem}>{item}</li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {activeTab === 'itinerary' && (
                            <section className={styles.section}>
                                <h3 className={styles.sectionTitle}>Itinerary</h3>
                                <ul className={styles.list}>
                                    {tour.itinerary.map((item, i) => (
                                        <li key={i} className={styles.listItem}>
                                            <strong>{item.time}:</strong>{' '}
                                            {item.activity && `${item.activity} - `}{item.description}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {activeTab === 'inclusions' && (
                            <section className={styles.section}>
                                <h3 className={styles.sectionTitle}>Inclusions</h3>
                                <ul className={styles.list}>
                                    {tour.inclusions.map((item, i) => (
                                        <li key={i} className={styles.listItem}>{item}</li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {activeTab === 'exclusions' && (
                            <section className={styles.section}>
                                <h3 className={styles.sectionTitle}>Exclusions</h3>
                                <ul className={styles.list}>
                                    {tour.exclusions.map((item, i) => (
                                        <li key={i} className={styles.listItem}>{item}</li>
                                    ))}
                                </ul>
                            </section>
                        )}

                    </div>

                    <div>
                        <section className={styles.section2}>
                            <h3 className={styles.sectionTitle}>Things to Carry</h3>
                            <ul className={styles.list}>
                                {tour.thingsToCarry.map((item, i) => (
                                    <li key={i} className={styles.listItem}>{item}</li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>
                <section className={styles.section2}>
                    <h3 className={styles.sectionTitle}>Important Information</h3>
                    <ul className={styles.list}>
                        {tour.importantInfo.map((item, i) => (
                            <li key={i} className={styles.listItem}>{item}</li>
                        ))}
                    </ul>
                </section>
                <div className={styles.heroGrid}>
                    <section className={styles.section2}>
                        <h3 className={styles.sectionTitle}>Cancellation Policy</h3>
                        <ul className={styles.list}>
                            {tour.cancellationPolicy.map((item, i) => (
                                <li key={i} className={styles.listItem}>{item}</li>
                            ))}
                        </ul>
                    </section>



                    <section className={styles.section2}>
                        <h3 className={styles.sectionTitle}>Temple Rules</h3>
                        <ul className={styles.list}>
                            {tour.templeRules.map((item, i) => (
                                <li key={i} className={styles.listItem}>{item}</li>
                            ))}
                        </ul>
                    </section>

                </div>

                <button onClick={handleBookNow} className={styles.bookNowButton}>
                    Book Now
                </button>
            </div>
        </Wrapper>
    );
}