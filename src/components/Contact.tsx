import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiUser, FiMessageSquare, FiSend } from 'react-icons/fi';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Create mailto link with form data
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:tnafisa18@gmail.com?subject=${subject}&body=${body}`;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <Section
            id="contact"
            title="Get In Touch"
            subtitle="Let's discuss your next project or opportunity"
            className="bg-gray-50 dark:bg-gray-800"
        >
            <div className="max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium mb-2"
                            >
                                <FiUser size={18} />
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium mb-2"
                            >
                                <FiMail size={18} />
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium mb-2"
                            >
                                <FiMessageSquare size={18} />
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                rows={6}
                                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none text-gray-900 dark:text-white"
                                placeholder="Tell me about your project or opportunity..."
                            />
                        </div>

                        <Button type="submit" size="lg" className="w-full">
                            <FiSend />
                            Send Message
                        </Button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
                        <p className="text-gray-600 dark:text-gray-400">
                            Or email me directly at{' '}
                            <a
                                href="mailto:tnafisa18@gmail.com"
                                className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                            >
                                tnafisa18@gmail.com
                            </a>
                        </p>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};
