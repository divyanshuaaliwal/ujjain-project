'use client';

import React from 'react';
import { ArrowRight, Calendar, Clock, Eye } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import './Card.css';

export default function Card({
    title = "The History of Mahakaleshwar",
    description = "Explore the rich history and cultural significance of one of India's most revered Jyotirlingas, dating back to ancient times.",
    image = "/placeholder.jpg",
    alt = "Card image",
    link = "#",
    date = "May 5, 2025",
    readTime = "5 min read",
    views = "2.4k",
    category = "History",
}) {
    return (
        <div className="card">
            {/* Image container with overlay on hover */}
            <div className="card-image-container">
                <Image
                    src={image}
                    alt={alt}
                    fill
                    className="card-image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="card-overlay"></div>

                {/* Category badge */}
                <div className="category-badge">
                    {category}
                </div>
            </div>

            <div className="card-content">
                {/* Metadata row */}
                <div className="card-metadata">
                    <div className="metadata-item">
                        <Calendar size={14} className="metadata-icon" />
                        <span>{date}</span>
                    </div>
                    <div className="metadata-item">
                        <Clock size={14} className="metadata-icon" />
                        <span>{readTime}</span>
                    </div>
                    <div className="metadata-item">
                        <Eye size={14} className="metadata-icon" />
                        <span>{views}</span>
                    </div>
                </div>

                {/* Title with hover effect */}
                <h3 className="card-title">
                    {title}
                </h3>

                {/* Description */}
                <p className="card-description">{description}</p>

                {/* Read more link */}
                <Link href={link} className="read-more-link">
                    <span>Read More</span>
                    <ArrowRight size={16} className="arrow-icon" />
                </Link>
            </div>
        </div>
    );
}