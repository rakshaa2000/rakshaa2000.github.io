import React, { useState, useEffect } from 'react';
import { FaDownload, FaHome, FaUser, FaBriefcase, FaCode, FaGraduationCap, FaTrophy, FaHandsHelping, FaEnvelope, FaLaptopCode } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
                setActiveSection('contact');
                return;
            }

            const sections = ['hero', 'about', 'experience', 'projects', 'education', 'achievements', 'community', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
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
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const offsetTop = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: offsetTop - 32,
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });
            history.replaceState(null, '', href);
        }
    };

    return (
        <nav className={`navbar-vertical ${scrolled ? 'scrolled' : ''}`} aria-label="Primary">
            <a href="#hero" className="nav-brand" aria-label="Home" onClick={(e) => scrollToSection(e, '#hero')}>
                <span className="brand-icon" aria-hidden="true">
                    <FaLaptopCode />
                </span>
            </a>

            <ul className="nav-links-vertical">
                {navLinks.map((link, index) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                        <li key={index}>
                            <a
                                href={link.href}
                                className={`nav-link ${isActive ? 'active' : ''}`}
                                onClick={(e) => scrollToSection(e, link.href)}
                                aria-current={isActive ? 'true' : undefined}
                            >
                                <span className="nav-indicator" aria-hidden="true"></span>
                                <span className="nav-text">{link.name}</span>
                                <span className="nav-icon" aria-hidden="true">{link.icon}</span>
                            </a>
                        </li>
                    );
                })}
            </ul>

            <a
                href="/Rakshaa Resume 2025.pdf"
                download
                className="resume-download-btn"
                aria-label="Download résumé (PDF)"
            >
                <FaDownload aria-hidden="true" />
                <span>Resume</span>
            </a>
        </nav>
    );
};

export default Navbar;
