# AI Ready Institute

Next.js site for [AI Ready Institute](https://johnmoney.github.io/aiready/) — career preparation in an AI-driven world.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- **`app/`** — App Router pages and layout
- **`components/`** — Shared **Header** and **Footer** used across all pages
- **`app/page.tsx`** — Home page
- **`app/about/`**, **`app/services/`**, **`app/ai-careers/`**, **`app/consultation/`** — Additional pages (add content as needed)

## Deploy on Vercel

1. Push this repo to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Vercel will detect Next.js and use the default build settings.
4. Deploy. Your site will be live at `https://your-project.vercel.app`.

No extra config is required; Next.js is supported out of the box on Vercel.
