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
    },
    {
        id: 2,
        name: 'Ram Ghat',
        description: 'Famous ghat on the banks of Shipra River where sacred rituals are performed',
        image: RamGhat,
    },
    {
        id: 3,
        name: 'Kal Bhairav Temple',
        description: 'Ancient temple dedicated to Kal Bhairav, the guardian deity of Ujjain',
        image: KalBhairav,
    },
    {
        id: 4,
        name: 'Jantar Mantar',
        description: 'Historic astronomical observatory built by Maharaja Jai Singh II',
        image: JantarMantar,
    },
    {
        id: 5,
        name: 'Mangalnath Temple',
        description: 'Temple dedicated to Mars (Mangal), considered the birthplace of Mars',
        image: MangalnathTemple,
    },
    {
        id: 6,
        name: 'Kaliadeh Palace',
        description: 'Persian architecture palace located on the banks of Shipra River',
        image: KaliadehPalace,
    },
];
