import vehicle1 from "../assets/vehicle1.png";
import vehicle2 from "../assets/vehicle2.png";
import vehicle3 from "../assets/vehicle3.png";
import vehicle4 from "../assets/vehicle4.png";
import vehicle5 from "../assets/vehicle5.png";
import vehicle6 from "../assets/vehicle6.png";
import vehicle7 from "../assets/vehicle7.png";
import vehicle8 from "../assets/vehicle8.png";

export const vehiclePackages = [
    {
        "id": 1,
        "image": vehicle1,
        "package_name": "Mahakaleshwar Jyotirlinga Darshan",
        "price_per_person": 3200,
        "discount": {
            "original_price": 3700,
            "discount_amount": 500,
            "discount_percentage": 13
        },
        "duration": "1 Day",
        "meals_included": ["Lunch"],
        "starting_point": "Ujjain Railway Station",
        "ending_point": "Ujjain Railway Station",
        "destinations_covered": ["Mahakaleshwar Temple", "Harshiddhi Temple", "Ram Ghat"],
        "km": 50,
        "luggage": "2 medium bags",
        "total_person_capacity": 4,
        "inclusions": [
            "Local transport by AC vehicle.",
            "Darshan assistance at Mahakaleshwar Temple.",
            "Lunch at a local restaurant.",
            "All applicable taxes."
        ],
        "exclusions": [
            "Pooja charges, Rudrabhishek, or Bhasma Aarti ticket.",
            "Personal expenses.",
            "Hotel stay."
        ],
        "contact": {
            "phone": "+91-9999999991",
            "email": "ujjain@yatradarshan.com",
            "whatsapp": "https://api.whatsapp.com/send?phone=919999999991"
        },
        "booking_url": "https://www.ujjaintour.in/mahakaleshwar-darshan.html",
        "notes": [
            "Ideal for pilgrims with short time.",
            "Bhasma Aarti on request (advance booking)."
        ]
    },
    {
        "id": 2,
        "image": vehicle2,
        "package_name": "Ujjain-Omkareshwar Tour",
        "price_per_person": 6800,
        "discount": {
            "original_price": 7500,
            "discount_amount": 700,
            "discount_percentage": 9
        },
        "duration": "2 Days / 1 Night",
        "meals_included": ["Breakfast", "Dinner"],
        "starting_point": "Ujjain",
        "ending_point": "Ujjain",
        "destinations_covered": ["Mahakaleshwar", "Omkareshwar", "Mamleshwar", "Kshipra Ghat"],
        "km": 300,
        "luggage": "4 medium bags",
        "total_person_capacity": 6,
        "inclusions": [
            "AC vehicle transport.",
            "Hotel accommodation (standard).",
            "Meals as per plan.",
            "Temple darshan assistance."
        ],
        "exclusions": [
            "Personal puja materials.",
            "Boat ride at Omkareshwar.",
            "GST (5%)."
        ],
        "contact": {
            "phone": "+91-9999999992",
            "email": "support@ujjaintour.in",
            "whatsapp": "https://api.whatsapp.com/send?phone=919999999992"
        },
        "booking_url": "https://www.ujjaintour.in/ujjain-omkareshwar.html",
        "notes": [
            "2 Jyotirlingas in one trip.",
            "Best for religious groups."
        ]
    },
    {
        "id": 3,
        "image": vehicle3,
        "package_name": "Ujjain with Indore City Sightseeing",
        "price_per_person": 5200,
        "discount": {
            "original_price": 5800,
            "discount_amount": 600,
            "discount_percentage": 10
        },
        "duration": "2 Days / 1 Night",
        "meals_included": ["Breakfast"],
        "starting_point": "Ujjain",
        "ending_point": "Indore",
        "destinations_covered": ["Mahakaleshwar", "Harshiddhi Temple", "Rajwada Palace", "Khajrana Ganesh", "Chappan Dukan"],
        "km": 150,
        "luggage": "3 medium bags",
        "total_person_capacity": 5,
        "inclusions": [
            "AC vehicle transport.",
            "1 Night hotel stay in Ujjain.",
            "Breakfast included.",
            "Sightseeing with guide."
        ],
        "exclusions": [
            "Lunch/Dinner.",
            "Entry fees to monuments.",
            "GST extra."
        ],
        "contact": {
            "phone": "+91-9999999993",
            "email": "bookings@ujjaintour.in",
            "whatsapp": "https://api.whatsapp.com/send?phone=919999999993"
        },
        "booking_url": "https://www.ujjaintour.in/ujjain-indore-package.html",
        "notes": [
            "Best for family tours.",
            "Cultural + spiritual combo."
        ]
    },
    {
        "id": 4,
        "image": vehicle4,
        "package_name": "Ujjain Darshan with Night Stay",
        "price_per_person": 3999,
        "discount": {
            "original_price": 4499,
            "discount_amount": 500,
            "discount_percentage": 11
        },
        "duration": "2 Days / 1 Night",
        "meals_included": ["Breakfast"],
        "starting_point": "Ujjain",
        "ending_point": "Ujjain",
        "destinations_covered": ["Mahakaleshwar", "Ram Ghat", "Sandipani Ashram", "Mangalnath", "Kal Bhairav"],
        "km": 80,
        "luggage": "3 medium bags",
        "total_person_capacity": 4,
        "inclusions": [
            "1-night hotel accommodation.",
            "Sightseeing by private vehicle.",
            "Driver allowance and parking.",
            "All applicable taxes."
        ],
        "exclusions": [
            "Any personal expenses.",
            "Meals not mentioned.",
            "Extra sightseeing."
        ],
        "contact": {
            "phone": "+91-9999999994",
            "email": "help@ujjaintour.in",
            "whatsapp": "https://api.whatsapp.com/send?phone=919999999994"
        },
        "booking_url": "https://www.ujjaintour.in/night-stay-package.html",
        "notes": [
            "Perfect for weekend getaways.",
            "Early check-in subject to availability."
        ]
    },
    {
        "id": 5,
        "image": vehicle5,
        "package_name": "Mahakal Bhasma Aarti VIP Darshan",
        "price_per_person": 2500,
        "discount": {
            "original_price": 3000,
            "discount_amount": 500,
            "discount_percentage": 17
        },
        "duration": "Half Day",
        "meals_included": [],
        "starting_point": "Ujjain",
        "ending_point": "Ujjain",
        "destinations_covered": ["Mahakaleshwar Temple", "Bhasma Aarti"],
        "km": 30,
        "luggage": "1 small bag",
        "total_person_capacity": 3,
        "inclusions": [
            "Pickup & drop from hotel/station.",
            "VIP Darshan coordination for Bhasma Aarti.",
            "Guide assistance."
        ],
        "exclusions": [
            "Hotel stay.",
            "Any meals.",
            "Pooja samagri."
        ],
        "contact": {
            "phone": "+91-9999999995",
            "email": "bhasmaarti@ujjaintour.in",
            "whatsapp": "https://api.whatsapp.com/send?phone=919999999995"
        },
        "booking_url": "https://www.ujjaintour.in/mahakal-bhasma-aarti.html",
        "notes": [
            "Limited slots – book in advance.",
            "Original ID proof required for entry."
        ]
    },
    {
        "id": 6,
        "image": vehicle6,
        "package_name": "Ujjain Kalwa & Udaithan Tour",
        "price_per_person": 4500,
        "discount": {
            "original_price": 5000,
            "discount_amount": 500,
            "discount_percentage": 10
        },
        "duration": "1 Day",
        "meals_included": ["Lunch"],
        "starting_point": "Ujjain",
        "ending_point": "Ujjain",
        "destinations_covered": ["Mahakaleshwar", "Kalwa Hanuman", "Udaithan Hanuman"],
        "km": 120,
        "luggage": "2 medium bags",
        "total_person_capacity": 4,
        "inclusions": [
            "Travel in AC vehicle.",
            "Temple darshan support.",
            "Packed lunch."
        ],
        "exclusions": [
            "Any offerings or rituals.",
            "Camera or entry charges.",
            "Accommodation."
        ],
        "contact": {
            "phone": "+91-9999999996",
            "email": "templetour@ujjaintour.in",
            "whatsapp": "https://api.whatsapp.com/send?phone=919999999996"
        },
        "booking_url": "https://www.ujjaintour.in/kalwa-udaithan-tour.html",
        "notes": [
            "Peaceful offbeat tour.",
            "Suitable for spiritual seekers."
        ]
    },
    {
        "id": 7,
        "image": vehicle7,
        "package_name": "Ujjain Heritage Walk & Ghat Aarti",
        "price_per_person": 1800,
        "discount": {
            "original_price": 2200,
            "discount_amount": 400,
            "discount_percentage": 18
        },
        "duration": "Evening Tour",
        "meals_included": [],
        "starting_point": "Ram Ghat",
        "ending_point": "Mahakaleshwar",
        "destinations_covered": ["Ram Ghat", "Harsiddhi Temple", "Mahakaleshwar Corridor"],
        "km": 5,
        "luggage": "1 small bag",
        "total_person_capacity": 10,
        "inclusions": [
            "Certified heritage guide.",
            "Walk-through access to Mahakal corridor.",
            "Evening Ghat Aarti experience."
        ],
        "exclusions": [
            "Meals and transportation.",
            "Tips and donations."
        ],
        "contact": {
            "phone": "+91-9999999997",
            "email": "heritage@ujjaintour.in",
            "whatsapp": "https://api.whatsapp.com/send?phone=919999999997"
        },
        "booking_url": "https://www.ujjaintour.in/heritage-walk.html",
        "notes": [
            "Great for photography lovers.",
            "Evening slots only."
        ]
    },
    {
        "id": 8,
        "image": vehicle8,
        "package_name": "Ujjain Spiritual Retreat",
        "price_per_person": 8500,
        "discount": {
            "original_price": 9500,
            "discount_amount": 1000,
            "discount_percentage": 11
        },
        "duration": "3 Days / 2 Nights",
        "meals_included": ["Breakfast", "Dinner"],
        "starting_point": "Ujjain",
        "ending_point": "Ujjain",
        "destinations_covered": ["Mahakaleshwar", "Mangalnath", "Sandipani Ashram", "Kal Bhairav", "Ram Ghat", "Vedhshala"],
        "km": 100,
        "luggage": "4 medium bags",
        "total_person_capacity": 6,
        "inclusions": [
            "AC accommodation for 2 nights.",
            "Daily breakfast and dinner.",
            "Private AC transport for sightseeing.",
            "Rudrabhishek arrangements (on request)."
        ],
        "exclusions": [
            "Personal rituals.",
            "Lunch.",
            "Travel to/from Ujjain city."
        ],
        "contact": {
            "phone": "+91-9999999998",
            "email": "retreats@ujjaintour.in",
            "whatsapp": "https://api.whatsapp.com/send?phone=919999999998"
        },
        "booking_url": "https://www.ujjaintour.in/spiritual-retreat.html",
        "notes": [
            "Ideal for peace seekers and meditators.",
            "Group bookings get extra discount."
        ]
    }
];