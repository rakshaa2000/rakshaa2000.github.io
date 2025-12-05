import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/content';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="section-title">Where I've Worked</h2>

                <div className="timeline-container">
                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3 className="exp-role">
                                        {exp.role} <span className="text-accent">@ {exp.company}</span>
                                    </h3>
                                    <span className="exp-duration">{exp.duration}</span>
                                </div>
                                <p className="exp-description">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
