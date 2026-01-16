"use client"

import { motion } from "framer-motion"

export function SkillBadge({ children, className = "" }) {
    return (
        <motion.span
            whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(168, 85, 247, 0.2)",
                borderColor: "rgba(168, 85, 247, 0.8)",
                color: "#ffffff"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={`px-3 py-1.5 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/10 cursor-default relative overflow-hidden ${className}`}
        >
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
            />
            {children}
        </motion.span>
    )
}
