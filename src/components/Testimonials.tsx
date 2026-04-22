import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'Engineering Manager',
        role: 'Celloscope',
        content:
            'She likes to take on challenges, solve critical problems, and she demonstrates deep understanding of software fundamentals. She is outstanding in communication.',
    },
    {
        name: 'Tech Lead',
        role: 'Project Collaborator',
        content:
            'She was always punctual, well-prepared for meetings, and very clear in understanding requirements, which helped her consistently deliver quality work on time. Her enthusiasm for learning new technologies and improving her skills truly stood out.',
    },
    {
        name: 'Product Manager',
        role: 'Cross-functional Team',
        content:
            'Great communicator and team player. She bridges the gap between technical complexity and business requirements seamlessly.',
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="border-t border-primary-100 dark:border-primary-900/40 py-16 md:py-28">
            <div className="max-w-screen-xl mx-auto px-5 lg:px-16">

                <h2 className="font-serif text-4xl md:text-5xl lg:text-[clamp(36px,5vw,68px)] leading-[1.05] tracking-[-0.025em] mb-12 max-w-[18ch] text-gray-900 dark:text-white">
                    What colleagues{' '}
                    <em className="italic text-primary-600 dark:text-primary-400">say.</em>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-primary-100 dark:border-primary-900/40">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.07 }}
                            className="flex flex-col gap-6 p-8 border-r border-b border-primary-100 dark:border-primary-900/40 bg-white dark:bg-gray-900 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200"
                        >
                            {/* Opening mark */}
                            <span className="font-serif text-[72px] leading-none text-primary-200 dark:text-primary-800 select-none -mb-4">
                                "
                            </span>

                            {/* Quote */}
                            <p className="font-serif text-[18px] leading-[1.5] tracking-[-0.01em] italic text-gray-800 dark:text-gray-200 flex-1">
                                {t.content}
                            </p>

                            {/* Attribution */}
                            <div className="border-t border-primary-100 dark:border-primary-900/40 pt-5 mt-auto">
                                <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-gray-900 dark:text-white">
                                    {t.name}
                                </div>
                                <div className="font-mono text-[11px] tracking-[0.06em] text-primary-500 dark:text-primary-400 mt-1">
                                    {t.role}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
