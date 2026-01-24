import { NowItemCategory, type PersonalInfo, type HeroData, type NowItem, } from '@/types'

// Your personal info - reused across components
export const ME: PersonalInfo = {
  name: "Jose Esteban Garcia",
  email: "jemg1210@gmail.com",
  location: "Lehi, UT",
  github: "https://github.com/josematute",
  linkedin: "https://www.linkedin.com/in/jose-garcia-swe/",
  resumeUrl: "https://resume.j3g.dev",
  localImage: "/yo.jpeg",
}

export const HERO: HeroData = {
  taglines: [
    "Full-stack Developer (React + Python)",
    "Building AI workflows with Langgraph and Claude",
    "Frontend Developer (React, Vite, Tanstack Query & Router)",
    "Backend Developer (Flask, FastAPI, PostgreSQL, Supabase)",
    "Mobile Developer (Flutter & React Native)",
    "Exploring AI Agents with Langchain",
  ],
  proofLine: "Built fullstack applications using technologies like React, Flask, PostgreSQL, Supabase, and more",
}

export const NOW: NowItem[] = [
  {
    category: NowItemCategory.Work,
    content: "Working at RLDatix on hospital incident reporting platform",
    details: ["Claude AI integration", "Flask backend", "React frontend", "RabbitMQ + Celery"],
  },
  {
    category: NowItemCategory.Exploring,
    content: "Experimenting with AI agents and tools, Python development",
    details: ["AI workflow automation", "FastAPI", "Cursor"],
  },
]
