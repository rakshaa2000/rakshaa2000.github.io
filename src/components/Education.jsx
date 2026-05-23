import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { educationData, certificationsData } from '../data/content';
import './Education.css';

const Education = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabRefs = useRef([]);

    const onKeyDown = (e) => {
        const last = certificationsData.length - 1;
        let next = null;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = activeTab === last ? 0 : activeTab + 1;
        else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = activeTab === 0 ? last : activeTab - 1;
        else if (e.key === 'Home') next = 0;
        else if (e.key === 'End') next = last;
        if (next !== null) {
            e.preventDefault();
            setActiveTab(next);
            tabRefs.current[next]?.focus();
        }
    };

    return (
        <section id="education" className="section education-section" aria-labelledby="education-heading">
            <div className="container">
                <h2 id="education-heading" className="section-title">Education & Certifications</h2>

                <div className="education-grid">
                    {educationData.map((edu, index) => (
                        <motion.article
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
                        </motion.article>
                    ))}
                </div>

                <div className="certifications-container">
                    <h3 className="subsection-title">Certifications</h3>

                    <div className="cert-tabs-wrapper">
                        <div
                            className="cert-tabs"
                            role="tablist"
                            aria-orientation="vertical"
                            aria-label="Certification categories"
                            onKeyDown={onKeyDown}
                        >
                            {certificationsData.map((category, index) => {
                                const selected = activeTab === index;
                                return (
                                    <button
                                        key={index}
                                        ref={(el) => (tabRefs.current[index] = el)}
                                        id={`cert-tab-${index}`}
                                        role="tab"
                                        type="button"
                                        aria-selected={selected}
                                        aria-controls={`cert-panel-${index}`}
                                        tabIndex={selected ? 0 : -1}
                                        className={`cert-tab ${selected ? 'active' : ''}`}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        {category.category}
                                    </button>
                                );
                            })}
                        </div>

                        <motion.div
                            key={activeTab}
                            id={`cert-panel-${activeTab}`}
                            role="tabpanel"
                            aria-labelledby={`cert-tab-${activeTab}`}
                            className="cert-content"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ul className="certifications-list">
                                {certificationsData[activeTab].certs.map((cert, index) => (
                                    <motion.li
                                        key={index}
                                        className="cert-tag"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.2, delay: index * 0.02 }}
                                    >
                                        <span className="cert-tag-name">{cert.name}</span>
                                        <span className="cert-tag-issuer">{cert.issuer}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
