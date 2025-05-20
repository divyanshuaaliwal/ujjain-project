import styles from './VehiclesPackages.module.css';
import Image from 'next/image';
import { vehiclePackages } from '../Data/vehiclePackagesData';
import { MapPin, Briefcase, Users } from 'lucide-react';
import { SectionHeader, Wrapper } from '../MainLayouts';

const Card = ({ tour }) => {
    const {
        vehicle_type,
        price_per_person,
        discount,
        km,
        luggage,
        total_person_capacity,
        image,
        booking_url
    } = tour;

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={image}
                    alt={vehicle_type}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className={styles.cardContent}>
                <h2 className={styles.title}>{vehicle_type}</h2>
               

             <p className={styles.details}>
                        <MapPin size={16} style={{ marginRight: '6px' }} />
                        {km}    
                    </p>
                <div className={styles.innerData}>
                   
                    <p className={styles.details}>
                        <Briefcase size={16} style={{ marginRight: '6px' }} />
                        {luggage}
                    </p>
                    <p className={styles.details}>
                        <Users size={16} style={{ marginRight: '6px' }} />
                        {total_person_capacity} persons
                    </p>
                </div>

                <div className={styles.priceBox}>
                    <span className={styles.currentPrice}>₹{price_per_person}</span>
                    <span className={styles.originalPrice}>₹{discount.original_price}</span>
                    <span className={styles.discount}>{discount.discount_percentage}% OFF</span>
                </div>

                <a href={booking_url} target="_blank" rel="noopener noreferrer" className={styles.bookNow}>
                    Book Now
                </a>
            </div>
        </div>
    );
};

export default function Page() {
    return (
        <Wrapper>
            
                <SectionHeader
                    title="Vehicle Booking"
                    description="Comfortable and affordable vehicle packages for your Ujjain journey"
                />
                <div className={styles.cardGrid}>
                    {
                        vehiclePackages.map((tour) => (
                            <Card key={tour.id} tour={tour} />
                        ))
                    }
                </div>
            
        </Wrapper>
    );
}
