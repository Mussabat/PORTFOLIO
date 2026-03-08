import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { portfolioData } from '../data/portfolio';

export const About: React.FC = () => {
    const { about } = portfolioData;

    return (
        <Section
            id="about"
            title="About Me"
            subtitle="Building scalable systems and solving complex problems"
            className="bg-white dark:bg-gray-900"
        >
            <div className="max-w-4xl mx-auto">
                <div className="space-y-6">
                    {about.map((paragraph, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
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
                    className="mt-12 p-6 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl border border-primary-200 dark:border-primary-700"
                >
                    <p className="text-lg font-medium text-primary-900 dark:text-primary-100 text-center">
                        "Generation Google Scholar — the only Bangladeshi woman selected among 15,000+ applicants across Asia-Pacific"
                    </p>
                </motion.div>
            </div>
        </Section>
    );
};
