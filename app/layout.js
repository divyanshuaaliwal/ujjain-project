import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HelicopterPackages from './container/HelicopterPackages';
import './globals.css';
import TourPackages from './container/TourPackages';
import HeroCarousel from './components/HeroCarousel';

export const metadata = {
    title: 'Ujjain Project',
    description: 'Spiritual Tour Website',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                
                <Navbar />       {/* Navbar here */}
                <HeroCarousel/>
                {children}
                {/* <HelicopterPackages/> */}
                {/* <TourPackages/> */}
                <Footer/>
            </body>
        </html>
    );
}
