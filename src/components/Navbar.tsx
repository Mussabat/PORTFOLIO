import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { ThemeToggle } from './ui/ThemeToggle';

const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Publications', href: '#publications' },
    { name: 'Volunteering', href: '#volunteering' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-primary-100 dark:border-primary-900/40'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-screen-xl mx-auto px-5 lg:px-16">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="font-serif text-[22px] tracking-[-0.02em] text-gray-900 dark:text-white"
                    >
                        NT
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-7">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => handleNavClick(item.href)}
                                className="font-mono text-[11px] tracking-[0.08em] uppercase text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                            >
                                {item.name}
                            </button>
                        ))}

                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-3 md:hidden">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-gray-600 dark:text-gray-400"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Location bar — shown when scrolled */}
                {scrolled && (
                    <div className="hidden md:flex justify-end pb-1.5">
                        <span className="font-mono text-[10px] tracking-[0.08em] text-gray-400 dark:text-gray-500">
                            London, UK · Full UK Work Authorisation
                        </span>
                    </div>
                )}
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden bg-white dark:bg-gray-900 border-t border-primary-100 dark:border-primary-900/40"
                    >
                        <div className="px-5 py-6 flex flex-col gap-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => handleNavClick(item.href)}
                                    className="w-full text-left py-3 border-b border-primary-100 dark:border-primary-900/40 font-mono text-[12px] tracking-[0.08em] uppercase text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                >
                                    {item.name}
                                </button>
                            ))}
                            <p className="mt-4 font-mono text-[10px] tracking-[0.06em] text-gray-400 dark:text-gray-500 text-center">
                                London, UK · Full UK Work Authorisation
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
