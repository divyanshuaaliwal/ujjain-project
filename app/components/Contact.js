import styles from "./Contact.module.css";

export default function Contact() {
    return (
        <section className={styles.contactContainer}>
            <h2 className={styles.contactTitle}>Contact Us</h2>
            <p className={styles.contactSubtitle}>Get in touch for customized travel plans and temple visit assistance.</p>
            <div className={styles.contactContent}>
                <div className={styles.contactLeft}>
                    <div className={styles.contactInfo}>
                        <h3>📍 Address</h3>
                        <p>Mahakaleshwar Temple Road, Ujjain, Madhya Pradesh 456006</p>

                        <h3>📞 Phone</h3>
                        <p>+91 1234567890</p>

                        <h3>📧 Email</h3>
                        <p>info@mahakaleshwartemple.com</p>
                    </div>
                    <iframe
                        title="Google Map"
                        src="https://maps.google.com/maps?q=Mahakaleshwar%20Temple,%20Ujjain&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        className={styles.map}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>

                <form className={styles.contactForm}>
                    <label>
                        Name
                        <input type="text" placeholder="Your Name" required />
                    </label>
                    <label>
                        Email
                        <input type="email" placeholder="Your Email" required />
                    </label>
                    <label>
                        Phone
                        <input type="tel" placeholder="Your Phone Number" />
                    </label>
                    <label>
                        Subject
                        <input type="text" placeholder="Subject" />
                    </label>
                    <label>
                        Message
                        <textarea rows="5" placeholder="Your Message"></textarea>
                    </label>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
}
