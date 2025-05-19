
import styles from './PoojaBooking.module.css';
import pujaData from '../Data/poojaData';
import Image from 'next/image';
import { SectionHeader, Wrapper } from '../MainLayouts';


const PujaCard = ({ puja }) => {
    return (
        <div className={styles.card}>
            <Image src={puja.image} alt={puja.title} className={styles.image} />
            <div className={styles.content}>
                <h3 className={styles.title}>{puja.title}</h3>
                <p className={styles.subtitle}>{puja.subtitle}</p>
                <p className={styles.location}>{puja.location}</p>
                <button className={styles.button}>Book Puja Now</button>
            </div>
        </div>
    );
};


export default function PoojaBooking() {
    return (
        <Wrapper>

            <SectionHeader
                title="Puja Booking"
                description="Comfortable stays near the temple for a peaceful pilgrimage experience"
            />

            {
                <div className={styles.grid}>
                    {
                        pujaData.map((puja) => (
                            <PujaCard key={puja.id} puja={puja} />
                        ))
                    }
                </div>
            }
        </Wrapper>
    );
}
