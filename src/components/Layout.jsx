import { useEffect, useState } from 'react'
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom'
import { profile } from '../data/profile.js'

const links = [['/', 'Home'], ['/projects', 'Projects'], ['/writing', 'Writing'], ['/about', 'About']]

export default function Layout() {
  const [open, setOpen] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="nav">
        <div className="wrap nav-inner">
          <Link to="/" className="brand">{profile.name}</Link>
          <button className="menu-btn" aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)}>
            {open ? 'Close' : 'Menu'}
          </button>
          <nav id="nav-links" className={open ? 'open' : ''} aria-label="Main">
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>
            ))}
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          </nav>
        </div>
      </header>

      <main id="main"><Outlet /></main>

      <footer className="footer">
        <div className="wrap">
          <span>&copy; {new Date().getFullYear()} {profile.name}</span>
          <span className="footer-links">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </span>
        </div>
      </footer>

      {showTop && (
        <button className="top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Top</button>
      )}
    </>
  )
}
