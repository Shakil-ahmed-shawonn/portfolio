"use client";
/**
 * @file app/components/SectionWrapper.tsx
 * @description Scroll-triggered reveal wrapper.
 * Uses IntersectionObserver to trigger Framer Motion variants on enter.
 * Wrap any section with this to get consistent scroll animations.
 *
 * @example
 * <SectionWrapper id="skills">
 *   <h2>Skills</h2>
 * </SectionWrapper>
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer } from "@/lib/animations";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  // once: true — animate in once, no repeat on scroll back (perf + UX best practice)
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id={id} ref={ref} className={`py-24 px-6 max-w-6xl mx-auto ${className}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </section>
  );
}
