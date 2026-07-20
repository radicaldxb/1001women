# 1001 Women — Site & Design Summary

Marketing microsite for the **1001 Women** movement: rediscovering overlooked women of Muslim civilisation through a children’s book, exhibition, guides, and public engagement.

**Live stack:** Next.js 15 (App Router) · React 19 · TypeScript · CSS design tokens in `src/app/globals.css`  
**Archive:** Initial build preserved at `/v1` (`src/v1/`, `public/v1/`)  
**Forms:** Interest registrations email via the live form delivery setup (not localStorage)

---

## Page structure (home `/`)

| Section | Purpose |
| --- | --- |
| **Topbar** | Nav: 1001 Women (→ top), Why It Matters, Who Are We, Children’s Book, Exhibition & Guides, Get Involved + Register Interest CTA |
| **Hero** | Full-bleed brand moment: logo mark, tagline, video/poster atmosphere |
| **Credibility strip** | 1001 Foundation · 1001 Inventions · Ahmed Salim |
| **Why this matters** (`#about`) | Mission / problem statement |
| **Who are we** (`#behind`) | Producer story + partner logos (Foundation, Inventions, FSTC) |
| **Children’s book** (`#kids-book`) | Book pitch, “What we plan to include” icons, pre-order interest tiers + form |
| **Exhibition & Guides** (`#creating`) | Four expression cards (book, exhibition, educator, creator) |
| **Get involved** (`#take-part`) | Audience pathways (families, schools, museums, creators, sponsors, publishers) |
| **Examples carousel** | Project concept visuals (exhibition, statue, film, reader) |
| **Story examples** (`#stories`) | Featured mosaics + filterable story list + research note |
| **Join the movement** (`#join`) | Closing CTA + join form |
| **Footer** | Favicon mark, attribution, privacy |

Also: `/privacy`, SEO (`sitemap`, `robots`, JSON-LD), Open Graph image `/images/og.webp` (1200×630).

---

## Design summary

### Direction
Editorial heritage brand — navy and gold, serif display type, girih pattern washes, ornamental section dividers. Light page body with **one dark climax** (Join). Cards share one border language rather than mixed chrome.

### Tokens (`:root` in `globals.css`)
- **Navy:** `--navy` / `--navy-2` / `--navy-ink` (`#071a2e` family)
- **Gold:** `--gold` / `--gold-mid` / `--gold-2` / `--gold-dark`
- **Card chrome:** `--card-border: 2px solid var(--gold-border)` · `--card-radius: 22px`
- **Type:** Quicksand (UI / body) · Libre Baskerville (display / section titles / card titles)

### Patterns & motifs
- **Girih** (`story-girih.svg`) — soft fade on white cards, forms, footer, Join field
- **Ornament divider** — tapered gold rule + centre mark between sections
- **Credibility girih** — strip background treatment

### Component language
- **Cards** (Exhibition, Get Involved, stories, tiers): gold border, 22px radius, optional girih wash, serif titles matching *Families & readers*
- **Include icons:** gold line-art PNGs in circular gold-framed tiles
- **Join:** navy gradient band + gold-framed panel + white form (no star-sky)
- **Motion:** restrained — carousel fades, card hover lift; respect `prefers-reduced-motion`

### Imagery layout (`public/images/`)
| Folder / file | Use |
| --- | --- |
| `logo-mark.webp` | Hero brand |
| `og.webp` | Social / OG / Twitter |
| `favicon.png` | Favicon + footer mark |
| `childrens-book.webp` | Book feature art |
| `1001women-header.webp` | Hero video poster |
| `logos/` | Partner marks |
| `expressions/` | Exhibition & Guides cards |
| `stories/` | Featured mosaics (`*-2.webp`) |
| `examples/` | Carousel concepts |
| `icons/` | Book “include” icons |
| `patterns/` | Girih + ornament SVGs |

---

## Content / data

- Copy & lists: `src/data/site.ts`, `src/data/stories.ts`
- Story field icons: Flaticon Uicons classes in `storyTagIcons`
- Pre-order tiers & join roles drive the interest forms

---

## Local development

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000). Archive comparison: [http://127.0.0.1:3000/v1](http://127.0.0.1:3000/v1).
