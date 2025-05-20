import React from 'react';
import styles from './HelicopterPackages.module.css';

import TravelPackageCard from '../components/HelicopterCard/TravelPackageCard';
import {travelPackages}  from "../Data/helicopterTravelPackagesData"
import {SectionHeader, Wrapper} from '../MainLayouts';
export default function Home() {
  
    return (
        <Wrapper>
           
            <SectionHeader 
                title=" Mahakaleshwar Helicopter Tour Packages" 
                description=" Fly closer to divinity with our Mahakal helicopter tour packages"
            />

            <div className={styles.cardContainer}>
                {
                    travelPackages.map((pkg, index) => (
                        <TravelPackageCard key={index} pkg={pkg} />
                    ))
                }
            </div>
        </Wrapper>
    );
}
