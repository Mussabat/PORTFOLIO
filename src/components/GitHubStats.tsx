import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiStar, FiGitBranch, FiUsers } from 'react-icons/fi';
import { Section } from './ui/Section';

export const GitHubStats: React.FC = () => {
    const stats = [
        { icon: FiGithub, label: 'Public Repos', value: '25+', color: 'text-blue-500' },
        { icon: FiStar, label: 'Total Stars', value: '150+', color: 'text-yellow-500' },
        { icon: FiGitBranch, label: 'Pull Requests', value: '200+', color: 'text-green-500' },
        { icon: FiUsers, label: 'Followers', value: '80+', color: 'text-purple-500' },
    ];

    const contributions = {
        total: '1,000+',
        streak: '150 days',
        thisYear: '800+',
    };

    return (
        <Section
            id="github"
            title="GitHub Activity"
            subtitle="Building in public and contributing to open source"
            className="bg-gray-50 dark:bg-gray-800"
        >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center"
                        >
                            <Icon className={`${stat.color} mx-auto mb-3`} size={32} />
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                                {stat.value}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
                        </motion.div>
                    );
                })}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
            >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    Contribution Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl">
                        <p className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                            {contributions.total}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">Total Contributions</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
                        <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                            {contributions.streak}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">Longest Streak</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
                        <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                            {contributions.thisYear}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">This Year</p>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <a
                        href="https://github.com/Mussabat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:scale-105 transition-transform font-medium"
                    >
                        <FiGithub size={20} />
                        View GitHub Profile
                    </a>
                </div>
            </motion.div>
        </Section>
    );
};
