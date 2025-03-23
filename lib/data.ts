import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated in AI & Data Science",
    location: "Fatehgarh Sahib Punjab, India",
    description:
      "I graduated after 3 Years of studying. I immediately found a job as Full-Stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Intern Software Engineer",
    location: "Mohali, India",
    description:
      "I worked as an intern for 1 month where I gained valuable exposure to real-time chat applications, working with XMPP protocols and WebSocket technology.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Mohali, India",
    description:
      "I'm currently working as a full-stack developer specializing in building custom web applications for clients. I leverage modern technologies to deliver scalable and efficient solutions.",
    icon: React.createElement(FaReact),
    date: "Nov 2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "AI Resume Builder",
    description:
      "A modern web application that leverages Gemini API to help users create professional resumes. Features include AI-powered content suggestions, dynamic formatting, and secure authentication.",
    tags: ["React", "Next.js", "Supabase", "PostgreSQL", "Firebase Auth", "Gemini API", "Tailwind"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Enterprise CRM Solution",
    description:
      "Currently developing a custom AI-powered CRM system for a client. The solution includes intelligent customer segmentation, automated insights, and advanced analytics dashboard.",
    tags: ["React", "TypeScript", "Next.js", "AI Integration", "PostgreSQL", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Full Stack Blog Platform",
    description:
      "A feature-rich blogging platform built with React and Node.js. Includes user authentication, rich text editing, comment system, and responsive design.",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT Auth", "Tailwind"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Material-UI",
  "Chakra-UI",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "OpenAI",
  "Numpy",
  "Pandas",
  "Matplotlib",
  "Seaborn",
  "Scikit-learn",  
] as const;
