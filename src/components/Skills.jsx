import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/content';
import './Skills.css';

const Skills = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabRefs = useRef([]);

    const onKeyDown = (e) => {
        const last = skillsData.length - 1;
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
        <section id="about" className="section skills-section" aria-labelledby="skills-heading">
            <div className="container">
                <h2 id="skills-heading" className="section-title">Skills & Technologies</h2>

                <div className="skills-tabs-container">
                    <div className="skills-tabs-wrapper">
                        <div
                            className="skills-tabs"
                            role="tablist"
                            aria-orientation="vertical"
                            aria-label="Skill categories"
                            onKeyDown={onKeyDown}
                        >
                            {skillsData.map((category, index) => {
                                const selected = activeTab === index;
                                return (
                                    <button
                                        key={index}
                                        ref={(el) => (tabRefs.current[index] = el)}
                                        id={`skill-tab-${index}`}
                                        role="tab"
                                        type="button"
                                        aria-selected={selected}
                                        aria-controls={`skill-panel-${index}`}
                                        tabIndex={selected ? 0 : -1}
                                        className={`skill-tab ${selected ? 'active' : ''}`}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        {category.category}
                                    </button>
                                );
                            })}
                        </div>

                        <motion.div
                            key={activeTab}
                            id={`skill-panel-${activeTab}`}
                            role="tabpanel"
                            aria-labelledby={`skill-tab-${activeTab}`}
                            className="skills-content"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ul className="skills-grid">
                                {skillsData[activeTab].skills.map((skill, index) => (
                                    <motion.li
                                        key={index}
                                        className="skill-item glass-card"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.2, delay: index * 0.05 }}
                                    >
                                        {skill}
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

export default Skills;
