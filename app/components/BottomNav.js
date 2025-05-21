"use client"

import { useState } from 'react';
import Link from 'next/link';
import styles from './BottomNav.module.css';

const BottomNav = ({ navMenu = [] }) => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveDropdown(index);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };


    return (
        <nav className={styles.bottomNav}>
            <div className={styles.container}>
                <ul className={styles.navList}>
                    {navMenu.map((item, index) => (
                        <li
                            key={index}
                            className={styles.navItem}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link
                                href={item.link || "#"}
                                className={styles.navTitle}
                                onClick={(e) => item.dropdown && e.preventDefault()}
                            >
                                {item.title}
                                {item.dropdown && (
                                    <svg
                                        className={`${styles.dropdownIcon} ${activeDropdown === index ? styles.rotate : ''}`}
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6 9L12 15L18 9"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                )}
                            </Link>

                            {item.dropdown && activeDropdown === index && item.dropdownItems?.length > 0 && (
                                <ul className={styles.dropdown}>
                                    {item.dropdownItems.map((subItem, subIndex) => (
                                        <li key={subIndex}>
                                            <Link href={subItem.link} className={styles.dropdownLink}>
                                                {subItem.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default BottomNav;