"use client";
/**
 * @file app/components/Experience.tsx
 * @description Experience + Education — Ink Wash palette, timeline layout.
 * Timeline dot uses slate-blue accent. Border uses silver/charcoal.
 */

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { experiences, education } from "@/lib/data";
import { fadeLeft, fadePop } from "@/lib/animations";

const willChange = { willChange: "opacity, transform" };

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="border-t border-[#CBCBCB]/50 dark:border-[#4A4A4A]/50">
      <SectionHeading eyebrow="My background" title="Experience & Education" />

      <div className="grid md:grid-cols-2 gap-10">
        {/* Experience timeline */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Briefcase size={15} className="text-[#6D8196]" />
            <h3 className="text-sm font-mono uppercase tracking-widest text-[#CBCBCB]">Experience</h3>
          </div>

          {experiences.map((exp) => (
            <motion.div
              key={exp.role}
              variants={fadeLeft}
              style={willChange}
              className="relative pl-5 border-l-2 border-[#CBCBCB] dark:border-[#4A4A4A] pb-8 last:pb-0"
            >
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#6D8196]" />
              <p className="text-xs font-mono text-[#CBCBCB] mb-1">{exp.period}</p>
              <h4 className="font-bold text-[#4A4A4A] dark:text-[#FFFFE3] mb-0.5">{exp.role}</h4>
              <p className="text-sm text-[#5e5e5e] dark:text-[#CBCBCB] mb-3">{exp.org}</p>
              <ul className="flex flex-col gap-2">
                {exp.bullets.map((b) => (
                  <li key={b} className="text-sm text-[#5e5e5e] dark:text-[#CBCBCB] leading-relaxed flex gap-2">
                    <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-[#6D8196]" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Education card */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap size={15} className="text-[#6D8196]" />
            <h3 className="text-sm font-mono uppercase tracking-widest text-[#CBCBCB]">Education</h3>
          </div>

          <motion.div
            variants={fadePop}
            style={willChange}
            className="p-6 rounded-xl border border-[#CBCBCB] dark:border-[#4A4A4A] bg-white/60 dark:bg-[#3a3a3a]/60"
          >
            <p className="text-xs font-mono text-[#CBCBCB] mb-2">{education.period}</p>
            <h4 className="font-bold text-[#4A4A4A] dark:text-[#FFFFE3] mb-1">{education.degree}</h4>
            <p className="text-sm text-[#5e5e5e] dark:text-[#CBCBCB] mb-4">{education.university}</p>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-[#CBCBCB] uppercase">CGPA</span>
              <span className="px-2 py-0.5 text-xs font-bold rounded bg-[#6D8196]/10 text-[#6D8196] border border-[#6D8196]/30">
                {education.cgpa}
              </span>
            </div>

            <p className="text-xs font-mono text-[#CBCBCB] uppercase tracking-widest mb-2">
              Relevant Coursework
            </p>
            <div className="flex flex-wrap gap-1.5">
              {education.coursework.map((c) => (
                <span
                  key={c}
                  className="px-2 py-0.5 text-xs rounded bg-[#CBCBCB]/30 dark:bg-[#4A4A4A] text-[#4A4A4A] dark:text-[#CBCBCB]"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
