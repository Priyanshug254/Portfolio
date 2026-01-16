"use client"

import React, { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"

export function TiltCard({ children, className = "" }) {
    const ref = useRef(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 })
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 })

    function onMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect()
        const xPct = (clientX - left) / width - 0.5
        const yPct = (clientY - top) / height - 0.5
        x.set(xPct)
        y.set(yPct)
    }

    function onMouseLeave() {
        x.set(0)
        y.set(0)
    }

    const rotateX = useMotionTemplate`${mouseY}deg`
    const rotateY = useMotionTemplate`${mouseX}deg`

    return (
        <motion.div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform: "perspective(1000px)",
            }}
            className={className}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="w-full h-full"
            >
                <div style={{ transform: "translateZ(20px)" }} className="w-full h-full">
                    {children}
                </div>
            </motion.div>
        </motion.div>
    )
}
