/**
 * Generate interactive assets/imported/old-site/review.html
 * Run: node scripts/generate-image-review.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..', 'assets', 'imported', 'old-site');
const raw = fs.readFileSync(path.join(root, 'manifest.json'), 'utf8').replace(/^\uFEFF/, '');
const manifest = JSON.parse(raw);
const galleries = fs
  .readdirSync(path.join(root, '_site-galleries'))
  .filter((f) => /\.(png|jpe?g|webp)$/i.test(f));

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const catalogData = JSON.stringify(
  manifest.map((m) => ({
    id: m.id,
    name: m.name,
    type: m.type,
    folder: m.folder,
    images: m.images.split(', ').filter(Boolean),
    legacyPages: m.legacyPages || '',
  }))
);

const galleryData = JSON.stringify(
  galleries.map((f) => ({
    file: f,
    path: `assets/imported/old-site/_site-galleries/${f}`,
  }))
);

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Image selection review | SciEngTech</title>
  <style>
    :root { --bg: #0E1118; --elevated: #161B26; --border: #2A3142; --accent: #E11D48; --muted: #64748B; }
    * { box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; background: var(--bg); color: #fff; margin: 0; padding-bottom: 120px; }
    .toolbar {
      position: sticky; top: 0; z-index: 100;
      background: rgba(14,17,24,0.97); backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border); padding: 14px 24px;
      display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: space-between;
    }
    .toolbar h1 { font-size: 1rem; color: var(--accent); margin: 0; }
    .toolbar-actions { display: flex; flex-wrap: wrap; gap: 8px; }
    .btn {
      padding: 8px 14px; border-radius: 6px; border: 1px solid var(--border);
      background: var(--elevated); color: #fff; font-size: 13px; font-weight: 600; cursor: pointer;
    }
    .btn:hover { border-color: var(--accent); }
    .btn-primary { background: var(--accent); border-color: var(--accent); }
    .progress { font-size: 13px; color: var(--muted); }
    .wrap { max-width: 1400px; margin: 0 auto; padding: 24px; }
    .lead { color: #94a3b8; margin-bottom: 24px; line-height: 1.5; }
    .product-block {
      background: var(--elevated); border: 1px solid var(--border); border-radius: 10px;
      padding: 20px; margin-bottom: 24px;
    }
    .product-block.is-done { border-color: rgba(34,197,94,0.4); }
    .product-head { display: flex; flex-wrap: wrap; gap: 12px; align-items: flex-start; justify-content: space-between; margin-bottom: 16px; }
    .product-title { font-size: 1rem; margin: 0 0 4px; }
    .tag { display: inline-block; background: rgba(225,29,72,0.15); color: var(--accent); padding: 2px 8px; border-radius: 4px; font-size: 10px; text-transform: uppercase; margin-right: 6px; }
    .pid { font-size: 12px; color: var(--muted); font-family: ui-monospace, monospace; }
    .decision-row { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
    .decision-row label {
      display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px;
      border: 1px solid var(--border); border-radius: 999px; font-size: 12px; cursor: pointer;
    }
    .decision-row input { accent-color: var(--accent); }
    .decision-row label:has(input:checked) { border-color: var(--accent); background: rgba(225,29,72,0.12); }
    .notes { width: 100%; max-width: 480px; margin-top: 10px; padding: 8px 10px; border-radius: 6px; border: 1px solid var(--border); background: var(--bg); color: #fff; font-size: 13px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 14px; }
    .img-card {
      background: #000; border: 2px solid var(--border); border-radius: 8px; overflow: hidden; cursor: pointer;
      transition: border-color 0.15s, transform 0.15s;
    }
    .img-card:hover { border-color: #94a3b8; }
    .img-card.is-selected { border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent); }
    .img-card img { width: 100%; aspect-ratio: 4/3; object-fit: contain; display: block; }
    .img-card figcaption { padding: 8px 10px; font-size: 11px; color: #94a3b8; background: var(--elevated); }
    .source { font-size: 11px; color: var(--muted); margin-top: 12px; word-break: break-all; }
    .export-panel {
      position: fixed; bottom: 0; left: 0; right: 0; z-index: 101;
      background: var(--elevated); border-top: 1px solid var(--border); padding: 16px 24px;
      display: none;
    }
    .export-panel.is-open { display: block; }
    .export-panel textarea {
      width: 100%; min-height: 140px; margin-top: 10px; padding: 12px;
      border-radius: 8px; border: 1px solid var(--border); background: var(--bg); color: #fff;
      font-family: ui-monospace, monospace; font-size: 12px;
    }
    .export-panel-head { display: flex; justify-content: space-between; align-items: center; gap: 12px; }
    .section-title { margin: 32px 0 16px; font-size: 1.1rem; border-bottom: 1px solid var(--border); padding-bottom: 8px; }
    .gallery-block .img-card { cursor: default; }
    .hint { font-size: 12px; color: var(--muted); margin-top: 8px; }
  </style>
</head>
<body>
  <div class="toolbar">
    <div>
      <h1>Image selection — paste results to Cursor</h1>
      <p class="progress" id="progressText">0 / 0 reviewed</p>
    </div>
    <div class="toolbar-actions">
      <button type="button" class="btn" id="btnSave">Save locally</button>
      <button type="button" class="btn btn-primary" id="btnExport">Copy for Cursor</button>
      <button type="button" class="btn" id="btnDownload">Download JSON</button>
      <button type="button" class="btn" id="btnClear">Clear all</button>
    </div>
  </div>

  <div class="wrap">
    <p class="lead">
      For each product: pick <strong>Use</strong> (keep image), <strong>Revamp</strong> (needs new image), or <strong>Skip</strong> (placeholder).
      Click an image to select it as the primary. Add notes if needed. Then click <strong>Copy for Cursor</strong> and paste into chat.
    </p>
    <div id="products"></div>

    <h2 class="section-title">Site gallery extras (unassigned)</h2>
    <p class="hint">Optional — note in chat if any gallery image should map to a product.</p>
    <div class="grid" id="galleries"></div>
  </div>

  <div class="export-panel" id="exportPanel">
    <div class="export-panel-head">
      <strong>Copy this and paste into Cursor chat:</strong>
      <button type="button" class="btn" id="btnCloseExport">Close</button>
    </div>
    <textarea id="exportText" readonly></textarea>
    <button type="button" class="btn btn-primary" id="btnCopyAgain" style="margin-top:8px">Copy again</button>
  </div>

  <script>
    const CATALOG = ${catalogData};
    const GALLERIES = ${galleryData};
    const STORAGE_KEY = 'sciengtech-image-selections-v1';

    const state = loadState();

    function loadState() {
      try {
        const s = localStorage.getItem(STORAGE_KEY);
        if (s) return JSON.parse(s);
      } catch (e) {}
      return {};
    }

    function saveState() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      updateProgress();
    }

    function defaultItem(id) {
      return { decision: '', image: '', notes: '' };
    }

    function getItem(id) {
      if (!state[id]) state[id] = defaultItem(id);
      return state[id];
    }

    function render() {
      const root = document.getElementById('products');
      root.innerHTML = CATALOG.map(function (p) {
        const item = getItem(p.id);
        const imgs = p.images.map(function (file) {
          const src = p.folder + '/' + file;
          const sel = item.image === file ? ' is-selected' : '';
          return '<figure class="img-card' + sel + '" data-id="' + p.id + '" data-file="' + file + '" tabindex="0" role="button" aria-label="Select ' + file + '">' +
            '<img src="/' + src + '" alt="" loading="lazy" />' +
            '<figcaption>' + file + '</figcaption></figure>';
        }).join('');

        const done = item.decision ? ' is-done' : '';
        return '<article class="product-block' + done + '" data-product="' + p.id + '">' +
          '<div class="product-head">' +
            '<div><span class="tag">' + p.type + '</span>' +
            '<h2 class="product-title">' + escapeHtml(p.name) + '</h2>' +
            '<div class="pid">' + p.id + '</div></div>' +
            '<div class="decision-row">' +
              decisionLabel(p.id, 'use', 'Use as-is', item.decision) +
              decisionLabel(p.id, 'revamp', 'Revamp', item.decision) +
              decisionLabel(p.id, 'skip', 'Skip', item.decision) +
            '</div>' +
          '</div>' +
          '<div class="grid">' + imgs + '</div>' +
          '<input type="text" class="notes" placeholder="Notes (optional) — e.g. crop, darker background, wrong product…" ' +
            'data-notes="' + p.id + '" value="' + escapeAttr(item.notes) + '" />' +
          '<p class="source">Legacy: ' + escapeHtml(p.legacyPages || 'media search') + '</p>' +
        '</article>';
      }).join('');

      document.getElementById('galleries').innerHTML = GALLERIES.map(function (g) {
        return '<figure class="img-card gallery-block"><img src="/' + g.path + '" alt="" loading="lazy" /><figcaption>' + g.file + '</figcaption></figure>';
      }).join('');

      bindEvents();
      updateProgress();
    }

    function decisionLabel(id, value, label, current) {
      const checked = current === value ? ' checked' : '';
      return '<label><input type="radio" name="decision-' + id + '" value="' + value + '"' + checked + ' /> ' + label + '</label>';
    }

    function escapeHtml(s) {
      return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    }
    function escapeAttr(s) {
      return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
    }

    function bindEvents() {
      document.querySelectorAll('.img-card[data-id]').forEach(function (card) {
        card.addEventListener('click', function () {
          const id = card.dataset.id;
          const file = card.dataset.file;
          const item = getItem(id);
          item.image = item.image === file ? '' : file;
          if (item.image && !item.decision) item.decision = 'use';
          saveState();
          render();
        });
      });

      document.querySelectorAll('.decision-row input[type=radio]').forEach(function (radio) {
        radio.addEventListener('change', function () {
          const id = radio.name.replace('decision-', '');
          getItem(id).decision = radio.value;
          saveState();
          render();
        });
      });

      document.querySelectorAll('.notes').forEach(function (input) {
        input.addEventListener('input', function () {
          getItem(input.dataset.notes).notes = input.value;
          saveState();
        });
      });
    }

    function updateProgress() {
      const reviewed = CATALOG.filter(function (p) { return getItem(p.id).decision; }).length;
      document.getElementById('progressText').textContent = reviewed + ' / ' + CATALOG.length + ' reviewed';
    }

    function buildExport() {
      const lines = ['## Image selections for SciEngTech catalog', '', 'Paste this block to Cursor to apply images.', ''];
      const json = { exportedAt: new Date().toISOString(), selections: [] };

      CATALOG.forEach(function (p) {
        const item = getItem(p.id);
        if (!item.decision) return;
        const entry = {
          id: p.id,
          name: p.name,
          type: p.type,
          decision: item.decision,
          image: item.image || null,
          path: item.image ? p.folder + '/' + item.image : null,
          notes: item.notes || ''
        };
        json.selections.push(entry);
        lines.push('- **' + p.id + '** (' + p.type + '): **' + item.decision.toUpperCase() + '**' +
          (item.image ? ' → \`' + item.image + '\`' : ' → (no image selected)') +
          (item.notes ? ' — _' + item.notes + '_' : ''));
      });

      const pending = CATALOG.filter(function (p) { return !getItem(p.id).decision; });
      if (pending.length) {
        lines.push('', '### Not yet reviewed (' + pending.length + ')', pending.map(function (p) { return '- ' + p.id; }).join('\\n'));
      }

      lines.push('', '### JSON', '\`\`\`json', JSON.stringify(json, null, 2), '\`\`\`');
      return { text: lines.join('\\n'), json: json };
    }

    document.getElementById('btnSave').addEventListener('click', function () {
      saveState();
      alert('Selections saved in this browser (localStorage).');
    });

    document.getElementById('btnExport').addEventListener('click', function () {
      const out = buildExport();
      const panel = document.getElementById('exportPanel');
      const ta = document.getElementById('exportText');
      ta.value = out.text;
      panel.classList.add('is-open');
      ta.select();
      navigator.clipboard.writeText(out.text).then(function () {
        alert('Copied to clipboard! Paste into Cursor chat.');
      }).catch(function () {
        alert('Select the text below and copy manually (Ctrl+C).');
      });
    });

    document.getElementById('btnCopyAgain').addEventListener('click', function () {
      const ta = document.getElementById('exportText');
      ta.select();
      navigator.clipboard.writeText(ta.value);
    });

    document.getElementById('btnCloseExport').addEventListener('click', function () {
      document.getElementById('exportPanel').classList.remove('is-open');
    });

    document.getElementById('btnDownload').addEventListener('click', function () {
      const out = buildExport();
      const blob = new Blob([JSON.stringify(out.json, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'image-selections-' + new Date().toISOString().slice(0, 10) + '.json';
      a.click();
    });

    document.getElementById('btnClear').addEventListener('click', function () {
      if (confirm('Clear all selections?')) {
        Object.keys(state).forEach(function (k) { delete state[k]; });
        saveState();
        render();
      }
    });

    render();
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(root, 'review.html'), html);
console.log('Wrote interactive review.html');
