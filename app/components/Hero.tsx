"use client";
/**
 * @file app/components/Hero.tsx
 * @description Hero section — Ink Wash palette.
 * Layout inspired by the PDF reference: large name left-anchored,
 * role cycling in slate-blue accent, clean CTA row.
 */

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { GitBranch as Github, Link2 as Linkedin, Mail, FileText, ArrowDown } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/animations";

const ROLES = ["Software Engineer", "ML Engineer", "Backend Developer"];
const willChange = { willChange: "opacity, transform" };

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [visible, setVisible]  = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => { setRoleIdx((i) => (i + 1) % ROLES.length); setVisible(true); }, 350);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  const scrollDown = useCallback(() => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 px-6 max-w-6xl mx-auto">
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(circle, #CBCBCB 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.35,
        }}
      />

      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl">
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          style={willChange}
          className="font-mono text-xs tracking-widest text-[#6D8196] uppercase mb-4"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          style={willChange}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#4A4A4A] dark:text-[#FFFFE3] leading-[1.08] tracking-tight mb-3"
        >
          {siteConfig.name}
        </motion.h1>

        {/* Cycling role — slate-blue accent */}
        <motion.div variants={fadeUp} style={willChange} className="h-10 mb-6">
          <span
            className={`font-mono text-xl sm:text-2xl font-medium text-[#6D8196] transition-opacity duration-300 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            {ROLES[roleIdx]}
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={fadeUp}
          style={willChange}
          className="text-[#5e5e5e] dark:text-[#CBCBCB] text-base sm:text-lg leading-relaxed max-w-xl mb-10"
        >
          CS graduate from Bangladesh building real-world AI systems — from medical
          image classification to NLP pipelines. Focused on clean code, robust
          backends, and deployable ML.
        </motion.p>

        {/* CTA row */}
        <motion.div variants={fadeUp} style={willChange} className="flex flex-wrap gap-3">
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#4A4A4A] dark:bg-[#FFFFE3] text-[#FFFFE3] dark:text-[#4A4A4A] rounded-lg text-sm font-semibold hover:bg-[#6D8196] dark:hover:bg-[#CBCBCB] transition-colors"
          >
            <FileText size={15} /> Resume
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#CBCBCB] dark:border-[#4A4A4A] text-[#4A4A4A] dark:text-[#CBCBCB] rounded-lg text-sm font-semibold hover:border-[#6D8196] hover:text-[#6D8196] dark:hover:border-[#6D8196] dark:hover:text-[#8da3b5] transition-colors"
          >
            <Github size={15} /> GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#CBCBCB] dark:border-[#4A4A4A] text-[#4A4A4A] dark:text-[#CBCBCB] rounded-lg text-sm font-semibold hover:border-[#6D8196] hover:text-[#6D8196] dark:hover:border-[#6D8196] dark:hover:text-[#8da3b5] transition-colors"
          >
            <Linkedin size={15} /> LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#CBCBCB] dark:border-[#4A4A4A] text-[#4A4A4A] dark:text-[#CBCBCB] rounded-lg text-sm font-semibold hover:border-[#6D8196] hover:text-[#6D8196] dark:hover:border-[#6D8196] dark:hover:text-[#8da3b5] transition-colors"
          >
            <Mail size={15} /> Contact
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollDown}
        aria-label="Scroll down"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#CBCBCB] hover:text-[#6D8196] transition-colors"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Explore</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
