'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function PayOnline() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        amount: '',
        purpose: 'darshan',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        // Clear error on change
        setErrors({
            ...errors,
            [e.target.name]: '',
        });
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.amount || Number(formData.amount) <= 0) newErrors.amount = 'Valid amount required';
        if (!formData.purpose) newErrors.purpose = 'Purpose is required';

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // 🎯 Create form object
        const paymentInfo = {
            name: formData.name.trim(),
            email: formData.email.trim(),
            amount: Number(formData.amount),
            purpose: formData.purpose,
        };

        console.log('Payment Info:', paymentInfo);

        // ✅ Integrate payment API here (Razorpay, Stripe, etc.)
        alert('Payment process starting... (mock)');
    };

    return (
        <div className={styles.parent}>

            <div className={styles.container}>
                <h1 className={styles.contactTitle}>Pay Online </h1>
                  <div className={styles.titleUnderline}></div>
                <p className={styles.description}>
                    Make secure online payments for darshan booking, donations, or services.
                </p>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Name:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Email:</label>
                        <input
                            className={styles.input}
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Amount (INR):</label>
                        <input
                            className={styles.input}
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                        />
                        {errors.amount && <span style={{ color: 'red' }}>{errors.amount}</span>}
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Payment Purpose:</label>
                        <select
                            className={styles.select}
                            name="purpose"
                            value={formData.purpose}
                            onChange={handleChange}
                        >
                            <option value="darshan">Darshan Booking</option>
                            <option value="donation">Donation</option>
                            <option value="puja">Puja Services</option>
                        </select>
                        {errors.purpose && <span style={{ color: 'red' }}>{errors.purpose}</span>}
                    </div>

                    <button className={styles.button} type="submit">Proceed to Pay</button>
                </form>
            </div>

        </div>
    );
}
