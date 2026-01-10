import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Priyanshu Gupta
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#about" className="hover:text-purple-400 transition-colors">
            About
          </Link>
          <Link href="#projects" className="hover:text-purple-400 transition-colors">
            Projects
          </Link>
          <Link href="#skills" className="hover:text-purple-400 transition-colors">
            Skills
          </Link>
          <Link href="#contact" className="hover:text-purple-400 transition-colors">
            Contact
          </Link>
        </nav>
        <a href="/resume.pdf" download="resume.pdf">
          <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
            Resume
          </Button>
        </a>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Priyanshu Gupta</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 mb-6 font-light">Full Stack Developer</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
            I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
          </p>
          <div className="flex space-x-6">
            <Link href="#projects">
              <Button className="bg-purple-600 hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20 flex h-10 px-6 text-base">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" className="border-white/20 hover:bg-white/10 hover:text-white hover:border-white transition-all h-10 px-6 text-base">
                Contact Me
              </Button>
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
      <section id="about" className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Image
                src="/meimage.png"
                alt="About Me"
                width={400}
                height={400}
                className="rounded-lg mx-auto"
              />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <p className="text-lg text-gray-300 mb-6">
                I'm a passionate full-stack developer currently pursuing B.Tech in Computer Science Engineering at ABES
                Institute of Technology, Ghaziabad.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                My journey in web development started during my early college years, and since then, I've been
                constantly learning and adapting to new technologies and methodologies.
              </p>
              <p className="text-lg text-gray-300">
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
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 - AlzCare */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500/50 group">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/AlzCare.png"
                  alt="AlzCare Project"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">View Details</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">AlzCare</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  A healthcare application designed to assist Alzheimer's patients and their caregivers with daily
                  management and monitoring.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs font-medium border border-purple-500/20">React</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs font-medium border border-purple-500/20">Node.js</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs font-medium border border-purple-500/20">MongoDB</span>
                </div>
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 2 - PeoplesConnect */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500/50 group">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/Peopleconnect.png"
                  alt="PeoplesConnect Project"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">View Details</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">PeoplesConnect</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  A social networking platform that connects people with similar interests and facilitates community
                  building.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs font-medium border border-purple-500/20">Next.js</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs font-medium border border-purple-500/20">Prisma</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs font-medium border border-purple-500/20">PostgreSQL</span>
                </div>
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 3 - SignConnect */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500/50 group">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/SignConnect.png"
                  alt="SignConnect Project"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">View Details</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">SignConnect</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  An application that translates sign language to text and speech in real-time, bridging communication
                  gaps for the hearing impaired.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs font-medium border border-purple-500/20">React</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs font-medium border border-purple-500/20">TensorFlow</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs font-medium border border-purple-500/20">Flask</span>
                </div>
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button className="bg-purple-600 hover:bg-purple-700 flex items-center shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Skill categories */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors">
              <h3 className="text-xl font-bold mb-6 text-purple-400 border-b border-white/10 pb-2">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "Javascript", "HTML/CSS", "Tailwind CSS", "Redux"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors">
              <h3 className="text-xl font-bold mb-6 text-purple-400 border-b border-white/10 pb-2">Backend</h3>
              <div className="flex flex-wrap gap-3">
                {["Node.js", "Express", "Python", "Flask", "RESTful APIs", "Auth"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors">
              <h3 className="text-xl font-bold mb-6 text-purple-400 border-b border-white/10 pb-2">Tools & Others</h3>
              <div className="flex flex-wrap gap-3">
                {["Git/GitHub", "MongoDB", "PostgreSQL", "Firebase", "Machine Learning", "TensorFlow"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Get In Touch</h2>
          <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto">
            <div className="md:w-1/2">
              <form className="space-y-6 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-600 transition-all focus:border-purple-500/50"
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
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-600 transition-all focus:border-purple-500/50"
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
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-600 transition-all focus:border-purple-500/50"
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
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-600 transition-all focus:border-purple-500/50resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 py-6 text-lg font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">Send Message</Button>
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
                        <p className="text-gray-400">guptapriyanshu254@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start group">
                      <div className="h-6 w-6 text-purple-400 mr-4 mt-1 flex items-center justify-center group-hover:scale-110 transition-transform">📍</div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-200">Location</h4>
                        <p className="text-gray-400">Ghaziabad, Uttar Pradesh, India</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <h4 className="text-lg font-medium mb-4 text-gray-200">Follow Me</h4>
                  <div className="flex space-x-4">
                    <Link
                      href="https://github.com/Priyanshug254"
                      className="bg-white/5 p-3 rounded-full text-purple-400 hover:bg-purple-600 hover:text-white transition-all hover:scale-110 border border-white/10"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://github.com/Priyanshug254"
                      className="bg-white/5 p-3 rounded-full text-purple-400 hover:bg-purple-600 hover:text-white transition-all hover:scale-110 border border-white/10"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://x.com/Priyans45961979"
                      className="bg-white/5 p-3 rounded-full text-purple-400 hover:bg-purple-600 hover:text-white transition-all hover:scale-110 border border-white/10"
                    >
                      <Twitter className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-xl font-bold">
                Priyanshu Gupta
              </Link>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Priyanshu Gupta. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <Link href="https://github.com/Priyanshug254" className="text-gray-400 hover:text-purple-400">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://github.com/Priyanshug254" className="text-gray-400 hover:text-purple-400">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://x.com/Priyans45961979" className="text-gray-400 hover:text-purple-400">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
