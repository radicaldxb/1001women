# 1001 Women — V1 (working)

Working Next.js rebuild of the 1001 Women marketing microsite.

The frozen exact HTML port lives in sibling folders:

- `../1001women-v1-translation/` (preferred freeze label)
- `../1001women-v1-exact/` (same content)

Improve **this** folder only.

## Stack (this phase)

- **Next.js 15** (App Router) + TypeScript
- Brand CSS design system (navy / gold)
- **No database** yet — interest forms save to `localStorage`

## Planned improvements (not Priority 4)

1. Hero CTA clarity + shorter hero copy
2. Pre-order = interest-only wording
3. Confirm contact email
4. Real privacy policy
5. Story density
6. Kids Book section clarity
7. FSTC in credibility
8. Light motion + mobile nav polish

Priority 4 (Supabase, FAQ site section, analytics, chatbot) stays for later.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
