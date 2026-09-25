# me

The personal site at **visnup.com**. Plain HTML and CSS, built with Vite, deployed by Vercel.

```
pnpm dev       vite dev server
pnpm build     static build to dist/
pnpm preview   serve dist/
```

- `index.html` is the page. Add more pages as more `.html` files at the root and list them in
  `build.rolldownOptions.input` in a `vite.config.js`. Vite only builds `index.html` by default.
- `public/` is copied as-is (favicon and anything else that shouldn't be hashed).
- No framework, no TypeScript. Add JS as a `<script type="module">` when a page needs it.
- Vercel detects Vite on its own, so there's no `vercel.json`. Pushing `master` deploys.

## What it's for

A name, then two lists: "For fun" (side projects with live sites) and "For work" (Observable),
then GitHub. When a side project gets a public URL, add it under "For fun" in `index.html`. Private repos without a live site stay off it, and so
does chat-rpg: every session calls the Anthropic API on Visnu's bill.
