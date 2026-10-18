import { useEffect, useRef, useState } from 'react'
import { RESUME_URL } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'
import { scrollToTop } from '../utils/scrollToTop'
import './Header.css'

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection()
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Escape closes the mobile menu
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header${menuOpen ? ' is-open' : ''}`}>
      <nav className="nav" aria-label="Main">
        <ul className="nav__links" id="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={activeId === link.id ? 'true' : undefined}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav__mobile-only">
            <a href={RESUME_URL} target="_blank" rel="noopener" onClick={closeMenu}>
              Résumé (PDF)
            </a>
          </li>
        </ul>

        <a className="brand" href="#home" onClick={scrollToTop}>
          Alia <em>Phan</em>
        </a>

        <div className="nav__meta">
          <a className="nav__resume" href={RESUME_URL} target="_blank" rel="noopener">
            Résumé <span aria-hidden="true">↗</span>
          </a>
          <button
            ref={toggleRef}
            className="nav__toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="nav-links"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>
    </header>
  )
}
