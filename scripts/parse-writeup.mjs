/**
 * Parse Webpage_Writeup docx raw text into structured product fields.
 */

const SECTION_HEADERS = new Set([
  'features',
  'key features',
  'applications',
  'technical specifications',
  'available sizes',
  'available size',
  'our specification',
  'overview',
  'kit includes',
  'mounting options',
  'compatible components',
  'types',
  'types:',
  'mechanical & mounting details',
  'mechanical and mounting details',
]);

const KIT_INCLUDE_RE =
  /^(kit includes|complete, ready-to-use|complete photonics kit|supplied with|includes extensive manual|includes all hardware|comprehensive instructional manual)/i;

const DEMONSTRATES_RE =
  /^(purpose-built|complete, ready|concept-driven|demonstrat|enables |allows |study of|precision measurement|material characterization|thermal expansion|eavesdropp|polarization-based|user-friendly|integrated optical|modular mechanical|compact and laboratory)/i;

export function parseTitleAliases(titleLine) {
  const line = String(titleLine || '').trim();
  const paren = line.match(/^(.+?)\(([^)]+)\)\s*$/);
  if (paren) {
    return {
      name: paren[1].trim(),
      aliases: paren[2]
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
    };
  }
  return { name: line, aliases: [] };
}

function isSectionHeader(line) {
  const norm = line.trim().replace(/:$/, '').toLowerCase();
  return SECTION_HEADERS.has(norm);
}

function splitSections(lines) {
  const sections = { _preamble: [] };
  let current = '_preamble';

  for (const line of lines) {
    if (isSectionHeader(line)) {
      const key = line
        .trim()
        .replace(/:$/, '')
        .toLowerCase()
        .replace(/\s+/g, ' ')
        .replace(/ & /g, ' and ');
      current = key;
      if (!sections[current]) sections[current] = [];
      continue;
    }
    if (!sections[current]) sections[current] = [];
    sections[current].push(line);
  }
  return sections;
}

function extractProductCode(text) {
  const m = text.match(/Product Code:\s*([A-Z0-9-]+)/i);
  return m ? m[1].trim() : null;
}

function extractCustomNote(text) {
  const m = text.match(/Note:\s*(.+?)(?:\n\n|$)/is);
  return m ? m[1].trim() : null;
}

function bulletsFromSection(sectionLines) {
  if (!sectionLines?.length) return [];
  return sectionLines
    .map((l) => l.replace(/^[•·\-]\s*/, '').trim())
    .filter((l) => l.length > 2 && l.length < 300 && !/^product code:/i.test(l));
}

function parseOverview(preamble, sections, isSolution) {
  if (isSolution) return [];
  const overviewLines = sections.overview?.length ? sections.overview : preamble;
  const paras = [];
  let buf = [];
  for (const line of overviewLines) {
    if (/^product code:/i.test(line)) break;
    if (/^note:/i.test(line)) break;
    if (/^type:/i.test(line) && line.length < 120) break;
    if (/^metric type:/i.test(line)) break;
    if (/^sr no\.?$/i.test(line)) break;
    if (isSectionHeader(line)) break;
    buf.push(line);
    if (line.endsWith('.') && buf.join(' ').length > 80) {
      paras.push(buf.join(' '));
      buf = [];
    }
  }
  if (buf.length) paras.push(buf.join(' '));
  return paras.filter((p) => p.length > 20 && !/^features$/i.test(p));
}

function parseTechSpecTable(sectionLines) {
  if (!sectionLines?.length) return [];
  const specs = [];
  let i = 0;
  while (i < sectionLines.length) {
    const line = sectionLines[i];
    if (/^parameter$/i.test(line) && sectionLines[i + 1]?.toLowerCase() === 'specifications') {
      i += 2;
      continue;
    }
    const next = sectionLines[i + 1];
    if (next && !/^parameter$/i.test(next) && line.length < 60 && next.length < 200) {
      if (!/^(features|applications|product code)/i.test(line)) {
        specs.push({ label: line, value: next });
        i += 2;
        continue;
      }
    }
    i += 1;
  }
  return specs;
}

function parseKeyValueBlock(sectionLines) {
  if (!sectionLines?.length) return [];
  const specs = [];
  for (let i = 0; i < sectionLines.length; i++) {
    const line = sectionLines[i];
    if (line.endsWith(':') && line.length < 50) {
      const label = line.slice(0, -1).trim();
      const value = sectionLines[i + 1];
      if (value && !value.endsWith(':')) {
        specs.push({ label, value });
        i += 1;
      }
    } else if (line.includes(':') && line.length < 120) {
      const idx = line.indexOf(':');
      specs.push({ label: line.slice(0, idx).trim(), value: line.slice(idx + 1).trim() });
    }
  }
  return specs;
}

