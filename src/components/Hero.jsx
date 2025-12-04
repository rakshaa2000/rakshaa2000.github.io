import React from 'react';
import { motion } from 'framer-motion';
import { heroData } from '../data/content';
import './Hero.css';

const Hero = () => {
    const { name, title, subtitle, socialLinks } = heroData;

    return (
        <section id="hero" className="hero-section flex-center">
            <div className="container hero-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hero-content"
                >
                    <h2 className="hero-greeting text-accent">Hi, my name is</h2>
                    <h1 className="hero-name">{name}.</h1>
                    <h2 className="hero-title">{title}</h2>
                    <p className="hero-subtitle">{subtitle}</p>

                    <div className="social-links">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5, color: 'var(--accent-color)' }}
                                className="social-icon"
                                aria-label={link.label}
                            >
                                <link.icon size={24} />
                            </motion.a>
                        ))}
                    </div>

                    <motion.a
                        href="#projects"
                        className="cta-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById("projects");

                            if (element) {
                                const offsetTop = element.offsetTop;
                                window.scrollTo({
                                    top: offsetTop - 32, // Small offset for breathing room
                                    behavior: 'smooth'
                                });
                            }
                        }}
                    >
                        Check out my work
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
