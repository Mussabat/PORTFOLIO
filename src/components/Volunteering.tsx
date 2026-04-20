import { motion } from 'framer-motion';
import { FiHeart, FiCalendar, FiUsers } from 'react-icons/fi';
import { Section } from './ui/Section';
import { portfolioData } from '../data/portfolio';

export function Volunteering() {
    const { volunteering } = portfolioData;

    return (
        <Section
            id="volunteering"
            title="Community & Volunteering"
            className="bg-gray-50 dark:bg-gray-800"
        >
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {volunteering.map((volunteer, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all"
                    >
                        <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg">
                                <FiHeart className="text-white" size={24} />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                {volunteer.role}
                            </h3>

                            <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400">
                                <FiUsers size={16} />
                                <span className="font-semibold text-sm">
                                    {volunteer.organization}
                                </span>
                            </div>

                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                                <FiCalendar size={14} />
                                <span>{volunteer.period}</span>
                            </div>

                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                                {volunteer.description}
                            </p>
                        </div>

                        {/* Decorative element */}
                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                                <span>Community Impact</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
