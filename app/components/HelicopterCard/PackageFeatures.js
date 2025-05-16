"use client";

import { Landmark, Hotel, HeaterIcon as Helicopter, UtensilsCrossed, Mountain } from 'lucide-react';
import styles from './TravelPackageCard.module.css';

export function PackageFeatures({ features }) {
  // Map string icon names to Lucide React components
  const getIcon = (iconName, size = 20) => {
    switch(iconName) {
      case 'highlights':
        return <Landmark size={size} />;
      case 'hotel':
        return <Hotel size={size} />;
      case 'helicopter':
        return <Helicopter size={size} />;
      case 'meals':
        return <UtensilsCrossed size={size} />;
      case 'sightseeing':
        return <Mountain size={size} />;
      default:
        return <Landmark size={size} />;
    }
  };

  return (
    <div className={styles.featuresContainer}>
      {features.map((feature, index) => (
        <div key={index} className={styles.featureItem}>
          <div className={styles.featureIcon}>
            {getIcon(feature.icon)}
          </div>
          <span className={styles.featureLabel}>{feature.label}</span>
        </div>
      ))}
    </div>
  );
}
