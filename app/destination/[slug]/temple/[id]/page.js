"use client";

import { templesData } from '@/app/Data/templesData';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const TempleDetail = () => {
    const params = useParams();
    const id = params.id;
    const slug = params.slug;
    
    const [temple, setTemple] = useState(null);
    const [otherTemples, setOtherTemples] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        if (id) {
            // Find the current temple
            const foundTemple = templesData.find(t => t.id === Number(id));
            setTemple(foundTemple);
            
            // Find other temples in the same location
            if (foundTemple && slug) {
                const relatedTemples = templesData.filter(t => 
                    t.location === slug && t.id !== Number(id)
                );
                setOtherTemples(relatedTemples);
            }
            
            setLoading(false);
        }
    }, [id, slug]);
    
    if (loading) return <div className={styles.loading}>Loading...</div>;
    if (!temple) return <div className={styles.notFound}>Temple not found!</div>;

    function capitalizeWithHyphens(str) {
        return str
            .split('-')
            .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
            .join('-');
    }

    return (
        <div className={styles.container}>
            {/* Main Temple Section */}
            <div className={styles.contentWrapper}>
                
                <div className={styles.leftImage}>
                    <Image
                        src={temple.image}
                        alt={temple.alt || temple.title}
                        fill
                        className={styles.image}
                        priority
                    />
                </div>

                <div className={styles.rightDetails}>
                    <h1 className={styles.title}>{temple.title}</h1>
                    <p className={styles.meta}>
                        📅 <strong>{temple.date}</strong> &nbsp; | ⏱ {temple.readTime} &nbsp; | 👁 {temple.views}
                    </p>
                    <div className={styles.description}>
                        <h2>Description</h2>
                        <p>{temple.description}</p>
                    </div>
                </div>
            </div>

            {/* Other Temples Section */}
            {otherTemples.length > 0 && (
                <div className={styles.otherTemplesSection}>
                    <h1 className={styles.otherTemplesTitle}>More Details about {capitalizeWithHyphens(slug)}</h1>
                     <div className={styles.TitleUnderline}></div>
                    <div className={styles.templeGrid}>
                        {otherTemples.map(t => (
                            <Link key={t.id} href={`/destination/${slug}/temple/${t.id}`} className={styles.templeCard}>
                                <div className={styles.templeImageWrapper}>
                                    <Image
                                        src={t.image}
                                        alt={t.alt || t.title}
                                        fill
                                        className={styles.templeImage}
                                    />
                                </div>
                                <div className={styles.templeInfo}>
                                    <h3>{t.title}</h3>
                                    <p>{t.readTime} • {t.views} views</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TempleDetail;