import React from 'react';
import styles from './ThingsToDoInUjjain.module.css';
import { SectionHeader, Wrapper } from '../MainLayouts';
import {attractions} from "../Data/thingsToDoInUjjainData";
import Image from 'next/image';

const ThingsToDoInUjjain = () => {


    return (
        <Wrapper>
            
            <SectionHeader
                title="Things To Do In Ujjain"
                description="Explore the spiritual and cultural heritage of this ancient city"
            />

            <section className={styles.attractionsGrid}>
                {
                    attractions.map((attraction) => (
                        <div key={attraction.id} className={styles.attractionCard}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={attraction.image}
                                    alt={attraction.name}
                                    className={styles.attractionImage}
                                />
                            </div>
                            <div className={styles.attractionInfo}>
                                <h3>{attraction.name}</h3>
                                <p>{attraction.description}</p>
                                <button className={styles.readMoreButton}>Read More</button>
                            </div>
                        </div>
                    ))
                }
            </section>

        </Wrapper>
    );
};

export default ThingsToDoInUjjain;