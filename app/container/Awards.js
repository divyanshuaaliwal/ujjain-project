import React from 'react';
import { SectionHeader, Wrapper } from '../MainLayouts';
import styles from "./Awards.module.css";
import Image from 'next/image';
import { awards } from '../Data/awardsData';

const Awards = () => {

    return (
        <Wrapper>
            <SectionHeader
                title="Our Recognitions & Awards"
                description="Awarded for heritage preservation and exceptional experiences"
            />

            {
                <div className={styles.cards}>
                    {
                        awards.map((award) => (
                            <div key={award.id} className={styles.awardCard}>
                                <Image src={award.image} alt={award.title} className={styles.icon} />
                                <h3 className={styles.awardTitle}>{award.title}</h3>
                                <p className={styles.awardHighlight}>{award.highlight}</p>
                            </div>
                        ))
                    }
                </div>
            }

        </Wrapper>
    );
};

export default Awards;