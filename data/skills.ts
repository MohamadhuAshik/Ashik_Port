import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiMongoose,
  SiGit,
  SiGithub,
  SiNpm,
  SiVite,
  SiVercel,
} from "react-icons/si";
import { KeyRound, Webhook, Database as DatabaseIcon, Table2, AppWindow } from "lucide-react";
import type { Skill } from "@/lib/types";

export const skills: Skill[] = [
  // Frontend
  {
    name: "HTML",
    category: "frontend",
    description: "Semantic, accessible markup",
    icon: SiHtml5,
  },
  {
    name: "CSS",
    category: "frontend",
    description: "Layout, animation, responsive design",
    icon: SiCss,
  },
  {
    name: "JavaScript",
    category: "frontend",
    description: "Core language for the web",
    icon: SiJavascript,
  },
  {
    name: "TypeScript",
    category: "frontend",
    description: "Typed JavaScript at scale",
    icon: SiTypescript,
  },
  {
    name: "React",
    category: "frontend",
    description: "Component-driven interfaces",
    icon: SiReact,
  },
  {
    name: "Next.js",
    category: "frontend",
    description: "React framework, App Router",
    icon: SiNextdotjs,
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    description: "Utility-first styling",
    icon: SiTailwindcss,
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    description: "JavaScript runtime for servers",
    icon: SiNodedotjs,
  },
  {
    name: "Express.js",
    category: "backend",
    description: "Minimal server framework",
    icon: SiExpress,
  },
  {
    name: "REST APIs",
    category: "backend",
    description: "Designing clean HTTP interfaces",
    icon: Webhook,
  },
  {
    name: "Authentication",
    category: "backend",
    description: "Session and token-based auth",
    icon: KeyRound,
  },

  // Database
  {
    name: "MongoDB",
    category: "database",
    description: "Document-based data storage",
    icon: SiMongodb,
  },
  {
    name: "MongoDB Atlas",
    category: "database",
    description: "Managed cloud clusters",
    icon: DatabaseIcon,
  },
  {
    name: "MySQL",
    category: "database",
    description: "Relational database engine",
    icon: SiMysql,
  },
  {
    name: "SQL",
    category: "database",
    description: "Structured query language",
    icon: Table2,
  },
  {
    name: "Mongoose",
    category: "database",
    description: "Schema modeling for MongoDB",
    icon: SiMongoose,
  },

  // Tools
  {
    name: "Git",
    category: "tools",
    description: "Version control",
    icon: SiGit,
  },
  {
    name: "GitHub",
    category: "tools",
    description: "Hosting and collaboration",
    icon: SiGithub,
  },
  {
    name: "VS Code",
    category: "tools",
    description: "Primary code editor",
    icon: AppWindow,
  },
  {
    name: "npm",
    category: "tools",
    description: "Package management",
    icon: SiNpm,
  },
  {
    name: "Vite",
    category: "tools",
    description: "Fast local dev tooling",
    icon: SiVite,
  },
  {
    name: "Vercel",
    category: "tools",
    description: "Deployment and hosting",
    icon: SiVercel,
  },
];

export const skillCategories: { label: string; value: Skill["category"] | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Database", value: "database" },
  { label: "Tools", value: "tools" },
];
