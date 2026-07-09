/**
 * @file lib/data.ts
 * @description Central data store for portfolio content.
 * Edit this file to update all portfolio sections without touching components.
 */

export const siteConfig = {
  name: "Shakil Ahmed Shawon",
  title: "Software Engineer · ML Engineer · Backend Developer",
  email: "ishawonofficiaal@gmail.com",
  github: "https://github.com/shakil-ahmed-shawonn",
  linkedin: "https://linkedin.com/in/shakilahmedshawon",
  resumeUrl: "/resume.pdf",
  domain: "shawon.dev",
};

export const about = {
  headline: "I build systems that think.",
  body: `Computer Science graduate from Bangladesh, passionate about software engineering,
machine learning, and NLP. I turn raw research into real-world AI systems — from tongue
disease detection with Grad-CAM explainability to sentiment analysis pipelines. Currently
seeking backend / ML engineering roles while building a freelance practice.`,
};

// ── Skills ────────────────────────────────────────────────────────────────────
export const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL"],
  },
  {
    label: "Backend",
    skills: ["FastAPI", "Django", "REST API", "PostgreSQL", "MySQL"],
  },
  {
    label: "AI / ML",
    skills: ["PyTorch", "EfficientNet", "MediaPipe", "NLP", "Grad-CAM", "Scikit-learn"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Vite"],
  },
  {
    label: "Tools",
    skills: ["Git", "Docker", "Linux", "Render", "Vercel", "Hugging Face"],
  },
];

// ── Projects ──────────────────────────────────────────────────────────────────
export interface Project {
  title: string;
  description: string;
  stack: string[];
  github: string;
  live?: string;
  featured?: boolean;
  tag: string;
}

export const projects: Project[] = [
    {
    title: "JobBoard BD",
    description:
      "Full-stack job board platform for Bangladeshi job seekers. Django REST backend with JWT auth, role-based access for employers and candidates, and a React frontend.",
    stack: ["Django", "PostgreSQL", "React", "Tailwind CSS", "REST API"],
    github: "https://github.com/shakil-ahmed-shawonn/jobboard-bd",
    tag: "Full Stack",
  },
  {
    title: "ReviewSense",
    description:
      "Real-time review sentiment dashboard. Aggregates product reviews, runs sentiment classification, and surfaces actionable insights through an interactive chart interface.",
    stack: ["FastAPI", "Python", "React", "Recharts", "NLP"],
    github: "https://github.com/shakil-ahmed-shawonn/reviewsense",
    tag: "NLP",
  },
  {
    title: "TongueCheck",
    description:
      "AI-powered tongue disease detection web app with a two-stage ML pipeline: MediaPipe FaceMesh for tongue validation, EfficientNet-B1 with CBAM attention for classification, and Grad-CAM explainability overlays.",
    stack: ["FastAPI", "EfficientNet-B1", "MediaPipe", "React", "Vite", "Grad-CAM"],
    github: "https://github.com/shakil-ahmed-shawonn/tonguecheck",
    live: "https://tonguecheck.vercel.app",
    featured: true,
    tag: "ML / CV",
  },
  {
    title: "Amazon Sentiment Analysis",
    description:
      "NLP pipeline using TF-IDF feature extraction and Logistic Regression to classify Amazon product reviews. Includes data preprocessing, model evaluation, and a simple inference API.",
    stack: ["Python", "Scikit-learn", "TF-IDF", "FastAPI", "Pandas"],
    github: "https://github.com/shakil-ahmed-shawonn/sentiment-analysis",
    tag: "NLP",
  },

  {
    title: "SmartInvoice BD",
    description:
      "Invoice generation and management tool tailored for Bangladeshi freelancers. Auto-calculates VAT/AIT, generates PDF invoices, and tracks payment status.",
    stack: ["Django", "WeasyPrint", "React", "PostgreSQL"],
    github: "https://github.com/shakil-ahmed-shawonn/smartinvoice-bd",
    tag: "Full Stack",
  },
];

// ── Experience ────────────────────────────────────────────────────────────────
export const experiences = [
  {
    role: "Capstone Research Project",
    org: "University",
    period: "2024 – 2025",
    bullets: [
      "Designed and trained EfficientNet-B1 with CBAM attention for multi-class tongue disease classification.",
      "Built a two-stage validation pipeline using MediaPipe FaceMesh to reject non-tongue inputs.",
      "Implemented Grad-CAM explainability layer; deployed full-stack app on Render + Vercel.",
    ],
  },
];

// ── Education ─────────────────────────────────────────────────────────────────
export const education = {
  degree: "B.Sc. in Computer Science & Engineering",
  university: "University of Liberal Arts, Bangladesh",
  period: "2020 – 2026",
  cgpa: "3.06 / 4.00",
  coursework: ["Machine Learning", "Computer Vision", "Data Structures", "Database Systems", "Software Engineering"],
};

// ── Project filter tags ───────────────────────────────────────────────────────
export const filterTags = ["All", "ML / CV", "NLP", "Full Stack"];
