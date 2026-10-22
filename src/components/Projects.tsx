import { content } from '../data/content'
import type { Project } from '../data/types'
import { SectionHead } from './SectionHead'
import './Projects.css'

const visibleProjects = content.projects.filter((project) => !project.hidden)

function ProjectCard({ project, num }: { project: Project; num: number }) {
  return (
    <article className="project card-base reveal">
      <p className="project__top">
        <span className="project__num">{String(num).padStart(2, '0')}</span>
        <span>{project.kind}</span>
      </p>
      <h3 className="project__title">
        {project.title} <em>{project.titleAccent}</em>
      </h3>
      <p className="project__role">{project.role}</p>
      <p className="project__result">{project.result}</p>
      {project.link && (
        <a
          className="link-arrow project__link"
          href={project.link.href}
          target="_blank"
          rel="noopener"
          aria-label={project.link.ariaLabel}
        >
          {project.link.label}
        </a>
      )}
    </article>
  )
}

export function Projects() {
  return (
    <section className="section section--tint" id="projects">
      <div className="container">
        <SectionHead ghost="Projects" title="Selected" accent="projects" className="section-head--with-art">
          <p className="section-head__intro">{content.projectsIntro}</p>
          <img className="section-head__art" src="/images/collage-jar.png" alt="" width={368} height={435} loading="lazy" />
        </SectionHead>

        <div className="projects">
          {visibleProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} num={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
