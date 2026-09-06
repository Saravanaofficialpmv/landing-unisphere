import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const indexHtmlPath = path.join(distDir, 'index.html');
if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html does not exist! Run vite build first.');
  process.exit(1);
}

const originalHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

const pages = [
  {
    path: 'privacy-policy',
    title: 'Privacy Policy — Unisphere',
    description: 'Unisphere Privacy Policy - Information on how Unisphere collects, uses, protects, and governs user and institutional data.',
  },
  {
    path: 'terms-of-service',
    title: 'Terms of Service — Unisphere',
    description: 'Unisphere Terms of Service - Institutional service terms, user responsibilities, and platform governance.',
  },
];

for (const page of pages) {
  const pageDir = path.join(distDir, page.path);
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }

  let customHtml = originalHtml
    .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
    .replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${page.description}" />`
    );

  // Write dist/{page}/index.html
  fs.writeFileSync(path.join(pageDir, 'index.html'), customHtml, 'utf-8');
  // Write dist/{page}.html
  fs.writeFileSync(path.join(distDir, `${page.path}.html`), customHtml, 'utf-8');

  console.log(`✓ Pre-rendered fallback route: dist/${page.path}/index.html and dist/${page.path}.html`);
}