function parseVariantTables(lines) {
  const variants = [];
  const text = lines.join('\n');

  const tableStarts = [];
  for (let i = 0; i < lines.length; i++) {
    if (/^sr\s*no\.?$/i.test(lines[i])) tableStarts.push(i);
  }

  for (const start of tableStarts) {
    let i = start + 1;
    const headers = [];
    while (i < lines.length && headers.length < 6) {
      const l = lines[i];
      if (/^\d+$/.test(l)) break;
      if (/^product code:/i.test(l)) break;
      if (/^note:/i.test(l)) break;
      if (isSectionHeader(l)) break;
      headers.push(l);
      i += 1;
    }

    const colCount = headers.length;
    if (colCount < 2) continue;

    while (i < lines.length) {
      if (!/^\d+$/.test(lines[i])) break;
      const sr = parseInt(lines[i], 10);
      const cells = [];
      i += 1;
      for (let c = 0; c < colCount && i < lines.length; c++, i++) {
        cells.push(lines[i]);
      }
      if (cells.length < colCount) break;

      const row = { sr };
      headers.forEach((h, idx) => {
        const key = h
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '_')
          .replace(/^_|_$/g, '');
        row[key || `col_${idx}`] = cells[idx];
      });
      if (row.product_code || row.set_code) {
        row.sku = (row.product_code || row.set_code || '').replace(/\s+/g, '');
      }
      variants.push(row);
    }
  }

  if (variants.length) return variants;

  // Diode laser style inline table
  const wlIdx = lines.findIndex((l) => /wavelength.*diode laser/i.test(l));
  if (wlIdx >= 0 && lines[wlIdx + 1]?.toLowerCase().includes('power')) {
    let i = wlIdx + 2;
    while (i + 2 < lines.length) {
      if (!/^\d+$/.test(lines[i])) break;
      variants.push({
        sr: parseInt(lines[i], 10),
        wavelength_nm: lines[i + 1],
        power_mw: lines[i + 2],
        sku: lines[i + 3]?.startsWith('SET-') ? lines[i + 3] : undefined,
      });
      i += 4;
    }
  }

  return variants;
}

function parseConfigurationOptions(lines, categorySlug) {
  const options = {};
  for (const line of lines) {
    const m = line.match(/^(Type|Metric Type|Hex Size \(mm\)|Thickness \(mm\)|Bolt Length \(mm\)):\s*(.+)$/i);
    if (m) {
      const key = m[1]
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '_')
        .replace(/^_|_$/g, '');
      options[key] = m[2]
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
    }
  }
  if (Object.keys(options).length && categorySlug === 'hardware') return options;
  if (Object.keys(options).length >= 2) return options;
  return Object.keys(options).length === 1 && categorySlug === 'hardware' ? options : null;
}

function parseOpticsRfq(text, categorySlug) {
  if (categorySlug !== 'optics') return null;
  const sections = [];
  const types = [
    {
      id: 'mirrors',
      title: 'Mirrors',
      marker: /^mirrors$/im,
      paramLine:
        /Diameter, Thickness, Material, Wavelength range or designed wavelength, Back surface, AOI, Type of coating, and reflectance\/transmittance \(R\/T\) ratio\./i,
    },
    { id: 'lens', title: 'Lens', marker: /^lens$/im },
    { id: 'beamsplitter', title: 'Beamsplitter', marker: /^beamsplitter$/im },
    { id: 'wave-plate', title: 'Wave Plate', marker: /^wave plate$/im },
  ];

  for (const t of types) {
    const m = text.match(t.marker);
    if (!m) continue;
    const start = m.index + m[0].length;
    const rest = text.slice(start);
    const nextType = types.find((o) => o.id !== t.id && rest.match(o.marker));
    const chunk = nextType
      ? rest.slice(0, rest.search(nextType.marker))
      : rest.slice(0, 500);
    const lines = chunk
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean);

    let params = [];
    if (t.paramLine) {
      const paramMatch = chunk.match(t.paramLine);
      if (paramMatch) {
        params = paramMatch[0]
          .split(/,\s*(?:and\s+)?/)
          .map((s) => s.trim())
          .filter((s) => s.length > 2);
      }
    }
    if (!params.length) {
      const prompt = lines[0] || '';
      params = prompt
        .replace(/^to help us recommend[^:]*:?\s*/i, '')
        .split(/,\s*(?:and\s+)?/)
        .map((s) => s.trim())
        .filter((s) => s.length > 2 && !/^kindly share/i.test(s));
    }
    if (params.length) sections.push({ id: t.id, title: t.title, parameters: params });
  }
  return sections.length ? sections : null;
}

