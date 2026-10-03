import {
  Mail,
  ExternalLink,
  Code2,
  Layout,
  Palette,
  Smartphone,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/icons/BrandIcons";

/* ===================================================================
   PORTFOLIO DATA — Edit this file to update all website content.
   =================================================================== */

export const personalInfo = {
  name: "Naveen Chaudhary",
  title: "Frontend Developer",
  tagline:
    "I craft modern, responsive, and user-friendly web experiences that bring ideas to life through clean code and thoughtful design.",
  university: "IIMT University",
  email: "naveen@example.com", // ← Replace with your real email
  github: "https://github.com/naveenchaudhary", // ← Replace with your GitHub
  linkedin: "https://linkedin.com/in/naveenchaudhary", // ← Replace with your LinkedIn
};

export const aboutText = [
  "I'm a passionate Frontend Developer from IIMT University with a strong focus on creating modern, responsive, and accessible web experiences. I believe in writing clean, maintainable code that not only works flawlessly but is also easy to understand and extend.",
  "My approach to development centers around user experience — every pixel, interaction, and transition is carefully crafted to feel intuitive and polished. I'm continuously learning and staying up to date with the latest frontend technologies and best practices.",
];

export const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building interactive and performant user interfaces",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Pixel-perfect layouts across all devices and screen sizes",
  },
  {
    icon: Layout,
    title: "Clean & Maintainable Code",
    description: "Well-structured, readable, and scalable codebases",
  },
  {
    icon: Palette,
    title: "Modern UI Development",
    description: "Contemporary design patterns and visual aesthetics",
  },
];

export const skills = [
  {
    name: "HTML5",
    category: "Core",
    icon: "🌐",
    color: "#e34f26",
  },
  {
    name: "CSS3",
    category: "Core",
    icon: "🎨",
    color: "#1572b6",
  },
  {
    name: "JavaScript",
    category: "Language",
    icon: "⚡",
    color: "#f7df1e",
  },
  {
    name: "React.js",
    category: "Framework",
    icon: "⚛️",
    color: "#61dafb",
  },
  {
    name: "Tailwind CSS",
    category: "Framework",
    icon: "💨",
    color: "#06b6d4",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    icon: "📦",
    color: "#f05032",
  },
  {
    name: "Responsive Design",
    category: "Skill",
    icon: "📱",
    color: "#8b5cf6",
  },
  {
    name: "UI/UX Principles",
    category: "Design",
    icon: "✨",
    color: "#ec4899",
  },
];

export const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive personal portfolio website built with React and Tailwind CSS, featuring smooth animations and a clean dark theme.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    github: "#", // ← Replace with actual repo URL
    liveDemo: "#", // ← Replace with actual demo URL
    image: null,
  },
  {
    title: "Weather Dashboard",
    description:
      "A real-time weather application that displays current weather conditions, forecasts, and location-based data with an intuitive interface.",
    technologies: ["React.js", "CSS3", "REST API"],
    github: "#", // ← Replace with actual repo URL
    liveDemo: "#", // ← Replace with actual demo URL
    image: null,
  },
  {
    title: "Task Manager App",
    description:
      "A productivity-focused task management application with features like filtering, priority levels, and persistent local storage.",
    technologies: ["React.js", "Tailwind CSS", "LocalStorage"],
    github: "#", // ← Replace with actual repo URL
    liveDemo: "#", // ← Replace with actual demo URL
    image: null,
  },
  {
    title: "E-Commerce UI",
    description:
      "A sleek e-commerce frontend with product listings, cart functionality, responsive design, and modern UI components.",
    technologies: ["React.js", "CSS3", "JavaScript"],
    github: "#", // ← Replace with actual repo URL
    liveDemo: "#", // ← Replace with actual demo URL
    image: null,
  },
];

export const education = [
  {
    institution: "IIMT University",
    degree: "Bachelor's Degree", // ← Replace with your exact degree/course
    field: "Computer Science / Information Technology", // ← Replace with your exact field
    description:
      "Pursuing studies with a focus on computer science fundamentals, web technologies, and software development practices.",
    status: "Currently Pursuing", // ← Update as needed
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: personalInfo.github,
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    url: personalInfo.linkedin,
    icon: LinkedinIcon,
  },
  {
    name: "Email",
    url: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
];
