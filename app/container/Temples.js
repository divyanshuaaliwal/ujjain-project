'use client';

import React from 'react';
import './Temples.css';
import Card from './Card';

export default function Temples({ TempleList = [], slug }) {
 

    function capitalizeWithHyphens(str) {
        return str
            .split('-')
            .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
            .join('-');
    }

    return (
        <section className="temple-section">
            <div className="container">
                <h1 className="temples-title">
                    {capitalizeWithHyphens(slug)} Guide
                </h1>
                <div className="title-underline"></div>
                <h2 className="temples-subtitle">
                    Comfortable stays near the temple for a peaceful pilgrimage experience
                </h2>

                <div className="temples-grid">
                    {TempleList.map((item) => (
                        <Card
                            id={item.id}
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            alt={item.alt}
                            link={item.link}
                            slug={slug}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
