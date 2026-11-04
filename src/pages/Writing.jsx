import { useState } from 'react'
import { articles, WRITING_CATEGORIES } from '../data/articles.js'
import ArticleCard from '../components/ArticleCard.jsx'
import { usePage } from '../lib/usePage.js'

export default function Writing() {
  usePage('Writing', 'Technical writing on AI engineering, LLMs and RAG, backend engineering and system design.')
  const [cat, setCat] = useState('All')
  const list = cat === 'All' ? articles : articles.filter((a) => a.category === cat)
  return (
    <div className="wrap narrow">
      <h1 className="page-title">Writing</h1>
      <p className="lead">Notes on building and understanding software and AI systems.</p>
      <div className="filters" role="group" aria-label="Filter by category">
        {['All', ...WRITING_CATEGORIES].map((c) => (
          <button key={c} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      {list.length ? list.map((a) => <ArticleCard key={a.slug} article={a} />) : <p className="muted">No articles in this category yet.</p>}
    </div>
  )
}
