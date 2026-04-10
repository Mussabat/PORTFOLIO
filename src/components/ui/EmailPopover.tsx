import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiCheck, FiCopy, FiX } from 'react-icons/fi';
import { IconType } from 'react-icons';

interface EmailPopoverProps {
    email: string;
    icon: IconType;
    iconSize: number;
    buttonClassName: string;
    popupClassName: string;
}

export const EmailPopover: React.FC<EmailPopoverProps> = ({
    email,
    icon: Icon,
    iconSize,
    buttonClassName,
    popupClassName,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (!wrapperRef.current?.contains(event.target as Node)) {
                setIsOpen(false);
                setCopied(false);
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
                setCopied(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen]);

    useEffect(() => {
        if (!copied) {
            return;
        }

        const timeoutId = window.setTimeout(() => {
            setCopied(false);
        }, 1800);

        return () => window.clearTimeout(timeoutId);
    }, [copied]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
        } catch {
            const textarea = document.createElement('textarea');
            textarea.value = email;
            textarea.setAttribute('readonly', '');
            textarea.style.position = 'absolute';
            textarea.style.left = '-9999px';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            setCopied(true);
        }
    };

    return (
        <div ref={wrapperRef} className="relative">
            <motion.button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={buttonClassName}
                aria-label="Show email address"
                aria-expanded={isOpen}
            >
                <Icon size={iconSize} />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.18 }}
                        className={popupClassName}
                        role="dialog"
                        aria-label="Email address"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="text-xs uppercase tracking-[0.24em] text-primary-500">
                                    Email
                                </p>
                                <p className="mt-2 break-all text-sm font-medium text-gray-900 dark:text-white">
                                    {email}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => {
                                    setIsOpen(false);
                                    setCopied(false);
                                }}
                                className="rounded-full p-1 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                                aria-label="Close email popup"
                            >
                                <FiX size={16} />
                            </button>
                        </div>
                        <button
                            type="button"
                            onClick={handleCopy}
                            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700"
                        >
                            {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
                            {copied ? 'Copied' : 'Copy'}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};