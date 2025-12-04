import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { educationData, certificationsData } from '../data/content';
import './Education.css';

const Education = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="education" className="section education-section">
            <div className="container">
                <h2 className="section-title">Education & Certifications</h2>

                <div className="education-grid">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="education-card glass-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="edu-header">
                                <h3 className="edu-degree">{edu.degree}</h3>
                                <span className="edu-duration">{edu.duration}</span>
                            </div>
                            <h4 className="edu-institution">{edu.institution}</h4>
                            <p className="edu-details">{edu.details}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="certifications-container">
                    <h3 className="subsection-title">Certifications</h3>

                    <div className="cert-tabs-wrapper">
                        <div className="cert-tabs">
                            {certificationsData.map((category, index) => (
                                <button
                                    key={index}
                                    className={`cert-tab ${activeTab === index ? 'active' : ''}`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {category.category}
                                </button>
                            ))}
                        </div>

                        <motion.div
                            key={activeTab}
                            className="cert-content"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="certifications-list">
                                {certificationsData[activeTab].certs.map((cert, index) => (
                                    <motion.div
                                        key={index}
                                        className="cert-tag"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.2, delay: index * 0.02 }}
                                    >
                                        <span className="cert-tag-name">{cert.name}</span>
                                        <span className="cert-tag-issuer">{cert.issuer}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
