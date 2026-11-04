# Anamika: portfolio

React + Vite static site. Uses HashRouter, so it works on GitHub Pages with no extra config.

## Run
    npm install
    npm run dev        # local
    npm run build      # outputs dist/

## Deploy
Push to `main`; in the repo go to Settings > Pages > Source: GitHub Actions.

## Make it yours
- `src/data/profile.js`: name, links, education, experience (replace every `TODO`).
- `src/data/projects.js`: add an object to add a project. Set `featured: true` to show it on Home.
- `src/data/articles/*.md`: add a markdown file with frontmatter (title, description, category, date).
- `public/resume.pdf`: drop your resume here (the filename is referenced in profile.js).
