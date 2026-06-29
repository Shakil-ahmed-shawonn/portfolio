/**
 * @file app/components/SectionHeading.tsx
 * @description Consistent section heading — Ink Wash palette.
 * Eyebrow in slate-blue, title in charcoal / cream.
 */

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

export default function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <motion.div variants={fadeUp} className="mb-12">
      <p className="font-mono text-xs tracking-widest text-[#6D8196] uppercase mb-2">
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4A4A] dark:text-[#FFFFE3] tracking-tight">
        {title}
      </h2>
    </motion.div>
  );
}
