/**
 * @file tailwind.config.ts
 * @description Tailwind v4 — most config moves to globals.css @theme block.
 * This file only needs content paths. darkMode is handled via @variant in CSS.
 */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  // darkMode NOT set here in v4 — handled by @variant dark in globals.css
};

export default config;
