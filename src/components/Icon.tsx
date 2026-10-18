import type { ContactLink } from '../data/types'

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

export function Icon({ name }: { name: ContactLink['icon'] }) {
  switch (name) {
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <circle cx="5" cy="5" r="2.2" />
          <rect x="3" y="9" width="4" height="12" rx="0.5" />
          <path d="M10 9h3.8v1.7c.6-1.1 2-2 4-2 3.6 0 4.2 2.4 4.2 5.4V21h-4v-6c0-1.4-.1-3.2-2-3.2s-2.2 1.5-2.2 3.1V21H10z" />
        </svg>
      )
    case 'email':
      return (
        <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3.5 6.5 8.5 6 8.5-6" />
        </svg>
      )
    case 'resume':
      return (
        <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true">
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
          <path d="M14 3v5h5" />
          <path d="M9 13h6M9 17h6" />
        </svg>
      )
  }
}
