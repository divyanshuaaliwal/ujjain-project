"use client";

import Link from "next/link";
import { Phone, Mail, ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import "./navbar.css";
import shivji from "../assets/shiv.avif";
import temple from "../assets/temple.jpg";
import trishul from "../assets/trishul.jpg";
import Damroo from "../assets/Damroo.png";
import Image from "next/image";

export default function ChardhamTourUI() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [expandedItems, setExpandedItems] = useState({});

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setMenuOpen(false);
            }
        };

        // Prevent body scrolling when menu is open
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            document.body.style.overflow = 'auto'; // Cleanup
        }
    }, [menuOpen]);

    const toggleDropdown = (index) => {
        setExpandedItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const menuLinks = [
        { title: "Home", path: "/" },
        { title: "Mahakaleshwar", path: "/destination/mahakaleshwar" },
        { title: "Harsiddhi Mata", path: "/destination/harsiddhi-mata" },
        { title: "Kal Bhairav", path: "/destination/kal-bhairav" },
        { title: "Mangalnath Mandir", path: "/destination/mangalnath-mandir" },
        { title: "Blog", path: "/blog" },
        { title: "Booking Form", path: "/booking-form" },
        { title: "B2B Registration", path: "/b2b-registration" },
        { title: "Bhasm Aarti", path: "/bhasm-aarti" },
        { title: "Pay Online", path: "/pay-online" },
    ];

    const navMenu = [
        {
            title: "Darshan Tours",
            dropdown: false,
            dropdownItems: [
                { title: "Tour 1", link: "/tours/tour-1" },
                { title: "Tour 2", link: "/tours/tour-2" }
            ]
        },
        { title: "Ujjain Yatra", dropdown: false, link: "/ujjain-yatra" },
        { title: "Temple Wise Darshan", dropdown: false, link: "/temple-wise-darshan" },
        { title: "Hotels Near Mandir", dropdown: false, link: "/hotels-near-mandir" },
        { title: "Useful Links", dropdown: false, link: "/useful-links" },
        { title: "Travel Community", dropdown: false, link: "/travel-community" },
        { title: "Customer Support", dropdown: false, link: "/support" },
    ];

    const closeMobileMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="navbar">
            {/* Mobile menu toggle */}
            <div className="mobile-menu-toggle">
                
                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>



            {/* Desktop Navigation */}
            {!isMobile && (
                <>
                    {/* Top navigation - desktop only */}
                    <div className="top-nav">
                        {menuLinks.map((item, index) => (
                            <Link key={index} href={item.path} className="nav-link">
                                {item.title}
                            </Link>
                        ))}
                    </div>

                    {/* Logo + contact - always visible */}
                    <div className="logo-section">
                        <div className="logo-left">
                            <div>
                                <h1 className="logo-title">Ujjain Mahakal</h1>
                                <p className="subtitle">Spiritual Journey</p>
                            </div>
                            <div>
                                <div className="approved-by">Approved by</div>
                                <div className="approved-text">Madhya Pradesh Tourism</div>
                            </div>
                        </div>

                        <div className="middle-assets">
                            <Image src={shivji} alt="Shiva" width={70} height={70} />
                            <Image src={temple} alt="Temple" width={70} height={70} />
                            <Image src={trishul} alt="trishul" width={70} height={70} />
                            <Image src={Damroo} alt="Damroo" width={70} height={70} />
                        </div>

                        <div className="contact-right">
                            <div className="contact-item">
                                <span>Call Us:</span>
                                <Phone size={16} />
                                <a href="tel:+917838908606">+91-7838908606</a>
                            </div>
                            <div className="contact-item">
                                <span>Mail Us:</span>
                                <Mail size={16} />
                                <a href="mailto:info@mahakaleshwarguide.com">info@mahakaleshwarguide.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Navigation - desktop only */}
                    <div className="bottom-nav">
                        <ul>
                            {navMenu.map((item, index) => (
                                <li key={index} className="nav-item">
                                    <a
                                        href={item.dropdown ? "#" : item.link || "#"}
                                        className="nav-title"
                                        onClick={(e) => item.dropdown && e.preventDefault()}
                                    >
                                        {item.title}
                                        {item.dropdown && <ChevronDown size={14} className="dropdown-icon" />}
                                    </a>
                                    {item.dropdown && item.dropdownItems?.length > 0 && (
                                        <ul className="dropdown">
                                            {item.dropdownItems.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link href={subItem.link} className="dropdown-link">
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
                </>
            )}

            {/* Mobile Sidebar */}
            {isMobile && (
                <div className={`mobile-sidebar ${menuOpen ? "open" : ""}`}>
                    <div className="mobile-sidebar-content">
                        <div className="mobile-menu-header">
                            <h2>Menu</h2>
                            <button onClick={closeMobileMenu} className="close-menu">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="mobile-nav">
                            <div className="mobile-section">
                                <h3>Main Menu</h3>
                                {menuLinks.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.path}
                                        className="mobile-nav-link"
                                        onClick={closeMobileMenu}
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>

                            <div className="mobile-section">
                                <h3>Explore</h3>
                                {navMenu.map((item, index) => (
                                    <div key={index} className="mobile-nav-item">
                                        {item.dropdown ? (
                                            <>
                                                <div
                                                    className="mobile-nav-title"
                                                    onClick={() => toggleDropdown(index)}
                                                >
                                                    {item.title}
                                                    <ChevronDown
                                                        size={18}
                                                        className={`mobile-dropdown-icon ${expandedItems[index] ? 'rotated' : ''}`}
                                                    />
                                                </div>
                                                {expandedItems[index] && item.dropdownItems?.length > 0 && (
                                                    <div className="mobile-dropdown">
                                                        {item.dropdownItems.map((subItem, subIndex) => (
                                                            <Link
                                                                key={subIndex}
                                                                href={subItem.link}
                                                                className="mobile-dropdown-link"
                                                                onClick={closeMobileMenu}
                                                            >
                                                                {subItem.title}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            <Link
                                                href={item.link || "#"}
                                                className="mobile-nav-link"
                                                onClick={closeMobileMenu}
                                            >
                                                {item.title}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mobile-footer">
                            <div className="contact-item">
                                <Phone size={16} />
                                <a href="tel:+917838908606">+91-7838908606</a>
                            </div>
                            <div className="contact-item">
                                <Mail size={16} />
                                <a href="mailto:info@mahakaleshwarguide.com">info@mahakaleshwarguide.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-sidebar-overlay" onClick={closeMobileMenu}></div>
                </div>
            )}
        </div>
    );
}