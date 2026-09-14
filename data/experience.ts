import type { WorkExperience, EducationItem, CertificationItem } from "@/lib/types";

export const workExperience: WorkExperience[] = [
  {
    id: "dot-com-infoway",
    role: "Full Stack Developer",
    company: "Dot Com Infoway",
    period: "Sep 2025 – Aug 2026",
    location: "Madurai, Tamil Nadu",
    techStack: [
      "React.js",
      "Next.js",
      "Node.js",
      "MySql",
      "Python Microservices",
      "REST APIs",
      "Razorpay",
      "Paytm",
      "Paynimo",
    ],
    responsibilities: [
      "Contributed to Alfred, an AI-powered social media agent, building REST APIs, user management, and an Admin Panel within a Node.js/Python microservices architecture.",
      "Migrated a client's sponsorship platform from React.js to Next.js and integrated Razorpay, Paytm, and Paynimo payment gateways.",
      "Collaborated across frontend and backend teams to deliver end-to-end features, fix production issues, and support live deployments.",
    ],
    current: true,
  },
  {
    id: "wizinoa",
    role: "Full Stack Developer",
    company: "Wizinoa Pvt Ltd",
    period: "Dec 2024 – Aug 2025",
    location: "Madurai, Tamil Nadu",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Multi-Role Auth"],
    responsibilities: [
      "Designed and developed Dreamswed, an end-to-end wedding planner booking platform with vendor and user booking workflows.",
      "Built a multi-role system with a City Manager approval workflow and an Admin module for platform oversight.",
      "Engineered secure REST APIs, role-based access control, and database schemas in MongoDB.",
    ],
  },
  {
    id: "shiv-technologies",
    role: "Full Stack Developer",
    company: "Shiv Technologies",
    period: "Feb 2024 – Dec 2024",
    location: "Madurai, Tamil Nadu",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "NodeMailer",
      "Cron Jobs",
    ],
    responsibilities: [
      "Developed Tradedge, a trading analytics platform unifying MT4/MT5 data with a real-time dashboard and Playbook feature.",
      "Integrated Stripe for payments and NodeMailer for automated notifications, with cron jobs powering scheduled reports.",
      "Built account privacy toggles giving users granular control over their trading history and profile visibility.",
    ],
  },
];

export const educationList: EducationItem[] = [
  {
    id: "ptr-engineering",
    degree: "Bachelor of Engineering (B.E)",
    institution: "PTR College of Engineering and Technology",
    period: "2018 – 2022",
    grade: "CGPA: 8.83",
    highlights: [
      "Graduated with distinction (8.83 CGPA)"
    ],
  },
];

export const certificationsList: CertificationItem[] = [
  {
    id: "ace-academy",
    title: "Full Stack Development Certification",
    issuer: "Ace Software Training Academy",
  },
];
