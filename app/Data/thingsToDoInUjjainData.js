import Mahakaleshwar_temple from "../assets/Mahakaleshwar_temple.png";
import RamGhat from "../assets/Ram_Ghat.png";
import KalBhairav from "../assets/Kal_Bhairav_Temple.png";
import JantarMantar from "../assets/Jantar_Mantar.png";
import MangalnathTemple from "../assets/Mangalnath_Temple.png";
import KaliadehPalace from "../assets/KaliaDeh_Palace.png"; // Make sure the file name matches exactly


export const attractions = [
    {
        id: 1,
        name: 'Mahakaleshwar Temple',
        description: 'One of the 12 Jyotirlingas in India, dedicated to Lord Shiva',
        image: Mahakaleshwar_temple,
        location: 'Jaisinghpura, Ujjain',
        timings: '4:00 AM - 11:00 PM',
        entryFee: 'Free',
        category: 'Temple',
        rating: 4.8,
        highlights: ['Jyotirlinga', 'Bhasma Aarti', 'Spiritual Vibes'],
    },
    {
        id: 2,
        name: 'Ram Ghat',
        description: 'Famous ghat on the banks of Shipra River where sacred rituals are performed',
        image: RamGhat,
        location: 'Near Mahakaleshwar Temple',
        timings: 'Open 24 hours',
        entryFee: 'Free',
        category: 'Ghat',
        rating: 4.6,
        highlights: ['Aarti Ceremony', 'Holy Baths', 'Religious Gatherings'],
    },
    {
        id: 3,
        name: 'Kal Bhairav Temple',
        description: 'Ancient temple dedicated to Kal Bhairav, the guardian deity of Ujjain',
        image: KalBhairav,
        location: 'Bharthari Hills, Ujjain',
        timings: '5:00 AM - 9:00 PM',
        entryFee: 'Free',
        category: 'Temple',
        rating: 4.7,
        highlights: ['Liquor Offering', 'Tantric Connection', 'Ancient Idol'],
    },
    {
        id: 4,
        name: 'Jantar Mantar',
        description: 'Historic astronomical observatory built by Maharaja Jai Singh II',
        image: JantarMantar,
        location: 'Near Vedh Shala Road, Ujjain',
        timings: '7:00 AM - 7:00 PM',
        entryFee: '₹10 (Indians), ₹50 (Foreigners)',
        category: 'Observatory',
        rating: 4.3,
        highlights: ['Sundial', 'Astrological Instruments', 'Educational Site'],
    },
    {
        id: 5,
        name: 'Mangalnath Temple',
        description: 'Temple dedicated to Mars (Mangal), considered the birthplace of Mars',
        image: MangalnathTemple,
        location: 'Mangalnath Road, Ujjain',
        timings: '6:00 AM - 9:00 PM',
        entryFee: 'Free',
        category: 'Temple',
        rating: 4.5,
        highlights: ['Planetary Worship', 'Astrological Relevance', 'Peaceful Environment'],
    },
    {
        id: 6,
        name: 'Kaliadeh Palace',
        description: 'Persian architecture palace located on the banks of Shipra River',
        image: KaliadehPalace,
        location: 'Kaliyadeh Road, Ujjain',
        timings: '9:00 AM - 6:00 PM',
        entryFee: '₹10',
        category: 'Palace',
        rating: 4.2,
        highlights: ['Historic Architecture', 'River View', 'Photography Spot'],
    },
];
