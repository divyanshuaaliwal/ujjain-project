// app/bhasm-aarti/page.js
'use client';
import { useEffect, useState, useRef } from 'react';
import styles from './page.module.css';

export default function BhasmAarti() {
    
    const [isVisible, setIsVisible] = useState({
        hero: false,
        info: false,
        ritual: false,
        video: false,
        gallery: false,
        testimonials: false,
        faq: false,
    });

    const sectionRefs = {
        hero: useRef(null),
        info: useRef(null),
        ritual: useRef(null),
        video: useRef(null),
        gallery: useRef(null),
        testimonials: useRef(null),
        faq: useRef(null),
    };

    useEffect(() => {
        const observers = {};

        Object.keys(sectionRefs).forEach(section => {
            if (sectionRefs[section].current) {
                observers[section] = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setIsVisible(prev => ({ ...prev, [section]: true }));
                        }
                    },
                    { threshold: 0.1 }
                );

                observers[section].observe(sectionRefs[section].current);
            }
        });

        return () => {
            Object.values(observers).forEach(observer => observer.disconnect());
        };
    }, []);

    const [activeTab, setActiveTab] = useState('history');

    const [currentSlide, setCurrentSlide] = useState(0);
    const galleryImages = [
        { src: '/mahakal-1.jpg', alt: 'Mahakaleshwar Temple at night' },
        { src: '/bhasm-aarti-1.jpg', alt: 'Priests performing Bhasm Aarti' },
        { src: '/mahakal-2.jpg', alt: 'Mahakaleshwar Temple crowd' },
        { src: '/bhasm-aarti-2.jpg', alt: 'Sacred ash ritual during Bhasm Aarti' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [galleryImages.length]);

    const testimonials = [
        {
            name: "Rajesh Sharma",
            location: "Delhi",
            text: "Witnessing the Bhasm Aarti was a life-changing spiritual experience. The energy in the temple during the ritual is simply divine."
        },
        {
            name: "Priya Agarwal",
            location: "Mumbai",
            text: "The early morning ritual is truly worth waking up for. The atmosphere filled with vedic chants and the sacred ash ceremony is mesmerizing."
        },
        {
            name: "Amit Patel",
            location: "Ahmedabad",
            text: "I've visited many temples across India, but the Bhasm Aarti at Mahakaleshwar is uniquely powerful and spiritually enriching."
        }
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 7000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const faqData = [
        {
            question: "What is special about Bhasm Aarti?",
            answer: "Bhasm Aarti is unique because it's performed using sacred ash (bhasm) from cremation grounds, symbolizing Lord Shiva's connection with the cycle of creation and destruction. It's the only temple in the world where this specific ritual is performed."
        },
        {
            question: "How can I attend the Bhasm Aarti?",
            answer: "You need to book in advance through the official temple website or at the temple office. Due to limited space, only a certain number of devotees are allowed each day."
        },
        {
            question: "What should I wear to attend?",
            answer: "Traditional Indian attire is recommended. Men typically wear dhoti-kurta or kurta-pajama, while women wear sarees or salwar kameez. Modest clothing that covers shoulders and knees is required."
        },
        {
            question: "Why is it performed so early in the morning?",
            answer: "The ritual is performed during Brahma Muhurat (4:00 AM to 6:00 AM), considered the most auspicious time for spiritual practices according to Hindu tradition."
        }
    ];

    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className={styles.mainContainer}>
            {/* Hero Section */}
            <div
                ref={sectionRefs.hero}
                className={`${styles.heroSection} ${isVisible.hero ? styles.fadeIn : ''}`}
            >
                <div className={styles.heroOverlay}>
                    <h1 className={styles.heroHeading}>
                        <span className={styles.om}>ॐ</span> Bhasm Aarti
                    </h1>
                    <h2 className={styles.heroSubheading}>Shri Mahakaleshwar Temple, Ujjain</h2>
                    <div className={styles.divider}></div>
                    <p className={styles.heroText}>
                        Experience the divine ritual of cosmic transformation
                    </p>
                </div>
            </div>

            {/* Main Content Container */}
            <div className={styles.container}>
                {/* Introduction */}
                <section
                    ref={sectionRefs.info}
                    className={`${styles.section} ${isVisible.info ? styles.slideInRight : ''}`}
                >
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.icon}>🕉️</span> The Divine Ritual
                    </h2>
                    <p className={styles.description}>
                        The Bhasm Aarti is a rare and sacred ritual performed at the Shri Mahakaleshwar Jyotirlinga temple in Ujjain, Madhya Pradesh. It is one of the 12 Jyotirlinga shrines dedicated to Lord Shiva and the only temple in the world where this unique aarti is performed using sacred ash (bhasm).
                    </p>
                    <p className={styles.description}>
                        During this ritual, the Shivalinga is adorned with bhasm (ash from cremation grounds), which symbolizes the cycle of life and death over which Lord Shiva presides. The ceremony includes vedic chanting, the rhythmic sound of bells, and the application of the sacred ash on the lingam.
                    </p>

                    <div className={styles.tabContainer}>
                        <div className={styles.tabHeader}>
                            <button
                                className={`${styles.tabButton} ${activeTab === 'history' ? styles.activeTab : ''}`}
                                onClick={() => setActiveTab('history')}
                            >
                                History
                            </button>
                            <button
                                className={`${styles.tabButton} ${activeTab === 'significance' ? styles.activeTab : ''}`}
                                onClick={() => setActiveTab('significance')}
                            >
                                Significance
                            </button>
                            <button
                                className={`${styles.tabButton} ${activeTab === 'preparation' ? styles.activeTab : ''}`}
                                onClick={() => setActiveTab('preparation')}
                            >
                                Preparation
                            </button>
                        </div>

                        <div className={styles.tabContent}>
                            {activeTab === 'history' && (
                                <div className={styles.tabPane}>
                                    <h3>Ancient Origins</h3>
                                    <p>
                                        The tradition of Bhasm Aarti dates back to ancient times and is mentioned in several Puranic texts. The Mahakaleshwar temple itself has a history spanning over 2000 years, with mentions in the Puranas and ancient Sanskrit literature.
                                    </p>
                                    <p>
                                        According to legend, the lingam at Mahakaleshwar is swayambhu (self-manifested) and derives its power directly from the cosmic energy of Lord Shiva. The temple has been reconstructed several times throughout history after facing destruction from invaders.
                                    </p>
                                </div>
                            )}

                            {activeTab === 'significance' && (
                                <div className={styles.tabPane}>
                                    <h3>Spiritual Importance</h3>
                                    <p>
                                        The use of cremation ash (bhasm) symbolizes Lord Shiva's role as the destroyer in the Hindu trinity. It reminds devotees of the impermanence of physical existence and the eternal nature of the soul.
                                    </p>
                                    <p>
                                        Attending the Bhasm Aarti is believed to bestow spiritual enlightenment, freedom from the cycle of birth and death, and the blessing of Lord Mahakal. The early morning timing (Brahma Muhurat) is considered especially auspicious for spiritual practices.
                                    </p>
                                </div>
                            )}

                            {activeTab === 'preparation' && (
                                <div className={styles.tabPane}>
                                    <h3>Ritual Preparations</h3>
                                    <p>
                                        The priests begin their preparations for the Bhasm Aarti several hours before dawn. They undergo purification rituals, prepare the sacred ash mixture, and arrange the various items needed for the ceremony including flowers, bilva leaves, incense, and lamps.
                                    </p>
                                    <p>
                                        The specific formulation of the sacred ash is prepared according to ancient Shaivite traditions, combining ash from ritual fires with various herbs and sanctified ingredients.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Ritual Details */}
                <section
                    ref={sectionRefs.ritual}
                    className={`${styles.section} ${isVisible.ritual ? styles.slideInLeft : ''}`}
                >
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.icon}>📅</span> Timings & Ritual Process
                    </h2>

                    <div className={styles.ritualsContainer}>
                        <div className={styles.ritualCard}>
                            <div className={styles.ritualIcon}>🕓</div>
                            <h3>Timings</h3>
                            <p>Performed daily during Brahma Muhurat (4:00 AM to 6:00 AM)</p>
                        </div>

                        <div className={styles.ritualCard}>
                            <div className={styles.ritualIcon}>🧘‍♂️</div>
                            <h3>Attendance</h3>
                            <p>Requires prior booking due to limited space in the sanctum</p>
                        </div>

                        <div className={styles.ritualCard}>
                            <div className={styles.ritualIcon}>👕</div>
                            <h3>Dress Code</h3>
                            <p>Traditional Indian attire recommended (dhoti/saree/kurta)</p>
                        </div>

                        <div className={styles.ritualCard}>
                            <div className={styles.ritualIcon}>🙏</div>
                            <h3>Process</h3>
                            <p>Includes mantras, abhishekam, ash application, and aarti</p>
                        </div>
                    </div>

                    <div className={styles.stepsContainer}>
                        <h3 className={styles.stepsHeading}>The Sacred Ceremony Steps</h3>
                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepNumber}>1</div>
                                <div className={styles.stepContent}>
                                    <h4>Purification</h4>
                                    <p>The ceremony begins with the purification of the sanctum sanctorum</p>
                                </div>
                            </div>

                            <div className={styles.step}>
                                <div className={styles.stepNumber}>2</div>
                                <div className={styles.stepContent}>
                                    <h4>Rudra Abhishek</h4>
                                    <p>The Shivalinga is bathed with various sacred substances</p>
                                </div>
                            </div>

                            <div className={styles.step}>
                                <div className={styles.stepNumber}>3</div>
                                <div className={styles.stepContent}>
                                    <h4>Bhasm Application</h4>
                                    <p>The sacred ash is applied to the lingam in a specific pattern</p>
                                </div>
                            </div>

                            <div className={styles.step}>
                                <div className={styles.stepNumber}>4</div>
                                <div className={styles.stepContent}>
                                    <h4>Shringar</h4>
                                    <p>The lingam is decorated with bilva leaves, flowers and ornaments</p>
                                </div>
                            </div>

                            <div className={styles.step}>
                                <div className={styles.stepNumber}>5</div>
                                <div className={styles.stepContent}>
                                    <h4>Aarti</h4>
                                    <p>The final worship with lamps, incense and vedic chants</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Video Section */}
                <section
                    ref={sectionRefs.video}
                    className={`${styles.section} ${isVisible.video ? styles.fadeIn : ''}`}
                >
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.icon}>🎥</span> Watch Bhasm Aarti Live
                    </h2>
                    <p className={styles.videoDescription}>
                        Experience the divine atmosphere of the Bhasm Aarti from anywhere in the world through live streaming. The temple broadcasts this sacred ritual daily.
                    </p>
                    <div className={styles.videoContainer}>
                        <iframe
                            className={styles.video}
                            src="https://www.youtube.com/embed/VIDEO_ID"
                            title="Bhasm Aarti Live from Mahakaleshwar Temple"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className={styles.videoNote}>
                        <p>
                            <span className={styles.noteIcon}>📝</span> The live streaming begins daily at 4:00 AM IST. You can also find recordings of previous ceremonies on the official temple YouTube channel.
                        </p>
                    </div>
                </section>

                {/* Gallery Section */}
                <section
                    ref={sectionRefs.gallery}
                    className={`${styles.section} ${isVisible.gallery ? styles.slideInRight : ''}`}
                >
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.icon}>📸</span> Gallery
                    </h2>
                    <div className={styles.galleryContainer}>
                        <div className={styles.slideshow}>
                            <div
                                className={styles.slideshowInner}
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {galleryImages.map((image, index) => (
                                    <div key={index} className={styles.slide}>
                                        <div className={styles.imageContainer}>
                                            {/* Using div instead of Image for placeholder */}
                                            <div className={styles.placeholderImage} title={image.alt}>
                                                {image.alt}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.slideDots}>
                            {galleryImages.map((_, index) => (
                                <button
                                    key={index}
                                    className={`${styles.slideDot} ${currentSlide === index ? styles.activeDot : ''}`}
                                    onClick={() => setCurrentSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section
                    ref={sectionRefs.testimonials}
                    className={`${styles.section} ${isVisible.testimonials ? styles.slideInLeft : ''}`}
                >
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.icon}>💬</span> Devotee Experiences
                    </h2>
                    <div className={styles.testimonialContainer}>
                        <div
                            className={styles.testimonialInner}
                            style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className={styles.testimonial}>
                                    <div className={styles.testimonialContent}>
                                        <div className={styles.quoteIcon}>"</div>
                                        <p className={styles.testimonialText}>{testimonial.text}</p>
                                        <div className={styles.testimonialAuthor}>
                                            <p className={styles.authorName}>{testimonial.name}</p>
                                            <p className={styles.authorLocation}>{testimonial.location}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.testimonialDots}>
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`${styles.testimonialDot} ${currentTestimonial === index ? styles.activeDot : ''}`}
                                    onClick={() => setCurrentTestimonial(index)}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section
                    ref={sectionRefs.faq}
                    className={`${styles.section} ${isVisible.faq ? styles.fadeIn : ''}`}
                >
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.icon}>❓</span> Frequently Asked Questions
                    </h2>
                    <div className={styles.faqContainer}>
                        {faqData.map((faq, index) => (
                            <div key={index} className={styles.faqItem}>
                                <button
                                    className={`${styles.faqQuestion} ${openFaq === index ? styles.faqOpen : ''}`}
                                    onClick={() => toggleFaq(index)}
                                >
                                    {faq.question}
                                    <span className={styles.faqToggle}>
                                        {openFaq === index ? '−' : '+'}
                                    </span>
                                </button>
                                <div
                                    className={`${styles.faqAnswer} ${openFaq === index ? styles.faqAnswerOpen : ''}`}
                                >
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Location Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionHeading}>
                        <span className={styles.icon}>📍</span> Location & Directions
                    </h2>
                    <div className={styles.locationContainer}>
                        <div className={styles.locationInfo}>
                            <p className={styles.addressLine}>
                                <strong>Shri Mahakaleshwar Temple</strong>
                            </p>
                            <p className={styles.addressLine}>Jaisinghpura, Ujjain</p>
                            <p className={styles.addressLine}>Madhya Pradesh, 456006, India</p>
                            <div className={styles.directionDetails}>
                                <div className={styles.directionItem}>
                                    <span className={styles.directionIcon}>✈️</span>
                                    <div>
                                        <p className={styles.directionTitle}>Nearest Airport</p>
                                        <p className={styles.directionContent}>Indore Airport (55 km)</p>
                                    </div>
                                </div>
                                <div className={styles.directionItem}>
                                    <span className={styles.directionIcon}>🚆</span>
                                    <div>
                                        <p className={styles.directionTitle}>Nearest Railway Station</p>
                                        <p className={styles.directionContent}>Ujjain Junction (3 km)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.mapPlaceholder}>
                            <div className={styles.mapImage}>Map Placeholder</div>
                            <p className={styles.mapNote}>Interactive map will display here</p>
                        </div>
                    </div>
                </section>

                {/* Important Information */}
                <section className={styles.infoSection}>
                    <div className={styles.infoCard}>
                        <h3 className={styles.infoCardTitle}>
                            <span className={styles.infoIcon}>📱</span> Contact Information
                        </h3>
                        <p>Temple Office: +91-XXXXX-XXXXX</p>
                        <p>Email: info@mahakaleshwar-ujjain.com</p>
                        <p>Website: www.mahakaleshwar-ujjain.com</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3 className={styles.infoCardTitle}>
                            <span className={styles.infoIcon}>🔔</span> Registration Process
                        </h3>
                        <p>Online booking opens 7 days in advance</p>
                        <p>Limited passes available each day</p>
                        <p>Identity verification required</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3 className={styles.infoCardTitle}>
                            <span className={styles.infoIcon}>📜</span> Temple Rules
                        </h3>
                        <p>Mobile phones and cameras prohibited inside</p>
                        <p>Maintain silence in temple premises</p>
                        <p>Follow the dress code strictly</p>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaHeading}>Plan Your Divine Journey</h2>
                        <p className={styles.ctaText}>Experience the spiritual energy of one of India's most sacred rituals</p>
                        <div className={styles.ctaButtons}>
                            <button className={styles.primaryButton}>Book Aarti Pass</button>
                            <button className={styles.secondaryButton}>View Temple Schedule</button>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerLogo}>
                        <h3>Shri Mahakaleshwar Temple</h3>
                        <p>Ujjain, Madhya Pradesh</p>
                    </div>
                    <div className={styles.footerLinks}>
                        <div className={styles.footerLinkColumn}>
                            <h4>Quick Links</h4>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Temple History</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className={styles.footerLinkColumn}>
                            <h4>Services</h4>
                            <ul>
                                <li>Online Darshan</li>
                                <li>Puja Booking</li>
                                <li>Donations</li>
                                <li>Accommodations</li>
                            </ul>
                        </div>
                        <div className={styles.footerLinkColumn}>
                            <h4>Connect</h4>
                            <ul>
                                <li>Facebook</li>
                                <li>YouTube</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p>© {new Date().getFullYear()} Shri Mahakaleshwar Temple Trust. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}