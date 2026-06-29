"use client";
/**
 * @file app/components/About.tsx
 * @description About section — Ink Wash palette.
 * Two-column: bio text left, highlight cards right.
 */

import { motion } from "framer-motion";
import { Code2, Brain, Globe } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { about } from "@/lib/data";
import { fadeUp, fadePop } from "@/lib/animations";

const HIGHLIGHTS = [
  { icon: Code2,  label: "Backend", value: "FastAPI · Django · REST" },
  { icon: Brain,  label: "ML / CV", value: "EfficientNet · MediaPipe · NLP" },
  { icon: Globe,  label: "Deployed", value: "Render · Vercel · Hugging Face" },
];

const willChange = { willChange: "opacity, transform" };

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading eyebrow="Who I am" title={about.headline} />
          <motion.p
            variants={fadeUp}
            style={willChange}
            className="text-[#5e5e5e] dark:text-[#CBCBCB] leading-relaxed text-base"
          >
            {about.body}
          </motion.p>
        </div>

        <div className="flex flex-col gap-4">
          {HIGHLIGHTS.map(({ icon: Icon, label, value }) => (
            <motion.div
              key={label}
              variants={fadePop}
              style={willChange}
              className="flex items-start gap-4 p-5 rounded-xl border border-[#CBCBCB] dark:border-[#4A4A4A] bg-white/60 dark:bg-[#3a3a3a]/60 hover:border-[#6D8196] dark:hover:border-[#6D8196] transition-colors group"
            >
              <div className="mt-0.5 p-2 rounded-lg bg-[#6D8196]/10 group-hover:bg-[#6D8196]/20 transition-colors">
                <Icon size={16} className="text-[#6D8196]" />
              </div>
              <div>
                <p className="text-xs font-mono text-[#CBCBCB] uppercase tracking-wider mb-0.5">
                  {label}
                </p>
                <p className="text-sm font-semibold text-[#4A4A4A] dark:text-[#FFFFE3]">{value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
