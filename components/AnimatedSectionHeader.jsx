"use client"

import { motion } from "framer-motion"

export function AnimatedSectionHeader({ title, className = "" }) {
    return (
        <div className={`relative mb-12 flex flex-col items-center overflow-hidden ${className}`}>
            <motion.h2
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 z-10 relative"
            >
                {title}
            </motion.h2>
            <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "100px", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mt-4 rounded-full"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-purple-500 rounded-full blur-3xl -z-0"
            />
        </div>
    )
}
