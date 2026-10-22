import type { ReactNode } from 'react'

/** A link to a PDF or other page. `ariaLabel` adds detail for screen readers. */
export interface DocLink {
  href: string
  label: string
  ariaLabel?: string
}

/** A big number with a few words of context, e.g. "700+" + "records a month". */
export interface Stat {
  figure: string
  text: string
}

export interface Job {
  dates: string
  org: string
  role: string
  summary: string
  stats: Stat[]
}

export interface Program {
  dates: string
  title: string
  role: string
  summary: string
  link?: DocLink
}

export interface FeaturedProgram {
  meta: string
  title: string
  titleAccent: string
  role: string
  result: string
  image: { src: string; alt: string; width: number; height: number }
  badge: { number: string; suffix: string }
  primaryLink: DocLink
  secondaryLink: DocLink
}

export interface Project {
  kind: string
  title: string
  titleAccent: string
  role: string
  /** One line: what you found or recommended. */
  result: string
  link?: DocLink
  /** Set to true to keep a project off the site without deleting it. */
  hidden?: boolean
}

export interface SkillGroup {
  title: string
  note?: string
  items: (string | DocLink)[]
}

export interface ContactLink {
  label: string
  href: string
  text: string
  icon: 'linkedin' | 'email' | 'resume'
  external: boolean
}

export interface SiteContent {
  hero: { title: ReactNode; tagline: string; meta: string; chips: Stat[] }
  about: { intro: ReactNode; body: ReactNode[] }
  jobs: Job[]
  featured: FeaturedProgram
  programs: Program[]
  recognition: string[]
  projectsIntro: string
  projects: Project[]
  education: {
    school: string
    place: string
    degree: string
    facts: string[]
    coursework: string[]
  }
  skills: SkillGroup[]
  contact: { lede: string; links: ContactLink[] }
}
