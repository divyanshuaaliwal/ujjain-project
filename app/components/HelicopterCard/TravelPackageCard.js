"use client";

import Image from 'next/image';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { PackageFeatures } from './PackageFeatures';
import styles from './TravelPackageCard.module.css';
import Link from 'next/link';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function TravelPackageCard({ pkg }) {

    // console.log(pkg);
    return (
        <div className={styles.card}>
            {/* Hero Section */}
            <div className={styles.heroContainer}>
                
                <Link href={`/helicopter-tours/${pkg.id}`}>
                    <Image
                        src={pkg.heroImage}
                        alt={pkg.title}
                        width={500}
                        height={300}
                        className={styles.heroImage}
                    />
                </Link>
            </div>

            {/* Details Section */}
            <div className={styles.detailsSection}>
                <div className={styles.packageInfo}>
                    <h3 className={styles.packageTitle}>{pkg.title}</h3>
                    

                    <div className={styles.infoItem}>
                        <Clock size={18} className={styles.infoIcon} />
                        <span>{pkg.duration}</span>
                    </div>

                    <div className={styles.infoItem}>
                        <MapPin size={18} className={styles.infoIcon} />
                        <span>{pkg.startLocation}</span>
                    </div>

                    <div className={styles.priceContainer}>
                        <span className={styles.currencySymbol}>₹</span>
                        <span className={styles.currentPrice}>{pkg.currentPrice}</span>
                        <span className={styles.originalPrice}>₹{pkg.originalPrice}</span>
                        <span className={styles.perPerson}>per person</span>
                    </div>
                </div>
                
                
                <Stack spacing={1} direction="row" alignItems="center" className={styles.ratingParent}>
                    <span className={styles.ratingLabel}>Customer Rating:</span>
                    <Rating name="half-rating-read" defaultValue={pkg.rating} precision={0.5} readOnly size="small" />
                    <span className={styles.ratingValue}>{pkg.rating}</span>
                </Stack>


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
            <PackageFeatures features={pkg.features} />
        </div>
    );
}
