"use client";
import { useParams } from "next/navigation";
import { temples, hotels, packages } from "@/app/data";
import Card from "@/app/container/Card";
import Hotels from "@/app/container/Hotels";
import Packages from "@/app/container/Packages";
import "./page.css"

const TemplePage = () => {
    const { slug } = useParams();

    const TempleList = temples.filter(
        (item) => item.location?.toLowerCase() === slug.toLowerCase()
    );

    const HotelList = hotels.filter(
        (item) => item.location?.toLowerCase() === slug.toLowerCase()
    );

    const PackagesList = packages.filter(
        (item) => item.location?.toLowerCase() === slug.toLowerCase()
    );

    const capitalizeWords = (str) => {
        return str
            .split(/[\s-]/)
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");
    };

    return (
        <>
            <section className="hero-section">
                <div className="container">
                    <h1 className="heading">{capitalizeWords(slug)} Guide</h1>
                    <div className="underline"></div>
                    <h2 className="subheading">
                        Everything you need to know about visiting the sacred{" "}
                        {capitalizeWords(slug)} Temple
                    </h2>
                    <div className="button-wrapper">
                        <button className="plan-button">Plan Your Visit</button>
                    </div>
                </div>
            </section>

            {/* Temples */}
            <section className="card-section">
                <div className="card-grid">
                    {TempleList.map((item) => (
                        <Card
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            alt={item.alt}
                            link={item.link}
                        />
                    ))}
                </div>
            </section>

            {/* Hotels */}
            <Hotels HotelList={HotelList} />

            {/* Packages */}
            <Packages PackageList={PackagesList} />
        </>
    );
};

export default TemplePage;
