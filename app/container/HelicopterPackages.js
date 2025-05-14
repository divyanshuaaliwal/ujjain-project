// pages/index.js
import Head from 'next/head';
import './HelicopterPackages.css';
import mahakalPackage1 from '../images/mahakalPackage1.jpg';
import mahakalPackage2 from '../images/mahakalPackage2.png';
import mahakalPackage3 from '../images/mahakalPackage3.jpg';
import mahakalPackage4 from '../images/mahakalPackage4.jpg';
import Image from 'next/image';

export default function Home() {
    const packages = [
        {
            title: 'Mahakaleshwar Darshan by Helicopter',
            duration: '1 Day (Same Day Return)',
            route: 'Indore → Ujjain → Indore',
            price: '₹ 55,000/-',
            oldPrice: '₹ 60,000/-',
            image: mahakalPackage1,
        },
        {
            title: 'Ujjain & Omkareshwar Jyotirling Darshan',
            duration: '2 Days & 1 Night',
            route: 'Indore → Omkareshwar → Ujjain → Indore',
            price: '₹ 85,000/-',
            oldPrice: '₹ 90,000/-',
            image: mahakalPackage2,
        },
        {
            title: 'Ujjain Mahakal with Local Sightseeing',
            duration: '1 Day',
            route: 'Ujjain → Mahakaleshwar → Kal Bhairav → Ram Ghat → Sandipani Ashram',
            price: '₹ 5,999/-',
            oldPrice: '₹ 6,999/-',
            image: mahakalPackage3,
        },
        {
            title: 'Panch Jyotirling Yatra by Helicopter',
            duration: '4 Days & 3 Nights',
            route: 'Ujjain → Omkareshwar → Bhimashankar → Trimbakeshwar → Grishneshwar',
            price: '₹ 2,20,000/-',
            oldPrice: '₹ 2,30,000/-',
            image: mahakalPackage4,
        },
    ];

    return (
        <div className="parent-container">
            <h1 className="heading">🚁 Mahakaleshwar Helicopter Tour Packages</h1>
            <div className="card-container">
                {
                    packages.map((pkg, index) => (
                        <div className="card" key={index}>
                            <Image
                                src={pkg.image}
                                alt={pkg.title}
                                width={350}
                                height={250}
                            />
                            <div className="card-body">
                                <h3>{pkg.title}</h3>
                                <p><span>🕒</span> {pkg.duration}</p>
                                <p><span>📍</span> {pkg.route}</p>
                                <p className="price">
                                    <strong>{pkg.price}</strong>
                                    <span className="old-price">{pkg.oldPrice}</span> per person
                                </p>
                                <div className="buttons">
                                    <button className="read-more">Read More</button>
                                    <button className="enquiry">Enquiry Now »</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
