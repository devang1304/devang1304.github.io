# devang1304.github.io

React + TypeScript site that showcases research, cloud security work, and ongoing projects. Built with Vite and designed for GitHub Pages hosting.

## Getting Started
- Install Node.js 20 (or newer).
- Install dependencies: `npm install`
- Start local dev server: `npm run dev`
- Type-check: `npm run typecheck`
- Lint (flat config): `npm run lint`
- Format check: `npm run format` (or `npm run format:fix`)
- Production build: `npm run build`

Vite serves the site at `http://localhost:5173` by default.

## Project Structure
- `src/components` – UI components grouped by section (hero, timeline, projects, publications, skills, testimonials, header/footer).
- `src/layout` – Application shell wrapper.
- `src/content` – JSON files for hero copy, timeline entries, projects, publications, skills, and testimonials.
- `src/styles` – Global design tokens and shared styles.
- `src/types` – TypeScript definitions for content JSONs.
- `.github/workflows/deploy.yml` – GitHub Pages pipeline (builds on every push to `main` and deploys to Pages).

## Editing Content
- Update hero/tagline/metrics in `src/content/hero.json`.
- Timeline updates (work, education, projects) live in `src/content/timeline.json`.
- Project cards and detail bullets are in `src/content/projects.json`.
- Publications list in `src/content/publications.json`.
- Skills matrix in `src/content/skills.json`.
- Testimonials appear when `src/content/testimonials.json` is populated (empty array renders a call-to-action).

Adding or removing entries is as simple as editing the JSON; TypeScript contracts in `src/types/content.ts` keep components aligned.

## Deployment
- GitHub Actions workflow builds the site with `npm run build` and publishes the `dist/` artifact to GitHub Pages.
- Enable Pages in repo settings (Source: GitHub Actions) the first time you deploy.
- Manual deployment fallback: run `npm run build` locally and serve `dist/` via any static host.

## Design & Roadmap
- Design direction: minimalistic, light-only theme with bold, vibrant accents and monospaced typography.
- Active work items, decisions, and future enhancements are tracked in `tracker.md`. Update that file as priorities evolve.

## Resume Reference
`resume.tex` (and the exported PDF) supply canonical content for the site. Keep them up to date to ensure parity between the site and your résumé.
