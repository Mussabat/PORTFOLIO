import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { EmailPopover } from './ui/EmailPopover';

export function Footer() {
    const { name, socials, email } = portfolioData;
    const currentYear = new Date().getFullYear();

    return (
        <footer
            id="contact"
            className="border-t border-primary-100 dark:border-primary-900/40 bg-white dark:bg-gray-900 py-16 px-5 lg:px-16"
        >
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="font-serif text-[clamp(22px,2.5vw,30px)] leading-[1.1] tracking-[-0.02em] text-gray-900 dark:text-white mb-3">
                            {name}
                        </h3>
                        <p className="font-mono text-[12px] tracking-[0.04em] text-gray-500 dark:text-gray-400">
                            Full Stack Software Engineer<br />based in London, UK
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-primary-500 dark:text-primary-400 mb-4 pb-3 border-b border-primary-100 dark:border-primary-900/40">
                            Quick Links
                        </div>
                        <ul className="space-y-2">
                            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() =>
                                            document
                                                .getElementById(item.toLowerCase())
                                                ?.scrollIntoView({ behavior: 'smooth' })
                                        }
                                        className="font-mono text-[12px] tracking-[0.04em] text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-primary-500 dark:text-primary-400 mb-4 pb-3 border-b border-primary-100 dark:border-primary-900/40">
                            Connect
                        </div>
                        <div className="flex gap-3">
                            {socials.map((social) => {
                                const Icon = social.icon;

                                if (social.name === 'Email') {
                                    return (
                                        <EmailPopover
                                            key={social.name}
                                            email={email}
                                            icon={Icon}
                                            iconSize={18}
                                            buttonClassName="p-2.5 border border-primary-100 dark:border-primary-900/40 text-gray-500 dark:text-gray-400 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-colors"
                                            popupClassName="absolute bottom-full right-0 z-20 mb-4 w-72 border border-primary-100 dark:border-primary-900/40 bg-white dark:bg-gray-900 p-4 text-left shadow-xl"
                                        />
                                    );
                                }

                                return (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -2 }}
                                        className="p-2.5 border border-primary-100 dark:border-primary-900/40 text-gray-500 dark:text-gray-400 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-colors"
                                        aria-label={social.name}
                                    >
                                        <Icon size={18} />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-primary-100 dark:border-primary-900/40">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                        <p className="font-mono text-[11px] tracking-[0.04em] text-gray-400 dark:text-gray-500">
                            © {currentYear} {name}. All rights reserved.
                        </p>
                        <p className="font-mono text-[11px] tracking-[0.04em] text-gray-400 dark:text-gray-500">
                            Built with React, TypeScript &amp; TailwindCSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
