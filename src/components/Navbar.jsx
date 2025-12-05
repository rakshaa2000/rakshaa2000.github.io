import React, { useState, useEffect } from 'react';
import { FaDownload, FaHome, FaUser, FaBriefcase, FaCode, FaGraduationCap, FaTrophy, FaHandsHelping, FaEnvelope, FaLaptopCode } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Check if we've reached the bottom of the page
            if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
                setActiveSection('contact');
                return;
            }

            // Update active section based on scroll position
            const sections = ['home', 'about', 'experience', 'projects', 'education', 'achievements', 'community', 'contact'];
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
        { name: 'Home', href: '#hero', icon: <FaHome /> },
        { name: 'About', href: '#about', icon: <FaUser /> },
        { name: 'Experience', href: '#experience', icon: <FaBriefcase /> },
        { name: 'Projects', href: '#projects', icon: <FaCode /> },
        { name: 'Education', href: '#education', icon: <FaGraduationCap /> },
        { name: 'Achievements', href: '#achievements', icon: <FaTrophy /> },
        { name: 'Community', href: '#community', icon: <FaHandsHelping /> },
        { name: 'Contact', href: '#contact', icon: <FaEnvelope /> },
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
                <div className="brand-icon">
                    <FaLaptopCode />
                </div>
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
                        <span className="nav-icon">{link.icon}</span>
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
