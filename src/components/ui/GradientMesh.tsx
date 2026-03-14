import { motion } from 'framer-motion';

export function GradientMesh() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-400/40 to-purple-400/40 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, -90, 0],
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-blue-400/40 to-primary-400/40 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
            />
        </div>
    );
}
