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
    I'm an <span className="font-medium">international student</span> currently pursuing a{" "}
    <span className="font-medium">Master of Cybersecurity</span> at the University of Newcastle, Australia. 
    I hold a <span className="font-medium">B.Sc. (Hons) in AI & Data Science</span>, which built my foundation 
    in artificial intelligence, data analytics, and software development.
    My main passion is <span className="font-medium">web application development</span>, with a focus on 
    integrating <span className="italic">AI into real-world digital solutions</span>. My core tech stack includes{" "}
    <span className="font-medium">React, Next.js, and TypeScript</span>.
    I'm now exploring how <span className="font-medium">AI and cybersecurity</span> intersect to build 
    secure, intelligent systems.
  </p>

  <p>
    Outside of tech, I'm committed to personal growth. I've been consistently going to the{" "}
    <span className="font-medium">gym since March 2023</span>, enjoy playing{" "}
    <span className="font-medium">chess</span>, and love exploring new places. I'm also a{" "}
    <span className="font-medium">car enthusiast</span> always keen to learn about the latest in automotive tech. 
    These hobbies fuel my focus, creativity, and discipline in both life and code.
  </p>
</motion.section>

  );
}
