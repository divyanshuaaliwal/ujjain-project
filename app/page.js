
import Contact from './components/Contact';
import HeroCarousel from './components/HeroCarousel';
import HelicopterPackages from './container/HelicopterPackages';
import TourPackages from './container/TourPackages';
import './globals.css';

export default function Home() {
    return (
        <div>
            <HeroCarousel />
            <HelicopterPackages />
            <TourPackages />
            <Contact/>
        </div>
    );
}
