// components/Footer.jsx
import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';  // Import regular CSS file

// Dummy navLinks data
const navLinks = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'About Us', url: '/about' },
  { id: 3, title: 'Darshan Booking', url: '/darshan-booking' },
  { id: 4, title: 'Gallery', url: '/gallery' },
  { id: 5, title: 'Contact', url: '/contact' },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* About */}
          <div className="footer-section">
            <h4 className="footer-title">Mahakaleshwar Guide</h4>
            <p className="footer-text">
              Your comprehensive guide to exploring and experiencing the divine Mahakaleshwar Temple in Ujjain.
            </p>
            <div className="footer-social-icons">
              <a href="#" aria-label="Facebook" className="footer-social-icon"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter" className="footer-social-icon"><Twitter size={20} /></a>
              <a href="#" aria-label="Instagram" className="footer-social-icon"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links-list">
              {navLinks.map(link => (
                <li key={link.id}>
                  <Link href={link.url} className="footer-link">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-contact-list">
              <li><MapPin size={18} className="footer-contact-icon" />Mahakaleshwar Temple, Ujjain, MP</li>
              <li><Phone size={18} className="footer-contact-icon" />+91 XXXXX XXXXX</li>
              <li><Mail size={18} className="footer-contact-icon" />info@mahakaleshwarguide.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h4 className="footer-title">Newsletter</h4>
            <p className="footer-text">Subscribe for updates on temple activities and events.</p>
            <form className="footer-form">
              <input type="email" placeholder="Your email address" className="footer-input" />
              <button type="submit" className="footer-button">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Mahakaleshwar Guide. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;