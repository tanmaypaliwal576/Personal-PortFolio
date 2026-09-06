import {
  Mail,
  Braces,
  Code2,
  Layers,
  Database,
  Cpu,
  GitBranch,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import cppUdemyImg from "../assets/certificates/cpp-udemy.png";
import deloitteImg from "../assets/certificates/deloitte.png";
import quantiumImg from "../assets/certificates/quantium.png";
import microsoftGenAiImg from "../assets/certificates/microsoft-genai.png";
import scalerReactImg from "../assets/certificates/scaler-react.png";
import mcpIntroImg from "../assets/certificates/mcpIntroImg.png";
import mcpAdvancedImg from "../assets/certificates/mcpAdvancedImg.png";

export const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const STATS = [
  { label: "projects built", value: 6, suffix: "+" },
  { label: "CGPA", value: 8.63, suffix: "/10" },
  { label: "technologies", value: 15, suffix: "+" },
  { label: "certifications", value: 10, suffix: "+" },
];

export const SKILL_GROUPS = [
  { label: "Languages", icon: Braces, items: ["JavaScript", "Python", "C++"] },
  { label: "Frontend", icon: Code2, items: ["React", "Tailwind CSS", "HTML / CSS"] },
  { label: "Backend", icon: Layers, items: ["Node.js", "Express.js", "REST APIs"] },
  { label: "Data", icon: Database, items: ["MongoDB", "Pandas", "NumPy"] },
  { label: "Foundations", icon: Cpu, items: ["DSA", "OOP", "System design basics"] },
  { label: "Tooling", icon: GitBranch, items: ["Git", "GitHub", "Vite"] },
];


export const PROJECTS = [
  {
    index: "A",
    title: "Huddle",
    desc: "Real-time MERN chat app with instant messaging, secure auth and a clean, responsive interface.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    link: "https://huddle-orgg.netlify.app/",
    size: "large",
  },

  {
    index: "B",
    title: "Prospector",
    desc: "AI-powered prospecting platform designed to help discover and manage potential leads.",
    tags: ["AI", "React"],
    link: "https://prospector-ai.netlify.app/",
    size: "small",
  },

  {
    index: "C",
    title: "TaskLane",
    desc: "Collaboration and classroom management platform for organizing tasks, assignments, communication and team-based workflows.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://tasklane-org.netlify.app/",
    size: "large",
  },

  {
    index: "D",
    title: "OpsMind",
    desc: "AI-powered operations assistant with RAG capabilities for intelligent information retrieval and assistance.",
    tags: ["AI", "RAG"],
    link: "https://opsmindrag.netlify.app/",
    size: "small",
  },

  {
    index: "E",
    title: "Caffinity",
    desc: "A premium coffee-brand site with a polished UI, product showcase and smooth motion throughout.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://caffinity.onrender.com",
    size: "small",
  },

  {
    index: "F",
    title: "Selective Repeat ARQ Simulator",
    desc: "Interactive visual simulator for the Selective-Repeat ARQ networking protocol — packets, ACKs and retransmission, live.",
    tags: ["JavaScript", "HTML", "CSS"],
    link: "https://selectiverepeatarq.vercel.app/",
    size: "large",
  },

  {
    index: "G",
    title: "YouTube Clone",
    desc: "A high-fidelity, responsive front-end clone of the YouTube homepage, built from scratch in vanilla JS.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://youtube-nine-woad.vercel.app/",
    size: "small",
  },


  {
    index: "H",
    title: "Global Mart",
    desc: "Full e-commerce platform — browsing, filtering, cart and checkout, plus an admin panel to manage products.",
    tags: ["React", "Node.js", "Express", "Arcjet"],
    link: "https://global-mart-2ee2.onrender.com",
    size: "small",
  },
];
export const EXPERIENCE = [
  {
    role: "Associate L1 - Web Developer Intern",
    org: "Infotact Solutions",
    time: "Feb 2026 — May 2026 · 4 mos · Remote",
    desc: "Worked as a Web Developer Intern, building and contributing to web development projects using modern web technologies.",
  },

  {
    role: "Full Stack Development Intern",
    org: "Future Interns",
    time: "Nov 2025 — Dec 2025",
    desc: "Contributed to real-world development tasks following Agile practices.",
  },

  {
    role: "Python Instructor",
    org: "Samyak Computer Classes",
    time: "Jun 2024 — Dec 2024",
    desc: "Taught Python fundamentals and problem-solving to students.",
  },
];

export const EDUCATION = [
  {
    role: "B.Tech, Computer Engineering",
    org: "NMIMS Indore",
    time: "2024 — 2028",
    desc: "CGPA 8.6 / 10",
  },
  {
    role: "Secondary Education",
    org: "SGS Indore",
    time: "2015 — 2024",
    desc: null,
  },
];

export const CERTIFICATIONS = [
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte (Forage)",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_68ffc51040b7c3d93bcff081_1765793045182_completion_certificate.pdf",
    image: deloitteImg,
  },
  {
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    link: "https://verify.skilljar.com/c/94u3pcy3oggh",
    image: mcpIntroImg,
  },

  {
    title: "Model Context Protocol: Advanced Topics",
    issuer: "Anthropic",
    link: "https://verify.skilljar.com/c/5mfze4jzvti8",
    image: mcpAdvancedImg,
  },

  {
    title: "Software Engineering Job Simulation",
    issuer: "Quantium (Forage)",
    link: "https://www.theforage.com/completion-certificates/32A6DqtsbF7LbKdcq/jhiG2W9K8KLZK8nXP_32A6DqtsbF7LbKdcq_68ffc51040b7c3d93bcff081_1765970561137_completion_certificate.pdf",
    image: quantiumImg,
  },
  {
    title: "DSA in C++",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-189cc61b-b9c9-48b4-9bec-9ca1b74e34cb/",
    image: cppUdemyImg,
  },
  {
    title: "Generative AI Certificate",
    issuer: "upGrad & Microsoft",
    link: "https://www.upgrad.com/lxp/learner/certificate/program/683738fd19a53cc4d50e3b84",
    image: microsoftGenAiImg,
  },
  {
    title: "React JS Course",
    issuer: "Scaler",
    link: "https://moonshot.scaler.com/s/sl/aQDKKun41A?_gl=1*15954iw*_gcl_au*MTg3NDQ5ODk1MC4xNzYyMDE5MDA1*FPAU*MTg3NDQ5ODk1MC4xNzYyMDE5MDA1*_ga*MTQ0MjcxOTcxLjE3NDIzODExMzU.*_ga_53S71ZZG1X*czE3NjIwMTkwMDQkbzQyJGcxJHQxNzYyMDE5MDUyJGoxMSRsMCRoNjIxNjYwNjQw",
    image: scalerReactImg,
  },
  
];

export const SOCIALS = [
  { href: "https://github.com/tanmaypaliwal576", label: "GitHub", Icon: FaGithub },
  { href: "https://www.linkedin.com/in/tanmay-paliwal-3506bb38b", label: "LinkedIn", Icon: FaLinkedin },
  { href: "mailto:tanmaypaliwal12345@gmail.com", label: "Email", Icon: FaEnvelope },
];
