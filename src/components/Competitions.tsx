import { content } from '../data/content'
import type { Program } from '../data/types'
import { ResultBlock } from './ResultBlock'
import { SectionHead } from './SectionHead'
import './Competitions.css'

const { featured, programs, recognition } = content

function FeaturedCard() {
  return (
    <article className="feature reveal">
      <div className="feature__media">
        <img {...featured.image} loading="lazy" />
        <span className="feature__big" aria-hidden="true">
          {featured.badge.number}
          <sup>{featured.badge.suffix}</sup>
        </span>
      </div>
      <div className="feature__body">
        <p className="label">{featured.meta}</p>
        <h3 className="feature__title">
          {featured.title} <em>{featured.titleAccent}</em>
        </h3>
        <p className="feature__role">{featured.role}</p>

        <h4 className="mini-label">What I did</h4>
        <p>{featured.did}</p>

        <ResultBlock result={{ text: featured.result }} />

        <div className="feature__actions">
          <a className="btn btn--primary" href={featured.primaryLink.href} target="_blank" rel="noopener">
            {featured.primaryLink.label} <span aria-hidden="true">↗</span>
          </a>
          <a className="link-arrow" href={featured.secondaryLink.href} target="_blank" rel="noopener">
            {featured.secondaryLink.label}
          </a>
        </div>
      </div>
    </article>
  )
}

function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="card card-base reveal">
      <p className="card__date">{program.dates}</p>
      <h3 className="card__title">{program.title}</h3>
      <p className="card__role">{program.role}</p>
      {program.did && (
        <>
          <h4 className="mini-label">What I did</h4>
          <p>{program.did}</p>
        </>
      )}
      {program.result && <ResultBlock result={program.result} />}
      {program.link && (
        <a className="link-arrow card__link" href={program.link.href} target="_blank" rel="noopener">
          {program.link.label}
        </a>
      )}
    </article>
  )
}

export function Competitions() {
  return (
    <section className="section" id="competitions">
      <div className="container">
        <SectionHead ghost="Programs" title="Competitions" accent="& programs" />

        <FeaturedCard />

        <div className="programs">
          {programs.map((program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </div>

        <div className="recognition reveal">
          <h3 className="mini-label">Recognition</h3>
          <ul className="recognition__list">
            {recognition.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
