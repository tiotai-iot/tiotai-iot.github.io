# Tiotai — site with Dither (Vite + React, real build)

This is the same site, but the Dither background is now a proper build-time
React component instead of the CDN/Babel-in-browser version. No importmap,
no esm.sh, no runtime JSX transform — `Dither.jsx` is **exactly** the
component as shipped, compiled by Vite's React plugin like any normal app.

## Structure

```
index.html              the site (unchanged markup/CSS, plain HTML)
src/
  Dither.jsx             the component, untouched
  Dither.css             the component's own CSS, untouched
  dither-mount.jsx       mounts <Dither /> into #dither-root in the hero
  CurvedLoop.jsx         the component, untouched
  CurvedLoop.css         the component's own CSS, untouched
  curved-loop-mount.jsx  mounts <CurvedLoop /> into #curved-loop-root
package.json
vite.config.js
```

Everything outside the React mount points (`#dither-root`, `#curved-loop-root`)
is still plain HTML/CSS — there was no reason to rewrite the whole page as
JSX just to get a real bundler under two components. They're mounted the
same way you'd mount any React "island" into a non-React page.

CurvedLoop sits in a new `#marquee-divider` section between **Solution**
and **Verticals** as a brand-line breather between two dense sections.
Its default CSS makes the jacket `100vh` tall (made for full-screen use);
`index.html` overrides that with `#curved-loop-root`-scoped rules instead
of editing `CurvedLoop.css` directly, so the component file stays exactly
as shipped if you ever copy it into another project.

## Setup

```bash
npm install
npm run dev       # local dev server with HMR
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Adjusting the effect

Open `src/dither-mount.jsx` and tweak the props passed to `<Dither />`
(`waveColor`, `colorNum`, `pixelSize`, `waveSpeed`, etc.) — see the props
table in the component for what each does. `waveColor` is currently set to
the site's coral accent, normalized to 0–1 RGB.

## Deploying to GitHub Pages

This is already set up for it — `vite.config.js` uses a relative `base`
so the build works whether you're on a project page
(`username.github.io/repo-name/`) or a root page (`username.github.io/`).

**Option A — automatic, via GitHub Actions (included)**

1. Push this repo to GitHub.
2. In the repo: **Settings → Pages → Source → GitHub Actions**.
3. Push to `main` (or run the workflow manually from the Actions tab).
   `.github/workflows/deploy.yml` builds the app and deploys `dist/`
   automatically. Your site will be live at the URL GitHub shows in
   Settings → Pages.

**Option B — manual, one-off**

```bash
npm install
npm run build
npx gh-pages -d dist
```

(`gh-pages` pushes the `dist/` folder to a `gh-pages` branch; you'd then
point Pages at that branch in Settings instead of "GitHub Actions".)

## If you want the whole page in React too

Right now only the Dither layer is React; the rest of the page is static
HTML/CSS for simplicity. If you later rebuild the page as a full React app
(e.g. componentizing the hero, cards, etc.), `Dither.jsx` doesn't need any
changes — it's a self-contained component that just needs a div to mount
into (or can be rendered directly in JSX like any other component).
