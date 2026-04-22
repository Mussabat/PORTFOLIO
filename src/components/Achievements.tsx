import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const FEATURED = new Set([
    'Generation Google Scholarship',
    '1st Place – DravidianLangTech@EACL 2024 Shared Task 5',
]);

export const Achievements: React.FC = () => {
    const { achievements } = portfolioData;

    return (
        <section id="achievements" className="border-t border-primary-100 dark:border-primary-900/40 py-16 md:py-28">
            <div className="max-w-screen-xl mx-auto px-5 lg:px-16">
                <div>

                    <div>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-[clamp(36px,5vw,68px)] leading-[1.05] tracking-[-0.025em] mb-12 max-w-[18ch] text-gray-900 dark:text-white">
                            Awards, scholarships,{' '}
                            <em className="italic text-primary-600 dark:text-primary-400">
                                international podiums.
                            </em>
                        </h2>

                        {/* Achievement grid — borders drawn via parent border-t/l, each card border-r/b */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-primary-100 dark:border-primary-900/40">
                            {achievements.map((achievement, index) => {
                                const isFeatured = FEATURED.has(achievement.title);
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.04 }}
                                        className={[
                                            'flex flex-col gap-3 p-7 border-r border-b border-primary-100 dark:border-primary-900/40 min-h-[180px] transition-colors duration-200',
                                            isFeatured
                                                ? 'bg-primary-700 dark:bg-primary-800'
                                                : 'bg-white dark:bg-gray-900 hover:bg-primary-50 dark:hover:bg-primary-900/20',
                                        ].join(' ')}
                                    >
                                        <div className={`font-mono text-[11px] tracking-[0.1em] uppercase ${isFeatured ? 'text-primary-300' : 'text-primary-400 dark:text-primary-500'}`}>
                                            {achievement.year}
                                        </div>
                                        <h3 className={`font-serif text-[22px] leading-[1.15] tracking-[-0.01em] m-0 ${isFeatured ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                                            {achievement.title}
                                        </h3>
                                        <p className={`text-[13px] leading-[1.55] mt-auto ${isFeatured ? 'text-primary-100' : 'text-gray-500 dark:text-gray-400'}`}>
                                            {achievement.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
