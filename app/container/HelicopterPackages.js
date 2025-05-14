// pages/index.js
import Image from 'next/image';
import React from 'react';
import './HelicopterPackages.css';
import mahakalPackage1 from '../images/mahakalPackage1.jpg';
import mahakalPackage2 from '../images/mahakalPackage2.png';
import mahakalPackage3 from '../images/mahakalPackage3.jpg';
import mahakalPackage4 from '../images/mahakalPackage4.jpg';

export default function Home() {
    const packages = [
        {
            title: 'Mahakaleshwar Darshan by Helicopter',
            duration: '1 Day (Same Day Return)',
            route: 'Indore → Ujjain → Indore',
            price: '₹ 55,000/-',
            oldPrice: '₹ 60,000/-',
            image: mahakalPackage1,
            alt: 'Mahakaleshwar Temple aerial view',
        },
        {
            title: 'Ujjain & Omkareshwar Jyotirling Darshan',
            duration: '2 Days & 1 Night',
            route: 'Indore → Omkareshwar → Ujjain → Indore',
            price: '₹ 85,000/-',
            oldPrice: '₹ 90,000/-',
            image: mahakalPackage2,
            alt: 'Omkareshwar temple view',
        },
        {
            title: 'Ujjain Mahakal with Local Sightseeing',
            duration: '1 Day',
            route: 'Ujjain → Mahakaleshwar → Kal Bhairav → Ram Ghat → Sandipani Ashram',
            price: '₹ 5,999/-',
            oldPrice: '₹ 6,999/-',
            image: mahakalPackage3,
            alt: 'Ujjain local sightseeing',
        },
        {
            title: 'Panch Jyotirling Yatra by Helicopter',
            duration: '4 Days & 3 Nights',
            route: 'Ujjain → Omkareshwar → Bhimashankar → Trimbakeshwar → Grishneshwar',
            price: '₹ 2,20,000/-',
            oldPrice: '₹ 2,30,000/-',
            image: mahakalPackage4,
            alt: 'Panch Jyotirling aerial view',
        },
    ];

    return (
        <div className="parent-container">

            <h1 className="heading">
                <span className="icon">🚁</span> Mahakaleshwar Helicopter Tour Packages
            </h1>
            
            <div className="card-container">
                {packages.map((pkg, index) => (
                    <div 
                        className="card" 
                        key={index}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="image-container">
                            <Image
                                src={pkg.image}
                                alt={pkg.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="package-image"
                                priority={index < 2}
                            />
                        </div>
                        
                        <div className="card-body">
                            <div className="card-content">
                                <h3>{pkg.title}</h3>
                                <p className="detail"><span className="icon">🕒</span> {pkg.duration}</p>
                                <p className="detail"><span className="icon">📍</span> {pkg.route}</p>
                                <p className="price">
                                    <strong>{pkg.price}</strong>
                                    <span className="old-price">{pkg.oldPrice}</span> 
                                    <span className="per-person">per person</span>
                                </p>
                            </div>
                            
                            <div className="buttons">
                                <button className="read-more">Read More</button>
                                <button className="enquiry">Enquiry Now »</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}