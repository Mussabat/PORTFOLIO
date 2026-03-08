import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { portfolioData } from '../data/portfolio';
import { FaExternalLinkAlt, FaFilePdf, FaQuoteLeft } from 'react-icons/fa';
import { BsTrophy } from 'react-icons/bs';

export function Publications() {
    return (
        <Section id="publications" title="Publications">
            <div className="space-y-8">
                {portfolioData.publications.map((publication, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card hover>
                            <div className="space-y-4">
                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                                    {publication.title}
                                </h3>

                                {/* Authors */}
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {publication.authors}
                                </p>

                                {/* Journal & Year */}
                                <div className="flex flex-wrap items-center gap-4 text-sm">
                                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                                        {publication.journal}
                                    </span>
                                    <span className="text-gray-500 dark:text-gray-400">
                                        {publication.year}
                                    </span>
                                    <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400">
                                        <BsTrophy className="text-lg" />
                                        <span className="font-semibold">
                                            {publication.citations} citations
                                        </span>
                                    </div>
                                </div>

                                {/* Abstract */}
                                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border-l-4 border-primary-500">
                                    <div className="flex items-start gap-3">
                                        <FaQuoteLeft className="text-primary-500 mt-1 flex-shrink-0" />
                                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                            {publication.abstract}
                                        </p>
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="flex flex-wrap gap-3 pt-2">
                                    <a
                                        href={publication.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors text-sm font-medium"
                                    >
                                        <FaExternalLinkAlt className="text-xs" />
                                        View on Google Scholar
                                    </a>
                                    {publication.pdfUrl && (
                                        <a
                                            href={publication.pdfUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors text-sm font-medium"
                                        >
                                            <FaFilePdf className="text-base" />
                                            Download PDF
                                        </a>
                                    )}
                                </div>
                            </div>
                        </Card>
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
