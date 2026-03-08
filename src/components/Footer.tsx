import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';

export const Footer: React.FC = () => {
    const { name, socials } = portfolioData;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">{name}</h3>
                        <p className="text-gray-400">
                            Full Stack Software Engineer based in London, UK
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map(
                                (item) => (
                                    <li key={item}>
                                        <button
                                            onClick={() =>
                                                document
                                                    .getElementById(item.toLowerCase())
                                                    ?.scrollIntoView({ behavior: 'smooth' })
                                            }
                                            className="text-gray-400 hover:text-primary-400 transition-colors"
                                        >
                                            {item}
                                        </button>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Connect</h4>
                        <div className="flex gap-4">
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
                                        className="p-3 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
                                        aria-label={social.name}
                                    >
                                        <Icon size={20} />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} {name}. All rights reserved.
                        </p>
                        <p className="flex items-center gap-2 text-gray-400 text-sm">
                            Built with <FiHeart className="text-red-500" /> using React,
                            TypeScript & TailwindCSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
