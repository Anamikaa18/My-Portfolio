import { parseFrontmatter } from '../lib/markdown.jsx'

// Every .md file in ./articles becomes an article. Frontmatter: title, description, category, date (YYYY-MM-DD).
const files = import.meta.glob('./articles/*.md', { query: '?raw', import: 'default', eager: true })

export const WRITING_CATEGORIES = [
  'AI Engineering', 'LLMs and RAG', 'Python and Software Development',
  'Backend Engineering', 'System Design', 'Technical Research', 'Learning Notes',
]

export const articles = Object.entries(files)
  .map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw)
    return {
      slug: path.split('/').pop().replace('.md', ''),
      ...data,
      body,
      readingTime: Math.max(1, Math.round(body.split(/\s+/).length / 200)),
    }
  })
  .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
