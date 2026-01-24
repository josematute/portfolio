import { NowItemCategory, type PersonalInfo, type HeroData, type Project, type NowItem, type FooterData } from '@/types'

// Your personal info - reused across components
export const ME: PersonalInfo = {
  name: "Jose Esteban Garcia",
  email: "jemg1210@gmail.com",
  location: "Lehi, UT",
  github: "https://github.com/josematute",
  linkedin: "https://www.linkedin.com/in/jose-garcia-swe/",
  resumeUrl: "https://resume.j3g.dev",
}

export const HERO: HeroData = {
  tagline: "Full-stack (Next.js, TS) + AI workflows",
  proofLine: "Built Bitcoin node API, VIUS construction platform, multi-channel messaging app",
}

export const PROJECTS: Project[] = [
  {
    title: "Bitcoin Node Server",
    pitch: "Custom Bitcoin node API for blockchain data",
    description: "RESTful API wrapper for Bitcoin Core RPC interface",
    thumbnail: null, // Add image path if you have one
    technologies: ["Bitcoin Core", "Node.js", "TypeScript", "REST API"],
    link: null, // Add if live
    github: null, // Add your GitHub link
    impact: "Built scalable infrastructure for Bitcoin network queries",
    duration: "2024",
  },
  {
    title: "BTC Dashboard",
    pitch: "Real-time Bitcoin network monitoring dashboard",
    description: "Visualization tool for Bitcoin blockchain metrics and node health",
    thumbnail: null,
    technologies: ["React", "TypeScript", "Bitcoin RPC", "Charts"],
    link: null,
    github: null,
    impact: "Real-time monitoring of Bitcoin network stats and node performance",
    duration: "2024",
  },
  {
    title: "VIUS Built",
    pitch: "Construction management platform for field teams",
    description: "Project management and reporting tool for construction industry",
    thumbnail: null,
    technologies: ["React", "Next.js", "TypeScript", "PostgreSQL"],
    link: null,
    github: null,
    impact: "Streamlined construction project workflows and reporting",
    duration: "2023-2024",
  },
  {
    title: "1440",
    pitch: "Multi-channel messaging application",
    description: "Unified messaging platform supporting multiple communication channels",
    thumbnail: null,
    technologies: ["React", "TypeScript", "WebSocket", "Node.js"],
    link: null,
    github: null,
    impact: "Built real-time messaging infrastructure with multi-channel support",
    duration: "2023",
  },
]

export const NOW: NowItem[] = [
  {
    category: NowItemCategory.Work,
    content: "Working at RLDatix on hospital incident reporting platform",
    details: ["Claude AI integration", "Flask backend", "React frontend"],
  },
  {
    category: NowItemCategory.Exploring,
    content: "Building Bitcoin infrastructure and experimenting with AI agents",
    details: ["Bitcoin node development", "AI workflow automation"],
  },
]

export const FOOTER: FooterData = {
  lastUpdated: new Date().toISOString().split("T")[0], // YYYY-MM-DD format
}
