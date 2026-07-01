/**
 * Migrate Knowledge Center articles from legacy sciengtech.in (WordPress REST API)
 * into data/knowledge.json.
 *
 * Run: node scripts/migrate-knowledge.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'data/knowledge.json');
const WP_BASE = 'https://sciengtech.in';

function stripHtml(html) {
  return String(html ?? '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\[…\]/g, '…')
    .replace(/…$/g, '')
    .replace(/&#8211;/g, '–')
    .replace(/&#8217;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanWpBody(html) {
  let body = String(html ?? '');

  const widgetMatch = body.match(
    /elementor-widget-text-editor[\s\S]*?<div class="elementor-widget-container">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/i
  );
  if (widgetMatch) body = widgetMatch[1];

  body = body.replace(/<\/?(?:div|section)[^>]*(?:elementor|data-element)[^>]*>/gi, '');
  body = body.replace(/\sclass="[^"]*wp-block[^"]*"/gi, '');
  body = body.replace(/\sclass="has-text-align-center[^"]*"/gi, ' class="text-center"');
  body = body.replace(/\sstyle="[^"]*"/gi, '');
  body = body.replace(/\sdata-[^=]+="[^"]*"/gi, '');
  body = body.replace(/<p>\s*<\/p>/gi, '');
  body = body.replace(/<p class="wp-block-paragraph">/gi, '<p>');
  body = body.replace(/<h2 class="[^"]*">/gi, '<h2>');
  body = body.replace(/<span[^>]*><strong>/gi, '<strong>');
  body = body.replace(/<\/strong><\/span>/gi, '</strong>');

  const linkRewrites = [
    [/https?:\/\/sciengtech\.in\/contact-us\/?/gi, '/company/contact.html'],
    [/https?:\/\/sciengtech\.in\/knowledge-center\/?/gi, '/engineering/knowledge/index.html'],
    [/https?:\/\/sciengtech\.in\/engineering\/rfq\/?/gi, '/engineering/rfq.html'],
    [/https?:\/\/sciengtech\.in\/optics\/?/gi, '/components/optics.html'],
    [/https?:\/\/sciengtech\.in\/lasers\/?/gi, '/components/lasers.html'],
    [/https?:\/\/sciengtech\.in\/([^/"'\s]+)\/?/gi, (m, slug) => {
      if (['category', 'wp-content', 'wp-json', 'product', 'our-oem-products'].some((p) => slug.startsWith(p))) {
        return m;
      }
      return `/engineering/knowledge/${slug}.html`;
    }],
  ];
  for (const [pattern, replacement] of linkRewrites) {
    body = body.replace(pattern, replacement);
  }

  return body.trim();
}

async function fetchJson(url) {
  const res = await fetch(url, { headers: { Accept: 'application/json' } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json();
}

async function main() {
  console.log('Fetching legacy Knowledge Center posts from WordPress…');

  const [posts, categories, tags] = await Promise.all([
    fetchJson(`${WP_BASE}/wp-json/wp/v2/posts?per_page=100&status=publish`),
    fetchJson(`${WP_BASE}/wp-json/wp/v2/categories?per_page=100`),
    fetchJson(`${WP_BASE}/wp-json/wp/v2/tags?per_page=100`),
  ]);

  const catById = Object.fromEntries(categories.map((c) => [c.id, { slug: c.slug, label: c.name }]));
  const tagById = Object.fromEntries(tags.map((t) => [t.id, { slug: t.slug, label: t.name }]));

  const usedCategories = new Map();
  const articles = posts
    .filter((p) => p.status === 'publish')
    .map((post) => {
      const categoryIds = post.categories || [];
      const primaryCat = categoryIds.map((id) => catById[id]).find(Boolean);
      if (primaryCat) usedCategories.set(primaryCat.slug, primaryCat.label);

      const articleTags = (post.tags || [])
        .map((id) => tagById[id])
        .filter(Boolean)
        .map((t) => t.slug);

      const summary = stripHtml(post.excerpt?.rendered || '').replace(/…$/, '').trim();

      return {
        id: post.slug,
        title: stripHtml(post.title?.rendered || post.slug),
        summary: summary || stripHtml(post.content?.rendered || '').slice(0, 200),
        published: post.date?.slice(0, 10),
        modified: post.modified?.slice(0, 10),
        category: primaryCat?.slug || 'general',
        categoryLabel: primaryCat?.label || 'General',
        tags: articleTags,
        legacyUrl: post.link,
        legacyId: post.id,
        body: cleanWpBody(post.content?.rendered || ''),
      };
    })
    .sort((a, b) => (b.published || '').localeCompare(a.published || ''));

  const knowledge = {
    version: 1,
    updated: new Date().toISOString().slice(0, 10),
    source: `${WP_BASE}/knowledge-center/`,
    categories: [...usedCategories.entries()].map(([slug, label]) => ({ slug, label })),
    articles,
  };

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(knowledge, null, 2));
  console.log(`Wrote ${articles.length} articles to data/knowledge.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
