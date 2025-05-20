
import Contact from './components/Contact';
import HeroCarousel from './components/HeroCarousel';
import HelicopterPackages from './container/HelicopterPackages';
import PoojaBooking from './container/PoojaBooking';
import MahakalTourPackages from './container/MahakalTourPackages';
import VehiclesPackages from './container/VehiclesPackages';
import './globals.css';
import PlacesNearUjjain from './components/PlacesNearUjjain';
import ThingsToDoInUjjain from './container/ThingsToDoInUjjain';
import Awards from './container/Awards';

export default function Home() {
    return (
        <>
            <HeroCarousel />
            <HelicopterPackages />
            <MahakalTourPackages />
            <VehiclesPackages/>
            <PoojaBooking/>
            <ThingsToDoInUjjain/>
            <PlacesNearUjjain/>
            <Awards/>
            <Contact/>
        </>
    );
}
