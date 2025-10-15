# Tracker

## Vision
- Build a React-based personal site showcasing research, cloud security work, and portfolio projects.
- Target static hosting on GitHub Pages with fast load, responsive design, and accessible UX.
- Maintain content in structured data for easy updates and future automation.

## Backlog
- Capture design brief (document palette ideas, typography pairings, imagery guidance) based on decisions.
- Draft UX wireframes and component hierarchy.
- Configure linting, formatting, and test tooling.
- Implement project detail modal interactions (current cards are static).
- Expand testimonial content (collect quotes, imagery guidelines).
- Add responsive refinements and animation polish (light mode only, ensure accessibility).
- Expand SEO metadata (OpenGraph tags, sitemap) and analytics decision.
- Document running, building, and deployment steps.
- Collect assets (resume PDF, favicons, social preview).

## In Progress
- Planning & requirements capture (waiting on design inputs).

## Done
- Resume content reviewed (XAI research, cloud/governance expertise, project portfolio).
- Initial site plan drafted (sections, content strategy, deployment approach).
- Design direction captured (minimalistic, light-mode, bold & vibrant palette, monospaced typewriter styling).
- React tooling chosen: Vite + React + TypeScript targeting GitHub Pages.
- Content storage format set to JSON data files.
- Content architecture defined (hero narrative, unified timeline, testimonials placeholder, projects, publications, skills, contact).
- React project scaffolded with layout, navigation, and footer.
- Hero section implemented with JSON-driven metrics and CTAs.
- Unified timeline implemented (work, education, projects) via JSON data.
- Projects gallery implemented (cards + tech tags).
- Publications section implemented with status indicators.
- Skills grid implemented from JSON categories.
- Testimonials section scaffolded with empty-state guidance.
- Contact footer with mail CTA & socials implemented.
- GitHub Pages workflow added for automated deploys.

## Decisions & Open Questions
- **Design system:** Minimalistic light-mode only; bold, vibrant palette with typewriter/monospaced flair for headings.
- **Sections:** Hero, unified timeline (work, school, projects), testimonials, projects gallery, publications, skills, contact CTA (mail button with minimal PI).
- **Tooling:** Vite + React + TypeScript (aligned with GitHub Pages).
- **Content format:** JSON data sources for structured content.
- **Integrations:** Decide on analytics, contact form handling, CMS/blog needs.
- **Deployment flow:** Choose between GitHub Actions auto-deploy vs. manual `gh-pages`.
