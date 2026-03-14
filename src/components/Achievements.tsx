import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiStar } from 'react-icons/fi';
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
            subtitle="Awards, scholarships, and competitive programming achievements"
            className="bg-white dark:bg-gray-900 relative overflow-hidden"
        >
            <GradientMesh />
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {achievements.map((achievement, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.08,
                            type: 'spring',
                            stiffness: 100,
                        }}
                        whileHover={{
                            y: -12,
                            scale: 1.03,
                            rotateY: 5,
                        }}
                        className="relative bg-gradient-to-br from-white via-primary-50/30 to-primary-100/50 dark:from-gray-800 dark:via-primary-900/10 dark:to-primary-800/20 rounded-2xl p-6 border-2 border-primary-200 dark:border-primary-700/50 shadow-xl hover:shadow-2xl transition-all backdrop-blur-sm group"
                    >
                        {/* Sparkle effect */}
                        <motion.div
                            className="absolute top-4 right-4"
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        >
                            <FiStar className="text-yellow-400 dark:text-yellow-500" size={20} />
                        </motion.div>

                        <div className="flex items-start gap-4">
                            <motion.div
                                className="p-4 bg-gradient-to-br from-primary-500 to-primary-700 dark:from-primary-600 dark:to-primary-800 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow"
                                whileHover={{
                                    rotate: [0, -10, 10, -10, 0],
                                    scale: 1.1,
                                }}
                                transition={{
                                    duration: 0.5,
                                }}
                            >
                                {index < 2 ? (
                                    <BsTrophy className="text-yellow-300" size={28} />
                                ) : (
                                    <FiAward className="text-white" size={28} />
                                )}
                            </motion.div>
                            <div className="flex-1">
                                <div className="flex flex-col gap-3 mb-3">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                        {achievement.title}
                                    </h3>
                                    {achievement.year && (
                                        <motion.span
                                            className="inline-flex items-center justify-center text-sm font-bold text-primary-700 dark:text-primary-300 bg-white/80 dark:bg-gray-800/80 px-4 py-2 rounded-full shadow-md backdrop-blur-sm w-fit"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            🗓️ {achievement.year}
                                        </motion.span>
                                    )}
                                </div>
                                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {achievement.description}
                                </p>
                            </div>
                        </div>

                        {/* Decorative gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-primary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
