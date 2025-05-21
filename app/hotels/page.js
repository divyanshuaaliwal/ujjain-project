'use client';
import { useState, useEffect } from "react";
import { Star, MapPin, Check, Filter, ArrowUpDown, ChevronLeft, ChevronRight} from "lucide-react";
import Link from "next/link";
import { allHotels } from "../Data/allHotelsData";
import styles from './page.module.css';

export default function Hotels() {

    const [selectedStars, setSelectedStars] = useState([]);
    const [selectedParks, setSelectedParks] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 20000]);
    const [hotels, setHotels] = useState(allHotels);
    const [sortBy, setSortBy] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [hotelsPerPage] = useState(5);

    const availableParks = [
        "Kanha National Park",
        "Bandhavgarh National Park",
        "Pench National Park",
    ];

    // Initial load - assign parks to hotels if not already assigned
    useEffect(() => {
        const hotelsWithParks = allHotels.map((hotel) => {
            if (!hotel.park) {
                if (
                    hotel.name.toLowerCase().includes("kanha") ||
                    hotel.location.toLowerCase().includes("kanha") ||
                    hotel.address.toLowerCase().includes("kanha")
                ) {
                    return { ...hotel, park: "Kanha National Park" };
                } else if (
                    hotel.name.toLowerCase().includes("bandhavgarh") ||
                    hotel.location.toLowerCase().includes("bandhavgarh") ||
                    hotel.address.toLowerCase().includes("bandhavgarh")
                ) {
                    return { ...hotel, park: "Bandhavgarh National Park" };
                } else if (
                    hotel.name.toLowerCase().includes("pench") ||
                    hotel.location.toLowerCase().includes("pench") ||
                    hotel.address.toLowerCase().includes("pench")
                ) {
                    return { ...hotel, park: "Pench National Park" };
                } else {
                    return { ...hotel, park: "Kanha National Park" };
                }
            }
            return hotel;
        });

        setHotels(hotelsWithParks);
    }, []);

    // Calculate current hotels to display
    const indexOfLastHotel = currentPage * hotelsPerPage;
    const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
    const currentHotels = hotels.slice(indexOfFirstHotel, indexOfLastHotel);
    const totalPages = Math.ceil(hotels.length / hotelsPerPage);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

    const handleSort = (criteria) => {
        setSortBy(criteria);
        let sortedHotels = [...hotels];

        switch (criteria) {
            case "price-low":
                sortedHotels.sort(
                    (a, b) =>
                        parseInt(a.price.replace(/[^0-9]/g, "")) -
                        parseInt(b.price.replace(/[^0-9]/g, ""))
                );
                break;
            case "price-high":
                sortedHotels.sort(
                    (a, b) =>
                        parseInt(b.price.replace(/[^0-9]/g, "")) -
                        parseInt(a.price.replace(/[^0-9]/g, ""))
                );
                break;
            case "rating":
                sortedHotels.sort((a, b) => b.rating - a.rating);
                break;
            default:
                sortedHotels = allHotels.map((hotel) => {
                    if (!hotel.park) {
                        if (
                            hotel.name.toLowerCase().includes("kanha") ||
                            hotel.location.toLowerCase().includes("kanha") ||
                            hotel.address.toLowerCase().includes("kanha")
                        ) {
                            return { ...hotel, park: "Kanha National Park" };
                        } else if (
                            hotel.name.toLowerCase().includes("bandhavgarh") ||
                            hotel.location.toLowerCase().includes("bandhavgarh") ||
                            hotel.address.toLowerCase().includes("bandhavgarh")
                        ) {
                            return { ...hotel, park: "Bandhavgarh National Park" };
                        } else if (
                            hotel.name.toLowerCase().includes("pench") ||
                            hotel.location.toLowerCase().includes("pench") ||
                            hotel.address.toLowerCase().includes("pench")
                        ) {
                            return { ...hotel, park: "Pench National Park" };
                        } else {
                            return { ...hotel, park: "Kanha National Park" };
                        }
                    }
                    return hotel;
                });
        }
        setHotels(sortedHotels);
    };

    const handleStarFilter = (star) => {
        const newSelectedStars = selectedStars.includes(star)
            ? selectedStars.filter((s) => s !== star)
            : [...selectedStars, star];

        setSelectedStars(newSelectedStars);
        applyFilters(newSelectedStars, selectedParks, priceRange);
    };

    const handleParkFilter = (park) => {
        const newSelectedParks = selectedParks.includes(park)
            ? selectedParks.filter((p) => p !== park)
            : [...selectedParks, park];

        setSelectedParks(newSelectedParks);
        applyFilters(selectedStars, newSelectedParks, priceRange);
    };

    const handlePriceChange = (value) => {
        setPriceRange(value);
        applyFilters(selectedStars, selectedParks, value);
    };

    const applyFilters = (stars, parks, price) => {
        let filteredHotels = allHotels.map((hotel) => {
            if (!hotel.park) {
                if (
                    hotel.name.toLowerCase().includes("kanha") ||
                    hotel.location.toLowerCase().includes("kanha") ||
                    hotel.address.toLowerCase().includes("kanha")
                ) {
                    return { ...hotel, park: "Kanha National Park" };
                } else if (
                    hotel.name.toLowerCase().includes("bandhavgarh") ||
                    hotel.location.toLowerCase().includes("bandhavgarh") ||
                    hotel.address.toLowerCase().includes("bandhavgarh")
                ) {
                    return { ...hotel, park: "Bandhavgarh National Park" };
                } else if (
                    hotel.name.toLowerCase().includes("pench") ||
                    hotel.location.toLowerCase().includes("pench") ||
                    hotel.address.toLowerCase().includes("pench")
                ) {
                    return { ...hotel, park: "Pench National Park" };
                } else {
                    return { ...hotel, park: "Kanha National Park" };
                }
            }
            return hotel;
        });

        if (stars.length > 0) {
            filteredHotels = filteredHotels.filter((hotel) =>
                stars.includes(hotel.stars)
            );
        }

        if (parks.length > 0) {
            filteredHotels = filteredHotels.filter((hotel) =>
                parks.includes(hotel.park)
            );
        }

        filteredHotels = filteredHotels.filter((hotel) => {
            const hotelPrice = parseInt(hotel.price.replace(/[^0-9]/g, ""));
            return hotelPrice >= price[0] && hotelPrice <= price[1];
        });

        setHotels(filteredHotels);
        setCurrentPage(1);
    };

    useEffect(() => {
        let title = "Hotels";
        if (selectedParks.length === 1) {
            const parkName = selectedParks[0].replace(" National Park", "");
            title = `Hotels in ${parkName}`;
        } else if (selectedParks.length > 1) {
            title = "Hotels in Multiple Parks";
        } else {
            title = "Hotels in Wildlife Parks";
        }

        document.title = title;
    }, [selectedParks]);

    return (
        <div className={styles.pageContainer}>
          

            <div className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Hotel Booking</h1>
                    <p className={styles.heroDescription}>
                        Here we are empowering wildlife travelers with instant hotel and
                        resort booking with comprehensive choices in Kanha, Bandhavgarh, and
                        Pench National Parks. We have tie-ups with a vast network of hotels
                        across these parks which include both luxury and budget
                        accommodations to suit every traveler's needs.
                    </p>
                </div>
            </div>

            <div className={styles.mainContent}>
                <div className={styles.contentWrapper}>
                    {/* Filter and Sort Section */}
                    <div className={styles.filterSection}>
                        {/* Park Filter */}
                        <div className={styles.filterCard}>
                            <h3 className={styles.filterTitle}>
                                <MapPin className={styles.filterIcon} />
                                Select National Park
                            </h3>
                            <div className={styles.filterButtons}>
                                {availableParks.map((park) => (
                                    <button
                                        key={park}
                                        onClick={() => handleParkFilter(park)}
                                        className={`${styles.filterButton} ${selectedParks.includes(park) ? styles.activeFilter : ""
                                            }`}
                                    >
                                        <span>{park}</span>
                                    </button>
                                ))}
                                {selectedParks.length > 0 && (
                                    <button
                                        onClick={() => {
                                            setSelectedParks([]);
                                            applyFilters(selectedStars, [], priceRange);
                                        }}
                                        className={`${styles.filterButton} ${styles.clearButton}`}
                                    >
                                        <span>Clear Selection</span>
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className={styles.sortFilterContainer}>
                            {/* Star Filter */}
                            <div className={styles.starFilter}>
                                <h3 className={styles.filterTitle}>
                                    <Filter className={styles.filterIcon} />
                                    Hotel Rating
                                </h3>
                                <div className={styles.starButtons}>
                                    {[3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            onClick={() => handleStarFilter(star)}
                                            className={`${styles.starButton} ${selectedStars.includes(star) ? styles.activeStar : ""
                                                }`}
                                        >
                                            <Star
                                                className={`${styles.starIcon} ${selectedStars.includes(star) ? styles.filledStar : ""
                                                    }`}
                                            />
                                            <span>{star} Star</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Sort Options */}
                            <div className={styles.sortOptions}>
                                <h3 className={styles.filterTitle}>
                                    <ArrowUpDown className={styles.filterIcon} />
                                    Sort By
                                </h3>
                                <select
                                    value={sortBy}
                                    onChange={(e) => handleSort(e.target.value)}
                                    className={styles.sortSelect}
                                >
                                    <option value="">Default</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="rating">Rating</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Hotels List */}
                    <div className={styles.hotelsList}>
                        {currentHotels.length > 0 ? (
                            currentHotels.map((hotel, index) => (
                                <div key={index} className={styles.hotelCard}>
                                    <div className={styles.hotelGrid}>
                                        {/* Hotel Image */}
                                        <Link
                                            href={`/hotels-resorts/${hotel.slug}`}
                                            className={styles.hotelImageContainer}
                                        >
                                            <img
                                                src={hotel.image}
                                                alt={hotel.name}
                                                className={styles.hotelImage}
                                            />
                                            {hotel.featured && (
                                                <div className={styles.featuredBadge}>Featured</div>
                                            )}
                                            {hotel.park && (
                                                <div className={styles.parkBadge}>{hotel.park}</div>
                                            )}
                                        </Link>

                                        {/* Hotel Details */}
                                        <div className={styles.hotelDetails}>
                                            <div className={styles.hotelHeader}>
                                                <div>
                                                    <Link
                                                        href={`/hotels-resorts/${hotel.slug}`}
                                                        className={styles.hotelLink}
                                                    >
                                                        <h3 className={styles.hotelName}>{hotel.name}</h3>
                                                    </Link>
                                                    <div className={styles.locationContainer}>
                                                        <MapPin className={styles.locationIcon} />
                                                        <span>{hotel.location}</span>
                                                    </div>
                                                </div>
                                                <div className={styles.ratingContainer}>
                                                    <div className={styles.ratingWrapper}>
                                                        <Star className={styles.ratingStar} />
                                                        <span className={styles.ratingValue}>
                                                            {hotel.rating}
                                                        </span>
                                                        <span className={styles.reviewsCount}>
                                                            ({hotel.reviews} Reviews)
                                                        </span>
                                                    </div>
                                                    <div className={styles.priceContainer}>
                                                        {hotel.price}
                                                        <span className={styles.priceUnit}> / Night</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className={styles.hotelAddress}>{hotel.address}</p>

                                            <div className={styles.amenitiesGrid}>
                                                {hotel.amenities.map((amenity, idx) => (
                                                    <div key={idx} className={styles.amenityItem}>
                                                        <Check className={styles.amenityIcon} />
                                                        <span>{amenity}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <Link
                                                href={`/hotels-resorts/${hotel.slug}`}
                                                className={styles.bookButton}
                                            >
                                                Book Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className={styles.noResults}>
                                <p>No hotels found matching your criteria.</p>
                            </div>
                        )}
                        {hotels.length > hotelsPerPage && (
                            <div className={styles.pagination}>
                                <button
                                    onClick={prevPage}
                                    disabled={currentPage === 1}
                                    className={`${styles.paginationButton} ${currentPage === 1 ? styles.disabledButton : ""
                                        }`}
                                >
                                    <ChevronLeft size={20} />
                                </button>

                                <div className={styles.pageNumbers}>
                                    {Array.from({ length: totalPages }, (_, i) => (
                                        <button
                                            key={i + 1}
                                            onClick={() => paginate(i + 1)}
                                            className={`${styles.pageButton} ${currentPage === i + 1 ? styles.activePage : ""
                                                }`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    onClick={nextPage}
                                    disabled={currentPage === totalPages}
                                    className={`${styles.paginationButton} ${currentPage === totalPages ? styles.disabledButton : ""
                                        }`}
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}