'use client'

import React from 'react';
import { useParams } from "next/navigation";
import { Star, MapPin, Wifi, Coffee, Utensils, Heart } from 'lucide-react';
import './Hotels.css';
import Image from 'next/image';

function HotelCard({
    name = "Shri Mahakal Residency",
    priceRange = "1,500 - 3,000",
    distance = "0.3 km",
    rating = 4.7,
    reviews = 186,
    amenities = ["Free WiFi", "Breakfast", "Restaurant"],
    offerPercent = 15,
    image = "/placeholder.jpg"
}) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
        <div className="hotel-card">
            <button className="wishlist-button">
                <Heart size={18} className="heart-icon" />
            </button>

            {offerPercent > 0 && (
                <div className="discount-badge">
                    {offerPercent}% OFF
                </div>
            )}

            <div className="hotel-image-container">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="hotel-image"
                />
                <div className="hotel-overlay"></div>
            </div>

            <div className="hotel-content">
                <div className="hotel-header">
                    <h3 className="hotel-name">{name}</h3>
                    <div className="rating-container">
                        <div className="stars">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={16}
                                    className={
                                        i < fullStars
                                            ? "star-filled"
                                            : i === fullStars && hasHalfStar
                                                ? "star-half"
                                                : "star-empty"
                                    }
                                />
                            ))}
                        </div>
                        <span className="reviews">{rating} ({reviews} reviews)</span>
                    </div>
                </div>

                <div className="hotel-distance">
                    <MapPin size={18} className="pin-icon" />
                    <span>{distance} from Mahakaleshwar Temple</span>
                </div>

                <div className="amenities-container">
                    {amenities.includes("Free WiFi") && (
                        <div className="amenity">
                            <Wifi size={14} className="amenity-icon" />
                            <span>WiFi</span>
                        </div>
                    )}
                    {amenities.includes("Breakfast") && (
                        <div className="amenity">
                            <Coffee size={14} className="amenity-icon" />
                            <span>Breakfast</span>
                        </div>
                    )}
                    {amenities.includes("Restaurant") && (
                        <div className="amenity">
                            <Utensils size={14} className="amenity-icon" />
                            <span>Restaurant</span>
                        </div>
                    )}
                </div>

                <div className="price-booking">
                    <div className="price-container">
                        <span className="price-label">Price starts from</span>
                        <div className="price">
                            <span className="price-amount">₹{priceRange.split(' - ')[0]}</span>
                            <span className="price-night">/night</span>
                        </div>
                    </div>

                    <button className="view-deal-button">
                        View Deal
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function Hotels({ HotelList = [] }) {
    const { slug } = useParams();

    function capitalizeWithHyphens(str) {
        return str
            .split('-')
            .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
            .join('-');
    }

    return (
        <section className="hotels-section">
            <div className="container">
                <h1 className="hotels-title">
                    {capitalizeWithHyphens(slug)} Hotels
                </h1>
                <div className="title-underline"></div>
                <h2 className="hotels-subtitle">
                    Comfortable stays near the temple for a peaceful pilgrimage experience
                </h2>

                <div className="hotels-grid">
                    {
                        HotelList.map((hotel) => (
                            <HotelCard
                                key={hotel.id}
                                name={hotel.name}
                                priceRange={hotel.priceRange}
                                distance={hotel.distance}
                                rating={hotel.rating}
                                image={hotel.image}
                                reviews={hotel.reviews || 186}
                                amenities={hotel.amenities || ["Free WiFi", "Breakfast", "Restaurant"]}
                                offerPercent={hotel.offerPercent || 15}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
