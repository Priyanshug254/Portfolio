"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

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

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-300 hover:text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-4 md:hidden flex flex-col space-y-4 animate-in slide-in-from-top-4">
                        <Link
                            href="#about"
                            className="px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="#projects"
                            className="px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Projects
                        </Link>
                        <Link
                            href="#skills"
                            className="px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Skills
                        </Link>
                        <Link
                            href="#contact"
                            className="px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        <div className="pt-2">
                            <a href="/resume.pdf" download="resume.pdf" className="block w-full">
                                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                                    Resume
                                </Button>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
