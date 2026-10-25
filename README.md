# hrittick-web

Personal website — black and white, no client framework, static output. Built with [Astro](https://astro.build) and deployed on [Vercel](https://vercel.com).

**[→ hrittick.vercel.app](https://hrittick.vercel.app)**

---

## Stack

| Layer | Tool |
|---|---|
| Framework | Astro 5 (static output) |
| Font | Bricolage Grotesque via Google Fonts |
| Styles | Vanilla CSS (`src/styles/global.css`) |
| Content | Astro Content Collections (Markdown blog posts) |
| RSS | `@astrojs/rss` |
| Deploy | Vercel |

No UI framework, no runtime JS beyond a live clock and a hover effect on the homepage.

---

## Project structure

```
hrittick-web/
├── public/
│   └── favicon.svg
├── src/
│   ├── content/
│   │   └── blog/          # Markdown blog posts
│   ├── data/
│   │   └── site.ts        # All personal data — edit this first
│   ├── layouts/
│   │   └── Base.astro     # Shared HTML shell, nav, footer
│   ├── pages/
│   │   ├── index.astro    # Homepage (hero + menu)
│   │   ├── about.astro
│   │   ├── work.astro
│   │   ├── skills.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [id].astro
│   │   ├── contact.astro
│   │   └── rss.xml.js     # RSS feed
│   ├── styles/
│   │   └── global.css
│   └── content.config.ts  # Blog collection schema
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## Getting started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Production build → dist/
npm run build

# Preview the production build locally
npm run preview
```

---

## Customising your details

Open [`src/data/site.ts`](src/data/site.ts). Everything lives here:

- **`site`** — name, description, email, timezone, nav links, social links.
- **`projects`** — work items shown on `/work/`. Add an optional `href` to link to a repo or live URL.
- **`skills`** — grouped tags shown on `/skills/`.

---

## Writing a blog post

1. Create a new file in `src/content/blog/`, e.g. `src/content/blog/my-post.md`.
2. Add the frontmatter block:

```md
---
title: "My post title"
description: "One sentence shown in the list and in link previews."
pubDate: 2026-10-25
---

Write in Markdown here.
```

3. Commit and push — Vercel rebuilds automatically.

The filename becomes the URL slug (`/blog/my-post/`).  
Set `draft: true` in the frontmatter to hide a post while you work on it.  
The `/rss.xml` feed updates automatically with every published post.

---

## Deploying

The site is already wired to Vercel. For a fresh deployment:

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Vercel detects Astro automatically. Keep the defaults and click **Deploy**.

If you use a custom domain, update the `site` field in [`astro.config.mjs`](astro.config.mjs).

---

## License

[MIT](LICENSE)
