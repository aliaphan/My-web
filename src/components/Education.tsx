import { content } from '../data/content'
import { SectionHead } from './SectionHead'
import './Education.css'

const { education, skills } = content

export function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHead ghost="Education" title="Education" accent="& skills" />

        <div className="education reveal">
          <div className="education__school">
            <h3 className="education__name">{education.school}</h3>
            <p className="education__place">{education.place}</p>
          </div>
          <div className="education__details">
            <p className="education__degree">{education.degree}</p>
            <ul className="education__facts">
              {education.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
            <h4 className="mini-label">Relevant coursework</h4>
            <ul className="chips">
              {education.coursework.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="toolkit card-base reveal">
          {skills.map((group) => (
            <div className="toolkit__col" key={group.title}>
              <h3 className="block-title">{group.title}</h3>
              {group.note && <p className="toolkit__note">{group.note}</p>}
              <ul className="plain-list">
                {group.items.map((item) =>
                  typeof item === 'string' ? (
                    <li key={item}>{item}</li>
                  ) : (
                    <li key={item.href}>
                      <a href={item.href} target="_blank" rel="noopener">
                        {item.label} <span aria-hidden="true">↗</span>
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
