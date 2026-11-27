# me

The personal site at **visnup.com**. One Markdown file, deployed by Vercel with no build.

- `public/index.md` is the page. Vercel serves it at `/` as `text/html` when `text/html`
  comes before any `text/markdown` in Accept (browsers). Everything else, including no Accept
  header (`curl`, `fetch()`), gets `text/markdown`. See `vercel.json`. The rule ignores q-values,
  and Vercel matches a `has` value against the whole header, hence its trailing `.*`.
  `/index.md` itself is always Markdown.
- The `<script>` at the top of `index.md` loads `public/md.js`. It's at the top so it blocks the
  first paint and can hide the page, which otherwise shows the raw Markdown first. It adds the
  head (viewport, icons, `style.css`, Vercel Analytics' script), then on `DOMContentLoaded`
  renders the subset of Markdown the page uses (headings, paragraphs, links, images) and shows
  the page once `style.css` loads. The page renders in quirks mode, since there's no doctype.
- Images ending in `.webm` render as autoplaying, muted, looping videos. A paragraph with images
  is a horizontal strip of them. An image inside a `###` heading is its icon.
- `vercel dev` ignores `has`, so locally it serves Markdown to browsers too. Check the HTML
  rendering with any static server that serves `index.md` as `text/html`.
- `public/shots/` holds each entry's strip of images: screenshots and og images as 640px-wide
  WebP (`cwebp -q 80 -resize 640 0`), and the simulators' charts copied from their repos'
  `charts/` (Magical Athlete's `points.svg` and Monopoly Deal's `cards.svg` cropped to their top
  ten rows by their `height` and `viewBox`).
  Poker dance's video is hotlinked from poker.dance. The Typing Dead's title screen is a 10 s
  Playwright `recordVideo` capture, re-encoded with `ffmpeg -vf scale=640:-2 -an -c:v libvpx-vp9
  -crf 36 -b:v 0`. Monopoly Deal's table is a Playwright capture of a 4-player game against the
  local dev server, played by its Hint button with others' plays set to Off. Hilt's and Fives'
  tables and start pages are browser pane screenshots of their local dev servers at 1280×800.
  Their charts are each README's `rules.svg`, uncropped. Observable's are its five latest notebooks'
  thumbnails (`static.observableusercontent.com/thumbnail/<hash>.jpg`). Each image links to
  where it was taken: the notebook, the page, or the repo a chart comes from.
- `public/icons/` is each entry's favicon, copied from its repo, beside its title. Rummikub's is
  the 120px `Icon60x60@2x.png` from a built `Rummikub.app`, since Xcode's `ictool` doesn't take
  the arguments it used to.
- No dependencies. Pushing `main` deploys.

## What it's for

A name, then two lists: "For fun" (side projects) and "For work" (Observable), then GitHub.
Each links its live site, or its public GitHub repo when there isn't one (Rummikub). The board
game simulators share one entry, "Simulating board games", whose links go to their repos, since the README
is the point. Monopoly Deal, Hilt and Fives also have their own entries for the playable games. Private repos stay off it, and so does chat-rpg: every session calls the
Anthropic API on Visnu's bill.
