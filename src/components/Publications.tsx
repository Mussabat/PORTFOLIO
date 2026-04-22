import { useState } from 'react';
import { portfolioData } from '../data/portfolio';

export function Publications() {
    const [open, setOpen] = useState<number | null>(null);
    const { publications } = portfolioData;

    return (
        <section id="publications" className="border-t border-primary-100 dark:border-primary-900/40 py-16 md:py-28">
            <div className="max-w-screen-xl mx-auto px-5 lg:px-16">
                <h2 className="font-serif text-4xl md:text-5xl lg:text-[clamp(36px,5vw,68px)] leading-[1.05] tracking-[-0.025em] mb-12 max-w-[18ch] text-gray-900 dark:text-white">
                    Peer-reviewed{' '}
                    <em className="italic text-primary-600 dark:text-primary-400">publications.</em>
                </h2>

                <div className="flex flex-col">
                    {publications.map((pub, i) => {
                        const isOpen = open === i;
                        return (
                            <div key={i}>
                                {/* Row */}
                                <div
                                    onClick={() => setOpen(isOpen ? null : i)}
                                    className={[
                                        'grid gap-7 py-7 border-t border-primary-100 dark:border-primary-900/40 cursor-pointer transition-colors duration-150',
                                        'grid-cols-[60px_1fr] sm:grid-cols-[80px_1fr_80px]',
                                        'hover:bg-primary-50/60 dark:hover:bg-primary-900/10',
                                        isOpen ? 'bg-primary-50/60 dark:bg-primary-900/10' : '',
                                    ].join(' ')}
                                >
                                    {/* Year */}
                                    <div className="font-mono text-[13px] text-gray-900 dark:text-white pt-1">
                                        {pub.year}
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h3 className="font-serif text-[clamp(18px,2.2vw,24px)] leading-[1.2] tracking-[-0.01em] m-0 mb-2 text-gray-900 dark:text-white">
                                            {pub.title}
                                        </h3>
                                        <div className="text-[13px] text-gray-500 dark:text-gray-400 italic leading-relaxed mb-1">
                                            {pub.journal}
                                        </div>
                                        <div className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed">
                                            {pub.authors}
                                        </div>
                                    </div>

                                    {/* Citations — hidden on mobile, shown sm+ */}
                                    <div className="hidden sm:flex flex-col items-end pt-1">
                                        <span className="font-serif text-[26px] leading-none text-primary-600 dark:text-primary-400 mb-1">
                                            {pub.citations}
                                        </span>
                                        <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-gray-400 dark:text-gray-500">
                                            cites
                                        </span>
                                    </div>
                                </div>

                                {/* Expanded abstract */}
                                {isOpen && (
                                    <div className="grid grid-cols-[60px_1fr] sm:grid-cols-[80px_1fr_80px] gap-7 pb-7 border-t border-primary-100/60 dark:border-primary-900/20 bg-primary-50/60 dark:bg-primary-900/10">
                                        <div />
                                        <div className="pt-5">
                                            <p className="text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed max-w-[70ch] mb-4">
                                                {pub.abstract}
                                            </p>
                                            <div className="flex gap-3">
                                                <a
                                                    href={pub.pdfUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    onClick={e => e.stopPropagation()}
                                                    className="font-mono text-[11px] px-4 py-2 border border-primary-200 dark:border-primary-700 rounded-full text-gray-800 dark:text-gray-200 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-colors"
                                                >
                                                    PDF ↗
                                                </a>
                                                <a
                                                    href={pub.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    onClick={e => e.stopPropagation()}
                                                    className="font-mono text-[11px] px-4 py-2 border border-primary-200 dark:border-primary-700 rounded-full text-gray-800 dark:text-gray-200 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-colors"
                                                >
                                                    Scholar ↗
                                                </a>
                                            </div>
                                        </div>
                                        <div />
                                    </div>
                                )}

                                {/* Bottom border for last item */}
                                {i === publications.length - 1 && (
                                    <div className="border-b border-primary-100 dark:border-primary-900/40" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
