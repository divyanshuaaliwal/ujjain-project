'use client';
import Link from 'next/link';
import styles from './TourPackages.module.css';

import {tourPackagesData} from"../Data/mahakalTourPackagesData"
import Image from 'next/image';

const TourPackages = () => {

  return (
    <section className={styles.tourSection}>
      <div className={styles.container}>
        <div className={styles.tourHeader}>
          <h2 className={styles.sectionTitle}>Discover Our<br /><span>Mahakal Tour Packages</span></h2>
          <p className={styles.sectionDesc}>Embark on a divine journey with our carefully curated spiritual experiences</p>
        </div>

        <div className={styles.tourGrid}>
          {tourPackagesData.map((pkg) => (
            <div 
              key={pkg.id} 
              className={styles.tourCard}
              
            >
              <div className={styles.cardImageWrapper}>
                <div className={styles.cardImage}>
                  <Image src={pkg.image} alt={pkg.title} />
                </div>
                <span className={styles.packageDuration}>{pkg.duration}</span>
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.packageTitle}>{pkg.title}</h3>
                <div className={styles.packagePrice}>
                  <span className={styles.priceValue}>{pkg.price}</span>
                  <span className={styles.priceLabel}>per person</span>
                </div>
                
                <div className={styles.packageDetails}>
                  <div className={styles.packageIncludes}>
                    <h4>Package Includes:</h4>
                    <ul>
                      {pkg.includes.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <p className={styles.packageDescription}>
                    {pkg.description}
                  </p>
                </div>
                
                <div className={styles.cardFooter}>
                  <Link href={`/book-now?package=${pkg.id}`} className={styles.bookButton}>
                    Book This Package
                  </Link>
                </div>
              </div>
            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourPackages;