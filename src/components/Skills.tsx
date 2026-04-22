import { portfolioData } from '../data/portfolio';

export const Skills: React.FC = () => {
    const { skills } = portfolioData;

    // dot-fill helper: 5 dots, filled count decreasing by position
    const filled = (i: number) => Math.max(3, 5 - i);

    return (
        <section id="skills" className="border-t border-primary-100 dark:border-primary-900/40 py-16 md:py-28">
            <div className="max-w-screen-xl mx-auto px-5 lg:px-16">
                <h2 className="font-serif text-4xl md:text-5xl lg:text-[clamp(36px,5vw,68px)] leading-[1.05] tracking-[-0.025em] mb-12 max-w-[18ch] text-gray-900 dark:text-white">
                    Tools of the{' '}
                    <em className="italic text-primary-600 dark:text-primary-400">trade.</em>
                </h2>

                {/* Grid with 1px gap rendered via background on parent */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-primary-100 dark:bg-primary-900/40 border border-primary-100 dark:border-primary-900/40">
                    {skills.map((cat) => (
                        <div
                            key={cat.category}
                            className="bg-white dark:bg-gray-900 p-6 flex flex-col gap-4 transition-colors duration-200 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                        >
                            {/* Category label */}
                            <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-primary-500 dark:text-primary-400 pb-3 border-b border-dashed border-primary-100 dark:border-primary-900/40">
                                {cat.category}
                            </div>

                            {/* Skill rows */}
                            <div className="flex flex-col gap-[10px]">
                                {cat.skills.map((skill, i) => {
                                    const f = filled(i);
                                    return (
                                        <div
                                            key={skill.name}
                                            className="flex items-baseline justify-between font-mono text-[13px] text-gray-800 dark:text-gray-200"
                                        >
                                            <span>{skill.name}</span>
                                            <span className="text-[10px] tracking-[2px] text-gray-300 dark:text-gray-600">
                                                {'●'.repeat(f)}{'○'.repeat(5 - f)}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
