import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const categories = ['All', 'Mobile', 'Backend', 'Full Stack'];

export function Projects() {
    const { projects } = portfolioData;
    const [filter, setFilter] = useState('All');

    const filtered = filter === 'All'
        ? projects
        : projects.filter(p => {
            if (filter === 'Mobile') return p.techStack.includes('Flutter');
            if (filter === 'Backend') return p.techStack.includes('FastAPI') || p.techStack.includes('Python');
            if (filter === 'Full Stack') return p.category === 'Full Stack';
            return true;
        });

    return (
        <section id="projects" className="border-t border-primary-100 dark:border-primary-900/40 py-16 md:py-28">
            <div className="max-w-screen-xl mx-auto px-5 lg:px-16">

                {/* Heading + filter row */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-[clamp(36px,5vw,68px)] leading-[1.05] tracking-[-0.025em] max-w-[14ch] text-gray-900 dark:text-white">
                        Things I've{' '}
                        <em className="italic text-primary-600 dark:text-primary-400">built.</em>
                    </h2>

                    {/* Filter tabs */}
                    <div className="flex gap-1 border border-primary-100 dark:border-primary-900/40 p-1 self-start sm:self-end shrink-0">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={[
                                    'font-mono text-[11px] tracking-[0.08em] uppercase px-3 py-2 transition-colors duration-150',
                                    filter === cat
                                        ? 'bg-primary-600 text-white'
                                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-primary-50 dark:hover:bg-primary-900/20',
                                ].join(' ')}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={filter}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-primary-100 dark:border-primary-900/40"
                    >
                        {filtered.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="group flex flex-col gap-4 p-7 border-r border-b border-primary-100 dark:border-primary-900/40 bg-white dark:bg-gray-900 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200"
                            >
                                {/* Index + category */}
                                <div className="flex items-center justify-between">
                                    <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-primary-400 dark:text-primary-500">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-gray-400 dark:text-gray-600">
                                        {project.category ?? 'Project'}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="font-serif text-[clamp(20px,2vw,26px)] leading-[1.15] tracking-[-0.01em] text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[13px] leading-[1.6] text-gray-500 dark:text-gray-400 flex-1">
                                    {project.description}
                                </p>

                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-1.5 mt-auto">
                                    {project.techStack.map(tech => (
                                        <span
                                            key={tech}
                                            className="font-mono text-[10px] tracking-[0.04em] px-2 py-1 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-400"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4 pt-4 border-t border-primary-100 dark:border-primary-900/40">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-mono text-[11px] tracking-[0.06em] uppercase text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                        >
                                            GitHub ↗
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-mono text-[11px] tracking-[0.06em] uppercase text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                        >
                                            Live ↗
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
