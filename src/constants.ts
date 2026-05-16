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
    content: "Full-stack on a hospital incident reporting platform at RLDatix",
    details: [
      "Build and maintain full-stack product work across Python/Flask, React/TypeScript, SQLAlchemy, Alembic, PostgreSQL, TanStack Query, TanStack Router, and Material UI, spanning backend APIs, database schemas and migrations, and frontend workflows.",
      "Develop LangGraph-based agentic workflows for healthcare incident reporting, including natural-language intake, duplicate detection, form selection, and structured field extraction on complex clinical forms, with LangSmith for tracing and debugging.",
      "Partner regularly with the integration team and cloud team on EHR-backed clinical context for incident forms (Epic, Cerner, and similar), plus environments, PostgreSQL changes, and managed deployment requirements.",
      "Use AI-assisted development with structured markdown context in the repo to design and ship high-quality product features faster for customers.",
    ],
  },
  {
    category: NowItemCategory.Building,
    content: "Building FloorPilot...",
    details: [
      "Web app for flooring companies coordinating complex, client-facing work: structured data capture and collaboration in one place so companies can run repeatable workflows without losing context across people and accounts.",
      "Stack includes FastAPI, React, Vite, SQLModel, Alembic, PostgreSQL, TanStack Router and Query, Clerk, Docker, Neon, Railway, and Cloudflare Pages.",
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
