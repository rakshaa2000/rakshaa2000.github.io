import React, { useState, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ['home', 'about', 'experience', 'projects', 'education', 'community', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section === 'home' ? 'hero' : section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Community', href: '#community' },
        { name: 'Contact', href: '#contact' },
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);

        if (element) {
            const offsetTop = element.offsetTop;
            window.scrollTo({
                top: offsetTop - 32, // Small offset for breathing room
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={`navbar-vertical ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-brand">
                <h2>RV</h2>
            </div>

            <div className="nav-links-vertical">
                {navLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                        onClick={(e) => scrollToSection(e, link.href)}
                    >
                        <span className="nav-indicator"></span>
                        <span className="nav-text">{link.name}</span>
                    </a>
                ))}
            </div>

            <a
                href="/Rakshaa Resume 2025.pdf"
                download
                className="resume-download-btn"
            >
                <FaDownload />
                <span>Resume</span>
            </a>
        </nav>
    );
};

export default Navbar;
