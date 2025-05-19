import hotel1 from "../assets/hotel1.jpg";
import hotel2 from "../assets/hotel2.webp";
import hotel3 from "../assets/hotel3.jpg";
import hotel4 from "../assets/hotel4.jpg";

export const tourPackagesData = [
    {
        id: 1,
        title: "Mahakaleshwar Darshan Express",
        price: "₹999",
        duration: "1 Day",
        location: "Ujjain",
        image: hotel1,
        rating: 4.5,
        reviews: 120,
        available: true,
        highlights: [
            "VIP Mahakaleshwar Darshan",
            "Includes Rudrabhishek Puja",
            "Quick 1-day round trip"
        ],
        itinerary: [
            "06:00 AM - Departure from Ujjain railway station",
            "07:00 AM - Arrive at Mahakaleshwar temple for Rudrabhishek",
            "09:30 AM - VIP Darshan and temple visit",
            "12:00 PM - Local sightseeing + Prasad",
            "03:00 PM - Return journey"
        ],
        includes: [
            "VIP Darshan Pass",
            "Rudrabhishek Puja",
            "Mandir Prasad",
            "Local Guide",
            "Travel by AC Bus"
        ],
        excludes: [
            "Personal Expenses",
            "Meals",
            "Travel Insurance"
        ],
        cancellationPolicy:
            "Free cancellation up to 24 hours before departure. 50% refund within 12 hours. No refund within 6 hours.",
        safetyMeasures: [
            "Sanitized vehicles",
            "Temperature checks",
            "Mandatory masks"
        ],
        termsAndConditions: [
            "Carry a valid photo ID for temple entry",
            "Follow local dress code for temple visit",
            "Respect timelines mentioned in itinerary"
        ],
        faqs: [
            {
                question: "Is food included?",
                answer: "No, meals are not included in this package."
            },
            {
                question: "Is the darshan confirmed?",
                answer: "Yes, VIP Darshan is pre-booked and guaranteed."
            }
        ],
        contact: {
            phone: "+91-9876543210",
            email: "support@spiritualtours.in"
        }
    },

    {
        id: 2,
        title: "Mahakal Weekend Retreat",
        price: "₹2,499",
        duration: "2 Days / 1 Night",
        location: "Ujjain",
        image: hotel2,
        rating: 4.7,
        reviews: 89,
        available: true,
        highlights: [
            "3-star Hotel Stay",
            "Evening Aarti View",
            "Complimentary Breakfast"
        ],
        itinerary: [
            "Day 1: Arrival & VIP Darshan + Hotel Check-in + Evening Aarti",
            "Day 2: Local temple visit + Checkout after breakfast"
        ],
        includes: [
            "Hotel Stay (3-star)",
            "VIP Darshan",
            "Evening Aarti Access",
            "Complimentary Breakfast",
            "Tour Coordinator"
        ],
        excludes: [
            "Lunch and Dinner",
            "Personal shopping",
            "Insurance"
        ],
        cancellationPolicy:
            "Full refund before 48 hours. 50% before 24 hours. No refund on same-day cancellation.",
        safetyMeasures: [
            "Hotel room sanitization",
            "Daily temperature checks",
            "Mask and sanitizer kits"
        ],
        termsAndConditions: [
            "Guests must check in with valid ID proof",
            "Late check-out is chargeable",
            "Tour timings are fixed"
        ],
        faqs: [
            {
                question: "Can I customize my stay?",
                answer: "Yes, extended stay options are available on request."
            },
            {
                question: "Are kids allowed?",
                answer: "Yes, children under 5 are free with parents."
            }
        ],
        contact: {
            phone: "+91-7489912345",
            email: "retreats@mahakalbooking.com"
        }
    },

    {
        id: 3,
        title: "Mahakal + Omkareshwar Yatra",
        price: "₹5,999",
        duration: "3 Days / 2 Nights",
        location: "Ujjain & Omkareshwar",
        image: hotel3,
        rating: 4.8,
        reviews: 75,
        available: true,
        highlights: [
            "2 Jyotirlings in 1 trip",
            "Hotel stays at both locations",
            "Includes Puja Kit and AC travel"
        ],
        itinerary: [
            "Day 1: Arrival in Ujjain + Mahakaleshwar VIP Darshan",
            "Day 2: Travel to Omkareshwar + Jyotirling Darshan",
            "Day 3: Return journey after breakfast"
        ],
        includes: [
            "AC Cab Travel",
            "Hotel Stay in Ujjain and Omkareshwar",
            "VIP Darshan at both Jyotirlings",
            "Puja Kit",
            "Breakfast & Dinner"
        ],
        excludes: [
            "Lunch on travel days",
            "Tips for guides",
            "Extra night stay"
        ],
        cancellationPolicy:
            "No refund on travel date. 80% refund before 72 hours.",
        safetyMeasures: [
            "Driver vaccination",
            "Puja kits are pre-sanitized",
            "Medical kit on board"
        ],
        termsAndConditions: [
            "Only 3-persons per cab allowed",
            "Delays due to weather are not refundable"
        ],
        faqs: [
            {
                question: "Is cab shared or private?",
                answer: "You can choose private or shared at checkout."
            },
            {
                question: "Can I skip Omkareshwar?",
                answer: "Yes, but no refund will be provided for unused services."
            }
        ],
        contact: {
            phone: "+91-7019988776",
            email: "yatra@jyotirlingpackage.in"
        }
    },

    {
        id: 4,
        title: "Ujjain Spiritual Trail",
        price: "₹9,999",
        duration: "5 Days / 4 Nights",
        location: "Ujjain, Omkareshwar, Kal Bhairav",
        image: hotel4,
        rating: 5.0,
        reviews: 42,
        available: false,
        highlights: [
            "Covers 3 sacred destinations",
            "Daily pujas & satsang",
            "Local expert guides"
        ],
        itinerary: [
            "Day 1: Mahakaleshwar visit + Hotel check-in",
            "Day 2: Kal Bhairav temple + spiritual session",
            "Day 3: Omkareshwar Yatra + Return to Ujjain",
            "Day 4: Ujjain local sightseeing + evening satsang",
            "Day 5: Check-out and departure"
        ],
        includes: [
            "4 Nights stay with meals",
            "All Transfers in AC Vehicles",
            "Temple guides",
            "Daily Puja and Satsang"
        ],
        excludes: [
            "Airfare / Train tickets to Ujjain",
            "Evening snacks",
            "Personal donations"
        ],
        cancellationPolicy:
            "Non-refundable once booked due to high demand",
        safetyMeasures: [
            "Daily sanitization of stay and vehicles",
            "On-call doctor support",
            "Travel insurance included"
        ],
        termsAndConditions: [
            "Group tour (min 10 participants required)",
            "Itinerary subject to minor change based on temple timings"
        ],
        faqs: [
            {
                question: "Are there language guides?",
                answer: "Yes, guides are fluent in Hindi and English."
            },
            {
                question: "Can elders join this trip?",
                answer: "Yes, this trip is suitable for all age groups."
            }
        ],
        contact: {
            phone: "+91-9922334466",
            email: "trails@ujjainspirituals.in"
        }
    }
];
