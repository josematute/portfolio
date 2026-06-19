import type { Project } from "@/types";

const PROJECTS_UNSORTED: Project[] = [
  {
    title: "Hospital Incident Reporting Platform",
    pitch: "AI-assisted incident form extraction and workflow management",
    bullets: [
      "Build and maintain full-stack product work across Python/Flask, React/TypeScript, SQLAlchemy, Alembic, PostgreSQL, TanStack Query, TanStack Router, and Material UI, spanning backend APIs, database schemas and migrations, and frontend workflows.",
      "Develop LangGraph-based agentic workflows for healthcare incident reporting, including natural-language intake, duplicate detection, form selection, and structured field extraction on complex clinical forms, with LangSmith for tracing and debugging.",
      "Partner regularly with the integration team and cloud team on EHR-backed clinical context for incident forms (Epic, Cerner, and similar), plus environments, PostgreSQL changes, and managed deployment requirements.",
      "Use AI-assisted development with structured markdown context in the repo to design and ship high-quality product features faster for customers.",
    ],
    thumbnail: "/RLDatix logo.webp",
    technologies: ["React", "Vite", "TypeScript", "TanStack Query", "TanStack Router", "Material UI", "Python", "Flask", "PostgreSQL", "SQLAlchemy", "Alembic", "Docker", "RabbitMQ", "Celery", "Embeddings", "Claude", "LangGraph", "LangSmith", "LangChain"],
    link: null,
    github: null,
    startDate: "2025-09",
    endDate: null, // Active/ongoing
    work: true,
  },
  {
    title: "Cue Up",
    pitch: "Real-time collaborative song voting app for parties",
    description: "Party host creates polls with song options, guests vote in real-time, and results update live. Features AI-powered song suggestions, custom party images, anonymous voting, and live presence tracking",
    thumbnail: "/cueup.png",
    technologies: ["React", "TypeScript", "TanStack Router", "TanStack Query", "Supabase", "PostgreSQL", "Tailwind CSS", "shadcn/ui"],
    link: null,
    github: null,
    startDate: "2026-01",
    endDate: "2026-02",
    work: false,
  },
  {
    title: "FloorPilot",
    pitch: "Structured workflows and collaboration for client-facing teams",
    description: "Web app for flooring companies coordinating complex, client-facing work: structured data capture and collaboration in one place so companies can run repeatable workflows without losing context across people and accounts.",
    thumbnail: "/floorpilot_logo.jpg",
    technologies: [
      "Python",
      "FastAPI",
      "TypeScript",
      "React",
      "Vite",
      "PostgreSQL",
      "SQLModel",
      "Alembic",
      "TanStack Router",
      "TanStack Query",
      "Clerk",
      "Docker",
      "Tailwind CSS",
      "shadcn/ui",
      "Neon",
      "Railway",
      "Cloudflare Pages",
    ],
    link: "https://app.floorpilotselections.com",
    github: null,
    startDate: "2026-03",
    endDate: null,
    work: false,
  },
  {
    title: "SQL LangGraph Agent",
    pitch: "Conversational SQL agent with memory using LangChain and LangGraph",
    description: "Intelligent SQL database assistant that uses natural language to query any SQL database. Features conversation memory through LangGraph checkpointing, multi-database support (PostgreSQL, MySQL, SQLite), and LangSmith tracing for debugging.",
    thumbnail: "/sql-agent.gif",
    technologies: ["Python", "LangChain", "LangGraph", "OpenAI", "AWS Bedrock", "PostgreSQL", "SQLAlchemy", "Docker", "LangSmith"],
    link: null,
    github: "https://github.com/josematute/sql-langgraph-agent",
    startDate: "2025-11",
    endDate: "2025-12",
    work: false,
  },
  {
    title: "Recipe API",
    pitch: "FastAPI reference implementation with real-time features",
    description: "Comprehensive FastAPI showcase demonstrating SQLAlchemy 2.0, JWT auth, WebSocket notifications, background tasks with Celery, and full-stack patterns",
    thumbnail: "/recipe_api.png",
    technologies: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "Celery", "Redis", "WebSocket", "JWT"],
    link: null,
    github: "https://github.com/josematute/fast_api_playground",
    startDate: "2025-12",
    endDate: "2025-12",
    work: false,
  },
  {
    title: "Bitcoin Node Server",
    pitch: "Custom Bitcoin node API for blockchain data",
    description: "RESTful API wrapper for Bitcoin Core RPC interface",
    thumbnail: "/btc-server.png",
    technologies: ["Bitcoin Core", "Node.js", "TypeScript", "Digital Ocean"],
    link: null,
    github: "https://github.com/josematute/bitcoin-node-server",
    startDate: "2025-03",
    endDate: "2025-06",
    work: false,
  },
  {
    title: "BTC Dashboard",
    pitch: "Real-time Bitcoin network monitoring dashboard",
    description: "Visualization tool for Bitcoin blockchain metrics like block height, difficulty, node health, etc",
    thumbnail: "/btc-frontend.png",
    technologies: ["React", "Next.js", "TypeScript", "Bitcoin RPC", "Charts"],
    link: null,
    github: "https://github.com/josematute/btc_dashboard",
    startDate: "2025-05",
    endDate: "2025-07",
    work: false,
  },
  {
    title: "VIUS Built",
    pitch: "Construction estimating and project management software",
    description: "Construction management software for general contractors like estimating, project management, and more",
    thumbnail: "/estimating.png",
    technologies: ["React", "Next.js", "TypeScript", "Supabase"],
    link: null,
    github: null,
    startDate: "2024-02",
    endDate: "2025-05",
    work: true,
  },
  {
    title: "1440",
    pitch: "Multi-channel messaging application",
    description: "Unified messaging platform supporting multiple communication channels like Whatsapp, Messenger, Instagram and others for Salesforce customers",
    thumbnail: "/1440_appstore.png",
    technologies: ["Flutter", "Dart", "Salesforce", "Firebase", "GraphQL"],
    link: "https://apps.apple.com/us/app/1440-mobile/id6468288380",
    github: null,
    startDate: "2023-05",
    endDate: "2024-02",
    work: true,
  },
]

// Sort projects: active first (no endDate), then by most recent, work projects as tiebreaker
export const PROJECTS = PROJECTS_UNSORTED.sort((a, b) => {
  const aActive = !a.endDate
  const bActive = !b.endDate

  // Active projects always come first
  if (aActive && !bActive) return -1
  if (!aActive && bActive) return 1

  // For active projects (both have no endDate)
  if (aActive && bActive) {
    // Work projects first
    if (a.work && !b.work) return -1
    if (!a.work && b.work) return 1

    // Then sort by most recent startDate
    return b.startDate.localeCompare(a.startDate)
  }

  // For completed projects (both have endDate)
  // Sort by most recent endDate
  if (a.endDate && b.endDate) {
    const endDateComparison = b.endDate.localeCompare(a.endDate)
    if (endDateComparison !== 0) return endDateComparison

    // If same endDate, work projects first
    if (a.work && !b.work) return -1
    if (!a.work && b.work) return 1
  }

  return 0
})
