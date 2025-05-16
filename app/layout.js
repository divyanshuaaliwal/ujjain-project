import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import HeroCarousel from './components/HeroCarousel';

import './globals.css';

export const metadata = {
    title: 'Ujjain Mahakal',
    description: 'Spiritual Tour Website',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
