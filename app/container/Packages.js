'use client';

import React from "react";

import Image from 'next/image';
import { Clock, MapPin, Check, Star } from "lucide-react";
import './Packages.css';

const Package = ({ PackageList = [] }) => {
    return (
        <div className="package-section">
            <div className="package-container">
                <div className="package-header">
                    <h2 className="package-title">
                        Mahakaleshwar Tour Packages
                    </h2>
                    <p className="package-subtitle">
                        Curated spiritual journeys for a complete Ujjain experience
                    </p>
                    <div className="title-line"></div>
                </div>

                <div className="package-grid">
                    {
                        PackageList.map((pkg, index) => (
                            <div
                                key={index}
                                className={`package-card ${pkg.featured ? 'featured' : ''}`}
                            >
                                {pkg.featured && (
                                    <div className="package-badge featured-badge">
                                        BEST VALUE
                                    </div>
                                )}
                                {pkg.popular && (
                                    <div className="package-badge popular-badge">
                                        MOST POPULAR
                                    </div>
                                )}

                                {/* Image with gradient overlay */}
                                <div className="package-image-container">
                                    <Image src={pkg.img} alt={pkg.title} className="package-image" />
                                    <div className="package-overlay">
                                        <div className="package-image-content">
                                            <h3 className="package-name">{pkg.title}</h3>
                                            <div className="package-rating">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={14}
                                                        className={i < Math.floor(pkg.rating) ? "pkg-star-filled" : "pkg-star-empty"}
                                                    />
                                                ))}
                                                <span className="rating-text">{pkg.rating} ({pkg.reviews})</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="package-content">
                                    {/* Details */}
                                    <div className="package-details">
                                        <div className="package-detail">
                                            <Clock size={18} className="detail-icon" />
                                            <span>{pkg.duration}</span>
                                        </div>
                                        <div className="package-detail">
                                            <MapPin size={18} className="detail-icon" />
                                            <span>Ujjain, Madhya Pradesh</span>
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className="package-price">
                                        <span className="current-price">{pkg.price}</span>
                                        <span className="original-price">{pkg.originalPrice}</span>
                                        <span className="save-percent">Save {Math.round(((parseFloat(pkg.originalPrice.replace(/[₹,]/g, '')) - parseFloat(pkg.price.replace(/[₹,]/g, ''))) / parseFloat(pkg.originalPrice.replace(/[₹,]/g, ''))) * 100)}%</span>
                                    </div>

                                    {/* Highlights */}
                                    <div className="package-highlights">
                                        <h4 className="highlights-title">Package Highlights:</h4>
                                        <ul className="highlights-list">
                                            {pkg.highlights.map((highlight, i) => (
                                                <li key={i} className="highlight-item">
                                                    <Check size={16} className="check-icon" />
                                                    <span className="highlight-text">{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA */}
                                    <div className="package-actions">
                                        <button className="book-now-button">
                                            Book Now
                                        </button>
                                        <button className="view-details-button">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Package;