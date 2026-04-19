import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import { Section } from './ui/Section';
import { portfolioData } from '../data/portfolio';

export const Experience: React.FC = () => {
    const { experiences } = portfolioData;

    return (
        <Section
            id="experience"
            title="Professional Experience"
            className="bg-white dark:bg-gray-900"
        >
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
                {/* Timeline */}
                <div className="flex-1">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="relative pl-2 pb-10 last:pb-0"
                    >
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                                        {exp.title}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <FiBriefcase size={16} />
                                            <span className="font-semibold text-primary-600 dark:text-primary-400">
                                                {exp.company}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FiMapPin size={16} />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-primary-50 dark:bg-primary-900/20 px-4 py-2 rounded-lg">
                                    <FiCalendar size={16} />
                                    <span className="font-medium">{exp.period}</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {exp.responsibilities.map((responsibility, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="mt-2 w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full flex-shrink-0" />
                                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                            {responsibility}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
                </div>

                {/* Right Illustration */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="lg:w-[360px] w-full flex-shrink-0 hidden lg:flex items-center justify-center"
                >
                    <img
                        src="/experience-illustration-right.svg"
                        alt="Code snippets illustration"
                        className="w-full"
                    />
                </motion.div>
            </div>
        </Section>
    );
};
