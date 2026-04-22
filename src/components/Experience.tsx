import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export const Experience: React.FC = () => {
    const { experiences } = portfolioData;
    const e = experiences[0];
    const half = Math.ceil(e.responsibilities.length / 2);
    const left = e.responsibilities.slice(0, half);
    const right = e.responsibilities.slice(half);

    return (
        <section id="experience" className="border-t border-primary-100 dark:border-primary-900/40 py-16 md:py-28">
            <div className="max-w-screen-xl mx-auto px-5 lg:px-16">

                {/* Heading */}
                <h2 className="font-serif text-4xl md:text-5xl lg:text-[clamp(36px,5vw,68px)] leading-[1.05] tracking-[-0.025em] mb-16 max-w-[22ch] text-gray-900 dark:text-white">
                    Where the{' '}
                    <em className="italic text-primary-600 dark:text-primary-400">real scar tissue</em>{' '}
                    came from.
                </h2>

                {/* Role header + image row */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">

                    {/* Left: role + bullets */}
                    <div>
                        {/* Role block */}
                        <div className="mb-10 pb-8 border-b border-primary-100 dark:border-primary-900/40">
                            <h3 className="font-serif text-[clamp(26px,3vw,40px)] leading-[1.05] tracking-[-0.02em] text-gray-900 dark:text-white mb-3">
                                {e.title}
                            </h3>
                            <div className="flex flex-wrap gap-4 font-mono text-[12px] tracking-[0.06em] text-gray-500 dark:text-gray-400">
                                <span className="text-gray-900 dark:text-white">{e.company}</span>
                                <span className="text-primary-300 dark:text-primary-700">/</span>
                                <span>{e.location}</span>
                                <span className="text-primary-300 dark:text-primary-700">/</span>
                                <span>{e.period}</span>
                            </div>
                        </div>

                        {/* Two-column bullet grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0">
                            <ul className="flex flex-col">
                                {left.map((r, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -12 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: i * 0.05 }}
                                        className="flex gap-3 py-[10px] border-b border-primary-100 dark:border-primary-900/30 last:border-b-0 text-[14px] text-gray-700 dark:text-gray-300 leading-[1.6]"
                                    >
                                        <span className="text-primary-500 dark:text-primary-400 font-mono flex-shrink-0 mt-[1px]">→</span>
                                        {r}
                                    </motion.li>
                                ))}
                            </ul>
                            <ul className="flex flex-col">
                                {right.map((r, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -12 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: (i + half) * 0.05 }}
                                        className="flex gap-3 py-[10px] border-b border-primary-100 dark:border-primary-900/30 last:border-b-0 text-[14px] text-gray-700 dark:text-gray-300 leading-[1.6]"
                                    >
                                        <span className="text-primary-500 dark:text-primary-400 font-mono flex-shrink-0 mt-[1px]">→</span>
                                        {r}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right: illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.15 }}
                        className="hidden lg:block w-full"
                    >
                        <img
                            src="/experience-illustration-right.svg"
                            alt="Experience illustration"
                            className="w-full h-auto"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
