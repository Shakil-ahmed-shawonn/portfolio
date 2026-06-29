"use client";
/**
 * @file app/components/Skills.tsx
 * @description Skills section — Ink Wash palette pill badges.
 */

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "@/lib/data";
import { fadeUp, fadePop } from "@/lib/animations";

const willChange = { willChange: "opacity, transform" };

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="border-t border-[#CBCBCB]/50 dark:border-[#4A4A4A]/50">
      <SectionHeading eyebrow="What I work with" title="Skills & Tools" />

      <div className="flex flex-col gap-8">
        {skillGroups.map((group) => (
          <motion.div key={group.label} variants={fadeUp} style={willChange}>
            <p className="text-xs font-mono text-[#CBCBCB] uppercase tracking-widest mb-3">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={fadePop}
                  style={willChange}
                  className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white/60 dark:bg-[#3a3a3a] text-[#4A4A4A] dark:text-[#CBCBCB] border border-[#CBCBCB] dark:border-[#4A4A4A] hover:border-[#6D8196] hover:text-[#6D8196] dark:hover:border-[#6D8196] dark:hover:text-[#8da3b5] transition-colors cursor-default select-none"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
