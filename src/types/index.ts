export interface PersonalInfo {
  name: string
  email: string
  location: string
  github: string
  linkedin: string
  resumeUrl: string
  localImage: string
}

export interface Project {
  title: string
  pitch: string // One-line description
  description?: string // Optional longer description
  thumbnail?: string | null // Optional project image
  technologies: string[] // Tech stack (shown as badges)
  link?: string | null // Live demo/site
  github?: string | null // GitHub repo
  impact?: string // What you built/achieved (1 bullet)
  duration?: string // Optional timeframe
}

export enum NowItemCategory {
  Work = "work",
  Building = "building",
  Exploring = "exploring",
}

export interface NowItem {
  category: NowItemCategory
  content: string
  details?: string[]
}

export interface HeroData {
  tagline: string
  proofLine: string
}

export interface FooterData {
  lastUpdated: string // ISO date string or human-readable
}

// Theme management (for future dark mode toggle)
export enum Theme {
  Light = "light",
  Dark = "dark",
  System = "system",
}

// Optional: if you want to extend with experience data later
export interface Position {
  title: string
  duration: string
  description: string[]
}

export interface Company {
  name: string
  logo?: string
  location: string
  workMode?: string
  positions: Position[]
  technologies: string[]
}
