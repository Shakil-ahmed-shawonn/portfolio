"use client";
/**
 * @file app/components/Projects.tsx
 * @description Projects section — Ink Wash palette, filterable cards.
 */

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch as Github, ExternalLink } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { projects, filterTags, type Project } from "@/lib/data";
import { fadeUp, fadePop } from "@/lib/animations";
import { cn } from "@/lib/utils";

const willChange = { willChange: "opacity, transform" };

/** Single project card */
function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      variants={fadePop}
      style={willChange}
      className="flex flex-col p-6 rounded-xl border border-[#CBCBCB] dark:border-[#4A4A4A] bg-white/60 dark:bg-[#3a3a3a]/60 hover:border-[#6D8196] dark:hover:border-[#6D8196] transition-colors group h-full"
    >
      {/* Tag */}
      <span className="self-start px-2 py-0.5 mb-4 text-xs font-mono rounded-md bg-[#6D8196]/10 text-[#6D8196] border border-[#6D8196]/30">
        {project.tag}
      </span>

      <h3 className="text-base font-bold text-[#4A4A4A] dark:text-[#FFFFE3] mb-2 group-hover:text-[#6D8196] transition-colors">
        {project.title}
      </h3>

      <p className="text-sm text-[#5e5e5e] dark:text-[#CBCBCB] leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      {/* Stack chips */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.stack.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 text-xs rounded bg-[#CBCBCB]/30 dark:bg-[#4A4A4A] text-[#4A4A4A] dark:text-[#CBCBCB]"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub — ${project.title}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5e5e5e] dark:text-[#CBCBCB] hover:text-[#4A4A4A] dark:hover:text-[#FFFFE3] transition-colors"
        >
          <Github size={13} /> Code
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live demo — ${project.title}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6D8196] hover:text-[#4f6275] dark:hover:text-[#8da3b5] transition-colors"
          >
            <ExternalLink size={13} /> Live Demo
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered = activeTag === "All" ? projects : projects.filter((p) => p.tag === activeTag);

  const handleFilter = useCallback((tag: string) => setActiveTag(tag), []);

  return (
    <SectionWrapper id="projects" className="border-t border-[#CBCBCB]/50 dark:border-[#4A4A4A]/50">
      <SectionHeading eyebrow="What I've built" title="Projects" />

      {/* Filter tabs */}
      <motion.div variants={fadeUp} style={willChange} className="flex flex-wrap gap-2 mb-10">
        {filterTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleFilter(tag)}
            className={cn(
              "px-4 py-1.5 rounded-lg text-sm font-medium transition-colors",
              activeTag === tag
                ? "bg-[#4A4A4A] dark:bg-[#FFFFE3] text-[#FFFFE3] dark:text-[#4A4A4A]"
                : "bg-[#CBCBCB]/30 dark:bg-[#3a3a3a] text-[#4A4A4A] dark:text-[#CBCBCB] hover:bg-[#CBCBCB]/60 dark:hover:bg-[#4A4A4A]"
            )}
          >
            {tag}
          </button>
        ))}
      </motion.div>

      {/* Cards */}
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
