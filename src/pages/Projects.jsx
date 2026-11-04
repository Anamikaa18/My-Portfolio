import { CATEGORIES, projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import { usePage } from '../lib/usePage.js'

export default function Projects() {
  usePage('Projects', 'Projects in AI, LLM applications, backend development and developer tools.')
  return (
    <div className="wrap">
      <h1 className="page-title">Projects</h1>
      <p className="lead">Each project explains the problem, the design and the decisions behind it.</p>
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
