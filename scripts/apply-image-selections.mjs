/**
 * Apply data/image-selections.json — copy images to assets/products/ and update catalog JSON.
 * Run: node scripts/apply-image-selections.mjs && node scripts/build-site.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { solutionGroupLabel } from './solution-groups.mjs';
import { patchSolutionsCatalog } from './patch-solutions-catalog.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

function makeSearch(p) {
  return [
    p.id, p.sku, p.name, p.type, p.category, p.categoryLabel,
    p.summary, p.specHighlight, (p.tags || []).join(' '),
    (p.specs || []).map((s) => `${s.label} ${s.value}`).join(' '),
    p.body || '',
  ].join(' ').toLowerCase();
}

const selections = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'data/image-selections.json'), 'utf8')
).selections.filter((s) => s.decision === 'use' && s.path);

const catalog = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/catalog.json'), 'utf8'));

const byId = Object.fromEntries(selections.map((s) => [s.id, s]));

function applyImage(item) {
  const sel = byId[item.id];
  if (!sel) return item;
  const src = path.join(ROOT, sel.path.replace(/\//g, path.sep));
  if (!fs.existsSync(src)) {
    console.warn('Missing file:', src);
    return item;
  }
  const ext = path.extname(sel.image || src);
  const destDir = path.join(ROOT, 'assets', 'products', item.id);
  fs.mkdirSync(destDir, { recursive: true });
  const destRel = `assets/products/${item.id}/primary${ext}`;
  const dest = path.join(ROOT, destRel);
  fs.copyFileSync(src, dest);
  item.image = destRel.replace(/\\/g, '/');
  item._search = makeSearch(item);
  console.log('  applied', item.id, '->', destRel);
  return item;
}

catalog.solutions = catalog.solutions.map(applyImage);
catalog.components = catalog.components.map(applyImage);
patchSolutionsCatalog(catalog);

catalog.updated = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(ROOT, 'data/catalog.json'), JSON.stringify(catalog, null, 2));

const products = {
  version: catalog.version,
  updated: catalog.updated,
  count: catalog.components.length,
  products: catalog.components,
};
fs.writeFileSync(path.join(ROOT, 'data/products.json'), JSON.stringify(products, null, 2));

const searchIndex = {
  version: catalog.version,
  updated: catalog.updated,
  items: [...catalog.solutions, ...catalog.components].map((p) => ({
    id: p.id,
    type: p.type,
    name: p.name,
    sku: p.sku,
    category: p.category || p.solutionGroup,
      categoryLabel:
        p.categoryLabel ||
        (p.solutionGroup ? solutionGroupLabel(p.solutionGroup) : undefined),
    specHighlight: p.specHighlight,
    image: p.image,
    url: p.solutionUrl || `product.html?id=${encodeURIComponent(p.id)}`,
    _search: p._search,
    featured: p.type === 'solution',
  })),
};
fs.writeFileSync(path.join(ROOT, 'data/search-index.json'), JSON.stringify(searchIndex, null, 2));

console.log(`Applied ${selections.length} image selections.`);
