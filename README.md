# Personal mathematics website

A content-first academic website built with Astro, React, Markdown, and KaTeX.
The pages are statically generated: there is no database or custom backend.

## Requirements

- Node.js 20.3.0 or newer (prefer the current LTS release)
- npm
- A code editor such as VS Code

Check your versions:

```bash
node -v
npm -v
```

## Run locally

1. Unzip the project and open the `ivan-math-site` folder in VS Code.
2. Open the integrated terminal.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed in the terminal (usually http://localhost:4321).

Astro watches your files. Save a Markdown or component file and the browser will
refresh automatically.

## Before publishing

1. Update your name, biography, research interests, email, and location in
   `src/pages/index.astro`.
2. Replace `public/images/profile-placeholder.svg` with your portrait. For
   example, copy a photo to `public/images/profile.jpg` and change the `src`
   attribute in `index.astro` to `/images/profile.jpg`.
3. Replace `your.email@example.com` in `src/components/GlassNav.tsx` and
   `src/pages/index.astro`.
4. Put your CV PDF at `public/cv.pdf` (the homepage links to `/cv.pdf`).
5. Review the sample thesis and award entries in `src/content/`.
6. Set the canonical website URL in `astro.config.mjs` once you have a domain.

## Add a publication

Create a Markdown file in `src/content/publications/`, for example
`my-paper.md`:

```yaml
---
title: "Title of the paper"
authors:
  - "A. Author"
  - "B. Author"
year: 2026
venue: "Journal name"
status: "published"
preprintUrl: "https://arxiv.org/abs/..."
articleUrl: "https://doi.org/..."
doi: "10.xxxx/xxxxx"
featured: false
sortOrder: 1
---

A short abstract or description. Markdown and LaTeX are supported.
```

Allowed `status` values: `published`, `preprint`, `in-preparation`, `thesis`.
`preprintUrl`, `articleUrl`, `venue`, and `doi` are optional. A link only appears
when its corresponding field is provided.

## Add a talk or presentation

Create a Markdown file in `src/content/talks/`:

```yaml
---
title: "Title of the talk"
event: "Conference or seminar"
date: 2026-11-04
location: "City, Country"
slidesUrl: "https://example.com/slides.pdf"
recordingUrl: "https://example.com/recording"
---

Optional abstract or description.
```

`slidesUrl` and `recordingUrl` are optional. Omit either field if it does not
exist; its link will not be rendered.

## Add an award or grant

Create a Markdown file in `src/content/awards/`:

```yaml
---
title: "Award or grant name"
organization: "Awarding institution"
date: 2026-01-01
description: "One-sentence explanation."
---

```

## Add a research topic

Create a Markdown file in `src/content/research/`:

```yaml
---
title: "Research theme"
status: "Current interest"
sortOrder: 1
---

A short explanation of the topic.
```

## Add a blog post or mathematical note

Add a Markdown file to `src/content/blog/` or `src/content/notes/`.
Use `draft: true` while preparing it; change it to `false` when ready to
publish. The corresponding page is generated automatically.

Mathematics examples:

```markdown
Inline: $B_t = W_t + tC$.

Displayed:

$$
p_t(x,y) = \frac{1}{\sqrt{2\pi t}}
\exp\left(-\frac{(y-x)^2}{2t}\right).
$$
```

KaTeX renders the equations.

## Check and build

```bash
npm run check
npm run build
npm run preview
```

The production website is generated in `dist/`.

## Design notes

- The liquid-glass look is implemented with CSS (`backdrop-filter`, translucent
  surfaces, fine borders, and soft shadows), rather than a large UI dependency.
  This keeps the site lightweight and easy to maintain.
- React is used for the responsive navigation menu. Most content and pages are
  rendered by Astro as static HTML.
- The layout is responsive and includes a reduced-motion accessibility rule.
- To adjust the palette and typography, edit the CSS variables at the top of
  `src/styles/global.css`.

## Deployment

Connect the Git repository to a static hosting provider such as Cloudflare Pages,
Netlify, or Vercel. Use:

- Build command: `npm run build`
- Output directory: `dist`

Every push to the connected branch can trigger a fresh deployment.
