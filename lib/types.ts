import type { ComponentType } from "react";

export type IconComponent = ComponentType<{
  className?: string;
  size?: number | string;
}>;

export interface NavigationItem {
  label: string;
  href: string;
  id: string;
}

export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "architecture"
  | "tools";

export interface Skill {
  name: string;
  category: SkillCategory;
  description: string;
  icon: IconComponent;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  techStack?: string[];
  responsibilities: string[];
  current?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  highlights?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  description: string;
  status: "done" | "active" | "upcoming";
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}
