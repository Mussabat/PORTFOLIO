import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowDown } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
    const { name, title, location, summary, socials, resumeUrl } = portfolioData;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    className="absolute -top-40 -right-40 w-96 h-96 bg-primary-200/30 dark:bg-primary-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-300/20 dark:bg-primary-600/10 rounded-full blur-3xl"
                />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="max-w-5xl mx-auto text-center relative z-10"
            >
                <motion.div variants={item} className="mb-6">
                    <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-6">
                        {location} • Full UK Work Authorization
                    </span>
                </motion.div>

                <motion.h1
                    variants={item}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-6"
                >
                    {name}
                </motion.h1>

                <motion.h2
                    variants={item}
                    className="text-2xl sm:text-3xl md:text-4xl text-primary-600 dark:text-primary-400 font-semibold mb-8"
                >
                    {title}
                </motion.h2>

                <motion.p
                    variants={item}
                    className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                    {summary}
                </motion.p>

                <motion.div
                    variants={item}
                    className="flex flex-wrap items-center justify-center gap-4 mb-12"
                >
                    <Button
                        onClick={() => window.open(resumeUrl, '_blank')}
                        size="lg"
                        className="group"
                    >
                        <FiDownload className="group-hover:animate-bounce" />
                        Download Resume
                    </Button>

                    <Button
                        onClick={() => window.open(`mailto:${portfolioData.email}`)}
                        variant="outline"
                        size="lg"
                    >
                        Get In Touch
                    </Button>
                </motion.div>

                <motion.div
                    variants={item}
                    className="flex items-center justify-center gap-6"
                >
                    {socials.map((social) => {
                        const Icon = social.icon;
                        return (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                                aria-label={social.name}
                            >
                                <Icon size={24} />
                            </motion.a>
                        );
                    })}
                </motion.div>

                <motion.button
                    variants={item}
                    onClick={scrollToAbout}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <FiArrowDown size={32} />
                </motion.button>
            </motion.div>
        </section>
    );
};
