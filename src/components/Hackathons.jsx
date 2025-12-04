import React from 'react';
import { motion } from 'framer-motion';
import { hackathonsData } from '../data/content';
import './Hackathons.css';

const Hackathons = () => {
    return (
        <section id="hackathons" className="section hackathons-section">
            <div className="container">
                <h2 className="section-title">Mentorship & Community</h2>
                <div className="hackathons-grid">
                    {hackathonsData.map((hackathon, index) => (
                        <motion.div
                            key={index}
                            className="hackathon-item"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.02 }}
                            viewport={{ once: true }}
                        >
                            {hackathon}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hackathons;
