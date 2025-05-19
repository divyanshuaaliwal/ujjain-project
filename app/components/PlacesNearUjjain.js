import styles from './PlacesNearUjjain.module.css';
import Image from 'next/image';
import { placesNearUjjain } from '../Data/placesNearUjjain';

const PlacesNearUjjain = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Places Near Ujjain</h2>
      <div className={styles.underline}></div>

      <div className={styles.cardGrid}>
        {placesNearUjjain.map(place => (
          <div className={styles.circleCard} key={place.id}>
            <div className={styles.imageWrapper}>
              <Image
                src={place.image}
                alt={place.name}
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.name}>{place.name}</h3>
              <p className={styles.meta}>{place.distance_from_ujjain_km} km away</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlacesNearUjjain;
