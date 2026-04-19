import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import { Section } from './ui/Section';
import { portfolioData } from '../data/portfolio';

export const Projects: React.FC = () => {
    const { projects } = portfolioData;
    const [filter, setFilter] = useState<string>('All');
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const categories = ['All', 'Mobile', 'Backend', 'Full Stack'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => {
            if (filter === 'Mobile') return p.techStack.includes('Flutter');
            if (filter === 'Backend') return p.techStack.includes('FastAPI') || p.techStack.includes('Python');
            return true;
        });

    return (
        <Section
            id="projects"
            title="Featured Projects"
            className="bg-gray-50 dark:bg-gray-800"
        >
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => (
                    <motion.button
                        key={category}
                        onClick={() => setFilter(category)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-lg font-medium transition-all ${filter === category
                                ? 'bg-primary-600 text-white shadow-lg'
                                : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                            }`}
                    >
                        {category}
                    </motion.button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={filter}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 relative group"
                        >
                            <div className="relative w-full h-48 bg-gradient-to-br from-primary-400 to-primary-600 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-6xl font-bold text-white opacity-50">
                                        {project.title[0]}
                                    </span>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                                    className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
                                >
                                    {project.githubUrl && (
                                        <motion.a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <FiGithub size={24} />
                                        </motion.a>
                                    )}
                                    {project.liveUrl && (
                                        <motion.a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-3 bg-primary-600 rounded-full text-white hover:bg-primary-700"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <FiExternalLink size={24} />
                                        </motion.a>
                                    )}
                                </motion.div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <FiCode className="text-primary-600 dark:text-primary-400" />
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, techIndex) => (
                                        <motion.span
                                            key={techIndex}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: techIndex * 0.05 }}
                                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            <div className="h-1 bg-gradient-to-r from-primary-400 to-primary-600" />
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </Section>
    );
};
