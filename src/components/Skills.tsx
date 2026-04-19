import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { GradientMesh } from './ui/GradientMesh';
import { portfolioData } from '../data/portfolio';

export const Skills: React.FC = () => {
    const { skills } = portfolioData;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <Section
            id="skills"
            title="Skills & Technologies"
            className="bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
        >
            <GradientMesh />
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
            >
                {skills.map((category, catIndex) => (
                    <motion.div
                        key={category.category}
                        variants={item}
                        whileHover={{ scale: 1.05, y: -10 }}
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 20,
                        }}
                        className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-5 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-xl transition-all backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <motion.div
                                className="w-2 h-8 bg-gradient-to-b from-primary-400 via-primary-500 to-primary-600 rounded-full"
                                animate={{
                                    scaleY: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    delay: catIndex * 0.2,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />
                            <h3 className="text-base font-bold bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent">
                                {category.category}
                            </h3>
                        </div>
                        <motion.div
                            className="space-y-3"
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {category.skills.map((skill) => {
                                const Icon = skill.icon;
                                return (
                                    <motion.div
                                        key={skill.name}
                                        variants={item}
                                        whileHover={{ x: 6, scale: 1.03 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 400,
                                            damping: 17,
                                        }}
                                        className="flex items-center gap-3 group cursor-pointer"
                                    >
                                        {Icon && (
                                            <motion.div
                                                whileHover={{
                                                    rotate: [0, -15, 15, -15, 0],
                                                    scale: 1.3,
                                                }}
                                                transition={{
                                                    duration: 0.6,
                                                    type: 'spring',
                                                    stiffness: 260,
                                                    damping: 20,
                                                }}
                                                className="p-2 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 rounded-lg text-primary-600 dark:text-primary-400 group-hover:from-primary-100 group-hover:to-primary-200 dark:group-hover:from-primary-800/50 dark:group-hover:to-primary-700/50 transition-all shadow-sm group-hover:shadow-md"
                                            >
                                                <Icon size={18} />
                                            </motion.div>
                                        )}
                                        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
};
