import type { ReactNode } from 'react'

interface SectionHeadProps {
  /** Big faded word behind the heading */
  ghost: string
  title: string
  accent: string
  className?: string
  children?: ReactNode
}

export function SectionHead({ ghost, title, accent, className = '', children }: SectionHeadProps) {
  return (
    <header className={`section-head reveal ${className}`}>
      <span className="section-head__ghost" aria-hidden="true">
        {ghost}
      </span>
      <h2>
        {title} <em>{accent}</em>
      </h2>
      {children}
    </header>
  )
}
