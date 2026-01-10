"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                    Priyanshu Gupta
                </Link>
                <nav className="hidden md:flex items-center space-x-8">
                    <Link href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group">
                        About
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link href="#projects" className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group">
                        Projects
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link href="#skills" className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group">
                        Skills
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link href="#contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group">
                        Contact
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
                    </Link>
                    <a href="/resume.pdf" download="resume.pdf">
                        <Button variant="outline" className="border-purple-500/50 text-purple-400 hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all shadow-[0_0_15px_rgba(168,85,247,0.1)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                            Resume
                        </Button>
                    </a>
                </nav>
            </div>
        </header>
    )
}
