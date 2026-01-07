'use client';

import { motion } from 'framer-motion';

interface PageTitleProps {
    title: string;
    subtitle?: string;
    description: string;
}

export default function PageTitle({ title, subtitle, description }: PageTitleProps) {
    return (
        <div className="bg-gradient-to-br from-blue-900 to-indigo-900 py-20 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <div className="max-w-7xl mx-auto relative z-10 text-center">
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-indigo-300 font-medium mb-3 uppercase tracking-wider"
                    >
                        {subtitle}
                    </motion.p>
                )}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold mb-6"
                >
                    {title}
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl mx-auto"
                >
                    <p className="text-lg md:text-xl text-indigo-100 leading-relaxed">
                        {description}
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
