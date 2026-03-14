import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    ...props
}) => {
    const baseStyles = 'font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2';

    const variants = {
        primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40',
        secondary: 'bg-gray-600 hover:bg-gray-700 text-white shadow-lg',
        outline: 'border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950',
        ghost: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <motion.button
            whileHover={{
                scale: 1.05,
                y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
                type: 'spring',
                stiffness: 400,
                damping: 17,
            }}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...(props as any)}
        >
            {children}
        </motion.button>
    );
};
