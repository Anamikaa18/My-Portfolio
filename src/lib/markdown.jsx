
const inline = (text) =>
  text.split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).map((p, i) => {
    if (p.startsWith('`')) {
      return <code key={i}>{p.slice(1, -1)}</code>
    }

    if (p.startsWith('**')) {
      return <strong key={i}>{p.slice(2, -2)}</strong>
    }

    const link = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/)

    if (link) {
      return (
        <a key={i} href={link[2]} target="_blank" rel="noreferrer">
          {link[1]}
        </a>
      )
    }

    return p
  })

export function parseFrontmatter(raw) {
  const content = raw.replace(/^\uFEFF/, '')

  const match = content.match(
    /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/
  )

  if (!match) {
    return { data: {}, body: content }
  }

  const data = {}

  match[1].split(/\r?\n/).forEach((line) => {
    const index = line.indexOf(':')

    if (index > 0) {
      const key = line.slice(0, index).trim()
      const value = line.slice(index + 1).trim()

      data[key] = value.replace(/^["']|["']$/g, '')
    }
  })

  return {
    data,
    body: match[2],
  }
}

export function Markdown({ source }) {
  const out = []

  source.split(/```/).forEach((chunk, idx) => {
    if (idx % 2) {
      const [first, ...rest] = chunk.replace(/^\n/, '').split('\n')

      out.push(
        <pre key={idx}>
          <code>{rest.join('\n').trimEnd()}</code>
          <span className="lang">{first}</span>
        </pre>
      )

      return
    }

    chunk.split(/\n{2,}/).forEach((block, j) => {
      const b = block.trim()
      const key = `${idx}-${j}`

      if (!b) return

      const heading = b.match(/^(#{1,3})\s+(.+)$/)

      if (heading) {
        const Tag = `h${heading[1].length + 1}`

        out.push(
          <Tag key={key}>{inline(heading[2])}</Tag>
        )
      } else if (/^- /.test(b)) {
        out.push(
          <ul key={key}>
            {b.split('\n').map((line, k) => (
              <li key={k}>{inline(line.replace(/^- /, ''))}</li>
            ))}
          </ul>
        )
      } else {
        out.push(
          <p key={key}>{inline(b.replace(/\n/g, ' '))}</p>
        )
      }
    })
  })

  return <>{out}</>
}
