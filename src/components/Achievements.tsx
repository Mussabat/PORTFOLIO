import React from 'react';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import { BsTrophy } from 'react-icons/bs';
import { Section } from './ui/Section';
import { portfolioData } from '../data/portfolio';

export const Achievements: React.FC = () => {
    const { achievements } = portfolioData;

    return (
        <Section
            id="achievements"
            title="Achievements & Recognition"
            subtitle="Awards, scholarships, and competitive programming achievements"
            className="bg-white dark:bg-gray-900"
        >
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl p-6 border border-primary-200 dark:border-primary-700 shadow-lg hover:shadow-xl transition-all"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary-600 dark:bg-primary-500 rounded-lg">
                                {index < 2 ? (
                                    <BsTrophy className="text-white" size={24} />
                                ) : (
                                    <FiAward className="text-white" size={24} />
                                )}
                            </div>
                            <div className="flex-1">
                                <div className="flex items-start justify-between gap-2 mb-2">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                        {achievement.title}
                                    </h3>
                                    {achievement.year && (
                                        <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 bg-white dark:bg-gray-800 px-3 py-1 rounded-full">
                                            {achievement.year}
                                        </span>
                                    )}
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {achievement.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
