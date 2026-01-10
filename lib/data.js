import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export const personalInfo = {
    name: "Priyanshu Gupta",
    role: "Full Stack Developer",
    bio: "I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.",
    email: "guptapriyanshu254@gmail.com",
    location: "Ghaziabad, Uttar Pradesh, India",
}

export const socialLinks = [
    {
        name: "Github",
        url: "https://github.com/Priyanshug254",
        icon: Github,
    },
    {
        name: "Linkedin",
        url: "https://github.com/Priyanshug254",
        icon: Linkedin,
    },
    {
        name: "Twitter",
        url: "https://x.com/Priyans45961979",
        icon: Twitter,
    },
]

export const projects = [
    {
        title: "AlzCare",
        description:
            "A healthcare application designed to assist Alzheimer's patients and their caregivers with daily management and monitoring.",
        tags: ["React", "Node.js", "MongoDB"],
        image: "/AlzCare.png",
        links: {
            github: "#",
            demo: "#",
        },
    },
    {
        title: "PeoplesConnect",
        description:
            "A social networking platform that connects people with similar interests and facilitates community building.",
        tags: ["Next.js", "Prisma", "PostgreSQL"],
        image: "/Peopleconnect.png",
        links: {
            github: "#",
            demo: "#",
        },
    },
    {
        title: "SignConnect",
        description:
            "An application that translates sign language to text and speech in real-time, bridging communication gaps for the hearing impaired.",
        tags: ["React", "TensorFlow", "Flask"],
        image: "/SignConnect.png",
        links: {
            github: "#",
            demo: "#",
        },
    },
]

export const skills = {
    frontend: ["React", "Next.js", "Javascript", "HTML/CSS", "Tailwind CSS", "Redux"],
    backend: ["Node.js", "Express", "Python", "Flask", "RESTful APIs", "Auth"],
    tools: ["Git/GitHub", "MongoDB", "PostgreSQL", "Firebase", "Machine Learning", "TensorFlow"],
}
