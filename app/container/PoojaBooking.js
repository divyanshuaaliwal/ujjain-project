
import styles from './PoojaBooking.module.css';
import pujaData from '../Data/poojaData';
import Image from 'next/image';
import { SectionHeader, Wrapper } from '../MainLayouts';
import Link from 'next/link';


const PujaCard = ({ puja }) => {
    return (
        <div className={styles.card}>
            <Link href={`pooja/${puja.id}`}>
                <Image src={puja.image} alt={puja.title} className={styles.image} />
             </Link>
            <div className={styles.content}>
                <h3 className={styles.title}>{puja.title}</h3>
                <p className={styles.subtitle}>{puja.subtitle}</p>
                <p className={styles.location}>{puja.location}</p>
                <Link href={`pooja/${puja.id}`}>    
                    <button className={styles.button}>Book Puja Now</button>
                </Link>
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
