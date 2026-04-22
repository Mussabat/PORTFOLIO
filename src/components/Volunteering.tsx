import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export function Volunteering() {
    const { volunteering } = portfolioData;

    return (
        <section id="volunteering" className="border-t border-primary-100 dark:border-primary-900/40 py-16 md:py-28">
            <div className="max-w-screen-xl mx-auto px-5 lg:px-16">

                <h2 className="font-serif text-4xl md:text-5xl lg:text-[clamp(36px,5vw,68px)] leading-[1.05] tracking-[-0.025em] mb-12 max-w-[18ch] text-gray-900 dark:text-white">
                    Community &{' '}
                    <em className="italic text-primary-600 dark:text-primary-400">volunteering.</em>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-primary-100 dark:border-primary-900/40">
                    {volunteering.map((v, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.06 }}
                            className="flex flex-col gap-3 p-7 border-r border-b border-primary-100 dark:border-primary-900/40 min-h-[180px] bg-white dark:bg-gray-900 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200"
                        >
                            <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-primary-400 dark:text-primary-500">
                                {v.period}
                            </div>
                            <h3 className="font-serif text-[22px] leading-[1.15] tracking-[-0.01em] m-0 text-gray-900 dark:text-white">
                                {v.role}
                            </h3>
                            <div className="font-mono text-[11px] tracking-[0.06em] text-primary-600 dark:text-primary-400">
                                {v.organization}
                            </div>
                            <p className="text-[13px] leading-[1.55] mt-auto text-gray-500 dark:text-gray-400">
                                {v.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
