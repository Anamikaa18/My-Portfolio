import { useEffect } from 'react'
// Sets a per-page title and meta description (SEO).
export function usePage(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | Anamika Verma` : 'Anamika Verma | AI Engineer & Software Developer'
    if (description) document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    window.scrollTo(0, 0)
  }, [title, description])
}
