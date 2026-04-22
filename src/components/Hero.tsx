import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export const Hero: React.FC = () => {
    const { name, location, socials, resumeUrl } = portfolioData;

    const github = socials.find(s => s.name === 'GitHub');
    const linkedin = socials.find(s => s.name === 'LinkedIn');

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.12 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
    };

    return (
        <section
            id="top"
            className="min-h-screen flex items-center bg-white dark:bg-gray-900 pt-20 pb-24 px-6 sm:px-8 lg:px-16"
        >
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10 lg:gap-20 items-start"
            >
                {/* ── Left meta column ── */}
                <motion.div variants={item} className="hidden lg:flex flex-col gap-4 pt-3">
                    <div className="flex items-center gap-2 font-mono text-[11px] tracking-wide">
                        <span
                            className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"
                            style={{ boxShadow: '0 0 0 3px rgba(52,211,153,0.25)', animation: 'pulse 2s ease-in-out infinite' }}
                        />
                        <span className="text-gray-400 dark:text-gray-500 uppercase tracking-widest text-[10px]">Status</span>
                        <span className="text-gray-700 dark:text-gray-200">Open to roles</span>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[11px] tracking-wide">
                        <span className="text-gray-400 dark:text-gray-500 uppercase tracking-widest text-[10px] w-12 flex-shrink-0">Based</span>
                        <span className="text-gray-700 dark:text-gray-200">{location}</span>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[11px] tracking-wide">
                        <span className="text-gray-400 dark:text-gray-500 uppercase tracking-widest text-[10px] w-12 flex-shrink-0">Auth</span>
                        <span className="text-gray-700 dark:text-gray-200">Full UK right to work</span>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[11px] tracking-wide">
                        <span className="text-gray-400 dark:text-gray-500 uppercase tracking-widest text-[10px] w-12 flex-shrink-0">Focus</span>
                        <span className="text-gray-700 dark:text-gray-200">Backend · Mobile · Web</span>
                    </div>
                </motion.div>

                {/* ── Right main column ── */}
                <div>
                    <motion.div variants={item} className="font-mono text-[11px] tracking-[0.14em] uppercase text-gray-400 dark:text-gray-500 mb-8">
                        Portfolio — 2026 Edition
                    </motion.div>

                    <motion.h1
                        variants={item}
                        className="font-serif text-[clamp(52px,10vw,140px)] leading-[0.95] tracking-[-0.03em] text-gray-900 dark:text-white mb-10"
                    >
                        Hi, I'm <span className="text-primary-500 dark:text-primary-400">{name.split(' ')[0]}</span>
                    </motion.h1>

                    <motion.div
                        variants={item}
                        className="font-serif text-[clamp(22px,3vw,38px)] leading-[1.2] tracking-[-0.02em] text-gray-700 dark:text-gray-300 mb-10 max-w-[24ch]"
                    >
                        <span>I build </span>
                        <motion.span
                            className="italic text-primary-600 dark:text-primary-400 inline-block"
                            animate={{ scale: [1, 1.04, 1] }}
                            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            scalable
                        </motion.span>
                        <span>, </span>
                        <motion.span
                            className="italic text-primary-600 dark:text-primary-400 inline-block"
                            animate={{ scale: [1, 1.04, 1] }}
                            transition={{ duration: 2.4, delay: 0.4, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            production-ready
                        </motion.span>
                        <span> systems</span>
                        <br />
                        <span className="text-gray-400 dark:text-gray-500">across mobile, web &amp; backend 🚀</span>
                    </motion.div>

                    <motion.div variants={item} className="flex flex-wrap items-center gap-3">
                        <a
                            href={resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.04em] px-5 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-500 dark:hover:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                        >
                            Resume (PDF) ↗
                        </a>

                        {github && (
                            <a
                                href={github.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.04em] px-5 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-500 dark:hover:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                                </svg>
                                GitHub
                            </a>
                        )}

                        {linkedin && (
                            <a
                                href={linkedin.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.04em] px-5 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-500 dark:hover:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                LinkedIn
                            </a>
                        )}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};
