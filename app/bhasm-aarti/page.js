"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function BhasmAarti() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        countryCode: "+91",
        attendDate: "",
        attendTime: "04:00",
        participants: 1,
        accommodation: false,
        transportationNeeded: false,
        dietaryPreferences: [],
        poojaOffering: "basic",
        previousExperience: false,
        preferredLanguage: "English",
        howDidYouHear: "",
        specialRequest: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            if (name === "dietaryPreferences") {
                // Handle multi-select checkboxes
                const updatedPreferences = [...formData.dietaryPreferences];
                if (checked) {
                    updatedPreferences.push(value);
                } else {
                    const index = updatedPreferences.indexOf(value);
                    if (index > -1) {
                        updatedPreferences.splice(index, 1);
                    }
                }
                setFormData((prev) => ({
                    ...prev,
                    dietaryPreferences: updatedPreferences,
                }));
            } else {
                // Handle single checkboxes
                setFormData((prev) => ({
                    ...prev,
                    [name]: checked,
                }));
            }
        } else {
            // Handle other input types
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Here you would typically send this data to your backend
        alert("Registration submitted successfully!");
        setFormData({
            name: "",
            email: "",
            phone: "",
            countryCode: "+91",
            attendDate: "",
            attendTime: "04:00",
            participants: 1,
            accommodation: false,
            transportationNeeded: false,
            dietaryPreferences: [],
            poojaOffering: "basic",
            previousExperience: false,
            preferredLanguage: "English",
            howDidYouHear: "",
            specialRequest: "",
        });
    };

    return (
        <div className={styles.container}>
           
            <section className={styles.formSection}>
                <h2 className={styles.sectionTitle}>Register for Attendance</h2>
                <div className={styles.titleUnderline}></div>
                  <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>
                            Full Name <span className={styles.required}>*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={styles.input}
                            required
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>
                            Email Address <span className={styles.required}>*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={styles.input}
                            required
                            placeholder="your.email@example.com"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="phone" className={styles.label}>
                            Phone Number <span className={styles.required}>*</span>
                        </label>
                        <div className={styles.phoneInputContainer}>
                            <select
                                id="countryCode"
                                name="countryCode"
                                value={formData.countryCode}
                                onChange={handleChange}
                                className={styles.countryCode}
                            >
                                <option value="+91">+91 (India)</option>
                                <option value="+1">+1 (USA/Canada)</option>
                                <option value="+44">+44 (UK)</option>
                                <option value="+61">+61 (Australia)</option>
                                <option value="+65">+65 (Singapore)</option>
                                <option value="+971">+971 (UAE)</option>
                                <option value="+other">Other</option>
                            </select>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={styles.phoneInput}
                                required
                                placeholder="Enter your phone number"
                            />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="attendDate" className={styles.label}>
                            Preferred Date <span className={styles.required}>*</span>
                        </label>
                        <input
                            type="date"
                            id="attendDate"
                            name="attendDate"
                            value={formData.attendDate}
                            onChange={handleChange}
                            className={styles.input}
                            required
                            min={new Date().toISOString().split('T')[0]}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="attendTime" className={styles.label}>
                            Preferred Time <span className={styles.required}>*</span>
                        </label>
                        <select
                            id="attendTime"
                            name="attendTime"
                            value={formData.attendTime}
                            onChange={handleChange}
                            className={styles.select}
                            required
                        >
                            <option value="04:00">4:00 AM - Early Session</option>
                            <option value="04:30">4:30 AM - Main Session</option>
                            <option value="05:00">5:00 AM - Final Session</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="participants" className={styles.label}>
                            Number of Participants <span className={styles.required}>*</span>
                        </label>
                        <select
                            id="participants"
                            name="participants"
                            value={formData.participants}
                            onChange={handleChange}
                            className={styles.select}
                            required
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                <option key={num} value={num}>
                                    {num}
                                </option>
                            ))}
                            <option value="11">More than 10 (specify in special requests)</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="preferredLanguage" className={styles.label}>
                            Preferred Guide Language
                        </label>
                        <select
                            id="preferredLanguage"
                            name="preferredLanguage"
                            value={formData.preferredLanguage}
                            onChange={handleChange}
                            className={styles.select}
                        >
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                            <option value="Sanskrit">Sanskrit</option>
                            <option value="Tamil">Tamil</option>
                            <option value="Bengali">Bengali</option>
                            <option value="Marathi">Marathi</option>
                            <option value="Gujarati">Gujarati</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="poojaOffering" className={styles.label}>
                            Pooja Offering
                        </label>
                        <select
                            id="poojaOffering"
                            name="poojaOffering"
                            value={formData.poojaOffering}
                            onChange={handleChange}
                            className={styles.select}
                        >
                            <option value="basic">Basic (Flowers & Incense)</option>
                            <option value="standard">Standard (Basic + Fruits & Sweets)</option>
                            <option value="premium">Premium (Standard + Special Prasad)</option>
                            <option value="deluxe">Deluxe (Premium + Personalized Ritual)</option>
                        </select>
                    </div>

                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                        <label className={styles.label}>Additional Services</label>
                        <div className={styles.checkboxGroup}>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="accommodation"
                                    name="accommodation"
                                    checked={formData.accommodation}
                                    onChange={handleChange}
                                    className={styles.checkbox}
                                />
                                <label htmlFor="accommodation" className={styles.checkboxLabel}>
                                    Need accommodation nearby
                                </label>
                            </div>

                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="transportationNeeded"
                                    name="transportationNeeded"
                                    checked={formData.transportationNeeded}
                                    onChange={handleChange}
                                    className={styles.checkbox}
                                />
                                <label htmlFor="transportationNeeded" className={styles.checkboxLabel}>
                                    Need transportation to venue
                                </label>
                            </div>

                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="previousExperience"
                                    name="previousExperience"
                                    checked={formData.previousExperience}
                                    onChange={handleChange}
                                    className={styles.checkbox}
                                />
                                <label htmlFor="previousExperience" className={styles.checkboxLabel}>
                                    I have previously attended Bhasm Aarti
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                        <label className={styles.label}>Dietary Preferences (if meal included)</label>
                        <div className={styles.checkboxGroup}>
                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="vegetarian"
                                    name="dietaryPreferences"
                                    value="vegetarian"
                                    checked={formData.dietaryPreferences.includes("vegetarian")}
                                    onChange={handleChange}
                                    className={styles.checkbox}
                                />
                                <label htmlFor="vegetarian" className={styles.checkboxLabel}>
                                    Vegetarian
                                </label>
                            </div>

                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="vegan"
                                    name="dietaryPreferences"
                                    value="vegan"
                                    checked={formData.dietaryPreferences.includes("vegan")}
                                    onChange={handleChange}
                                    className={styles.checkbox}
                                />
                                <label htmlFor="vegan" className={styles.checkboxLabel}>
                                    Vegan
                                </label>
                            </div>

                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="glutenFree"
                                    name="dietaryPreferences"
                                    value="glutenFree"
                                    checked={formData.dietaryPreferences.includes("glutenFree")}
                                    onChange={handleChange}
                                    className={styles.checkbox}
                                />
                                <label htmlFor="glutenFree" className={styles.checkboxLabel}>
                                    Gluten-Free
                                </label>
                            </div>

                            <div className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id="sattvic"
                                    name="dietaryPreferences"
                                    value="sattvic"
                                    checked={formData.dietaryPreferences.includes("sattvic")}
                                    onChange={handleChange}
                                    className={styles.checkbox}
                                />
                                <label htmlFor="sattvic" className={styles.checkboxLabel}>
                                    Sattvic Diet
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                        <label htmlFor="howDidYouHear" className={styles.label}>
                            How did you hear about us?
                        </label>
                        <select
                            id="howDidYouHear"
                            name="howDidYouHear"
                            value={formData.howDidYouHear}
                            onChange={handleChange}
                            className={styles.select}
                        >
                            <option value="">Please select</option>
                            <option value="friend">Friend or Family</option>
                            <option value="social">Social Media</option>
                            <option value="search">Search Engine</option>
                            <option value="advertisement">Advertisement</option>
                            <option value="travel">Travel Agency</option>
                            <option value="previous">Previous Visit</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                        <label htmlFor="specialRequest" className={styles.label}>
                            Special Requests or Questions
                        </label>
                        <textarea
                            id="specialRequest"
                            name="specialRequest"
                            value={formData.specialRequest}
                            onChange={handleChange}
                            className={styles.textarea}
                            rows="4"
                            placeholder="Please share any specific requirements, questions, or additional information"
                        ></textarea>
                    </div>

                    <button type="submit" className={styles.submitButton}>
                        Register
                    </button>
                </form>
            </section>

            <section className={styles.infoSection}>
                <h2 className={styles.sectionTitle}>Important Information</h2>
                  <div className={styles.titleUnderline}></div>
                  <div className={styles.infoGrid}>
                    <div className={styles.infoCard}>
                        <h3>Timings</h3>
                        <p>The Bhasm Aarti is performed daily between 4:00 AM and 5:30 AM</p>
                    </div>
                    <div className={styles.infoCard}>
                        <h3>Dress Code</h3>
                        <p>Traditional Indian attire is preferred. Please dress modestly.</p>
                    </div>
                    <div className={styles.infoCard}>
                        <h3>Photography</h3>
                        <p>Photography is not permitted during the ceremony.</p>
                    </div>
                    <div className={styles.infoCard}>
                        <h3>Location</h3>
                        <p>Main Shiva Temple Complex, East Entrance</p>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <p>© {new Date().getFullYear()} Divine Bhasm Aarti Experience</p>
                <p>For more information, contact: info@bhasmaarti.org</p>
            </footer>
        </div>
    );
}