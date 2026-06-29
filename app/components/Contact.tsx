"use client";
/**
 * @file app/components/Contact.tsx
 * @description Contact section — Ink Wash palette.
 */

import { motion } from "framer-motion";
import { Mail, GitBranch as Github, Link2 as Linkedin, ArrowUpRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { siteConfig } from "@/lib/data";
import { fadeUp } from "@/lib/animations";

const willChange = { willChange: "opacity, transform" };

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="border-t border-[#CBCBCB]/50 dark:border-[#4A4A4A]/50">
      <SectionHeading eyebrow="Get in touch" title="Let's work together" />

      <div className="max-w-lg">
        <motion.p
          variants={fadeUp}
          style={willChange}
          className="text-[#5e5e5e] dark:text-[#CBCBCB] leading-relaxed mb-8"
        >
          I&apos;m currently open to backend engineering, ML engineering, and freelance
          opportunities. If you have a project in mind or want to talk, my inbox is open.
        </motion.p>

        <motion.div variants={fadeUp} style={willChange} className="mb-8">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A4A4A] dark:bg-[#FFFFE3] text-[#FFFFE3] dark:text-[#4A4A4A] rounded-lg font-semibold hover:bg-[#6D8196] dark:hover:bg-[#CBCBCB] transition-colors"
          >
            <Mail size={16} />
            {siteConfig.email}
            <ArrowUpRight size={14} className="opacity-60" />
          </a>
        </motion.div>

        <motion.div variants={fadeUp} style={willChange} className="flex gap-4">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#5e5e5e] dark:text-[#CBCBCB] hover:text-[#6D8196] dark:hover:text-[#8da3b5] transition-colors font-medium"
          >
            <Github size={15} /> GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#5e5e5e] dark:text-[#CBCBCB] hover:text-[#6D8196] dark:hover:text-[#8da3b5] transition-colors font-medium"
          >
            <Linkedin size={15} /> LinkedIn
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
