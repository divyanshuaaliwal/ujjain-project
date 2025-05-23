import vehicle1 from "../assets/vehicle1.png";
import vehicle2 from "../assets/vehicle2.png";
import vehicle3 from "../assets/vehicle3.png";
import vehicle4 from "../assets/vehicle4.png";
import vehicle5 from "../assets/vehicle5.png";
import vehicle6 from "../assets/vehicle6.png";
import vehicle7 from "../assets/vehicle7.png";
import vehicle8 from "../assets/vehicle8.png";
// import interior1 from "../assets/interior1.png";
// import seats1 from "../assets/seats1.png";
// import car1 from "../assets/car1.png";
// import angle1 from "../assets/angle1.png";
// import interior2 from "../assets/interior2.png";
// import seats2 from "../assets/seats2.png";
// import car2 from "../assets/car2.png";
// import angle2 from "../assets/angle2.png";
// import interior3 from "../assets/interior3.png";
// import seats3 from "../assets/seats3.png";
// import car3 from "../assets/car3.png";
// import angle3 from "../assets/angle3.png";
// import interior4 from "../assets/interior4.png";
// import seats4 from "../assets/seats4.png";
// import car4 from "../assets/car4.png";
// import angle4 from "../assets/angle4.png";
// import interior5 from "../assets/interior5.png";
// import seats5 from "../assets/seats5.png";
// import car5 from "../assets/car5.png";
// import angle5 from "../assets/angle5.png";
// import interior6 from "../assets/interior6.png";
// import seats6 from "../assets/seats6.png";
// import car6 from "../assets/car6.png";
// import angle6 from "../assets/angle6.png";
// import interior7 from "../assets/interior7.png";
// import seats7 from "../assets/seats7.png";
// import car7 from "../assets/car7.png";
// import angle7 from "../assets/angle7.png";
// import interior8 from "../assets/interior8.png";
// import seats8 from "../assets/seats8.png";
// import car8 from "../assets/car8.png";
// import angle8 from "../assets/angle8.png";

