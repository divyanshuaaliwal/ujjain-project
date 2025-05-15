'use client';
import styles from './page.module.css';
import { useState } from 'react';

export default function PoojaRegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        poojaType: '',
        date: '',
        time: '',
        location: '',
        gotra: '',
        familyMembers: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        specialRequests: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!formData.phone.match(/^[6-9]\d{9}$/)) {
            newErrors.phone = 'Valid 10-digit phone number required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            newErrors.email = 'Valid email required';
        }

        if (!formData.poojaType.trim()) {
            newErrors.poojaType = 'Pooja type is required';
        }

        if (!formData.date.trim()) {
            newErrors.date = 'Date is required';
        }

        if (!formData.time.trim()) {
            newErrors.time = 'Time is required';
        }

        if (formData.pincode && !/^\d{6}$/.test(formData.pincode)) {
            newErrors.pincode = 'Valid 6-digit pincode required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);

            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                console.log('Pooja Registration Form Submitted:', formData);

                setIsSuccess(true);

                setTimeout(() => {
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        poojaType: '',
                        date: '',
                        time: '',
                        location: '',
                        gotra: '',
                        familyMembers: '',
                        address: '',
                        city: '',
                        state: '',
                        pincode: '',
                        specialRequests: ''
                    });
                    setIsSuccess(false);
                }, 3000);
            } catch (error) {
                console.error('Error submitting form:', error);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.formContainer}>
                <h1 className={styles.heading}>Pooja Registration Form</h1>
                <div className={styles.titleUnderline}></div>

                {isSuccess ? (
                    <div className={styles.successMessage}>
                        <svg className={styles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                            <circle className={styles.checkmarkCircle} cx="26" cy="26" r="25" fill="none" />
                            <path className={styles.checkmarkCheck} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                        </svg>
                        <h2>Thank you for registering!</h2>
                        <p>We've received your pooja registration details.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <section className={styles.section}>
                            <h2>Personal Information</h2>
                            <div className={styles.formGroup}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="name">Name*</label>
                                    <input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={errors.name ? styles.errorInput : ''}
                                    />
                                    {errors.name && <p className={styles.error}>{errors.name}</p>}
                                </div>

                                <div className={styles.inputGroup}>
                                    <label htmlFor="phone">Phone Number*</label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={errors.phone ? styles.errorInput : ''}
                                    />
                                    {errors.phone && <p className={styles.error}>{errors.phone}</p>}
                                </div>

                                <div className={styles.inputGroup}>
                                    <label htmlFor="email">Email Address*</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={errors.email ? styles.errorInput : ''}
                                    />
                                    {errors.email && <p className={styles.error}>{errors.email}</p>}
                                </div>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2>Pooja Details</h2>
                            <div className={styles.formGroup}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="poojaType">Pooja Type*</label>
                                    <input
                                        id="poojaType"
                                        name="poojaType"
                                        value={formData.poojaType}
                                        onChange={handleChange}
                                        className={errors.poojaType ? styles.errorInput : ''}
                                        placeholder="e.g., Ganesh Puja, Satyanarayan Puja"
                                    />
                                    {errors.poojaType && <p className={styles.error}>{errors.poojaType}</p>}
                                </div>

                                <div className={styles.inputGroup}>
                                    <label htmlFor="date">Date*</label>
                                    <input
                                        id="date"
                                        name="date"
                                        type="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className={errors.date ? styles.errorInput : ''}
                                    />
                                    {errors.date && <p className={styles.error}>{errors.date}</p>}
                                </div>

                                <div className={styles.inputGroup}>
                                    <label htmlFor="time">Time*</label>
                                    <input
                                        id="time"
                                        name="time"
                                        type="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        className={errors.time ? styles.errorInput : ''}
                                    />
                                    {errors.time && <p className={styles.error}>{errors.time}</p>}
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="location">Location</label>
                                    <input
                                        id="location"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder="Venue or Address"
                                    />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label htmlFor="gotra">Gotra</label>
                                    <input
                                        id="gotra"
                                        name="gotra"
                                        value={formData.gotra}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="familyMembers">Number of Family Members</label>
                                <input
                                    id="familyMembers"
                                    name="familyMembers"
                                    type="number"
                                    min="1"
                                    value={formData.familyMembers}
                                    onChange={handleChange}
                                />
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2>Address</h2>
                            <div className={styles.inputGroup}>
                                <label htmlFor="address">Full Address</label>
                                <textarea
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    rows={3}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="city">City</label>
                                    <input
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label htmlFor="state">State</label>
                                    <input
                                        id="state"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="pincode">Pincode</label>
                                    <input
                                        id="pincode"
                                        name="pincode"
                                        value={formData.pincode}
                                        onChange={handleChange}
                                        className={errors.pincode ? styles.errorInput : ''}
                                    />
                                    {errors.pincode && <p className={styles.error}>{errors.pincode}</p>}
                                </div>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2>Special Requests</h2>
                            <div className={styles.inputGroup}>
                                <label htmlFor="specialRequests">Additional Information</label>
                                <textarea
                                    id="specialRequests"
                                    name="specialRequests"
                                    value={formData.specialRequests}
                                    onChange={handleChange}
                                    rows={4}
                                />
                            </div>
                        </section>

                        <button
                            type="submit"
                            className={styles.submitButton}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Complete Registration'}
                        </button>

                        <p className={styles.requiredFields}>* Required fields</p>
                    </form>
                )}
            </div>
        </div>
    );
}
