import type { MouseEvent } from 'react'

/** Click handler for "#home" links: always scrolls to the top, even if the URL already ends in #home. */
export function scrollToTop(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault()
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
}
