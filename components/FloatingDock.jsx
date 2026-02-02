"use client"
import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Link from "next/link"
import { socialLinks } from "@/lib/data"

function DockIcon({ mouseX, children, href }) {
    const ref = useRef(null)

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
        return val - bounds.x - bounds.width / 2
    })

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40])
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

    return (
        <Link href={href} target="_blank" rel="noopener noreferrer">
            <motion.div
                ref={ref}
                style={{ width, height: width }}
                className="aspect-square rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
                <div className="w-1/2 h-1/2 flex items-center justify-center">
                    {children}
                </div>
            </motion.div>
        </Link>
    )
}

export function FloatingDock() {
    const mouseX = useMotionValue(Infinity)

    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-end gap-3 rounded-2xl bg-black/40 backdrop-blur-md px-4 py-3 border border-white/10 z-50 h-16 shadow-2xl shadow-purple-900/20"
        >
            {socialLinks.map((link) => (
                <DockIcon key={link.name} mouseX={mouseX} href={link.url}>
                    <link.icon className="w-full h-full text-white" />
                </DockIcon>
            ))}
        </motion.div>
    )
}
