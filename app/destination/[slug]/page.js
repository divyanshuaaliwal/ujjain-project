// app/destination/[slug]/page.js

"use client";
import { useParams } from "next/navigation";
import { temples, hotels, packages } from "@/app/data";
import Card from "@/app/container/Card";
import Hotels from "@/app/container/Hotels";
import Packages from "@/app/container/Packages";
import styles from "@/app/destination/[slug]/page.module.css"; // Full path


const TemplePage = () => {
    const { slug } = useParams();

    const TempleList = temples.filter(
        (item) => item.location?.toLowerCase() === slug.toLowerCase()
    );

    const HotelList = hotels.filter(
        (item) => item.location?.toLowerCase() === slug.toLowerCase()
    );
    // console.log(HotelList);
    
    const PackagesList = packages.filter(
        (item) => item.location?.toLowerCase() === slug.toLowerCase()
    );

    const capitalizeWords = (str) => {
        return str
            .split(/[\s-]/)
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");
    };

    return (
        <>
            <section className={styles.heroSection}>
                <div className={styles.container}>
                    <h1 className={styles.heading}>{capitalizeWords(slug)} Guide</h1>
                    <div className={styles.underline}></div>
                    <h2 className={styles.subheading}>
                        Everything you need to know about visiting the sacred{" "}
                        {capitalizeWords(slug)} Temple
                    </h2>
                    <div className={styles.buttonWrapper}>
                        <button className={styles.planButton}>Plan Your Visit</button>
                    </div>
                </div>
            </section>

            {/* Temples */}
            <section className={styles.cardSection}>
                <div className={styles.cardGrid}>
                    {
                        TempleList.map((item) => (
                            <Card
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                alt={item.alt}
                                link={item.link}
                            />
                        ))
                    }
                </div>
            </section>
            

            {/* Hotels */}
            <Hotels HotelList={HotelList} />
            
            {/* Packages */}
            <Packages PackageList={PackagesList} />
        </>
    );
};

export default TemplePage;
