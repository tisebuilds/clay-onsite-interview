# Prototype Scaffold

A minimal [Next.js](https://nextjs.org) (App Router) + [shadcn/ui](https://ui.shadcn.com) starting point. The whole UI lives in [`app/page.tsx`](app/page.tsx) so it's quick to read and quick to modify.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui (`button`, `card`, `badge`, `separator`)
- Geist Sans / Geist Mono

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To extend the UI, just edit [`app/page.tsx`](app/page.tsx). To add more shadcn primitives:

```bash
npx shadcn@latest add <component>
```

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import it in [Vercel](https://vercel.com/new) and accept the defaults.
3. Done — no environment variables required.
