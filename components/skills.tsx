"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { techSkillsData, softSkillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      
      {/* Tech Skills Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white/80">
          Technical Skills
        </h3>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {techSkillsData.map((skill, index) => (
            <motion.li
              className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 shadow-sm hover:shadow-md transition-shadow"
              key={`tech-${index}`}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Soft Skills Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white/80">
          Soft Skills for Part-time & Casual Jobs
        </h3>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {softSkillsData.map((skill, index) => (
            <motion.li
              className="bg-blue-50 border border-blue-200 rounded-xl px-5 py-3 dark:bg-blue-900/20 dark:border-blue-700 dark:text-white/80 shadow-sm hover:shadow-md transition-shadow"
              key={`soft-${index}`}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index + techSkillsData.length}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
