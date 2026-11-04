
import { useState } from 'react'
import { articles, WRITING_CATEGORIES } from '../data/articles.js'
import ArticleCard from '../components/ArticleCard.jsx'
import { usePage } from '../lib/usePage.js'

export default function Writing() {
  usePage(
    'Writing',
    'Technical writing on applied AI, machine learning, LLM applications, software engineering and technical research.'
  )
  const [cat, setCat] = useState('All')
  const list = cat === 'All' ? articles : articles.filter((a) => a.category === cat)

  return (
    <div className="wrap narrow">
      <h1 className="page-title">Writing</h1>
      <p className="lead">
        Exploring ideas, sharing technical insights, and documenting learnings
        across AI engineering, software development, and research.
      </p>
      <div className="filters" role="group" aria-label="Filter by category">
        {['All', ...WRITING_CATEGORIES].map((c) => (
          <button key={c} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      {list.length ? list.map((a) => <ArticleCard key={a.slug} article={a} />) : <p className="muted">No articles in this category yet.</p>}
    </div>
  )
}
