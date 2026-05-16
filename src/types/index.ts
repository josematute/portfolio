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
  /** Optional bullet list (e.g. role highlights); rendered as a <ul> when present */
  bullets?: string[]
  thumbnail?: string | null // Optional project image
  technologies: string[] // Tech stack (shown as badges)
  link?: string | null // Live demo/site
  github?: string | null // GitHub repo
  startDate: string // ISO date string (YYYY-MM-DD) or YYYY-MM
  endDate?: string | null // ISO date string or null if ongoing/active
  work?: boolean // Whether the project is a work project
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
  taglines: string[]
  proofLine: string
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
