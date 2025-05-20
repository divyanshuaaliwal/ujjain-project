import React from 'react';
import styles from './ThingsToDoInUjjain.module.css';
import { SectionHeader, Wrapper } from '../MainLayouts';
import { attractions } from "../Data/thingsToDoInUjjainData";
import Image from 'next/image';
import {
    MapPin,
    Clock,
    Ticket,
    Tags,
    Star,
    Sparkles
} from 'lucide-react';

const ThingsToDoInUjjain = () => {
    return (
        <Wrapper>
            <SectionHeader
                title="Things To Do In Ujjain"
                description="Explore the spiritual and cultural heritage of this ancient city"
            />

            <section className={styles.attractionsGrid}>
                {attractions.map((attraction) => {
                    return (
                        <div key={attraction.id} className={styles.attractionCard}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={attraction.image}
                                    alt={attraction.name}
                                    className={styles.attractionImage} />
                            </div>
                            <div className={styles.attractionInfo}>
                                <h3>{attraction.name}</h3>
                                <p>{attraction.description}</p>

                                <div className={styles.extraInfo}>
                                    <p><MapPin size={16} /> <strong>Location:</strong> {attraction.location}</p>
                                    <p><Clock size={16} /> <strong>Timings:</strong> {attraction.timings}</p>
                                    <p><Ticket size={16} /> <strong>Entry Fee:</strong> {attraction.entryFee}</p>
                                    <p><Tags size={16} /> <strong>Category:</strong> {attraction.category}</p>
                                    <p><Star size={16} /> <strong>Rating:</strong> {attraction.rating}</p>
                                </div>

                                <button className={styles.readMoreButton}>Read More</button>
                            </div>
                        </div>
                    );
                })}
            </section>
        </Wrapper>
    );
};

export default ThingsToDoInUjjain;
