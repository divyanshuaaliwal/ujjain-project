'use client';
import styles from './page.module.css';
import { useState } from 'react';

export default function B2BRegistrationForm() {
    const [formData, setFormData] = useState({
        businessName: '',
        businessType: '',
        contactPerson: '',
        email: '',
        phone: '',
        website: '',
        gstNumber: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        industry: '',
        companySize: '',
        additionalInfo: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = () => {
        const newErrors = {};

        if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required';
        if (!formData.contactPerson.trim()) newErrors.contactPerson = 'Contact person is required';
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
                console.log('B2B Form Submitted:', formData);
                setIsSuccess(true);

                setTimeout(() => {
                    setFormData({
                        businessName: '',
                        businessType: '',
                        contactPerson: '',
                        email: '',
                        phone: '',
                        website: '',
                        gstNumber: '',
                        address: '',
                        city: '',
                        state: '',
                        pincode: '',
                        industry: '',
                        companySize: '',
                        additionalInfo: ''
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
                <h1 className={styles.heading}>B2B Registration Form</h1>
                <div className={styles.titleUnderline}></div>

                {isSuccess ? (
                    <div className={styles.successMessage}>
                        <svg className={styles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                            <circle className={styles.checkmarkCircle} cx="26" cy="26" r="25" fill="none" />
                            <path className={styles.checkmarkCheck} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                        </svg>
                        <h2>Thank you for registering!</h2>
                        <p>{"We&apos;ve received your business registration."}</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <section className={styles.section}>
                            <h2>Business Information</h2>
                            <div className={styles.formGroup}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="businessName">Business Name*</label>
                                    <input
                                        id="businessName"
                                        name="businessName"
                                        value={formData.businessName}
                                        onChange={handleChange}
                                        className={errors.businessName ? styles.errorInput : ''}
                                    />
                                    {errors.businessName && <p className={styles.error}>{errors.businessName}</p>}
                                </div>

                                <div className={styles.inputGroup}>
                                    <label htmlFor="businessType">Business Type</label>
                                    <input
                                        id="businessType"
                                        name="businessType"
                                        placeholder="e.g., Retailer, Distributor"
                                        value={formData.businessType}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="industry">Industry</label>
                                    <input
                                        id="industry"
                                        name="industry"
                                        placeholder="e.g., Electronics, Agriculture"
                                        value={formData.industry}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label htmlFor="gstNumber">GST Number</label>
                                    <input
                                        id="gstNumber"
                                        name="gstNumber"
                                        placeholder="If applicable"
                                        value={formData.gstNumber}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="companySize">Company Size</label>
                                    <select
                                        id="companySize"
                                        name="companySize"
                                        value={formData.companySize}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select company size</option>
                                        <option value="1-10">1-10 employees</option>
                                        <option value="11-50">11-50 employees</option>
                                        <option value="51-200">51-200 employees</option>
                                        <option value="201-500">201-500 employees</option>
                                        <option value="501+">501+ employees</option>
                                    </select>
                                </div>

                                <div className={styles.inputGroup}>
                                    <label htmlFor="website">Website</label>
                                    <input
                                        id="website"
                                        name="website"
                                        placeholder="https://"
                                        value={formData.website}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2>Contact Details</h2>
                            <div className={styles.formGroup}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="contactPerson">Contact Person*</label>
                                    <input
                                        id="contactPerson"
                                        name="contactPerson"
                                        value={formData.contactPerson}
                                        onChange={handleChange}
                                        className={errors.contactPerson ? styles.errorInput : ''}
                                    />
                                    {errors.contactPerson && <p className={styles.error}>{errors.contactPerson}</p>}
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

                            <div className={styles.formGroup}>
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
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2>Business Address</h2>
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
                            <h2>Additional Information</h2>
                            <div className={styles.inputGroup}>
                                <label htmlFor="additionalInfo">Tell us more about your business or requirements</label>
                                <textarea
                                    id="additionalInfo"
                                    name="additionalInfo"
                                    value={formData.additionalInfo}
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
