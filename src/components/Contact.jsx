import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { heroData } from '../data/content';
import './Contact.css';

const Contact = () => {
    const [status, setStatus] = useState(''); // '', 'submitting', 'success', 'error'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('https://formspree.io/f/mgepzogv', {
                method: 'POST',
                body: new FormData(e.target),
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                // Clear success message after 5 seconds
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p className="contact-intro">
                            Feel free to reach out! I'm always open to discussing new projects,
                            creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="contact-details">
                            <div className="contact-detail-item">
                                <FaEnvelope className="contact-icon" />
                                <div>
                                    <h4>Email</h4>
                                    <a href={`mailto:${heroData.email}`}>{heroData.email}</a>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <FaMapMarkerAlt className="contact-icon" />
                                <div>
                                    <h4>Location</h4>
                                    <p>Bengaluru, Karnataka, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {status === 'success' && (
                            <div className="form-status success">
                                Message sent successfully!
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="form-status error">
                                Something went wrong. Please try again.
                            </div>
                        )}

                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn" disabled={status === 'submitting'}>
                            {status === 'submitting' ? 'Sending...' : 'Send Message'}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
