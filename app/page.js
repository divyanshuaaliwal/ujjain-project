
import Contact from './components/Contact';
import HeroCarousel from './components/HeroCarousel';
import HelicopterPackages from './container/HelicopterPackages';
import Pooja from './container/Pooja';
import TourPackages from './container/MahakalTourPackages';
import './globals.css';

export default function Home() {
    return (
        <>
            <HeroCarousel />
            <HelicopterPackages />
            <TourPackages />
            <Pooja/>
            <Contact/>
        </>
    );
}
