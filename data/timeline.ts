import type { TimelineItem } from "@/lib/types";

export const timeline: TimelineItem[] = [
  {
    id: "foundations",
    title: "Full-stack foundations",
    description:
      "Built a working base across JavaScript, TypeScript, React, and Node.js, focused on writing clean, maintainable code.",
    status: "done",
  },
  {
    id: "real-projects",
    title: "Shipping real projects",
    description:
      "Applying that base to complete, end-to-end applications rather than isolated exercises — from data model to deployed UI.",
    status: "done",
  },
  {
    id: "advanced-js",
    title: "Advanced JavaScript",
    description:
      "Going deeper on asynchronous patterns, performance, and the language internals that sit underneath everyday framework code.",
    status: "active",
  },
  {
    id: "nextjs",
    title: "Next.js in depth",
    description:
      "Exploring the App Router, server components, and the boundary between server and client in production-shaped apps.",
    status: "active",
  },
  {
    id: "backend-apis",
    title: "Backend & API design",
    description:
      "Designing REST APIs with proper validation, authentication, and data modeling across MongoDB and SQL.",
    status: "upcoming",
  },
  {
    id: "deployment",
    title: "Deployment & production workflows",
    description:
      "Learning CI/CD, environment configuration, and the operational side of keeping an application healthy after launch.",
    status: "upcoming",
  },
];
