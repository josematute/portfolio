export interface Position {
  title: string
  duration: string
  description: string[]
}

export interface Company {
  name: string
  logo: string
  positions: Position[]
  technologies: string[]
}

export interface Education {
  degree: string
  institution: string
  location: string
  duration: string
  description?: string
  logo: string
}

export interface Project {
  title: string
  description: string
  thumbnail: string
  skills: string[]
  link?: string
  github?: string
  duration: string
}

export interface Skill {
  name: string
  level: number // 1-5
}

export interface SkillCategory {
  name: string
  skills: Skill[]
}

export interface Language {
  name: string
  proficiency: "Native" | "Fluent" | "Professional" | "Intermediate" | "Basic"
  level: number // 1-5
}
