# me

The personal site at **visnup.com**. Plain HTML and CSS, built with Vite, deployed by Vercel.

```
pnpm dev       vite dev server
pnpm build     static build to dist/
pnpm preview   serve dist/
```

- `index.html` is the page. Add more pages as more `.html` files at the root and list them in
  `build.rolldownOptions.input` in a `vite.config.js`. Vite only builds `index.html` by default.
- `public/` is copied as-is (favicon and anything else that shouldn't be hashed). `public/shots/`
  holds each entry's strip of images: screenshots and og images as 640px-wide WebP
  (`cwebp -q 80 -resize 640 0`), and the simulators' charts copied from their repos' `charts/` (Magical Athlete's
  `points.svg` and Monopoly Deal's `cards.svg` cropped to their top ten rows by their `height`
  and `viewBox`).
  Poker dance's video is hotlinked from poker.dance. The Typing Dead's title screen is a 10 s
  Playwright `recordVideo` capture, re-encoded with `ffmpeg -vf scale=640:-2 -an -c:v libvpx-vp9
  -crf 36 -b:v 0`, with the screenshot as its poster. Observable's are its five latest notebooks'
  thumbnails (`static.observableusercontent.com/thumbnail/<hash>.jpg`). Each image links to
  where it was taken: the notebook, the page, or the repo a chart comes from.
- `public/icons/` is each entry's favicon, copied from its repo, beside its title. Rummikub's is
  the 120px `Icon60x60@2x.png` from a built `Rummikub.app`, since Xcode's `ictool` doesn't take
  the arguments it used to.
- No framework, no TypeScript. Add JS as a `<script type="module">` when a page needs it.
- Vercel detects Vite on its own, so there's no `vercel.json`. Pushing `main` deploys.

## What it's for

A name, then two lists: "For fun" (side projects) and "For work" (Observable), then GitHub.
Each links its live site, or its public GitHub repo when there isn't one (Rummikub). The board
game simulators share one entry, "Simulating board games", whose links go to their repos, since the README
is the point. Private repos stay off it, and so does chat-rpg: every session calls the
Anthropic API on Visnu's bill.
