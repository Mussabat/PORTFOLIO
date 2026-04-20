import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { GradientMesh } from './ui/GradientMesh';
import { portfolioData } from '../data/portfolio';
import { FaExternalLinkAlt, FaFilePdf, FaQuoteLeft } from 'react-icons/fa';
import { FiBookOpen } from 'react-icons/fi';

export function Publications() {
    return (
        <Section
            id="publications"
            title="Research Publications"
            className="bg-white dark:bg-gray-900 relative overflow-hidden"
        >
            <GradientMesh />
            <div className="max-w-5xl mx-auto space-y-8 relative z-10">
                {portfolioData.publications.map((publication, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.45,
                            delay: index * 0.08,
                        }}
                        whileHover={{ y: -4 }}
                        className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
                    >
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">
                                <FiBookOpen />
                                Research Paper
                            </div>

                            <h3 className="text-xl font-semibold leading-tight text-gray-900 dark:text-white">
                                {publication.title}
                            </h3>

                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                {publication.authors}
                            </p>

                            <div className="flex flex-wrap items-center gap-4">
                                <div className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                                    {publication.journal}
                                </div>
                                <div className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                                    {publication.year}
                                </div>
                                <div className="rounded-lg bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700 dark:bg-primary-900/20 dark:text-primary-300">
                                    {publication.citations} citations
                                </div>
                            </div>

                            <div className="rounded-xl border-l-4 border-primary-500 bg-gray-50 p-6 dark:bg-gray-900/50">
                                <div className="flex items-start gap-4">
                                    <FaQuoteLeft className="mt-1 flex-shrink-0 text-primary-500" />
                                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic">
                                        {publication.abstract}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <motion.a
                                    href={publication.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-3 rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
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
                                        className="inline-flex items-center gap-3 rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
                                    >
                                        <FaFilePdf />
                                        Download PDF
                                    </motion.a>
                                )}
                            </div>
                        </div>
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
                    className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-700"
                >
                    <FaExternalLinkAlt />
                    View Full Google Scholar Profile
                </a>
            </motion.div>
        </Section>
    );
}
