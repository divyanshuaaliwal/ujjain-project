import Navbar from './components/Navbar';
// import './globals.css';

export const metadata = {
  title: 'Ujjain Project',
  description: 'Spiritual Tour Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />       {/* Navbar here */}
        {children}
      </body>
    </html>
  );
}
