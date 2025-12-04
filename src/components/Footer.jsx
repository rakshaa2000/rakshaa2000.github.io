import React from 'react';
import { heroData } from '../data/content';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="social-links footer-socials">
                    {heroData.socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            aria-label={link.label}
                        >
                            <link.icon size={20} />
                        </a>
                    ))}
                </div>
                <p className="copyright">
                    Designed & Built by {heroData.name}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
