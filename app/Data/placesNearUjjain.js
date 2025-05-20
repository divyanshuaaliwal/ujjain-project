
import Indore from '../assets/Indore.png';
import Omkareshwar from '../assets/omkareshwar.png';
import Mandu from '../assets/Mandu.png';
import KalkaMata from '../assets/KalkaMata.png';
import Sandipani from '../assets/Sandipani.png';
import Chintaman from '../assets/Chintaman.png';
import Maheshwar from '../assets/Maheshwar.png'; // If this represents Mahakaleshwar
import Bhopal from '../assets/Bhopal.png'; // Make sure you have this image in your assets

export const placesNearUjjain = [
    {
        id: 1,
        name: 'Maheshwar',
        location: 'Maheshwar',
        distance_from_ujjain_km: 130,
        description: 'Historic town on the banks of the Narmada River, known for Ahilya Fort and handloom sarees.',
        image: Maheshwar,
        tags: ['Fort', 'River', 'Cultural', 'Shopping'],
        best_time_to_visit: 'October to March'
    },
    {
        id: 2,
        name: 'Indore',
        location: 'Indore',
        distance_from_ujjain_km: 55,
        description: 'Commercial capital of Madhya Pradesh, known for food, shopping, and Rajwada Palace.',
        image: Indore,
        tags: ['City', 'Shopping', 'Palaces', 'Food'],
        best_time_to_visit: 'October to February'
    },
    {
        id: 3,
        name: 'Omkareshwar',
        location: 'Omkareshwar',
        distance_from_ujjain_km: 140,
        description: 'Sacred island shaped like the Hindu symbol "Om", famous for another Jyotirlinga temple.',
        image: Omkareshwar,
        tags: ['Temple', 'Island', 'Jyotirlinga'],
        best_time_to_visit: 'October to March'
    },
    {
        id: 4,
        name: 'Mandu',
        location: 'Mandu',
        distance_from_ujjain_km: 155,
        description: 'Historical fort city with Afghan architecture, lakes, and romantic stories like Rani Roopmati.',
        image: Mandu,
        tags: ['History', 'Fort', 'Architecture', 'Romantic'],
        best_time_to_visit: 'October to February'
    },
    {
        id: 5,
        name: 'Kalka Mata',
        location: 'Dewas',
        distance_from_ujjain_km: 35,
        description: 'Hilltop temple dedicated to Goddess Kalka, offering beautiful city views.',
        image: KalkaMata,
        tags: ['Temple', 'Hilltop', 'Viewpoint'],
        best_time_to_visit: 'All year round'
    },
    {
        id: 6,
        name: 'Sandipani Ashram',
        location: 'Ujjain',
        distance_from_ujjain_km: 2,
        description: 'Ancient Gurukul where Lord Krishna, Balarama, and Sudama studied.',
        image: Sandipani,
        tags: ['Ashram', 'Spiritual', 'Mythology'],
        best_time_to_visit: 'October to March'
    },
    {
        id: 7,
        name: 'Chintaman Ganesh',
        location: 'Ujjain',
        distance_from_ujjain_km: 7,
        description: 'Ancient temple dedicated to Lord Ganesha, known for solving worries (chinta).',
        image: Chintaman,
        tags: ['Temple', 'Peaceful', 'Ganesha'],
        best_time_to_visit: 'All year round'
    },
    {
        id: 8,
        name: 'Bhopal',
        location: 'Bhopal',
        distance_from_ujjain_km: 190,
        description: 'The capital city of Madhya Pradesh, famous for its lakes, Bharat Bhavan, and rich Nawabi heritage.',
        image: Bhopal,
        tags: ['City', 'Lakes', 'Museums', 'Heritage'],
        best_time_to_visit: 'October to February'
    }
];
