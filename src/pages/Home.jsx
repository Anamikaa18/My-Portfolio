import { Link } from 'react-router-dom'
import { profile } from '../data/profile.js'
import { projects } from '../data/projects.js'
import { articles } from '../data/articles.js'
import ProjectCard from '../components/ProjectCard.jsx'
import ArticleCard from '../components/ArticleCard.jsx'
import Contact from '../components/Contact.jsx'
import { usePage } from '../lib/usePage.js'

export default function Home() {
  usePage('', 'Anamika Verma, Applied AI Engineer and Software Developer. Projects and writing on applied AI, backend engineering and research.')
  const featured = projects.filter((p) => p.featured).slice(0, 3)
  return (
    <div className="wrap">
      <section className="hero">
        <h1>{profile.name}</h1>
        <p className="role">{profile.title}</p>
        <p className="lead">{profile.tagline}</p>
        <p>{profile.intro}</p>
        <p className="actions">
          <Link className="btn" to="/projects">Explore my work</Link>
          <Link className="btn ghost" to="/about">About me</Link>
        </p>
        <p className="inline-links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.resume} download>Resume</a>
          <a href={profile.coverLetter} target="_blank" rel="noopener noreferrer">
  View Cover Letter</a>
        </p>
      </section>

      <section className="section" aria-labelledby="sp">
        <div className="section-head"><h2 id="sp">Selected projects</h2><Link to="/projects">Browse all projects</Link></div>
        <div className="grid">{featured.map((p) => <ProjectCard key={p.slug} project={p} />)}</div>
      </section>

      <section className="section" aria-labelledby="lw">
        <div className="section-head"><h2 id="lw">Writing</h2><Link to="/writing">All articles</Link></div>
        {articles.slice(0, 3).map((a) => <ArticleCard key={a.slug} article={a} />)}
      </section>

      <Contact />
    </div>
  )
}
