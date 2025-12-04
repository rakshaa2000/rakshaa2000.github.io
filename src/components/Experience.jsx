import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/content';
import './Experience.css';

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="section-title">Where I've Worked</h2>

                <div className="experience-container">
                    <div className="experience-tabs">
                        {experienceData.map((exp, index) => (
                            <button
                                key={index}
                                className={`tab-button ${activeTab === index ? 'active' : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {exp.company}
                            </button>
                        ))}
                        <div
                            className="tab-highlight"
                            style={{ transform: `translateY(${activeTab * 42}px)` }}
                        />
                    </div>

                    <div className="experience-content">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="exp-role">
                                {experienceData[activeTab].role} <span className="text-accent">@ {experienceData[activeTab].company}</span>
                            </h3>
                            <p className="exp-duration">{experienceData[activeTab].duration}</p>
                            <p className="exp-description">{experienceData[activeTab].description}</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
