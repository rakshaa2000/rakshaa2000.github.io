import React from 'react';
import { motion } from 'framer-motion';
import { communityData, hackathonsData } from '../data/content';
import './Community.css';

const Community = () => {
    return (
        <section id="community" className="section community-section">
            <div className="container">
                <h2 className="section-title">Community & Leadership</h2>

                <div className="leadership-grid">
                    {communityData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="leadership-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="leadership-role">{item.role}</h3>
                            <h4 className="leadership-org text-accent">{item.organization}</h4>
                            <p className="leadership-desc">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                <h3 className="subsection-title">Hackathons Mentored and Judged</h3>

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

export default Community;
