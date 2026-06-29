/**
 * @file app/components/Footer.tsx
 * @description Minimal footer — Ink Wash palette.
 */

import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[#CBCBCB]/50 dark:border-[#4A4A4A]/50 px-6 py-8 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#CBCBCB] dark:text-[#5e5e5e]">
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        <span className="font-mono">Built with Next.js · Tailwind · Framer Motion · Vercel</span>
      </div>
    </footer>
  );
}
