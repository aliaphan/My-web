import { content } from '../data/content'
import type { Job } from '../data/types'
import { ResultBlock } from './ResultBlock'
import { SectionHead } from './SectionHead'
import './Experience.css'

function JobEntry({ job, num }: { job: Job; num: number }) {
  return (
    <article className="entry card-base reveal">
      <div className="entry__meta">
        <p className="entry__num">{String(num).padStart(2, '0')}</p>
        <p className="entry__date">{job.dates}</p>
      </div>
      <div className="entry__main">
        <h3 className="entry__org">{job.org}</h3>
        <p className="entry__role">{job.role}</p>

        {job.subRoles && (
          <ul className="role-list">
            {job.subRoles.map((sub) => (
              <li key={sub.title}>
                <span>{sub.title}</span>
                <span>{sub.dates}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="entry__body">
          <div>
            <h4 className="mini-label">What I did</h4>
            {Array.isArray(job.did) ? (
              <ul className="bullets">
                {job.did.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{job.did}</p>
            )}
          </div>
          <ResultBlock result={job.result} />
        </div>
      </div>
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
