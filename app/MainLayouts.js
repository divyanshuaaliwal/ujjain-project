import React from 'react';
import styles from './MainLayouts.module.css';

export const SectionHeader = ({ title, description }) => {
    return (
        <>
            <h2 className={styles.sectionTitle}>{title}</h2>
            <div className={styles.TitleUnderline}></div>
            <p className={styles.description}>{description}</p>
        </>
    );
};


export const Wrapper = ({children}) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
};