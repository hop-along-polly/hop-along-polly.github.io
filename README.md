# hop-along-polly.github.io

My portfolio site — the half of my work that doesn't fit on a résumé.
Live at **<https://hop-along-polly.github.io/>**.

Built the same way as the games it showcases: plain HTML, CSS, and JavaScript.
No framework, no bundler, no `npm install`, no build step. Push to `main` and
GitHub Pages serves it.

---

## Adding things later

All content lives in `data/`. You should never need to open `index.html`,
`css/`, or `js/` to add a project, an article, or a certification.

### Add a project

Open `data/projects.js` and drop a new object into the array:

```js
{
  name: "My New Thing",
  tagline: "One line that makes someone want to click.",
  description: "A paragraph. Featured cards only — omit for compact ones.",
  year: "2026",
  featured: true,            // true  -> big card with artwork, in Selected Work
                             // false -> compact card in More from the Workshop
  status: "Live",            // optional pill
  tech: ["TypeScript", "Postgres"],
  highlights: ["Bullet one", "Bullet two"],   // featured cards only
  links: [
    { label: "Live Demo", href: "https://…", primary: true },
    { label: "Source", href: "https://github.com/…" },
  ],
  art: "grid",               // motif id from js/motifs.js
  // image: "assets/projects/thing.png",   // …or a real screenshot instead
}
```

Order in the array is the order on the page.

**Artwork.** Set `image` to a screenshot path and you're done. To draw a line-art
motif instead (like the Otrio board or the Plunder compass), add an entry to
`MOTIFS` in `js/motifs.js` and reference its key via `art`. Motifs are inlined,
so they can use `currentColor` and `var(--accent)` and will follow the theme.
Anything without either falls back to the `grid` motif.

### Add an article

Nothing to do. The Writing section fetches live from the dev.to API using
`devtoUsername` in `data/site.js`, so publishing a post makes it appear here
on the next page load.

Two optional knobs in `data/articles.js`:

- **`ARTICLE_NOTES`** — annotate a post with a custom blurb, or `pinned: true`
  to force it into the featured slot. Keys match against the article URL, so any
  distinctive chunk of the slug works.
- **`ARTICLES_FALLBACK`** — what renders if dev.to is unreachable. Also the place
  to list articles published *somewhere other than* dev.to; entries are merged in
  and de-duplicated by URL.

Without a pin, the featured slot goes to whichever post has the most reactions.

### Add a certification

Open `data/certifications.js`:

```js
{
  name: "AWS Certified Solutions Architect",
  issuer: "Amazon Web Services",
  abbr: "AWS",                  // 1–3 characters, drawn inside the seal
  level: "Associate",           // Foundational | Associate | Professional | Specialty
  issued: "Nov 2025",           // optional
  expires: "Nov 2028",          // optional — drives the Active/Expired pill
  credentialUrl: "https://…",   // optional — adds a "Verify" link
}
```

An **Active** pill appears automatically while `expires` is still in the future,
and flips to **Expired** after. Omit both dates and no pill is shown.

### Change the hero, stats, or contact links

All in `data/site.js`.

---

## Design system

`css/tokens.css` holds every colour, type, and spacing value. Nothing in
`css/style.css` hard-codes a hex.

This is a personal-brand sibling of my [Code Scribes style
guide](https://github.com/hop-along-polly/codescribes-styleguide) — same
craftsman posture, same Bellefair / Abel / JetBrains Mono type families, same
4px spacing base and Major Third type scale — with its own accent identity:

| | Accent |
|---|---|
| Code Scribes (the studio) | Scribe Teal `#1B8996` |
| This site (the person) | Brass `#C89434` |

Every foreground/background pair in `tokens.css` is verified against
**WCAG 2.1 AA**. The tightest pairing is brass on the light-theme ground at
5.25:1. If you change a colour, re-check it before committing.

Dark is the default surface. Light is a separate design surface rather than an
inversion — brass darkens to `#8A6212` there so it still clears 4.5:1 on paper
white. The toggle stores the choice in `localStorage` and falls back to the OS
preference; an inline script in `<head>` applies it before first paint so the
page never flashes the wrong theme.

---

## Running it locally

Because the page is plain static files, you can just open it:

```sh
open index.html
```

Or serve it, which is closer to production:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## Deploying

GitHub Pages serves `main` from the repository root. Push and it's live within a
minute or so.

```sh
git add -A && git commit -m "Add …" && git push
```

`.nojekyll` is present so Pages serves the files as-is instead of running them
through Jekyll.

---

## Structure

```
index.html              Page skeleton — sections, no content
.nojekyll               Tell GitHub Pages to skip Jekyll

data/                   ← everything you'll actually edit
  site.js               Identity, hero copy, stat strip, contact links
  projects.js           Projects (featured + compact)
  certifications.js     Certifications
  articles.js           Article notes + offline fallback

css/
  tokens.css            Design tokens: colour, type, spacing, motion
  style.css             Layout and components

js/
  motifs.js             Inline SVG artwork and icons
  main.js               Renders every section from data/

assets/
  favicon.svg
```
