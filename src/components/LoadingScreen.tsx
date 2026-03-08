import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen: React.FC<{ onLoadComplete: () => void }> = ({ onLoadComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onLoadComplete, 500);
                    return 100;
                }
                return prev + 10;
            });
        }, 100);

        return () => clearInterval(timer);
    }, [onLoadComplete]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900"
            >
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <motion.h1
                        className="text-6xl md:text-8xl font-bold text-white mb-8"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        NT
                    </motion.h1>

                    <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-white rounded-full"
                            initial={{ width: '0%' }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>

                    <p className="text-white/80 mt-4 text-sm">{progress}%</p>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
