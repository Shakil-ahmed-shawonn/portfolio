/**
 * @file lib/animations.ts
 * @description Shared Framer Motion variants.
 * Centralised here so components stay lean and animations stay consistent.
 */

import type { Variants } from "framer-motion";

/** Fade + slide up — the default reveal for most elements. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/** Stagger container — wraps lists of animated children. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/** Fade in from left for timeline / experience items. */
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

/** Simple opacity fade + scale — for tags/badges. */
export const fadePop: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};
