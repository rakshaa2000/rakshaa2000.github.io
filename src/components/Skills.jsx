import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/content';
import './Skills.css';

const Skills = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="about" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Skills & Technologies</h2>

                <div className="skills-tabs-container">
                    <div className="skills-tabs-wrapper">
                        <div className="skills-tabs">
                            {skillsData.map((category, index) => (
                                <button
                                    key={index}
                                    className={`skill-tab ${activeTab === index ? 'active' : ''}`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {category.category}
                                </button>
                            ))}
                        </div>

                        <motion.div
                            key={activeTab}
                            className="skills-content"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="skills-grid">
                                {skillsData[activeTab].skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        className="skill-item glass-card"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.2, delay: index * 0.05 }}
                                        whileHover={{ y: -5 }}
                                    >
                                        {skill}
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

export default Skills;
