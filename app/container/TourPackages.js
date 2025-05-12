import Link from 'next/link';
import "./TourPackages.css";

const TourPackages = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Suggested Mahakal Tour Packages</h1>
      </div>
      <div className="package-container">
        <div className="package">
          <div className="package-header">
            <span>Mahakaleshwar Darshan Express</span>
          </div>
          <div className="package-body">
            <h3>₹999 per person</h3>
            <p className="duration">Duration: 1 Day</p>
            <p>Includes:</p>
            <ul>
              <li>VIP Darshan Pass</li>
              <li>Rudrabhishek Puja</li>
              <li>Mandir Prasad</li>
              <li>Local Guide</li>
            </ul>
            <p>Experience the divine energy of Mahakaleshwar...</p>
          </div>
          <div className="package-footer">
            <Link className="book-btn" href="/book-now">
             Book Now
            </Link>
          </div>
        </div>

        <div className="package">
          <div className="package-header">
            <span>Mahakal Weekend Retreat Express</span>
          </div>
          <div className="package-body">
            <h3>₹2,499 per person</h3>
            <p className="duration">Duration: 2 Days / 1 Night</p>
            <p>Includes:</p>
            <ul>
              <li>3-star Hotel Stay</li>
              <li>VIP Darshan</li>
              <li>Evening Aarti Experience</li>
              <li>Complimentary Breakfast</li>
            </ul>
            <p>Perfect for weekend travellers...</p>
          </div>
          <div className="package-footer">
            <Link  className="book-btn" href="/book-now">
              Book Now
            </Link>
          </div>
        </div>

        <div className="package">
          <div className="package-header">
            <span>Mahakal + Omkareshwar Jyotirling Yatra</span>
          </div>
          <div className="package-body">
            <h3>₹5,999 per person</h3>
            <p className="duration">Duration: 3 Days / 2 Nights</p>
            <p>Includes:</p>
            <ul>
              <li>AC Cab Travel</li>
              <li>Hotel Stay (Ujjain + Omkareshwar)</li>
              <li>VIP Darshan at both Jyotirlings</li>
              <li>Puja Kit</li>
            </ul>
            <p>Cover two sacred Jyotirlings...</p>
          </div>
          <div className="package-footer">
            <Link className="book-btn" href="/book-now">
              Book Now
            </Link>
          </div>
        </div>

        <div className="package">
          <div className="package-header">
            <span>Ujjain Spiritual Trail</span>
          </div>
          <div className="package-body">
            <h3>₹9,999 per person</h3>
            <p className="duration">Duration: 5 Days / 4 Nights</p>
            <p>Includes:</p>
            <ul>
              <li>Mahakaleshwar, Omkareshwar, Kal Bhairav...</li>
              <li>Daily Puja and Spiritual Session</li>
              <li>Guide for each temple</li>
              <li>Comfortable stay & meals</li>
            </ul>
            <p>An immersive spiritual journey...</p>
          </div>
          <div className="package-footer">
            <Link className="book-btn" href="/book-now">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPackages;
