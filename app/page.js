
import Contact from './components/Contact';
import HeroCarousel from './components/HeroCarousel';
import HelicopterPackages from './container/HelicopterPackages';
import Pooja from './container/Pooja';
import TourPackages from './container/MahakalTourPackages';
import VehiclesPackages from './container/VehiclesPackages';
import './globals.css';
import PlacesNearUjjain from './components/PlacesNearUjjain';

export default function Home() {
    return (
        <>
            <HeroCarousel />
            <HelicopterPackages />
            <TourPackages />
            <VehiclesPackages/>
            <Pooja/>
            <PlacesNearUjjain/>
            <Contact/>
        </>
    );
}
