import { Link } from 'react-router-dom'

export default function ArticleCard({ article: a }) {
  const date = a.date ? new Date(a.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : ''
  return (
    <article className="row">
      <p className="meta">{a.category}, {date}, {a.readingTime} min read</p>
      <h3><Link to={`/writing/${a.slug}`}>{a.title}</Link></h3>
      <p>{a.description}</p>
    </article>
  )
}
