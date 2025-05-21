'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { travelPackages } from '../../Data/helicopterTravelPackagesData';
import Image from 'next/image';
import styles from './page.module.css';
import { InternalPageHeading, InternalPageWrapper } from '../../MainLayouts';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Clock, MapPin, Tag, Star, Info, CheckCircle } from 'lucide-react';
import ItineraryAccordion from '@/app/components/ItineraryAccordion';


export default function HelicopterTourPage() {

    const { id } = useParams();
    const tour = travelPackages.find((t) => t.id === Number(id));

    if (!tour) {
        return <div className={styles.notFound}>Tour not found</div>;
    }

    const [activeTab, setActiveTab] = useState('highlights');
    const [showBookingForm, setShowBookingForm] = useState(false);
    const tabs = ['highlights', 'inclusions', 'exclusions', 'thingsToCarry', 'importantInfo'];

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleBookNow = () => {
        setShowBookingForm(true);
        setTimeout(() => {
            document.getElementById('bookingForm')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    function getActiveComponent(activeTab) {
        return tour?.[activeTab] ?? null;
    }

    function getSubtitle(activeTab) {
        return activeTab.replaceAll(/([A-Z])/g, ' $1').replace(/^./, char => char.toUpperCase())
    }

    return (
        <InternalPageWrapper>

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
                        <p>
                            <strong><Clock size={16} className={styles.icon} />   Duration:</strong> {tour.duration}
                        </p>
                        <p>
                            <strong><MapPin size={16} className={styles.icon} /> Route:</strong> {tour.startLocation}
                        </p>
                        <p className={styles.priceInfo}>
                            <strong><Tag size={16} className={styles.icon} /> Price:</strong>{' '}
                            <span className={styles.currentPrice}>₹{tour.currentPrice}</span>{' '}
                            <span className={styles.originalPrice}>₹{tour.originalPrice}</span>{' '}
                            <span className={styles.saving}>(Save ₹{tour.saving})</span>
                        </p>
                        <Stack spacing={1} direction="row" alignItems="center" className={styles.ratingParent}>
                            <Star size={16} className={styles.icon} />
                            <span className={styles.ratingLabel}> Customer Rating:</span>
                            <Rating
                                name="half-rating-read"
                                defaultValue={tour.rating}
                                precision={0.5}
                                readOnly
                                size="small"
                            />
                            <span className={styles.ratingValue}>({tour.rating})</span>
                        </Stack>
                        <p className={styles.overviewText}>
                            <Info size={16} className={styles.icon} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                            {tour.overview}
                        </p>
                    </div>
                    <button onClick={handleBookNow} className={styles.bookNowButtonHero}>

                        Book Now <CheckCircle size={16} className={styles.icon} style={{ marginRight: '6px', }} />
                    </button>
                </div>
            </div>



            <div className={styles.heroGrid}>
                <div>
                    <div className={styles.tabContainer}>
                        {
                            tabs.map((tab) => (
                                <button
                                    key={tab}
                                    className={`${styles.tabButton} ${activeTab === tab ? styles.activeTab : ''}`}
                                    onClick={() => handleTabChange(tab)}
                                >
                                    {getSubtitle(tab)}
                                </button>
                            ))
                        }
                    </div>


                    <section className={styles.section}>
                        <h3 className={styles.sectionTitle}>{getSubtitle(activeTab)}</h3>
                        <ul className={styles.list}>
                            {
                                getActiveComponent(activeTab).map((item, i) => (
                                    <li key={i} className={styles.listItem}>{item}</li>
                                ))
                            }
                        </ul>
                    </section>




                </div>

                <div>
                    <section className={styles.section2}>
                        <h3 className={styles.sectionTitle}>Temple Rules</h3>
                        <ul className={styles.list}>
                            {tour.templeRules.map((item, i) => (
                                <li key={i} className={styles.listItem}>{item}</li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>

            <div className={styles.heroGrid}>

                <div>
                    <ItineraryAccordion itinerary={tour.itinerary} />

                </div>

                <div>

                    <section className={styles.section2}>
                        <h3 className={styles.sectionTitle}>Cancellation Policy</h3>
                        <ul className={styles.list}>
                            {tour.cancellationPolicy.map((item, i) => (
                                <li key={i} className={styles.listItem}>{item}</li>
                            ))}
                        </ul>
                    </section>

                </div>

            </div>

        </InternalPageWrapper>
    );
}