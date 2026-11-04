
import { CATEGORIES, projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import { usePage } from '../lib/usePage.js'

export default function Projects() {
  usePage('Projects', 'Explore Anamika’s projects in applied AI, machine learning, intelligent applications, software engineering, backend development and technical research.')
  return (
    <div className="wrap">
      <h1 className="page-title">Projects</h1>
      <p className="lead">A collection of projects exploring applied AI, software engineering and intelligent applications, with a focus on practical implementation, technical decisions and problem-solving.</p>
      {CATEGORIES.map((c) => {
        const list = projects.filter((p) => p.category === c)
        return (
          <section className="section" key={c} aria-label={c}>
            <h2>{c}</h2>
            {list.length
              ? <div className="grid">{list.map((p) => <ProjectCard key={p.slug} project={p} />)}</div>
              : <p className="muted">No projects here yet. Add one in src/data/projects.js.</p>}
          </section>
        )
      })}
    </div>
  )
}
