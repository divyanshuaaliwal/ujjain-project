import React from 'react';
import styles from './MainLayouts.module.css';

export const SectionHeader = ({ title, description }) => {
    return (
        <>
            <h2 className={styles.sectionTitle}>{title}</h2>
            <div className={styles.divider}>
                <span className={styles.dividerIcon}>🔱</span>
            </div>
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

export const InternalPageWrapper = ({children}) => {
    return (
        <div className={styles.InternalPageWrapper}>
            {children}
        </div>
    )
};


export const InternalPageHeading = ({ title }) => {
    return (
        <>
            <h2 className={styles.internalPagesTitle}>{title}</h2>
            <div className={styles.internalPagesDivider}>
                <span className={styles.dividerIcon}>🔱</span>
            </div>
        </>
    );
};