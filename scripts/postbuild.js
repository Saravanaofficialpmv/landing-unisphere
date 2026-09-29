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
  {
    path: 'cookie-policy',
    title: 'Cookie Policy — Unisphere',
    description: 'Unisphere Cookie Policy - Information regarding web storage, essential cookies, and privacy controls.',
  },
  {
    path: 'acceptable-use',
    title: 'Acceptable Use Policy — Unisphere',
    description: 'Unisphere Acceptable Use Policy - Standards of conduct, credential security, and prohibited actions.',
  },
  {
    path: 'security',
    title: 'Security & Responsible Disclosure — Unisphere',
    description: 'Unisphere Security Policy - Platform architecture, access controls, and ethical vulnerability reporting.',
  },
  {
    path: 'accessibility',
    title: 'Accessibility Statement — Unisphere',
    description: 'Unisphere Accessibility Statement - Digital inclusion standards and WCAG 2.1 AA conformance.',
  },
  {
    path: '404',
    title: 'Page Not Found — Unisphere',
    description: 'The page you are looking for does not exist or has been moved.',
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
