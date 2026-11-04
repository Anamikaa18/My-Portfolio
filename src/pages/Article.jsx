import { Link, useParams } from 'react-router-dom'
import { articles } from '../data/articles.js'
import { Markdown } from '../lib/markdown.jsx'
import { usePage } from '../lib/usePage.js'

export default function Article() {
  const { slug } = useParams()
  const a = articles.find((x) => x.slug === slug)
  usePage(a?.title || 'Not found', a?.description)
  if (!a) return <div className="wrap"><p>Article not found. <Link to="/writing">Back to writing</Link></p></div>
  return (
    <article className="wrap narrow prose">
      <p><Link to="/writing">Writing</Link></p>
      <p className="meta">{a.category}, {a.date}, {a.readingTime} min read</p>
      <h1 className="page-title">{a.title}</h1>
      <Markdown source={a.body} />
    </article>
  )
}
