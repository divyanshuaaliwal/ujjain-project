import mahakal1 from "./images/mahakal1.png"
import mahakal2 from "./images/mahakal2.jpg"
import mahakal3 from "./images/mahakal3.jpg"
import mahakal4 from "./images/mahakal4.jpeg"
import mahakal5 from "./images/mahakal5.jpg"
import mahakal6 from "./images/mahakal6.jpeg"
import mahakal7 from "./images/mahakal7.webp"
import mahakal8 from "./images/mahakal8.jpg"
import mahakal9 from "./images/mahakal9.jpg"

import hotel1 from "./images/hotel1.jpg"
import hotel2 from "./images/hotel2.webp"
import hotel3 from "./images/hotel3.jpg"
import hotel4 from "./images/hotel4.jpg"

import package1 from "./images/package1.jpeg"
import package2 from "./images/package2.jpeg"
import package3 from "./images/package3.png"
import package4 from "./images/package4.jpeg"

export const temples = [
    {
        id: 1,
        location: "mahakaleshwar",
        title: "Mahakaleshwar Temple",
        description: "One of the 12 Jyotirlingas, the Mahakaleshwar temple is dedicated to Lord Shiva and holds immense religious significance.",
        image: mahakal1,
        alt: "Mahakaleshwar Temple exterior at dusk",
        link: "/temple",
        date: "May 5, 2025",
        readTime: "4 min read",
        views: "2.4k",
        category: "Temple",
        featured: true
    },
    {
        id: 2,
        location: "mahakaleshwar",
        title: "Bhasma Aarti",
        description: "Experience the divine Bhasma Aarti, a unique ritual performed during the early hours of the morning.",
        image: mahakal2,
        alt: "Bhasma Aarti ritual",
        link: "/bhasma-aarti",
        date: "May 2, 2025",
        readTime: "3 min read",
        views: "3.1k",
        category: "Rituals",
        new: true
    },
    {
        id: 3,
        location: "mahakaleshwar",
        title: "Mahakaleshwar Weather",
        description: "Plan your visit to Mahakaleshwar with our comprehensive weather guide for all seasons.",
        image: mahakal3,
        alt: "Mahakaleshwar Temple view with clouds",
        link: "/weather",
        date: "April 28, 2025",
        readTime: "2 min read",
        views: "1.6k",
        category: "Travel"
    },
    {
        id: 4,
        location: "mahakaleshwar",
        title: "Festivals at Mahakaleshwar",
        description: "Discover the vibrant festivals celebrated at Mahakaleshwar throughout the year.",
        image: mahakal4,
        alt: "Festival celebrations at Mahakaleshwar",
        link: "/festivals",
        date: "April 20, 2025",
        readTime: "5 min read",
        views: "1.9k",
        category: "Festivals"
    },
    {
        id: 5,
        location: "mahakaleshwar",
        title: "Temple History",
        description: "Explore the rich history and legends associated with the ancient Mahakaleshwar Temple.",
        image: mahakal5,
        alt: "History of Mahakaleshwar",
        link: "/history",
        date: "April 15, 2025",
        readTime: "6 min read",
        views: "2.7k",
        category: "History",
        featured: true
    },
    {
        id: 6,
        location: "mahakaleshwar",
        title: "Temple Architecture",
        description: "Marvel at the magnificent architecture and spiritual design of the Mahakaleshwar Temple.",
        image: mahakal6,
        alt: "Architecture view of Mahakaleshwar",
        link: "/architecture",
        date: "April 10, 2025",
        readTime: "4 min read",
        views: "2.1k",
        category: "Architecture"
    },
    {
        id: 7,
        location: "mahakaleshwar",
        title: "How to Reach",
        description: "Find the best routes and transportation options to reach Mahakaleshwar Temple from major cities.",
        image: mahakal7,
        alt: "Transportation to Mahakaleshwar",
        link: "/directions",
        date: "April 5, 2025",
        readTime: "3 min read",
        views: "1.3k",
        category: "Travel"
    },
    {
        id: 8,
        location: "mahakaleshwar",
        title: "Accommodation Guide",
        description: "Browse through our curated list of hotels and dharamshalas near Mahakaleshwar Temple.",
        image: mahakal8,
        alt: "Accommodations near Mahakaleshwar Temple",
        link: "/stay",
        date: "April 2, 2025",
        readTime: "3 min read",
        views: "1.5k",
        category: "Stay"
    },
    {
        id: 9,
        location: "mahakaleshwar",
        title: "Nearby Attractions",
        description: "Explore other places of interest near Mahakaleshwar Temple during your visit to Ujjain.",
        image: mahakal9,
        alt: "Nearby Attractions",
        link: "/attractions",
        date: "March 30, 2025",
        readTime: "6 min read",
        views: "2.2k",
        category: "Attractions"
    }
];

export const hotels = [
    {
        id: 1,
        location: "mahakaleshwar",
        name: "Hotel Rudraksh",
        priceRange: "2500 - 5000",
        distance: "0.5 km",
        rating: 4.5,
        image: hotel1,
    },
    {
        id: 2,
        location: "mahakaleshwar",
        name: "Shipra Residency",
        priceRange: "1800 - 3500",
        distance: "1.2 km",
        rating: 4.2,
        image: hotel2,
    },
    {
        id: 3,
        location: "mahakaleshwar",
        name: "Ujjain Palace Hotel",
        priceRange: "3500 - 8000",
        distance: "0.8 km",
        rating: 4.7,
        image: hotel3,
    },
    {
        id: 4,
        location: "mahakaleshwar",
        name: "Hotel Imperial Grand",
        priceRange: "300 - 5000",
        distance: "4.8 km",
        rating: 4.7,
        image: hotel4,
    },
];

export const packages = [
  {
    title: "Mahakal Darshan Package",
    location: "mahakaleshwar",
    img: package1,
    duration: "1 Day",
    price: "₹999",
    originalPrice: "₹1,299",
    rating: 4.7,
    reviews: 128,
    highlights: [
      "Bhasma Aarti experience",
      "Professional guide",
      "Complimentary breakfast",
      "Fast-track temple entry"
    ],
    popular: true
  },
  {
    title: "Ujjain Spiritual Tour",
    location: "mahakaleshwar",
    img: package2,
    duration: "2 Days / 1 Night",
    price: "₹2,999",
    originalPrice: "₹3,499",
    rating: 4.9,
    reviews: 86,
    highlights: [
      "Comfortable hotel accommodation",
      "All meals included",
      "Visit to 7 sacred temples",
      "Air-conditioned transportation"
    ],
    featured: true
  },
  {
    title: "Complete Ujjain Darshan",
    location: "mahakaleshwar",
    img: package3,
    duration: "3 Days / 2 Nights",
    price: "₹4,999",
    originalPrice: "₹5,999",
    rating: 4.8,
    reviews: 64,
    highlights: [
      "Premium hotel stay",
      "All inclusive meals",
      "All major attractions covered",
      "Complimentary pooja items"
    ]
  },
  {
    title: "Ujjain & Omkareshwar Jyotirling Yatra",
    location: "mahakaleshwar",
    img: package4,
    duration: "3 Days / 2 Nights",
    price: "₹5,499",
    originalPrice: "₹6,499",
    rating: 4.9,
    reviews: 102,
    highlights: [
      "Darshan of Mahakaleshwar & Omkareshwar Jyotirlingas",
      "Deluxe hotel stay",
      "Private cab transfers",
      "Evening Narmada Aarti experience"
    ],
    popular: true,
    featured: true
  }
];