import styles from './PlacesNearUjjain.module.css';
import Image from 'next/image';
import { placesNearUjjain } from '../Data/placesNearUjjainData';
import { SectionHeader, Wrapper } from '../MainLayouts';

const PlacesNearUjjain = () => {
    return (
        
        <Wrapper>
         
            <SectionHeader
                title="Places Near Ujjain"
                description="Explore nearby attractions that add to your Ujjain travel experience"
            />


            <div className={styles.cardGrid}>
                {
                    placesNearUjjain.map( (place) => (
                        <div className={styles.circleCard} key={place.id}>
                            <Image
                                src={place.image}
                                alt={place.name}
                                layout="fill"
                                objectFit="cover"
                                className={styles.image}
                            />
                            <div className={styles.overlay}>
                                <h3 className={styles.name}>{place.name}</h3>
                                <p className={styles.meta}>{place.distance_from_ujjain_km} km away</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Wrapper>
    );
};

export default PlacesNearUjjain;