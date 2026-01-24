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
  proofLine: "Building AI-assisted, production-grade full-stack apps: React + TanStack on the frontend, Python (Flask/FastAPI) on the backend, PostgreSQL data models, background workers (Celery + RabbitMQ), and embedding-based duplicate detection for real-world workflows",
}

export const NOW: NowItem[] = [
  {
    category: NowItemCategory.Work,
    content: "Building a hospital incident reporting platform at RLDatix",
    details: [
      "AI chatbot that converts incident narratives into structured form fields (severity, medications, stakeholders, and more)",
      "Duplicate incident detection using embeddings to reduce repeat submissions",
      "Form builder with templates, editing, and follow-up workflows after submission",
      "React + TanStack Query/Router + Material UI frontend",
      "Python Flask backend with async/background processing (Celery + RabbitMQ) and PostgreSQL",
      "Local dev and deployment consistency with Docker Compose and Nginx",
    ],
  },
  {
    category: NowItemCategory.Exploring,
    content: "Experimenting with AI agents, workflows, and Python tooling",
    details: [
      "LangGraph and LangChain workflow and agent patterns for extraction, routing, and automation",
      "FastAPI experiments and reference implementations",
      "Using Cursor IDE for development to write code faster and catch up with the latest AI tools",
    ],
  },
]
