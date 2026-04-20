import React from 'react';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import { BsTrophy } from 'react-icons/bs';
import { Section } from './ui/Section';
import { GradientMesh } from './ui/GradientMesh';
import { portfolioData } from '../data/portfolio';

export const Achievements: React.FC = () => {
    const { achievements } = portfolioData;

    return (
        <Section
            id="achievements"
            title="Achievements & Recognition"
            className="bg-white dark:bg-gray-900 relative overflow-hidden"
        >
            <GradientMesh />
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {achievements.map((achievement, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.45,
                            delay: index * 0.06,
                        }}
                        whileHover={{ y: -4 }}
                        className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">
                                {index < 2 ? (
                                    <BsTrophy size={22} />
                                ) : (
                                    <FiAward size={22} />
                                )}
                            </div>
                            <div className="flex-1">
                                <div className="mb-3 flex flex-col gap-2">
                                    <h3 className="text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                                        {achievement.title}
                                    </h3>
                                    {achievement.year && (
                                        <span className="inline-flex w-fit items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                                            {achievement.year}
                                        </span>
                                    )}
                                </div>
                                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
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
