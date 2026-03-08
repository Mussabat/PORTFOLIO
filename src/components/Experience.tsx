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
            subtitle="Building impactful solutions in production environments"
            className="bg-white dark:bg-gray-900"
        >
            <div className="max-w-5xl mx-auto">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="relative pl-8 pb-12 border-l-2 border-primary-300 dark:border-primary-700 last:pb-0"
                    >
                        {/* Timeline dot */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="absolute -left-3 top-0 w-6 h-6 bg-primary-600 dark:bg-primary-500 rounded-full border-4 border-white dark:border-gray-900"
                        />

                        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
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
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                            {responsibility}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
