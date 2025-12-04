import React from 'react';
import { motion } from 'framer-motion';
import { achievementsData } from '../data/content';
import './Achievements.css';

const Achievements = () => {
    return (
        <section id="achievements" className="section achievements-section">
            <div className="container">
                <h2 className="section-title">Achievements</h2>
                <div className="achievements-grid">
                    {achievementsData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="achievement-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="achievement-title">{item.title}</h3>
                            <p className="achievement-desc">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
