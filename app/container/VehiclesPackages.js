import styles from './VehiclesPackages.module.css';
import Image from 'next/image';
import { vehiclePackages } from '../Data/vehiclePackagesData';
import { MapPin, Briefcase, Users } from 'lucide-react'; // Lucide Icons

const Card = ({ tour }) => {
    const {
        package_name,
        price_per_person,
        discount,
        km,
        luggage,
        total_person_capacity,
        destinations_covered,
        image,
        booking_url
    } = tour;

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={image}
                    alt={package_name}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className={styles.cardContent}>
                <h2 className={styles.title}>{package_name}</h2>

                <div className={styles.innerData}>
                    <p className={styles.details}>
                        <MapPin size={16} style={{ marginRight: '6px' }} />
                        {km} km
                    </p>
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

                <p className={styles.destinations}>
                    <strong>Destinations:</strong> {destinations_covered.join(', ')}
                </p>

                <a href={booking_url} target="_blank" rel="noopener noreferrer" className={styles.bookNow}>
                    Book Now
                </a>
            </div>
        </div>
    );
};

export default function Page() {
    return (
        <main className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.heading}>Ujjain Yatra Packages</h1>
                <div className={styles.TitleUnderline}></div>

                <div className={styles.cardGrid}>
                    {vehiclePackages.map((tour) => (
                        <Card key={tour.id} tour={tour} />
                    ))}
                </div>
            </div>
        </main>
    );
}
