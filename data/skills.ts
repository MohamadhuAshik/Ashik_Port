import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiMaterialdesignicons,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiMysql,
  SiMongoose,
  SiGit,
  SiGithub,
  SiPostgresql,
  SiPostman,
  SiNginx,
  SiNpm,
  SiVercel,
  SiStripe,
} from "react-icons/si";
import {
  Webhook,
  AppWindow,
  CreditCard,
  Network,
  Share2,
  Layers,
} from "lucide-react";
import type { Skill } from "@/lib/types";

export const skills: Skill[] = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    description: "Component-driven interfaces & hooks",
    icon: SiReact,
  },
  {
    name: "Next.js",
    category: "frontend",
    description: "SSR, SSG, App Router & SEO optimization",
    icon: SiNextdotjs,
  },
  {
    name: "JavaScript",
    category: "frontend",
    description: "ES6+, async/await & core DOM APIs",
    icon: SiJavascript,
  },
  {
    name: "TypeScript",
    category: "frontend",
    description: "Strict types & scalable interfaces",
    icon: SiTypescript,
  },
  {
    name: "HTML5",
    category: "frontend",
    description: "Semantic, accessible document structure",
    icon: SiHtml5,
  },
  {
    name: "CSS3",
    category: "frontend",
    description: "Responsive layouts, animations & flex/grid",
    icon: SiCss,
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    description: "Modern utility-first styling systems",
    icon: SiTailwindcss,
  },
  {
    name: "Bootstrap",
    category: "frontend",
    description: "Rapid responsive grid & component styling",
    icon: SiBootstrap,
  },
  {
    name: "Material UI",
    category: "frontend",
    description: "Enterprise design system components",
    icon: SiMaterialdesignicons,
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    description: "Event-driven asynchronous server runtimes",
    icon: SiNodedotjs,
  },
  {
    name: "Express.js",
    category: "backend",
    description: "Robust HTTP servers, middleware & routing",
    icon: SiExpress,
  },
  {
    name: "REST API Development",
    category: "backend",
    description: "Secure, structured JSON endpoints & error handling",
    icon: Webhook,
  },
  {
    name: "Python",
    category: "backend",
    description: "Microservices scripting & AI pipeline connectors",
    icon: SiPython,
  },

  // Database
  {
    name: "MongoDB",
    category: "database",
    description: "Document storage, aggregations & indexing",
    icon: SiMongodb,
  },
  {
    name: "MySQL",
    category: "database",
    description: "Relational database schemas & relational queries",
    icon: SiMysql,
  },
  {
    name: "Postgres SQL",
    category: "database",
    description: "Relational database schemas & relational queries",
    icon: SiPostgresql,
  },


  // Architecture & Integration
  {
    name: "Microservices",
    category: "architecture",
    description: "Decoupled services, inter-service APIs & workers",
    icon: Layers,
  },
  {
    name: "Payment Gateways",
    category: "architecture",
    description: "Razorpay, Paytm, Paynimo & Stripe checkout",
    icon: CreditCard,
  },
  {
    name: "Third-Party API Integration",
    category: "architecture",
    description: "Webhooks, SDKs & external platform sync",
    icon: Network,
  },


  // Tools & DevOps
  {
    name: "Git",
    category: "tools",
    description: "Version control & collaborative branch workflows",
    icon: SiGit,
  },

  {
    name: "Postman",
    category: "tools",
    description: "API testing, automated suites & collections",
    icon: SiPostman,
  },
  {
    name: "Nginx",
    category: "tools",
    description: "Reverse proxy, static caching & SSL config",
    icon: SiNginx,
  },
  {
    name: "VS Code",
    category: "tools",
    description: "Primary development environment & debugging",
    icon: AppWindow,
  },

];

export const skillCategories: {
  label: string;
  value: Skill["category"] | "all";
}[] = [
    { label: "All", value: "all" },
    { label: "Frontend", value: "frontend" },
    { label: "Backend", value: "backend" },
    { label: "Databases", value: "database" },
    { label: "Architecture", value: "architecture" },
    { label: "DevOps & Tools", value: "tools" },
  ];
