'use client';
import Link from 'next/link';
import styles from './MahakalTourPackages.module.css';
import { tourPackagesData } from "../Data/mahakalTourPackagesData";
import Image from 'next/image';
import {
    MapPin,
    Star,
    CheckCircle,
    Sparkles,
    ArrowRightCircle,
    Ban
} from 'lucide-react';
import { SectionHeader, Wrapper } from '../MainLayouts';

const PackageCard = ({ pkg }) => {
    return (
        <div className={styles.tourCard}>
            <div className={styles.cardImageWrapper}>
                <div className={styles.cardImage}>
                    <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        className={styles.imageFix}
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </div>
                <span className={styles.packageDuration}>{pkg.duration}</span>
            </div>

            <div className={styles.cardContent}>
                <h3 className={styles.packageTitle}>{pkg.title}</h3>
                <div className={styles.packageMeta}>
                    <p>
                        <MapPin size={16} style={{ marginRight: 6, display: 'inline' }} />
                        <strong>Location:</strong> {pkg.location}
                    </p>
                    <p>
                        <Star size={16} style={{ marginRight: 6, display: 'inline' }} />
                        <strong>Rating:</strong> {pkg.rating} ({pkg.reviews} reviews)
                    </p>
                </div>

                <div className={styles.packagePrice}>
                    <span className={styles.priceValue}>{pkg.price}</span>
                    <span className={styles.priceLabel}>per person</span>
                </div>

                <div className={styles.packageDetails}>
                    <div>
                        <h4>
                            <CheckCircle size={16} style={{ marginRight: 6, display: 'inline' }} />
                            Includes:
                        </h4>
                        <ul>
                            {pkg.includes.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {pkg.highlights?.length > 0 && (
                        <div>
                            <h4>
                                <Sparkles size={16} style={{ marginRight: 6, display: 'inline' }} />
                                Highlights:
                            </h4>
                            <ul>
                                {pkg.highlights.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className={styles.cardFooter}>
                    <Link
                        href={`/book-now?package=${pkg.id}`}
                        className={`${styles.bookButton} ${!pkg.available ? styles.disabledButton : ''}`}
                    >
                        {pkg.available ? (
                            <>
                                Book This Package{' '}
                                <ArrowRightCircle size={18} style={{ verticalAlign: 'middle', marginLeft: 6 }} />
                            </>
                        ) : (
                            <>
                                Currently Unavailable{' '}
                                <Ban size={16} style={{ verticalAlign: 'middle', marginLeft: 6 }} />
                            </>
                        )}
                    </Link>
                </div>
            </div>
        </div>
    );
};

const MahakalTourPackages = () => {
    return (
        <Wrapper>

            <SectionHeader
                title="Mahakal Tour Packages"
                description="Embark on a divine journey with our carefully curated spiritual experiences"
            />

            <div className={styles.tourGrid}>
                {
                    tourPackagesData.map((pkg) => (
                        <PackageCard key={pkg.id} pkg={pkg} />
                    ))
                }
            </div>

        </Wrapper>
    );
};

export default MahakalTourPackages;
