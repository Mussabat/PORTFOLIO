import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { GradientMesh } from './ui/GradientMesh';
import { portfolioData } from '../data/portfolio';

export const About: React.FC = () => {
    const { about } = portfolioData;

    return (
        <Section
            id="about"
            title="About Me"
            className="bg-white dark:bg-gray-900 relative overflow-hidden"
        >
            <GradientMesh />
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Text content */}
                    <div className="flex-1 space-y-4">
                        {about.map((paragraph, index) => (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-base text-gray-700 dark:text-gray-300 leading-relaxed"
                            >
                                {paragraph}
                            </motion.p>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="mt-6 p-6 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl border-2 border-primary-200 dark:border-primary-700 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
                        >
                            <p className="text-sm font-semibold text-primary-900 dark:text-primary-100 text-center leading-relaxed">
                                💫 Generation Google Scholar — the only Bangladeshi woman selected among 15,000+ applicants across Asia-Pacific
                            </p>
                        </motion.div>
                    </div>

                    {/* Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="lg:w-[420px] w-full flex-shrink-0"
                    >
                        <img
                            src="/about-illustration.svg"
                            alt="Project completed illustration"
                            className="w-full h-auto drop-shadow-xl"
                        />
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};
