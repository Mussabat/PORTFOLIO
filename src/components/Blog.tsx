import { useState } from 'react';

const blogPosts = [
    {
        title: 'GGS is a Scholarship Opportunity That is Awarded Every Year to Aspiring Female Students',
        excerpt:
            'My journey and experience with the Generation Google Scholarship programme — a life-changing opportunity for women in technology across the Asia-Pacific region. From the application process to the scholarship community, this article covers what it means to be selected from 15,000+ applicants.',
        date: 'Mar 15, 2024',
        readTime: '5 min read',
        category: 'Career',
        url: 'https://medium.com/@tnafisa18/ggs-is-a-scholarship-opportunity-that-is-awarded-every-year-to-aspiring-female-students-354853c24ffd',
    },
];

export function Blog() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section id="blog" className="border-t border-primary-100 dark:border-primary-900/40 py-16 md:py-28">
            <div className="max-w-screen-xl mx-auto px-5 lg:px-16">
                <h2 className="font-serif text-4xl md:text-5xl lg:text-[clamp(36px,5vw,68px)] leading-[1.05] tracking-[-0.025em] mb-12 max-w-[18ch] text-gray-900 dark:text-white">
                    Latest{' '}
                    <em className="italic text-primary-600 dark:text-primary-400">articles.</em>
                </h2>

                <div className="flex flex-col">
                    {blogPosts.map((post, i) => {
                        const isOpen = open === i;
                        return (
                            <div key={i}>
                                <div
                                    onClick={() => setOpen(isOpen ? null : i)}
                                    className={[
                                        'grid gap-7 py-7 border-t border-primary-100 dark:border-primary-900/40 cursor-pointer transition-colors duration-150',
                                        'grid-cols-[80px_1fr] sm:grid-cols-[80px_1fr_100px]',
                                        'hover:bg-primary-50/60 dark:hover:bg-primary-900/10',
                                        isOpen ? 'bg-primary-50/60 dark:bg-primary-900/10' : '',
                                    ].join(' ')}
                                >
                                    {/* Date */}
                                    <div className="font-mono text-[13px] text-gray-900 dark:text-white pt-1">
                                        {post.date}
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h3 className="font-serif text-[clamp(18px,2.2vw,24px)] leading-[1.2] tracking-[-0.01em] m-0 mb-2 text-gray-900 dark:text-white">
                                            {post.title}
                                        </h3>
                                        <div className="text-[13px] text-gray-500 dark:text-gray-400 italic leading-relaxed">
                                            {post.category} · {post.readTime}
                                        </div>
                                    </div>

                                    {/* Read link — hidden on mobile */}
                                    <div className="hidden sm:flex flex-col items-end pt-1">
                                        <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-primary-400 dark:text-primary-500">
                                            Medium ↗
                                        </span>
                                    </div>
                                </div>

                                {/* Expanded excerpt */}
                                {isOpen && (
                                    <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[80px_1fr_100px] gap-7 pb-7 border-t border-primary-100/60 dark:border-primary-900/20 bg-primary-50/60 dark:bg-primary-900/10">
                                        <div />
                                        <div className="pt-5">
                                            <p className="text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed max-w-[70ch] mb-4">
                                                {post.excerpt}
                                            </p>
                                            <a
                                                href={post.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                onClick={e => e.stopPropagation()}
                                                className="font-mono text-[11px] px-4 py-2 border border-primary-200 dark:border-primary-700 rounded-full text-gray-800 dark:text-gray-200 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-colors"
                                            >
                                                Read on Medium ↗
                                            </a>
                                        </div>
                                        <div />
                                    </div>
                                )}

                                {i === blogPosts.length - 1 && (
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
