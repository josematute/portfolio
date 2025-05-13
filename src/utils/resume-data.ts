import { LanguageProficiency, type Company, type Education, type Language, type Project, type SkillCategory } from "@/types"

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
    title: "Bitcoin Node Server",
    description:
      "A TypeScript-based Express server that interfaces with a self-hosted Bitcoin node, providing blockchain data via a RESTful API. Utilizes TSOA for API documentation and adheres to separation of concerns principles.",
    thumbnail: "/btc-server.png",
    skills: ["TypeScript", "Express", "TSOA", "Bitcoin Core", "REST API"],
    link: "https://jeg.ngrok.app/docs/",
    github: "https://github.com/josematute/bitcoin-node-server",
    duration: "Mar 2025 – Present",
  },
  {
    title: "BTC Dashboard",
    description:
      "A frontend dashboard built with Next.js and Tailwind CSS that displays real-time Bitcoin blockchain data fetched from the Bitcoin Node Server.",
    thumbnail: "/btc-frontend.png",
    skills: ["Next.js", "Tailwind CSS", "REST API", "Bitcoin"],
    link: "https://btc-dashboard-kl97.vercel.app/login",
    github: "https://github.com/josematute/btc_dashboard",
    duration: "Mar 2025 – Present",
  },
  {
    title: "VIUS Built – Estimating & Project Management Web App",
    description:
      "Developed a full-stack construction management platform using Next.js with server components, server actions, and SWR. Built backend features with Express and integrated OpenAI/Gemini APIs for document parsing and automation. Managed data with Supabase (Postgres, RPCs, RLS) and Docker, enabling accurate estimate generation and streamlined subcontractor workflows.",
    thumbnail: "/vius_estimating.webp",
    skills: ["Next.js", "Supabase", "OpenAI API", "Gemini API", "Express", "Docker", "PostgreSQL"],
    link: "https://app.viusbuilt.com/",
    github: null,
    duration: "March 2024 – May 2025",
  },
  {
    title: "1440 – Multi-Channel Messaging App",
    description:
      "A cross-platform mobile app built with Flutter that unifies messaging from platforms like WhatsApp, Facebook Messenger, and Twitter for organizations using Salesforce. Integrated Salesforce GraphQL and REST APIs, implemented SOQL queries, and managed app state with Provider to enable seamless, real-time communication within a single app interface.",
    thumbnail: "/1440_appstore.png",
    skills: ["Flutter", "Salesforce", "GraphQL", "REST APIs", "SOQL", "Provider"],
    link: "https://apps.apple.com/us/app/1440-mobile/id6468288380",
    github: null,
    duration: "May 2023 – Feb 2024",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 4 },
      { name: "Next.js", level: 4 },
      { name: "Flutter", level: 4 },
      { name: "Tailwind CSS", level: 4 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 4 },
      { name: "Express", level: 4 },
      { name: "Supabase", level: 4 },
      { name: "PostgreSQL", level: 4 },
      { name: "Salesforce", level: 3 },
    ],
  },
  {
    name: "Languages",
    skills: [
      { name: "TypeScript", level: 4 },
      { name: "JavaScript", level: 4 },
      { name: "SQL", level: 4 },
      { name: "Dart", level: 3 },
      { name: "Python", level: 3 },
    ],
  },
  {
    name: "Tools & Technologies",
    skills: [
      { name: "Git", level: 5 },
      { name: "AI APIs (OpenAI, Gemini)", level: 4 },
      { name: "REST/GraphQL", level: 4 },
      { name: "Docker", level: 3 },
      { name: "CI/CD", level: 3 },
    ],
  },
]

export const languages: Language[] = [
  { name: "English", proficiency: LanguageProficiency.Fluent, level: 5 },
  { name: "Spanish", proficiency: LanguageProficiency.Native, level: 5 },
]
