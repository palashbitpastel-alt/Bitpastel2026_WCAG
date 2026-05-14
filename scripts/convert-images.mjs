/**
 * One-off image-perf script: converts a list of heavy PNG/JPG files to WebP
 * using sharp (already installed). Originals are preserved.
 *
 * Usage: node scripts/convert-images.mjs
 */
import sharp from 'sharp';
import path from 'node:path';
import fs from 'node:fs/promises';

const targets = [
  'public/images/project/Port banner.png',
  'public/images/shopify_client_image.jpg',
  'public/images/bitpastel_logo_pastel.png',
  'public/images/transformsectionbackground.png',
  'public/images/TownHall2026/TH1.png',
  'public/images/Team-Page-Images/2024BTH-21.png',
  'public/images/ThemeCustomization.png',
  'public/images/shopify/ai-personalization/desktop-screenshot.png',
  'public/images/Form image.png',
  'public/images/ai-poweredbackground.png',
  'public/images/career.png',
  'public/images/cover_15-07-2024.png',
  'public/images/shopify/ai-personalization/mobile-screenshot.png',
  'public/images/Job-details.png',
  'public/images/Career-Mobile.png',
];

let totalBefore = 0;
let totalAfter = 0;
const results = [];

for (const src of targets) {
  try {
    const stat = await fs.stat(src);
    const before = stat.size;
    const dir = path.dirname(src);
    const base = path.basename(src, path.extname(src));
    const dest = path.join(dir, `${base}.webp`);
    await sharp(src).webp({ quality: 80, effort: 5 }).toFile(dest);
    const destStat = await fs.stat(dest);
    totalBefore += before;
    totalAfter += destStat.size;
    results.push({ src, dest, beforeKb: Math.round(before / 1024), afterKb: Math.round(destStat.size / 1024) });
    console.log(`✓ ${src} (${Math.round(before / 1024)} kB) → ${dest} (${Math.round(destStat.size / 1024)} kB)`);
  } catch (err) {
    console.error(`✗ ${src}: ${err.message}`);
    results.push({ src, error: err.message });
  }
}

console.log('\nTotal:', Math.round(totalBefore / 1024), 'kB →', Math.round(totalAfter / 1024), 'kB');
console.log('Saved:', Math.round((totalBefore - totalAfter) / 1024 / 1024), 'MB');
