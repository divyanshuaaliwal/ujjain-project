
import styles from './Pooja.module.css';
import pujaData from '../Data/poojaData';
import Image from 'next/image';


const PujaGrid = () => {
  return (
    <div className={styles.grid}>
      {pujaData.map((puja, index) => (
        <div key={index} className={styles.card}>
          <Image src={puja.image} alt={puja.title} className={styles.image} />
          <div className={styles.content}>
            <h3 className={styles.title}>{puja.title}</h3>
            <p className={styles.subtitle}>{puja.subtitle}</p>
            <p className={styles.location}>{puja.location}</p>
            <button className={styles.button}>Book Puja Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};


export default function Pooja() {
  return (
    <div className={styles.ParentDiv}>

        <div className={styles.poojaContainerMain}>
           
                <h2 className={styles.poojaTitle}><span>Puja Booking</span></h2>
                <p className={styles.poojaSectionDesc}> Begin your spiritual journey with our curated puja experiences.</p>
        </div>

      <PujaGrid />
    </div>
  );
}
