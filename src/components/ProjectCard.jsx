import { Link } from 'react-router-dom'

export default function ProjectCard({ project: p }) {
  return (
    <article className="card">
      <p className="meta">{p.category}{p.status ? ` (${p.status})` : ''}</p>
      <h3><Link to={`/projects/${p.slug}`} className="card-link">{p.name}</Link></h3>
      <p>{p.summary}</p>
      <p className="stack">{p.stack.join(', ')}</p>
    </article>
  )
}
