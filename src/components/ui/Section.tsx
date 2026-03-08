import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    id?: string;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
}

export const Section: React.FC<SectionProps> = ({
    id,
    title,
    subtitle,
    children,
    className = '',
}) => {
    return (
        <section
            id={id}
            className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
                {children}
            </div>
        </section>
    );
};
