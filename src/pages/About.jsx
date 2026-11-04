
import { profile } from '../data/profile.js'
import Contact from '../components/Contact.jsx'
import { usePage } from '../lib/usePage.js'

export default function About() {
  usePage(
    'About',
    'Learn about Anamika, an AI Engineer focused on applied AI, machine learning, AI research, software engineering, and building intelligent applications.'
  )

  return (
    <div className="wrap narrow">
      <h1 className="page-title">About</h1>
      {profile.about.map((t) => <p key={t} className="lead-sm">{t}</p>)}

      <section className="section"><h2>Professional journey</h2><p>{profile.journey}</p></section>
      <section className="section"><h2>Areas of interest</h2><ul>{profile.interests.map((i) => <li key={i}>{i}</li>)}</ul></section>
      <section className="section">
        <h2>Technical capabilities</h2>
        <dl>{profile.capabilities.map((c) => <div key={c.group} className="dl-row"><dt>{c.group}</dt><dd>{c.items.join(', ')}</dd></div>)}</dl>
      </section>
      <section className="section">
        <h2>Education</h2>
        {profile.education.map((e) => <p key={e.title}><strong>{e.title}</strong><br />{e.place}, {e.period}</p>)}
      </section>
      <section className="section">
        <h2>Experience</h2>
        {profile.experience.map((e) => <p key={e.role}><strong>{e.role}</strong>, {e.org} ({e.period})<br />{e.summary}</p>)}
      </section>
      <section className="section"><h2>Current learning and experiments</h2><ul>{profile.learning.map((l) => <li key={l}>{l}</li>)}</ul></section>
      <Contact />
    </div>
  )
}
