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
        <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
          Resume
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-purple-500">Priyanshu Gupta</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">Full Stack Developer</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-lg">
            I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
          </p>
          <div className="flex space-x-8">
            <Link href="#projects">
              <Button className="bg-purple-600 hover:bg-purple-800 flex h-8">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" className="border-white h-8">
              Contact Me
            </Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500">
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
      <section id="projects" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 - AlzCare */}
            <div className="bg-gray-900 rounded-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image
                  src="/AlzCare.png"
                  alt="AlzCare Project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">AlzCare</h3>
                <p className="text-gray-400 mb-4">
                  A healthcare application designed to assist Alzheimer's patients and their caregivers with daily
                  management and monitoring.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-sm">MongoDB</span>
                </div>
                <div className="flex space-x-4">
                  <Link href="#" className="text-purple-400 hover:text-purple-300">
                    <Github className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-purple-400 hover:text-purple-300">
                    <ArrowRight className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 2 - PeoplesConnect */}
            <div className="bg-gray-900 rounded-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image
                  src="/Peopleconnect.png"
                  alt="PeoplesConnect Project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">PeoplesConnect</h3>
                <p className="text-gray-400 mb-4">
                  A social networking platform that connects people with similar interests and facilitates community
                  building.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-sm">Prisma</span>
                  <span className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-sm">PostgreSQL</span>
                </div>
                <div className="flex space-x-4">
                  <Link href="#" className="text-purple-400 hover:text-purple-300">
                    <Github className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-purple-400 hover:text-purple-300">
                    <ArrowRight className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 3 - SignConnect */}
            <div className="bg-gray-900 rounded-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image
                  src="/Signconnect.png"
                  alt="SignConnect Project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">SignConnect</h3>
                <p className="text-gray-400 mb-4">
                  An application that translates sign language to text and speech in real-time, bridging communication
                  gaps for the hearing impaired.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-sm">TensorFlow</span>
                  <span className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-sm">Flask</span>
                </div>
                <div className="flex space-x-4">
                  <Link href="#" className="text-purple-400 hover:text-purple-300">
                    <Github className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-purple-400 hover:text-purple-300">
                    <ArrowRight className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button className="bg-purple-600 hover:bg-purple-700">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Skill categories */}
            <div className="bg-black p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Frontend</h3>
              <ul className="space-y-2 text-gray-300">
                <li>React / Next.js</li>
                <li>JavaScript / HTML / CSS</li>
                <li>Tailwind CSS</li>
                <li>Redux</li>
                <li>Responsive Design</li>
              </ul>
            </div>

            <div className="bg-black p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Backend</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Node.js / Express</li>
                <li>Python / Flask</li>
                <li>RESTful APIs</li>
                <li>Authentication</li>
                <li>Server Management</li>
              </ul>
            </div>

            <div className="bg-black p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Database</h3>
              <ul className="space-y-2 text-gray-300">
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>Firebase</li>
                <li>Database Design</li>
              </ul>
            </div>

            <div className="bg-black p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Other</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Git / GitHub</li>
                <li>Machine Learning</li>
                <li>TensorFlow</li>
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
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
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
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
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
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
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 py-6">Send Message</Button>
              </form>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-900 p-8 rounded-lg h-full">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-purple-400 mr-4 mt-1" />
                    <div>
                      <h4 className="text-lg font-medium">Email</h4>
                      <p className="text-gray-400">guptapriyanshu254@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 text-purple-400 mr-4 mt-1 flex items-center justify-center">📍</div>
                    <div>
                      <h4 className="text-lg font-medium">Location</h4>
                      <p className="text-gray-400">Ghaziabad, Uttar Pradesh, India</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <h4 className="text-lg font-medium mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <Link
                      href="https://github.com/Priyanshug254"
                      className="bg-gray-800 p-3 rounded-full text-purple-400 hover:bg-purple-600 hover:text-white transition-colors"
                    >
                      <Github className="h-6 w-6" />
                    </Link>
                    <Link
                      href="https://github.com/Priyanshug254"
                      className="bg-gray-800 p-3 rounded-full text-purple-400 hover:bg-purple-600 hover:text-white transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                    </Link>
                    <Link
                      href="https://x.com/Priyans45961979"
                      className="bg-gray-800 p-3 rounded-full text-purple-400 hover:bg-purple-600 hover:text-white transition-colors"
                    >
                      <Twitter className="h-6 w-6" />
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
