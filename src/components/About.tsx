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
            subtitle="Building scalable systems and solving complex problems"
            className="bg-white dark:bg-gray-900 relative overflow-hidden"
        >
            <GradientMesh />
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="space-y-6">
                    {about.map((paragraph, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
                        >
                            {paragraph}
                        </motion.p>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="mt-12 p-8 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl border-2 border-primary-200 dark:border-primary-700 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
                >
                    <p className="text-xl font-semibold text-primary-900 dark:text-primary-100 text-center leading-relaxed">
                        💫 Generation Google Scholar the only Bangladeshi woman selected among 15,000+ applicants across Asia-Pacific
                    </p>
                </motion.div>
            </div>
        </Section>
    );
};
