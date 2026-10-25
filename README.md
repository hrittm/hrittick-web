# hrittick

Personal site built with [Astro](https://astro.build). Black and white, no client framework, deploys to Vercel.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Edit your details

`src/data/site.ts` holds your email, social links, nav, projects and skills.
To link a project to its repo, add `href: 'https://github.com/hrittm/dotfiles'`.

## Write a blog post

1. Create `src/content/blog/my-first-post.md`
2. Add this at the top:

```md
---
title: "My first post"
description: "One sentence shown in the blog list and link previews."
pubDate: 2026-10-24
---

Write in Markdown here.
```

3. `git add . && git commit -m "new post" && git push`

Vercel rebuilds automatically. The filename becomes the URL (`/blog/my-first-post/`).
The post list, post page and RSS feed (`/rss.xml`) all update by themselves.
Add `draft: true` to hide a post while you work on it. See `hello-world.md` for a sample.

## Deploy

1. Push this folder to a GitHub repository.
2. On vercel.com choose Add New, then Project, and import the repo.
3. Vercel detects Astro. Keep the defaults and press Deploy.

If your Vercel domain differs from `hrittick.vercel.app`, update `site` in `astro.config.mjs`.
