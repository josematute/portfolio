import type { Company, Education, Language, Project, SkillCategory } from "@/types"

export const companies: Company[] = [
  {
    name: "VIUS Built",
    logo: "/viusbuilt_logo.jpeg",
    positions: [
      {
        title: "Software Engineer",
        duration: "Feb 2024 – May 2025",
        description: [
          "Full-stack role using Next.js (App Router, SSR, Server Actions)",
          "Integrated AI APIs (OpenAI, Gemini) for document parsing",
          "Used Supabase (Postgres, RPC, RLS), Docker, and Express for backend tooling",
        ],
      },
    ],
    technologies: ["Next.js", "React", "Supabase", "OpenAI", "Gemini", "Docker", "Express", "TypeScript"],
  },
  {
    name: "1440",
    logo: "/reputationstudio_logo.jpeg",
    positions: [
      {
        title: "Software Engineer",
        duration: "Sep 2023 – Feb 2024",
        description: [
          "Worked on a multi-communication app for Salesforce",
          "Used Flutter, Salesforce GraphQL and REST APIs, SOQL, Provider, and state management",
          "Led development of key features and mentored junior team members",
        ],
      },
      {
        title: "Intern",
        duration: "May 2023 – Sep 2023",
        description: [
          "Contributed to the development of Salesforce integration features",
          "Implemented UI components using Flutter and managed state with Provider",
          "Collaborated with the team to improve app performance and user experience",
        ],
      },
    ],
    technologies: ["Flutter", "Salesforce", "GraphQL", "REST", "SOQL", "Provider", "Dart"],
  },
  {
    name: "Sorenson Communications",
    logo: "/sorenson_communications_logo.jpeg",
    positions: [
      {
        title: "Intern",
        duration: "May 2022 – Aug 2022",
        description: [
          "Built a Flutter-based web project",
          "Developed a React extension for Microsoft Teams",
          "Collaborated with the design team to implement responsive UI components",
        ],
      },
    ],
    technologies: ["Flutter", "React", "Microsoft Teams", "JavaScript"],
  },
]

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of California, Berkeley",
    location: "Berkeley, CA",
    duration: "2019 – 2023",
    description:
      "Focused on software engineering, distributed systems, and artificial intelligence. Graduated with honors.",
    logo: "/university_of_utah_logo.jpeg",
  },
]

export const projects: Project[] = [
  {
    title: "CryptoTracker",
    description:
      "A real-time cryptocurrency tracking application with price alerts and portfolio management. Features include market data visualization, custom alerts, and transaction history.",
    thumbnail: "/placeholder.svg?height=200&width=350",
    skills: ["React", "Node.js", "Chart.js", "CoinGecko API", "Firebase"],
    link: "https://crypto-tracker-demo.com",
    github: "https://github.com/josegarcia/crypto-tracker",
    duration: "Jan 2023 – Mar 2023",
  },
  {
    title: "AI Document Parser",
    description:
      "An application that uses AI to extract and categorize information from various document types. Supports PDFs, images, and scanned documents with high accuracy text extraction.",
    thumbnail: "/placeholder.svg?height=200&width=350",
    skills: ["Next.js", "OpenAI API", "Supabase", "TypeScript", "Tailwind CSS"],
    link: "https://ai-document-parser.vercel.app",
    github: "https://github.com/josegarcia/ai-document-parser",
    duration: "Oct 2023 – Dec 2023",
  },
  {
    title: "Smart Home Dashboard",
    description:
      "A centralized dashboard for controlling and monitoring smart home devices. Integrates with multiple IoT platforms and provides automation capabilities.",
    thumbnail: "/placeholder.svg?height=200&width=350",
    skills: ["Flutter", "Firebase", "MQTT", "REST APIs", "Material Design"],
    github: "https://github.com/josegarcia/smart-home-dashboard",
    duration: "Apr 2023 – Jun 2023",
  },
]

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 5 },
      { name: "Next.js", level: 5 },
      { name: "Flutter", level: 4 },
      { name: "HTML/CSS", level: 5 },
      { name: "Tailwind CSS", level: 4 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 4 },
      { name: "Express", level: 4 },
      { name: "Supabase", level: 4 },
      { name: "PostgreSQL", level: 3 },
      { name: "Salesforce", level: 4 },
    ],
  },
  {
    name: "Languages",
    skills: [
      { name: "TypeScript", level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "Dart", level: 4 },
      { name: "Python", level: 3 },
      { name: "SQL", level: 4 },
    ],
  },
  {
    name: "Tools & Technologies",
    skills: [
      { name: "Git", level: 5 },
      { name: "Docker", level: 3 },
      { name: "CI/CD", level: 3 },
      { name: "AI APIs (OpenAI, Gemini)", level: 4 },
      { name: "REST/GraphQL", level: 4 },
    ],
  },
]

export const languages: Language[] = [
  { name: "English", proficiency: "Fluent", level: 5 },
  { name: "Spanish", proficiency: "Native", level: 5 },
]
