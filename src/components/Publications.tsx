import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { GradientMesh } from './ui/GradientMesh';
import { portfolioData } from '../data/portfolio';
import { FaExternalLinkAlt, FaFilePdf, FaQuoteLeft } from 'react-icons/fa';
import { BsTrophy } from 'react-icons/bs';
import { FiBook } from 'react-icons/fi';

export function Publications() {
    return (
        <Section
            id="publications"
            title="Research Publications"
            subtitle="Contributions to Natural Language Processing and low-resource language research"
            className="bg-white dark:bg-gray-900 relative overflow-hidden"
        >
            <GradientMesh />
            <div className="max-w-5xl mx-auto space-y-8 relative z-10">
                {portfolioData.publications.map((publication, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50, rotateY: -10 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.15,
                            type: 'spring',
                            stiffness: 100,
                            damping: 20,
                        }}
                        whileHover={{
                            scale: 1.02,
                            y: -8,
                            rotateY: 2,
                        }}
                        className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-500 transition-all overflow-hidden group backdrop-blur-sm"
                    >
                        {/* Decorative top bar */}
                        <div className="h-2 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 group-hover:h-3 transition-all" />

                        <div className="p-8 space-y-6">
                            {/* Book icon badge */}
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full"
                                whileHover={{ scale: 1.05 }}
                            >
                                <FiBook className="text-primary-600 dark:text-primary-400" />
                                <span className="text-sm font-semibold text-primary-700 dark:text-primary-300">Research Paper</span>
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                {publication.title}
                            </h3>

                            {/* Authors */}
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                ✍️ {publication.authors}
                            </p>

                            {/* Journal & Year & Citations */}
                            <div className="flex flex-wrap items-center gap-4">
                                <motion.div
                                    className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <span className="text-sm text-blue-700 dark:text-blue-300 font-semibold">
                                        📚 {publication.journal}
                                    </span>
                                </motion.div>
                                <motion.div
                                    className="px-4 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <span className="text-sm text-purple-700 dark:text-purple-300 font-semibold">
                                        📅 {publication.year}
                                    </span>
                                </motion.div>
                                <motion.div
                                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg shadow-md"
                                    whileHover={{ scale: 1.1 }}
                                    animate={{
                                        boxShadow: ['0px 0px 0px rgba(234, 179, 8, 0)', '0px 0px 20px rgba(234, 179, 8, 0.3)', '0px 0px 0px rgba(234, 179, 8, 0)'],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    <BsTrophy className="text-yellow-600 dark:text-yellow-400 text-xl" />
                                    <span className="font-bold text-yellow-700 dark:text-yellow-300">
                                        {publication.citations} citations
                                    </span>
                                </motion.div>
                            </div>

                            {/* Abstract */}
                            <motion.div
                                className="bg-gradient-to-r from-gray-50 to-primary-50/30 dark:from-gray-800/50 dark:to-primary-900/20 rounded-xl p-6 border-l-4 border-primary-500 shadow-inner"
                                whileHover={{ scale: 1.01 }}
                            >
                                <div className="flex items-start gap-4">
                                    <motion.div
                                        animate={{
                                            rotate: [0, 5, -5, 0],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                        }}
                                    >
                                        <FaQuoteLeft className="text-primary-500 text-2xl flex-shrink-0" />
                                    </motion.div>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic">
                                        {publication.abstract}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Links */}
                            <div className="flex flex-wrap gap-4 pt-4">
                                <motion.a
                                    href={publication.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all text-sm font-semibold"
                                >
                                    <FaExternalLinkAlt />
                                    View on Google Scholar
                                </motion.a>
                                {publication.pdfUrl && (
                                    <motion.a
                                        href={publication.pdfUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all text-sm font-semibold"
                                    >
                                        <FaFilePdf className="text-xl" />
                                        Download PDF
                                    </motion.a>
                                )}
                            </div>
                        </div>

                        {/* Decorative corner accent */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                ))}
            </div>

            {/* Google Scholar Profile Link */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-12 text-center"
            >
                <a
                    href="https://scholar.google.com/citations?user=-bwzjRwAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl font-medium"
                >
                    <BsTrophy className="text-xl" />
                    View Full Google Scholar Profile
                </a>
            </motion.div>
        </Section>
    );
}
