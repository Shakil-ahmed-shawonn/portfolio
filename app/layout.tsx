/**
 * @file app/layout.tsx
 * @description Root layout — metadata, system fonts (Google Fonts unavailable in sandbox).
 * When deploying, re-enable next/font Google imports for Inter + JetBrains Mono.
 */

import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Software Engineer & ML Engineer`,
  description:
    "CS graduate from Bangladesh building AI systems, ML pipelines, and full-stack web applications. Open to backend and ML engineering roles.",
  keywords: [
    "Shakil Ahmed Shawon",
    "Software Engineer Bangladesh",
    "ML Engineer",
    "FastAPI",
    "Django",
    "React",
    "TongueCheck",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} — Software Engineer & ML Engineer`,
    description: "CS graduate building real-world AI systems and full-stack applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 antialiased transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
