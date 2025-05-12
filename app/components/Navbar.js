"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, ChevronDown } from "lucide-react";
import "./navbar.css";

// import img1 from "../assets/ShivJee1.jpg";
// import img2 from "../assets/Temple.jpg";
// import img3 from "../assets/Trishul.png";

export default function ChardhamTourUI() {
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
            dropdown: true,
            dropdownItems: [
                { title: "Tour 1", link: "/tours/tour-1" },
                { title: "Tour 2", link: "/tours/tour-2" }
            ]
        },
        { title: "Ujjain Yatra", dropdown: false },
        { title: "Temple Wise Darshan", dropdown: false },
        { title: "Hotels Near Mandir", dropdown: false },
        { title: "Useful Links", dropdown: false },
        { title: "Travel Community", dropdown: false },
        { title: "Customer Support", dropdown: false },
    ];

    return (
        <div className="navbar">
            {/* Top Menu */}
            <div className="top-nav">
                {
                    menuLinks.map((item, index) => (
                        <Link key={index} href={item.path} className="nav-link">
                            {item.title}
                        </Link>
                    ))
                }
            </div>

            {/* Logo + Contact */}
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
                    {/* <div className="image-group">
                        <Image src={img1} alt="img1" width={100} height={100} />
                        <Image src={img2} alt="img2" width={100} height={100} />
                        <Image src={img3} alt="img3" width={100} height={100} />
                    </div> */}
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
                        <a href="mailto:yatra@chardhamtour.in">yatra@chardhamtour.in</a>
                    </div>
                </div>
            </div>

            {/* Bottom Menu with Dropdowns */}
            <div className="bottom-nav">
                <ul>
                    {navMenu.map((item, index) => (
                        <li key={index} className="nav-item">
                            <a href={item.dropdown ? "#" : item.link || "#"} className="nav-title">
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
        </div>
    );
}