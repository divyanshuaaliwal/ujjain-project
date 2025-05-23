'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { InternalPageHeading, InternalPageWrapper } from '../../MainLayouts';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Clock, Hotel, Route, Tag, Star, Briefcase, CheckCircle, TrendingUp, Users, Info} from 'lucide-react';
import { vehiclePackages } from '@/app/Data/vehiclePackagesData';


export default function HelicopterTourPage() {

    const { id } = useParams();
    const vehicle = vehiclePackages.find((hvehicle) => hvehicle.id === Number(id));

    if (!vehicle) {
        return <div className={styles.notFound}>Vehicle not found</div>;
    }

    const [activeTab, setActiveTab] = useState('inclusions');
    const [activeTab2, setActiveTab2] = useState('specifications');

    const [showBookingForm, setShowBookingForm] = useState(false);

    const tabs = ['inclusions', 'exclusions', 'notes', 'features', 'contact'];


    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };


    const handleBookNow = () => {
        setShowBookingForm(true);
    };


    function getSubtitle(tab) {
        return tab.replaceAll(/([A-Z])/g, ' $1').replace(/^./, char => char.toUpperCase())
    }

    function getObjectDataListOrArrayDataList(data) {

        if (Array.isArray(data)) {
            return (
                <ul>
                    {
                        data.map( (item, index) => (
                            <li key={index} className={styles.listItem}>
                                {item}
                            </li>
                        ))
                    }
                </ul>
            );
        } 
        else if (data && typeof data === 'object') {
            return (
                <ul>
                    {
                        Object.entries(data).map(([key, value]) => {
                            const label = key
                                .replace(/_/g, ' ') // Replace underscores with space
                                .replace(/([A-Z])/g, ' $1') // Add space before capital letters
                                .replace(/^./, str => str.toUpperCase()); // Capitalize first letter

                            const displayValue = Array.isArray(value)
                                ? value.join(', ')
                                : value;

                            return (
                                <li key={key} className={styles.listItem}>
                                    <strong>{label}:</strong> {displayValue}
                                </li>
                            );
                        })
                    }
                </ul>
            );
        }

        return null;
    }


    return (
        <InternalPageWrapper>

            <InternalPageHeading title={vehicle.vehicle_type} />

            <div className={styles.heroGrid}>

                <div className={styles.heroImageWrapper}>
                    <Image
                        src={vehicle.image}
                        alt={vehicle.vehicle_type}
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
                            <strong><Hotel size={16} className={styles.icon} /> About:</strong> {vehicle.package_name}
                        </p>

                        <p>
                            <strong><TrendingUp size={16} className={styles.icon} /> Km:</strong> {vehicle.km}
                        </p>

                        <div className={styles.innerContent}>


                            <p>
                                <strong>
                                    <Briefcase size={16} className={styles.icon} /> Luggage:
                                </strong>{' '}
                                {vehicle.luggage}
                            </p>

                            <p>
                                <strong>
                                    <Users size={16} className={styles.icon} /> Capacity:
                                </strong>{' '}
                                {vehicle.total_person_capacity} persons
                            </p>
                        </div>

                        <p>
                            <strong><Route size={16} className={styles.icon} /> Route:</strong>{' '}
                            {vehicle.starting_point} → {vehicle.ending_point}
                        </p>

                        <p>
                            <strong><Clock size={16} className={styles.icon} />   Duration:</strong> {vehicle.duration}
                        </p>





                        <p className={styles.priceInfo}>
                            <strong><Tag size={16} className={styles.icon} /> Price:</strong>{' '}
                            <span className={styles.currentPrice}>₹{vehicle.price_per_person}</span>{' '}
                            <span className={styles.originalPrice}>₹{vehicle.discount.original_price}</span>{' '}
                            <span className={styles.saving}>(Save ₹{vehicle.discount.discount_amount})</span>
                        </p>
                        <Stack spacing={1} direction="row" alignItems="center" className={styles.ratingParent}>
                            <Star size={16} className={styles.icon} />
                            <span className={styles.ratingLabel}> Customer Rating:</span>
                            <Rating
                                name="half-rating-read"
                                defaultValue={vehicle.rating}
                                precision={0.5}
                                readOnly
                                size="small"
                            />
                            <span className={styles.ratingValue}>({vehicle.rating})</span>
                        </Stack>
                         <p className={styles.overviewText}>
                                                    <Info size={16} className={styles.icon} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                                                    {vehicle.overview}
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
                                    className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}`}
                                    onClick={() => handleTabChange(tab)}
                                >
                                    {getSubtitle(tab)}
                                </button>
                            ))
                        }
                    </div>

                    <section className={styles.section}>
                        <h3 className={styles.sectionTitle}>{getSubtitle(activeTab)}</h3>
                            {
                                getObjectDataListOrArrayDataList(vehicle[activeTab])
                            }
                    </section>
                </div>


                <div>

                    <section className={styles.section2}>
                        <h3 className={styles.sectionTitle}>Specifications</h3>
                        {
                            getObjectDataListOrArrayDataList(vehicle[activeTab2])
                        }
                    </section>


                </div>

            </div>

        </InternalPageWrapper>
    );
}