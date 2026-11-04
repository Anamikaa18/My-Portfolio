// Minimal markdown: headings, paragraphs, lists, fenced code, `inline code`, **bold**, [links](url).
const inline = (text) =>
  text.split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).map((p, i) => {
    if (p.startsWith('`')) return <code key={i}>{p.slice(1, -1)}</code>
    if (p.startsWith('**')) return <strong key={i}>{p.slice(2, -2)}</strong>
    const m = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    return m ? <a key={i} href={m[2]} target="_blank" rel="noreferrer">{m[1]}</a> : p
  })

export function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!m) return { data: {}, body: raw }
  const data = {}
  m[1].split('\n').forEach((l) => {
    const i = l.indexOf(':')
    if (i > 0) data[l.slice(0, i).trim()] = l.slice(i + 1).trim()
  })
  return { data, body: m[2] }
}

export function Markdown({ source }) {
  const out = []
  source.split(/```/).forEach((chunk, idx) => {
    if (idx % 2) {
      const [first, ...rest] = chunk.replace(/^\n/, '').split('\n')
      out.push(<pre key={idx}><code>{rest.join('\n').trimEnd()}</code><span className="lang">{first}</span></pre>)
      return
    }
    chunk.split(/\n{2,}/).forEach((block, j) => {
      const b = block.trim(), key = `${idx}-${j}`
      if (!b) return
      const h = b.match(/^(#{1,3})\s+(.*)$/)
      if (h) { const T = `h${h[1].length + 1}`; out.push(<T key={key}>{inline(h[2])}</T>) }
      else if (/^- /.test(b)) out.push(<ul key={key}>{b.split('\n').map((l, k) => <li key={k}>{inline(l.replace(/^- /, ''))}</li>)}</ul>)
      else out.push(<p key={key}>{inline(b.replace(/\n/g, ' '))}</p>)
    })
  })
  return <>{out}</>
}
