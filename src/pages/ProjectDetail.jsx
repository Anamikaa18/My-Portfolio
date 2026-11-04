import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects.js'
import { usePage } from '../lib/usePage.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const p = projects.find((x) => x.slug === slug)
  usePage(p?.name || 'Not found', p?.summary)
  if (!p) return <div className="wrap"><p>Project not found. <Link to="/projects">Back to projects</Link></p></div>
  return (
    <div className="wrap narrow">
      <p><Link to="/projects">Projects</Link></p>
      <p className="meta">{p.category}{p.status ? ` (${p.status})` : ''}</p>
      <h1 className="page-title">{p.name}</h1>
      <p className="lead">{p.summary}</p>
      <p className="inline-links">
        {p.repo ? <a href={p.repo} target="_blank" rel="noreferrer">GitHub repository</a> : <span className="muted">Repository link coming soon</span>}
        {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live demo</a>}
      </p>
      <h2>The problem</h2><p>{p.problem}</p>
      <h2>How it works</h2><p>{p.architecture}</p>
      <h2>Key engineering decisions</h2>
      <ul>{p.decisions.map((d) => <li key={d}>{d}</li>)}</ul>
      <h2>Technologies</h2><p>{p.stack.join(', ')}</p>
      {p.images?.map((src) => <img key={src} src={src} alt={`${p.name} screenshot or diagram`} loading="lazy" />)}
    </div>
  )
}
