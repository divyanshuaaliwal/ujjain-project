import React from 'react';
import styles from "./Awards.module.css";

const Awards = () => {
    // Sample award data - replace with your actual awards
    const awards = [
        {
            id: 1,
            title: "Best Heritage Site",
            year: "2023",
            issuedBy: "Ministry of Tourism",
            description: "Recognized for exemplary preservation of cultural heritage and providing outstanding visitor experience."
        },
        {
            id: 2,
            title: "Swachh Bharat Excellence Award",
            year: "2022",
            issuedBy: "Government of India",
            description: "Awarded for maintaining cleanliness standards and implementing sustainable waste management practices."
        },
        {
            id: 3,
            title: "National Cultural Landmark",
            year: "2021",
            issuedBy: "Archaeological Survey of India",
            description: "Honored for the significant cultural contribution and historical importance to Indian heritage."
        },
        {
            id: 4,
            title: "Excellence in Spiritual Tourism",
            year: "2020",
            issuedBy: "World Tourism Organization",
            description: "Recognized globally for providing authentic spiritual experiences to devotees and tourists."
        }
    ];

    return (
        <section className={styles.awardsSection} id="awards">
            <div className={styles.container}>
                <div className={styles.headerContainer}>
                    <h2 className={styles.sectionTitle}>Our Recognitions & Awards</h2>
                    <div className={styles.divider}>
                        <span className={styles.dividerIcon}>🔱</span>
                    </div>
                    <p className={styles.sectionDescription}>
                        The Mahakaleshwar Temple has been honored with various prestigious awards recognizing 
                        our dedication to preserving spiritual heritage and providing exceptional experiences.
                    </p>
                </div>

                <div className={styles.awardsContainer}>
                    {awards.map((award) => (
                        <div key={award.id} className={styles.awardCard}>
                            <div className={styles.awardContent}>
                                <div className={styles.awardHeader}>
                                    <div className={styles.yearBadge}>{award.year}</div>
                                    <h3 className={styles.awardTitle}>{award.title}</h3>
                                </div>
                                <div className={styles.awardBody}>
                                    <p className={styles.awardIssuer}>Issued by: {award.issuedBy}</p>
                                    <p className={styles.awardDescription}>{award.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;