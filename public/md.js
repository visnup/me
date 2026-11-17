const inline = (s) =>
  s
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, src) =>
      src.endsWith('.webm')
        ? `<video src="${src}" title="${alt}" autoplay muted loop playsinline></video>`
        : `<img src="${src}" alt="${alt}">`,
    )
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

const html = document.documentElement;
html.lang = 'en';
html.style.visibility = 'hidden';

const stylesheet = Object.assign(document.createElement('link'), { rel: 'stylesheet', href: '/style.css' });
const styled = new Promise((resolve) => (stylesheet.onload = stylesheet.onerror = resolve));
document.head.append(
  Object.assign(document.createElement('meta'), { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
  Object.assign(document.createElement('link'), { rel: 'icon', href: '/favicon.png' }),
  Object.assign(document.createElement('link'), { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }),
  stylesheet,
  Object.assign(document.createElement('script'), { src: '/_vercel/insights/script.js', defer: true }),
);

document.addEventListener('DOMContentLoaded', async () => {
  const blocks = document.body.textContent.trim().split(/\n\s*\n/);
  document.body.innerHTML = `<main>${blocks
    .map((block) => {
      const [, hashes, text] = block.match(/^(#{1,6}) (.*)/) ?? [];
      return hashes ? `<h${hashes.length}>${inline(text)}</h${hashes.length}>` : `<p>${inline(block)}</p>`;
    })
    .join('\n')}</main>`;
  document.title = document.querySelector('h1').textContent;
  await styled;
  html.style.visibility = '';
});
