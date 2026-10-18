import { content } from '../data/content'
import { SectionHead } from './SectionHead'
import './About.css'

const { about } = content

export function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <SectionHead ghost="About" title="A little" accent="about me" />

        <div className="about__grid">
          <figure className="about__photo reveal">
            <img src="/images/alia-phan.jpg" alt="Portrait of Alia Phan" width={900} height={1200} loading="lazy" />
            <img className="about__flower" src="/images/flower-dahlia.png" alt="" width={359} height={346} loading="lazy" />
          </figure>

          <div className="about__text">
            <p className="about__intro reveal">{about.intro}</p>
            <div className="about__body reveal">
              {about.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
