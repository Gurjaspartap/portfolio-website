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
      "I graduated after 3 Years of studying.While working as a Retail Assistant part time during my studies and full time till i got a job as a Full-Stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2024",
  },
  {
    title: "Retail Sales Assistant",
    location: "Chandigarh, India",
    description:
      "Assisted customers with their shopping needs, provided product information, and handled POS transactions upto 100000 INR daily.",
    icon: React.createElement(CgWorkAlt),
    date: "JAN 2023 - OCT 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Mohali, India",
    description:
      "I'm  worked as a full-stack developer specializing in building custom web applications for clients. I leverage modern technologies to deliver scalable and efficient solutions.",
    icon: React.createElement(FaReact),
    date: "Nov 2024 - June 2025",
  },
  {
    title: "Master in Cyber-security",
    location: "University of Newcastle Callaghan, Australia",
    description:
    "Doing my Studies while looking for part-time Work Opportunities.",
    icon: React.createElement(LuGraduationCap),
    date: "2025-2027",
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

export const techSkillsData = [
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

export const softSkillsData = [
  "Communication",
  "Teamwork",
  "Problem Solving",
  "Time Management",
  "Adaptability",
  "Leadership",
  "Customer Service",
  "Attention to Detail",
  "Critical Thinking",
  "Creativity",
  "Work Ethic",
  "Flexibility",
  "Organization",
  "Collaboration",
  "Initiative",
] as const;

// Keep the old skillsData for backward compatibility
export const skillsData = techSkillsData;
