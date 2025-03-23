"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I hold a degree in{" "}
        <span className="font-medium">Bachelors(Hons) AI & Data Science</span>, which has given me a strong 
        foundation in artificial intelligence and data analysis. My passion lies in{" "}
        <span className="font-medium">web application development</span> with a focus on AI integration.{" "}
        <span className="italic">What drives me in programming</span> is the ability to 
        solve real-life problems through technology. I <span className="underline">love</span> creating 
        solutions that make a meaningful impact. My core tech stack includes{" "}
        <span className="font-medium">
          React, Next.js, and TypeScript
        </span>
        . I'm particularly interested in combining web technologies with AI capabilities
        to create innovative solutions. My career goal is to explore the{" "}
        <span className="font-medium">cybersecurity field</span> and develop AI-powered
        products that enhance digital security.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I'm dedicated to my fitness journey - 
        I've been consistently hitting the <span className="font-medium">gym since March 2023</span>. 
        I'm also an avid <span className="font-medium">chess player</span> and have a passion for 
        exploring new places through travel. As a car enthusiast, I love learning about and 
        experiencing different automobiles. These hobbies help me maintain a balanced lifestyle 
        and keep my mind sharp for tackling technical challenges.
      </p>
    </motion.section>
  );
}
