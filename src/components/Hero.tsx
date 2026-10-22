import { content } from '../data/content'
import type { ContactLink } from '../data/types'
import { Icon } from './Icon'
import './Hero.css'

const { hero, contact } = content
const ICON_ORDER: ContactLink['icon'][] = ['linkedin', 'email', 'resume']
const heroLinks = ICON_ORDER.flatMap((icon) => contact.links.filter((link) => link.icon === icon))

export function Hero() {
  return (
    <section className="hero" id="home">
      <span className="hero__oval" aria-hidden="true" />

      <div className="hero__center">
        <h1 className="hero__title">{hero.title}</h1>
        <p className="hero__tagline">{hero.tagline}</p>
        <p className="hero__meta">{hero.meta}</p>

        <ul className="hero__chips" aria-label="Highlights">
          {hero.chips.map((chip) => (
            <li className="chip" key={chip.figure}>
              <strong>{chip.figure}</strong> {chip.text}
            </li>
          ))}
        </ul>

        <ul className="hero__links">
          {heroLinks.map((link) => (
            <li key={link.icon}>
              <a
                className="icon-link"
                href={link.href}
                {...(link.external && { target: '_blank', rel: 'noopener' })}
              >
                <span className="icon-link__circle" aria-hidden="true">
                  <Icon name={link.icon} />
                </span>
                <span className="icon-link__label">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <img className="hero__flower" src="/images/flower-hibiscus.png" alt="" width={416} height={404} />
    </section>
  )
}
