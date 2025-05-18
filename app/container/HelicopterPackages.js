import React from 'react';
import styles from './HelicopterPackages.module.css';

import TravelPackageCard from '@/app/components/HelicopterCard/TravelPackageCard';
import {travelPackages}  from "../Data/helicopterTravelPackagesData"

export default function Home() {

  console.log(travelPackages);
  
    return (
        <div className={styles.parentContainer}>
            <h1 className={styles.heading}>
                <span className={styles.icon}>🚁</span> Mahakaleshwar Helicopter Tour Packages
            </h1>
            <div className={styles.TitleUnderline}></div>
            <h2 className={styles.Subtitle}>
                Fly closer to divinity with our Mahakal helicopter tour packages
            </h2>

            <div className={styles.cardContainer}>
                {
                    travelPackages.map((pkg, index) => (
                        <TravelPackageCard key={index} pkg={pkg} />
                    ))
                }
            </div>
        </div>
    );
}
