
import { profile } from '../data/profile.js'

export default function Contact() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-h">
      <h2 id="contact-h">Let's build something meaningful.</h2>
      <p className="lead">
        I'm open to opportunities and conversations around AI engineering,
        applied research, software development, and building useful technology.
      </p>
      <ul className="plain">
        <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
        <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
        <li><a href={profile.resume} download>Download resume</a></li>
      </ul>
    </section>
  )
}
