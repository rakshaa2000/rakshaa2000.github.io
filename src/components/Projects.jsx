import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/content';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const isGithub = (url) => /(^https?:\/\/)?(www\.)?github\.com/i.test(url);

const Projects = () => {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">Some Things I've Built</h2>

                <div className="projects-grid">
                    {projectsData.map((project, index) => {
                        const github = isGithub(project.link);
                        const linkLabel = github
                            ? `${project.title} on GitHub`
                            : `Visit ${project.title}`;
                        return (
                            <motion.article
                                key={index}
                                className="project-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-image-link"
                                    aria-label={linkLabel}
                                    tabIndex={-1}
                                >
                                    <div className="project-image-container">
                                        <img
                                            src={project.image}
                                            alt=""
                                            className="project-image"
                                            loading="lazy"
                                            decoding="async"
                                            width="680"
                                            height="480"
                                        />
                                    </div>
                                </a>
                                <div className="project-info">
                                    <h3 className="project-title">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-title-link"
                                        >
                                            {project.title}
                                        </a>
                                    </h3>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-actions">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-action"
                                            aria-label={linkLabel}
                                        >
                                            {github ? <FaGithub aria-hidden="true" /> : <FaExternalLinkAlt aria-hidden="true" />}
                                            <span>{github ? 'View on GitHub' : 'Visit project'}</span>
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