function parseSolutionContent(lines) {
  const bodyLines = lines.slice(1).filter((l) => !/^product code:/i.test(l));
  const tagline =
    bodyLines.find((l) => /^designed for educational/i.test(l)) ||
    bodyLines.find((l) => /^purpose-built for education/i.test(l)) ||
    null;

  const demonstrates = [];
  const kitIncludes = [];
  const capabilities = [];

  for (const line of bodyLines) {
    if (/^product code:/i.test(line)) continue;
    if (KIT_INCLUDE_RE.test(line)) {
      kitIncludes.push(line.replace(/^[•·\-]\s*/, ''));
    } else if (DEMONSTRATES_RE.test(line)) {
      demonstrates.push(line.replace(/^[•·\-]\s*/, ''));
    } else if (/^(compact design|made in india|proudly designed|kit contains metric)/i.test(line)) {
      capabilities.push(line);
    } else if (line.length > 30 && line.length < 220 && !/^sciengtech/i.test(line)) {
      if (/manual|hardware|components|supplied|includes all/i.test(line)) {
        kitIncludes.push(line);
      } else if (/laser|photodiode|fiber|usb|photon|wavelength|ppktp/i.test(line)) {
        capabilities.push(line);
      } else if (demonstrates.length < 12) {
        demonstrates.push(line);
      }
    }
  }

  return {
    tagline,
    demonstrates: [...new Set(demonstrates)],
    kitIncludes: [...new Set(kitIncludes)],
    capabilities: [...new Set(capabilities)],
  };
}

export function detectPageTemplate(parsed, { isSolution, categorySlug }) {
  if (isSolution) return 'solution';
  if (parsed.rfqSections?.length) return 'configurable';
  if (parsed.variants?.length) return 'variant-catalog';
  if (parsed.configurationOptions && Object.keys(parsed.configurationOptions).length) {
    return 'configurable';
  }
  return 'component';
}

export function parseWriteupBody(text, { isSolution = false, categorySlug = '' } = {}) {
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  const { name, aliases } = parseTitleAliases(lines[0] || '');
  const sections = splitSections(lines.slice(1));

  const features = [
    ...bulletsFromSection(sections.features),
    ...bulletsFromSection(sections['key features']),
  ];
  const applications = bulletsFromSection(sections.applications);
  const overview = parseOverview(sections._preamble, sections, isSolution);
  const techSpecs = parseTechSpecTable(sections['technical specifications']);
  const keyValueSpecs = parseKeyValueBlock(sections['our specification']);
  const variants = parseVariantTables(lines);
  const configurationOptions = parseConfigurationOptions(lines, categorySlug);
  const rfqSections = parseOpticsRfq(text, categorySlug);
  const productCode = extractProductCode(text);
  const customNote = extractCustomNote(text);
  const solutionContent = isSolution ? parseSolutionContent(lines) : null;

  const parsed = {
    name,
    aliases,
    overview,
    features,
    applications,
    techSpecs,
    keyValueSpecs,
    variants,
    configurationOptions,
    rfqSections,
    solutionContent,
    productCode,
    customNote,
  };

  parsed.pageTemplate = detectPageTemplate(parsed, { isSolution, categorySlug });
  return parsed;
}

export function buildSpecHighlight(parsed, sku) {
  if (parsed.pageTemplate === 'solution') {
    const line =
      parsed.solutionContent?.tagline ||
      parsed.solutionContent?.demonstrates?.[0] ||
      parsed.overview[0];
    return line ? line.slice(0, 200) : sku || 'Educational kit · Request Technical Quote';
  }
  if (parsed.pageTemplate === 'variant-catalog' && parsed.variants.length) {
    return `${parsed.variants.length} configurations available · SKU from ${parsed.variants[0].sku || sku || 'catalog'}`;
  }
  if (parsed.pageTemplate === 'configurable') {
    return 'Configure options · Request Technical Quote';
  }
  if (parsed.features.length) {
    return parsed.features
      .slice(0, 2)
      .join(' · ')
      .slice(0, 200);
  }
  if (parsed.overview[0]) return parsed.overview[0].slice(0, 200);
  return sku || 'RFQ · Full specification on request';
}

export function buildLegacySpecs(parsed) {
  const specs = [];
  if (parsed.techSpecs.length) return parsed.techSpecs;
  if (parsed.keyValueSpecs.length) return parsed.keyValueSpecs;
  parsed.features.slice(0, 8).forEach((f) => specs.push({ label: 'Feature', value: f }));
  return specs.length ? specs : [{ label: 'Procurement', value: 'Request Technical Quote' }];
}
