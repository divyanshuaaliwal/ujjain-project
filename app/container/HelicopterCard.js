"use client";

import Image from 'next/image';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { PackageFeatures } from './PackageFeatures';
import styles from './HelicopterCard.module.css';

export default function TravelPackageCard({
    title,
    subtitle,
    heroImage,
    duration,
    startLocation,
    currentPrice,
    originalPrice,
    features,
}) {
    return (
        <div className={styles.card}>
            {/* Hero Section */}
            <div className={styles.heroContainer}>
                <Image
                    src={heroImage}
                    alt={title}
                    width={500}
                    height={300}
                    className={styles.heroImage}
                    priority
                />
                <div className={styles.heroOverlay}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.subtitle}>{subtitle}</p>
                    <button className={styles.itineraryButton}>
                        Complete Itinerary <ArrowRight size={14} />
                    </button>
                </div>
            </div>



            {/* Details Section */}
            <div className={styles.detailsSection}>
                <div className={styles.packageInfo}>
                    <h3 className={styles.packageTitle}>{title}</h3>

                    <div className={styles.infoItem}>
                        <Clock size={18} className={styles.infoIcon} />
                        <span>{duration}</span>
                    </div>

                    <div className={styles.infoItem}>
                        <MapPin size={18} className={styles.infoIcon} />
                        <span>{startLocation}</span>
                    </div>

                    <div className={styles.priceContainer}>
                        <span className={styles.currencySymbol}>₹</span>
                        <span className={styles.currentPrice}>{currentPrice}</span>
                        <span className={styles.originalPrice}>₹{originalPrice}</span>
                        <span className={styles.perPerson}>per person</span>
                    </div>
                </div>

                <div className={styles.actionButtons}>
                    <button className={styles.readMoreButton}>
                        Read More <ArrowRight size={16} />
                    </button>
                    <button className={styles.enquiryButton}>
                        Enquiry Now <ArrowRight size={16} />
                    </button>
                </div>
            </div>

            {/* Features Section */}
            <PackageFeatures features={features} />
        </div>
    );
}
