/**
 * Generate dark-grid hero slide SVG placeholders per assets/slides/README.md
 * Run: node scripts/generate-slide-placeholders.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '..', 'assets', 'slides');

const SLIDES = [
  {
    file: '01-translation-stage.svg',
    product: '25mm Translation Stage',
    specs: ['TRAVEL 25mm', '10µm', '5kgf'],
  },
  {
    file: '02-kinematic-mirror-mount.svg',
    product: 'Kinematic Mirror Mount',
    specs: ['Aperture 25mm', '±4°'],
  },
  {
    file: '03-dielectric-mirror.svg',
    product: 'Dielectric Mirror',
    specs: ['HR @ 800nm', 'λ/10'],
  },
  {
    file: '04-vacuum-flange.svg',
    product: 'CF Vacuum Flange',
    specs: ['CF63', 'leak rate'],
  },
  {
    file: '05-photodetector-module.svg',
    product: 'Photodetector Module',
    specs: ['1 GHz', 'SMA'],
  },
  {
    file: '06-optical-breadboard.svg',
    product: 'Optical Breadboard',
    specs: ['M6 grid', 'flatness'],
  },
];

function svg({ product, specs }) {
  const specLines = specs
    .map(
      (s, i) =>
        `<text x="24" y="${108 + i * 22}" fill="#E11D48" font-family="monospace" font-size="13">${s}</text>`
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500" role="img" aria-label="${product}">
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2A3142" stroke-width="1"/>
    </pattern>
    <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#161B26"/>
      <stop offset="100%" stop-color="#0E1118"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#glow)"/>
  <rect width="800" height="500" fill="url(#grid)" opacity="0.6"/>
  <line x1="80" y1="320" x2="720" y2="180" stroke="#E11D48" stroke-width="2" opacity="0.85"/>
  <circle cx="720" cy="180" r="5" fill="#E11D48"/>
  <rect x="280" y="200" width="240" height="120" rx="8" fill="#1a2030" stroke="#3d4659" stroke-width="1.5"/>
  <rect x="300" y="220" width="200" height="80" rx="4" fill="#252b3a"/>
  <text x="400" y="268" fill="#94a3b8" font-family="system-ui,sans-serif" font-size="14" text-anchor="middle">${product}</text>
  <rect x="16" y="72" width="200" height="${56 + specs.length * 22}" rx="6" fill="#0E1118" stroke="#2A3142"/>
  <text x="24" y="92" fill="#64748B" font-family="monospace" font-size="11">SPEC</text>
  ${specLines}
  <text x="784" y="488" fill="#64748B" font-family="monospace" font-size="11" text-anchor="end">SciEngTech</text>
</svg>`;
}

fs.mkdirSync(OUT, { recursive: true });
for (const slide of SLIDES) {
  const file = path.join(OUT, slide.file);
  fs.writeFileSync(file, svg(slide));
  console.log('  wrote', slide.file);
}
