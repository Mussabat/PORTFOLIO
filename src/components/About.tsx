import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export const About: React.FC = () => {
    const { about } = portfolioData;

    return (
        <section id="about" className="border-t border-primary-100 dark:border-primary-900/40 py-16 md:py-28">
            <div className="max-w-screen-xl mx-auto px-5 lg:px-16">

                {/* Headline */}
                <h2 className="font-serif text-4xl md:text-5xl lg:text-[clamp(36px,5vw,68px)] leading-[1.05] tracking-[-0.025em] mb-16 max-w-[22ch] text-gray-900 dark:text-white">
                    Engineer who cares about{' '}
                    <em className="italic text-primary-600 dark:text-primary-400">what ships</em>
                    , and how it holds up after.
                </h2>

                {/* Two-column: text left, image right */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-start">

                    {/* Body copy */}
                    <div className="space-y-5">
                        {about.map((paragraph, index) => (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.55, delay: index * 0.08 }}
                                className="text-[14px] leading-[1.6] text-gray-700 dark:text-gray-300 max-w-[70ch]"
                            >
                                {paragraph}
                            </motion.p>
                        ))}

                        {/* GGS callout */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0.35 }}
                            className="mt-2 p-5 border border-primary-200 dark:border-primary-700 bg-primary-50 dark:bg-primary-900/20 rounded-none"
                        >
                            <p className="font-mono text-[13px] text-primary-700 dark:text-primary-300 leading-relaxed">
                                💫 Generation Google Scholar — the only Bangladeshi woman selected among 15,000+ applicants across Asia-Pacific
                            </p>
                        </motion.div>
                    </div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.15 }}
                        className="w-full"
                    >
                        <img
                            src="/about-illustration.svg"
                            alt="About illustration"
                            className="w-full h-auto"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
