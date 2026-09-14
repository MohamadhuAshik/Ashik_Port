import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "alfred-ai-platform",
    title: "Alfred — Social Media Agent (Simbli AI Platform)",
    category: "AI & Microservices",
    description:
      "Contributed to Alfred, an AI-powered social media agent within Simbli's microservices-based platform, enabling users to connect social accounts and create, publish, or schedule content. Built user management, dedicated Admin Panel, and integrated Zernio for multi-account publishing.",
    image: "/images/alfred-ai.png",
    technologies: [
      "React.js",
      "Node.js",
      "Python Microservices",
      "REST APIs",
      "MySQL",
      "Zernio API",
    ],
    liveUrl: "www.simbli.ai",

    featured: true,
  },
  {
    id: "worldvision-donation-platform",
    title: "World Vision India — Sponsorship & Donation Platform",
    category: "Full-Stack CMS & SSR",
    description:
      "Engineered a fully CMS-driven sponsorship platform for World Vision India, migrated from React.js to Next.js with Server-Side Rendering (SSR) across 50+ pages for improved SEO and performance. Integrated Razorpay, Paytm, and Paynimo payment gateways for recurring child sponsorships.",
    image: "/images/worldvision.png",
    technologies: [
      "Next.js (SSR)",
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Razorpay",
      "Paytm",
      "Paynimo",
    ],
    liveUrl: "https://www.worldvision.in",

  },
  {
    id: "dreamswed-wedding-platform",
    title: "Dreamswed — Wedding Planner Booking Platform",
    category: "Marketplace & Booking",
    description:
      "Designed and developed an end-to-end wedding service booking platform (dreamswed.com) enabling users to search, book, and pay for wedding vendors. Built a multi-role system with City Manager approval workflows and an Admin module for platform oversight.",
    image: "/images/dreamswed.png",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Multi-Role Auth",
      "Schema Design",
    ],
    liveUrl: "https://dreamswed.com",

  },
  {
    id: "tradedge-trading-platform",
    title: "Tradedge — Trading Analytics & Playbook Platform",
    category: "Fintech & Analytics",
    description:
      "Developed an end-to-end trading analytics web application unifying MT4 and MT5 data with a real-time dashboard and Playbook feature. Integrated Stripe for payments, NodeMailer for notifications, account privacy toggles, and cron jobs powering scheduled reports.",
    image: "/images/tradedge.png",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "NodeMailer",
      "Cron Jobs",
    ],
    liveUrl: "",
  },
  {
    id: "shopsy-ecommerce-platform",
    title: "Shopsy — E-Commerce Fashion Platform",
    category: "E-Commerce Application",
    description:
      "Built a modern full-stack e-commerce fashion storefront featuring dynamic product collections, category filters, responsive product showcases, cart functionality, and streamlined checkout.",
    image: "/images/shopsy.png",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Netlify",
    ],
    liveUrl: "https://shopsy-ecomfront.netlify.app",

  },
];

export const featuredProject = projects.find((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);
