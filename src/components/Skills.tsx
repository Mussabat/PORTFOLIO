import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
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
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 },
    };

    return (
        <Section
            id="skills"
            title="Skills & Technologies"
            subtitle="Tools and technologies I work with"
            className="bg-gray-50 dark:bg-gray-800"
        >
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {skills.map((category) => (
                    <motion.div
                        key={category.category}
                        variants={item}
                        whileHover={{ scale: 1.03, y: -5 }}
                        className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-8 bg-gradient-to-b from-primary-500 to-primary-700 rounded-full" />
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                {category.category}
                            </h3>
                        </div>
                        <motion.div
                            className="space-y-4"
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
                                        whileHover={{ x: 8, scale: 1.05 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 300,
                                            damping: 20,
                                        }}
                                        className="flex items-center gap-3 group cursor-pointer"
                                    >
                                        {Icon && (
                                            <motion.div
                                                whileHover={{
                                                    rotate: [0, -10, 10, -10, 0],
                                                    scale: 1.3,
                                                }}
                                                transition={{
                                                    duration: 0.5,
                                                    type: 'spring',
                                                    stiffness: 200,
                                                }}
                                                className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-primary-600 dark:text-primary-400 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/40 transition-colors"
                                            >
                                                <Icon size={24} />
                                            </motion.div>
                                        )}
                                        <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
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
