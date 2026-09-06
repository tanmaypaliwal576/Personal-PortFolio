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

import cppUdemyImg from "../assets/certificates/cpp-udemy.jpg";
import deloitteImg from "../assets/certificates/deloitte.jpg";
import quantiumImg from "../assets/certificates/quantium.jpg";
import microsoftGenAiImg from "../assets/certificates/microsoft-genai.jpg";
import scalerReactImg from "../assets/certificates/scaler-react.jpg";

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

export const TICKER_ITEMS = [
  "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Python",
  "C++", "DSA", "Socket.io", "Git", "Pandas", "REST APIs",
];

export const PROJECTS = [
  {
    index: "A",
    title: "Huddle",
    desc: "Real-time MERN chat app with instant messaging, secure auth and a clean, responsive interface.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    link: "https://huddle-tgykr.sevalla.app/",
    size: "large",
  },
  {
    index: "B",
    title: "Global Mart",
    desc: "Full e-commerce platform — browsing, filtering, cart and checkout, plus an admin panel to manage products.",
    tags: ["React", "Node.js", "Express", "Arcjet"],
    link: "https://global-mart-2ee2.onrender.com",
    size: "small",
  },
  {
    index: "C",
    title: "Caffinity",
    desc: "A premium coffee-brand site with a polished UI, product showcase and smooth motion throughout.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://caffinity.onrender.com",
    size: "small",
  },
  {
    index: "D",
    title: "Selective Repeat ARQ Simulator",
    desc: "Interactive visual simulator for the Selective-Repeat ARQ networking protocol — packets, ACKs and retransmission, live.",
    tags: ["JavaScript", "HTML", "CSS"],
    link: "https://selectiverepeatarq.vercel.app/",
    size: "large",
  },
  {
    index: "E",
    title: "YouTube Clone",
    desc: "A high-fidelity, responsive front-end clone of the YouTube homepage, built from scratch in vanilla JS.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://youtube-nine-woad.vercel.app/",
    size: "small",
  },
  {
    index: "F",
    title: "Portfolio (v1)",
    desc: "An earlier personal portfolio built to showcase projects and skills — the predecessor to this one.",
    tags: ["React", "Node.js", "Express"],
    link: "https://tanmays-portfolio.onrender.com",
    size: "small",
  },
];

export const EXPERIENCE = [
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
    desc: "CGPA 8.2 / 10",
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
    link: "https://www.theforage.com/simulations/deloitte/data-analytics",
    image: deloitteImg,
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "Quantium (Forage)",
    link: "https://www.theforage.com/simulations/quantium/software-engineering",
    image: quantiumImg,
  },
  {
    title: "DSA in C++",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-dsa-cpp-tanmay/",
    image: cppUdemyImg,
  },
  {
    title: "Generative AI Certificate",
    issuer: "upGrad & Microsoft",
    link: "https://www.upgrad.com/generative-ai-certificate/",
    image: microsoftGenAiImg,
  },
  {
    title: "React JS Course",
    issuer: "Scaler",
    link: "https://www.scaler.com/topics/course/react-js/",
    image: scalerReactImg,
  },
];

export const SOCIALS = [
  { href: "https://github.com/tanmaypaliwal576", label: "GitHub", Icon: FaGithub },
  { href: "https://www.linkedin.com/in/tanmay-paliwal-3506bb38b", label: "LinkedIn", Icon: FaLinkedin },
  { href: "mailto:tanmaypaliwal12345@gmail.com", label: "Email", Icon: FaEnvelope },
];
