"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

export function MagneticButton({ children, className = "", onClick, type = "button", ...props }) {
    const ref = useRef(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // Smooth springs for position
    const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
    const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e
        const { left, top, width, height } = ref.current.getBoundingClientRect()

        // Calculate center relative position
        const centerX = left + width / 2
        const centerY = top + height / 2

        // Distance from center
        const distanceX = clientX - centerX
        const distanceY = clientY - centerY

        // Move button towards cursor (reduced strength for subtle effect)
        x.set(distanceX * 0.35)
        y.set(distanceY * 0.35)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            type={type}
            onClick={onClick}
            className={className}
            {...props}
        >
            {children}
        </motion.button>
    )
}
