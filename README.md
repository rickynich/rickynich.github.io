# rickynich.github.io

Nick Richard's portfolio: a home page and a case study for [Hanzi Rivals](https://hanzirivals.com).

Built with [Astro](https://astro.build) as a fully static site (no client-side framework, almost no JavaScript), and deployed to GitHub Pages by GitHub Actions on every push to `master`.

## Work on it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-checks, then builds to dist/
npm run preview   # serves dist/ locally
```

Requires Node 22.23 or newer (Astro 7).

## Where things live

| What | Where |
|---|---|
| Name, links, bio facts, earlier projects, toolbox | `src/data/site.ts` |
| Hanzi Rivals screenshots and their alt text | `src/data/shots.ts`, images in `src/assets/hanzi-rivals/` |
| Home page | `src/pages/index.astro` |
| Hanzi Rivals case study | `src/pages/work/hanzi-rivals.astro` |
| Colors, type and shared components (buttons, chips, phone frame) | `src/styles/global.css` |
| Social card, favicons | `public/og.png`, `public/favicon.*`, `public/apple-touch-icon.png` |

To add a project, add an entry to `EARLIER` in `src/data/site.ts` (or give it its own page under `src/pages/work/`). Images go in `src/assets/`; Astro resizes them and converts them to WebP at build time.

The Hanzi Rivals screenshots are copied from the `hanzi-duel` repo (`site/public/shots/`). When the app changes, copy the new ones over.

## Deploying

`.github/workflows/deploy.yml` builds the site with [`withastro/action`](https://github.com/withastro/action) and publishes it with `actions/deploy-pages`. The old setup (Gatsby, built locally and pushed to a `gh-pages` branch) is gone.

**One-time switch** (the repo is still set to serve the old `gh-pages` branch):

1. GitHub → this repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
   Or from a terminal: `gh api -X PUT repos/rickynich/rickynich.github.io/pages -f build_type=workflow`
2. Merge to `master` (or run the workflow by hand from the **Actions** tab).
3. Once the new site is live, delete the old branch: `git push origin --delete gh-pages`.

## Custom domain (recommended)

A domain like `nickrichard.dev` reads better on a résumé than `rickynich.github.io`, and GitHub Pages serves it for free with HTTPS.

1. Buy the domain (Cloudflare Registrar sells at cost).
2. Add a file `public/CNAME` containing just the domain, e.g. `nickrichard.dev`.
3. In `astro.config.mjs`, set `site` to `https://nickrichard.dev`, and update `public/robots.txt`.
4. DNS: for the bare domain, add `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153` (plus `AAAA` records to `2606:50c0:8000::153` through `2606:50c0:8003::153`), and a `CNAME` from `www` to `rickynich.github.io`.
5. Settings → Pages → Custom domain → enter it, wait for the DNS check, then tick **Enforce HTTPS**.

The old `rickynich.github.io` address then redirects to the new domain automatically.
