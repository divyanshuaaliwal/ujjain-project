"use client";

import Link from "next/link";
import { Phone, Mail, ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import "./Navbar.css";
import shivji from "../assets/shiv.avif";
import temple from "../assets/temple.jpg";
import trishul from "../assets/trishul.jpg";
import Damroo from "../assets/Damroo.png";
import Image from "next/image";
import { menuLinks, navMenu } from "../Data/navData";
import BottomNav from "./BottomNav";


export default function ChardhamTourUI() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [expandedItems, setExpandedItems] = useState({});

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (!mobile) setMenuOpen(false);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);

    const toggleDropdown = (index) => {
        setExpandedItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };


    const closeMobileMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="navbar">
            {/* Mobile hamburger icon */}
            {isMobile && (
                <div className="mobile-menu-toggle">
                    <button
                        className="hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            )}

            {/* Desktop Navigation */}
            {!isMobile && (
                <>
                    <div className="top-nav">
                        {menuLinks.map((item, index) => (
                            <Link key={index} href={item.path} className="nav-link">
                                {item.title}
                            </Link>
                        ))}
                    </div>

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
                            <Image src={trishul} alt="Trishul" width={70} height={70} />
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

                    <BottomNav navMenu={navMenu}/>

                   
                </>
            )}

            {/* Mobile Sidebar */}
            {isMobile && menuOpen && (
                <div className="mobile-sidebar open">
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
