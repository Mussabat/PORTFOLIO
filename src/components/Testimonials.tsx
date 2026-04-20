import React from 'react';
import { motion } from 'framer-motion';
import { BsQuote } from 'react-icons/bs';
import { Section } from './ui/Section';

export const Testimonials: React.FC = () => {
    const testimonials = [
        {
            name: 'Engineering Manager',
            role: 'Celloscope',
            content:
                'She likes to take on challenges, solve critical problems, and she demonstrates deep understanding of software fundamentals. She is outstanding in communication.',
            avatar: '👨‍💼',
        },
        {
            name: 'Tech Lead',
            role: 'Project Collaborator',
            content:
                'She was always punctual, well-prepared for meetings, and very clear in understanding requirements, which helped her consistently deliver quality work on time. Her enthusiasm for learning new technologies and improving her skills truly stood out.',
            avatar: '👨‍💼',
        },
        {
            name: 'Product Manager',
            role: 'Cross-functional Team',
            content:
                'Great communicator and team player. She bridges the gap between technical complexity and business requirements seamlessly.',
            avatar: '👨‍💼',
        },
    ];

    return (
        <Section
            id="testimonials"
            title="Testimonials"
            className="bg-white dark:bg-gray-900"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 relative"
                    >
                        <BsQuote className="text-primary-500/20 absolute top-4 right-4" size={48} />

                        <div className="relative z-10">
                            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="text-4xl">{testimonial.avatar}</div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
