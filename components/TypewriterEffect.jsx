"use client"

import { useState, useEffect } from "react"

export function TypewriterEffect({ texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 1500 }) {
    const [displayedText, setDisplayedText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)
    const [currentTextIndex, setCurrentTextIndex] = useState(0)

    useEffect(() => {
        const handleType = () => {
            const currentFullText = texts[currentTextIndex]

            if (isDeleting) {
                setDisplayedText((prev) => prev.slice(0, -1))
            } else {
                setDisplayedText((prev) => currentFullText.slice(0, prev.length + 1))
            }

            if (!isDeleting && displayedText === currentFullText) {
                setTimeout(() => setIsDeleting(true), pauseTime)
            } else if (isDeleting && displayedText === "") {
                setIsDeleting(false)
                setCurrentTextIndex((prev) => (prev + 1) % texts.length)
            }
        }

        const timer = setTimeout(handleType, isDeleting ? deletingSpeed : typingSpeed)
        return () => clearTimeout(timer)
    }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseTime])

    return (
        <span className="inline-block min-w-[200px]">
            {displayedText}
            <span className="animate-pulse ml-1">|</span>
        </span>
    )
}
