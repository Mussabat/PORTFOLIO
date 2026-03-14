import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';
import { Section } from './ui/Section';

export const Blog: React.FC = () => {
    const blogPosts = [
        {
            title: 'GGS is a Scholarship Opportunity That is Awarded Every Year to Aspiring Female Students',
            excerpt:
                'My journey and experience with the Generation Google Scholarship program - a life-changing opportunity for women in technology across the Asia-Pacific region...',
            date: '2024-03-15',
            readTime: '5 min read',
            category: 'Career',
            image: '🎓',
            url: 'https://medium.com/@tnafisa18/ggs-is-a-scholarship-opportunity-that-is-awarded-every-year-to-aspiring-female-students-354853c24ffd',
        },
    ];

    return (
        <Section
            id="blog"
            title="Latest Articles"
            subtitle="Sharing knowledge and experiences from the field"
            className="bg-gray-50 dark:bg-gray-800"
        >
            <div className="max-w-2xl mx-auto">
                {blogPosts.map((post, index) => (
                    <motion.article
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -8 }}
                        onClick={() => window.open(post.url, '_blank')}
                        className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 cursor-pointer group"
                    >
                        <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-6xl">
                            {post.image}
                        </div>

                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                                    {post.category}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                {post.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                                {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
                                <div className="flex items-center gap-4">
                                    <span className="flex items-center gap-1">
                                        <FiCalendar size={14} />
                                        {new Date(post.date).toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                        })}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <FiClock size={14} />
                                        {post.readTime}
                                    </span>
                                </div>

                                <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mt-12"
            >
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                    More articles coming soon! Follow me on LinkedIn for updates.
                </p>
            </motion.div>
        </Section>
    );
};
