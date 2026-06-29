"use client";
/**
 * @file app/components/Navbar.tsx
 * @description Fixed top nav — Ink Wash palette, dark/light toggle.
 *
 * Dark mode fix: useEffect reads localStorage on mount and sets `dark` state
 * correctly so React state always matches the DOM class.
 */

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/data";

const NAV_LINKS = [
  { href: "#about",      label: "About" },
  { href: "#skills",     label: "Skills" },
  { href: "#projects",   label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact",    label: "Contact" },
];

const menuVariants = {
  hidden:  { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.15 } },
};

export default function Navbar() {
  const [dark, setDark]         = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /**
   * On mount: read persisted theme from localStorage.
   * Apply class to <html> AND sync React state.
   * This fixes the toggle bug — state was initialised false even when DOM had .dark
   */
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = stored === "dark" || (!stored && prefersDark);

    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDark(false);
    }
  }, []);

  const toggleDark = useCallback(() => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFFFE3]/90 dark:bg-[#2e2e2e]/90 backdrop-blur-md border-b border-[#CBCBCB] dark:border-[#4A4A4A]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <motion.span
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="font-mono text-sm font-semibold tracking-tight text-[#4A4A4A] dark:text-[#FFFFE3] select-none"
        >
          {siteConfig.domain}
        </motion.span>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 + 0.1 }}
            >
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-[#5e5e5e] dark:text-[#CBCBCB] hover:text-[#6D8196] dark:hover:text-[#8da3b5] transition-colors font-medium"
              >
                {link.label}
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg text-[#5e5e5e] dark:text-[#CBCBCB] hover:bg-[#CBCBCB]/30 dark:hover:bg-[#4A4A4A] transition-colors"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg text-[#5e5e5e] dark:text-[#CBCBCB] hover:bg-[#CBCBCB]/30 dark:hover:bg-[#4A4A4A] transition-colors"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-[#FFFFE3] dark:bg-[#2e2e2e] border-b border-[#CBCBCB] dark:border-[#4A4A4A] px-6 py-4 flex flex-col gap-4"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-sm font-medium text-[#4A4A4A] dark:text-[#CBCBCB] hover:text-[#6D8196] dark:hover:text-[#8da3b5] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
