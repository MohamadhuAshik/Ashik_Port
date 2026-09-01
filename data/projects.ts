import type { Project } from "@/lib/types";

/**
 * Replace these entries with your real projects.
 * Set `featured: true` on exactly one project to control the large showcase slot.
 * `image` should point to a file inside /public/images.
 */
export const projects: Project[] = [
  {
    id: "project-one",
    title: "Project Name One",
    category: "Full-Stack Application",
    description:
      "Replace this with a short, concrete description of what the project does, who it's for, and the problem it solves.",
    image: "/images/project-placeholder-1.svg",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    id: "project-two",
    title: "Project Name Two",
    category: "Web Application",
    description:
      "Replace this with a short, concrete description of what the project does and the core features it ships.",
    image: "/images/project-placeholder-2.svg",
    technologies: ["React", "Node.js", "Express.js", "MySQL"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "project-three",
    title: "Project Name Three",
    category: "API / Backend",
    description:
      "Replace this with a short, concrete description covering the API design, auth strategy, and data model.",
    image: "/images/project-placeholder-3.svg",
    technologies: ["Node.js", "Express.js", "MongoDB", "REST"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "project-four",
    title: "Project Name Four",
    category: "Frontend Tool",
    description:
      "Replace this with a short, concrete description of the interface problem this project solves.",
    image: "/images/project-placeholder-4.svg",
    technologies: ["React", "TypeScript", "Vite"],
    liveUrl: "",
    githubUrl: "",
  },
];

export const featuredProject = projects.find((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);