export const vehiclePackages =[
    {
      id: 1,
      image: vehicle1,
      //images: [interior1, seats1, car1, angle1],
      vehicle_type: "Tempo Traveller",
      package_name: "12-Seater Tempo Traveller AC Rental",
      overview: "Spacious and comfortable AC tempo traveller perfect for group outings and family trips with ample legroom and luggage space.",
      price_per_person: 3200,
      discount: {
        original_price: 3700,
        discount_amount: 500,
        discount_percentage: 13
      },
      duration: "Per Day",
      features: ["AC", "Comfortable Seats", "Ample Legroom"],
      starting_point: "Ujjain City Limits",
      ending_point: "Ujjain City Limits",
      specifications: {
        fuel_type: "Diesel",
        transmission: "Manual",
        engine: "2.5L Turbocharged",
        power: "100 bhp @ 3500 rpm",
        torque: "250 Nm @ 1500-2500 rpm",
        fuel_tank_capacity: "60 liters",
        seating_capacity: "12 adults",
        boot_space: "300 liters",
        airbags: "Driver only",
        abs: "Yes",
        wheel_type: "Steel wheels with covers",
        ac_type: "Dual zone AC",
        entertainment: "FM radio with USB",
        suspension: "Independent front, leaf spring rear"
      },
      km: "100 km included (extra ₹15/km)",
      luggage: "2 medium bags",
      total_person_capacity: 12,
      inclusions: [
        "Professional driver",
        "Fuel charges for included kilometers",
        "Toll taxes and parking",
        "All applicable taxes"
      ],
      exclusions: [
        "Night allowance (₹500 extra)",
        "Interstate permits if applicable",
        "Driver accommodation"
      ],
      contact: {
        phone: "+91-9999999991",
        email: "rentals@ujjaintour.in",
        whatsapp: "https://api.whatsapp.com/send?phone=919999999991"
      },
      booking_url: "https://www.ujjaintour.in/tempo-traveller-rental.html",
      notes: [
        "Ideal for group travel",
        "Child seats available on request"
      ],
      rating: 4.2
    },
    {
      id: 2,
      image: vehicle2,
      //images: [interior2, seats2, car2, angle2],
      vehicle_type: "Toyota Innova Crysta",
      package_name: "Premium Innova Crysta 7-Seater Rental",
      overview: "Luxurious and powerful premium SUV with automatic transmission and premium features for a comfortable travel experience.",
      price_per_person: 6800,
      discount: {
        original_price: 7500,
        discount_amount: 700,
        discount_percentage: 9
      },
      duration: "Per Day",
      features: ["Automatic Transmission", "Leather Seats", "Touchscreen Infotainment"],
      starting_point: "Ujjain",
      ending_point: "Ujjain",
      specifications: {
        fuel_type: "Diesel",
        transmission: "Automatic",
        engine: "2.4L GD Series",
        power: "150 bhp @ 3400 rpm",
        torque: "360 Nm @ 1400-2800 rpm",
        fuel_tank_capacity: "55 liters",
        seating_capacity: "7 adults",
        boot_space: "300 liters with third row up",
        airbags: "Dual front, side and curtain",
        abs: "Yes with EBD",
        wheel_type: "Alloy wheels",
        ac_type: "Automatic climate control",
        entertainment: "8-inch touchscreen with Android Auto/Apple CarPlay",
        suspension: "Independent front, coil spring rear",
        ground_clearance: "207 mm",
        braking_system: "Disc front, drum rear"
      },
      km: "200 km included (extra ₹18/km)",
      luggage: "4 medium bags",
      total_person_capacity: 6,
      inclusions: [
        "Experienced chauffeur",
        "Complimentary water bottles",
        "24/7 road assistance",
        "Insurance coverage"
      ],
      exclusions: [
        "Airport pickup charges if applicable",
        "Overtime charges beyond 10 hours",
        "State tax if crossing borders"
      ],
      contact: {
        phone: "+91-9999999992",
        email: "support@ujjaintour.in",
        whatsapp: "https://api.whatsapp.com/send?phone=919999999992"
      },
      booking_url: "https://www.ujjaintour.in/innova-rental.html",
      notes: [
        "Most popular premium rental option",
        "GPS navigation system included"
      ],
      rating: 4.7
    },
    {
      id: 3,
      image: vehicle3,
      //images: [interior3, seats3, car3, angle3],
      vehicle_type: "Maruti Swift Dzire",
      package_name: "Economy Sedan Rental (Swift Dzire)",
      overview: "Budget-friendly compact sedan offering great fuel efficiency and maneuverability for city travel and short trips.",
      price_per_person: 5200,
      discount: {
        original_price: 5800,
        discount_amount: 600,
        discount_percentage: 10
      },
      duration: "Per Day",
      features: ["AC", "Fuel Efficient", "Compact Size"],
      starting_point: "Ujjain",
      ending_point: "Anywhere in Madhya Pradesh",
      specifications: {
        fuel_type: "Petrol",
        transmission: "Manual",
        engine: "1.2L K-Series",
        power: "82 bhp @ 6000 rpm",
        torque: "113 Nm @ 4200 rpm",
        fuel_tank_capacity: "37 liters",
        mileage: "22 kmpl (city), 28 kmpl (highway)",
        seating_capacity: "5 adults",
        boot_space: "378 liters",
        airbags: "Dual front",
        abs: "Yes",
        wheel_type: "Steel wheels with covers",
        ac_type: "Manual AC",
        entertainment: "Smartplay infotainment system",
        suspension: "McPherson strut front, torsion beam rear",
        ground_clearance: "170 mm",
        turning_radius: "4.8 meters"
      },
      km: "150 km included (extra ₹12/km)",
      luggage: "2 medium bags",
      total_person_capacity: 4,
      inclusions: [
        "Skilled driver",
        "Basic insurance",
        "24/7 customer support",
        "First aid kit"
      ],
      exclusions: [
        "Night charges (10pm-6am)",
        "Additional driver fees",
        "Damage protection waiver"
      ],
      contact: {
        phone: "+91-9999999993",
        email: "bookings@ujjaintour.in",
        whatsapp: "https://api.whatsapp.com/send?phone=919999999993"
      },
      booking_url: "https://www.ujjaintour.in/sedan-rental.html",
      notes: [
        "Best for budget travelers",
        "Easy maneuverability in city traffic"
      ],
      rating: 4.0
    },
    {
      id: 4,
      image: vehicle4,
      //images: [interior4, seats4, car4, angle4],
      vehicle_type: "Mahindra Scorpio",
      package_name: "SUV Rental (Scorpio S11)",
      overview: "Rugged and powerful SUV with 4WD capability, perfect for adventurous trips and rough terrain travel.",
      price_per_person: 3999,
      discount: {
        original_price: 4499,
        discount_amount: 500,
        discount_percentage: 11
      },
      duration: "Per Day",
      features: ["4WD Capability", "Sunroof", "Premium Audio"],
      starting_point: "Ujjain",
      ending_point: "Ujjain",
      specifications: {
        fuel_type: "Diesel",
        transmission: "Manual",
        engine: "2.2L mHawk",
        power: "140 bhp @ 3750 rpm",
        torque: "320 Nm @ 1600-2800 rpm",
        fuel_tank_capacity: "60 liters",
        mileage: "15 kmpl (city), 19 kmpl (highway)",
        seating_capacity: "7 adults",
        boot_space: "240 liters with third row up",
        airbags: "Dual front",
        abs: "Yes with EBD",
        wheel_type: "Alloy wheels",
        ac_type: "Automatic climate control",
        entertainment: "7-inch touchscreen with navigation",
        suspension: "Double wishbone front, multi-link rear",
        ground_clearance: "209 mm",
        wading_depth: "550 mm",
        approach_angle: "36 degrees",
        departure_angle: "24 degrees"
      },
      km: "120 km included (extra ₹16/km)",
      luggage: "3 medium bags",
      total_person_capacity: 7,
      inclusions: [
        "Professional driver",
        "Off-road assistance",
        "Child seat option",
        "Roadside emergency kit"
      ],
      exclusions: [
        "Hill station charges if applicable",
        "Additional mileage beyond package",
        "Damage security deposit"
      ],
      contact: {
        phone: "+91-9999999994",
        email: "help@ujjaintour.in",
        whatsapp: "https://api.whatsapp.com/send?phone=919999999994"
      },
      booking_url: "https://www.ujjaintour.in/suv-rental.html",
      notes: [
        "Perfect for adventurous trips",
        "High ground clearance for rough terrain"
      ],
      rating: 4.3
    },
    {
      id: 5,
      image: vehicle5,
      //images: [interior5, seats5, car5, angle5],
      vehicle_type: "Force Traveller",
      package_name: "20-Seater Mini Bus Rental",
      overview: "Large capacity mini bus with comfortable seating and PA system, ideal for big groups, events, and pilgr//images.",
      price_per_person: 2500,
      discount: {
        original_price: 3000,
        discount_amount: 500,
        discount_percentage: 17
      },
      duration: "Per Day",
      features: ["AC", "PA System", "Comfortable Seating"],
      starting_point: "Ujjain",
      ending_point: "Ujjain",
      specifications: {
        fuel_type: "Diesel",
        transmission: "Manual",
        engine: "3.0L CRDe",
        power: "115 bhp @ 2800 rpm",
        torque: "300 Nm @ 1400-2200 rpm",
        fuel_tank_capacity: "70 liters",
        mileage: "10 kmpl (city), 12 kmpl (highway)",
        seating_capacity: "20 adults",
        luggage_space: "Under seat storage",
        airbags: "Driver only",
        abs: "Yes",
        wheel_type: "Steel wheels",
        ac_type: "Roof-mounted AC",
        entertainment: "PA system with microphone",
        suspension: "Parabolic leaf springs",
        braking_system: "Hydraulic brakes with vacuum booster",
        body_type: "Semi-monocoque",
        step_height: "400 mm",
        door_type: "Sliding side door"
      },
      km: "80 km included (extra ₹20/km)",
      luggage: "1 small bag",
      total_person_capacity: 20,
      inclusions: [
        "Experienced bus driver",
        "Public address system",
        "First aid facilities",
        "Seat belts for all passengers"
      ],
      exclusions: [
        "Guide charges if required",
        "Entry fees at monuments",
        "State border permits"
      ],
      contact: {
        phone: "+91-9999999995",
        email: "busrental@ujjaintour.in",
        whatsapp: "https://api.whatsapp.com/send?phone=919999999995"
      },
      booking_url: "https://www.ujjaintour.in/minibus-rental.html",
      notes: [
        "Ideal for large groups and events",
        "Ample storage space underneath"
      ],
      rating: 4.1
    },
    {
      id: 6,
      image: vehicle6,
      //images: [interior6, seats6, car6, angle6],
      vehicle_type: "Toyota Eeco",
      package_name: "6-Seater Eeco Car Rental",
      overview: "Economical people mover with spacious interior, perfect for short distance travel with small groups.",
      price_per_person: 4500,
      discount: {
        original_price: 5000,
        discount_amount: 500,
        discount_percentage: 10
      },
      duration: "Per Day",
      features: ["AC", "Spacious Interior", "Economical"],
      starting_point: "Ujjain",
      ending_point: "Ujjain",
      specifications: {
        fuel_type: "Petrol",
        transmission: "Manual",
        engine: "1.5L 4-cylinder",
        power: "73 bhp @ 5600 rpm",
        torque: "104 Nm @ 3000 rpm",
        fuel_tank_capacity: "40 liters",
        mileage: "16 kmpl (city), 20 kmpl (highway)",
        seating_capacity: "6 adults",
        boot_space: "With all seats up: 135 liters",
        airbags: "None",
        abs: "No",
        wheel_type: "Steel wheels with covers",
        ac_type: "Manual AC",
        entertainment: "None (provision for aftermarket)",
        suspension: "McPherson strut front, leaf spring rear",
        ground_clearance: "180 mm",
        turning_radius: "4.7 meters",
        body_type: "MPV",
        sliding_doors: "Yes on one side"
      },
      km: "100 km included (extra ₹10/km)",
      luggage: "2 medium bags",
      total_person_capacity: 6,
      inclusions: [
        "Professional driver",
        "Basic maintenance kit",
        "Standard insurance",
        "24/7 support"
      ],
      exclusions: [
        "Waiting charges beyond 1 hour",
        "Additional pickup/drop locations",
        "Damage protection"
      ],
      contact: {
        phone: "+91-9999999996",
        email: "eecorental@ujjaintour.in",
        whatsapp: "https://api.whatsapp.com/send?phone=919999999996"
      },
      booking_url: "https://www.ujjaintour.in/eeco-rental.html",
      notes: [
        "Budget-friendly people mover",
        "Great for short distance travel"
      ],
      rating: 3.8
    },
    {
      id: 7,
      image: vehicle7,
      //images: [interior7, seats7, car7, angle7],
      vehicle_type: "Tata Nexon EV",
      package_name: "Electric SUV Rental (Nexon EV)",
      overview: "Environmentally friendly electric SUV offering silent operation, modern features, and zero emissions for eco-conscious travelers.",
      price_per_person: 1800,
      discount: {
        original_price: 2200,
        discount_amount: 400,
        discount_percentage: 18
      },
      duration: "8 Hours Package",
      features: ["Zero Emission", "Fast Charging", "Sunroof"],
      starting_point: "Ujjain City Center",
      ending_point: "Ujjain City Center",
      specifications: {
        fuel_type: "Electric",
        transmission: "Automatic",
        range: "300 km per charge",
        battery_capacity: "30.2 kWh",
        motor_power: "129 PS",
        torque: "245 Nm",
        charging_time: "60 mins (fast charge), 8-9 hours (regular charge)",
        seating_capacity: "5 adults",
        boot_space: "350 liters",
        airbags: "Dual front",
        abs: "Yes with EBD",
        wheel_type: "Alloy wheels",
        ac_type: "Automatic climate control",
        entertainment: "7-inch touchscreen with Android Auto/Apple CarPlay",
        suspension: "Independent McPherson strut front, twist beam rear",
        ground_clearance: "205 mm",
        regenerative_braking: "Yes",
        drive_modes: "Drive, Sport and Eco modes"
      },
      km: "100 km included (extra ₹8/km)",
      luggage: "1 small bag",
      total_person_capacity: 5,
      inclusions: [
        "Eco-friendly transport",
        "Fast charging support",
        "Roadside assistance",
        "Navigation system"
      ],
      exclusions: [
        "Charging station access fees",
        "Out-of-city travel",
        "Late return penalties"
      ],
      contact: {
        phone: "+91-9999999997",
        email: "evrental@ujjaintour.in",
        whatsapp: "https://api.whatsapp.com/send?phone=919999999997"
      },
      booking_url: "https://www.ujjaintour.in/ev-rental.html",
      notes: [
        "Environmentally conscious choice",
        "Silent and smooth driving experience"
      ],
      rating: 4.5
    },
    {
      id: 8,
      image: vehicle8,
      //images: [interior8, seats8, car8, angle8],
      vehicle_type: "Volvo Luxury Coach",
      package_name: "24-Seater Luxury Coach Rental",
      overview: "Premium luxury coach with recliner seats, onboard entertainment and WiFi, perfect for corporate events and luxury group travel.",
      price_per_person: 8500,
      discount: {
        original_price: 9500,
        discount_amount: 1000,
        discount_percentage: 11
      },
      duration: "Per Day",
      features: ["Recliner Seats", "Onboard Entertainment", "WiFi"],
      starting_point: "Ujjain",
      ending_point: "Ujjain",
      specifications: {
        fuel_type: "Diesel",
        transmission: "Automatic",
        engine: "5.0L Turbocharged",
        power: "250 bhp @ 2200 rpm",
        torque: "950 Nm @ 1200-1700 rpm",
        fuel_tank_capacity: "200 liters",
        mileage: "5 kmpl (city), 7 kmpl (highway)",
        seating_capacity: "24 adults",
        luggage_space: "External luggage compartments",
        airbags: "Driver only",
        abs: "Yes with ASR",
        wheel_type: "Alloy wheels",
        ac_type: "Dual zone automatic climate control",
        entertainment: "Individual LCD screens with headphones",
        suspension: "Air suspension with kneeling feature",
        braking_system: "Disc brakes all around with ABS",
        body_type: "Full monocoque construction",
        amenities: "Onboard toilet, refrigerator, reading lights",
        usb_ports: "Individual charging ports per seat",
        seat_type: "Premium leather recliners with footrests"
      },
      km: "150 km included (extra ₹25/km)",
      luggage: "4 medium bags",
      total_person_capacity: 24,
      inclusions: [
        "Professional coach driver",
        "Onboard attendant",
        "USB charging ports",
        "Complimentary refreshments"
      ],
      exclusions: [
        "Interstate travel permits",
        "Overnight parking fees",
        "Special event surcharges"
      ],
      contact: {
        phone: "+91-9999999998",
        email: "luxurycoach@ujjaintour.in",
        whatsapp: "https://api.whatsapp.com/send?phone=919999999998"
      },
      booking_url: "https://www.ujjaintour.in/luxury-coach.html",
      notes: [
        "Premium travel experience",
        "Ideal for corporate events and weddings"
      ],
      rating: 4.8
    }
];