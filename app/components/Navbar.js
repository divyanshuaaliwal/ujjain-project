"use client";

import Link from "next/link";
import { Phone, Mail, ChevronDown, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import "./navbar.css";
import shivji from "../images/shiv.avif";
import temple from "../images/temple.jpg";
import trishul from "../images/trishul.jpg";
import Damroo from "../images/Damroo.png";
import Image from "next/image";

export default function ChardhamTourUI() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const menuLinks = [
        { title: "Home", path: "/" },
        { title: "Mahakaleshwar", path: "/destination/mahakaleshwar" },
        { title: "Harsiddhi Mata", path: "/destination/harsiddhi-mata" },
        { title: "Kal Bhairav", path: "/destination/kal-bhairav" },
        { title: "Mangalnath Mandir", path: "/destination/mangalnath-mandir" },
        { title: "Hotels", path: "/hotels" },
        { title: "Blog", path: "/blog" },
        { title: "B2B Registration", path: "/b2b-registration" },
        { title: "Register", path: "/register" },
        { title: "Booking Form", path: "/booking-form" },
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

    return (
        <div className="navbar">
            {/* Hamburger for mobile */}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <Menu size={24} />
            </div>

            {/* Top navigation */}
            <div className={`top-nav ${menuOpen ? "open" : ""}`}>
                {menuLinks.map((item, index) => (
                    <Link key={index} href={item.path} className="nav-link">
                        {item.title}
                    </Link>
                ))}
            </div>

            {/* Logo + contact */}
            <div className="logo-section">
                <div className="logo-left">
                    <div>
                        <h1 className="logo-title">Ujjain Mahakal</h1>
                        <p className="subtitle">Spiritual Journey</p>
                    </div>
                    <div>
                        <div className="approved-by">Approved by</div>
                        <div className="approved-text">Uttarakhand Tourism</div>
                    </div>
                </div>

                <div className="middle-images">
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
                        <a href="mailto:yatra@chardhamtour.in">info@mahakaleshwarguide.com</a>
                    </div>
                </div>
            </div>

                 {/* Bottom Navigation */}
            <div className={`bottom-nav ${menuOpen ? "open" : ""}`}>
                <ul>
                    {navMenu.map((item, index) => (
                        <li 
                            key={index} 
                            className={`nav-item ${activeItem === index ? 'active' : ''}`}
                            onClick={() => item.dropdown && toggleDropdown(index)}
                        >
                            <a
                                href={item.dropdown ? "#" : item.link || "#"}
                                className="nav-title"
                                onClick={(e) => item.dropdown && e.preventDefault()}
                            >
                                {item.title}
                                {item.dropdown && <ChevronDown size={14} className="dropdown-icon" />}
                            </a>
                            {/* Show dropdowns based on context */}
                            {item.dropdown && (isMobile ? activeItem === index : true) && item.dropdownItems?.length > 0 && (
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
        </div>
    );
}
