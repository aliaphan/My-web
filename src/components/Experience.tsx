import { content } from '../data/content'
import type { Job } from '../data/types'
import { SectionHead } from './SectionHead'
import './Experience.css'

function JobEntry({ job, num }: { job: Job; num: number }) {
  return (
    <article className="entry card-base reveal">
      <div className="entry__meta">
        <p className="entry__num">{String(num).padStart(2, '0')}</p>
        <p className="entry__date">{job.dates}</p>
      </div>
      <h3 className="entry__org">{job.org}</h3>
      <p className="entry__role">{job.role}</p>
      <p className="entry__summary">{job.summary}</p>
      <ul className="stats">
        {job.stats.map((stat) => (
          <li key={stat.figure}>
            <strong>{stat.figure}</strong> {stat.text}
          </li>
        ))}
      </ul>
    </article>
  )
}

export function Experience() {
  return (
    <section className="section section--tint" id="experience">
      <div className="container">
        <SectionHead ghost="Experience" title="Work" accent="experience" />
        {content.jobs.map((job, i) => (
          <JobEntry key={`${job.org}-${job.role}`} job={job} num={i + 1} />
        ))}
      </div>
    </section>
  )
}
