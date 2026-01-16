"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import confetti from "canvas-confetti"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"
import { TypewriterEffect } from "@/components/TypewriterEffect"
import { ParticleBackground } from "@/components/ParticleBackground"
import { TiltCard } from "@/components/TiltCard"
import { AnimatedSectionHeader } from "@/components/AnimatedSectionHeader"
import { SkillBadge } from "@/components/SkillBadge"
import { MagneticButton } from "@/components/MagneticButton"
import { personalInfo, projects, skills, socialLinks } from "@/lib/data"

export default function Home() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(project => project.tags.includes(filter) || (filter === "Backend" && project.tags.includes("Node.js")) || (filter === "Frontend" && project.tags.includes("React")))


  const categories = ["All", "React", "Next.js", "Node.js"]

  const handleSubmit = (e) => {
    e.preventDefault()
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center relative overflow-hidden">
        <ParticleBackground />
        <div className="md:w-1/2 mb-10 md:mb-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">{personalInfo.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 mb-6 font-light">
            <TypewriterEffect texts={[personalInfo.role, "React Enthusiast", "Student", "Web Developer"]} />
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
            {personalInfo.bio}
          </p>
          <div className="flex space-x-6">
            <Link href="#projects">
              <MagneticButton className="bg-purple-600 hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20 flex items-center justify-center h-10 px-6 text-base rounded-md text-white font-medium">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </MagneticButton>
            </Link>
            <Link href="#contact">
              <MagneticButton className="border border-white/20 hover:bg-white/10 hover:text-white hover:border-white transition-all h-10 px-6 text-base rounded-md text-white font-medium">
                Contact Me
              </MagneticButton>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-2xl">
            <Image src="/meimage.png" alt="Profile" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white/5 py-20">
        <div className="container mx-auto px-4">
          <AnimatedSectionHeader title="About Me" />
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 relative">
              <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full"></div>
              <Image
                src="/meimage.png"
                alt="About Me"
                width={400}
                height={400}
                className="rounded-2xl mx-auto rotate-3 hover:rotate-0 transition-all duration-500 shadow-2xl skew-y-3 hover:skew-y-0"
              />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a passionate full-stack developer currently pursuing B.Tech in Computer Science Engineering at ABES
                Institute of Technology, Ghaziabad.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                My journey in web development started during my early college years, and since then, I've been
                constantly learning and adapting to new technologies and methodologies.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in creating innovative solutions that solve real-world problems. My academic background
                combined with hands-on project experience has equipped me with a strong foundation in software
                development principles and practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSectionHeader title="My Projects" />

          {/* Project Filters */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === category
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25 scale-105"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <TiltCard key={index} className="h-full">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500/50 group h-full flex flex-col">
                  <div className="h-48 relative overflow-hidden flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-medium">View Details</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs font-medium border border-purple-500/20">{tag}</span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <Link href={project.links.github} className="text-gray-400 hover:text-white transition-colors">
                        <Github className="h-5 w-5" />
                      </Link>
                      <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
          <div className="text-center mt-12">
            <MagneticButton className="bg-purple-600 hover:bg-purple-700 flex items-center justify-center shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all h-10 px-4 py-2 rounded-md text-white font-medium inline-flex">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <AnimatedSectionHeader title="My Skills" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Skill categories loop */}
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors">
                <h3 className="text-xl font-bold mb-6 text-purple-400 border-b border-white/10 pb-2 capitalize">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <SkillBadge key={skill}>
                      {skill}
                    </SkillBadge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSectionHeader title="Get In Touch" />
          <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto">
            <div className="md:w-1/2 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <form onSubmit={handleSubmit} className="relative space-y-6 bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500 transition-all focus:bg-white/10"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500 transition-all focus:bg-white/10"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500 transition-all focus:bg-white/10"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500 transition-all focus:bg-white/10 resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <MagneticButton type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-6 text-lg font-bold tracking-wide shadow-lg shadow-purple-900/20 hover:shadow-purple-700/40 transform hover:-translate-y-1 transition-all rounded-md text-white">Send Message</MagneticButton>
              </form>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gradient-to-br from-purple-900/20 to-black p-8 rounded-2xl h-full border border-white/10 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start group">
                      <Mail className="h-6 w-6 text-purple-400 mr-4 mt-1 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="text-lg font-medium text-gray-200">Email</h4>
                        <p className="text-gray-400">{personalInfo.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start group">
                      <div className="h-6 w-6 text-purple-400 mr-4 mt-1 flex items-center justify-center group-hover:scale-110 transition-transform">📍</div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-200">Location</h4>
                        <p className="text-gray-400">{personalInfo.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <h4 className="text-lg font-medium mb-4 text-gray-200">Follow Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.url}
                        className="bg-white/5 p-3 rounded-full text-purple-400 hover:bg-purple-600 hover:text-white transition-all hover:scale-110 border border-white/10"
                      >
                        <link.icon className="h-5 w-5" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 py-8 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                {personalInfo.name}
              </Link>
              <p className="text-gray-500 text-sm mt-1">Building digital experiences.</p>
            </div>

            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((link) => (
                <Link key={link.name} href={link.url} className="text-gray-400 hover:text-purple-400 transform hover:scale-110 transition-all">
                  <link.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>

            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} {personalInfo.name}.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

